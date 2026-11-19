/* Language switch (English / 한국어).
   Order: #ko or #en in the address > the visitor's last choice > browser language.
   Every element marked lang="en" or lang="ko" inside <body> is shown only in its language. */
(function () {
  var KEY = "site-lang";
  var root = document.documentElement;

  function fromHash() {
    var h = (location.hash || "").slice(1);
    return h === "ko" || h === "en" ? h : null;
  }
  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function store(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
  }
  function fromBrowser() {
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    return /^ko/i.test(nav) ? "ko" : "en";
  }

  var lang = fromHash() || saved();
  if (lang !== "ko" && lang !== "en") lang = fromBrowser();

  function apply(v) {
    lang = v;
    root.setAttribute("data-lang", v);
    root.setAttribute("lang", v);
    var t = document.querySelector("title");
    if (t && t.getAttribute("data-" + v)) document.title = t.getAttribute("data-" + v);
    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", String(buttons[i].getAttribute("data-set-lang") === v));
    }
  }

  apply(lang);

  document.addEventListener("DOMContentLoaded", function () {
    apply(lang);

    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        var v = this.getAttribute("data-set-lang");
        store(v);
        apply(v);
        try { history.replaceState(null, "", "#" + v); } catch (e) {}
      });
    }

    // Carry the language to the next page, even where the browser keeps no storage.
    var links = document.querySelectorAll('a[href$=".html"]');
    for (var j = 0; j < links.length; j++) {
      links[j].addEventListener("click", function () {
        this.setAttribute("href", this.getAttribute("href").split("#")[0] + "#" + lang);
      });
    }
  });

  window.addEventListener("hashchange", function () {
    var h = fromHash();
    if (h && h !== lang) apply(h);
  });
})();
