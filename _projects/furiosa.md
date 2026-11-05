---
layout: page
title: Gemma-4 kernels on FuriosaAI RNGD
description: NPU kernel competition — 8.05× faster Gemma-4 decoder kernels
permalink: /projects/furiosa/
img: assets/img/projects/furiosa_kernel_speedup.png
github: https://github.com/seungwooLee00/FuriosaAI_Competition
importance: 1
category: competitions
---

At batch size 1, every Gemma-4 decoder layer is a matrix–vector product: each weight is read once and used once, so speed depends on data movement, not arithmetic.

{% include figure.liquid loading="eager" path="assets/img/projects/furiosa_kernel_speedup.png" title="Kernel speedups" class="img-fluid rounded z-depth-1" %}

- Weights stream across both compute clusters, and each cluster keeps the activations it produces, so they no longer round-trip through HBM.
- Packed 4-bit FFN weights are decoded on the way into the compute unit instead of being expanded in memory first.
- Data layouts match the unit that consumes them next.

Official competition score: 7.70. [Code](https://github.com/seungwooLee00/FuriosaAI_Competition)
