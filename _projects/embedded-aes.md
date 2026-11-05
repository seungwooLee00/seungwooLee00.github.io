---
layout: page
title: AES encryption from Android app to Linux kernel
description: Embedded System Software final project — JNI, a custom system call, and an FPGA I/O driver
permalink: /projects/embedded-aes/
importance: 2
category: systems
github: https://github.com/seungwooLee00/embedded-system-software-final-project
---

Individual final project for Embedded System Software (2024) on an Achro-i.MX6 board: an Android app that encrypts text with AES-128, taking input from the board's push switches and showing results on its displays. It runs through every layer from the app to the hardware.

| Layer | What I wrote |
| --- | --- |
| Android app (Java) | Insert, search, and delete operations, each in its own bound service |
| Native library (C, JNI) | Calls into the kernel, keeps a hash table of ciphertexts, guards shared state with a POSIX semaphore |
| System call (kernel) | AES-128 encryption and decryption written from scratch, exposed as system call 379 |
| Device driver (kernel module) | A character device that maps the FPGA I/O devices with `ioremap` and exposes nine `ioctl` commands |

Switch input runs in a kernel thread; a hardware interrupt from the HOME button ends it and wakes the waiting caller.
