---
layout: post
title: "Phade - a phaser delay FX"
date: 2020-11-05 20:40:00 +0200
categories: digital-audio
author: Stephen Gardener
image: /assets/image/2020_11_05_stephedg_plugin.jpg
keywords: Csound, Digital Audio
excerpt: "A swirly, shimmery shoegazey multi-fx."
---

## Introduction

For my Digital Audio project, I decided to build a multi-effect. Initially, it was going to be a delay with lots of processing on the delays repeats - added chorus, pitch instability, degrading of the repeats, etc. As things progressed, I decided to separate out the effects to give the user a bit more control. I have always been interested in the shoegaze and dreampop genres, so it made sense to combine as many types of modulation and delay as was humanly possible in order to create that swirling wash of sound. And so Phade was born.

<figure>
<img src="/assets/image/2020_11_05_stephedg_plugin.jpg" alt="The GUI" width="50%" align="middle"/>
<figcaption>Fig 1: Phade</figcaption>
</figure>

The main signal is split into three, and fed in parallel into a pitch shifter, a delay and a chorus. 

## Pitch shifting
The pitch shifter is implemented using `pvsanal` to convert the signal into the frequency-domain, upon which we carry out the necessary pitch shifting using `pvscale`. The signal is then transformed back to the time domain using `pvsynth`, and fed into a huge reverb. I do this twice - once where I pitch the signal up an octave, and again to pitch down an octave. The resultant signal could be quite rich, so I ended up putting it through a high-pass filter to clean it up a little.

## The delay
The delay takes a mono signal, and passes the repeats through a phaser. I also used some filtering to clean things up a little. Providing sliders to control the delay time and feedback proved tricky at first - `delayr` and `vdelay` like to have their variables set during initialisation, so I had to tap the delay using `deltapi` in order to be able to adjust the parameters in real time. 

## The chorus
For the chorus I used two `vdelay`s controlled by two different LFOs set at different rates for a nice wide stereo effect.

Finally, the outputs from all three sections were mixed together, and sliders were added to control the relative levels of each.

The following diagram shows the signal chain.

<figure>
<img src="/assets/image/2020_11_05_stephedg_cabbage_project_diagram.png" alt="Signal chain" width="%" align="middle"/>
<figcaption>Fig 2: Signal chain</figcaption>
</figure>

## Some examples
All examples start with a dry sound, and then different elements of the FX are introduced gradually. 

The first is a mellow electric piano going through Phade. I bring up the delay, then chorus, the lower octave of the pitch shifter, before finally bringing in the higher octave. An additional lead synth, also going through Phade, is introduced as the piece progresses.

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1q86ScSFQtdcX5Nh_-c_812SnjpPfBGB4" type="audio/mpeg">
    Alternate Text
  </audio>
  <figcaption></figcaption>
</figure>

Next we have a guitar loop that’s goes from dry to completely saturated in effects, allowing you to hear the differences that each section of the FX introduces. 

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1l4g43hhQjFTHli5-yTUINLYRC2XesWvc" type="audio/mpeg">
    Alternate Text
  </audio>
  <figcaption></figcaption>
</figure>

Finally, here is a short video of Phade in action. 

<figure style="float: none">
    <iframe width="800" height="480" src="https://www.youtube.com/embed/pclYl_PttIY" frameborder="0" allowfullscreen></iframe>
    <figcaption>Phade in action</figcaption>
</figure>

## Future opportunities
As to future developments, I would like to play with the pitch shifter and reverb order, so that the reverbs signal is fed into the pitch shifter, giving a shimmer-reverb type effect. Secondly, the phaser didn’t add the bite that I was hoping it would. Rolling my own using an all-pass filter could be an interesting next project.

## Download Phade VST
[You can download Phade VST here](https://drive.google.com/file/d/1nGhP-zH7aLcxJPYMQqIJxIfPYJkae8ak/view?usp=sharing)
