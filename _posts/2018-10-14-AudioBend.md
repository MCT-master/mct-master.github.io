---
layout: post
title: 'AudioBend'
date: 2019-10-14 17:16:42 +0200
categories: Interactive-Systems
author: Ashane Silva
image: /assets/img/AudioBend.jpg
excerpt: 'My project idea for the Interactive Music Systems was to build a glove that can manipulate sound.  It was actually inspired by seeing the “mi.mu Gloves”.  The paper on the “Data Glove” gave me ideas on the design aspect of the glove although the way it works is a bit more different than what I use in my glove. “Data glove” uses multiple flex sensors on the fingers and force sensitive sensors to contact the finger tips and an accelerometer to get data from the wrist control. In my glove I used flex sensor on index finger, 3 – axis accelerometer on my hand and a Distance Ultrasonic sensor on my palm. Attaching those stuff to the glove was a bit tricky but “ducktape” saved my life.'
---

# Project Idea

My project idea for the Interactive Music Systems was to build a glove that can manipulate sound. It was actually inspired by seeing the “mi.mu Gloves”. The paper on the “Data Glove” gave me ideas on the design aspect of the glove although the way it works is a bit more different than what I use in my glove. “Data glove” uses multiple flex sensors on the fingers and force sensitive sensors to contact the finger tips and an accelerometer to get data from the wrist control.
In my glove I used flex sensor on index finger, 3 – axis accelerometer on my hand and a Distance Ultrasonic sensor on my palm. Attaching those stuff to the glove was a bit tricky but “ducktape” saved my life.

# Design and implementation.

The circuit made to sit top of the Bela Cape and sensors were connected to the circuit through long wires. The Bela Cape is connected to the beaglebone black wireless board which has the Operating system. The sound module is a pure data patch made by Riccardo Sraccia. Check out his work. So the work flow in the building process is to use the bela IDE on browser to edit the PD patch and test with sensors. Once everything is finalized the final the project was set to boot on start on Bela. Then it runs on its own without any connection to the PC.

1. Flex Sensor

   <figure>
   <img src="/assets/img/flex.jpg" width = "50%" align="center" />
   </figure>

2. Acceleroeter

   <figure>
   <img src="/assets/img/ACC.jpg" width = "50%" align="center" />
   </figure>

3. Ultrasonic Sensor
   <figure>
   <img src="/assets/img/ULTRA.jpg" width = "50%" align="center" />
   </figure>

# PD sound Module.

The Pure data patch is based on granular synthesis. It has following sections. And It needs and audio sample and I used a pad sample.

<figure>
<img src="/assets/img/SOUNDM.png" width = "50%" align="center" />
</figure>

# The Mapping

The mapping is mostly “one to one “and single instance of “One to many “I tried to control the starting point of the sample and the length with sensors but it tends make the instruments sound crappy and not very expressive.
Accelerometer.
X – Acceleration controls the frequency of the granular phasor.
Y – Acceleration mapped to sine LFO frequency and the cutoff.
Z –acceleration mapped to Sawtooth LFO
Flex sensor - speed of the sample.
Ultrasound sensor is mapped to Resonance Frequency.
