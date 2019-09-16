---
layout: post
title: 'Could DSP it?'
date: 2019-09-16 15:00:00 +0200
categories: Portal
author: Jackson Goode
image: /assets/img/waveinterference.gif
excerpt: 'Is polarity the solution?'
Keywords: Portal, polarity, DSP, phase, cancelation, feedback, live sound
---
#This week in the MCT Portal

##An old problem...

We were having quite a bit of trouble with something called _feedback_! Because of the low-latency audio connections between our classrooms in Oslo and Trondheim, there are occasions where the sensitivity of the microphones we are using enter a feedback loop with the sound played through the speakers. Simply, our voices in Oslo travel to Trondheim which are then played on their speakers and some of that sound will unfortunately end up going through their microphones (when it should only be their voice) and it comes back to us as an echo. But when that echo is just loud enough, it will start a loop with ever-increasing volume until one of us sprints over to the mixing console and throws a chair at it (or we just turn down the master).

Everyday we spent at least 10-15 minutes of class working on EQ-ing out the problem frequencies or turning down the gain of the microphones or even the master (on _both_ sides). The accumulated result of all this tweaking is a sloppy and confused setup whose history is unknown because we had made all the changes on the fly.

We are music technology students, of course we can find a more effective solution right?

###Could DSP it?

The last two weeks were spent studying digital signal processing. One main feature of our studies was listening to the effect of the various filters we had applied to our sample sounds. To better understand the transformations at play, we creating two tracks, one with the sample and filter applied and the other with just the untampered sample whose polarity was inverted. The result of playing both at once was the effects' transformations heard in isolation (because the inverted track would be "canceling" the original track's waveform resulting in silence).

![alt text](https://www.electricherald.com/wp-content/uploads/Waventerference.gif "Magic!")

Well, I was thinking about all of this new found knowledge one day last week and realized there might be some practical use of inverting the polarity of a signal with live sound interfaces. I made the comment to Jarle who first told me to never call polarity inversion "phase flipping" (see here) but then politely said that this might be a potential solution.

We walked over to the mixer, selected the channels we were receiving from Trondhiem and inverted their polarity and - success! No echo, no feedback. All of our problems were solved and I graduated the master's program early. But really, what is going on and why does that work?

##Here's why
As with our example with isolation the effects of filters and such, reversing the polarity of the channel will actively reduce feedback when it begins to loop, as the sound that we recieve from our mics in Oslo will be flipped compared to the sound we recieve from Trondhiem. These two sound sources, coming from their mics through our speakers and our mics to their speakers will collide "out of phase" if a feedback loop ever begins - thereby reducing the peak frequencies that were causing so many issues. What a simple solution to a complicated system.