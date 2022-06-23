---
layout: post
title: "5G Networked Performance at Telenor headquarter"
date: 2022-06-24 08:00:00 +0200
categories: portal
author: Joachim Poutaraud, Kristian Wentzel, Leigh Murray, Lindsay Charles
image: /assets/image/2022_06_21_joachipo_modem.jpg
excerpt: "Does it helps to perform music over 5G Network?"
keywords: Telematic, Network, NMP, Jazz
---

When it comes to play over the Network, the main problem is to try to keep a common rhythm going between remote musicians. Maintaining a shared beat or sense of pulse is difficult if it takes too long for one musician's sound to reach another's ears. There can be drastic consequences. Well, here at [MCT](https://www.uio.no/english/studies/programmes/mct-master/) we try to different solutions to avoid this the best we can. This time we set up a Network Musical Performance (NMP) over 5G Network at the headquarter of [Telenor](https://www.telenor.no/privat/). 

## **Introduction: 5G on Wheels**

## **Latency measurements**

For playing over the 5G Network, we used a pair of [Huawei H138-380 CPE Pro 3 5G](https://nettbutikk.emcom.no/) Routers. Audio and video were send back and forth, using the [NMP-Portable Kits](https://github.com/MCT-master/NMP-Portable-Kits/wiki) to facilitate ultra-low-latency music performances between two remote locations. These racks are essentially bundles of high-end software, audio/video peripherals and networking tools that can provide the lowest possible latency on audio/video transmissions over the network, given that all other pieces of the puzzle are correct.

We measured a latency of ... between the two locations using [JackTrip](https://www.jacktrip.org/) with the following parameters.

- Buffer

## **Performance Reflections**

When performing Network Musical Performance (NMP), the problem is trying to keep a common rhythm between musicians in different locations. Maintaining a shared beat is difficult if it takes too long for one musician’s sound to reach another’s ears, and if this time (called latency) is too long (around 25ms [1]), it can make playing music together almost impossible. However, some techniques can be employed to work with latency, and not against it.

Here, Kristian and Joachim decided to play two jazz standards with medium tempo as it can tolerate slight deviations in the playing of the melody and can leave some place for the development of the melody between the chords. The following standards were chosen. 

- **A Child Is Born** written by Thad Jones in 1969
- **A Night in Tunisia** written by Dizzy Gillespie around 1940–42

For Kristian, the tempo and style of song had a direct influence on how much latency could be tolerated. Consequently, difficulties in synchronizing timing for up tempo standards were experienced. This have already been studied in a previous blogpost on [Mastering Latency](https://mct-master.github.io/portal/2022/02/21/joachipo-measuring-latency.html) where Kristian could experience difficulties to synchronize at lower latencies for up tempo rather than for medium tempo, this didn’t feel unnatural until the latency was set to the upper limit of 50ms one-way. 

Furthermore, playing over 5G Network didn't really make a difference as the same observation as when playing over 4G Network was experienced by the musicians. However, the upload speed, or how fast you can send information from your computer to another device or server on the internet, was significantly improved. While downloading information is more common, NMP requires data to travel in the opposite direction. Playing live music on the network need fast upload speeds in order to send data to the other musician's server. 


**References**

**[1]** Carôt, A., & Werner, C. (2009). *Fundamentals and principles of musical telepresence*. Journal of Science and Technology of the Arts, 1(1), 26-37. https://doi.org/10.7559/citarj.v1i1.6