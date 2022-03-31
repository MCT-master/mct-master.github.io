---
layout: post
title: "Does 5G live up to the hype?"
date: 2022-03-31 12:00:00 +0200
categories: portal
author: Aleksander Tidemann
image: /assets/image/2022_03_31_aleksati_5gCover1.jpeg
keywords: networked music performances, telematic music, 5g network, Telenor Research, Lola, Jacktrip, audio and video latency
excerpt: "We did a small experiment at UiO to test the feasibility of using 5G networks for live networked music performances. Here are the results/verdict."
---

<figure style="float: none">
   <img src="/assets/image/2022_03_20_josephcl_sonic_pi_header.png" alt="Alternate Text" width="auto" />
</figure>

"Can We Play Music Together Over 5G Networks"

# Introduction

wireless mobile network
What is 5g?
5g
next paradigm of telecommunication netwo

much faster, larger capacity, more maintabale and the list goes on.

Broadcasting on higher wavelength gives more bandwidth, but tradeoff is range.

Therefore, real 5g will require a totally renewed, and more de-centralized, network infrastructure based on smaller cells.

To know more
Lots of videos on "All you need to know about 5g" on YouTube.

### network music performances

What is the promise of 5g in terms of networked music performances?
Why is music so hard to deal with in terms of latency?? link to a paper or two.
We are interested in testing it out..

### Telenor involvement

At MCT, we have super high end hardware and software for ultra-low latency.
Here we set out to test if the fake 5g network could handle our system, and get an idea of wheter doing real NMP and music over the 5g over networks is actually going to work.

We got in touch with Telenor to test.
Telenor has been doing research and experiments on this before..
We got modemss

Preliminary testing(!)

With the ultimate goal being full NMP's using only our equiptment and the Telenor 5g network.

# Experiment Setup

### Time and Place

Location, what we had, etc.. when,
5g Coverage in that area

### 5g Coverage

Is it the actual 5g network? No, more like 1/3 of 5g
Explain why.

Modem coverage
ping time between two machines
speed test results.

### Hardware and Software Used

LOLA machines
Tried to use two different software systems for NMP, jacktrip and Lola

Lola can send video as well, which is a great addition.

# Method

We tested the latency and quality of audio and video transmission.
So having a good latency does not mean the quality of the AV signal is usable.
We are only interested in cases where we can actually use the system for audio and video transmission

How we actual did the experiement
Explain the audio latency routing.
Explain the method for testing what the audio quality..

Loopback into audacity
compared that signal with a bare network latency test over jacktrip

Video latency as well.

# Results

We only got decent result using 512 buffer size. That was the lowest buffersize we could used that sufficiently tolerated the network jitter. Otherwise, the system would be completely unusable due to massive dropouts. Again, we are only intereted in what actually works, practically.

Tuning buffers in Lola helped, but did not work ..

audio roundtrip was 165ms. very stable. one-way latency
the network roundtrip was 95-100ms.

Give an audio example of 165 ms of audio (just use Max)

Video was better. we got a decent result using ..
adjust video buffer
Latency of 116ms for video.
Show the video

# Summary and The Way Forward

The bare minimum technical necessity of doing a NMP is to have stable AV connection between two locations.
Meaning a pleasent and contonous stream of audio and video.

Important to stress the fact that without a rock solid network connection with ultra-low latency, live networked music rehersals/performances/events are unlikely to have any serious commercial application.

In terms of the strategies? Could it work? Maybe..

Lots of restrictions..

However, we only tested a fake version.

The idea now is to test on an actual 5g network. In theory, it should produce better results. utilizing the power of the entire 5g System Architecture.

Going forward, this needs to be examined.

In my personal option; a stable and high-bandwidt system with a roundtrip latency less than 50ms would be measure of a success.

Considering the limitations of wireless telecommunication systems.
