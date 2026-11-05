---
layout: page
title: FPGA accelerators on Zynq UltraScale+
description: INT8 dot-product and GEMV accelerators — about 17× faster than the ARM core
permalink: /projects/zynq/
importance: 1
category: hardware for the workload
---

As teaching assistant for Basic SoC Design (fall 2025), I built the course's FPGA lab series on the Ultra96-V2, ending in INT8 accelerators.

- **Logic:** the datapath is sized to the BRAM word: 32 INT8 multiplies per 256-bit word, a pipelined adder tree, and an INT32 accumulator. The same datapath runs GEMV up to 256 × 1,024.
- **ARM cores:** move data from DDR to BRAM with AXI CDMA and control the core through AXI4-Lite registers.

**Result:** the dot product runs about 17× faster than on the ARM core (4,096 elements: 6.5 vs. 112 µs). Code is in a private repository, available on request.
