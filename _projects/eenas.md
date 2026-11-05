---
layout: page
title: Early-exit NAS for microcontrollers
description: Searching tiny CNNs that can stop early, under a 1 MB SRAM / 2 MB flash budget
permalink: /projects/eenas/
importance: 2
category: research
related_publications: false
---

Microcontrollers have about 1 MB of SRAM and 2 MB of flash. An early-exit network adds small classifiers partway through so that easy inputs stop early, but every exit costs memory. This work searches the backbone, the exit positions, and the exit thresholds together under that budget, using a weight-sharing supernet and a genetic algorithm guided by accuracy and exit predictors.

On CIFAR-100, 59.7% of inputs exit early and average computation drops by 39% (281M → 171M FLOPs) for a 0.44-point accuracy loss. The paper received the **Best Paper Award at KCC 2025**.

The code belongs to the lab and will be released by the lab.
