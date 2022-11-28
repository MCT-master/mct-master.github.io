---
layout: post
title: Bringing the (Optic) Fibre Ensemble to Life - Behind the Scenes of a Telematic Music Performance
date: 2022-11-28
categories: portal
author: Kristian Eicke, Jack Hardwick
image: /assets/image/2022_11_28_jackeh_kristeic_concert_preview_image.jpg
keywords: telematic, performance, network, ritmo
excerpt: What does it take to put on a telematic music performance? Cable spaghetti of course!
---

## Introduction

On Tuesday 22 November 2022 we held our second network musical performance of the semester between the Science Library and RITMO on the UiO campus. Read below to find out about all the technology that went into bringing the music of the newly-formed (Optic) Fibre Ensemble to life.

This concert formed part of a two-day workshop arranged by Çağrı Erdem called [Embodied Perspectives on Musical AI](https://www.uio.no/ritmo/english/news-and-events/events/workshops/2022/embodied-ai/index.html). We were the evening’s entertainment for some of the brightest minds in musical machine learning, so the stakes were high.

<figure style="float: none">
   <img src="/assets/image/2022_11_28_jackeh_kristeic_science_library_setup.jpg" width="100%" />
   <figcaption>Setting up the concert at the Science Library</figcaption>
</figure>

You can watch the full concert online [here](https://youtu.be/pIq6TP2ox5c?t=416) as part of the workshop.

## Technical Background

This concert was an example of telematic music, or music that is performed between multiple physical locations in real time thanks to network communications technology. We can also call such an event a network musical performance, or NMP. At UiO, we use specialised software called [LOLA](https://lola.conts.it/) to stream real-time, high-quality audio and video over a network with very low latency.

At both locations we used the NMP portable kits. These kits allow us to connect to our UiO LOLA network from a variety of locations around campus, including the two locations for this performance. Our kits include everything we need for a barebones NMP performance, such as the specialised PC, audio interface and camera required by the LOLA software, as well as a 16-channel mixer, a dedicated headphone amplifier, a projector and more. You can read more about the specific equipment included in these kits [here](https://github.com/MCT-master/NMP-Portable-Kits).

## Science Library

<figure style="float: none">
   <img src="/assets/image/2022_11_28_jackeh_kristeic_science_library_setup_2.jpg" width="75%" />
   <figcaption>Alex works the mixer while Nino practices piano</figcaption>
</figure>

The technical team at the Science Library consisted of our colleagues Alex, Iosif and Aysima. This location served as the front of house for the event, and was also where two of the four performers were located. Nino sang and played piano and guitar, while Emin played the e-drums and [ney](https://en.wikipedia.org/wiki/Ney). Alex was primarily responsible for audio routing and front of house sound, Aysima handled the LOLA software and associated video, and Iosif was in charge of the livestreaming of the event.

The original plan two weeks before the concert was to use a spatial audio system run through a Max patch designed by Masoud. However, we later realised that this was not quite feasible due to the sheer amount of outputs required from the mixer as well as the CPU demands on Masoud’s laptop. As a result, we scaled down our ambitions to an extended stereo system. The wall-mounted speakers in the Science Library provided the majority of the front of house sound, while a pair of large Genelec speakers on the stage were used for the final piece of the concert.

## RITMO

<figure style="float: none">
   <img src="/assets/image/2022_11_28_jackeh_kristeic_ritmo_gallery.jpg" width="75%" />
   <figcaption>Team RITMO getting ready to soundcheck over LOLA</figcaption>
</figure>

The RITMO technical team consisted of your authors Kristian and Jack, while Masoud and Fabian were the remote performers. Masoud sang and performed a patch in Max/MSP, while Fabian played the bass guitar and the [no-input mixing board](https://mct-master.github.io/audio-programming/2022/10/01/fabianst-no-input-mixing-pd.html). Helpfully for the technicians, both of these setups connected to the performers’ audio interfaces. This meant that we only needed to send line inputs into the mixer on the NMP kit and connect a simple Shure SM58 vocal microphone for Masoud.

## Conclusion

We had nearly two full days set aside to assemble, rehearse and perform this concert, and it filled a vast majority of it. NMPs certainly take time to get working correctly, but when you get there the results can be brilliant. In this case we were very happy with the concert we managed to pull off, and look forward to getting stuck into more NMP wizardry next semester.

## Other Links

* For a full technical breakdown of the concert, read our wiki page [here](https://github.com/MCT-master/portal-wiki/wiki/MCT-Telematic-Concert---RITMO-and-Science-Library---Technical-documentation---November-2022).
* Check the MCT blog for a full report by the performers in this concert. They composed some stunning original music which you should also read about.