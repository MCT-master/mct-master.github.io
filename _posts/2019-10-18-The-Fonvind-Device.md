---
layout: post
title: 'The Fønvind Device'
date: 2019-10-18 9:10:00 +0200
categories: Interactive-Systems
author: Eigil Aandahl
image: /assets/img/eigil/fonvinddevice.jpg
excerpt: "For my interactive music systems project, I wanted to make use of the Bela's analog inputs and outputs to make a synthesizer capable of producing not only sound, but also analog control signals that can be used with an analog modular synthesizer. This post goes briefly through some of the features and the design of my system, and at the end there is a video demonstration of the system in use."
Keywords: Interactive Music Systems, Bela, Sensors, Pure Data, IMS, Interactive Music Systems, NIME, MCT
---

<figure>
<img src="/assets/img/eigil/fonvindandmodular.jpg" alt="The Fønvind device and a modular synthesizer" width="90%" />
<figcaption>The Fønvind device and a modular synthesizer</figcaption>
</figure>

## Introduction
For my interactive music systems project, I wanted to make use of the [Bela](https://github.com/BelaPlatform/Bela/wiki)'s analog inputs and outputs to make a synthesizer capable of producing not only sound, but also analog control signals that can be used with an analog modular synthesizer.
This post goes briefly through some of the features and the design of my system, and at the end there is a video demonstration of the system in use.

Several other synthesizer modules in the Eurorack format have used the Bela, perhaps most notably the [Pepper module](https://github.com/BelaPlatform/Bela/wiki/Pepper).

By using sensors and other inputs to the Bela, it is possible to make an expressive synth module that enables interaction in ways not commonly used with modular synthesizers. The joystick is however something many people are familiar with, and already have the controller intimacy and muscle memory usually needed for expression with musical instruments.


## System overview
The system is implemented using [Pure Data](https://puredata.info/) and prototyping sensor modules soldered to two double-sided prototyping PCBs. The system is operated by interacting with a joystick and the environmental sensors for light and temperature. It should be noted that the temperature sensor isn't as responsive as either the LDR (Light dependant resistor) or the joystick, but it still influences parts of the underlying code. 

The CV (control voltage) signals are used by patching minijack cables from the prototype to any CV input on an analog modular synthesizer. Please see the video below for more on how the device operates. (skip to 3:05 for an improvised performance).

<iframe width="560" height="315" src="https://www.youtube.com/embed/5FCML940Cpg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Note: Since the presentation at the end of the course, I have made some small adjustments and improvements to the system. the joystick operation has been improved slightly by lowering the input voltage from 5v to 3.3v, thus not overloading the analog inputs on the bela (which only reads up to 4.096v). Some of the digital signal processing has also been slightly modified to increase expressivity by utilising a larger range of values that the sensor mapping can offer.
