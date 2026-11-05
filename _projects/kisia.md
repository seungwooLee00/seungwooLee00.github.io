---
layout: page
title: Malicious URL and JavaScript detection
description: Hackathon winner — detection models quantized for a CPU server
permalink: /projects/kisia/
github: https://github.com/seungwooLee00/malicious-url-detection
importance: 2
category: competitions
---

A Chrome extension and backend that warn users before a malicious site opens. Team of four; I led the team and built the models. **Top Excellence Award (Minister of Science and ICT Award)**, KISIA hackathon 2024.

- **URL model:** DistilBERT, quantized from PyTorch FP32 to ONNX INT8 (268 → 67 MB, 29.7 → 11.8 ms per input).
- **JavaScript model:** fastText over syntax-tree node sequences, which holds up against obfuscation (F1 0.86); 800 → 52 MB.

[Code](https://github.com/seungwooLee00/malicious-url-detection)
