---
layout: about
title: about
permalink: /
subtitle: M.S. student, Computer Science and Engineering, <a href='https://www.sogang.ac.kr/'>Sogang University</a> · <a href='https://aisys.sogang.ac.kr'>High-Performance AI Systems Lab</a>

profile:
  align: right
  image:
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

I work on **software–hardware co-design**: finding where a workload and the hardware it runs on fit poorly, then changing the algorithm, the data layout, or the hardware itself until they fit. I am an M.S. student at Sogang University, advised by Prof. Youngmin Yi.

My main project is **[cuPF](/projects/cupf/)**, a batched GPU power-flow solver. Power-grid matrices break into many small dense blocks that leave general GPU sparse solvers with little parallel work. My sparse LU kernels pack several blocks into one warp and choose the kernel per tree level, making factorization and solve **11.98× faster than NVIDIA cuDSS**. The full Newton–Raphson solver is up to **27.94× faster than ExaPF** and **10.67× faster than GPU-Sim2Grid**.

Other work:

- **NPU:** Gemma-4 decoder kernels on the FuriosaAI RNGD, restructured around weight streaming ([project](/projects/furiosa/)).
- **FPGA:** INT8 dot-product and GEMV accelerators on a Zynq UltraScale+, driven by the ARM cores over AXI ([project](/projects/zynq/)).
- **Microcontroller:** early-exit networks searched under a 1 MB SRAM / 2 MB flash budget, KCC 2025 Best Paper Award ([project](/projects/eenas/)).
