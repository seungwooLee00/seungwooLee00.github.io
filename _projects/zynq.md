---
layout: page
title: FPGA accelerators on Zynq UltraScale+
description: The lab series I built as TA for Basic SoC Design, up to an INT8 GEMV accelerator
permalink: /projects/zynq/
importance: 1
category: systems
---

As teaching assistant for Basic SoC Design (fall 2025), I designed the course's FPGA lab series on the Avnet Ultra96-V2 (Zynq UltraScale+ MPSoC) with Vivado and Vitis 2024.1. The labs run from ripple-carry adders and LED control, through custom AXI4-Lite peripherals and DDR-to-BRAM transfers with AXI CDMA, to INT8 accelerators that the ARM cores drive over AXI.

## INT8 dot-product accelerator, measured on the board

Each 256-bit BRAM word holds 32 INT8 values. The accelerator multiplies the 32 pairs in parallel, sums them in a pipelined adder tree, and accumulates across words into an INT32 result. Against a plain C loop on one ARM Cortex-A53 core, it is about 17× faster from 256 elements up.

| Vector length | Accelerator | ARM loop | Ratio |
| ---: | ---: | ---: | ---: |
| 32 | 0.12 µs | 1.34 µs | 11.2× |
| 256 | 0.47 µs | 8.36 µs | 17.8× |
| 4,096 | 6.47 µs | 112.12 µs | 17.3× |

The ARM loop was compiled without optimization (`-O0`), so an optimized software version would narrow the gap. The accelerator time excludes the CDMA copy from DDR to BRAM. For long vectors the accelerator spends exactly 5 cycles per 32-element word, which points to the controller waiting for each BRAM read before requesting the next one.

## INT8 GEMV accelerator

The final design extends the same datapath to matrix–vector multiplication (up to 256 × 1,024): it caches x, streams the rows of A from BRAM block by block, and exposes start, sizes, base addresses, and a cycle counter through AXI4-Lite registers. Board measurements are still to be added.

The source code is in a private repository; available on request.
