---
layout: post
title: 'LoopsOnFoam'
date: 2019-10-13 13:30:00 +0200
categories: interactive-music-systems
author: Jørgen Nygård Varpe
image: /assets/image/varpe/LoopsOnFoam.jpg
excerpt: 'During a 2-week intensive workshop in the course Interactive Music Systems I worked on the development of an instrument prototype, which I named LoopsOnFoam.'
Keywords: Interactive Music Systems, IMS, Bela, Sensors, Pure Data
---

During a 2-week intensive workshop in the course Interactive Music Systems I worked on the development of an instrument prototype, which I named LoopsOnFoam. The instrument is made up of hardware sensors and Pure Data patches. The system is made for the <a href="https://bela.io/" target="_blank">Bela board</a>, which runs the patches and manages IOs.

I wanted a system that could loop audio input and be able to manipulate/control each loop while performing.

## The looper

The looper can record and play three loops, with a dynamic microphone as audio input. The three leftmost buttons on the breadboard controls this. Press once and you start recording, press again and you stop recording and it automatically starts playing, press a third time and you stop it. Then you can overwrite the loop, following the same procedure.

<figure>
<img src="/assets/image/varpe/looper.jpg" width = "50%" align="center"/>
<figcaption><strong>Looper device</strong></figcaption>
</figure>

## The Foam

The foam has a piezo microphone and an ultrasonic distance sensor attached to it. You choose which loop to control by pressing the rightmost button on the breadboard. A blue LED will light up next to the button (loop) you are selecting.

<figure>
<img src="/assets/image/varpe/controller.jpg" width = "50%" align="center" />
<figcaption><strong>Controller</strong></figcaption>
</figure>

The foam controls parameters of a granular synthesis patch, and you can explore tapping, scratching, hitting and pressing the foam to change the sound of the selected loop. Also, the distance from your hand to the ultrasonic distance sensor will affect the sound.
