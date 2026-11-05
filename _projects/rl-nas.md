---
layout: page
title: Reinforcement learning vs. genetic search for MCU NAS
description: Graduate course project (team of 3) — why PPO lost to a genetic algorithm
permalink: /projects/rl-nas/
importance: 3
category: systems
github: https://github.com/seungwooLee00/rl_proj
---

A team project for a graduate reinforcement learning course (fall 2025, team of three). We compared a genetic algorithm with PPO for searching microcontroller-sized networks under Flash, SRAM, and latency limits, using the same accuracy, latency, Flash, and SRAM predictors for both (R² above 0.91 for all four).

The genetic algorithm won at every latency target (PPO up to 2.8 points less accurate). The cause was the reward: constraint violations made most step rewards zero or negative, so PPO had little signal to learn from.
