---
layout: post
title: "Developing for an Embedded Platform"
date: 2023-11-27 07:00:00 +0200
categories: applied-projects
author: Alexander Wastnidge, Jack Hardwick, Aysima Karcaaltincaba, Kristian Eicke, Nino Jakeli
image: 
keywords: imu, 
excerpt: "Developing for an Embedded Platform"
---

# Developing for an Embedded Platform

### Introduction 

For our MCT Applied Project we have worked on several proof-of-concept development solutions for a prototype commercial product. The prototype platform is based around a [Raspberry Pi](https://www.raspberrypi.com) and a [SenseHat cape](https://www.raspberrypi.com/products/sense-hat/) inside of a 3D printed sphere. The intention for the platform is to elicit movement from the user by having music and audio react to motion in real time. In order to explore further potential functionality and to provide short-to-medium term solutions for future rounds of prototypes, our team took on several areas of development for this platform. These were:

- An integrated speaker and powering solution for future prototypes
- Expanded mapping of LEDs
- Expanded motion data mapping using machine learning
- Offline analysis of motion data

The outcomes of these different work packages are detailed below:

### Integrated Speaker Solution

The project partners specified that for future iterations of the prototype they wanted a unified solution for powering the Raspberry Pi and speakers without the need to open the product. After a period of research and exploration the following potential solutions were offered;

### LED Mapping

The product included an array of RGB LED lights as part of the SenseHat on the Raspberry Pi. Some functionality, such as colour changing, was already implemented to make use of these lights. However, we identified an opportunity for creating other mappings while also building a more robust and flexible interface for controlling them.

We therefore created an API in Python for handling the behaviour of these lights, which allows users to change lightings modes by calling a simple function, and then have the lights change over time. Our new API also adds motion-reactive lights, allowing the lights to change colour depending on how much the ball is moving.

<motion-reactive light mode video/gif of Pi not in ball>

### Mapping Motion Data with ML

We worked to implement new functionality using machine learning to expand the possibilities of mapping the motion data from the SenseHat cape. In exploring solutions for this we used two machine learning packages, Rebecca Fiebrink’s [Wekinator](http://www.wekinator.org) and the [Neuralnet external](https://github.com/alexdrymonitis/neuralnet) for Pure Data. Wekinator is widely used in music embedded systems for training and implementing machine learning algorithms for creative purposes including mapping for interactive music systems.

We decided to take orientation as our input data as we felt this was a currently underused in the current implementation. The SenseHat API allows access to accelerometer, gyroscope and magnetometer data streams. In order to calculate real-time orientation we used a sensor fusion algorithm from the micropython-IMU repository [micropython-fusion on Github](https://github.com/micropython-IMU/micropython-fusion). 

[orientation picture]

For the sake of musical possibilities afforded, we decided to focus on using a regression model to map two motion inputs (pitch and roll) to four outputs. Using the regression model allowed for a smooth transition between orientation states and greater potential for musical mappings. We created 4 new presets to showcase the model:
- Sine tones with evolving chords - the four output values from the model control the volumes of sine tones. The pitches of these sine tones outline 4 diatonic chords in C major: C9sus4, Cmaj7, G9sus4, and G7. The chord changes every 2 minutes and cycle repeatedly through these four chords in order.
- Sawtooth waves through analogue-style filters - the four output values are mapped to volume and filter cutoff of four analogue synthesiser-style voices, which are tuned to a major seventh chord.
- Choir - the four output values from the model control the volume of five choir samples which form an A major pentatonic scale. The tonic A note is triggered by low values in the four regression outputs, therefore acts as a drone when the four trained orientations are not detected or are only detected with small values.
- Disco - the four output values control the volume of four different layered disco samples. By changing the orientation of the ball, the user can morph from only drums through to a full mix with drums, bass, guitar, and strings.

### Offline Motion Data Analysis

We aimed to give an understanding of the movement data produced by the product, and the tools which shows the relationship between some control data and the movement produced as result. 

The acceleration data was collected by SenseHat get_accelerometer_raw method in python. We have stored the acceleration values along the different axes x, y, z as time series together with the tag information. Tag information was collected by a web socket implemented by Python as well, using the “socket” library. The tag data was built in a way that it could be sent from different places in the system and present different control datas. The partners did not have a plan for running a dedicated server for now therefore we have stored these data in a csv file locally in Raspberry Pi. 

The analysis was done in a Jupyter Notebook, reading this csv file offline and we have implemented plots in order to show the movement data over time per tag. The acceleration at different axes was difficult to understand so we used magnitude of those three axes as the parameter to show the movement amount. At the end, partners had the tools to pick a time range and a tag and understand the movement over this time.


### Conclusion

We have been able to implement several proof-of-concept solutions for the project partner.  The intention throughout has been to offer potential solutions to the project partner which they can pick up and develop further if they wish to do so.  In this project we have combined and used several key facets of the MCT course including audio programming, Python data processing, motion capture, machine learning and interactive music systems, showing their relevance beyond academia.
