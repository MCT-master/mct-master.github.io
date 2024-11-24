---
layout: post
title:  "Cosmic Clash!"
date:   2024-11-24 10:48:00 +0200
categories: other
author: Tom Oldfield
image: /assets/image/2024_11_24_thomaseo_cosmic_clash_5.png
excerpt: "Cosmic Clash - exploring gamification of physiotherapy exercises using the Biopoint sensor"
---



### Introduction
Can a game be used to help patients do their physiotherapy exercises better? What would this game look like and how would it work? These are the questions that we have been working on answering this Autumn in a collaboration between IMV and IFI at UiO alongside an industrial partner - SiFi Labs.
<br>



### The Biopoint Sensor
SiFi Labs are currently developing their line of sensors called Biopoint. These are small, wearable devices containing an array of sensors which collect data from the body. These include an Inertial Measurement Unit (IMU), Electrocardiogram (ECG), Electromyography (EMG), Electrodermal Activity (EDA/GSR), Photoplethysmography (PPG) and Skin Temperature. Data is transmitted via Bluetooth to a computer running either the standalone application or an executable program which can be run from the terminal or in python.
<br>
<figure style="float: none">
  <img src="/assets/image/2024_11_24_thomaseo_cosmic_clash_1.png"
  width="60%"
  style="display: block; margin: auto;" />
  <figcaption>Credit: SiFiLabs</figcaption>
</figure>
<br>



### Cosmic Clash!
Cosmic Clash! is the name of the game. It’s an arcade-style point-and-shoot game set in space. The objective is to shoot or avoid obstacles which damage the player whist trying to pick up lives and power ups which improve player abilities. Two of the sensors in the Biopoint - IMU and EMG - are put into action here to control movement and shooting mechanics.
<br>
**Add screenshot of game here!!**
<br>



### Data Processing
<div style="display: flex; align-items: center;">
  <div style="flex: 1; padding-right: 20px;">
    
  **IMU**
An IMU is a sensor used to measure motion and orientation. The BioPoint IMU, in this instance, integrates a 3-axis accelerometer and a 3-axis gyroscope, which allow it to measure linear acceleration and angular velocity. The IMU data packets from the BioPoint include a quaternion — a four-component representation of the device's orientation in 3D space. The sampling rate of the IMU is 100Hz. Check the diagram for a reminder of Euler (rotational) angles.
  </div>
  <div style="flex: 1;">
    <img src="/assets/image/2024_11_24_thomaseo_cosmic_clash_2.png" alt="Credit: SiFiLabs" width="400">
    <figcaption>Image credit: machinedesign.com</figcaption>
  </div>
</div>
<br>
<br>
The following equations are used to compute roll, pitch, and yaw from quaternion components 

\(qw\), \(qx\), \(qy\), and \(qz\):
<br>

\[
\text{roll} = \arctan2\left(2 \cdot (qw \cdot qx + qy \cdot qz), 1 - 2 \cdot (qx^2 + qy^2)\right)
\]

\[
\text{pitch} = \arcsin\left(2 \cdot (qw \cdot qy - qz \cdot qx)\right)
\]

\[
\text{yaw} = \arctan2\left(2 \cdot (qw \cdot qz + qx \cdot qy), 1 - 2 \cdot (qy^2 + qz^2)\right)
\]
<br>

<div style="display: flex; align-items: center;">
  <div style="flex: 1; padding-right: 20px;">

  **EMG**
EMG sensors detect the electrical activity produced by muscles during contraction, providing information about muscle activation levels, timing, and patterns. The EMG sensor in the Biopoint has a sample rate of 2 kHz. Similar to an audio waveform image, EMG data moves between positive and negative values - the further away from zero in either direction, the higher the signal level. To utilise this signal in our game, found the absolute value of a rolling average (across 8 samples in each data packet) and applied a threshold. When the signal goes over the threshold, a shoot command is sent.
  </div>
  <div style="flex: 1;">
    <img src="/assets/image/2024_11_24_thomaseo_cosmic_clash_3.png" alt="Credit: SiFiLabs" width="400">
    <figcaption>Image credit: delsys.com</figcaption>
  </div>
</div>
<br>



### System Architecture
The game was developed using the node.js runtime. This environment allowed us to develop a browser-based game with the capability for two players to collaborate simultaneously. Currently, data is acquired and processed in python and passed to a node server using web sockets. In the project folder, java script files handle game mechanics and html files render objects in the browser.
<br>
<figure style="float: none">
  <img src="/assets/image/2024_11_24_thomaseo_cosmic_clash_4.png"
  width="70%"
  style="display: block; margin: auto;" />
  <figcaption>System Architecture diagram</figcaption>
</figure>
<br>



### Check out Karenina using the EMG to fire bullets!
<br>
<div style="display: flex; justify-content: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/dohC859jXRY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>



### Use Cases
So we made a fun game using the Biopoint device as a control interface, but what does this have to do with physiotherapy exercises? How can Cosmic Clash be applied to real world situations? Well, games have been used to great effect in the medical field. Take [Re-mission](https://hopelab.org/case-study/re-mission/) or [MindMotion® GO](https://mindmaze.com/mindmotion-go/) for example. What our system can offer is a take home experience for patients to use repeatedly and this fits rehabilitation treatments in the field of physiotherapy.

According to this study from the [University of Auckland](https://go.gale.com/ps/i.do?id=GALE%7CA160592648&sid=googleScholar&v=2.1&it=r&linkaccess=abs&issn=03037193&p=AONE&sw=w&userGroupName=anon%7E890cb667&aty=open-web-entry), as much as 65% of patients do not fully complete their physiotherapy exercise treatment plans. It is difficult to pin down the exact reasons for this as the situation of each patient is different, but a common problems seems to be motivation. A lack of motivation can occur for many reasons. Perhaps the patient thinks the exercises are boring or not challenging enough, or they experience pain whilst performing certain movements.

This is where we believe our system could help! By gamifying exercise routines, patients could perform the movements more precisely with the correct timing and be distracted from pain or discomfort. Features such as a ‘streak’ reward system which incentivises consistent use over time, could enhance motivation, adherence, and long-term engagement with their therapy. Finally, raw data from sessions could be saved and used to track progress of patients, although there would be data protection rules to consider for this feature.
<br>



### Summary / Future Work
Cosmic Clash is a game prototype which utilises signals from IMU and EMG sensors to control the player. The game was developed in order to show how the Biopoint device could be used to gamify rehabilitation exercises in physiotherapy treatments. This could help to improve the quality of exercise and solve problems such as motivating patients to stick with their work out programs. In the future, we would like to implement other data types influencing the game such as ECG and skin temperature. Collaborating with experts in various medical fields would help us to design game mechanics which suit specific exercises. Finally, the Biopoint device contains a vibration motor which would be perfect for providing tactile feedback, responding to events within the game.