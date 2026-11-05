---
layout: page
title: cuPF
description: Batched GPU power flow — up to 27.94× faster than ExaPF
permalink: /projects/cupf/
importance: 2
category: research
---

Power-flow analysis is rerun for hundreds of load and generation scenarios on the same grid. cuPF runs the whole Newton–Raphson loop for all of them on the GPU at once.

- Symbolic analysis is done once and reused across scenarios.
- The Jacobian is built per grid edge, so every thread does the same amount of work.
- The Jacobian and the linear solve ([sparse LU](/projects/sparse-lu/)) run in FP32; voltages and residuals stay in FP64 and converge to 10⁻⁸.

**Result:** up to 27.94× faster than ExaPF and 10.67× faster than GPU-Sim2Grid (RTX 3090, 8 power grids). Manuscript in preparation; the code will be released by the lab.
