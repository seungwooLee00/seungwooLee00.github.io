---
layout: page
title: cuPF
description: Batched GPU power flow with a sparse LU solver built for power-grid matrices
permalink: /projects/cupf/
importance: 1
category: research
related_publications: false
---

Power-flow analysis is rerun for hundreds of load and generation scenarios on the same grid. cuPF solves them as one batch, with the whole Newton–Raphson loop on the GPU. Most of the work is the sparse linear solve inside each iteration.

## Where the hardware and the workload disagree

Power-grid Jacobians factor into many small dense blocks arranged in an elimination tree. Each block is too small to keep a GPU busy, and the number of independent blocks changes from one tree level to the next. Profiling NVIDIA cuDSS with Nsight Compute showed it limited by memory latency and instruction issue on these matrices, not by arithmetic.

## What I changed

- **Warp packing:** several small matrices share one warp, cutting instruction and synchronization overhead per matrix.
- **Gather instead of scatter:** each parent block collects its children's updates, removing repeated read-modify-write traffic to global memory.
- **Per-level kernel choice:** the kernel and sub-warp size are picked from matrix size, the number of independent blocks, and GPU resources, trading packing efficiency against latency hiding.
- **Around the solver:** symbolic analysis is reused across scenarios, the Jacobian is built per grid edge so every thread gets equal work, and the Jacobian and solve run in FP32 while the voltage state and residual stay in FP64 (converging to 10⁻⁸).

## Results

RTX 3090, 8 power grids, geometric mean.

| Comparison | Speedup |
| --- | ---: |
| Sparse LU factorization + solve vs. NVIDIA cuDSS (batch 256) | **11.98×** |
| Full Newton–Raphson vs. ExaPF | up to **27.94×** |
| Full Newton–Raphson vs. GPU-Sim2Grid | up to **10.67×** |

Master's thesis work; manuscript in preparation. The code will be released by the lab.
