---
layout: post
title: "Myo My – That keyboard sure tastes good with some ZOIA on top"
date: 2022-05-20 02:00:00 +0200
categories: portal
author: Kristian Wentzel
image: /assets/image/2022_05_20_kriswent_spread.jpg
keywords: mct, motion capture, gestures, IMU, EMG, modular synthesis
excerpt: "Extending the keyboard through gestures and modular synthesis."
---

As my final project in the "Motion Capture" course, I chose to explore an extended keyboard instrument. There are several ways to perform motion capture, some of them demanding more equipment and being more complex than others. I wanted to keep my extended instrument setup lightweight, not too costly and not too complex. By deciding on this framework, I wanted to be able to use my design even after the course was finished – and ultimately bring it to the stage. While we have access to state-of-the-art equipment and facilities as MCT students, a full-on Infrared Motion Capture system might be hard to bring to the next festival gig or summer tour. My choice was to use an Inertial Measurement Unit (IMU), usually a small devices with a combination of accelerometers and gyroscopes. I also wanted to make use of modular synthesis to accompany and process the audio from my keyboard.

## Gestural control – Myo

I wanted an IMU able to stream sensor data in real time for my project, and which easily could be worn on an arm. It so happened that there existed a perfect gadget for my purpose, in the shape of an armband: Thalmic Lab’s Myo. This device also has eight electromyography (EMG) sensors and can recognize five gestures using underlying machine learning technology. The only drawback is that this device has been out of production for some years now. By stroke of luck though, I was able to get my hands on one such Myo in mint condition from eBay. This means that I can continue to use my extended keyboard instrument in the future as well!

<figure style="float: none">
   <img src="/assets/image/2022_05_20_kriswent_myo.jpg" alt="Myo" title="" height="auto" width="70%" />
   <figcaption><i>Myo armband by Thalmic Labs</i></figcaption>
</figure>

## Modular synthesis – ZOIA

To treat, accompany, stir up and mess with my keyboard, I chose the Empress Effects [ZOIA](https://empresseffects.com/products/zoia) as my secret sauce. This is a digital modular synthesizer system in the shape of a guitar effect pedal. Even though I’ve dipped my toes slightly into a certain rabbit hole, I have neither the money nor the time for a Eurorack modular synthesizer setup just yet. To build a system with just half of the possibilities as the ZOIA would definately be **costly**, and quite possibly _humongous_. I also had an interest in exploring this intriguing piece of gear, which have been patiently awaiting on the shelf for too long now.

<figure style="float: none">
   <img src="/assets/image/2022_05_20_kriswent_ZOIA.jpg" alt="ZOIA" title="" height="auto" width="70%" />
   <figcaption><i>Empress Effects ZOIA</i></figcaption>
</figure>

## The patchwork

Now that I had settled on some lightweight, not too costly, and not too complex ingredients, I needed to blend everything perfectly together. I chose to wear the Myo on my left arm and use my right arm for playing the keyboard. The sensor data from my Myo got extracted using [Myo Mapper](https://www.balandinodidonato.com/myomapper/), which then transmitted Open Sound Control (OSC) data to a [Pure data](https://puredata.info/) patch. This patch basically transformed the Myo OSC data to MIDI control change (CC) signals, which was sent to the ZOIA using a MIDI cable. I used MIDI CC signals instead of MIDI note-on signals for the synthesizing part as well to make the signalflow more like that of a modular synth, which uses control voltage (CV) for transmitting audio and modulation signals between modules. The ZOIA has its own internal CV-like signalflow, with float values ranging from -1 to +1. A major drawback in using MIDI, which was my only viable option for transmitting multiple sensor signals to the ZOIA, is its 1980’s low resolution 7-bit integers ranging from 0-127. To get around this, I added several [slew limiters](https://learningmodular.com/glossary/slew-limiter/) to smooth out the stairway-like MIDI CC values to continuous-like ZOIA CV signals. The ZOIA also had my keyboard connected to its audio inputs, which got flavorized with the different patches I built.

## Video examples

Below are a couple of performances I did with my extended keyboard instrument, accompanied by flowcharts of the ZOIA patches. Hope you like it!

### 1. Myo Accompaniment

This patch has a 4-operator FM voice for synthesizing melodies to accompany the keyboard, which gets slightly randomized using a modulation matrix affected by the EMG sensors. Holding a fist gesture will activate the synth voice, while "yaw", "pitch", and "roll" data from the Myo gyroscope change frequencies of different oscillators. There is also an angry bit-crusher in parallel with an aliasing effect, and a delay with modulation in the end. These effects get activated/deactivated using wave out, double tap, and wave in gestures respectively. The complete routing of effects and gestural signals can be seen in the flowchart below.

<figure style="float: none">
<iframe width="800" height="500" src="https://www.youtube.com/embed/-HKr3mWdfwA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

<figure style="float: none">
   <img src="/assets/image/2022_05_20_kriswent_patch1.jpg" alt="ZOIA Patch 1" title="" height="auto" width="auto" />
   <figcaption><i>ZOIA Patch #1: Myo Accompaniment</i></figcaption>
</figure>

### 2. Myo Processor

This patch doesn’t have a synthesizer voice of its own – it’s all about treating the keyboard audio. The main flavors here are the not-so-sober looper, which records while you hold a fist gesture, and a granulizer, which catches and freezes grains when doing a wave-in gesture. Different arm movement affect grain size, position, density, and pitch/speed control. By doing a wave-out gesture, the looper's content get ring-modulated, also modulated by arm movement. By double-tapping, you add a “shimmer” effect to the reverb. See the flowchart for a more detailed description.

<figure style="float: none">
<iframe width="800" height="500" src="https://www.youtube.com/embed/vJyQMdVogdY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

<figure style="float: none">
   <img src="/assets/image/2022_05_20_kriswent_patch2.jpg" alt="ZOIA Patch 2" title="" height="auto" width="auto" />
   <figcaption><i>ZOIA Patch #2: Myo Processor</i></figcaption>
</figure>
