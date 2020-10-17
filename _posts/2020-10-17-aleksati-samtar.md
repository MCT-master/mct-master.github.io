---
layout: post
title: "SamTar"
date: 2020-10-17 12:00:00 +0200
categories: interactive-music-systems
author: Aleksander Tidemann
image: https://drive.google.com/uc?&id=1dKDq3RLrZBW-r_vLVaGINXp-HPBdiArH
keywords: interactive-music-systems, augmented instrument, hyper-instrument Bela, micro-controller, pure data, javascript p5, python, sample-based music, electric guitar
excerpt: "An interactive music system exploring sample-based music and improvisation through an augmented electric guitar "
---

Sample-based music is no new phenomenon, and I'm no stranger to it. For me, the love for sample-based music is mostly due to 90´s French-house and the various hip-hop acts I listened to as a kid. More recently, I've been interested in how we usually interact and "play" with samples, often through MIDI-based beat controllers, and if there are other ways we can interact with samples that can provide new perspectives on sample-based music-making.

In light of these reflections, I decided to prototype an augmented electric guitar (SamTar) for playing and exploring sample-based music. The idea being that interacting and playing samples through a guitar interface could generate such new perspectives, and maybe a few novel affordances. The system uses a Bela micro-controller, some Pure data software and 5 sensors all mounted on the face of an electric guitar.

<figure style="float: none">
  <video width="680" controls>
    <source src="https://drive.google.com/uc?&id=1cPL618mu1KlV85IJVqIcF2UCCfVEFuzi" type='video/mp4'>
  </video>
  <figcaption>A fully functioning SamTar prototype loaded with Daft Punk and Kayne West samples. I apologize for the audio and video quality but time was of the essence. </figcaption>
</figure>

# Design
You trigger samples in the SamTar by hitting the only string currently available on the guitar. Simple. Furthermore, the hit does not only trigger the samples but also adjusts the gain and amplitude of the sample played. Another feature that is controlled by this trigger is a sample-and-hold function. If you play two consecutive "notes" at a certain speed, the current sample will hold.

<!--
<figure style="float: none">
   <img src="https://drive.google.com/uc?&id=1hYNutY_iKczjXpRGSA1td6GXhyIEafF5"
   alt="Alternate Text" title="Image Title" width="680" />
   <figcaption></figcaption>
</figure>
-->

### Sample Space
To categorize and organize samples, I created a 2D sample-space in Pure Data. The purpose of such a space was to enable easy and dynamic navigation of sample clusters from the SamTar. This space consists of multiple **scenes** (tracks) each with n-number of **segments** (section within a track), filled with x-number of **audio files/samples**. Also, as a general principle, I wanted the project to focus on how minimal input can control complex processes, so essentially how "one-to-many" mappings can benefit "one-man-band" type instruments (Morreale, McPherson 2019, p.2). The result was a simple button, mounted on the guitar, that skips segments and scenes when pressed.

In my prototyped version I was able to implement an LED array in [**p5**](https://p5js.org/) visually displaying the "location" of the player in the current sample-space. Optimally, this would be implemented in a physical Adafruit NeoPixel LED array mounted on the instrument itself.

<figure style="float: none">
   <img src="https://drive.google.com/uc?&id=1zP7nkt65MSUmwzCwiYIxl2jiBpfJ5_8b"
   alt="Alternate Text" title="Image Title" width="680" />
   <figcaption>The sample-space is inspired by Ableton Lives session view, helping player navigate through sample-spaces. However, in the SamTar, the green circles represent segments containing multiples samples each. </figcaption>
</figure>

### Randomness
When in a segment, the system chooses a random sequence of two samples that are looped when hitting the string of the guitar. However, to enable a more exploratory experience I added a rotary knob (0 - 100) that adjusts the probability a single hit has of changing the current sample sequence to a new one. For instance, if the knob is at 40 the next trigger will have a 40% chance of changing the sample sequence and a 60% chance of staying on the same two samples.

### Effects
For some further variation, a designed a few effects to facilitate some sound manipulation options. As the players left hand is completely free during play I put a soft potentiometer on the back of the guitar neck that controls the overall pitch of the samples. Furthermore, a chorus distortion was added for the ability to go full rock n roll, enabled by a simple switch on the mounted Bela board.   

<figure style="float: left">
   <img src="https://drive.google.com/uc?&id=1sQ3KHMasfQl_Tb_ADtZW3c0EE0yIPfqe"
   alt="Alternate Text" title="Image Title" width="320" />
   <figcaption>Protoyped Bela implementation of the SamTar with 3 of the instruments 5 sensors visible.</figcaption>
</figure>

<figure style="float: none">
   <img src="https://drive.google.com/uc?&id=1XWhg09pVIW4sNTJYqNk7b9ICy1NkMorN"
   alt="Alternate Text" title="Image Title" width="320" />
   <figcaption>The use of Command strips is a cheap, strong and effective way to mount micro-controllers in gravity-defying locations.</figcaption>
</figure>

# Evaluation
Technically the prototyped system performed surprisingly well with negligible latency and reliable runtime. Also, the performance of the instrument indicates that the conceptual idea and intent of the system was more or less successful. With this, I mean that the balance between its "mastery range", playability, and its general interactivity was such that it warrants further exploration and prototyping.

For future work, several things would have to be tested and considered:

* More strings and sample-space control.
    * The first critical feedback that struck me was the relationship between the sample space the main trigger. Maybe it would be better to keep all 6 strings, map the signal pitch to individual samples and the envelope of the signal to pitch or duration of the samples played.

* Re-develop the trigger system.
    * As mentioned above, the system performed technically just fine. However, the trigger system does exhibit unwanted cut-offs and the occasional glitch which suggests re-development or improvements are in order.

* More diagnostics.
    * Additionally to the proposed LED array, more diagnostic displays should be explored that give users more insight into the current state of the system.

# Inspirational Sources
Cook, P. R. (2006). *Re-Designing Principles for Computer Music Controllers: A Case Study of SqueezeVox Maggie*. in Proceedings of the 6th international conference on New Interfaces for Musical Expression.

Gonzalez Sanchez, V. E., Martin, C. P., Zelechowska, A., Bjerkestrand, K. A. V., Johnson, V., & Jensenius, A. R. (2018). *Bela-Based Augmented Acoustic Guitars for Sonic Microinteraction.* In Proceedings of the International Conference on New Interfaces for Musical Expression. Zenodo. https://doi.org/10.5281/zenodo.1302599

Hunt, A., Wanderley, M. M., & Kirk, R. (2000) *Towards a Model for Instrumental Mapping in Expert Musical Interaction.* in Proceedings of 2000 International Computer Music Conference

Morreale, F., Guidi, A., & McPherson, A. P. (2019). *Magpick: An Augmented Guitar Pick for Nuanced Control. In Proceedings of the International Conference on New Interfaces for Musical Expression.* Zenodo. https://doi.org/10.5281/zenodo.3672868

O’Modhrain, S. (2011). *A Framework for the Evaluation of Digital Musical Instruments.* Computer Music Journal, 35(1), p.28–42.

# Acknowledgement
A final thanks to Paul Koenig for the lending me the guitar and Thibault Jaccard for a quick JavaScript p5 introduction.
