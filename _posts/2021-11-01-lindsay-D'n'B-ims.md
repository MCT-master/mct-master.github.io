---
layout: post
title: "D'n'B"
date: 2021-11-01 10:50:00 +0100
categories: interactive-music-systems
author: Lindsay Charles
image: /assets/image/2021-11-01-lindsay-D'nB-schematic.png
keywords: interactive-music-systems, bass, drums, sounds, music-dimensions,csound, music-gestures, NIME
excerpt: "Exploration and design of the 'Drum and Bass' interactive music system with Csound"
---

## Introduction

Inspired by the raw nature of the low frequencies, I envisioned a powerful bass synth in combination with drums leading me to design "D'n'B".
D'n'B is FM based synth consisting of 3 oscillators and a sample triggering drums along with it. This system is a multi dexterous instrument with other features that control the parameters of the synth.

## Musicality

The bass synth is monophonic, has a fluid pitch control and the fundamental oscillator is limited to bass frequencies upto 220 Hz, but with 3 oscillators in series it is tuned to cover a larger spectrum.
The performer also has vibrato and timbre control, implemented for greater expression.

For the rhythm section, drum samples can be triggered on pressing the buttons. 5 different samples are mapped to each button.

## Design and implementation   

The system is dived into 3 main sections. Input/output section(BELA), the bass synth, the drums.
I've arranged it such that the bass synth is on the left, BELA in the between and the drums on the right.
This is an ambidextrous system and can be interchanged according to the performer.     

Below you will see the schematic diagram of the system.

<figure style="float: none">
   <img src="/assets/image/2021-11-01-lindsay-D'nB-schematic.png" alt="D'n'B Schematic diagram" title="D'n'B Schematic diagram." width="100%" />
   <figcaption><i>Ethrio - Electronic Components Diagram</i></figcaption>
</figure>


### Components used

1. Soft Potentiometer
2. Flex sensor
3. Rotatory potentiometer
4. slider potentiometer
5. Push buttons
6. LEDs
7. Resistors
8. BELA


### Bass synthesizer

The main oscillator of the synth is an 'foscil' which is based on frequency modulation and The wave form used in the demonstration is a based on a distortion table. Other waves such as sine, saw-tooth and square waves can also be used.
It has amplitude envelope, a frequency sweep and a logic which attempts to separate frequency from resonance.
The soft potentiometer is mapped to the frequency of the 1st oscillator and the fundamentals are limited from 80Hz to 220Hz.
The second oscillator is a high pression 'poscil' which is used with an lfo of square wave(uni-polar) with an increasing rate mapped to the soft-pot. This gives the synth a weird low thumping noise which increases gradually or suddenly if you slide up on the soft-pot.
The Third oscillator is a 'vco2' which is multiplied by 0.7 times the frequency of the first oscillator. This gives it nice mids and high frequencies complementing the main oscillator.

### Effect Chain

Reverb and Low pass filter are in series respectively.
The Reverb mix is mapped to the the rotatory potentiometer
The Low pass fitler's cut off frequency is mapped to the flex sensor, which is to be attached to either thumbs. Moving the thumb inward and outward controls the filter parameter.

### Drums

The drums section is a simple triggering mechanism mapped to push buttons and for visual presentation, each button is linked to a LED.
There are 5 buttons which are mapped to 5 different sounds(samples).

## Demonstration

Below you can watch the demo video.

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1yIkIBDYFiz0UFAG0wmAjJsofy279byrf/preview" width="1024" height="576" frameborder="0" allowfullscreen></iframe>
   <figcaption>D'n'B Demonstration</figcaption>
</figure>


## Reflections

Building this instrument in such a short time made me realize the effectiveness of time management and planning accurate details before hand. This instrument is interesting due to the fact that it has complete control of the notes the performer plays, it is very sensitive to horizontal movement, every small variation is noticeable sonically, it involves playing rhythm and melody and it is quite hard to master playing it with two hands.

If we had more time, I would work intensively on the sound synthesis and using it in various musical contexts to see how far it can go.
