---
layout: post
title: "NMP kit Tutorial"
date: 2023-04-23 19:00:00 +0200
categories: networked-music
author: Henrik Sveen
image: /assets/image/2023_04_22_henrikhs_mrnmp.jpg
keywords: portal, nmp
excerpt: "A practical tutorial on the NMP kits."
---

<figure style="float: none">
   <img src="/assets/image/2023_04_22_henrikhs_nmpkit.jpg" alt="Alternate Text" title="Image Title" width="auto" />
   <figcaption>NMP Kit</figcaption>
</figure>

This is a tutorial for getting started with the NMP (Network Music Performance) kits. It focuses on practical use of the kits and does not go into theoretical detail on what a NMP is and how the different softwares (LoLa, JackTrip, SonoBus etc.) works. Audio signal flow and solutions for routing audio in the system is covered, however - there are many solutions to this, so consider the ways shown in the video as a starting point for understanding audio routing in the NMP kit.

To start with, we need to take off the flight case lids and store them somewhere safe. The kit comes with an audio cable case and a computer cable case. From the computer cable case, grab the ethernet cable and connect to the ethernet PCI on the back of the computer. Do not connect to the motherboard.
There are two screens. One of them is an ultra fast gaming monitor for stage performers to see the network performers. The other one is for the NMP engineer to use with the rack computer. There is also an ultra fast projector to project network performers together with local performers. Connect to the GPU PCI on the back of the computer using HDMI or DisplayPort.

Be careful when getting the Ximea camera from the rack drawer. Mount it on the Manfrotto camera stand and connect the camera USB to the camera and to the computer’s USB 3.0 PCI on the back.
Grab the mouse and keyboard from the rack drawer and turn on the computer power supply (back) and on/off button (front right side). Log in.
Launch TotalMix and LoLa and adjust buffer settings and options to optimize your network connection.

The mixer can be used to mix down input sources to a stereo mix which can be sent over the network. It’s also possible to send multiple channels, by using group output 1-2 and 3-4. This gives a total of six channels. ADAT inputs can also be used directly, but this requires splitting the input signal to the mixer, or that these signals get mixed to the speakers connected to the mixer’s main outputs using TotalMix. There are many workarounds, so use the ones needed for your setup.

Network audio 1-2 is received on channel 15-16 on the mixer. For receiving more channels, network audio 3-4 can be routed via the headphone amplifier, and ADAT outputs 5-8 are idle and ready to be used. Though it might not be the easiest setup to mix with, as the mixer has stereo channels from channel 9-16.

Cable management is important for maintaining the kit during use. Fold the cable by following the natural bend of the cable. Both audio and computer cables should be wrapped using the attached cable straps before putting them back in the designated cable cases.


#### NMP Kit Tutorial - Getting Started
<figure style="float: none">
  <video width="auto" controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/video/2023_04_22_henrikhs_nmp_tut.mp4" type='video/mp4'>
  </video>
</figure>

For more and detailed information, please see the [NMP Wiki](https://github.com/MCT-master/NMP-Portable-Kits/wiki).

Thank you.
