---
layout: post
title: "The Ring Synth"
date: 2020-10-20 12:01:00 +0200
categories: interactive-music-systems
author: Thibault Jaccard
image: /assets/image/2020_10_20_the_ring_synth.png
excerpt: "Exploring speed as sound shaping parameter"
keywords: voice, interactive, bela, pure-data
---

## Introduction

The Ring Synth is a monophonic subtractive controlled by voice and finger movement. The finger data acquisition is done using an ATSAMD51 based microcontroller by Adafruit and the Trill Ring capacitive touch sensor by Bela. The sound engine is implemented in Pure Data.

## Design

#### Overview

The system consists of three parts, the audio peripheral (sound card, microphone and heaphones), the finger gesture peripheral (microcontroller, Trill and LEDs) and the computer (mapping and synthesis in Pd). You can have a look to the pin diagram below.

<p align="center">
  <img src="/assets/image/2020_10_20_trs_pin_diagram.svg" />
</p>

#### Inputs

From the voice, the fundamental frequency and the RMS are extracted in Pd.

From the Trill sensor, the touch surface (pressure) and the finger displacement speed are extracted using a custom program implemented in the Arduino IDE (in C). These data are sent to the computer using MIDI CC over USB.

#### Feedback

An Adafruit NeoPixel 24 LEDs Ring surrounds the Trill Ring, and gives a useful feedback in order to develop expressive skills on the instrument. The touch surface is mapped to the size of an appearing strip and the speed to colour (see video below).

#### Synthesis

This subtractive synthesizer has five parameters to control:

* Subtractive synthesis (phasor~ -> vcf~)
  * Harshness (q of vcf~)
  * Vibrato (moving f of vcf~)
* Noise (also subtractive, pink~ -> vcf~)
  * Dry/wet
* Volume
  * Continuously changing envelope
* Reverb (freeverb~)
  * Dry/wet

Below is the subpatch doing the first synthesis step.

<p align="center">
  <img src="/assets/image/2020_10_20_trs_pd_patch.png" />
</p>

See video below to hear it in action.

#### Mapping

The frequency extracted from the voice is mapped to the fundamental synthesis frequency in a one-to-one fashion. The rest (RMS, surface and speed) interact in a more complex many-to-many mapping shown below.

<p align="center">
  <img src="/assets/image/2020_10_20_trs_mapping.png" />
</p>

## Demonstration

Here is a video of the system in action. Last third of the video presents the instrument being used with random noise as audio input, so the pitch jumps all the time.

<p align="center">
<iframe width="832" height="468" src="http://www.youtube.com/embed/G6x0lBIT2lw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>
</p>

## Reflection

The interaction is interesting due to the speed parameter, it kinda ressembles a bow in a way, and is fun to play with. But the sensor's sensitivity is high, and it is hard to stabilize the sound. Many improvements could be done on the data filtering process.

Taking advantage of the possible voice virtuosity has proven to be a straightforward way to test the instrument in any track, genre and key.
