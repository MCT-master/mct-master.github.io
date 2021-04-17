---
layout: post
title: "'Air' Instruments Based on Real-Time Motion Tracking"
date: 2021-04-18 00:30:00 +0200
categories: motion-tracking
author: Pedro Lucas
image: /assets/image/2021_04_18_pedropl_airInstFeatured.jpeg
keywords: motion tracking, nime, csound, python, hit detection, distance calculation
excerpt: "Let's make music with movements in the air."
---

# The Concept

The goal of this project can be established with this concise statement:

*'Make music with movements in the air.'*

This project, as well as applications based on the previous statement, are relevant to expand the range of possibilities for sonification and music performances so that it increases the expressivity through our bodies and enrich the experience of making and listening to music. There are some works related with this topic that can be explored. (e.g. [Jensenius et al.]( https://www.researchgate.net/publication/252066637_Musical_Gestures_concepts_and_methods_in_research), [Maes et al.](https://core.ac.uk/download/pdf/55706895.pdf))

My personal motivation for doing this project came from my previous experience in game development and my interest in the implementation of real-time systems as well as previous basic work on [motion capture systems back in 2018](https://pedrolucas.tech/artificial-swarm-intelligence/ ). One of my biggest influences came from my participation at the [NIME conference in 2019](https://pedrolucas.tech/nime-2019-my-first-music-technology-conference/) in which I could appreciate some works and performances related with gestures and music making.

Although the statement mentioned at the beginning covers a wide range of possible applications, I wanted to focus on a particular set of movements and gestures as well as specific instruments.

Before diving into more details regarding this project, I want to present the concept behind the idea, which is depicted in the figure below.

<figure style="float: none">
   <img src="/assets/image/2021_04_18_pedropl_airInstConcept.png" alt="concept" title="The Concept" width="auto" />
   <figcaption>The Concept</figcaption>
</figure>

As you can see, the main idea is tracking movement trough a **motion capture system**, taking the data in real-time from those movements, and sending to a **process to map motion into musical features**. The result of the data mapping process is sent to a sound generator that can be a **sampler and/or synthesizer** to make sound and music out of it.

Using this concept, I implemented two “air” instruments for a live performance which are the following ones:

* **Drums:** The idea is that the player can do gestures that simulate a “hit” in the air with each hand by holding an object that represents a drumstick and produce drums sounds every time a “hit” is performed. For this case, this implementation is limited to play a kick drum with the right hand and a snare drum with the left hand. The inspiration for this instrument came from a previous work in the MCT master that can be found [here.](https://mct-master.github.io/motion-tracking/2019/04/24/How-music-related-motion-tracking-can-sound.html)

* **Theremin:** This is an instrument that is naturally played in the air, and my intention was to implement a digital version of it with some modifications. Particularly, I am using the distance between a hand and a *point* in space to map frequency and amplitude of a sine wave. The *point* is an object that can be tracked by the motion capture system to obtain its position, which is used to calculate the needed distance to the position of the hand. More details will be provided later.

Both instruments coexist in the same environment to be used for a musical performance and are part of a networked architecture explained in the following section.

# Methodology

## The System

<figure style="float: none">
   <img src="/assets/image/2021_04_18_pedropl_airInstSystem.png" alt="system" title="The System" width="auto" />
   <figcaption>The System</figcaption>
</figure>

The image above depicts the architecture of an interconnected system for transforming movement features into music. After some experimentations and testing regarding the equipment that was utilized, I ended up using two computers connected directly through an ethernet cable. In the first computer runs the software *Motive* which is used for managing the *optical motion capture system* (MoCap) [**OptiTrack**](https://optitrack.com/). [*Motive*](https://optitrack.com/software/motive/) has an internal module for streaming data through the network called [*NatNet*](https://optitrack.com/software/natnet-sdk/). This data is sent to the *NaNet Depacketization Client* which is a Python module implemented by the developers of *Motive* to receive the data from the network and filter only the id, position, and rotation from rigid bodies (static objects identified by the MoCap) to be used in a Python environment. Despite NatNet client can be used in a different computer connected to the same network in which the MoCap computer is, I decided to run it in the same machine in order to improve the performance of the data processing by reducing the transmission time from *Motive* to the Python client. This configuration allows to take the data from this client and handle it directly in a real-time process in Python.

Continuing with the data flow from the previous image, the real-time process in Python uses the information from the rigid bodies to map movement data into meaningful musical data relevant to the two instruments described earlier (Drums and Theremin). Then, the results are sent through the network using OSC messages to another computer in which there are VST Plugins that interpret the messages and reacts accordingly. Those plugins are running in the DAW *Ableton Live*. The advantage of having the sound engine in another machine allows to focus the hardware resources on the music making and sound processing.

One peculiarity regarding the communication between the computers is the use of a direct ethernet connection. It works through WIFI if both computers are connected to the same network, however, it is faster and more stable to send data through a direct physical connection.

More explanation about the modules in the system is presented below.

## 'OptiTrack' Motion Capture System

An optical motion capture system (MoCap) is a platform commonly used in entertainment for animating characters, however it is widely used in other applications and one of them is the study of body movements. For this project I took advantage of the high reliability of this kind of systems and I decided to track the position of four objects illustrated below.

<figure style="float: none">
   <img src="/assets/image/2021_04_18_pedropl_airInstObjects.png" alt="objects" title="Objects to Track (Rigid Bodies)" width="auto" />
   <figcaption>Objects to Track (Rigid Bodies)</figcaption>
</figure>

A MoCap system detects reflective objects trough its infrared cameras and track their position as single points in a 3D space, but it can build more complex structures out of these points such as **rigid bodies** and **skeletons**. A rigid body is a set of points that has a configuration that is not intended to change and can be tracked as one only object that has a position and rotation in the 3D space. The skeleton is also a set of this markers, but it is shaped under a more complex structure that has static objects as *bones* that are interconnected and can be moved and rotated according to an object with articulations (generally a human being).

As you can see in the image above. I am using two static rigid bodies and two other ones taken from the bones on each hand since bones can be treated as rigid bodies. The data from these objects is sent to the Python module as described before.

## Python Module

This module uses NaNet for receiving data from the MoCap regarding the frames and rigid bodies in real-time. From this data, I am using only the timestamp from each frame and the position from the four rigid bodies mentioned above into the implementation of the following modules:

### Hit Detection (Drums)

The idea is using the static rigid bodies 1 and 2 as “virtual drumsticks” for a kick drum and a snare drum. Both use the same strategy for hit detection depicted below.

<figure style="float: none">
   <img src="/assets/image/2021_04_18_pedropl_airInstHit.png" alt="hit" title="Hit Detection (Drums)" width="auto" />
   <figcaption>Hit Detection (Drums)</figcaption>
</figure>

The first condition for the hit detection needs the calculation of *Jerk* which is the variation of acceleration in time. It was chosen because there is a high variation of movement when a hit occurs since it is related with a sudden and quick stop of a moving object, which means that the acceleration goes to zero in a very small amount of time. It required to calculate instant velocity, then instant acceleration, and finally instant jerk, all depending on the previous one. “Instant” in this discrete context means to consider the delta time and delta position between the current frame and the previous frame for making the calculations.

Since the result from the previous process is a vector, I determined the magnitude of it and compared it against a threshold (10000 m/s^3). However, it detected the hit when the movement happened up and down. Thus, for limiting the hit when it goes down, I used the displacement vector (using the delta position between frames) to calculate its angle regarding the up vector of the coordinate system and check if this value is greater than 90° to ensure the right direction of the movement.

Finally, the detection happens several times in a very small amount of time, but because I just needed one detection, I used a small delay (0.3 sec) to wait for the next one, which helps to skip other undesired detections in the moment of one hit.

The result of this strategy is one OSC message (/kick or /snare) per rigid body that is sent every time a hit is detected.

### Distance Calculation (Theremin)

For this instrument it is needed the interaction of two objects for each parameter (amplitude and frequency) that the sound generator requires (four in total). The figure below illustrates the strategy used in this module.

<figure style="float: none">
   <img src="/assets/image/2021_04_18_pedropl_airInstDistance.png" alt="distance" title="Distance Calculation (Theremin)" width="auto" />
   <figcaption>Distance Calculation (Theremin)</figcaption>
</figure>

This strategy calculates the distance between two objects, specifically from one static rigid body to a hand bone in a virtual skeleton. The computation of the distance is performed by using the displacement vector between both positions and obtaining its magnitude, which is the classical way to do it. After this calculation, the distance is normalized to a value between zero and one by considering a threshold between the objects (0.8 m).

This distance calculation is applied to two pairs of objects: Right hand – rigid body 1, and Left hand - rigid body 2. The firs one is mapped to a *3 octaves A minor scale* considering the *frequency* of the musical notes at the end, and the second one to a normalized amplitude (0 - 1) considering the inverse of the distance. The mappings are depicted in the figure above.

The result is sent by using an OSC message (one address and two values) every 0.1 seconds in the pattern *'/sine freq amp'* where *freq* corresponds to the frequency and *amp* to the amplitude of a sine wave that is constantly playing in the VST plugin that resides in the other computer.

## VST Plugins and Ableton Live

I developed two simple VST plugins for this project to translate the results from the processes explained above into sound. I used [CSound](https://csound.com/) in [Cabbage](https://cabbageaudio.com/) framework. The first VST is a sampler that take the /kick and /snare OSC massages to play a kick drum and a snare drum respectively. The second VST receives the *'/sine freq amp'* OSC message to feed a sine wave with the frequency and amplitude provided by the message.

Those plugins were loaded into audio tracks in [Ableton Live](https://www.ableton.com/en/) and used in a looping session for a live performance executed together with MIDI controllers.

# Results

Because of the precision and reliability of the motion capture system, the response of the output according to the movement in real-time feels adequately and fluent for a live performance since there is an immediate response to the actions performed in the air.

A demonstration of how it works is shown in the following video:

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1il38v0AgTL167BkQydDSW5KEc9_bGKk7/preview" width="1024" height="576" frameborder="0" allowfullscreen></iframe>
   <figcaption>'Air' Instruments - Live Performance</figcaption>
</figure>

# Conclusions

One of the challenges in this project was managing a real-time setup for the whole architecture presented here. I used the Portal room at University of Oslo and there were some considerations regarding network and computers to use in order to make it work. Thus, it is essential to know the equipment we have and the limitations to deal with when we work with interconnected systems.

Most of the fixed values used (thresholds and delay) were obtained experimentally to fit my particular style to play such instruments, hence it is important to develop calibration strategies to change those values according to the performer and the environment, even apply smart strategies for automatic adjustments if needed.

There is a high potential in this project to expand it to more motion and sound possibilities as well as the inclusion of visual feedback to enrich the experience for the performer and the audience. Also, it could be extended to a collaborative environment in which more people interact with each other as well as other objects.

Finally, I want to express my enjoinment in developing this project. I am looking forward to continuing the use of such technologies during this master program and my professional life, and I also hope that this work inspires others for looking into more innovative ways to increase expressivity in making music through our bodies.
