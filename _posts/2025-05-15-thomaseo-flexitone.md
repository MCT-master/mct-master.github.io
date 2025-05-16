---
layout: post
title:  "Flexi-tone"
date:   2025-05-14 10:48:00 +0200
categories: masters-thesis
author: Tom Oldfield
image: /assets/image/2025_05_15_thomaseo_flexitone_logo.png
excerpt: "A Multi-Dimensional Foot-Based Interactive Music System for Expressive Control of Audio Effect Parameters"
---

### Flexi-tone


Expression pedals are a useful tool in the repertoire for performers of Live Electronic Music. They offer the player the ability to control audio effect parameters in an expressive way whilst continuing to play their instrument.

Flexi-tone is an intelligent expression pedal. It has the ability to capture complex foot gestures over 3 dimensions and maps these to multiple audio effect parameters using machine learning techniques. The system uses a real-time implementation of a machine learning model performing a regression task. This creates what is known as generative mapping between gesture and sound. The model is trained on a user-created dataset making the system adaptive to the user. Flexi-tone is designed to enable the user to control multiple audio effect parameters as a highly expressive part of their performance. 

<br>
<br>
<div style="text-align: center;">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/hS0gfUfSSkU" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
(More videos at the bottom of this page!)
<br>
<br>




### Physical Interface

Flexi-tone is inspired by existing expression pedal interfaces in that it features a foot-pad and a base plate. Where Flexi-tone differs is that it uses a ball and socket type joint, fashioned by cutting a ping-pong ball in half, to enable rotational movements on three axis, like a gyroscope as illustrated in the image below.

<br>
<figure style="float: none; text-align: center;">
  <img src="/assets/image/2025_05_15_thomaseo_flexitone_gyro.png"
  width="50%"
  style="display: block; margin: auto;" />
  <figcaption style="text-align: center;">Illustration of the 3 angles of rotation measured using a gyroscope; pitch (X), roll (Y), and yaw (Z). Imagine from learn.sparkfun.com</figcaption>
</figure>
<br>
<br>


<br>
<figure style="float: none; text-align: center;">
  <img src="/assets/image/2025_05_15_thomaseo_flexitone_interface.png"
  width="90%"
  style="display: block; margin: auto;" />
  <figcaption style="text-align: center;">The physical interface of Flexi-tone. This image shows the foot-pad with the 'ball' on its underside, this is held in place by the 'socket' on the base plate. This ball and socket joint allows for 3-axis rotation of the pedal. </figcaption>
</figure>
<br>
<br>








### Technical Stuff

Foot gestures are captured using an Inertial Measurement Unit (IMU). Flexi-tone uses a LSM9DS1 which outputs (amongst other things) the fusion pose estimation of orientation. 'Fusion' pose as this algorithm fuses different sensor types to keep the measurement accurate over time. The LSM9DS1 is connected to a Bela mini device. This is a single board computer that handles incoming sensor data alongside all audio processing, including effects. Bela can run programs written in C++, SuperCollider, Csound and, as in Flexi-tone, Pure Data. An enclosure for the Bela mini was 3D-printed as shown below. This enclosure also facilitated 1/4 inch jack sockets to be connected to the audio I/O of the bela, meaning instruments such as electric guitar could be connected directly to the device.

<br>
<figure style="float: none; text-align: center;">
  <img src="/assets/image/2025_05_15_thomaseo_flexitone_bela.png"
  width="90%"
  style="display: block; margin: auto;" />
  <figcaption style="text-align: center;">Technical diagram of the software of Flexi-tone including, audio signals, sensor data, machine learning pipeline, GUI elements and two-way OSC communication.</figcaption>
</figure>
<br>
<br>



The Pure Data patch running on the Bela communicates with a laptop via a Open Sound Control (OSC) messages over a wired USB connection. On the laptop, a second Pure Data patch is running which handles all the machine learning elements as well as acting as a GUI (Graphic User Interface) for the device. A technical diagram of the full system and the computer-side GUI are shown below.


<br>
<figure style="float: none; text-align: center;">
  <img src="/assets/image/2025_05_15_thomaseo_flexitone_diagram.png"
  width="90%"
  style="display: block; margin: auto;" />
  <figcaption style="text-align: center;">Technical diagram of the software of Flexi-tone including, audio signals, sensor data, machine learning pipeline, GUI elements and two-way OSC communication.</figcaption>
</figure>
<br>
<br>

<br>
<figure style="float: none; text-align: center;">
  <img src="/assets/image/2025_05_15_thomaseo_flexitone_gui.png"
  width="90%"
  style="display: block; margin: auto;" />
  <figcaption style="text-align: center;">Flexi-tone's GUI. Audio effect parameters are adjusted using sliders on the upper half. The lower half contains tools for controlling the machine learning model and a real-time visual representation of the orientation of the pedal through gyroscope angles.</figcaption>
</figure>
<br>
<br>



A user study was carried out assessing the functionality pf Flexi-tone and its ability to foster high expressivity in electric guitar performance. You can read more about the study in my master's thesis available here. For now, enjoy some more demonstration videos!

<br>
<br>
<div style="text-align: center;">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/XhXLUVgbC6w" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
<br>
<br>

<br>
<br>
<div style="text-align: center;">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/GyOZgb5XYzA" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
<br>
<br>



<br>
<br>
<div style="text-align: center;">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/iLPChzxvufo" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
<br>
<br>



<br>
<br>
<div style="text-align: center;">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/Nof25Mvgw5E" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
<br>
<br>



<br>
<br>
<div style="text-align: center;">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/N8ugmvOJ8IE" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
<br>
<br>


<br>
<br>
<div style="text-align: center;">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/DovXFzsNakw" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
<br>
<br>

<br>
<br>
<div style="text-align: center;">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/kvoYsEPSt4k" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
<br>
<br>