---
layout: post
title: "Ethrio"
date: 2021-11-01 07:50:00 +0100
categories: interactive-music-systems
author: Pedro Lucas
image: /assets/image/2021_10_30_pedropl_ethrio_physical.jpg
keywords: interactive-music-systems, ethereal-sounds, music-dimensions, music-gestures, NIME
excerpt: "Ethereal sounds from the three dimensions of music: Melody, Harmony, and Rhythm."
---
As a musician I've always been interested in having control of multiple layers of sounds happening simultaneously in a live performance framed in an environmental perspective. Also, I personally think that the sound itself, in terms of timbral properties, is a source of inspiration for composing music and sonic exploration, especially if it has to do with sounds that are considered "Ethreal" or "not from this world", which is something that we can achieve with the use of sound synthesis.

In that sense, I took the three elemental dimensions of Western music: Melody, harmony, and rhythm, as well as audio effects, to implement a 3 in 1 instrument which can be interesting to play in terms of gestural performance. I named it **ETHRIO** as a reference to “Elthereal” for the sound characteristics and “Trio” for the three music dimensions mentioned above.

## Overview of Music Capabilities

The capabilities of this instrument can be described in the three dimensions:

*Melody* is performed through a slider that is mapped with an A minor scale.

*Harmony* is played by leaning the top-body towards the instrument to navigate in a simple 3-chord sequence (Am, Em, Dm).

*Rhythm* is achieved by playing [**Euclidian Rhythms**](https://splice.com/blog/euclidean-rhythms/?utm_source=google&utm_medium=cpc&utm_campaign=Google_Search_Acquisition_Sounds_Nonbrand_DSA_ROW&utm_content=sounds&utm_term=&campaignid=13577111017&adgroupid=123041963239&adid=528665014304&gclid=CjwKCAjw2vOLBhBPEiwAjEeK9nghk5UTv2YwAsvZwUAXWrvu3gzUGK52VgU3h6Vwk5d523QxVLJzKRoCjDkQAvD_BwE) in which the performer can change the configuration and speed of the patterns with just one button and a knob.

There are other features that will be presented later about details for sound and mapping.

## Design and Implementation

### Physical Interface

This solution uses the [Bela platform](https://bela.io/) as processor. The inputs are collected through the following sensors:

1.	Soft Potentiometer.
2.	Photoresistor.
3.	Button.
4.	Proximity sensor.
5.	Rotatory potentiometer.

An RGB led is included as an output for visual feedback. The connection diagram for the electronics parts is depicted below.

<figure style="float: none">
   <img src="/assets/image/2021_10_30_pedropl_ethrio_diagram.png" alt="Ethrio Diagram" title="Ethrio - Electronic Components Diagram." width="100%" />
   <figcaption><i>Ethrio - Electronic Components Diagram</i></figcaption>
</figure>

A physical prototype was developed in a way in which the system reflects stability and easy manipulation from the performer. The complete device is shown in the next picture.

<figure style="float: none">
   <img src="/assets/image/2021_10_30_pedropl_ethrio_physical.jpg" alt="Ethrio Interface" title="Ethrio - Physical Interface." width="75%" />
   <figcaption><i>Ethrio - Physical Interface.</i></figcaption>
</figure>


### Mapping and Sound Generation

The following table explains the sound synthesis technique and mapping from the considered three music dimensions and effects such as pitch bend, LPFs, reverb, and delay. The implementation was performed in Csound.

<figure style="float: none">
   <img src="/assets/image/2021_10_30_pedropl_ethrio_mapping.jpg" alt="Ethrio Mapping" title="Ethrio - Sound Generation and Mapping." width="100%" />
   <figcaption><i>Ethrio - Sound Generation and Mapping.</i></figcaption>
</figure>

## Live Performance

Below you will find a video showing the way this instrument works.

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1SxNp583QjGAewCS4y2XigQcXy9TO1Li2/preview" width="1024" height="576" frameborder="0" allowfullscreen></iframe>
   <figcaption>Ethrio - Live Performance</figcaption>
</figure>

## Evaluation

This instrument allows to achieve a good aesthetic easily since it contains predefined musical structures that can be explored by the performed through the sensors. However, there are challenges for having a good balance when interacting with the three dimensions. This balance has to do with the way in which the photoresistor is used since there are several parameters mapped to it.

One of this challenge is the pitch bend, since there are other sonic elements happening when the pitch is one tone above for the melody and can be disruptive when combining with the other instruments.

Additionally, the mapping of distance regarding the proximity sensor and the top-body to navigate in the chords should be balanced properly so that it feels more natural. Now it is difficult to find the right spot for a chord and keep playing it without an undesired change.

Regarding the rhythmical patterns, the combination between the pattern and the delay effect is interesting to explore, however it is not clear enough when the pattern changes since the delay mask some of those changes. Perhaps an improvement of the visual feedback could help.

An interesting feeling, especially because of the rhythms, it feels like the musician is playing with someone else that accompany the performance. It is something that could be explorer further is terms of responses from the system for a human-machine improvisation session.

Further development of this instrument is considered for expanding the music capabilities (not just adjusted to a fixed scale or chord progression). Also, there is room for experiment with other sound features and timbral control to increase the “Ethereal” feeling in terms of sonic features.

## References

*	Hunt A., Wanderley M. and Kirk R. (2000), Towards a model for instrumental mapping in expert musical interaction, in Proceedings of 2000 International Computer Music Conference

*	Hunt, A., Wanderley, M. M., and  Paradis, M. (2003), The importance of parameter mapping in electronic instrument design, in  Journal of New Music Research, 32(4).

*	Wanderley M. and Depalle M. (2004), Gestural control of sound synthesis, in Proceedings of the IEEE 92.

*	Birnbaum D., Fiebrink R., Malloch J., and Wanderley M. M. (2017), Towards a Dimension Space for Musical Devices by in Proceedings of the 5th international conference on New Interfaces for Musical Expression.

*	Toussaint G. (2005), The Euclidean Algorithm Generates Traditional Musical Rhythms, in BRIDGES: Mathematical Connections in Art, Music and Science.

*	Schereiber, I. (2009). Level 4 . 5 : Emergence. Game Design Concepts. Opgehaal van https://learn.canvas.net/courses/3/pages/level-4-dot-5-emergence

*	O’Modhrain, S (2011), A framework for the evaluation of digital musical instruments, by, in Computer Music Journal
