---
layout: page
title: Gemma-4 kernels on FuriosaAI RNGD
description: NPU kernel competition — dataflow design for batch-size-1 decoding
permalink: /projects/furiosa/
img: assets/img/projects/furiosa_kernel_speedup.png
importance: 1
category: competitions
github: https://github.com/seungwooLee00/FuriosaAI_Competition
---

The Gemma-4 Kernel Optimization Competition asked participants to speed up three Gemma-4-12B decoder kernels on the FuriosaAI RNGD NPU while passing the official accuracy checks: the QKV projection, the attention output projection, and the feed-forward network. At batch size 1 every linear layer becomes a matrix–vector product, so each weight is read once and used once. The problem is less about arithmetic than about how weights and activations move and where intermediate results live.

{% include figure.liquid loading="eager" path="assets/img/projects/furiosa_kernel_speedup.png" title="Kernel speedups" class="img-fluid rounded z-depth-1" %}

Speedups are measured against the initial baseline on the device. The official submission scored **7.70** on the grading server, which uses a different baseline. The 10× target was not reached.

## What changed

- **Weight streaming across both clusters:** the weight load was spread over both compute clusters, and each cluster keeps the slice of activations it produces, so activations no longer round-trip through HBM.
- **Decode while consuming:** packed 4-bit FFN weights are decoded on the way into the contraction unit instead of being written out as a full FP8 matrix first.
- **Layout matched to the consumer:** K/V heads are read directly in strided form, Q and K share RoPE registers, and output rows go to the units that use them next.
- **Measured, not assumed:** each candidate was compared against the reference in alternating order on the device. Several changes that reduced instruction counts were rejected because they ran slower.

Full experiment notes, including rejected designs, are in the [repository](https://github.com/seungwooLee00/FuriosaAI_Competition).
