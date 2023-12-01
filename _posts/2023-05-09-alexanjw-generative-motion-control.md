---
layout: post
title:  "Generative Music with IMU data"
date:   2023-05-09 11:23:12 +0200
categories: motion-capture
author: Alexander Wastnidge
image: /assets/image/2023_05_09_alexanjw_pd_patch.png
excerpt: "Eight routes to meta-control"
keywords: motion capture, pure data, IMU, osc
---


For  this project I wanted to explore the use of IMU motion data for techniques associated with generative music practices, such as those often found in Eurorack and audio programming.  [Brian Eno](http://www.inmotionmagazine.com/eno1.html) defines this practice generally as the creation of a system which automatically creates musical parts based on rules and sensibilities set by the musician.  The musician the therefore designer and curator over the system, rather than being directly responsible for creating the musical ideas.

Here, eight processes/techniques were emulated in Pure Data and their parameters opened to IMU motion  data.  These are listed below.   There is also a performance video of myself using all eight processes in a complete system.

<figure style="float: none">
   <img
      src="/assets/image/2023_05_09_alexanjw_pd_patch.png" width="60%" />
   <figcaption>Some of the motion controlled "modules" in the performance system </figcaption>
</figure>

For control, the IMU sensor used was the one built into my smartphone.  It was then attached to my wrist using an armband normally intended for runners.  I chose to attach the sensor to the  wrist due to high range of potential movement afforded by that placement.


<iframe width="560" height="315" src="https://www.youtube.com/embed/WaLT-xSJqBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

**Step Sequencer**
Pitch - Mapped to MIDI note number on the selected step
Roll - Chooses the step to be edited by pitch
Yaw - Number of notes in the connected Euclidean sequencer, allowing for a unified sequencing environment.



**Random Sequencer**
Pitch - Mapped to “lvl”, control over the highest possible  MIDI value generated
Roll - Mapped to “loop length”
Yaw - Mapped to “offset”, control over the lowest possible MIDI value generated

**Clock Division Mixer**
Pitch - Mapped to 1/8 clock division
Roll - Mapped to 1/4 clock division
Yaw - Mapped to 1/6 clock division
X acceleration  - Mapped to 1/2 clock division
Y acceleration - Mapped to 1/3 clock division
Z acceleration - Mapped to 1/1 clock division

**Euclidean Sequencer**
Pitch - Mapped to the number of notes/triggers
Roll - Mapped to “rotation” or timing offset
Yaw - Mapped to total number of steps in thee sequence



**Euclidean Drum Sequencer**
Pitch - Mapped to number of kick drum triggers and the length of sequence.
Roll - Mapped to number of closed hi-hat triggers and the rotation of the kick triggers.
Yaw - Mapped to number off open hi-hat triggers, closed hi-hat rotation and closed hat sequence length.

**Arpeggiator**
Pitch - Mapped to the number of notes in the arpeggio
Roll - Mapped to the MIDI note number of the arpeggio’s root note.
Yaw - Mapped to arpeggio “direction”, up, down or up and down.

**Motion Generative Wavetable**
Pitch - Mapped to select which value in the wavetable to change.  This value changed also triggers normalisation of the wavetable.
Roll, Yaw, X, Y, Z acceleration - All fed in to write to the wavetable array.




