---
layout: post
title: "CordChord - controlling a digital string instrument with distance sensing and machine learning"
date: 2023-12-01 18:00:00 +0200
categories: interactive-music
author: Jack Hardwick
image: /assets/image/2023_12_01_jackeh_cordchord_thumbnail.jpg
excerpt: Learn about my adventures designing and building a digital string instrument.
keywords: interactive music systems, strings, machine learning
---

<figure style="float: none">
   <img src="/assets/image/2023_12_01_jackeh_cordchord_collage.jpg" alt="CordChord" title="CordChord" width="auto" />
   <figcaption>CordChord: a two-voice digital string instrument. L-R: the whole instrument, back of the instrument, the circuitry, optical distance sensor placement</figcaption>
</figure>

# Introducing CordChord

CordChord (cord as in string, chord as in two or more notes played together) is a two-voice digital string instrument that is part harp and part cello. In order to understand the behaviour of two strings that neither vibrate nor have acoustic amplification, I made use of an intriguing methodology for string for tracking the movement of and pressure through violin bows. Read on to learn how CordChord works and some of my thoughts on the project.

# Designing the Frame

Like many of the finest string instruments from the like of Stradivarius, CordChord is constructed out of maple and spruce wood for old-growth forests (discarded IKEA bed slats I found in a dumpster last winter) that I assembled with an all-natural glue (nailed together into long rectangle). I then fixed the two ‘strings’ (lengths of polyester rope) between the short ends of the structure using metal hooks.

# Determining the Positions of the Strings Using Sensors

<figure style="float: none">
   <img src="/assets/image/2023_12_01_jackeh_cordchord_sensor_attachment.jpg" alt="Sensor placement on the IMS" width="auto" />
   <figcaption>Optical proximity sensors are mounted on the neck facing towards the strings.</figcaption>
</figure>

Most musicians have a fairly accurate mental model of how string instruments work – by changing the effective length of the string by damping it using our fingers, the string vibrates at a different frequency. However, unlike with acoustic string instruments like the guitar, cello, or violin, the performer of CordChord does not vibrate the strings by plucking or bowing them, and there is no ‘body’ which acts as a resonating chamber to amplify these vibrations.

Instead, I needed to find a way of interpreting the behaviour of the strings using sensors. An approach previously used for tracking the motion of and pressure exerted through violin bows came to my rescue. In 2013, [Pardue et al.](https://www.nime.org/proceedings/2013/nime2013_247.pdf) proposed a method for bow tracking using [optical distance sensors](https://www.sparkfun.com/products/246).

These sensors are essentially two components in one: an infrared (IR) LED and an IR photoresistor. The concept is that a reflective surface reflects the IR light from the LED back into the photoresistor. The closer the reflective surface is to the sensor, the more of the IR light is reflected. As a result, we can interpret the resistance of the photoresistor as correlating to the distance between the object and the sensor itself.

Pardue et al. place four of these distance sensors under the bow stick facing towards the bow hair, which is IR-reflective. As the bow is pressed into the string, the bow hair deflects around the contact point by an amount which correlates to the pressure applied through the bow. This changes the distance between the bow stick and the bow hair at the four measured points such that every combination of contact point and bow pressure corresponds to a unique set of values from the distance sensors.

I decided to repurpose this approach to determine the position of the strings in CordChord. Attached to the neck behind each string are four distance sensors. As the strings are reflective to IR light, pulling a string towards the neck changes the readings from the sensors behind it. I then trained a simple regression machine learning (ML) model which, given the values received from the sensors behind each string, can predict the position along the neck at which the string is pressed, and by how much it is displaced at that position. The position and displacement are then mapped to pitch and volume respectively; pressing the string low on the neck will result in low pitches and vice versa, while pressing the string only slightly will create a softer sound than pressing it all the way towards the neck.

# Controlling Timbre with Capacitive Sensing

<figure style="float: none">
   <img src="/assets/image/2023_12_01_jackeh_cordchord_capactive_sensors.jpg" alt="Sensor placement on the IMS" width="auto" />
   <figcaption>Capacitive strips on the back of the neck allow the performer to control the timbre with their thumbs</figcaption>
</figure>

I settled on capacitive sensing to control the timbre of the sound engine. The performer can place their thumbs on two copper strips on the back of the neck, increasing the capacitance in the circuit. The position of their thumbs and therefore the amount of contact between their thumbs and the strips affects the grain length of the granular synthesiser as well as a delay feedback parameter.

# Sound Engine

The sound engine for CordChord is a [granular synthesiser](https://www.jstor.org/stable/3679937) which chops up a sample of a cello sustaining a single pitch. The sample is sped up and slowed down to create the pitch as mapped by the position of the performers finger pressing the string, while the grain length, or the length of each tiny ‘grain’ of sound that is taken from the original sample, is controlled by touching the copper strips on the back of the neck. Longer grain length results in more overlap between consecutive grains, in turn resulting in a richer timbre.

# Reflections & Future Improvements

CordChord works well as a prototype. However, as with any prototype, there are a myriad of small issues and areas for improvement.

Two primary issues is the relationship between the dimensions of the frame and the range of the distance sensors. The distance sensors I used have a working sensing range of around 3cm, but this range does not scale linearly. For example, assuming a scaled sensor reading in range 0-1, 0-0.5 is covered by the first ~5mm of distance from the sensor, while the distance around 2-3cm from the sensor only covers around 0.9-1. As a result, the ML model can more accurately register the position of the string when they are pressed close towards the neck. The effect of this is twofold. Firstly, it results in an audible ‘squelching’ sound as the ML model struggles to determine the pitch when first pressing a string. Secondly, it also means that the quieter volumes are less accessible to the performer while also maintaining accurate control of pitch. This could be partially solved by reducing the distance between the neck and the string.

There is also simply the limited precision of my dataset collection method and of the frame itself. Because the sensors are quite sensitive to light, I collected the dataset in a windowless room in near complete darkness. This meant my hands did not block any ambient light reaching the sensors, but it also meant my measurements were never quite exact. This was compounded by the level of precision in the fabrication of the frame and the sensor placement; while I tried to be as accurate as possible by measuring twice and sawing or gluing once, this being a handmade instrument meant that nothing is exactly square.

The result is that, while I intended for the pitch to be linearly mapped across the length of the string, it is more sensitive in some areas i.e., the middle, than it is at the ends. This means that pitches are found mostly by ear and are often not quite where the performer expect them to be. In turn, this acts as a barrier to intuitive control of the instrument.

# Take a Listen

Now you've read about it, take a listen to CordChord in performance.

<iframe width="720" height="405" src="https://www.youtube.com/embed/ySrjSWU_Mf8?si=nPKL2_-C34oozIWj&amp;start=1053" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>