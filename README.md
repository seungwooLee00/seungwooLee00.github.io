# seungwooLee00.github.io (plain HTML)

빌드 단계 없는 정적 사이트. 파일을 고치면 그대로 GitHub Pages에 올라간다.

- `index.html` 홈 (소개, 프로젝트, 논문, 학력, 수상)
- `projects/*.html` 프로젝트 상세 페이지. 영어 본문(`<div lang="en">`)과 한국어 본문(`<div lang="ko">`)이 한 파일에 같이 있다
- `style.css` 공통 스타일. 색은 포트폴리오 덱과 같음: 제목 #8C1919, 본문 #1A1A1A, 보조 #404040, 강조 수치 #0070C0 (`<span class="num">`)
- `lang.js` 한/영 전환. 본문 안에서 `lang="en"` / `lang="ko"`가 붙은 요소는 해당 언어일 때만 보인다.
  처음 보이는 언어: 주소 끝 `#ko`·`#en` → 방문자가 전에 고른 언어 → 브라우저 언어 순서
- `spider.js` 오른쪽 위 거미줄과 chip 거미. GSAP·ScrollTrigger(jsDelivr에서 불러옴)로 접속 시 내려오고, 스크롤하면 오른쪽 여백에서 수직으로 따라 내려옴. 본문 옆 여백이 좁은 화면(1150px 이하)에서는 숨김
- `assets/` CV PDF와 그림
- `.nojekyll` GitHub Pages가 Jekyll로 다시 빌드하지 않게 함

미리보기: `index.html`을 브라우저로 열고, 고친 뒤 새로고침.
링크는 모두 상대 경로라 로컬(file://)과 github.io에서 똑같이 동작한다.
