---
layout: page
title: Embedded System Software
description: Course project (2024) — from an Android app down to a Linux system call and device driver
permalink: /projects/embedded-aes/
github: https://github.com/seungwooLee00/embedded-system-software-final-project
importance: 1
category: other projects
---

Individual final project for Embedded System Software (2024) on an Achro-i.MX6 board. An Android app reaches the board's hardware through every layer of the stack:

- **App and native library:** Java services that call into C through JNI.
- **System call:** a custom Linux system call added to the kernel.
- **Device driver:** a character device for the board's FPGA I/O (push switches, 7-segment display, dot matrix, text LCD) with `ioctl` commands, a kernel thread that reads switch input, and an interrupt that wakes the waiting caller.

The app itself encrypts short text and shows the result on the board's displays.

[Code](https://github.com/seungwooLee00/embedded-system-software-final-project)
