---
layout: about
title: about
permalink: /
subtitle: M.S. student, Computer Science and Engineering, <a href='https://www.sogang.ac.kr/'>Sogang University</a> · <a href='https://aisys.sogang.ac.kr'>High-Performance AI Systems Lab</a>

profile:
  align: right
  image: # add a photo: put it in assets/img/ and write its file name here, e.g. prof_pic.jpg
  image_circular: false
  more_info: >
    <p>Seoul, South Korea</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
---

I work on **software–hardware co-design**. I look for where a workload loses time on a specific piece of hardware, then reshape the algorithm, data layout, and kernels to fit that hardware. I am an M.S. student at Sogang University, advised by Prof. Youngmin Yi.

My main project is **cuPF**, GPU power-flow computation for power-grid analysis. Each Newton–Raphson step builds a sparse Jacobian from the grid and solves a linear system with it, and both steps map poorly to a GPU as written. I rebuilt Jacobian assembly around grid edges so that every thread gets the same amount of work, and ran the heavy arithmetic in single precision while keeping convergence checks in double precision. For my master's thesis I am designing GPU sparse LU kernels for the many small dense blocks these Jacobians produce.

The same approach runs through my other work:

- **Microcontrollers:** early-exit neural networks searched under a 1 MB SRAM / 2 MB flash budget ([KCC 2025 Best Paper Award](/projects/eenas/)).
- **NPUs:** Gemma-4 decoder kernels on the FuriosaAI RNGD, redesigned around weight streaming ([competition](/projects/furiosa/)).
- **FPGAs:** INT8 accelerators on a Zynq UltraScale+ that I built for the lab course I taught ([lab series](/projects/zynq/)).
- **Operating systems:** a Linux device driver and system call driven from an Android app ([course project](/projects/embedded-aes/)).
