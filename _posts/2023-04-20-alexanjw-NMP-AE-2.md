---
layout: post
title: "Audio Engineering for NMPs: Part 2"
date: 2023-04-20
categories: portal
author: Alexander Wastnidge
image: /assets/image/2023_04_23_alexjw_nmps_ae_equip.jpg
keywords: portal, audio, NMP, audio engineering, Telematic music
excerpt: "A deeper dive into mixer work for NMPs"
---

# Audio Engineering for NMPs: Part 2

Building on the previous [blog post](https://mct-master.github.io/portal/2022/11/24/alexanjw-audio-engineering-nmps.html), which offers a high level overview of the extra considerations for audio engineers working with Network Music Performances (NMPs), this post will take a detailed look at examples for audio routing, with particular focus on the mixer and ADC/DAC.

#### Video Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/ifYwDc8nebI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

This video tutorial covers the details and considerations for two key methods of audio routing for NMPs.  These are summarized below:

##### Sending Via Auxiliary Sends
Using auxiliary sends for audio routing represents a simple and efficient method for sending audio over a network.  Using one or a pair of aux sends results in a mono or stereo summed signal, akin to sending a monitor/foldback mix to performers.

Receiving this signal requires only a single mono or stereo input on the receiving mixing desk, which can be bussed to FOH or foldback as needed.

Being only a mono or stereo audio feed, its load on the network connection is minimal.  This does however, come at the expense of flexibility and control for the engineer receiving it.  They cannot control the relative volumes of instruments in the feed, meaning that if changes to the mix are need they must contact the remote engineer to alter it.

##### Sending Via Sub-Groups
Sending via sub-groups on the other hand, offers greater flexibility for the corresponding audio engineer at the expense of greater network load.  In the video demonstration, four channels of audio are sent over the network, doubling the amount of audio information compared to the first example. Whether this is a viable approach will depend on the network system being used, as well as its stability and latency, which is outside the scope of this tutorial.

The advantage of this method is that the receiving engineer is given separate instrument feeds which can be patched into the mixer and processed in a way similar to any of the other local sources present.  This does however, also necessitate a mixer with a channel count able to accommodate both the local and remote sound sources.


#### Conclusion and Further Considerations
This tutorial and blog post has looked at the specifics of working with the mixer and ADC/DAC in the context of NMPs, demonstrating two key methods and concepts for sending and receiving audio over a network.

As stated, the two methods shown do not have to be used in isolation.  They can be used asynchronously across the two locations for a "best of both worlds" scenario taking the techniques most appropriate for each engineer's needs.  For more complex sessions they can also be combined to provide control over a greater number  of channels.

An alternative for more advanced users, would be to split the incoming signals. One feed would be sent to the mixer but would only be used for FOH mixing and foldback. The second feed would be sent directly to the ADC, bypassing the mixer and any need to send network audio via it at all.  This represents a setup with the greatest amount of flexibility and complexity.  It essentially builds on the concept of having separate FOH and foldback engineers in that it adds another separate stream of audio which would ideally be handled by another dedicated member of personnel.  Again, this method would only be recommended where ensembles are large enough that the added channel count is necessary, the network system used is robust enough to carry the higher number of audio streams, and where engineers are suitably familiar with the previously covered techniques for audio engineering for NMPs.