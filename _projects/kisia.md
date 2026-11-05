---
layout: page
title: Malicious URL and JavaScript detection
description: Hackathon-winning detection service; I built the models and quantized them for deployment
permalink: /projects/kisia/
img: assets/img/projects/kisia_static_eval_hist.png
importance: 2
category: competitions
github: https://github.com/seungwooLee00/malicious-url-detection
---

A team of four built a Chrome extension and backend that warns users before they open a malicious site. It won the **Top Excellence Award (Minister of Science and ICT Award)** at the 2nd KISIA Information Security Developer Hackathon in 2024. I led the team and built the AI models.

## Why one model was not enough

A DistilBERT classifier on the URL string reached F1 0.99 on a test split of its own training data, but only F1 0.68 on a URL dataset from another source: it flagged many benign URLs as malicious. So I added a second model that analyzes the JavaScript a page loads. It converts the code to a syntax tree, lists the node types in order, and classifies that sequence with fastText. Structure survives obfuscation better than variable names and strings do. It reached precision 0.85, recall 0.91, and F1 0.86 on 2,000 held-out scripts.

{% include figure.liquid loading="eager" path="assets/img/projects/kisia_static_eval_hist.png" title="JavaScript model output distribution" class="img-fluid rounded z-depth-1" %}

<div class="caption">Predicted probability of being malicious for 2,000 test scripts. Benign scripts cluster near 0 and malicious ones near 1.</div>

## Quantization for deployment

| Model | Original → deployed | Size | Latency per input |
| --- | --- | --- | --- |
| URL | PyTorch FP32 → ONNX INT8 | 268 → 67 MB | 29.7 → 11.8 ms |
| JavaScript | fastText 100-dim → 50-dim + quantization | 800 → 52 MB | 4.4 → 6.4 ms |

Latency was re-measured in 2026 on a 2-core CPU. The JavaScript model only got smaller: most of its time goes to parsing the code, not to the model.
