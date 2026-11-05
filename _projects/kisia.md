---
layout: page
title: Malicious URL and JavaScript detection
description: Hackathon-winning detection service; I built the models and quantized them for a CPU server
permalink: /projects/kisia/
importance: 2
category: competitions
github: https://github.com/seungwooLee00/malicious-url-detection
---

A Chrome extension and backend that warns users before they open a malicious site. Team of four; I led the team and built the AI models. It won the **Top Excellence Award (Minister of Science and ICT Award)** at the 2nd KISIA Information Security Developer Hackathon (2024).

- **Two models:** a DistilBERT classifier on the URL string, and a fastText classifier on the syntax-tree node sequence of the page's JavaScript, which survives obfuscation better than names and strings do (F1 0.86 on 2,000 held-out scripts).
- **Quantized for deployment on a CPU server:** the URL model went from PyTorch FP32 to ONNX INT8 (268 → 67 MB, 29.7 → 11.8 ms per input), and the JavaScript model from 800 MB to 52 MB.

Code: [GitHub](https://github.com/seungwooLee00/malicious-url-detection)
