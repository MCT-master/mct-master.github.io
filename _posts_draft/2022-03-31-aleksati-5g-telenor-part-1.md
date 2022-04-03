---
layout: post
title: "Networked Music Performances over 5G - Will It Actually Work? (part 1)"
date: 2022-03-31 12:00:00 +0200
categories: portal
author: Aleksander Tidemann
image: /assets/image/2022_04_01_aleksati_5g_telenor_modems_outside_salen1.jpg
keywords: networked music performances, telematic music, 5g network, Telenor Research, Lola, Jacktrip, audio and video latency
excerpt: "We did a small experiment to test the feasibility of using 5G networks for live networked music performances. Here are the preliminary results."
---

5G is the new paradigm of telecommunication and wireless networking. But what is so great about 5G? Any YouTube or Google search will tell you that 5G offers not only one but great many upgrades to the current 4G architecture. For most users, the biggest difference from 4G to 5G will be a massive increase in network bandwidth, or sheer speed. Norwegian telecommunication companies like [Telenor](https://www.telenor.no/5g/) and [Telia](https://www.telia.no/nett/5g/) frequently advertise the anticipated speed of 5G, promising a mobile network that can accommodate activities such as remote-controlled surgery from afar, distributed sporting events and even networked music performances (NMP).

<figure style="float: none">
   <img src="/assets/image/2022_04_01_aleksati_5g_telenor_modems_outside_salen1.jpg" alt="5g_modems_outside" title="Image Title" width="auto" />
   <figcaption>This should be the video from Telenor, I think</figcaption>
</figure>

Based on years of experience, we at [MCT](https://www.uio.no/english/studies/programmes/mct-master/) are naturally skeptical to promises of stable musicking over any sort of network. The most important reason for this is that NMPs have exceptionally high demands for low-latency communication (**SOURCE**). Usually, we don't pay much attention to the latency we experience online in everyday life. However, doing synchronous and more interactive activities over the network requires sensitivity and precision that only specialized systems can provide. The research tells us that the minimum roundtrip audio latency (back and forth) to conduct meaningful and rhythmic NMPs is around 25-30ms. For perspective, sound in the air travels 12 meters in 25ms. Here is also what a 25ms delay sounds like:

(**insert audio...**)

So when I say that we are interested to put 5G to the test, you know we mean business. Luckily, Telenor wanted to know if their network could rise to the challenge, so they sent us a couple of custom-configured routers to use on a limited 5G network (more on this in a bit). In this post, we present our first technical experiments/experiences with this network, testing the feasibility of using 5G for live NMPs.

# Experiment Setup

It's important to clarify that **the mobile network we investigated in this experiment was not the real 5G network**. But what do I mean by this? Well, the 5G infrastructure has yet to be rolled out for commercial use in many areas in Norway. Therefore, to do our experiment, we had to make use of specially configured solutions, essentially testing 5G broadband technology on a 4G system. So when we refer to the _5G network_ in this article, we really mean a limited network that is maybe representative of about 1/3 or 2/3 of 5G's true capacity.

## Routers

For the experiment, we used two Huawei MBB Pilot 5G Routers that were configured by Telenor Research to give us access to specific packet-routing servers that, in theory, should have allowed for faster communication between our machines.

<figure style="float: none">
   <img src="/assets/image/2022_04_01_aleksati_5g_telenor_modems_outside_salen2.jpg" alt="5g_telenor_modems_outside_salen2" title="5g_telenor_modems_outside_salen2" width="80%" />
   <figcaption></figcaption>
</figure>

## Time, Place and Coverage

The experiments were carried out on March 30th, 2022, between 10am-3pm, at the Department of Musicology, University of Oslo. We got good estimates of our network reception using the routers' own location optimizing software and Telenor's [online coverage map](https://www.telenor.no/dekning/#dekningskart), as seen below. Since the 5G reception inside our department was quite poor, we placed the routers outside and further south of our department, facing the NRK building. Here, we managed to get a pretty stable 75% coverage rate with the devices placed at 1.5 meters distance from each other.

<figure style="float: left">
    <div style="display:flex;">
        <div>
            <img src="/assets/image/2022_04_01_aleksati_5g_telenor_modem_coverage.png" alt="5g_telenor_modems_outside" title="5g_telenor_modems_outside" width="96%" />
        </div>
        <div>
            <img src="/assets/image/2022_04_01_aleksati_5g_telenor_coverage.jpg" alt="5g_telenor_coverage" title="5g_telenor_coverage" width="auto"/>
        </div>
    </div>
    <figcaption> visit our [exact modem coordinates](https://goo.gl/maps/VJXb1KhEBAaPhz4x6)</figcaption>
</figure>

## Hardware and Software

Besides the Huawei routers, we used two custom configured hardware systems specifically designed to provide optimal conditions for NMPs, built by us at MCT. The two _Lola racks_, as they are called, are essentially bundles of high-end software, audio/video peripherals and networking tools which can provide the lowest possible latency on audio/video transmission over the network, if all the pieces of the puzzle are correct.

Full documenatation and more detailed info about the Lola racks will be avaliable here at our GitHub a short while:

- [https://github.com/MCT-master/NMP-Portable-Kits](https://github.com/MCT-master/NMP-Portable-Kits)

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_lolaracks.jpg" alt="5g_telenor_lolaracks" title="5g_telenor_lolaracks" width="80%" />
    <figcaption>Our two Lola racks in action, specifically designed to provide ultra low-latency for NMPs.</figcaption>
</figure>

The _Lola racks_ get their name from the [Lola software](https://lola.conts.it), a high-end AV transmission software. Lola has been our go-to choice for NMPs for years now. The software requires premium GPUs, soundcards with very stable ASIO drivers (such as RME that buffer as low as 32 samples), and specialized XIMEA video cameras that send uncompressed video via USB 3 to provide ultra-low latency audio and video transmission.

In addition to Lola, we also used the [JackTrip software](https://www.jacktrip.org) for this experiment. JackTrip is audio-only but enables us to use low-end laptops and soundcards to transmit uncompressed audio, effectively tolerating a more jittery network.

# Method

To test the feasibility of using 5G networks for live NMPs, we need to find the best tradeoff between technical stability, quality and latency on the network. Having low latency does not mean the quality of the AV signal is usable, and vice versa. To do this, we did three principal investigations.

## 1. Measuring the Bandwidth

By using network utility Ping and an [online network speed testing tool](https://www.speedtest.net/) we made approximations on the network performance throughout the experiment to ensure our transmission was within range of the avaliable bandwidth. Additionally, these tools gave us rough estimates on the ping time network latency.

## 2. Finding the Sweet Spot

By looping back a constant audio and video stream between the two machines, we were able to continously monitor the AV quality and fine-tune software parameter to acheive glitch-free transmission. This was necessary to find a sweet spot for stable audio and video transmission.

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_sweetspot_method.jpg" alt="5g_telenor_sweetspot_method" title="5g_telenor_sweetspot_method" width="auto" />
    <figcaption>Routing diagram for finding AV sweet spots.</figcaption>
</figure>

We used JackTrip and Lola to find the audio sweet spot, sending 2 channels of 16bit 48kHZ uncompressed audio over the network while adjusting the internal buffer/sample size to find the lowest possible number that ensured stable audio transmission over a significant period (maybe 10minutes total). For video, we used a similar approach with Lola; adjusting the framerate, compression amount, and video resolution to find the sweet spot.

## 3. Measuring the Latency

With the software fine-tuned and configured, we could now measure the audio and video latency using a similar loopback system as described above.

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_latency_method.jpg" alt="5g_telenor_latency_method" title="5g_telenor_latency_method" width="auto" />
    <figcaption>Routing diagram for measuring the audio and video latency.</figcaption>
</figure>

To make the latency measurements for audio, we used a third system (laptop with a designated audio interface) that could send and receive audio from the one of the _Lola racks_. To avoid dealing with any internal system latency of the latop and its audio interface, we closed output 2 to input 1 on the laptop soundcard, as depicted in the diagram below. Identical audio was then sent to output 1 and 2 so we could measure the latency of our external system by looking at the temporal offset between input 1 and 2. As such, we bypassed any issues related to internal system latency of our dedicated laptop and soundcard.

<figure style="float: left">
    <div style="display:flex;">
        <div>
            <img src="/assets/image/2022_04_01_aleksati_5g_telenor_latency_third_laptop_routing.png" 
            alt="5g_telenor_latency_third_laptop_routing" 
            title="5g_telenor_latency_third_laptop_routing" 
            width="auto%" />
        </div>
        <div>
            <img src="/assets/image/2022_04_01_aleksati_5g_telenor_video_latency_routing.png" 
            alt="5g_telenor_video_latency_routing" 
            title="5g_telenor_video_latency_routing" 
            width="95%"/>
        </div>
    </div>
    <figcaption>Routing diagrams of AV latency measurement. On the left, the system for measuring the audio latency. On the right, the system for measuring video latency.</figcaption>
</figure>

Thus, we can compare one input from we get from the _Lola racks_

For video, .. given we have our two monitors

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

## Bandwidth

Our speed testing results varied throughout the experiment, but multiple tests on two different servers showed an average of around 400Mbps download speed, 60Mbps upload speed, and a ping time of about 30-40ms (between one machine and the server). This indicates that transmitting, for instance, 16bit uncompressed audio at 48Khz, which requires 1.5Mbps bandwidth per channel, should be no problem. However, adding video would render us closer to the 100Mpbs/1GB range where things could get interesting. The latency results revealed an average network utility ping time of 130-200ms between our two machines, which is was more concerning.

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_speedtest.png" alt="5g_telenor_speedtest" title="5g_telenor_speedtest" width="80%" />
    <figcaption>Representative speed test between the Department of Musciology, UiO and a server in Oslo through a Huawei MBB Pilot 5G Router on a limited 5G network.</figcaption>
</figure>

## Sweet spot

## Latency

With NMPs, its
Important to explore the best tradeoff between stability/quality and latency

We only got decent result using 512 buffer size. That was the lowest buffersize we could used that sufficiently tolerated the network jitter. Otherwise, the system would be completely unusable due to massive dropouts. Again, we are only intereted in what actually works, practically.

Tuning buffers in Lola helped, but did not work ..

audio roundtrip was 165ms. very stable. one-way latency
the network roundtrip was 95-100ms.

Give an audio example of 165 ms of audio (just use Max)

Video was better. we got a decent result using ..
adjust video buffer
Latency of 116ms for video.
Show the video

# In Summary

With the ultimate goal being if 5G one day can fully support a wide variety of NMPs over their mobile network.

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

# Going Forward

# References
