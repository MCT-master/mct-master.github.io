---
layout: post
title: 'Body Drums - A wearable drumset'
date: 2019-10-12 11:00:00 +0200
categories: Interactive-Systems
author: Elias Sukken Andersen
image: /assets/img/Elias/Belasetup.png
Keywords: Workshop, IMS, Interactive Music Systems, Drums, Augmented Instrument, C++, Bela
---

## Body Drums 
For the course MCT4045 - Interactive Music Systems, I built a wearable drumset.
The wearable drumset consists of a piezo-element placed on one hand, a force-sensing resistor on the other and a accelerometer on the fot. These sensors are then used to trigger one file each. In my case I used a kick drum sound for the foot, snare drum sound for the piezo element and a hi hat sound for the FSR. Then when these sensors are triggered, the sound that are mapped to the sensor will be played. For example if I stump my foot, the kick drum sound will be played.

<figure>
<img src="/assets/img/Elias/Body_Drums.jpg" width = "50%" align="center" />
<figcaption><strong>Body Drums</strong></figcaption>
</figure>

## The setup
The three sensors are connected to Bela, with processing and playback of audio files in C++. The playback of audio files will be played from the analog audio output of the Bela

<figure>
<img src="/assets/img/Elias/Belasetup.png" width = "90%" align="center" />
<figcaption><strong>Bela and Breadboard</strong></figcaption>
</figure>



