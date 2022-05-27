---
layout: post
title: "One Last Hoorah: A Telematic Concert in the Science Library"
date: 2022-05-26 08:00:00 +0200
categories: portal
author: Jakob Høydal, Joachim Poutaraud, Joseph Clemente, Kristian Wentzel
image: /assets/image/2022_05_26_jakoboydal_thumbnailTelematic.png
excerpt: "In which we go over the most ambitious telematic concert of our MCT careers"
keywords: Telematic, Machine Learning, Network
---

<figure style="float: none">
   <img src="https://drive.google.com/uc?&id=1sNZ9DcuVc1I0w0pORxQB3sq75Q1KLgFh" width="auto"/>
</figure>

# **Introduction**

After one year at the MCT master program, we finally went out into the masses to arrange a location, away from familiar locations. This time, we arranged a concert between the [science library](https://www.ub.uio.no/bibliotekene/mednat/ureal/) at Vilhelm Bjerknes hus, and the MCT Portal at ZEB. In terms of audiovisual setup, we still used the same [NMP-kits](https://github.com/MCT-master/NMP-Portable-Kits) as before, but at this concert we devided it into two section: one that was a traditional telematic concert with gestural interplay, and one with instruments created for the audience to interact with. This post is about the methods and techniques we used to create the Vilhelm Bjerknes side of the concert.

## **Telematic Gestural Interplay**
Our first part of the concert was a performance by Joseph Clemente, Arvid Falch and Kristian Wentzel. This performance centered around the idea of a telematic interplay where gestures at one site manipulate the audio coming from the other site. At the Science Library, Kristian used a Myo armband controlling a [ZOIA](https://empresseffects.com/products/zoia) modular system to process and manipulate Arvids electric guitar playing from the Portal. What is a Myo armband? It is an inertial measurement unit (IMU) with gyroscope and accelerometer sensors, which also sports eight electromyography (EMG) sensors. This handy device is also capable of recognizing five different hand gestures out of the box. For a more in-depth look at Kristians setup, take a look at his other [blog post](https://mct-master.github.io/portal/2022/05/20/kriswent-extending-the-keyboard-through-motion-capture-and-modular-synthesis.html).

To make a performance out of our concept, we added Joseph and with a [Roland SPD-SX sampling pad](https://www.roland.com/global/products/spd-sx/) at the science library, and put a keyboard in front of Kristian as well. Our feature was an improvised piece, with some agreed guidelines. Our performance was made up of four sections, where one section seamlessly flowed into the next. We decided that Kristian should start the performance with a solo piece on an extended keyboard instrument using his setup. After some time, Arvid would join in for a duo performance where Kristian manipulated Arvid. In the third section we expanded into a trio, introducing Joseph on the drum pads. For the fourth section, we added more prominent and coherent grooves with a beat to the mix before finishing off.

<figure style="float: none">
  <video width="auto" controls>
	<source src="https://drive.google.com/uc?&id=1e8UywXUnf6CuZJi_GUd66uhSYmhTuJg2" type='video/mp4'>
  </video>
  <figcaption> Video of performance</figcaption>
</figure>


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

### **Gestural Interactions for Multi-parameter Audio Control**

To recognize hand gestures, we use the Python library [Mediapipe](https://pypi.org/project/mediapipe/), a simple way to build world-class ML solutions and applications. [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands) is a high-fidelity hand and finger tracking solution. It employs machine learning (ML) to infer 21 3D landmarks of a hand from just a single frame. That way, the user can use the index finger to trigger audio effects. Moreover, using [Open Sound Control](https://pypi.org/project/python-osc/) server and client implementations in Python, this makes it possible to send UDP packets from Python to Pure Data, to finally output audio from the soundcard of the computer. The hand gestures are thus used as controller for the multi-parameter audio effects (pitch, reverb, delay and modulation) in Pure Data.

<figure style="float: none">
   <img src="/assets/image/2022_05_21_joachipo_pdpatch.jpg" alt="Pure Data patch" title="" width="auto"/>
   <figcaption><i>Audio effects in Pure Data</i></figcaption>
</figure>

Code and instructions for setting up the program can be found [here](https://github.com/joachimpoutaraud/real-time-hand-gesture-recognition-for-audio-processing).

## **Promotion**

As a quick note, with the threat of COVID finally becoming more of a distant memory, we were finally able to promote our concert in more effective ways. This both physical and virtual posters featuring the poster created by Jakob, a Facebook event, and a takeover of the [science library’s Instagram page](https://instagram.com/realfagsbiblioteket?igshid=YmMyMTA2M2Y=), where we were able to post stories and advertise our concert to the library’s 1000+ followers.

## **Additional Information**

For more information on the technical details of this concert, visit our [wiki page](https://github.com/MCT-master/portal-wiki/wiki/Telematic-Concert-Between-Portal-and-Science-Library-Documentation-(Spring-2022)).
