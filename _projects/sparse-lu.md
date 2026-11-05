---
layout: page
title: GPU sparse LU for power-grid matrices
description: Master's thesis — 11.98× faster factorization and solve than NVIDIA cuDSS
permalink: /projects/sparse-lu/
importance: 1
category: research
---

Power-grid Jacobians factor into many small dense blocks. Each block is too small to fill a GPU, and Nsight Compute showed cuDSS stalling on memory latency and instruction issue rather than on arithmetic.

- **Warp packing:** several small blocks share one warp.
- **Gather instead of scatter:** each parent block collects its children's updates, removing repeated read-modify-write traffic to global memory.
- **Per-level kernel choice:** the kernel and sub-warp size follow block size and the number of independent blocks.

**Result:** 11.98× faster factorization and solve than NVIDIA cuDSS (RTX 3090, 8 power grids, batch 256, geometric mean). It is the linear solver inside [cuPF](/projects/cupf/). The code will be released by the lab.
