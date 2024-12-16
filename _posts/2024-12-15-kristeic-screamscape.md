---
layout: post
title:  "Screamscape: Gestural Vocal Manipulation Based on Sonic Properties of Extreme Vocal Effects"
date:   2024-12-15 23:00:42 +0200
categories: masters-thesis
author: Kristian Eicke
image: /assets/image/2024_12_11_kristeic_screamscape.jpg
excerpt: "Learn about my Masters thesis project."
keywords: IMS, DMI, design, thesis
---

Extreme vocal effects in Metal —growls, screams, and grunts—have fascinated me since I first started experimenting with vocal techniques. Their primal, raw quality is unmatched, but producing these sounds safely takes years of practice. Could technology emulate these timbres in real time and make them controllable via gesture input, offering a new creative tool for vocalists? Enter Screamscape, my thesis project: a gesture-controlled Interactive Music System designed to manipulate EVEs live on stage.

## From Concept to Screamscape  

The idea behind Screamscape was to merge my interest in vocal technology and gestural performance. Besides, it would be pretty neat to be able to control the timbre of a "scream" with movement, right? The signal processing backbone is based on **[Angus](https://forum.ircam.fr/projects/detail/angus/)** which is a real-time emulation tool for vocal distortion and absolutely incredible in and of itself. 

At its core, Screamscape is bi-manual and has three components:  
- **Motion Capture Unit:** uses an absolute orientation sensor **[BNO085](https://learn.adafruit.com/adafruit-9-dof-orientation-imu-fusion-breakout-bno085/arduino)** to capture hand movements.  
- **Microphone Adapter:** features buttons for switching presets, toggling effects, and manipulating parameters.  
- **Digital Interface:** written and designed in Max/MSP. Handles mapping gestural data to roughness parameters. The system receives wireless data from the controllers via ESP32-based development boards, ensuring low latency suitable for live performance.

Prototyping my idea both in physical and digital form was a core concept of the whole process and involved constant iteration between hard(ware) choices, potential gesture-to-sound mappings, coffee and tea, and making a lot of weird noises to annoy my family. My main contribution from the beginning, at least I hope so, was to document this process and offer a methodology for other creators, vocalist, and music tech people to apply to a project and learn from my mistakes I made along the way. You find everything around Screamscape in the **[GitHub Repository](https://github.com/shx-vhs/Screamscape)**.

## The Performance 

Although Screamscape is conceptualized as a live stage instrument, live testing was just not feasible at that time. The study with two professional vocalists was nevertheless super informative and provided me with a ton of ideas and material I can implement in the next iteration. In short, Screamscape was found to not be just about enhancing vocal effects—it is about reimagining the connection between voice, body, and technology, offering vocalists a new vantage point on their vocal performance.

This progression makes Screamscape feel less like a static tool and more like a dynamic, evolving instrument—one that vocalists can truly “own” and adapt to their artistic workflow. There is so much more to do here, and I will probably design the next prototype with artistic appropriation and participatory design in mind. 

For now, though, Screamscape has proven its worth as a unique instrument for extreme vocal manipulation. If you are curious, you can check out my performance using Screamscape here. (Link follows soon)



<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2024_12_15_kristeic_screamscape.png" alt="Alternate Text" title="Image Title" width="auto" />
   <figcaption>Full view of the Screamscape’s software interface, integrating motion input, audio processing, parameter manipulation, and preset management.</figcaption>
</figure>

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2024_12_15_kristeic_collagemotioncapturecontroller.png" alt="Alternate Text" title="Image Title" width="auto" />
   <figcaption>Left-hand motion capture controller of Screamscape, incorporating a BNO085 sensor, HUZZAH32 ESP32 board, and a LiPo battery for wireless operation. The device inside its casing as well as top- and downside are depicted.</figcaption>
</figure>

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2024_12_15_kristeic_collage_micr_adapter.png" alt="Alternate Text" title="Image Title" width="auto" />
   <figcaption>Right-hand controller of Screamscape integrated with a microphone, featuring a thermoplast body, five SPST buttons, and a Feather M4 Express board.</figcaption>
</figure>
