---
layout: post
title: "Spaty Synthy"
date: 2020-11-06 11:00:00 +0200
categories: digital-audio
author: Lindsay Charles
image: /assets/image/2020_11_06_lindsay_spatialsynth_vst.jpg
keywords: digital-audio, csound, phase modulation, Spatial, phasing, dsp, cabbage
excerpt: "Attempt at modelling a Delay Repeating Spatial Synthesizer using Csound"
---
## Introduction

Introducing you to an attempt at creating a phasor modulation based Delay-Spatial synthesizer VST Plugin implemented in Csound and Cabbage.
The synthesizer is tested out as a plugin synth on Ableton Live DAW, I've used two MIDI controllers, one to control the parameters and the other to play the notes.

Below is the demo of the VST and its development.

### Demonstration


<iframe width="1287" height="496" src="https://www.youtube.com/embed/Zfa50kyzJIg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

##### Demo Video

## How it looks like

The synthesizer has an oscillator  which generates 4 types of waves Sine, Saw, Square, Pulse where each can be selected from the drop down combo box.

![Spatial Synth](/assets/image/2020_11_06_lindsay_spatialsynth_vst.jpg)

The oscillator signal is routed to ADSR Envelope(Attack, Delay, Sustain, Release).
I mapped the MIDI controls to Attack and Sustain. The sustain values can go really high for as long as 5 seconds making the notes repeat for longer times.
It is then routed to the Butterworth band pass filter which has parameters of centre frequency and bandwidth, which are also mapped to midi controller knobs.
Next in the chain is the phaser modulated signal used as the delay or repeater envelope, it sounds similar to an arpeggiator but with the same notes.

The output of all these envelopes is fed into the spatial effect which has a numerous parameters, but I have decided to keep only one controllable variable which is the degree of rate of stereo change between the left and right.

Finally, a Reverb is added at the end of it all.


### What's inside

As a Whole, the sound generator and the effects are bundled into one instrument in Csound using opcode 'instr' which has all the effects and the oscillator in it. The oscillator opcode used here is the 'poscil' which is a high precision oscillator.
'madsr' is the opcode used as the ADSR Envelope described above which is multiplied with the band pass filter signal with opcode 'butterbp'.

The phasor signal opcode 'phasor' acts as the modulating wave to generate a delay signal or repeating signal, with a particular rate assigned to a knob which the user can change.

For the logic of spatial sound, the opcode 'spat3d' is used which allows positions of the input sound in a 3D space, with optional simulation of room acoustics, in various output formats, spat3d allows moving the sound at k-rate, the parameters involved in this are X, Y, Z axes, the distance from sound source to microphones and other room size parameters.
I have nulled out the Z axes for intensive purposes.  


### Thoughts and Conclusion
The conception of this synth idea is from the basic knowledge of Csound and Cabbage, and I would say that this VST is still under development and there's definitely going to be an advanced version of this later.
I may not have reached the goal which I had in my mind about the output in terms of sound and design but this VST is a good basic synth for a space kind of sounds which can be a compliment for scoring or adding a bit of spatial touch to your compositions or mixes.
I am still exploring the sound textures from it, however it overloads my PC, probably due to the inefficient code or just too many effects routed all in one block.
Csound is a very good tool which is particularly functional to my knowledge of Audio programming compilers.

Here's the files to the VST and the CSD file (make sure you place both the .csd and .dll files in the same folder with the same name)

## [Click to Download!](https://drive.google.com/file/d/1P2667MPWTm589h2fZPUBq72bz4wUTii2/view?usp=sharing)
