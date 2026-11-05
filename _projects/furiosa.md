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

The competition asked for faster Gemma-4-12B decoder kernels (QKV projection, attention output projection, feed-forward network) on the FuriosaAI RNGD NPU. At batch size 1 every layer is a matrix–vector product: each weight is read once and used once, so speed depends on how data moves through the chip, not on arithmetic.

{% include figure.liquid loading="eager" path="assets/img/projects/furiosa_kernel_speedup.png" title="Kernel speedups" class="img-fluid rounded z-depth-1" %}

Speedup over the initial kernels, measured on the device. Official competition score: **7.70**.

## What changed

- **Weight streaming across both clusters:** the weight load was spread over both compute clusters, and each cluster keeps the slice of activations it produces, so activations no longer round-trip through HBM.
- **Decode while consuming:** packed 4-bit FFN weights are decoded on the way into the contraction unit instead of being written out as a full FP8 matrix first.
- **Layout matched to the consumer:** K/V heads are read directly in strided form, Q and K share RoPE registers, and output rows go to the units that use them next.

Code and experiment notes: [GitHub](https://github.com/seungwooLee00/FuriosaAI_Competition)
