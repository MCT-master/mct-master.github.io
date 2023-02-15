---
layout: post
title: "Designing DFA and LAA Network Music Performances"
date: 2023-02-16
categories: portal
author: Alexander Wastnidge, Fabian
image: 
keywords: telematic music, LoLa, low latency, Sonobus
excerpt: "Music Performances in High Latency"
---



# Two Configurations for Network Music Performances in High Latency Environments

Much time, effort and research in the field of NMPs goes into the reduction of latency.  For seamless music performances over a network, the latency needs to be imperceptible to musicians.  Due to the nature of many remote solutions, especially those available at a consumer level, this is often not possible and latency can be at levels making synchronised music performance unworkable.

In their paper linked below, Alexander Carôt and Christian Werner propose several configurations for working with situations where latency is unavoidably high.  These revolve around, rather than attempting to reduce latency, to accept its presence and potentially use it to form part of the music or synchronisation.  These are often based on one location being termed the "master" for the sake synchronisation, with the second being the "slave".  Here we will instead use the terms primary and secondary nodes to denote this.  Our groups attempted to implement the following two configurations:

**Delayed Feedback Approach** involves delaying the primary node's signal relevant to the roundtrip latency as to sound the same as how the secondary node will experience it.

**Latency Accepting Approach** revolves around not attempting to improve or optimise latency in any way and instead absorb it into the creative content of the performance.


## Delayed Feedback Approach (DFA)

For this designed performance we used a drum machine at the primary node playing sequenced drum patterns and a synthesizer at the secondary node played by a human musician.

The design of this configuration was that the drum machine would be transmitted across the network in its latency-rich state to the secondary node.  The performer at the secondary node would play along with the drum machine, transmitting the output from the synthesizer back to the primary node, again with unaffected high latency.

With the synthesizer signal being returned to the primary with latency, we added a sample delay to the monitor path of the drum machine which was equal to half of to the total latency in the system.  As such, as the synthesizer was only travelling one way across the network, when the secondary node's signal and the delayed drum machine monitor signal booth played, they sounded in time.


<figure style="float: none">
   <img
      src="/assets/image/2023_02_15_alexanjw_roundtrip_diagram.jpg"
      style="max-height:600px; width:auto;" />
   <figcaption>To set this up we first had to artificially create a latency-rich system and then measure the total roundtrip latency present.</figcaption>
</figure>

<figure style="float: none">
   <img
      src="/assets/image/2023_02_15_alexanjw_waveforms.png"
      style="max-height:600px; width:auto;" />
   <figcaption>This was done by sending a click through the system and recording on return</figcaption>
</figure>

<figure style="float: none">
   <img
      src="/assets/image/2023_02_15_alexanjw_roundtrip.png"
      style="max-height:600px; width:auto;" />
   <figcaption>Taking the average lengths between the two clicks gave the total roundtrip latency</figcaption>
</figure>

<figure style="float: none">
   <img
      src="/assets/image/2023_02_15_alexanjw_delay.png"
      style="max-height:600px; width:auto;" />
   <figcaption>This was measured in samples in order to use an effect to introduce a sample delay equal to half the roundtrip latency.</figcaption>
</figure>

<iframe width="560" height="315" src="https://www.youtube.com/embed/-Og_EoKAVhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
Here is the performance using the DFA configuration.  The audio is recorded from the mixer at the primary node with a mix of the returned synthesizer signal and the delayed drum machine monitor signal.  As you can hopefully see, this audio lines up perfectly with the footage from the secondary node, implying that the delayed monitor path was configured correctly.

## Latency Accepting Approach

