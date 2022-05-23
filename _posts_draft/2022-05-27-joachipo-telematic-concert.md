---
layout: post
title: "Telematic Concert"
date: 2022-05-27 08:00:00 +0200
categories: portal
author: Jakob Høydal, Joachim Poutaraud, Joseph Clemente, Kristian Wentzel
image: /assets/image/2022_05_21_joachipo_coming_soon.jpg
excerpt: "Telematic Concert"
keywords: Telematic, Machine Learning, Network
---

# **Introduction**

Coming soon...


## **Telematic Interactive Systems**

The second part of the concert has been thought as a telematic performance involving users from two different locations (i.e. the Portal and the Science Library). The idea was to (i) generate and (ii) process audio data in real-time while interacting with two types of program:

- A program able to generate audio from the body motion of users
- A program able to control audio effects using the hand gestures of users 

By receiving an audio data created by the motion of body of the users in the Portal, the users in the Science Library were able to interact by adding effects and send the processed audio data back to the Portal. The Science Library program is composed of two parts: 

- A gesture interaction script written with the programming language Python 
- An audio patch written with the open source visual programming environment Pure Data 

<figure style="float: none">
   <img src="/assets/image/2022_05_21_joachipo_webcam.png" alt="Gestural Interactions" title="" width="auto"/>
   <figcaption><i>Gestural Interactions for Multi-parameter Audio Control</i></figcaption>
</figure>

**Gestural Interactions for Multi-parameter Audio Control** 

To recognize hand gestures, we use the Python library [Mediapipe](https://pypi.org/project/mediapipe/), a simple way to build world-class ML solutions and applications. [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands) is a high-fidelity hand and finger tracking solution. It employs machine learning (ML) to infer 21 3D landmarks of a hand from just a single frame. That way, the user can use the index finger to trigger audio effects. Moreover, using [Open Sound Control](https://pypi.org/project/python-osc/) server and client implementations in Python, this makes it possible to send UDP packets from Python to Pure Data, to finally output audio from the soundcard of the computer. The hand gestures are thus used as controller for the multi-parameter audio effects (pitch, reverb, delay and modulation) in Pure Data.

<figure style="float: none">
   <img src="/assets/image/2022_05_21_joachipo_pdpatch.jpg" alt="Pure Data patch" title="" width="auto"/>
   <figcaption><i>Audio effects in Pure Data</i></figcaption>
</figure>

Code and instructions for setting up the program can be found [here](https://github.com/joachimpoutaraud/real-time-hand-gesture-recognition-for-audio-processing).








