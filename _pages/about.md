---
layout: about
title: about
permalink: /
subtitle: M.S. student, Sogang University · <b>Software–Hardware Co-design</b>

profile:
  align: left
  image:
  image_circular: false
  more_info: >
    <p><i class="fa-solid fa-envelope"></i> <a href="mailto:robert032626@gmail.com">robert032626@gmail.com</a></p>
    <p><i class="fa-brands fa-github"></i> <a href="https://github.com/seungwooLee00">seungwooLee00</a></p>
    <p><i class="fa-solid fa-location-dot"></i> Seoul, South Korea</p>

selected_papers: false
social: false

announcements:
  enabled: false

latest_posts:
  enabled: false
---

I am an M.S. student in Computer Science and Engineering at Sogang University, advised by Prof. Youngmin Yi in the [High-Performance AI Systems Lab](https://aisys.sogang.ac.kr).

My research is **software–hardware co-design**. A program runs fast only when its computation and data movement match what the hardware does well. I start from how a workload actually runs on a specific chip — where it waits on memory, leaves compute units idle, or runs out of on-chip storage — and reshape the kernels, the data layout, or the model to fit.

## GPU and NPU kernels

- **[Accelerating Sparse LU on GPUs](/projects/sparse-lu/)** (M.S. thesis, ongoing) — packs the many small dense blocks of sparse factorization into GPU warps and picks the kernel to match.
- **[cuPF](/projects/cupf/)** — batched power flow with the whole Newton–Raphson loop on the GPU; up to **27.94×** faster than ExaPF.
- **[Gemma-4 kernels on FuriosaAI RNGD](/projects/furiosa/)** — batch-1 decoder kernels restructured around weight streaming on an NPU; **8.05×** kernel speedup.

## Models for constrained devices

- **[Early-exit NAS for microcontrollers](/projects/eenas/)** — searches the network and its early exits together under the memory limits of an STM32H7. KCC 2025 Best Paper Award.
- **[Quantization study](/projects/mpq/)** (ongoing) — started from running the early-exit model in INT8 on an STM32 without losing its latency advantage; asks which FP32-to-INT8 changes keep accuracy and which save time or memory on the target.

## Teaching

- **Teaching assistant, Basic SoC Design** (fall 2025) — built the course's [FPGA lab series](/projects/zynq/) on the Ultra96-V2, from adders to INT8 dot-product and GEMV accelerators driven by the ARM cores over AXI.

## Other projects

- [Embedded System Software](/projects/embedded-aes/) — Android app, JNI, a custom Linux system call, and a device driver on an i.MX6 board (course project).
- [Malicious URL and JavaScript detection](/projects/kisia/) — team lead and AI models; models quantized to INT8 for a CPU server. Minister of Science and ICT Award.
- [Michelin in TV](/projects/webos/) — webOS TV app; frontend and testing (team project).
- [Reinforcement learning vs. genetic search for MCU NAS](/projects/rl-nas/) — graduate course project.
- [Compiler construction](/projects/compiler/) — course assignments in OCaml.

## Publications

<div class="publications">
{% bibliography --group_by none %}
</div>

## Education

- **M.S.**, Computer Science and Engineering, Sogang University — Mar 2025 – present
- **B.S.**, Computer Science and Engineering, Sogang University — Mar 2019 – Feb 2025

## Awards

- Best Paper Award, Korea Computer Congress (KCC 2025) — Jul 2025
- Top Excellence Award (Minister of Science and ICT Award), 2nd KISIA Information Security Developer Hackathon — Aug 2024
