---
layout: post
title: "Voice augmentation with sensors"
date: 2020-10-18 12:01:00 +0200
categories: interactive-music-systems
author: Ulrik Halmøy
image: /assets/image/2020_10_18_ulrikah_ims_cover.png
excerpt: "Trying to achieve a choir-like effect by augmenting microphone input with sensory features"
keywords: voice, interactive, bela, pure-data
---

For this project, I wanted to create an interactive music system based on my own voice. Being inspired like Holly Herndon's SPAWN, I tried to investigate ways of making one monophonic voice sound like a full choir. Spoiler alert: it ended up sounding more like a detuned alien than anything else.

## Design

The figure below shows a rough sketch of the signal flow in the application.

![Overview of the signal flow in the system](https://drive.google.com/uc?&id=1a7uEoWy74kwZnscXYSAj5drRV9kQvHg4 "Signal flow")

In short, the microphone input is routed through an effect rack containing five individually tuned voices of a pitch shifter, a distortion and a delay line with feedback. The pressure sensor is mapped to the dry/wet mix of both the pitch shifter and the distortion, with the idea being that *the more force you apply to the microphone, the more extreme the sound*. A soft membrane potentiometer was mapped to the delay time of the delay effect. At last, the piezo microphone triggers an envelope when it picks up signal above a certain threshold. The threshold was set so that you have to hit the surface on which the piezo is lying relatively hard in order to trigger the output. The envelope was mapped to the dry/wet mix of the delay line, creating bursts of a delay/feedback effect.

## Result

The short timestamped snippet below shows how the system sounds.

<figure>
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gEq9EnWrApc?start=1025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <figcaption>Small snippet from the performance</figcaption>
</figure>

The figure below show how the hardware was connected in my system.

![Hardware connections in the system](https://drive.google.com/uc?&id=1wGM_ZqQX3XfROVV7yt6nrnQaV0GHQxOT "Hardware connections in the system")


## Reflection

Due to various circumstances, I didn't get to work as much with this project as I would like to. One of the things I realised too late that I should have set aside more time to design the physical system. Almost until the deadline, I worked only with the software, and with the sensors loosely coupled together on the breadboard, as you can see in the image detailing the hardware connections above. For the next physical interface I'm making, I think I will try to start in the other end - by first sketching out how I want the system to look and feel, and design the audio engine based on the affordances of that physical interface.

Overall, I wasn't too satisfied with the otucome of this project. I would love to spend more time on making more natural sounding choir effects, even though this wasn't the main goal of the course. I also realise that I should have explored more embodied ways of interacting with this instrument, as the current setup don't afford a lot of playability.