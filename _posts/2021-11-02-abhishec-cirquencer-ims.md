---
layout: post
title: "Sequencephere-Linesequencer"
date: 2021-11-03 10:00:00 +0100
categories: interactive-music-systems
author: Abhishek Choubey
image: /assets/image/2021_11_02_abhishec_sequencphere_ims.png
keywords: interactive-music-systems, synth, drums, sounds, music-dimensions, csound, music-gestures, NIME
excerpt: "Exploration and design of a drum Sequencer and synth using Bela as an interactive music system with Csound"
---




## Inspiration

While looking for inspiration for my system, I landed up on this instrument on the Bela blog called [Opal rhythm computor](https://blog.bela.io/opal-rhythm-computer-dmx-krew/), this basically is a drum machine & sampler and then I found this device called [Orba](https://artiphon.com/pages/orbacam-by-artiphon) which is a synth, sampler and controller all in one. I always wanted to keep my instrument simple, straightforward and easy to use, so I decided to combine this two design aesthetics and try to build a sequencer. Although in the end I ended up making a sequencephere, but at the end, the classic moment of when you really want to something work and it doesn't, happened, and my project was evolved into a drum sequencer that could record a pattern and play it in a loop, combined with a softpot synth. So with one hand you could play a melody on the softpot and with the other you could play the drums on top of it.


## Key Features and Functionalities

The sequencer has four buttons arranged in a sequence. Each of these button is mapped to an audio file, that is triggered when the button is pressed. These buttons when triggered plays the sample in a loop, and the user can keep updating the pattern, while pressing the button, the samples are quantified automatically to the closest beat. There are LEDs placed along with the buttons for providing a visual cue to understand what samples is being triggered and when is it triggered in the loop. In addition to this, a Softpot is used to create a digital saw wave synthesizer to play a melody on top of the drum sequencer.

## Design and Implementation

The way I envisioned it to be and got pretty close to finish it is shown below in the figure.

<figure style="float: none">
   <img src="/assets/image/2021_11_02_abhishec_sequencphere_ims.png" width="100%" />
   <figcaption><i>sequencephere</i></figcaption>
</figure>


In the ideal version, there are 6 buttons arranged in a circular fashion, that are used to trigger samples. These a softpot is placed at the bottom to play melodies on top of the drum sequencer, a rotatory potentiometer is used to control the speed of the drum sequencer and a flex potentiometer and other sensors are used for audio effects. The user can program the sequence with one hand and play the melody with other hand on the softpot. The user can also control the audio effects and tempo the sequencer using the rotatory potentiometer. There are LEDs placed along with the button for visual feedback. A switch is placed in between to reset the pattern to scratch.

But in the working model shown in the diagram below I have four buttons which are triggering the samples as intended and the corresponding LEDs glow when they are triggered. This buttons are arranged sequentially and are looped. So if a user for example triggers a kick sample using the first button in the first bar, the kick will be played in the loop in every first bar, and user can then keep updating the pattern by pressing the button and adding more samples. There is also a softpot as intended to play a melody on top of the pattern, and a rotatory potentiometer to adjust the tempo of the pattern.

<figure style="float: none">
   <img src="/assets/image/2021_11_02_abhishec_lineseq_ims.png" width="100%" />
   <figcaption><i>Linesequencer</i></figcaption>
</figure>

The list of Components I have used are as follows:  
       1. BELA board  
       2. 4 LEDs
       3. 4 Push buttons
       4. Softpot
       5. Rotatory Potentiometer
       6. Resistors

The system design is pretty simple and has one to one mapping as shown below:

<figure style="float: none">
   <img src="/assets/image/2021_11_02_abhishec_systemdesign_ims.png" width="100%" />
   <figcaption><i>System design</i></figcaption>
</figure>

## Performance

Below you can watch the demo video.

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1jJ4pg-BuPVFEBm1tyc2QpMIWFRqgJjcx/preview" width="1024" height="576" frameborder="0" allowfullscreen></iframe>
   <figcaption>Demonstration</figcaption>
</figure>

## Future aspects and Reflections

This was one of most exciting course of the MCT and was really fun to design a system from scratch. Although the system that I was able to design was kind of basic but I feel I got to learn a lot in this course and is my main outcome of the course. Due to some circumstances out of my control I wasn't able to finish the project as I intended to but this again taught me about time management and some very valuable moral lessons about living in Norway. But for the future prospects I would like to make it as a one cohesive system in which there are more sensors being used to control some audio effects, a switch to restart the system, and also increase/decrease the range of synth, change the generating wave of the synth and also have more control over the buttons, in the sense of velocity and other dynamics. Overall making the system more controllable and user friendly but trying to keep it simple and straightforward, so that anybody irrespective of there knowledge about music can play and have fun with it.


## References

Mapping strategies for musical performance, by Hunt A. and Kirk R. in Trends in Gestural Control of Music, 2000.

Drummond, J. (2009). Understanding Interactive Systems. _Organised Sound,_ _14_(2), 124-133. doi:10.1017/S1355771809000235F

Tetsuro Kitahara, "Smart loop sequencer: An audio-based approach for ease of music creation", The Journal of the Acoustical Society of America 140, 3090-3090 (2016)

 Prince, D. P., & Perugini, S. (2018). An application of the Actor model of concurrency in Python: A Euclidean rhythm music sequencer. Journal of computing sciences in colleges, 34(1).
