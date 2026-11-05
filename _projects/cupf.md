---
layout: page
title: cuPF
description: GPU power-flow computation for many grid scenarios at once
permalink: /projects/cupf/
importance: 1
category: research
related_publications: false
---

Power-flow analysis solves for the voltage at every bus of a power grid, and operators rerun it for many generation and load scenarios on the same grid. cuPF moves the whole Newton–Raphson loop to the GPU and runs many scenarios as one batch. On a grid with about 70,000 buses it is up to **101.5× faster** than a CPU C++ implementation of the MATPOWER algorithm (1,970.8 ms vs. 19.4 ms at batch size 256).

## Where the time goes

Each Newton–Raphson iteration computes a mismatch vector, builds a sparse Jacobian matrix, solves a linear system with it, and updates the voltages. On a 13,659-bus grid, Jacobian construction and the linear solve take about 95% of the runtime, so cuPF targets those two steps. The grid does not change between iterations or scenarios, so the sparsity pattern and memory layout are fixed once and reused.

## Building the Jacobian edge by edge

Building the Jacobian bus by bus gives each GPU thread as much work as its bus has connections, and bus degrees vary widely. Threads in the same warp then wait for the busiest one. cuPF assigns work per grid edge instead, so every thread does the same amount of work.

| Grid size (buses) | Speedup over bus-based kernel | Lane utilization, edge-based | Lane utilization, bus-based |
| --- | ---: | ---: | ---: |
| ≤ 100 | 1.61× | 74.7% | 53.3% |
| ≤ 1K | 2.16× | 95.6% | 46.7% |
| ≤ 10K | 2.49× | 96.5% | 38.7% |
| ≤ 50K | 1.73× | 96.6% | 37.5% |
| > 50K | 1.66× | 98.3% | 43.9% |

Averaged over the 78 MATPOWER test grids, grouped by size.

## Mixed precision

Running everything in single precision is fast but stops converging: the mismatch stalls around 10⁻². cuPF computes the Jacobian and the linear solve in single precision, and keeps the voltage state, mismatch, and convergence check in double precision. This converges like full double precision while adding only 4–7% time over full single precision, compared with 19–64% for full double precision.

## Ongoing work

The linear solve is now the main cost. For my master's thesis I am designing GPU sparse LU factorization for the many small dense blocks that power-system Jacobians produce (manuscript in preparation). The code will be released by the lab.
