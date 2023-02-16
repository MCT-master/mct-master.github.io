---
layout: post
title: Performing with Latency
date: 2023-02-16
categories: portal
author: Aysima Karcaaltincaba, Emin Memis, Jack Hardwick, Kristian Eicke
image: /assets/image/2022_12_07_aysimab_dataset_cover.jpg
keywords: portal, audio, latency, programming
excerpt: "Latency in the beat"
---

## Introduction

As part of our assignment in Physical-Virtual Communication and Music we have been designing networked music performances and also reading about other experiments - the challenges they have faced and the lessons learned. We set out to investigate the various strategies to work with latency in Network Music Performances presented by Alexander Carôt and Christian Werner in [Fundamentals and Principles of Music Telepresence Paper](https://revistas.ucp.pt/index.php/jsta/article/view/6956). In this blog we will pass on some of our insights about the Master-Slave Approach (MSA) and Laid Back Approach (LBA).

## Our Setup

### The Challenge of Stable Latency

Our main problem was maintaining stable latency. We initially planned to use Sonobus for our performance, but preliminary latency testing using the software gave wildly varying results for the latency in the system. In our initial measurements, the round trip latency was 41 ms. However, from there we saw a approximately linear increase over the course of 30 minutes. When we manually added delay using the Portal's Midas M32 mixer, the latency measurements did not increase as we expected. When we then removed this extra delay, the inherent latency of our system had increased by several milliseconds from our previous measurement - far beyond the expected amount of network jitter.

<figure>
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_02_16_aysimab_latency_assignment_unstable_l0atencies.jpeg?alt=original" />
   <figcaption>Our latency numbers in ms while adding and removing the delay, possible to see "No Delay" numbers also increasing</figcaption>
</figure>

After these confusing results, we decided to conduct our performance with the LOLA software on the Portal and Videoroom LOLA computers instead. Then we were able to obtain a stable latency of 21 ms - a good baseline from which to manually add latency in order to test the MSA and LBA approaches.

<figure>
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_02_16_aysimab_latency_assignment.jpeg?alt=original" />
   <figcaption>Performing together with increased latency in Portal</figcaption>
</figure>

### Routing Diagram

<figure>
   <img
      src="/assets/image/2023_02_17_jackeh_MSA_LBA_routing_diagram.png" />
   <figcaption>Audio routing within the Portal. The click track was only used for the master-slave approach</figcaption>
</figure>

## Testing the Approaches

We decided to test the suitability of each approach at multiple levels of latency and playing at different speeds. We tested each approach four times as follows:
- Playing to a half-time beat at 120 BPM with 50 ms round trip latency (RTT), or 25ms one-way
- Playing at regular beat at 120 BPM with 50 ms RTT/25 one-way
- Playing at a half-time beat at 60 BPM with 100 ms RTT/50 one-way
- Playing at regular beat at 120 BPM with 100 ms RTT/50 one-way

For our tests Kristian played the e-drums in the Portal while Jack played violin in the Videoroom. Kristian and Jack could see each other on video through LOLA and the Ximea cameras. Unlike the audio over LOLA, this video was never subject to any artificial latency.

### Master Slave Approach

We found the master-slave approach to work well with both 50 and 100ms of RTT latency with the half-time beat. For Kristian on drums, it initially took some adjusting to focus just on the click track and mentally block out the delayed signal from Jack. However after this adjustment it was relatively easy to perform with the latency. This approach was very straightforward for Jack in the Videoroom as he simply had to play in time with the audio he received from Kristian.

Playing with the regular beat at 120BPM with 50ms of RTT latency was also fairly easy. Kristian was able to adapt to the latency similarly to the half-time beat, and it felt the same for Jack as he was not directly dealing with latency. It was slightly more difficult with 100ms of latency, but still playable.

### Laid Back Approach

