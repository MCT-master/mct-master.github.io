---
layout: post
title: MotionComposer
date: 2020-05-02 19:00:00 +0200
categories: Projects
author: Aleksander, Rayam, Simon & Thibault
image: /assets/img/thibault/motion_composer.png
excerpt: ""
Keywords: MCT, Applied Project, MotionComposer
--- 

## Introduction

The [MotionComposer](http://motioncomposer.de/) is a device that lets users use motion to make music. It has been designed with disabled people in mind, but some use cases are also oriented towards dance performances. The company is based in Chemnitz, Germany, and the device is almost ready for production. Our task was to use the existing motion tracking system and map the data to create music in a new way. We decided to build a synth engine, using MIDI files or an external MIDI controller to trigger notes, and movement to shape the sound.

## The Device

<figure text-align="center">
    <img src="/assets/img/thibault/motion_composer.png" width="600px">
    <figcaption>MotionComposer 3.0</figcaption>
</figure>
 
The hardware device, which we have not contributed to build at all, consists of an embedded computer running Linux, two HD cameras and a wirelessly connected android tablet for the user interface. On the latter, the user can switch between different playing modes. Our goal was to develop one of them.

The MotionComposer analyses the video data coming from the cameras and detects the type of movements according to a “movement alphabet”. Depending on the motion input, a corresponding OSC message is sent to the Pure Data patches of the current mode. The MC has also an audio interface and can send sound to powerful speakers.

## Synth Engine

We developed two distinct synth engines, and the user can switch between them using some gestures. The first engine is an additive synth, the second one is a physical modeled string. Either one of them is assigned to an ADSR envelope with customizable parameters, and then the sound is routed into various effects.

### Additive Synthesis

Our additive synth consists of a fundamental frequency (f<sub>0</sub>) sinusoidal oscillator and 16 harmonic sine tones. Each harmonic has a different frequency (2f<sub>0</sub>, 3f<sub>0</sub>, …). The amplitude of each generated sine tone can be controlled independently. We decided to use two mathematical expressions for two different harmonic mappings. The first one works like a bandpass filter, with x as the central frequency and y as the Q:

<figure text-align="center">
<iframe src="https://drive.google.com/file/d/1fx84jJnPsYF-krW2k1jMh3e4YjXquScO/preview"
width="139"
height="62.5"
frameborder="0"
scrolling="no">
</iframe>
</figure>

n represents the harmonic number, in the interval [0,15]. Here is an interactive applet to see the expression in action:

<iframe id="bandpass"
    title="bandpass"
    width="420"
    height="350"
    frameBorder="0"
    scrolling="no"
    src="https://editor.p5js.org/03thib/present/U9X3OHqec">
</iframe>

The second equation is a linear function, which slope and intercept change according to a single parameter x:

<figure text-align="center">
<iframe src="https://drive.google.com/file/d/16nx9NmzoEhr6EHATeYZJCwYEF9rFsEl-/preview"
width="305.5"
height="88"
frameborder="0"
scrolling="no">
</iframe>
</figure>

Again, an applet to understand its behaviour:

<iframe id="linear"
    title="linear"
    width="420"
    height="300"
    frameBorder="0"
    scrolling="no"
    src="https://editor.p5js.org/03thib/present/ZHi6K-t6r">
</iframe>

### String Physical Modelling

## Effects

## Mapping

While researching movement-to-sound literature, we were inspired by the idea of making a virtual model and using it as a point of departure. This virtual model would be centered around specific body poses (a combination of various movement tracking data points) and correlate specific sound environments to said poses, as seen in the image below. Then, we would be able to reproduce the desired soundscapes by doing certain predetermined poses.

<figure text-align="center">
<iframe src="https://drive.google.com/file/d/1cwoTNPubBXgW2Mc6otyhgWNfr7LhQi88/preview"
width="600"
height="236.67"
frameborder="0"
scrolling="no">
</iframe>
<figcaption>Skogstad,Nymoen, de Quay, & Refsum, 2012, p.3</figcaption>
</figure>

This culminated in two Pure Data abstractions that could imitate 2 specific motion gestures performed over time, as seen in the image below. Practically, this meant that we could move one slider (representing time) and output independent data streams of both arms (horizontally and vertically), body position, head movement, and general height, correlating to the position of the given limbs at a given time.

<figure text-align="center">
<iframe src="https://drive.google.com/file/d/1Dwj9x7vpAWYwaPPAbjzAXJn-ERNoFgPP/preview"
width="800"
height="191"
frameborder="0"
scrolling="no">
</iframe>
<figcaption>Two gesture examples</figcaption>
</figure>

Using this mapping scheme to experiment with the synthesizer enabled us to make certain key development decisions early on, like limiting synthesis control parameters. We could then start collaborating with our external partner with a beta version of our sound engine that was already calibrated, to some degree, to deal with movement as its control parameters.

We chose to work with vertical arms because these movements have a wide dynamic range and have the possibility of functioning like a coordinate system. It, therefore, seemed like an appropriate starting point for exploring how we could interpolate between, or "move through", different soundscapes generated by our sound engine.

Our workflow from there was highly shaped by our digital means of communication. We would first send our partner a collection of mapping schemes for testing. These mapping schemes involved 4 different interpretations of how the horizontal arm movements could control the parameters of the synthesizer. Our partner would then test all interpretations in one setting and provide valuable feedback for us in return. This workflow enabled us to effectively explore a multitude of options in a limited amount of time.

## Routing

The Motion Composer consists of 3 modules; the tracking module(camera), the control module(brain), and the musical environments. These all make up a bidirectional communications system which is maintained and controlled by the hardware`s integrated Linux machine.

<figure text-align="center">
<iframe src="https://drive.google.com/file/d/1laHUMx2-Z_z4nXvHYzpoTtOvzSboDAyg/preview"
width="588.5"
height="218"
frameborder="0"
scrolling="no"></iframe>
<figcaption>Movement alphabet</figcaption>
</figure>

For a musical environment to get movement data from the tracking module, and subsequently to produce sound from that data, it has to send and receive various OSC-messages back and forth between the control and tracking module using the systems designated syntax, as seen in the image above. Luckily, a multitude of Pure Data packages allows for quick and reliable OSC-routing so we were able to integrate this in a relatively short period of time.
  
## Conclusion

## References

Skogstad, S. A., Nymoen, K., de Quay, Y., & Refsum, A. (2012). 	Developing the dance jockey system for musical interaction with the xsens MVN suit.NIME