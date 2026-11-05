---
layout: page
title: Michelin in TV — a webOS TV app
description: Connected Platform course team project (2024) — TV front end and test process
permalink: /projects/webos/
importance: 4
category: systems
github: https://github.com/KangNaewon/connected-platform
---

A team project for Connected Platform Theory and Practice (fall 2024): a webOS TV app that recommends restaurants and plays their video content, with a backend and a data scraper.

- **My part, the TV front end:** built with Enact (React) and the Sandstone UI library: search, profile selection, restaurant pages, and a dashboard that charts the TV's CPU and memory use. I mocked the REST API and the webOS system services so the UI could be developed and tested without the TV or the backend.
- **Testing:** the course followed a full software-engineering process (use cases, architecture document, test plan). Each API endpoint had Postman unit tests, and the TV UI had system tests written from the use cases.

Code: [GitHub](https://github.com/KangNaewon/connected-platform)
