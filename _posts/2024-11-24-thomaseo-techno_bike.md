---
layout: post
title:  "TechnoBike"
date:   2024-12-04 10:48:00 +0200
categories: interactive-music
author: Tom Oldfield
image: /assets/image/2024_11_24_thomaseo_techno_bike_6.png
excerpt: "A pedal-powered interactive music system"
---


### Introduction
TechnoBike is an interactive music system in which players perform industrial techno style music by riding on a modified bicycle. The tempo of the music is linked to the speed of the rear wheel which enables sensorimotor synchronisation (SMS). SMS is the synchronisation of a bodily movement to an external rhythm, like finger tapping along to the beat. The aim of the game is to pedal at a steady tempo whilst manipulating a complex synthesiser by turning the handlebars. If the user pedals too slowly, a red LED flashes, indicating that they should speed up!
<br>
<br>
<div style="text-align: center;">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/y4mGSlDF0go" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>

<br>
<br>



### The Hardware
As mentioned, the TechnoBike features modifications to a standard bicycle. It is possible to ride TechnoBike around whilst listening to the music in headphones but for testing and performing in a concert, the bike is attached to a bike-trainer device which lifts up the rear wheel, enabling the bike to be pedalled without actually going anywhere.

To detect the speed of the rear wheel, an infrared (IR) sensor is positioned on the bike frame. 4 paper squares are attached to the spokes of the wheel which give a high reading when the pass by the sensor.

<br>
<figure style="float: none; text-align: center;">
  <img src="/assets/image/2024_11_24_thomaseo_techno_bike_1.png"
  width="60%"
  style="display: block; margin: auto;" />
  <figcaption style="text-align: center;">Rear wheel of TechnoBike showing the IR sensor and paper squares</figcaption>
</figure>
<br>
<br>

A circuit consisting of an Inertial Measurement Unit (IMU), a rotary potentiometer and two momentary buttons is fastened to the centre of the handlebars. The angle of the handlebars is measured using IMU. The remaining controls influence several compositional parameters of the music; mute/unmute the kick drum, generate a new pitch and velocity sequence and overall volume.

The Bela microcontroller is the brain of the system taking data from the sensors to a pure data patch. Bela is designed to create embedded systems and features low latency specifically for musical interactions.

<br>
<figure style="float: none; text-align: center;">
  <img src="/assets/image/2024_11_24_thomaseo_techno_bike_2.png"
  width="60%"
  style="display: block; margin: auto;" />
  <figcaption style="text-align: center;">Handlebar circuit with the LSM9DS1 IMU sensor</figcaption>
</figure>
<br>
<br>



### The software
The majority of signal processing takes place in Pure Data. The signal from the IR sensor is passed through several low-pass filters; smoothing the data. Buttons are passed through a [threshold~] object to prevent unintentional presses.
<br>
<figure style="float: none; text-align: center;">
  <img src="/assets/image/2024_11_24_thomaseo_techno_bike_4.png"
  width="80%"
  style="display: block; margin: auto;" />
  <figcaption style="text-align: center;">Signal measurements showing smoothing using low pass (lop) filters in Pure Data</figcaption>
</figure>
<br>
<br>

The signal from the IMU sensor is a little more complex. Data is read by a C++ file though the two I2C ports on the Bela (thanks to Stefano Fasciani for the C++ code). A fusion pose is calculated in the C++ file. This takes multiple streams of data from the IMU including accelerometer, gyroscope and magnetometer to produce a more reliable indication of rotation.

The pure data patch generates techno music featuring simple synthesised drum sounds and a more complex synthesis engine, inspired by the Moog DFAM. The DFAM is renowned for it’s aggressive, industrial sonic palette, thundering eight-step sequencer, and at times unpredictable behaviour.

Check out this jam with the DFAM and Roland TR8s to get a taste of the sound.

<br>
<br>
<div style="text-align: center;">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/Cy6xb5AelA0" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>

<br>
<br>
Does the TechnoBike come close?
<br>
<br>
<div style="text-align: center;">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/VQA0qepCSCs" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>

<br>
<br>



### Mapping
Mapping is one of the most crucial parts of designing an interactive music system and TechnoBike features several different mapping strategies. Simple one-to-one relationships exist in cases where a simple action is required, such as pressing a button or turning a potentiometer. The pedalling speed to tempo mapping, although technically a one-to-one relationship, can be seen as a somewhat fluid mapping as the wheel does not always rotate at the same speed at the pedals. Finally the handlebar rotation to synthesis parameters is a generative one-to-many mapping, utilising a machine learning model to perform a regression task.

One way to visualise this process is to imagine that I programmed 11 preset sounds for my synth and spread them out at even intervals between 0 and 1. 0 = preset 1 and 0.1 = preset 2 etc. Now if I scale my handlebar position to a value between 0 and 1, when I turn the handlebars, I switch between presets. At least that is how it would function if the machine learning model was doing classification, but since it is doing regression, it not only changes the synthesis parameters to match the given preset but morphs seamlessly between presets, generating new sounds as well.

<br>
<figure style="float: none; text-align: center;">
  <img src="/assets/image/2024_11_24_thomaseo_techno_bike_3.png"
  width="90%"
  style="display: block; margin: auto;" />
  <figcaption style="text-align: center;">Mapping diagram of the Technobike system</figcaption>
</figure>
<br>
<br>





### Evaluation
[Several scholars](https://doi.org/10.1007/978-3-319-47214-0_14) have proposed a framework for evaluating musical instruments which scores the device in seven different areas. Having high scores in all categories is not the goal here, this is just a way of comparing instruments with each other in a more precise way. Below is a diagram evaluating TechnoBike based on these principles.
<br>
<figure style="float: none; text-align: center;">
  <img src="/assets/image/2024_11_24_thomaseo_techno_bike_5.png"
  width="60%"
  style="display: block; margin: auto;" />
  <figcaption style="text-align: center;">Mapping diagram of the Technobike system</figcaption>
</figure>
<br>
<br>
TechnoBike does a great job with sound and musical control, focusing on artistic expression and timbral control. However, since it doesn’t allow for note-level control, it is almost impossible to create traditional melodies. The system is easy to get started with and gives clear feedback, but it doesn’t offer much room for advanced performance, which might limit long-term interest. It’s also mainly designed for solo use and works best in person, so it scores low when it comes to interaction with other users.
<br>


### Summary
So TechnoBike is a bike that plays techno music in time with the pedalling of the player. This fosters sensorimotor synchronisation as the user pedals in time with the music. The position of the handlebars also controls multiple parameters of a complex synth engine through a machine learning model performing regression. The synth sound is based on the Moog DFAM - chosen for it's industrial, noisy sound.