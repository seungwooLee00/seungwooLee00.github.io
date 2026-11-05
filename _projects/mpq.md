---
layout: page
title: Quantization study
description: Ongoing — INT8 vision models on an STM32 microcontroller and an RTX 3090
permalink: /projects/mpq/
importance: 2
category: models for the device
---

Ongoing. When a vision model moves from FP32 training to INT8 deployment, which changes keep accuracy, and which save time or memory on the target hardware?

- **Accuracy depends on the target:** MCUNet-in1 reached 49.79% top-1 on ImageNet with TensorFlow Lite on a CPU, but 45.93% with TinyEngine on the STM32 on the same 50,000 images. Among early-exit NAS candidates, the most accurate model in FP32 was not the most accurate after INT8 conversion.
- **Attention on a microcontroller:** for MobileViT-XXS on an STM32H7, an integer Softmax approximation and row-by-row attention made the attention kernels 1.41× faster and cut working memory by 34.6%. These runs used model-shaped kernels with synthetic inputs; measuring accuracy on the board is the next step.
- **INT8 on a GPU:** for ViT-B/16 on an RTX 3090, enabling INT8 in TensorRT barely changed runtime, while INT8 linear layers with fused conversions cut time from 79.0 to 52.5 ms against their own FP16 baseline.
