---
layout: post
title: Testing Two Approaches to Performing with Latency
date: 2023-02-16
categories: networked-music
author: Aysima Karcaaltincaba, Emin Memis, Jack Hardwick, Kristian Eicke
image: /assets/image/2023_02_16_aysimab_latency_assignment_thumbnail.jpeg
keywords: portal, audio, latency, programming
excerpt: "We tested two approaches to dealing with latency in network music. Read all about it!"
---

# Introduction

<figure style="float: none">
   <img
      src="/assets/image/2023_02_17_jackeh_msa_lba_diagrams.jpg" width="75%" />
   <figcaption>The Master-Slave Approach (left) and Laid Back Approach (right) as illustrated by Carôt and Werner.</figcaption>
</figure>

This semester in Physical-Virtual Communication and Music 2, we have been both designing networked music performances and reading about the experiments of others - the challenges they have faced and the lessons they have learned. We set out to investigate the various strategies to work with latency in Network Music Performances presented by Alexander Carôt and Christian Werner in [Fundamentals and Principles of Music Telepresence](https://revistas.ucp.pt/index.php/jsta/article/view/6956). In this blog we will pass on some of our insights about using the Master-Slave Approach (MSA) and Laid Back Approach (LBA) for network musical performances in high-latency situations.

In the Master-Slave Approach, one performer/location is the 'master' while the second location is the 'slave'. The master performs without regard for the slave and therefore has control of the tempo. The slave then simply follows the master as they hear it. This results in the illusion of perfect sync for the slave, while the master receives the slave's audio delayed from their original performance by the RTT latency of the system.

In the Laid-Back Approach, a more collaborative relationship is established between performers/locations. In this approach the performers are to listen to and follow each other, thus maintaining tempo is the equal responsibility of both parties.

# Setting Up

## The Challenge of Stable Latency

Our main problem was maintaining stable latency. We initially planned to use SonoBus for our performance, but preliminary latency testing using the software gave wildly varying results for the latency in the system. In our initial measurements, the round trip latency was 41 ms. However, from there we saw a approximately linear increase over the course of 30 minutes. When we manually added delay using the Portal's Midas M32 mixer, the latency measurements did not increase as we expected. When we then removed this extra delay, the inherent latency of our system had increased by several milliseconds from our previous measurement - far beyond the expected amount of network jitter.

| No Delay | 10ms Delay on Send | 10ms Delay on Receive | 10ms Delay on Both |
|----------|--------------------|-----------------------|--------------------|
| 44ms     | 44ms               | 57ms                  | 57ms               |
| 50ms     | 50ms               | 63ms                  | 63ms               |
| 53ms     | 56ms               | 68ms                  | 68ms               |

*Table 1: Our calculated latency amounts in milliseconds while adding and removing artifical delay. Note the 'No Delay' numbers increasing over time, which was the main source of our initial confusion.*

After these confusing results, we decided to conduct our performance with the LOLA software on the Portal and Videoroom LOLA computers instead.* Then we were able to obtain a stable latency of 21 ms - a good baseline from which to manually add latency in order to test the MSA and LBA approaches.

<sub>* We experienced these issues when using SonoBus to record latency measurements despite entirely manual settings, therefore we cannot recommend it for that specific purpose. However, both ourselves and other MCT students have found SonoBus ideal for quickly setting up high-quality network rehearsals, performances, and recordings, therefore we can easily recommend SonoBus as a user-friendly solution for those purposes.</sub>

<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_02_16_aysimab_latency_assignment.jpeg?alt=original" width="75%" />
   <figcaption>Kristian and Jack performing together with increased latency between the Portal and the Videoroom.</figcaption>
</figure>

## Audio Routing Diagram

Once we decided to switch our testing from SonoBus to the LOLA software, things moved along more smoothly. The Portal and Videoroom LOLA PC's were connected to the LOLA network for audio and video streaming. An external laptop running Ableton Live and an sound card were used to a) record audio of our performances, and b) provide the click track for Kristian to play with for the Master Slave Approach.

<figure style="float: none">
   <img
      src="/assets/image/2023_02_17_jackeh_MSA_LBA_routing_diagram.png" width="75%" />
   <figcaption>Our audio routing in the Portal and the Videoroom.</figcaption>
</figure>

# Testing the Approaches

We decided to test the suitability of each approach at multiple levels of latency and playing at different speeds. We tested each approach four times as follows:
- Playing to a half-time beat at 120 BPM with 50 ms round trip latency (RTT), or 25ms one-way
- Playing at regular beat at 120 BPM with 50 ms RTT/25 one-way
- Playing at a half-time beat at 120 BPM with 100 ms RTT/50 one-way
- Playing at regular beat at 120 BPM with 100 ms RTT/50 one-way

For our tests Kristian played the e-drums in the Portal while Jack played violin in the Videoroom. Kristian and Jack could see each other on video through LOLA and the Ximea cameras. Unlike the audio over LOLA, this video was never subject to any artificial latency.

## Master Slave Approach

We found the master-slave approach to work well with both 50 and 100ms of RTT latency with the half-time beat. For Kristian on drums, it initially took some adjusting to focus just on the click track and mentally block out the delayed signal from Jack. However after this adjustment it was relatively easy to perform with the latency. This approach was very straightforward for Jack in the Videoroom as he simply had to play in time with the audio he received from Kristian.

Playing with the regular beat at 120BPM with 50ms of RTT latency was also fairly easy using the MSA. Kristian was able to adapt to the latency similarly to the half-time beat, and it felt the same as the half-time beat for Jack as he was not directly dealing with latency. It was slightly more difficult with 100ms of latency, but still playable.

## Laid Back Approach

We found it fairly straightforward to keep in time with each other while performing the half-time beat using the LBA with 50ms of RTT latency. However, as we performed this approach without using a click track, it did have a tendency to slow down over time. This is a common pitfall of performing with latency, so it is unsurprising that we also found it to be an issue here. This problem was further amplified when we tried performing the half-time beat with 100ms of latency.

The laid back approach was less effective when performing the regular beat at 120BPM with 50ms of RTT latency. The faster beat increased the cognitive load for both Kristian and Jack significantly. We required several takes before we were able to hold together for more than a few bars, and the tempo also slowed down as it did with the half-time beat. This may have been partly due to the fact that neither are regularly performing currently, so our internal tempi are not what they once were. It is likely that professional session musicians would be able to adapt to this latency much better than we could.

The regular beat with 100ms of latency proved even trickier to manage. Once again, it took several takes for us to adjust and the music slowed down over the course of the performance.

# Watch the Video

Here is the audio-video recording of each test, along with our comments on our personal experience during the process.
<iframe width="560" height="315" src="https://www.youtube.com/embed/RIJ6EN1oLik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# Conclusion

Carôt and Werner present several approaches for dealing with high-latency systems for network musical performance. We set out to test two of these, the Master-Slave Approach and the Laid Back Approach, with different levels of latency and at different speeds. While the MSA required some initial adjustment by the master, we found it to be usable from a performance perspective at varying levels of latency, and to a lesser extent with both slow and fast music.

Meanwhile, although the LBA worked well at with the slower beat and with lower latency, we found it difficult to manage in faster music and with high latency.

While both approaches have their place within NMP settings, we feel that they are more effective for music which doesn't require precise synchronisation, such as ambient/experimental or relaxed jazz styles, or for slower music.

# References

[1] A. Carôt and C. Werner, ‘Fundamentals and principles of musical telepresence’, *Journal of Science and Technology of the Arts*, pp. 26–37, Jan. 2009, doi: 10.7559/CITARJ.V1I1.6.