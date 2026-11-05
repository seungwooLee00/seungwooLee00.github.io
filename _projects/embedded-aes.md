---
layout: page
title: AES encryption from Android app to Linux kernel
description: Embedded System Software final project — JNI, a custom system call, and an FPGA I/O driver
permalink: /projects/embedded-aes/
importance: 2
category: systems
github: https://github.com/seungwooLee00/embedded-system-software-final-project
---

An individual final project for Embedded System Software (2024) on an Achro-i.MX6 board. An Android app encrypts short text with AES-128 and stores it under a numeric key; the user types input on the board's push switches and reads results on its 7-segment display, dot matrix, and text LCD. The project runs through every layer of the stack.

| Layer | What I wrote |
| --- | --- |
| Android app (Java) | Insert, search, and delete operations, each in its own bound service |
| Native library (C, JNI) | Calls into the kernel, keeps a hash table of ciphertexts, guards shared state with a POSIX semaphore |
| System call (kernel) | AES-128 encryption and decryption written from scratch, exposed as system call 379 |
| Device driver (kernel module) | A character device that maps the FPGA I/O devices with `ioremap` and exposes nine `ioctl` commands |

Reading text from the switches blocks the caller: a kernel thread collects key presses, and the board's HOME button raises an interrupt that stops the thread and wakes the caller from a wait queue. Countdowns on the dot matrix use a kernel timer the same way.
