---
layout: post
title: "Breathe the light, scream arpeggios!"
date: 2020-10-20 16:59:00 +0200
categories: interactive-music-systems
author: Rayam Luna
image: https://drive.google.com/uc?&id=11KY7PHbtyyPhBpWDWS2qk-_kYhlEIxK4
excerpt: "Multisensorial music interface aiming to provide a synesthetic experience. Touch, light, breathe, scream - make sound!"
keywords: light, synesthesia, interactive, bela, pure-data
---

## Concept

My intent with this project was to provide a synesthetic experience involving breath activations, light feedback, tactile sensations and some screaming while performing. (The screaming part happened not only during the performance, but also a lot during the development process, in order to deal with the unpredictability of dealing with sensors, Bela and Pd!)

The interface was designed to allow the user to have all the senses mentioned interacting simultaneously, creating expressivity and an interesting relation between body movement and sound production.

There are basisc two modes, one is the [ standard mode ] which is a simple synthesizer of 5 oscillators having the pitch controlled by a flex sensor, acid filters and the light controlled by blowing a small microphone. The second mode is the [ scream mode ], when the user instead of blowing screams to the microphone, activating an arpeggiator to this synth.

## Design

The design process started when I realized the importance of sketching the ideas with pen and paper. It helped a lot to clarify some toughts and visualize the ideas in practical way. Drawing, listing components and possible mappings and noting alternatives, were extremely important as a starting point for this project.

<figure style="float: none">
   <img src="https://drive.google.com/uc?&id=1tKlYZtWqpNkexQLyU1gevzyFbOj0m7Fq" title="Sketch" width="360px" />
   <figcaption>Sketch</figcaption>
</figure>

After that I started to design a prototype digitally, that way I could organize the ideas and make the draw more clear and simple to understand in order to visualize the disposition of the sensors, wires and material used for the interface.

<figure style="float: none">
   <img src="https://drive.google.com/uc?&id=1lgxDUSHPP-gcV7jHP0-y5yjeaq3mRJTf" title="Prototype" width="680px" />
   <figcaption>Prototype</figcaption>
</figure>

The next step was to design a scheme for the connections between the sensors and Bela using a software called Fritzing.

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1VIP43cnX2OGx_wXFYa49W-ged1vDfwOT/preview" title="Fritzing" width="680px" height="500px"></iframe>
   <figcaption>Fritzing</figcaption>
</figure>

## Components

### Flex Sensor 2.2"

- Tactile sensory experience
- Controls Pitch when in [ standard mode ]
- Controls Root note octave, scale, and sequency pattern when in [ scream mode ]

### Electret Microphone

- Breath and Scream activations
- LED lights up like a flame! [ standard mode ]
- Acid filters and Evelopes open up [ scream mode ]
- Activates arpeggiator when scream! (total madnassss!) [ scream mode ]

### Flex + Electret Microphone [ scream mode ]

That combination of sensors was a creative solution that I had to come up with at the last hours before the presentation. It happened because my Accelerometer sensor stopped working around 01:30 of the night before the performance. Some of the functions bellow require a sequence of interactions and range of values.

- Touch and Scream! (multisensorial)
- Arpeggiator rate (if you press the flex enough)
- Acid filters / Evelopes open up
- Pitch and Scale

## The System

<figure style="float: none">
   <img src="https://drive.google.com/uc?&id=1rwnXN1XT92lu2HsZts-iPSo9Ono3VtUG" title="The IMS" width="680px" />
   <figcaption>The IMS</figcaption>
</figure>

## Result

The results in the performance were way distant comparing to the experience that I had during the development and testing phases. The main reasons were:

- I had to deal with the loss of one sensor

- The microphone during testing phase didn't capture any sound feedback since I was using earphones as monitors for testing. So the funcions like lighting up the led blowing the microphone, opening-up the filters and envelopes and activating the arpeggiator got all messy during the performance, since it was capturing the loud sound coming from the monitors and interpreting as the user blowing the microphone or screaming.

<figure style="float: none">
    <iframe width="640px" height="360px" src="https://www.youtube-nocookie.com/embed/gEq9EnWrApc?start=1053" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <figcaption><strong>Performance</strong></figcaption>
</figure>

## Reflection

Time management. The best that I can say here is that time management is essential to any project, and of course it was a key point for my project. As I spent much time on the theoretical conceptualization, ideas and studying the subject, I didn't have time enough to spend testing the system out of my house bubble. In real action. That lack of management made me go from a stable and interesting performance at home, to a messy and unpredictable performance in public.