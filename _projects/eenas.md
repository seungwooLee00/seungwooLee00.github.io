---
layout: page
title: Early-exit NAS for microcontrollers
description: Searching tiny CNNs that can stop early, under a 1 MB SRAM / 2 MB flash budget
permalink: /projects/eenas/
importance: 2
category: research
related_publications: false
---

Microcontrollers have about 1 MB of SRAM and 2 MB of flash, so the networks that fit are small and every computation counts. An early-exit network adds small classifiers partway through, so easy inputs can stop before the last layer. This work searches the network and its exits together under the memory limits. It received the **Best Paper Award at KCC 2025**.

## Approach

- **Search space:** the backbone, whether each candidate position gets an auxiliary classifier, and the confidence threshold for exiting.
- **Auxiliary classifiers:** lightweight designs that fit the microcontroller memory budget.
- **Supernet training:** train the largest subnet first, then train the shared weights so that early and late classifiers do not pull against each other.
- **Search:** a genetic algorithm that uses accuracy and exit-position predictors.

## Results on CIFAR-100

| Model | Top-1 accuracy | Inputs that exit early | Average FLOPs |
| --- | ---: | ---: | ---: |
| Without early exit | 78.01% | — | 281M |
| Searched early-exit network | 77.57% | 59.7% | 171M |

The searched network cuts average computation by 39.1% (1.64×) for a 0.44 percentage-point drop in accuracy.

The code belongs to the lab and will be released by the lab.
