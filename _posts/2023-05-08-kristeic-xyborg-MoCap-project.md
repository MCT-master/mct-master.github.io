---
layout: post
title:  "Xyborg: Wearable Control Interface and Motion Capture System for Manipulating Sound"
date:   2023-05-08 13:10:42 +0200
categories: motion-capture
author: Kristian Eicke
image: /assets/image/2023_05_08_kristeic_hand_thumbnail.jpg
excerpt: "Witness my transition from human to machine - with piezo discs"
keywords: motion capture, NIME, IMU, sound design
---

In this semester's Motion Capture class I wanted to find a way to literally take a step back from my MIDI keyboards and explore the space around my body. The idea to control sound with a wearable device has been sitting in my head for a while, so the opportunity was ripe to explore the concept. 

You can buy wearable devices such as the [genki ring](https://genkiinstruments.com/) but I wanted to see if I can come up with an inexpensive customizable version. Check out my final concept in the picture below. 

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_05_08_kristeic_front.jpg" width="auto" />
   <figcaption>Current state of the device fixed to my forearm and hand.</figcaption>
</figure>

## The idea

[Piezoelectric discs](https://piezodirect.com/piezo-disc-actuators/) function as sensors and send an electric signal when pressed. They are soldered together and connected to an Arduino MEGA R3. The plan was to be able to use different thumb-finger combinations and touching multiple sensors at once to send control signals. I created 4 different functionalities with a processing pipeline in [Max](https://cycling74.com/products/max): on/off (thresholded continuous signal), continuous, continuous~ and double tap. So far so good!

I used a MYO armband for capturing arm motion. You can do a lot with it since you get 9-axis IMU data, data from the EMG sensors and classified gestures. The final Max patch includes the control display for the wearable device and MYO data as well as a phase-modulated synthesizer and several effects. But how do you maintain control over the continuous data stream so it does not constantly modulate your parameters? That's where my xyborg hand comes in. With pressing the right sensor you open up a gate that allows you to modulate an effect parameter like the cutoff of the lowpass filter. MYO gestures were used to decide whether an effect is on or off. 

## Results

I was happy with the first test run since I could perform and modulate effect parameters quite reliably. After continuous use though, the piezo discs started to give up on me and introduced a lot of noise and signal peaks into the system making it impossible to not trigger stuff randomly. The MYO also proved to be somewhat of a nuisance since gesture classifications are pretty much unsuable when you want to use EMG data and change parameters in relation to muscle tension simply because gestures randomly trigger when tensing muscles. 

Well, no system is perfect from the beginning. That's why I sat down again and impoved the design. I won't use the MYO again but incorporate other sensors, possible movesense or bare MPU's, and place them differently to capture hand motion and a wider angle of the roll-axis. Piezo discs will be replaced with strain gauges and fixed to a ring aound the finger. Check out my renderings down below. 


<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_05_08_kristeic_right.png" width="auto" />
   <figcaption>Rendering of a future concept</figcaption>
</figure>

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_05_08_kristeic_hand.png" width="auto" />
   <figcaption>Inner side of the hand</figcaption>
</figure>

I am happy with the outcome so far since I see the potential. Next iteration with music soon to come!



