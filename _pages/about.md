---
layout: about
title: about
permalink: /
subtitle: M.S. student, Sogang University · <b>Software–Hardware Co-design</b>

profile:
  align: right
  image:
  image_circular: false
  more_info:

selected_papers: false
social: true

announcements:
  enabled: false

latest_posts:
  enabled: false
---

I am an M.S. student in Computer Science and Engineering at Sogang University, advised by Prof. Youngmin Yi in the [High-Performance AI Systems Lab](https://aisys.sogang.ac.kr).

My research is **software–hardware co-design**. A program runs fast only when its computation and data movement match what the hardware does well. I start from how a workload actually runs on a specific chip — where it waits on memory, leaves compute units idle, or overflows on-chip storage — and then change whichever side can change: the software, the hardware, or the model. My projects fall along three directions.

## Fitting software to the hardware

- **[Accelerating Sparse LU on GPUs](/projects/sparse-lu/)** (M.S. thesis, ongoing) — packs the many small dense blocks of sparse factorization into GPU warps and picks the kernel to match.
- **[cuPF](/projects/cupf/)** — batched power flow with the whole Newton–Raphson loop on the GPU; up to **27.94×** faster than ExaPF.
- **[Gemma-4 kernels on FuriosaAI RNGD](/projects/furiosa/)** — batch-1 decoder kernels restructured around weight streaming on an NPU; **8.05×** kernel speedup.

## Fitting hardware to the workload

- **[FPGA accelerators on Zynq UltraScale+](/projects/zynq/)** (TA, Basic SoC Design) — INT8 dot-product and GEMV datapaths sized to the BRAM word and driven by the ARM cores over AXI; about **17×** faster than the ARM core.

## Fitting models to the device

- **[Early-exit NAS for microcontrollers](/projects/eenas/)** — searches the network and its early exits under a 2 MB memory limit; **16.5%** lower latency than MCUNet on an STM32H7. KCC 2025 Best Paper Award.
- **[Quantization study](/projects/mpq/)** (ongoing) — per-layer bit widths chosen with latency measured on hardware.
- **[Malicious URL and JavaScript detection](/projects/kisia/)** — detection models quantized to INT8 for a CPU server (268 → 67 MB). Minister of Science and ICT Award.

## Other projects

- [AES encryption from Android app to Linux kernel](/projects/embedded-aes/) — JNI, a custom system call, and a device driver.
- [Optimizing compiler in OCaml](/projects/compiler/) — parser, intermediate representation, and cost-based optimizer.
- [Reinforcement learning vs. genetic search for MCU NAS](/projects/rl-nas/) — graduate course project.
- [Michelin in TV](/projects/webos/) — webOS TV front end and test process.

## Publications

<div class="publications">
{% bibliography --group_by none --query @*[selected=true]* %}
</div>

## Education

- **M.S.**, Computer Science and Engineering, Sogang University — Mar 2025 – present
- **B.S.**, Computer Science and Engineering, Sogang University — Mar 2019 – Feb 2025
