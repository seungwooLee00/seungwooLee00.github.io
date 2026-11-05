---
layout: page
title: AES encryption from Android app to Linux kernel
description: Android app → JNI → custom system call and device driver
permalink: /projects/embedded-aes/
github: https://github.com/seungwooLee00/embedded-system-software-final-project
importance: 1
category: coursework
---

Individual final project for Embedded System Software (2024) on an Achro-i.MX6 board: an Android app that encrypts text with AES-128, using the board's switches and displays.

- App (Java) → native library (C, JNI) → AES-128 system call written from scratch.
- Character device driver for the board's FPGA I/O: `ioctl` commands, a kernel thread for switch input, and an interrupt from the HOME button that wakes the caller.

[Code](https://github.com/seungwooLee00/embedded-system-software-final-project)
