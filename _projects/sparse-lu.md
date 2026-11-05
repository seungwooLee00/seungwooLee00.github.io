---
layout: page
title: Accelerating Sparse LU on GPUs
description: Ongoing master's thesis — sparse LU for matrices made of many small dense blocks
permalink: /projects/sparse-lu/
importance: 1
category: research
---

Ongoing (master's thesis). Many sparse matrices factor into a large number of small dense blocks. Each block is too small to keep a GPU busy, and the number of blocks that can run in parallel changes as the factorization proceeds.

- **Warp packing:** several small blocks share one warp.
- **Gather instead of scatter:** each block collects the updates it needs, removing repeated read-modify-write traffic to global memory.
- **Adaptive kernel choice:** the kernel and sub-warp size follow block size and the number of independent blocks.

The approach started as the linear solver inside [cuPF](/projects/cupf/) and is being generalized beyond power-grid matrices.
