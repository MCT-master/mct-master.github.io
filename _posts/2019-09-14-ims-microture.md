---
layout: post
title: 'Microture'
date: 2019-10-13 13:25:00 +0200
categories: Interactive-Systems
author: Sepehr Haghighi
image: /assets/image/2019_10_13_stefanof_IMS2.jpg
excerpt: 'Microture is an interactive music system, based on manipulation of the input sound (microphone sound) with small gestures..'
Keywords: Interactive Music System, Gesture, Augmentation
---
Microture is an interactive music system, based on manipulation of the input sound (microphone sound) with small gestures. It uses [Bela](https://bela.io/about). Bela is an embedded computing platform for creating beautifully responsive interactive applications. Bela provides ultra-low latency, high quality audio, analog and digital I/O in a tiny self-contained package that can be easily embedded. Built upon the [BeagleBone](https://beagleboard.org/) family of open-source embedded computers, Bela combines the processing power of an embedded computer with the timing precision and connectivity of a microcontroller.
<figure>
<img src="/assets/image/2019_10_13_stefanof_IMS2.jpg" width = "85%" align="center" />
<figcaption><strong></strong></figcaption>
</figure>

### Introduction
One of the main principles of this project is augmentation. The current research field on augmented instruments is motivated by the assumption that the combination of traditional acoustic instruments with today’s sound technology yields a high potential for the development of tomorrow’s musical instruments. Considering that we are living in tomorrow in a sense, it is a current matter.
That means integrating the tactile and expressive qualities of the traditional instruments with the sonic possibilities of today’s digital audio techniques creates a promising perspective for instrument design. (Lähdeoja, 2019)  
This augmentation is based on the use of gestures in order to make and expand the sonical perspective of the instrument.
As Pierre Hébert says, the measure of a work of art is whether one can sense in it the presence of the artist’s body. If so, then it is a success, and if not, it’s a failure. (Ostertag, 2002)  
Of course, he is talking about a corporal presence of the artist emanating from the work. Which in here refers to our body gestures.
In here the body is used to express oneself and that includes all the small-movements. In other words, combination of body gestures with technology to expand the amount of expressiveness.
#### History
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


### Design and implementation
The sound, after getting into the system goes through various effects and signal processing systems. Those include:  
Sound manipulation process:
* Delay
* Pitch
* Distortion  

After that they are being manipulated by the controllers. The controllers are the sensors that are implemented in the system.  
Sensors being used in this system are:  

* Accelerometer, being worn as a ring, using its X and Y axis
* Distance sensor
* Potentiometer
* Slider

<figure>
<img src="/assets/image/2019_10_13_stefanof_IMS3.jpg" width = "85%" align="center" />
<figcaption><strong></strong></figcaption>
</figure>

The senors, transform the movements into values and those values are being modified to change the effects parameters. The mappings being done are as follows:  

**_One to one mapping:_**
* Right hand:  
The use of the accelerometer sensor: X axis for the delay mix, Y axis for the delay time
* Left hand:  
Ultrasound sensor for the distortion amount, Potentiometer for the pitch shift amount  

**_One to two (many?) mapping:_**
* Left hand:  
Slider: The normal use of it controls the delay feedback and by moving it rapidly, the velocity amount is being used for engaging/ disengaging the pitch shift and distortion processing chain.

<figure>
<img src="/assets/image/2019_10_13_stefanof_IMS1.png" width = "85%" align="center" />
<figcaption><strong></strong></figcaption>
</figure>

Also, Here is a picture that shows the pure data patch.

<figure>
<img src="/assets/image/2019_10_13_stefanof_IMS4.png" width = "85%" align="center" />
<figcaption><strong></strong></figcaption>
</figure>

### Expressiveness, Playability, Learning

**_Expressiveness:_** Expressiveness in this case could refer to intelligent recognition of gesture in order to characterize the gesture. Of course by make the appropriate mapping and more gesture-sound mapping, more expressiveness could be acheived. But it is important to mention that the performer should achieve a level of virtuosity by more practice, in order to experience that matter.  
**_Playability and learning:_** This instrument is tangible. That is because of the use of acceleromenter. It is being extremly sensetive. But it can be addressed in further developments, by using a low pass folter for the data being captured by it. But considering the amount of effects that can manipulate the sound and enough practice, the player can lead to an acceptable degree of control regarding playing hte instrument.  

### Evaluation
This is the expert user's evaluation that I received, from Karolina Jawad.  
**_Overall impression:_** The augmentation of the voice is very engaging and interesting. There is a great amount of playfulness that is provided through the different controllers. Through the gesture controllers it was especially inviting to explore the instrument and spend time with it.  
**_Things that can be worked upon:_** audibility of what is happening through which action could be a little bit more
direct since there are many parameters, but it is at the same instance a positive effect of complexity.


### Present issues / Further development
* Robustness: There should be more time spent and more relevant equipment used in order to robust the instrument
* Moving on from the initial idea: Considering having more time to practice and build the instrument adn also having proper equipment in touch, the initial idea could be implemented.  

Following there is a short video of the protoype being played:
<iframe width="676" height="380" src="https://www.youtube.com/embed/xuEf8yBa1Mg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Acknowledgement
I would like to thanks [Stefano Fasciani](https://stefanofasciani.com/) for his crucial support and guidance in the process of making the instrument.

### References:
* Lähdeoja, Otso. (2019). An approach to instrument augmentation: the electric guitar.
* Ostertag, Bob. (2002). Human Bodies, Computer Music. Leonardo Music Journal. 12. 11-14. 10.1162/096112102762295070.
* Dobrian, Christopher & Koppelman, Daniel. (2006). The 'E' in NIME: Musical Expression with New Computer Interfaces.. 277-282.
