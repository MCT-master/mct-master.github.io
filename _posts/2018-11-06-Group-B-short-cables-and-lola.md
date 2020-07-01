---
layout: post
title:  "Group B, Short cables and LoLa"
date:   2018-11-06 02:00:00 +0200
categories: portal
author: Mari Lesteberg, Ashane Silva, Shreejay Shreshta, Eigil Aandahl
image: /assets/image/2018_11_06_stefanof_flag-flagpole-italy-pexels.jpg
excerpt: "A few weeks ago we worked on setting up LoLa in the portal. This blogpost got a bit delayed, but we are back!"
---

<figure>
<img src="/assets/image/2018_11_06_stefanof_flag-flagpole-italy-pexels.jpg" alt="Italian flag" width="40%" />
</figure>

A few weeks ago we worked on setting up LoLa in the portal. This blogpost got a bit delayed, but we are back!

Developed by Conservatorio di Musica Giuseppe Tartini from Trieste in collaboration with GARR, the Italian Research and Academic Network, [LoLa](https://lola.conts.it/) is a low-latency audio and video transmission system with high quality that runs as software on off-the-shelf components. However, it should be mentioned that LoLa is quite particular about which off-the-shelf components are needed, as specified in the [LoLa-manual](https://lola.conts.it/downloads/Lola_Manual_1.5.0_rev_001.pdf) (links to an external download).

In Oslo, we got a lot of help from [Anders](https://www.hf.uio.no/english/people/admin/fac/it-av/andeta/index.html), our guru. He taught us everything we needed to know about LoLa. First, we connected LoLa with the local network to try out the setup. We found out that it was time to use the extended classroom solution with a BenQ projector and started to move furniture and equipment for LoLa to the projector wall in the Oslo Portal. As mentioned, you can't use just any equipment you want with LoLa. LoLa is choosy, LoLa knows what she wants. There is only one computer in the Oslo portal that runs LoLa, and this computer has to be exclusivly for LoLa only. LoLa also requires particular models of USB-3 cameras, and the USB cable used with these cameras must be less than 3 meters, which is sooo short. We were using a [Ximea camera](https://www.ximea.com/) in Oslo, and a [Point Grey camera](https://www.ptgrey.com/) in Trondheim, both should be compatible with LoLa. So if you want to move the camera somewhere, you have to move the whole computer. And that's not just a tiny laptop, that is a 10 kg giga Fractal Design cabinet stuffed with the best you can get regarding computer components. Anders says, by the way, that the computer would be a brilliant computer for gaming. But that is not gonna happen. This computer is for LoLa only.

<figure>
<img src="/assets/image/2018_11_06_stefanof_Lola_camera.jpg" alt="Camera mounted" width="40%" />
<figcaption>Fig 1: Ximea USB-3 camera in Oslo</figcaption>
</figure>

So, after moving all the equipment to the projector wall, we started trying out different settings with LoLa. We started with the lowest resolution, choosing black and white over colours. But for some reason, Oslo kept streaming in colours, even when choosing black and white. We soon figured out that we couldn't really send much data over the local network before the image got frozen due to high bandwidth usage.

<figure>
<img src="/assets/image/2018_11_06_stefanof_Lola_setup1.jpg" alt="Audio setup for LoLa" width="40%" />
<figcaption>Fig 2:  LoLa setup interface</figcaption>
</figure>

In Trondheim, we had a similarly specced computer with a quite powerful GPU, soundcard and memory. However, to our great frustration, the computer malfunctioned when trying to run LoLa, leaking memory and running at full capacity all the time (see figure 3).

<figure>
<img src="/assets/image/2018_11_06_stefanof_Lola_memory_usage_high.PNG" alt="Task manager showing high CPU and memory usage">
  <figcaption>Fig 3: Trondheim computer performance malfunction</figcaption>
 </figure>

Some troubleshooting was in order, and for some reason, an update of the Nvidia GPU seemed to solve the memory problem. Alas, the issue with the CPU kept on going, but only when a camera was being used with LoLa, so we were able to keep testing the connection and audio while waiting for help with a fresh installation of LoLa.

Next day, our big mission was to get sound working with Lola. Also, we had to move our equipment in Oslo back to the end corner of the classroom, because we were going to try out the optical fiber network connection (the same that is used with Tico). And the fiber network cable is short, soo short and fragile.

First thing we discovered was how kick-ass the fiber network really is. Ten times the bandwidth of the other connection. Yesterday, we barely were able to stream in black and white with very low resolution and with high amounts of compression. With the fiber network connection, we could send gigabits of data per second, without problems. The sound quality was also extremly good.

<iframe width="560" height="315" src="https://www.youtube.com/embed/lIEN-tkDeJ8?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<br>

LoLa is able to transmit video and audio at near imperceptible low latency, making it useful for live music collaboration. However, since it is quite picky when it comes to the hardware being used, it is a bit hard to work with, technically, and especially with regards to the image that we got using the USB-3 cameras. One thing we will probably use it for is multi-channel audio, which we sadly didn't get to test this time. LoLa supports up to 10 channels of audio in each direction, and using a breakout box, we can connect many instruments or effects at each end in real-time.

So we haven't heard the last from LoLa.
