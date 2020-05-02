---
layout: post
title: MotionComposer
date: 2020-05-02 19:00:00 +0200
categories: Portal
author: Aleksander, Rayam, Simon & Thibault
image: /assets/img/thibault/motion-composer.png
excerpt: ""
Keywords: MCT, Applied Project, MotionComposer
--- 

## Introduction

The [MotionComposer](http://motioncomposer.de/) is a device that lets users use motion to make music. It has been designed with disabled people in mind, but some use cases are also oriented towards dance performances. The company is based in Chemnitz, Germany, and the device is almost ready for production. Our task was to use the existing motion tracking system and map the data to create music in a new way. We decided to build a synth engine, using MIDI files or an external MIDI controller to trigger notes, and movement to shape the sound.

## The Device

<figure  text-align="center">
<iframe  src="https://drive.google.com/file/d/1mm2ADnMC9pyXMI4C5rEsPGiYW3axp-Qv/preview"
width="650"
height="433"
frameborder="0"></iframe>
<figcaption>MotionComposer 3.0</figcaption>
</figure>
 
The hardware device, which we have not contributed to build at all, consists of a embedded computer running Linux, two HD cameras and a wirelessly connected android tablet for the user interface. On the latter, the user can switch between different playing modes. Our goal was to develop one of them.

The MotionComposer analyses the video data coming from the cameras and detect the type of movements according to a “movement alphabet”. Depending on the motion input, a corresponding OSC message is sent to the Pure Data patches of the current mode. The MC has also audio interface and can send sound to powerful speakers.

## Synth Engine

We developed two distinct synth engines, and the user can switch between them using some gestures. The first engine is an additive synth, the second one is a physical modeled string. Either one of them is assigned to an ADSR envelope with customizable parameters, and then the sound is routed into various effects.

### Additive Synthesis

Our additive synth consists of a fundamental frequency (f<sub>0<\sub>) sinusoidal oscillator and 16 harmonic sine tones. Each harmonic has a different frequency (2f<sub>0</sub>, 3f<sub>0</sub>, …). The amplitude of each generated sine tone can be controlled independently. We decided to use two mathematical expressions for two different harmonic mappings. The first one works like a bandpass filter, with $x$ as the central frequency and $y$ as the Q:

$0.6-\frac{(n-15y)^2}{e^{e^{2x}}-1}$

$n$ represents the harmonic number, in the interval $[0,15]$.

<iframe id="linear"
    title="linear"
    width="420"
    height="300"
    frameBorder="0"
    src="https://editor.p5js.org/03thib/present/ZHi6K-t6r">
</iframe>

The second equation is a linear function, which slope and intercept change according to a single parameter $x$:

|$if$ $x<0.5$       |$else$               |
|-------------------|---------------------|
|$1.5x-\frac{x}{3}n$|$0.75-\frac{1-x}{3}n$|

<iframe id="bandpass"
    title="bandpass"
    width="420"
    height="350"
    frameBorder="0"
    src="https://editor.p5js.org/03thib/present/U9X3OHqec">
</iframe>

### String Physical Modelling

## Effects

## Mapping

While researching movement-to-sound research, we were inspired by a the idea of making a virtual model and using it as a point of departure. This virtual model would be centered around specific body poses (a combination of various movement tracking data points) and correlate specific sounds, or collection of sounds, to said poses. Then, we would be able to reproduce desired soundscapes by doing certain predetermined poses. 

This culminated in two Pure Data abstractions that could imitate 2 specific motion gestures performed over time, as seen in the image below. Practically, this meant that we could move one slider (representing time) and output independent data streams of both arms (horizontally and vertically), body position, head movement, and general height, correlating to the position of the given limbs at a given time. 

(insert image "gesture1.jpg" and "gesture2.jpg" side by side)

Using this mapping scheme to experiment with the synthesizer enabled us to make certain key development decisions early on, like limiting synthesis control parameters. We could then start collaborating with our external partner with a beta version of our sound engine that was already calibrated, to some degree, to deal with movement as its control parameters.

Unfortunately, we eventually had to revisit our project plan to down-scale our original goal to only focus on 2 movement parameters, instead of a whole collection as previously desired, and to leave the 2-player feature behind for future development. We chose to work with horizontal arms, as seen in the image below, because these movements have a wide dynamic range and have the possibility of functioning like a coordinate system. It therefore seemed like an appropriate starting point for exploring how we could interpolate between, or "move through", different soundscapes generated by our sound engine. 

(insert image "handheight.jpg")

Our workflow from there was highly shaped by our digital means of communication. We would first send our partner a collection of mapping schemes for testing. These mapping schemes involved 4 different interpretations of how the horizontal arm movements could control the parameters of the synthesizer. Our partner would then test all interpretations in one setting and provide valuable feedback for us in return. This workflow enabled us to effectively explore a multitude of options in a limited amount of time. 

## Routing

The Motion Composer consists of 3 modules; the tracking module(camera), the control module(brain), and the musical environments. These all make up a bidirectional communications system which is maintained and controlled by the hardwares integrated Linux machine.

(insert image "movement_alphabet.jpg")

For a musical environment to get movement data from the tracking module, and subsequently to produce sound from that data, it has to send and receive various OSC-messages back and forth between the control and tracking module using the systems designated syntax, as seen in the image above. Luckily, a multitude of Pure Data packages allow for quick and reliable OSC-routing so we were able to integrate this in a relatively short period of time.
  
## Conclusion