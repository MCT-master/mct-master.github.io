---
layout: post
title: MotionComposer
date: 2020-05-02 19:00:00 +0200
categories: applied-project
author: Aleksander Tidemann, Rayam Luna, Simon Sandvik, Thibault Jaccard
image: /assets/image/2020_05_02_aleksati_MotionComposer_Interface_V02.png
excerpt: "MotionComposer is a motion capture device that lets people make music with gestures. This is the presentation of our applied project, where we worked on building a new instrument for this device."
Keywords: MCT, Applied Project, MotionComposer
---

## Introduction

The [MotionComposer](http://motioncomposer.de/) is a device that lets users use motion to make music. It has been designed with disabled people in mind, but some use cases are also oriented towards dance performances. The company is based in Chemnitz, Germany, and the device is almost ready for production. Our task was to use the existing motion tracking system and map the data to create music in a new way. We decided to build a synth engine, using MIDI files or an external MIDI controller to trigger notes, and movement to shape the sound.

## The Device

<figure text-align="center">
    <img src="/assets/image/2020_05_02_aleksati_motion_composer.png" width="600px">
    <figcaption>MotionComposer 3.0</figcaption>
</figure>

The hardware device, which we have not contributed to build at all, consists of an embedded computer running Linux, two HD cameras and a wirelessly connected android tablet for the user interface. On the latter, the user can switch between different playing modes. Our goal was to develop one of them.

The MotionComposer analyses the video data coming from the cameras and detects the type of movements according to a “movement alphabet”. Depending on the motion input, a corresponding OSC message is sent to the Pure Data patches of the current mode. The MC has also an audio interface and can send sound to powerful speakers.

## Synth Engine

We developed two distinct synth engines, and the user can switch between them using some gestures. The first engine is an additive synth, the second one is a physical modeled string. Either one of them is assigned to an ADSR envelope with customizable parameters, and then the sound is routed into various effects.

### Additive Synthesis

Our additive synth consists of a fundamental frequency (f<sub>0</sub>) sinusoidal oscillator and 16 harmonic sine tones. Each harmonic has a different frequency (2f<sub>0</sub>, 3f<sub>0</sub>, …). The amplitude of each generated sine tone can be controlled independently. We decided to use two mathematical expressions for two different harmonic mappings. The first one works like a bandpass filter, with x as the central frequency and y as the Q:

<figure text-align="center">
    <img src="/assets/image/2020_05_02_aleksati_harmonic_mapping_1.png" width="139">
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
    <img src="/assets/image/2020_05_02_aleksati_harmonic_mapping_2.png" width="305.5">
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

### String Physical Modeling

The idea to bring a new voice to our synth engine, came from the need to achieve clear changes on the sound output, as the partner expressed. With the string physical modeling synthesizer, it was possible to change smoothly between two synth voices, the additive synthesis created previously and the string synth. To do that, it was implemented with a mixer that inverts the amount of signal coming through one synth proportionally inverted to the other synth, in response to the movements of the arms of the user.

## Effects

The modulations and parameters were chosen with the intent to provide a sense of agency, an important concept for therapeutic purposes. Sense of agency proved to be effective as a support to the recovery of patients with physical disabilities. Challenges had arisen regarding how to design the parameters, scales, and limits that would supply interesting musical expression while preserving the sense of agency.

Sense of agency requires immediately obvious transformations on the sound, but gesture can vary significantly, from subtle movements to abrupt actions, which can be tricky to scale the numbers coming from the motion sensors.

After testing some different modulation effects, we stayed with **Tremolo**, **Flanger**, **Reverb**, **Spectral Delay** and a **Low Pass Filter**. Exploring parameters such as Depth and Rate to react to the movements of the arms, we figured out that Tremolo works well with both additive synth and string synth, as the amplitude modulation fits well for the sawtooth waves [phasor~] from the string synth and the sine waves [osc~] from the additive synth. Other effects provide interesting results too, but at some frequency ranges, or with inappropriate monitors, they can make the sound muddy on the low frequencies, or sometimes not show clear changes on the sound output.

The parameters of the effects implementend had to be adjusted and re-scaled several times to achieve a proper response according to the data coming from the sensors.

## Mapping

While researching movement-to-sound literature, we were inspired by the idea of making a virtual model and using it as a point of departure. This virtual model would be centered around specific body poses (a combination of various movement tracking data points) and correlate specific sound environments to said poses, as seen in the image below. Then, we would be able to reproduce the desired soundscapes by doing certain predetermined poses.

<figure align="middle">
   <img src="https://drive.google.com/uc?export=view&amp;id=1cwoTNPubBXgW2Mc6otyhgWNfr7LhQi88" awidth="auto" height="auto" />
   <figcaption>Skogstad,Nymoen, de Quay, & Refsum, 2012, p.3</figcaption>
</figure>

This culminated in two Pure Data abstractions that could imitate 2 specific motion gestures performed over time, as seen in the image below. Practically, this meant that we could move one slider (representing time) and output independent data streams of both arms (horizontally and vertically), body position, head movement, and general height, correlating to the position of the given limbs at a given time.

<figure align="middle">
   <img src="https://drive.google.com/uc?export=view&amp;id=1Dwj9x7vpAWYwaPPAbjzAXJn-ERNoFgPP" awidth="auto" height="auto" />
   <figcaption>Two gesture examples</figcaption>
</figure>

Using this mapping scheme to experiment with the synthesizer enabled us to make certain key development decisions early on, like limiting synthesis control parameters. We could then start collaborating with our external partner with a beta version of our sound engine that was already calibrated, to some degree, to deal with movement as its control parameters.

We chose to work with vertical arms because these movements have a wide dynamic range and have the possibility of functioning like a coordinate system. It, therefore, seemed like an appropriate starting point for exploring how we could interpolate between, or "move through", different soundscapes generated by our sound engine.

Our workflow from there was highly shaped by our digital means of communication. We would first send our partner a collection of mapping schemes for testing. These mapping schemes involved 4 different interpretations of how the horizontal arm movements could control the parameters of the synthesizer. Our partner would then test all interpretations in one setting and provide valuable feedback for us in return. This workflow enabled us to effectively explore a multitude of options in a limited amount of time.

## Routing

The Motion Composer consists of 3 modules; the tracking module(camera), the control module(brain), and the musical environments. These all make up a bidirectional communications system which is maintained and controlled by the hardware`s integrated Linux machine.

<figure align="middle">
   <img src="https://drive.google.com/uc?export=view&amp;id=1laHUMx2-Z_z4nXvHYzpoTtOvzSboDAyg" awidth="auto" height="auto" />
   <figcaption>Movement alphabet</figcaption>
</figure>

For a musical environment to get movement data from the tracking module, and subsequently to produce sound from that data, it has to send and receive various OSC-messages back and forth between the control and tracking module using the systems designated syntax, as seen in the image above. Luckily, a multitude of Pure Data packages allows for quick and reliable OSC-routing so we were able to integrate this in a relatively short period of time.

## The GUI

In the finishing phase, we invested in designing a GUI. It is a beta-prototype with minimalist aesthetics, made for improving the user experience and to create a better perspective of our product for the stakeholders.

<figure text-align="center">
    <img src="/assets/image/2020_05_02_aleksati_MotionComposer_Interface_V02.png"
    width="600px">
    <figcaption>MoShape GUI</figcaption>
</figure>

## Video Demo

We made a video showing the MoShape in action, in the phase of tests with Robert, the partner, and also showing the Pd patch working internally.

<p align="center">
<iframe width="832" height="468" src="https://www.youtube.com/embed/V-sW18gO4dA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>
</p>

## Conclusion

This project has been a great opportunity for us to learn more about audio programming in Pure Data, but also learning a lot about OSC communication and motion capture. We are satisfied with the result, but we will continue working on it in hope of seing our instrument implemented in the commercialised product. The relation with our ecternal partner is very good, and we are proud of the current state of our synth. This first professional experience has been instructive for us all, and gives us a better idea of what working in the music technology indutry looks like. We can't wait for the next applied project!

## References

Skogstad, S. A., Nymoen, K., de Quay, Y., & Refsum, A. (2012). 	Developing the dance jockey system for musical interaction with the xsens MVN suit.NIME
