---
layout: post
title: "New Interface for Sound Evolution (NISE)"
date: 2022-12-01 10:00:00 +0200
categories: interactive-music
author: Björn Þór Jónsson
image: /assets/image/2022_12_01_bthj_robiohead.jpg
excerpt: "Robiohead is an attempt in a box to explore how an Interactive Music System (IMS) can offer ways to explore sound spaces by evolving sound producing genes in a tactile manner."
keywords: evolutionary-interface
---

New Interface for Sound Evolution (NISE)
========================================

Robiohead is an attempt in a box to explore how an Interactive Music System (IMS) can offer ways to explore sound spaces by evolving sound producing genes in a tactile manner. A motivation is to create a musical interface alternative to those already available at the sound evolving web application at [synth.is](https://synth.is), as discussed in a [previous blog post](/other/2022/12/01/bthj-synth-is.html). The IMS will explore embodied / physical interactions with sample based virtual music instruments, which can be rendered by that web application. Sensor data is used to navigate samples along dimensions of notes (pitches), velocities and durations. Approaches to [evolutionary interaction](https://link.springer.com/chapter/10.1007/978-1-4471-2990-5_13) are explored by testing how different gestures can be sensed for conducting evolutionary search. The name comes from a second external-design iteration in the form of a robot head, discussed below, with a twist that is probably influenced by the name of some English rock band.

A design premise is that the IMS is as much a toy as a musical instrument. It should invite children as well as adults to playfully explore and discover new sounds. Why not just a mobile app that runs on phones that most have? Young children commonly don’t have smartphones and they can benefit developmentally from tangible, engaging toys that speak to a [primitive form of communication](https://direct.mit.edu/books/book/2109/The-Origins-of-Music). The instrument should be robust and child safe, with no parts sticking out that could break off.

IMS design notes
----------------

The design has so far gone through two (concept) iterations. Following are notes form a (thought) process that has lead to the current prototype design:

### First concept iteration

Initial idea for the overall design of the IMS was simply based on a sphere with short embedded cylinders sticking out from the two adjacent sides. The cylinders would offer connectivity and support for mounting the IMS.

On the surface of one half of the sphere could be metal, touch sensitive plates for triggering different chord combinations of the samples. The plates can be arranged in different tetromino shapes, where each shape would represent a chord. The shapes, or chords, would be moved around a tuning lattice, e.g. with tilting / rotation, to transpose them to different roots. The tuning lattice might be microtonal, e.g. just intonation. Exposing children and adults to different tunings may be suited to help them to become more receptive to unusual stimuli.

The backside of the sphere could be reserved for evolutionary interactions, where individual sound genes, local or remote, can be paired and evolved while interacting with sounds from newly developed individuals on the tetromino-chord side. The following sketch depicts the tetromino-chord side and the evolutionary side with buttons for selecting and favoriting sound-genes, which may not be a very novel interface. In any case there was a struggle in coming up with a good representation for that interaction with clear affordances.

![](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_robiohead_image8.png)

The tuning-lattice navigation with tetromino-chords is inspired by this video: [https://youtu.be/CSL\_Axohw94](https://youtu.be/CSL_Axohw94)

<iframe width="560" height="315" src="https://www.youtube.com/embed/CSL_Axohw94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

\- shared by [Alexander Szorkovszky](https://www.uio.no/ritmo/english/people/postdoctoral-fellows/alexansz/index.html).  

### Second concept iteration

With that sphere-based design in mind, observing a robot head drawn by a nine-year-old on a misty glass lead to that form being considered as a basis for the IMS design: It may offer the desired invitation to play and discovery, as it looks intriguing and a bit playful. The box shape might also be easier to work with than a sphere, for an early prototype:

![](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_robiohead_image12.jpg)

Discussing this with the nine-year-old prompted him to sketch out the ideas:

![](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_robiohead_image5.jpg)

Observing a decades-old Desigual towel, during a bathroom break from the impromptu design session with the nine-year-old, offered new input to a possible design direction for the robot-head. The straight and diagonal lines for the mouth and nose, on the oddly designed head of that towel decoration, were somehow associated with the soft membrane potentiometer in the MCT4054 hardware kit.

![](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_robiohead_image11.jpg)

* * *

Hearing of those associations, the nine-year-old was quick to whip up new sketches:

![](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_robiohead_image2.png)![](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_robiohead_image3.png)![](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_robiohead_image7.png)

![](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_robiohead_image9.png)![](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_robiohead_image1.png)

Thinking of the upcoming winter solstice celebrations, the design associate came up with the concept of a beard and a pointy cap, where the former could serve as a tilting support and the latter as a cover for any connectivity and charging ports.

The two soft membrane potentiometers could offer navigation of notes / chords and sample durations, respectively. Eyes might conceal sensors for filter and reverberation / echo controls, while also providing led-based feedback. With those sensors as the only visible ones, the [low control dimensionality may lead to exploration of hidden affordances](https://www.eecs.qmul.ac.uk/~andrewm/zappi_nime2014.pdf).

The evolutionary interactions mapped to buttons in the initial concept iteration might be mapped to accelerometers, gyroscopes and/or compasses, where e.g. shaking the instrument might lead to discoveries or evolution of new sounds. The shaking-gesture could be perceived as mixing up the sound-genes. Tilting the instrument might provide navigation of note (lattices) instead of adjustments of visible potentiometers (and those tilts might lead to subsequent shaking-gestures). Then a potentiometer would rather be reserved for other sample-playback controls, such as for [timbre stretching](http://msp.ucsd.edu/techniques/v0.03/book.pdf) (2.4) or sustain control.

Alternative mapping might have the shaking-gestures responsible for triggering arpeggios of the most recently tilt-navigated notes, with a potentiometer controlled tempo. Evolutionary interactions might then have to resolve to the button gestures from the first concept iteration or some other gestures that are yet to be conceptualised.

The design sketches from the nine-year-old associate may require 3D printing. Should time not allow such materialisation has not yet been realised, where a cardboard box currently serves as an initial substitute:

![](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_robiohead_image4.jpg)

### Current prototype

Of the possible sensor combinations considered during the second concept iteration, the tilting gesture has been implemented for navigating sounds on a [tuning lattice](https://en.wikipedia.org/wiki/Lattice_(music)) and a (gentle) shaking gesture unravels new sounds. This prototype doesn’t offer actual evolution of sounds with shakes, but rather selects new pre-rendered sample based virtual instruments, to provide a tangible experience of how such a gesture might come up with new sounds during an evolutionary process. The soft membrane potentiometer is used for choosing different tetromino shapes for chord combinations, with seven positions for the [one-sided tetrominoes](https://en.wikipedia.org/wiki/Tetromino%23One-sided_tetrominoes) (where 19 positions would be required should all the [fixed tetrominoes](https://mathworld.wolfram.com/Tetromino.html) be covered). A sliding potentiometer is used to control the duration of the sounds (where each duration is pre-rendered) and a flex sensor is used to affect the sound velocity / filtering (each velocity is also pre-rendered). Those three dimensions of pre-renders (pitch, duration, velocity) result in quite large sample based instruments and the corresponding sensors provide a three-to-one mapping of control. In addition, a button stops (repeating) playback, allowing silent navigation to new sound parameters, e.g. a new tuning lattice position, instead of the default audible sequential navigation.

While not exactly adhering to the initial design constraint of child safe robustness, without any parts sticking out, it is a start:

![](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_robiohead_image10.jpg)

![](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_robiohead_image6.jpg)

### Testing and performing

[Video recording of one test session](https://youtu.be/A1m3Xp4wVgY):

<iframe width="560" height="315" src="https://www.youtube.com/embed/A1m3Xp4wVgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Live performance with Robiohead](https://youtu.be/cHC35p4oBHE) in [Salen](https://www.hf.uio.no/imv/om/rom-og-utstyr/salen/) after an [MCT4054](https://www.uio.no/studier/emner/hf/imv/MCT4054/) exam, on Monday December 12, 2022:

<iframe width="560" height="315" src="https://www.youtube.com/embed/cHC35p4oBHE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[First step implementation (milestone 1) tried out](https://youtu.be/Ij8sbW2JOY8):

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ij8sbW2JOY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Alexander Szorkovszky trying out the Robiohead:

![](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_robiohead_image13.jpg)

![](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_robiohead_image14.jpg)

### Open source

The source files behind this IMS can be accessed from:

[https://github.com/synth-is/robiohead](https://github.com/synth-is/robiohead)
