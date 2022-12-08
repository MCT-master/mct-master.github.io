---
layout: post
title:  "Pringles, I love You (not)"
date:   2022-12-08 22:00:00 +0200
categories: interactive-music
author: Jakob Høydal
image: /assets/image/2022_12_08_jakobhoydal_pringles_thumbnail.png
excerpt: "No, that is not true. I do not like Pringles. But I like the tube it comes with! That’s why I invited a friend over to eat the chips, so I could use the tube for my 4054 Interactive Music Systems project."
keywords: interactive music, music performance, pringles, electret, mnicrophone, tube
---
<figure style="float: none">
   <img src="/assets/image/2022_12_08_jakobhoydal_pringels_header.png
" width="100%" height="100%" />
</figure>


So what did I actually make? The creation is called WoVi, meaning wind-driven violin. It functions by blowing into a [microphone](https://www.sparkfun.com/products/12758) for amplitude, and controlling pitch with a  [soft membrane potentiometer](https://www.sparkfun.com/products/8679). Not unlike how [EWI's](https://en.wikipedia.org/wiki/EWI_(musical_instrument)) work, but with a simplified design.

## Construction
The following parts were used:

| Part|Use  |
|---	|--- |
|Bela Board   	|Core of operations |
|Empty pringles box   	|Housing of all electronics  |
|Electret Microphone  	|Amplitude controls  |
|Soft Membrane Potentiometer   	| Pitch controls |
|Push button #1  	|Not in use |
|Push button #2  	|Key Selector  |
|Push button #3  	|Reset/rest  |
|Triple Axis Accelerometer Module (X axis)	|Vibrato  |
|Triple Axis Accelerometer Module (Y axis)	|Not in use  |
|Triple Axis Accelerometer Module (Z axis)	|Not in use  |

A Pringles tube has a inner dimensions of 70mm. The [Bela board](https://www.pringles.com/no/home.html) is 55mm wide, leaving little room for all of the electronics. An extra board had to be constructed so it could facilitate all of the sensor connections.

All of the sensors in the table above were implemented. To connect them, cables and more breakout board were created.

It helps to plan and prototype how everything fits together. This makes soldering quite simple. A total of one day was used. Luckily, few errors were made due to good planning.  

<figure style="float: none">
   <img src="/assets/image/2022_12_08_jakobhoydal_sandwitch_2.jpg
" width="70%" height="100%" />
   <figcaption>The board in its final form factor</figcaption>
</figure>

<figure style="float: none">
   <img src="/assets/image/2022_12_08_jakobhoydal_sandwitch_1.jpg
" width="70%" height="100%" />
   <figcaption>The board with room for the Triple Axis Accelerometer</figcaption>
</figure>


<figure style="float: none">
   <img src="/assets/image/2022_12_08_jakobhoydal_pringles_wiringDiagram.png
" width="70%" height="100%" />
   <figcaption>Wiring diagram used</figcaption>
</figure>

The original idea had the buttons on top of the tube. This was not feasible as the first prototype was broken when drilled into. So a second tube of [Pringles](https://www.pringles.com/no/home.html) had to be eaten!

<figure style="float: none">
   <img src="/assets/image/2022_12_08_jakobhoydal_original_sketch.png
" width="70%" height="100%" />
   <figcaption>Original sketch</figcaption>
</figure>

## Mapping and controls
The microphone controls amplitude of the pitch. It sends control data to the master level, so when the microphone does not register any input, the instrument is quiet. When blown or scratched, amplitude goes up so the pitch can pass.

To control the pitch, there are 15 scales installed in the instrument; 12 keys so its possible to play in major and minor in all keys, and 3 blues scales. The second button cycles through all keys, letting you know what key is selected. The third button is a bypass button, so the instrument can rest.

An accelerometer has been added, so when the instrument is lifted upwards, a vibrato is applied. It does not affect the signal when in resting position horizontally.

<figure style="float: none">
   <img src="/assets/image/2022_12_08_jakobhoydal_AI_generated.png" width="100%" height="100%" />
   <figcaption>[ChatGPT's](https://openai.com/blog/chatgpt/) take at the problem... Not so far from reality!</figcaption>
</figure>


## How does it work in practice?
Here you can see a video of it in use. The first key is C major. But to get to the Blues, I have to scroll through each other key, because its at the end. When pitching the instrument up in the air, a vibrato is added. A voice is added to indicate what key you are in (for those who does not have absolute pitch).

A [soft membrane potentiometer](https://www.sparkfun.com/products/8679) is not reccomended to use if you want fidelity and fine control of your instrument. As you can see in the video, it drifts a lot from the intended playing note. That is why it is a good idea to define what key you want to play in, so you can have a chance to play correctly.

The amplitude control is not perfect either. Does not only react to wind, but all other noises. A [low-pass filter](https://en.wikipedia.org/wiki/Low-pass_filter) and other methods were tried out. If you want to see the signal processing in more detail, check out the documentation [here](https://github.com/jakobhoydal/woodwindviolin)!

<figure style="float: none">
  <video width="auto" controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/video/2022_12_08_jakobhoydal_wovivideo.mp4" type='video/mp4'>
  </video>
</figure>

## Extra documentation
The projects software and instructions can be downloaded on [Github](https://github.com/jakobhoydal/woodwindviolin).
