---
layout: page
title: Early-exit NAS for microcontrollers
description: 16.5% lower latency than MCUNet on an STM32H7 — KCC 2025 Best Paper Award
permalink: /projects/eenas/
importance: 3
category: research
---

An early-exit network lets easy inputs stop at an early classifier, but on a microcontroller with 2 MB of memory every extra exit has to fit. This work searches the backbone, the exit positions, and the exit thresholds together, using an accuracy predictor and a latency lookup table.

**Result:** on an STM32H7, 16.5% lower latency than MCUNet (1.036 → 0.865 s) at 0.94 points lower accuracy. **Best Paper Award, KCC 2025.** An extended version is in preparation.
