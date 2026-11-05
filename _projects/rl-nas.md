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

The genetic algorithm won at every latency target: PPO's accuracy was lower by up to 2.8 percentage points, and its latency stayed at 0.69–0.73 s regardless of the target. The report traces this to the reward design. The reward was the change in score between steps, constraint violations made most intermediate rewards zero or negative, and accuracy only changed late in each episode, so most steps gave the policy nothing to learn from.
