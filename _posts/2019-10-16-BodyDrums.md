---
layout: post
title: 'Body Drums - A wearable drumset'
date: 2019-10-12 11:00:00 +0200
categories: interactive-music-systems
author: Elias Sukken Andersen
image: /assets/image/2019_10_12_stefanof_Belasetup.png
Keywords: Workshop, IMS, Interactive Music Systems, Drums, Augmented Instrument, C++, Bela
---

## Body Drums
For the course MCT4045 - Interactive Music Systems, I built a wearable drumset.
The wearable drumset consists of a piezo-element placed on one hand, a force-sensing resistor on the other and a accelerometer on the fot. These sensors are then used to trigger one file each. In my case I used a kick drum sound for the foot, snare drum sound for the piezo element and a hi hat sound for the FSR. Then when these sensors are triggered, the sound that are mapped to the sensor will be played. For example if I stump my foot, the kick drum sound will be played.

<figure>
<img src="/assets/image/2019_10_12_stefanof_Body_Drums.jpg" width = "50%" align="center" />
<figcaption><strong>Body Drums</strong></figcaption>
</figure>

## The setup
The three sensors are connected to Bela, with processing and playback of audio files in C++. The playback of audio files will be played from the analog audio output of the Bela. Below you can see a picture of the Bela and the connected sensors. On top left you see the force-sensing resistor, top right is the piezo element and bottom right are the accelerometer.

<figure>
<img src="/assets/image/2019_10_12_stefanof_Belasetup.png" width = "90%" align="center" />
<figcaption><strong>Bela and Breadboard</strong></figcaption>
</figure>
