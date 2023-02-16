---
layout: post
title: Performing with Latency
date: 2023-02-16
categories: interactive-music
author: Aysima Karcaaltincaba, Emin Memis, Jack Hardwick, Kristian Eicke
image: /assets/image/2022_12_07_aysimab_dataset_cover.jpg
keywords: portal, audio, latency, programming
excerpt: "Latency in the beat"
---

## Introduction

As part of our assignment in Physical-Virtual Communication and Music we have been designing networked music performances and also reading about other experiments - the challenges they have faced and the lessons learned. We set out to investigate the various strategies to work with latency in Network Music Performances presented by Alexander Carôt and Christian Werner in [Fundamentals and Principles of Music Telepresence Paper](https://revistas.ucp.pt/index.php/jsta/article/view/6956). In this blog we will pass on some of our insights about the Master-Slave Approach (MSA) and Laid Back Approach (LBA).

### Our Setup

### The Challenge of Stable Latency

Our main problem was maintaining stable latency. First we planned to use Sonobus for our performance but we ended up spending six hours to understand why latency kept increasing! When we started measuring the latency, the round trip latency was 41 ms while every five mins it was increasing 3 more ms! In addition to that the delay we added didnt make sense either. We have added 10 ms delay from Midas and it increased latency for 13 ms while adding delay to both directions made no difference and only added 13 other than 20.

<figure>
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_02_16_aysimab_latency_assignment_unstable_l0atencies.jpeg?alt=original" />
   <figcaption>Our latency numbers in ms while adding and removing the delay, possible to see "No Delay" numbers also increasing</figcaption>
</figure>

As a conclusion, we stopped using Sonobus and did our setup by using Lola between Portal and Video Room Lola computers. Then we were able to obtain a stable latency of 21 ms and we were yet able to increase the delay by Midas as we wished.

<figure>
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_02_16_aysimab_latency_assignment.jpeg?alt=original" />
   <figcaption>Performing together with increased latency in Portal</figcaption>
</figure>

### Master - Slave Approach


### Laid Back Approach



