---
layout: post
title: 'Microture'
date: 2019-10-13 13:25:00 +0200
categories: Interactive-Systems
author: Sepehr Haghighi
image: /assets/img/IMS2.jpeg
excerpt: 'Microture is an interactive music system, based on manipulation of the input sound (microphone sound) with small gestures..'
Keywords: Interactive Music System, Gesture, Augmentation
---
Microture is an interactive music system, based on manipulation of the input sound (microphone sound) with small gestures. It uses [Bela](https://bela.io/about). Bela is an embedded computing platform for creating beautifully responsive interactive applications. Bela provides ultra-low latency, high quality audio, analog and digital I/O in a tiny self-contained package that can be easily embedded. Built upon the BeagleBone family of open-source embedded computers, Bela combines the processing power of an embedded computer with the timing precision and connectivity of a microcontroller.

### Introduction
One of the main principles of this project is augmentation. The current research field on augmented instruments is motivated by the assumption that the combination of traditional acoustic instruments with today’s sound technology yields a high potential for the development of tomorrow’s musical instruments. Considering that we are living in tomorrow in a sense, it is a current matter.
That means integrating the tactile and expressive qualities of the traditional instruments with the sonic possibilities of today’s digital audio techniques creates a promising perspective for instrument design. (Lähdeoja, 2019)  
This augmentation is based on the use of gestures in order to make and expand the sonical perspective of the instrument.
As Pierre Hébert says, the measure of a work of art is whether one can sense in it the presence of the artist’s body. If so, then it is a success, and if not, it’s a failure. (Ostertag, 2002)  
Of course he is talking about a corporal presence of the artist emanating from the work. Which in here refers to our body gestures.
In here the body is used to express oneself and that includes all the small-movements. In other words, combination of body gestures with technology to expand the amount of expressiveness.
####History
At the beginning of the process, the goal was to create an Augmented electric guitar, by the use of gestures. But there were three phases that I went through, and in the end
as you can observed the outcome became so different.   
First I decided to expand on the idea of slide guitar, considering the limited bandwidth and practicality of the guitar I though it is going to bring me more control.
But unfortunately it did not and that was because of a couple of reasons:
* Not having sufficent skills to play slide guitar
* Not having sufficient equipment and time to build the system
Even with overcoming those issues the main problem was the lack of time to practice using the instrument and present a decent performance. Therefore I decided to use the microphone as the sound source, which gave me much more bandwidth and reliabality.

### Key features
The key features in this instrument are:
* Capturing the sound input: Vocals or any other sounds produced by mouth or other objects (sound effects)
* Manipulation of sound input with various effects / controllers (based on gestures), which is being down in a [Pure Data](https://puredata.info/) patch, uploaded to Bela.

<figure>
<img src="/assets/img/SML1.png" width = "85%" align="center" />
<figcaption><strong></strong></figcaption>
</figure>

###Design and implementation
The sound, after getting into the system goes through various effects and signal processing systems. Those include:  
Sound manipulation process:
* Delay
* Pitch
* Distortion
 
<figure>
<img src="/assets/img/SML2.png" width = "85%" align="center" />
<figcaption><strong></strong></figcaption>
</figure>

After that they are being manipulated by the controllers. The controllers are the sensors that are implemented in the system.  
Sensors being used in this system are:  
* Accelerometer (by the use of X and Y axis)
* Distance sensor
* Potentiometer
* Slider
The senors, transform the movements into values and those values are being modified to change the effects parameters. The mappings being done are as follows:  
_One to one mapping:_
* Right hand:
** The use of the accelerometer sensor
*** X: delay mix
*** Y: delay time
* Left hand:
** Ultrasound sensor: distortion amount
** Potentiometer: pitch shift
_One to two (many?) mapping:_
* Left hand
** Slider
*** Normal use: delay feedback
*** Velocity amount:
engaging/ disengaging
the pitch shift and distortion chain  
Here is a picture that shows the pure data patch.

### Future work
The next step is implementing the system on a real situation. Although after implementation there is going to be a bit of latency in live situations, but in the case that more features could be added to the system, in regards to the automation of the effects, it definitely will worth going through it.
