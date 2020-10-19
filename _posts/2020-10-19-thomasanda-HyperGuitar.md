---
layout: post
title: "HyperGuitar"
date: 2020-10-19 16:00:00 +0200
categories: interactive-music-systems
author: Thomas Anda
image: https://drive.google.com/uc?&id=10tXeAXSkwHEvFaxvB0ujYXujnnnsdM3f
keywords: Interactive Music Systems, augmented instrument, hyper-instrument, Bela, micro-controller, pure data, granular, spectral, karplus, acoustic guitar
excerpt: "An exploration of limitations and how to create meaningful action-sound couplings."
---

# Introduction

There have been lots of interesting projects done when it comes to augmenting and extending acoustic instruments with the use of electronics. One of my favorite examples of this is Morten Qvenild´s [Hy(Personal) Piano](http://www.mortyq.com/hpp). My initial idea was to create something that would mimic the aesthetics of the sounding output from his project. With this holistic approach, emulsification as Qvenild describes it as. The acoustic sounds from the instrument blends perfectly with the processed sounds. The different parts are intimately interconnected. 

I had this idea of creating an instrument where you had this subtle interaction between the two entities. Instant subtlety, music later. However, it is difficult to accomplish this in only 10 days when your cognitive abilities are under par. We should all listen to Perry Cook. But at least I made an effort and managed to create something that made some sound. 

# Interaction
At the core of this creation you find the "maker platform for creating beautiful interactions": [Bela](https://bela.io/index.html). As you can see in the picture below the Bela and breadboard are attached to the headstock of my guitar using some string I stole from my girlfriends sowing kit and a capo. Up until the last day my system looked a little bit different. Instead of a sad looking rotary potentiometer I had a ultrasonic distance sensor attached to the body of the guitar. However, due to some last-minute complications this was removed and replaced with a rotary potentiometer. 

The observant reader will also notice that there is a piezo-element fixed to the body. I will put a video at the end of the blog where you can see what this does. The piezo-element was there as an attempt to explore the percussive properties of the guitar. However, this was rather unsuccessful. Maybe I will explore this interaction more at a later stage, but for this blog post the focus will be on something more interesting. On the breadboard I have also connected a [9 DOF IMU LSM9DS1-chip](https://www.sparkfun.com/products/13284) from SparkFun. This is an IMU which houses a 3-axis accelerometer, a 3-axis gyroscope and a 3-axis magnetometer. Which gives you nine degrees of freedom (9DOF). If you analyse the output from the three sensors and fuse them together you can then calculate the [roll, pitch and yaw](https://gfycat.com/crispflawlessdragonfly).

<figure style="float: none">
   <img src="https://drive.google.com/uc?&id=1K-0_QywlJzM0WOJOvW6qBdok6VdaBhJu"
   alt="Alternate Text" title="Image Title" width="680" />
   <figcaption>The instrument in action!</figcaption>
</figure>

In my project I have mapped the pitch and the roll of the 9DOF to different parameters of a spectral delay and a granular synthesis-patch. All of the audio-programming is done in Pure Data. The famous visual programming language which will give you RSI and tinnitus in a heart-beat. In the GIF below you can see how the pitch is mapped to the bin-position of the spectral delay. You can download the patch [here](https://drive.google.com/file/d/15rzjY3XlADSlCRElQfK6h_9nvxkDpUSj/view?usp=sharing) if you like to check it out in more detail. 

<figure style="float: none">
   <img src="https://drive.google.com/uc?&id=1UejW6YUuuPEq3vhzSQypW8DZlErbPt7a"
   alt="Alternate Text" title="Image Title" width="680" />
   <figcaption>PD-snippet</figcaption>
</figure>

Anyways, the main issue when creating an interactive music system where you involve a guitar, is that you don´t have much spare bandwidth. Both of your hands are involved in the sound creation and letting go of the strings will stop the musical output. Therefore a motion sensor fits perfectly in this context. 

# Gesture-sound

<figure style="float: none">
  <video width="680" controls>
    <source src="https://drive.google.com/uc?&id=1C3G-ULXiecmcyHY-63EsYwfPDlHaRfnr" type='video/mp4'>
  </video>
  <figcaption>Roll mapped to pitch</figcaption>
</figure>

As you can see in the video above i have mapped the roll-movement of the guitar to the pitch of the granular synthesis. One of the features I wanted to achieve was a clear link between the movement I made and the sounding output. The gesture or action had to be related to a meaningful sonical output. Creating a link from action to perception. Bringing the audience perspective into the design of the instrument. In a way trying to trick the spectator into believing that the sounds are a natural part of the instrument. Or at least making it obvious where the sound creation is coming from. When you play the guitar you might have a lot of movement in your upper body. However, this might not effect the actual sound. So the movement is in a sense already there for many players. It´s just not utilized. Unless you have a [B-Bender](https://en.wikipedia.org/wiki/B-Bender) installed on your guitar. Therefore I found this type of movements to feel quite natural while playing, and it did not disturb my playing in any particular way. It was quite easy to adapt to this part of the instruments gestural acquisition. 

# Last thoughts

If I were to do this all over again. I would have spent less time on the sound-synthesis and more time on exploring what I could have done with only the granular synthesis. Spent more time exploring and fine-tuning. It requires some  practices if you want to convey something meaningful. There is a lot of expressive possibilities in this instrument, but it also has its limitations. And some parts are more fulfilling than others. The piezo-element is perhaps the least successful part of the creation. And has very limited expressiveness. However, I feel that there is still a lot to explore and learn about the instrument. I have not been able to spend too much time just playing with it, but here is a video of me exploring the instrument.

Some ideas:

- try to include the yaw movement(?)
- build a  more lightweight patch with less latency
- make it function with a distance sensor 

Here is a video you can watch. I recommend you to watch through the whole thing. Some very neat projects made by very clever guys:

<figure style="float: none">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/gEq9EnWrApc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <figcaption><strong>Exploration of unfamiliar territories and tunings</strong></figcaption>
</figure>

This is how it sounds in a more controlled environment:

<iframe src="https://drive.google.com/uc?&id=1ocFy3chTfdMUqki2VnZNi6Tf0DErA7r_" style="border:0px #ffffff none;" name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="400px" width="600px" allowfullscreen></iframe>

And this is what the piezo did :):

<iframe src="https://drive.google.com/uc?&id=1cxxZHvMqQbiFVJIBFb_d4m_V8n1Xzqtv" style="border:0px #ffffff none;" name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="400px" width="600px" allowfullscreen></iframe>

And if you are really interested you can have a look at the presentation I made. See if you can find the hidden treasures:

<iframe src="https://slides.com/thomanda/deck/embed" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>