---
layout: page
title: Reinforcement learning vs. genetic search for MCU NAS
description: Graduate course project (team of 3) — why PPO lost to a genetic algorithm
permalink: /projects/rl-nas/
github: https://github.com/seungwooLee00/rl_proj
importance: 3
category: other projects
---

Graduate reinforcement learning course (fall 2025, team of three). We compared a genetic algorithm with PPO for searching microcontroller-sized networks under Flash, SRAM, and latency limits. The genetic algorithm won at every latency target; constraint violations made most PPO step rewards zero or negative, leaving little to learn from.

[Code](https://github.com/seungwooLee00/rl_proj)
