---
layout: page
title: FPGA accelerators on Zynq UltraScale+
description: INT8 dot-product and GEMV accelerators, split between the ARM cores and programmable logic
permalink: /projects/zynq/
importance: 1
category: systems
---

As teaching assistant for Basic SoC Design (fall 2025), I built the course's FPGA lab series on the Ultra96-V2 (Zynq UltraScale+ MPSoC). It ends in INT8 accelerators that the ARM cores drive over AXI.

## Hardware–software split

- **Programmable logic:** the datapath is sized to the memory. One 256-bit BRAM word holds 32 INT8 values, so the core multiplies 32 pairs per word, sums them in a pipelined adder tree, and accumulates into INT32.
- **ARM cores:** copy data from DDR to BRAM with the AXI CDMA engine, set sizes and addresses through AXI4-Lite registers, start the core, and read back the result.
- **GEMV:** the same datapath extended to matrix–vector multiplication (up to 256 × 1,024), caching x and streaming rows of A from BRAM.

## Result

The dot-product accelerator is about **17× faster** than the same computation in C on one Cortex-A53 core (4,096 elements: 6.5 µs vs. 112 µs). Each extra 32-element word costs exactly 5 cycles because the controller waits for every BRAM read before issuing the next one; overlapping those reads is the next step.

Source code is in a private repository, available on request.
