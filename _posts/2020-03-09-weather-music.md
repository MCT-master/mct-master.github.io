---
layout: post
title: Weather Music
date: 2020-03-09 20:00:00 +0200
categories: sonification
author: Aleksander Tidemann, Jarle Steinhovden, Gaute Timian Dahl Wardenær, Tom Ignatius Wee
image: /assets/image/2020_03_09_aleksati_sunset.jpg
excerpt: "Experiencing weather is a multi-sensory and complex experience. The objective of our sonification project was to sonify the weather through the use of online video streams."
Keywords: Sonification, Pure Data, Python, Weather, MCT4046, MCT
---

## Introduction

Weather is a multi-sensory and multi-dimensional experience. With this, we mean that weather can be described both quantitatively, as temperature, down-fall, brightness, etc., and qualitatively such as “a beefy sunset” or “a crappy sunset”. With the use of the available tools to our team, our group set out to translate these experiences to sound! Our objective was to sonify the weather based on online webcam live-feeds in space through spatialized audio.

Roles:
* Aleksander - Python Implementer/ Programmer.
* Jarle - Puredata Implementer/ Programmer (Sound Engine)
* Gaute - Puredata Implementer/ Programmer (Spatial Panner)
* Tom - Make fancy slides, documentation, and contribution of ideas

Sofware Dependencies:
* Python 3 with PIL, numpy, opencv2, color-science, pythonosc, argparse, datetime, time and pytz.
* PureData Vanilla with Cyclone and Else.

## Image extraction

The frame extraction is based on pythons PIL and color-science libraries in particular and reads consecutive frames from your computer screen. The program extracts weather information by collecting color temperature values based on RGB-averages from nine equally large sections on your screen, as seen in figure 1. Additionally, we extracted the color temperature average from the entire image, grayscale histogram information (if the entire image is darker or brighter on average), and time values from a specified timezone for more accuracy. This data gave us a good indication of what the weather was like and what the image/camera feed looked like.

<figure align="middle">
   <img src="https://drive.google.com/uc?export=view&amp;id=1RGje8WT8vQsGMbJUsncqU0n4Nb-WwePK" width="auto" height="auto"/>
   <figcaption>Figure 1 - Screen segmentation</figcaption>
</figure>

However, we decided to scale down our data intake by focusing on four squares, as seen in figure 2, only extracting color temperature averages. This enabled us to focus on the color sonification and calibration more clearly given the limited project time-frame.

<figure align="middle">
   <img src="https://drive.google.com/uc?export=view&amp;id=1QI8hCQfi5y7tScE2T1zGJ6lMRSkZ2x0-" width="auto" height="auto"/>
   <figcaption>Figure 2 - Four corners</figcaption>
</figure>

## Sonification

The sound engine was built in PureData and features note generation based on a Markov-chain and non-equal temperament scaling. The information received from python is re-formatted in PureData for different usage. For instance, by calculating the difference between frames we were able to distinguish rising and falling color values. The information then triggers pairs of PureData instruments, combinations of harps, Rhodes, chimes, and marimbas. Finally, the music is then run through a reverb before being sent to the speakers. The color temperature average of the whole screen decides which instrument combination is used based on their aesthetic qualities. The individual color temperature values from each square are then used to position the music in space, as seen in figure 3. The higher the color-temperature is in a given square, the louder the volume is in that particular speaker.

<figure align="middle">
   <img src="https://drive.google.com/uc?export=view&amp;id=1XBLsmX9gal9EdvHBXb8_PDHp7mBObis0" width="auto" height="auto"/>
   <figcaption>Figure 3 - Spatial concept</figcaption>
</figure>

The audio example beneath is a demo of our sound engine playing through a 24-hour cycle in roughly 2 minutes. Notice how the different times of day affect the combination of instruments.

<figure align="middle">
   <audio controls>
     <source src="https://docs.google.com/uc?export=download&id=1SGU0ZW8E1_FzMWNR8zyCPQvRKzzsyD8d" type="audio/mpeg" volume="1.0">
     Your browser does not support audio tag.
   </audio>
</figure>

Practically, this entire setup was achieved using two machines as figure 4 shows. One machine extracts its screen (webcam or image feed) and sends that information to PureData via UDP. From there, we send this data via [netsend -u] to another machine that runs the actual sonification. We decided to design the system like this because we all felt that the idea of representing an image through spatial sound was very interesting, hoping that a user could close their eyes and perceive whether the sun was rising or setting through the location and texture of the music in the room.

<figure align="middle">
   <img src="https://drive.google.com/uc?export=view&amp;id=1mH8VGRR01ZvW0KPnGN0azINL32zkntl7" width="auto" height="auto"/>
   <figcaption>Figure 4 - Signal chain</figcaption>
</figure>

## Future Development

If our project time-frame had been greater, we would have done more testing and calibration before expanding our space into 8 squares with an equal amount of speakers. This would allow for possible expansion of the sonification of different scenes or places at the same time. However, the current product is useful in its own right, however, the said expansion would have been a great addition to create more possibilities for more use.

A future use-case for our technology could be to sonify the output of a live camera at a site. Imagine a vantage point where one would usually go to watch the sunset and sunrise and get a sonification of the experience as well as watching it. The ideal scenario would be to have the panning of the voices done in an Ambisonics encoder so that it could be played back on any number of loudspeakers and in a three-dimensional sound-field as shown in figure 5.

<figure align="middle">
   <img src="https://drive.google.com/uc?export=view&amp;id=1uNMmvtvlHRq90N06cN-HP8FOTV7xF4g6" width="auto" height="auto"/>
   <figcaption>Figure 5 - Expanded spatial concept</figcaption>
</figure>

## Summary

In this weather sonification endeavor, we succeeded in extracting necessary data from video feeds through Python and use that information to produce pleasant spatialized compositions in PureData based on the weather. Although our scope ended up being limited by both time and resources, our project shows that weather sonification through color extraction is very much possible and that spatializing audio to coordinates on a screen is an interesting arena for further exploration. This kind of sonification could be used for installations purposes, like sonifying climate change, or in social applications like aiding the visually impaired by sonifying their surroundings.
