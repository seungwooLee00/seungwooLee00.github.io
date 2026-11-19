/* Corner web and a chip spider hanging from it (decoration only).

   Needs GSAP + ScrollTrigger (loaded before this file).

   - On load: the web is spun, then the spider drops from its hub.
   - Scrolling: the spider pays out silk and comes straight down the right
     margin, so it stays in view. It never leaves the margin or crosses the text.
     ScrollTrigger's scrub smooths the scroll, so it trails a little behind.
   - Mouse: the eyes follow the pointer; pointing at the spider makes it hop.
   - Shown only when the right margin is wide enough; reduced-motion users get a
     still spider under the web. */
(function () {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";
  var W = 320, H = 280;            // web box at the top-right corner
  var CX = 238, CY = 70;           // web hub inside that box
  var SCALE = 1.2;                 // spider size
  var HALF_W = 17 * SCALE;         // half the spider's width, legs included
  var HANG = 150;                  // line length below the hub before any scrolling
  var GAP = 16;                    // minimum space between the text column and the spider

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var seed = 11;
  function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
  function el(tag, attrs) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }
  function f(v) { return v.toFixed(1); }

  /* ---------------- the web ---------------- */

  function buildWeb() {
    function pt(a, r) { return [CX + Math.cos(a) * r, CY + Math.sin(a) * r]; }
    var svg = el("svg", { class: "web", viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "xMaxYMin meet" });
    var n = 12, radials = [], i, k = 0;
    for (i = 0; i < n; i++) {
      var a = (i / n) * Math.PI * 2 + (rnd() - 0.5) * 0.28;
      var dx = Math.cos(a), dy = Math.sin(a), edge = Infinity;
      if (dx > 0) edge = Math.min(edge, (W - CX) / dx);
      if (dx < 0) edge = Math.min(edge, -CX / dx);
      if (dy > 0) edge = Math.min(edge, (H - CY) / dy);
      if (dy < 0) edge = Math.min(edge, -CY / dy);
      radials.push({ a: a, len: edge < 150 ? edge + 12 : 135 + rnd() * 45 });
    }
    radials.forEach(function (rd) {
      var p = pt(rd.a, rd.len);
      svg.appendChild(el("path", {
        class: "silk radial", pathLength: "1",
        d: "M" + f(CX) + " " + f(CY) + "L" + f(p[0]) + " " + f(p[1]),
        style: "animation-delay:" + (k++ * 45) + "ms"
      }));
    });
    var rings = [];
    for (var r = 150; r >= 12; r -= 9 + rnd() * 3) rings.push(r);
    rings.forEach(function (rr, j) {
      var d = "";
      for (var i = 0; i < n; i++) {
        var A = radials[i], B = radials[(i + 1) % n];
        if (A.len < rr || B.len < rr) continue;
        var a1 = A.a, a2 = B.a;
        if (a2 < a1) a2 += Math.PI * 2;
        var p1 = pt(a1, rr), p2 = pt(a2, rr), c = pt((a1 + a2) / 2, rr * 0.9);
        d += "M" + f(p1[0]) + " " + f(p1[1]) + "Q" + f(c[0]) + " " + f(c[1]) + " " + f(p2[0]) + " " + f(p2[1]);
      }
      if (d) svg.appendChild(el("path", {
        class: "silk ring", pathLength: "1", d: d,
        style: "animation-delay:" + (560 + j * 55) + "ms"
      }));
    });
    return svg;
  }

  /* ---------------- the chip spider ---------------- */

  function buildBug() {
    var bug = el("g", { class: "bug" });
    var pose = el("g", { class: "pose" });
    var body = el("g", { transform: "scale(" + SCALE + ") translate(0 13)" });
    body.appendChild(el("circle", { class: "hit", cx: "0", cy: "3", r: "17" }));
    var legs = el("g", { class: "legs" });
    ["M-6.5 -4.5L-11 -8L-15 -5", "M-7 -1L-12.5 -1.5L-16.5 2",
     "M-7 2.5L-12 5L-14.5 9.5", "M-6.5 6L-9.5 10L-10 14.5"].forEach(function (d) {
      legs.appendChild(el("path", { d: d }));
      legs.appendChild(el("path", { d: d, transform: "scale(-1 1)" }));
    });
    body.appendChild(legs);
    body.appendChild(el("rect", { class: "chip", x: "-7.5", y: "-7", width: "15", height: "15", rx: "3" }));
    body.appendChild(el("rect", { class: "die", x: "-4", y: "-3.2", width: "8", height: "8", rx: "1.2" }));
    body.appendChild(el("circle", { class: "pin1", cx: "-5.4", cy: "-4.9", r: "0.85" }));
    body.appendChild(el("rect", { class: "chip", x: "-4.5", y: "-13", width: "9", height: "7.5", rx: "3" }));
    var eyes = el("g", { class: "eyes" });
    eyes.appendChild(el("circle", { class: "eye", cx: "-1.8", cy: "-9.6", r: "1.05" }));
    eyes.appendChild(el("circle", { class: "eye", cx: "1.8", cy: "-9.6", r: "1.05" }));
    body.appendChild(eyes);
    pose.appendChild(body);
    bug.appendChild(pose);
    return { bug: bug, pose: pose, eyes: eyes };
  }

  /* ---------------- set-up ---------------- */

  function init() {
    var wrap = document.createElement("div");
    wrap.className = "cobweb" + (reduce ? " still" : "");
    wrap.setAttribute("aria-hidden", "true");
    var webSvg = buildWeb();
    wrap.appendChild(webSvg);
    document.body.appendChild(wrap);

    var gsap = window.gsap, ST = window.ScrollTrigger;
    if (!gsap || !ST) return;                      // web only
    gsap.registerPlugin(ST);

    var layer = el("svg", { class: "spider-layer", "aria-hidden": "true", focusable: "false" });
    var rope = el("path", { class: "rope" });
    var parts = buildBug();
    layer.appendChild(rope);
    layer.appendChild(parts.bug);
    document.body.appendChild(layer);

    var intro = { k: reduce ? 1 : 0 };            // 0 → 1 while the spider drops from the web
    var scroll = { s: 0 };                        // smoothed scroll position
    var hub = null, enabled = false, maxScroll = 0;
    var current = { x: 0, y: 0 };

    // The spider hangs straight under the hub; show it only if that line is
    // clear of the text column.
    function layout() {
      var r = webSvg.getBoundingClientRect();
      var main = document.querySelector("main") || document.querySelector(".article");
      var textRight = main ? main.getBoundingClientRect().right : 0;
      var head = document.querySelector(".head-row, .topbar");
      if (head) textRight = Math.max(textRight, head.getBoundingClientRect().right);
      hub = { x: r.left + window.scrollX + r.width * CX / W, y: r.top + window.scrollY + r.height * CY / H };
      enabled = r.width > 0 && (hub.x - window.scrollX) - HALF_W >= textRight + GAP;
      layer.style.display = enabled ? "" : "none";
      maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    }

    function render() {
      if (!enabled || !hub) return;
      var follow = reduce ? 0 : scroll.s;
      var x = hub.x, y = hub.y + HANG * intro.k + follow;
      current.x = x; current.y = y;
      rope.setAttribute("d", intro.k > 0.02 ? "M" + f(hub.x) + " " + f(hub.y) + "L" + f(x) + " " + f(y) : "");
      parts.bug.setAttribute("transform", "translate(" + f(x) + " " + f(y) + ")");
      // legs move while it is catching up with the scroll
      parts.bug.classList.toggle("moving", !reduce && Math.abs(window.scrollY - scroll.s) > 25);
    }

    ST.addEventListener("refreshInit", layout);
    ST.addEventListener("refresh", render);
    layout();

    if (reduce) { render(); return; }

    // Drop from the web after it has been spun (the web draws in about 1.5 s).
    gsap.to(intro, { k: 1, duration: 1.1, delay: 1.5, ease: "bounce.out", onUpdate: render });

    // Follow the scroll straight down, a little behind.
    gsap.to(scroll, {
      s: function () { return maxScroll; },
      ease: "none",
      onUpdate: render,
      scrollTrigger: { start: 0, end: function () { return maxScroll; }, scrub: 0.6, invalidateOnRefresh: true }
    });

    // Eyes follow the pointer.
    var eyeX = gsap.quickTo(parts.eyes, "x", { duration: 0.25, ease: "power2.out" });
    var eyeY = gsap.quickTo(parts.eyes, "y", { duration: 0.25, ease: "power2.out" });
    window.addEventListener("pointermove", function (e) {
      if (!enabled) return;
      var dx = e.pageX - current.x, dy = e.pageY - (current.y + 10);
      var d = Math.hypot(dx, dy) || 1;
      eyeX(dx / d * 0.9); eyeY(dy / d * 0.7);
    }, { passive: true });

    // Pointing at the spider makes it hop.
    var hopping = false;
    function hop() {
      if (hopping) return;
      hopping = true;
      parts.bug.classList.add("moving");
      gsap.timeline({ onComplete: function () { hopping = false; parts.bug.classList.remove("moving"); } })
        .to(parts.pose, { y: -18, duration: 0.18, ease: "power2.out" })
        .to(parts.pose, { y: 0, duration: 0.55, ease: "bounce.out" });
    }
    parts.bug.addEventListener("pointerenter", hop);
    parts.bug.addEventListener("pointerdown", hop);

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ST.refresh(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
