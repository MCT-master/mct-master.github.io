---
layout: post
title: "SamTar"
date: 2020-10-16 23:00:00 +0200
categories: interactive-music-systems
author: Aleksander Tidemann
image: /assets/image/2020_10_16_pedropl_psyship.jpg
keywords: interactive-music-systems, agumented guitar, bela, micro-controller, sample-based-music
excerpt: "An interactive music system exploring sample-based music and improvisation through an augmented electric guitar "
---

Sample-based music is no new phenomenon, and I'm no stranger to it. For me, the love for sample-based music is mostly due to 90´s french-house and the various hip-hop acts I listened to as a kid. More recently, I`ve been interested in how we usually interact and "play" with samples, often through MIDI-based beat controllers, and if there are other ways we can interact with samples that can provide new perspectives on sample-based music-making. 

In light of this, I protoyped an augmented electric guitar (SamTar) for playing and exploring sample-based music. The idea being that interacting and playing samples through a guitar interface could generate such a new perspectives, and maybe a few novel affordances. The system uses a Bela micro-controller with Pure Data (+ some javacsript) software together with 5 sensors all mounted on the face of an electric guitar. 

**Video Demo**
A Protoyped SamTar loaded with Daft Punk and Kayne West samples. 

# Design
## Magnetic Trigger
You trigger samples in the SamTar by hitting the only string avaliable on the guitar. Simple. Furthermore, the hit does not only trigger the samples but also adjusts the gain and amplitude of the sample played. Another features which is controlled by this main trigger is a sample-and-hold function. If you play two consecutive "notes" at a certain speed, the current sample will hold.

## Sample Space
As a point of departure, I concetualized and created a 2D sample space in Pure Data. The purpose of such a space is to enable easy and dynamic navigation of samples from my instrument. This space consists of multiple scenes (tracks) each with n-number of segments (section within a track), filled with x-number of samples. Also, as a general principle, I wanted the project to focus on how minimal input can control complex processes, so essentially how "one-to-many" mappings can benefit "one-man-band" type instruments (KILDE). The end result was a simple button, mounted on the guitar, that skips segments and scenes when pressed. 

**BILDE/GIF**

In my prototyped version I was able to implement an LED array in p5 (javascript), visually displaying "the location" of the player in the sample-space. Optimally, this would be implemented in a physical LED array mounted on the instrument.  

## Randomness 
When in a segment, the system chooses a random sequence of two samples which are played on loop when hitting the string the of the guitar. However, to enable a more exploratory experience I added a rotary knob (0 - 100) that adjusts the probability a trigger has of changing the current sample sequence to a new one. For instace, if the knob is at 40 the next trigger will have a 40% chance of changing the sample sequence to another two samples, and 60% chance of staying on the same two samples. 

## Effects
For some further variation, a designed a few effects to facilitate some sound manipulation options. As the players left hand is completely free during play I put a soft potentiometer on the back of the guitar neck that controls the overall pitch of the samples. Furthermore, a distortion chorus effect was added for the ability to go full rock n´roll.  


**Bilde av build and mounting** 


# Evaluation
Technically the prototyped system perfromed surprisingly well with leglechable latency and reliable runtime. Also, the performance of the instrument indicates that the conceptual idea and intent of the system was more or less successful. With this I mean that the balance between its "mastery range", playability and its general interactivity was such that it warrants further exploration and prototyping. 

For future work, a number of things would have to be tested and considered:

* More strings and sample-space control.
    * The first critical feedback that struck me was the relationship between the sample space the main trigger. Maybe it would be better to keep all 6 strings, map the signal pitch to individual samples and the envelope of the signal to pitch or duration of the samples played.

* Re-develop the trigger system.
    * As mentioned above, the system performed technically just fine. However, the trigger system does exhibit unwanted cut-offs and the occasinal glitch which suggests re-development or improvements are in order. 

* More diagnostics. 
    * Additionally to the proposed LED array, more diagnostic displays should be explored that give users more insight into the current state of the system.


# Some Inspirational Sources
Cook, P. R. (2006). *Re-Designing Principles for Computer Music Controllers: A Case Study of SqueezeVox Maggie*. in Proceedings of the 6th international conference on New Interfaces for Musical Expression. 

Gonzalez Sanchez, V. E., Martin, C. P., Zelechowska, A., Bjerkestrand, K. A. V., Johnson, V., & Jensenius, A. R. (2018). *Bela-Based Augmented Acoustic Guitars for Sonic Microinteraction.* In Proceedings of the International Conference on New Interfaces for Musical Expression. Zenodo. https://doi.org/10.5281/zenodo.1302599

Hunt, A., Wanderley, M. M., & Kirk, R. (2000) *Towards a Model for Instrumental Mapping in Expert Musical Interaction.* in Proceedings of 2000 International Computer Music Conference

Morreale, F., Guidi, A., & McPherson, A. P. (2019). *Magpick: An Augmented Guitar Pick for Nuanced Control. In Proceedings of the International Conference on New Interfaces for Musical Expression.* Zenodo. https://doi.org/10.5281/zenodo.3672868

O’Modhrain, S. (2011). *A Framework for the Evaluation of Digital Musical Instruments.* Computer Music Journal, 35(1), p.28–42.