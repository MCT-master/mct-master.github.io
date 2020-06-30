---
layout: post
title: 'Alien_Hamster_Ball'
date: 2019-10-14 13:30:00 +0200
categories: Interactive-Systems
author: Samuel Damien Roman
image: /assets/img/2019_10_14_stefanof_hamsterball4.jpg
excerpt: 'The Alien Hamster ball - an instrument expressed through a 3D space'
Keywords: Interactive Music Systems, Bela, Sensors, Pure Data, IMS, Interactive Music Systems, NIME, MCT
---

The main concept for the Alien Hamster ball is an instrument expressed through a 3D space. The movement of the sphere will trigger the modulation of the tone, with a sound that is space age or “alien”. Other functions create further options and depth to the model, and allow further exploration through the timbres created.



## Inspiration

It is directly inspired by the alien reece project i produced last year. It is a web based audio model that had oscillators mapped to the mouse movement, on both X and Y axis. I found it refreshingly intuitive to find various clashing and morphing frequencies as you move around the page. This felt very different to adjusting frequencies on a regular synthesiser, and encouraged creating abstract tones and sweeps.
I wanted to translate this idea to a movement in a 3D space with a physical object.

https://mct-master.github.io/audio-programming/2019/02/11/Alien-Reese.html

Also to a lesser extent i was inspired by a group project presented in the first year exploring the use of feedback in a collaborative instrument, and wanted to combine these elements to create a wholly new one.

<img src="/assets/img/2019_10_14_stefanof_hamsterball3.jpg" width="40%" height="40%" align="center" />
<figcaption><strong>The Prototype</strong></figcaption>
</figure>

Here are some concepts when regarding designing a digital music instrument, that the hamsterball hopes to be.

“Instant music, subtlety later” . As newcomers grow to more expert levels, the music gets more varied and interesting if they experiment with the relative pressures and tilts.

The “Smart instruments are often not smart” principle, in that the instrument doesn’t change at all, but rather trains the user to use more gentle and subtle manipulations of the sensors.

And of course - “Everyday objects suggest amusing controllers.”

<img src="/assets/img/2019_10_14_stefanof_hamsterball6.png" width="60%" height="60%" align="center" />

I used three types of sensor - Accelerometer, microphone and 3 potentiometers.

- The accelerometer adjusts parameters that make up the main body of the instrument.

- The mic adds another audio input that adds elements of feedback and unpredictability.

- Potentiometers are for adjustments of other basic functions and FX, for expression and shaping.

<figure>
<img src="/assets/img/2019_10_14_stefanof_hamsterball5.png" width="60%" height="60%" align="center" />
<figcaption><strong>X-Axis</strong></figcaption>
</figure>

My pure Data patch has three oscillators as the sound source - split into Osc1, Osc2 and Sub Osc. it also has a microphone as a secondary input source. To add spice and complexity to the timbre, a FM oscillator is fed into Osc 2.

The X axis is the core of the system, and blends with the y axis to create the drifting oscillators drone sound and phasing frequencies.

As the accelerometer in moved along the X axis -

Osc 2 will move from 112hz to 302Hz. This is a small range, however in conjunction with the two other oscillators, FM synthesis and FX - many partials can be formed and give a full range in frequency. Also, as i was designing a bass range instrument, it makes sense to keep the frequencies low.

Also when moving the ball along the axis it is easier to control with a smaller range, and doesn't sound like a transient or FX by tracking too quickly through the frequency spectrum - this kept the sound design more as a drone akin to cinematic tension.
At the same time, the sub oscillator moves along the same axis - just 3 hrz below. This results in the two oscillations phase together at all times, thickening up the sound. The sub is a sine and adds thickness rather than the more extreme saw used for Osc2.
As well as this, the wave shape of Osc 1 will cycle fully from a sine to a square over the range, adding further complexity. Lastly, a subtle increase in the delay amount will occur as the frequencies move higher in the spectrum. This acted as a sweetener to the harsher, thinner frequencies higher in the spectrum, and helped keeping the sound aesthetically pleasing at all angles.

<img src="/assets/img/2019_10_14_stefanof_hamsterball2.jpg" width="40%" height="40%" align="center" />
<figcaption><strong>The Failed Prototype</strong></figcaption>
</figure>
The functionality of the ball as a concept has many possible future uses. Throwing? a game of catch? Juggling? Rolling the ball on the floor? football? Could also put a hamster inside… 

With some more time, i believe i could create the prototype i aimed for, and maybe even try some of these techniques out. Unfortunately i had little time to play with the instrument, and so feedback is lacking on that part.

 Overall the expressiveness of the instrument felt far less when missing key functions. Aside from this i stick by the concept, and hope to improve the system in the future.
