---
layout: post
title: "Myo My – That keyboard sure tastes good with some ZOIA on top"
date: 2022-05-20 00:10:00 +0200
categories: motion-tracking
author: Kristian Wentzel
image: /assets/image/2022_05_20_kriswent_spread.jpg
keywords: mct, motion capture, gestures, IMU, EMG, modular synthesis
excerpt: "Extending the keyboard through gestures and modular synthesis."
---

As a conclusion to the "Motion Capture" course, I chose to explore an extended keyboard instrument. There are several ways to perform motion capture, some of them demanding more equipment and complexity than others. I wanted to keep my extended instrument setup lightweight, not too costly and not too complex. By setting this framework, I wanted to be able to use my design even after the course is finished and to bring it to the stage. While we have access to state-of-the-art equipment and facilities as MCT students, a full-on Infrared Motion Capture system might be hard to bring to the next festival gig or summer tour. My choice was to use an Inertial Measurement Unit (IMU), which usually is small devices with a combination of accelerometers and gyroscopes. I also wanted to use modular synthesis to accompany and process audio from my keyboard.

## Gestural control – Myo
For my purpose I wanted the IMU to be able to stream sensor data in real time, and to easily be worn on an arm. It so happened that there was a perfect gadget for this in the shape of an armband: Thalmic Lab’s Myo. This device even has eight electromyography (EMG) sensors and can recognize five gestures using underlying machine learning technology. The only drawback is that this device has been out of production for some years now. By stroke of luck though, I was able to get my hands on one Myo in mint condition from eBay. This means I can use my extended keyboard instrument in the future as well!

<figure style="float: none">
   <img src="/assets/image/2022_05_20_kriswent_myo.jpg" alt="Myo" title="" height="auto" width="70%" />
   <figcaption><i>Myo armband by Thalmic Labs</i></figcaption>
</figure>

## Modular synthesis – ZOIA
To treat, accompany, stir up and mess with my keyboard, I chose the Empress Effects [ZOIA]( https://empresseffects.com/products/zoia) as my secret sauce. This is a digital modular synthesizer system in the shape of a guitar effect pedal. Even though I’ve dipped my toes slightly into a certain rabbit hole, I have neither the money nor the time for a Eurorack modular synthesizer setup just yet. To build a system with just half of the possibilities as the ZOIA would be **costly** and quite possibly *humongous*. I also had an interest in exploring this intriguing piece of gear, which have been patiently awaiting on the shelf for too long now.

<figure style="float: none">
   <img src="/assets/image/2022_05_20_kriswent_ZOIA.jpg" alt="ZOIA" title="" height="auto" width="70%" />
   <figcaption><i>Empress Effects ZOIA</i></figcaption>
</figure>

## The patchwork
Now that I had settled on some lightweight, not too costly, and not too complex ingredients, I needed to have everything blend perfectly together. I chose to wear the Myo on my left arm and use my right arm for playing the keyboard. The sensor data from my Myo got extracted using [Myo Mapper](https://www.balandinodidonato.com/myomapper/), which then sent it as Open Sound Control (OSC) data to a [Pure data](https://puredata.info/) patch. This patch basically transformed the Myo OSC data to MIDI control change (CC) signals, which was sent to the ZOIA using a MIDI cable from my soundcard. I chose to use MIDI CC signals instead of MIDI note-on signals to make the design much like a real modular synth, which uses control voltage (CV) for transmitting audio and modulation signals between modules. The ZOIA also has its internal CV-like signal flow, with float values ranging from -1 to +1. A major issue in using MIDI, which was my only viable option for transmitting multiple sensor signals to the ZOIA, is the 1980’s 7-bit low resolution of integers from 0-127. To trick this, I added several [slew limiters](https://learningmodular.com/glossary/slew-limiter/) to smooth out the stairway-like CC values to continuous-like curves again. The ZOIA also had my keyboard connected to the audio inputs and flavorized with the different patches I built.

## Video examples
Below are a couple of performances with my extended keyboard instrument, accompanied by flowcharts of the ZOIA patches. Hope you like it!

### 1. Myo Accompaniment
This patch has a 4-operator FM voice for synthesizing melodies to accompany the keyboard, which is slightly randomized using a modulation matrix affected by the EMG sensors. Holding a fist gesture will activate the synth voice, while ‘yaw’, ‘pitch’, and ‘roll’ data from the Myo gyroscope change frequencies of different oscillators. There is also an angry bit crusher in parallel with an aliasing effect, and a delay with modulation. These effects get activated/deactivated using wave out, double tap, and wave in gestures respectively. The complete routing of effects and gestural signals can be seen in the following flowchart.

<figure style="float: none">
   <img src="/assets/image/2022_05_20_kriswent_patch1.jpg" alt="ZOIA Patch 1" title="" height="auto" width="auto" />
   <figcaption><i>ZOIA Patch #1: Myo Accompaniment</i></figcaption>
</figure>

[FUTURE YOUTUBE LINK 1]

### 2. Myo Processor
This patch doesn’t have a synthesizer voice of its own – it’s all about treating the keyboard audio. The main flavor here is the not-so-sober looper, which records while you hold a fist gesture, and a granulizer, which catches and freezes grains after doing a wave-in gesture. Arm movement affect grain size, position, density, and pitch/speed control. By doing a wave-out gesture, the looper content get ring-modulated, also affected by arm movement. By double-tapping, you add a “shimmer” effect to the reverb. See the flowchart for more detailed description.

<figure style="float: none">
   <img src="/assets/image/2022_05_20_kriswent_patch2.jpg" alt="ZOIA Patch 2" title="" height="auto" width="auto" />
   <figcaption><i>ZOIA Patch #2: Myo Processor</i></figcaption>
</figure>

[FUTURE YOUTUBE LINK 2]
