---
layout: page
title: Quantization study
description: Ongoing — running an early-exit model in INT8 on an STM32 without losing its speed or accuracy
permalink: /projects/mpq/
importance: 2
category: models for the device
---

Ongoing. The study started from deploying the [early-exit NAS](/projects/eenas/) model on an STM32: its fastest candidate lost accuracy after INT8 conversion, and the goal was to recover that accuracy while keeping its latency. Calibration choices alone fell short, and cross-layer equalization merged the exits into a single output, which removes early exit.

From there the study asks which changes from FP32 training to INT8 deployment keep accuracy, and which save time or memory on the target:

- **Accuracy has to be measured on the target:** among the early-exit candidates, the most accurate model in FP32 was not the most accurate in INT8. MCUNet-in1 reached 49.79% top-1 on ImageNet with TensorFlow Lite on a CPU but 45.93% with TinyEngine on the STM32, on the same 50,000 images.
- **Attention on a microcontroller:** for MobileViT-XXS on an STM32H7, an integer Softmax approximation and row-by-row attention made the attention kernels 1.41× faster and cut working memory by 34.6%. These runs used model-shaped kernels with synthetic inputs; measuring accuracy and end-to-end latency on the board is the next step.
- **INT8 on a GPU:** for ViT-B/16 on an RTX 3090, enabling INT8 in TensorRT barely changed runtime, while INT8 linear layers with fused conversions cut time from 79.0 to 52.5 ms against their own FP16 baseline.
