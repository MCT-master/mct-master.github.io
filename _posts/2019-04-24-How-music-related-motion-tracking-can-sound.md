---
layout: post
title: How music related motion tracking can sound
date: 2019-04-24 18:45:00 +0200
categories: Motion-Tracking
author: Karolina Jawad, Jørgen Varpe, Eirik Dahl
image: \assets\image\mocap_pic_ei.png  
excerpt: "During the course 'Music related Motion Tracking' there were several approaches among the students to realize their ideas. The Opti-Track system, new to all of us consists of infrared-cameras, markers and a software with calibration tools. We were exploring
the functions from scratch during the first week when hosting the 'Nordic-stand-still-championship' on both campus."
Keywords: Air drumming, Motion Caption, Movment, MoCap, Gestures, Virtual Drum sticks, OptiTrack
---

<figure align="middle">
        <video height="100%" width="100%" controls>
        <source src="https://docs.google.com/uc?export=download&id=1JDqDJEIQUW78GSjErcRdHwWVQc40KFDX" type="video/mp4">
        <figcaption><strong>Here we are recording motion data from Eirik. The video was send through a Mathlab code provided by Alexander Refsum Jensenius</strong></figcaption>        
        Your browser does not support the video tag.
        </video>
</figure>
Here we are recording motion data from Eirik. The video was sent through a Matlab program provided by Alexander Refsum Jensenius


## First week
During the course 'Music related Motion Tracking' there were several approaches among the students to realize their ideas. The Opti-Track system, new to all of us consists of infrared-cameras, markers and a software with calibration tools. We were exploring the functions from scratch during the first week when hosting the 'Nordic-stand-still-championship' on both campus'. With the mocap system we were measuring how music affects micro motion while the participants were standing still and being exposed to beat intense music. The winner was the person who was able to move the least.
It was a good opportunity to familiarize with the procedure and work flow of motion-tracking including setting up the required items.


## Second week
Even though most of us were not familiar with methodological concepts of sonification, it was what we ended up doing in the second week. Different skills, interests and backgrounds in our group formed an idea that turned out to be very feasible within the given time frame: Mapping an impulsive sound to an impulsive action in order to create a virtual/air percussion instrument.


## Forming ideas
The speed of the mocap cameras meant that they were very good at producing the kinds of data that we could work with. We recorded data with the motion capture system and would 'sonify' it afterwards. First the system needed to be calibrated and set with a ground plane. We then attached markers on the tip of two drumsticks. A recording was made, where Eirik hit a table placed in the recording space, at different positions on the x-axis, and with variable force. We used the table as a reference to a “natural” position on the y-axis (height), to be able to set the sound-trigger point. This data was exported as a CSV (comma separated data) text file and converted to a tabular separated text file in excel to be able to handle the file better in MAX.


## Practical Steps
After some reflection on the possible ways of triggering sound, Andreas Bergsland came with the suggestion to use jerk as the trigger point and helped us develop it. Jerk, in physics, is the rate of change in acceleration, and in mathematics this is the derivative of acceleration. When used as a percussive tool, the drumsticks would trigger one of the 4 sounds in the <a href="https://github.com/MeltingPlanet/AirCussion" target="_blank">Max patch</a>.


## Reflections
Originally, we were going to use Pure Data as the tool for analysing the data and doing the sonification. Because of lacking documentation, and several bugs were occurring (ex. floating frames in the program window), we chose to switch over to Max 8 since the community is bigger, and it was easier to get help from tutorials/forums. Also Jørgen and Jonas had experience from working with Max from previous projects. With regard to the goal of the week it was possible for us to formulate an idea and gradually implement it to the extent that was initially intended. The steps that needed to be taken were clear to all of us beforehand. We also tried to work together as much as possible in each of them.


<figure align="middle">
        <video height="100%" width="100%" controls>
        <source src="https://docs.google.com/uc?export=download&id=1rMDShl5TCwTklu4K-tyXBeZGZY8qcLEK" type="video/mp4">
        <figcaption><strong>Live-Demo: MCT-Students performing in the Portal and Eigil on the Aircussion instrument</strong></figcaption>        
        Your browser does not support the video tag.
</video>
</figure>
Live-Demo: MCT-Students performing in the Portal and Eigil on the Aircussion instrument
