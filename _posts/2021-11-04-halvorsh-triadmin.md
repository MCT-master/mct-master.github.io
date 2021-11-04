---
layout: post
title: "The Triadmin"
date: 2021-11-03 19:30:00 +0100
categories: interactive-music-systems
author: Halvor Sogn Haug
image: /assets/image/2021_11_04_halvorsh_illustration.png
keywords: interactive-music-systems
excerpt: "An instrument without any tangible interface."
---


# The Triadmin

## Motivation

At the start of this project, my goal was to design an instrument that do not have any button or tangible interface on which pressure has to be applied to generate sonic the output. The main inspiration for this idea is the instrument invented by Leon Theremin in 1928.

For the musical output itself, what I wanted was for the system to play a base pitch while playing harmonized triads on top, that would accompany the base pitch. These accompanying notes would be in the triad an octave above the base pitch, and would create a pleasant sound in accompaniment.

## Sensors

### Ultrasonic sensor

The ultrasonic sensors measures the distance from the sensor to the nearest obstacle, by using the sound waves it shoots out. In my system, the way this works is that the distance the sensor detects is translated into what pitch the base pitch will be playing at. This type of sensor has been used before, for example in (Torre, Andersen and Baldé, 2016), they used the distance picked up by the sensor to determine the velocity of the note being played.

### Light Dependent Resistor

The light dependent resistor measures the light level in the room, and in my system that is translated into how often the the ultrasonic sensor shoots out a signal, and therefore how fast or short a note played by the system would be. To cover the sensor, either the natural lighting can be used, or you can partially cover it with something like a black foam. Light dependent resistors have also been previously used by (Mandoux and Wohlthat, 2004), in an attempt to replicate the scratching of turntables, where the light sensors turned the scratching on or off.

### Electret Microphone

The electret microphone is a microphone that records the soundwaves it receives, and in the system the amplitude of these soundwaves are what determines what volume the accompanying sounds are playing at. This will make it so the louder the audio the system hears, the less volume the accompanying sounds are playing at.

### Speaker

The speaker will output the audio the system creates, and will therefore produce the audio the microphone hears. In addition, the speaker will be moved in front of the ultrasonic sensor and therefore be what determines the base pitch of the audio output.

## How to use the system

The intended way of using the system is to hold the speaker in the left had, meanwhile holding a black foam in the right hand. The hand holding the speaker will move towards and away from the ultrasonic sensor, which will also affect the volume the microphone hears. The arm can also twist the microphone in different directions to adjust what the microphone hears. The right hand, holding the black foam, will cover and uncover the light dependent resistor and therefore the tempo of the system.

![Illustration of the system](/assets/image/2021_11_04_halvorsh_illustration.png "Diagram describing system use")

This is how the system has been wired up:

![The Wiring](/assets/image/2021_11_04_halvorsh_wiring.jpg "How the system has been wired")

## Performance

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/11xUYQTcDDKwR18SuTkkdhyTK1SEeSYEh/preview" width="1024" height="576" frameborder="0" allowfullscreen></iframe>
   <figcaption>Performance</figcaption>
</figure>

## Evaluation

This evaluation is done in accordance with (O'modhrain, 2011)

Having presented this system to audiences, the audience has described the system as intuitive and easy to understandable, and have also wanted to try it out themselves and play with it.

As a player, I found the system to be fun and intuitive, but there are some frustrations in regards to the sensors. The light dependent resistor is very intuitive and works well, however the ultrasonic sensor can be a bit finnicky and miss your signals, partially just because the speaker is so small. Lastly, the microphone does not appear to have any effect at all, however that may be due to coding errors and not so much the microphone.

From a designer perspective, the system does appear to have hidden affordances, or alternate ways to play the instrument. For example, by covering the light sensor completely, the system changes pitch very fast, including the supporting notes, leading to them creating this space-noise like sound which I ended up using in the performance.

According to the system classification by (Wanderley and Depalle, 2004), the system consists mainly of secondary active feedback, which means that the feedback comes from the audio being produced by the system, and not much else. The main problem with this is that it makes it hard to learn the system and properly use it, so if you need a specific pitch you need to work it out by feel as opposed to getting exact feedback.

Another consideration is that while my initial motivation was to create a system where you have no physical interaction, however as it became designed the system ended up getting quite physical as you're both holding the speaker and the black foam.

## Future Work

For future work, I would like to have some sensors that fulfill the same role, but are able to work better in the case of the ultrasonic sensor, or to get the microphone finished coding. Another thing I'd like to do is make more feedback options to make the system more intuitive in a setting with multiple instruments.

## References

Wanderley, M.M. and Depalle, P., 2004. Gestural control of sound synthesis. Proceedings of the IEEE, 92(4), pp.632-644.

O'modhrain, S., 2011. A framework for the evaluation of digital musical instruments. Computer music journal, 35(1), pp.28-42.

Torre, G., Andersen, K. and Baldé, F., 2016. The Hands: The making of a digital musical instrument. Computer Music Journal, 40(2), pp.22-34.

Mandoux, F. and Wohlthat, S., 2004. 2F1213 Musical Communication and Music Technology Design of a HCI for Skipproof.
