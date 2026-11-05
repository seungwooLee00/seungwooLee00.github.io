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

I work on **software–hardware co-design**: finding where a workload and its hardware fit poorly, then redesigning the algorithm, the data layout, or the hardware to close the gap. Advisor: Prof. Youngmin Yi.

- **GPU:** power-flow solver up to **27.94×** faster than ExaPF ([cuPF](/projects/cupf/)); sparse LU on GPUs, generalized from cuPF (ongoing [thesis](/projects/sparse-lu/)).
- **NPU:** Gemma-4 decoder kernels on the FuriosaAI RNGD, **8.05×** faster than the baseline ([project](/projects/furiosa/)).
- **FPGA:** INT8 dot-product and GEMV accelerators on a Zynq UltraScale+, about **17×** faster than the ARM core ([project](/projects/zynq/)).
- **MCU:** early-exit networks with **16.5%** lower latency than MCUNet, KCC 2025 Best Paper Award ([project](/projects/eenas/)).
