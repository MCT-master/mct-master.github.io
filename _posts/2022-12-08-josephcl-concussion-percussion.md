---
layout: post
title: "Concussion Percussion: A Discussion"
date: 2022-12-08 10:00:00 +0200
categories: interactive-music
author: Joseph Clemente
image: /assets/image/2022_12_7_josephcl_concussion_percussion_thumbnail.jpg
keywords: interactive music, music performance, handpan, steeldrum, percussion
excerpt: "Whether it’s riding a bike or building an handpan-esque interactive music system, always remember to wear a helmet"
---

<figure style="float: none">
   <img src="/assets/image/2022_12_7_josephcl_concussion_percussion_thumbnail.jpg" width="50%" height="50%" />
   <figcaption>This poor mannequin's in for a world of hurt, luckily it has a helmet on!</figcaption>
</figure>

# Introduction

If you use TikTok enough, you’re bound to come across a [veritable](https://www.tiktok.com/@tokiejoestar/video/7080689800482721070?is_copy_url=1&is_from_webapp=v1&lang=en) [boatload](https://www.tiktok.com/@ethereal.in.e/video/7133636561203285294?is_copy_url=1&is_from_webapp=v1) [of](https://www.tiktok.com/@handpanman1/video/7134746779853081861?is_copy_url=1&is_from_webapp=v1) [videos](https://www.tiktok.com/@cam_steen/video/7161201621467155754?is_from_webapp=v1&item_id=7161201621467155754) featuring the steel drum instrument known as a [handpan](https://en.wikipedia.org/wiki/Handpan). Known mainly for its calming and aesthetically pleasing sounds, these giant chunks of metal are understandably super expensive. Luckily, through the use of some household objects, sensors, code, and a little bit of pixie dust, we can recreate the experience of playing a handpan AND throw in even more bonus features. Thus I present the bike helmet handpan, more formally known as Concussion Percussion.

# How it Works

### Hitting the Helmet

Similar to a handpan, Concussion Percussion allows the user to hit an ordinary bike helmet and play back one of four handpan samples that correspond to where the user hit on the helmet. Users can mix between two different samples, choosing to play either one at a time or a mix of the two. I chose to use piezo discs, which provide the ability to sense when the user has hit on or near the disc, as well as how hard the user hit.

<figure style="float: none">
	<audio controls>
      <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2022_12_7_josephcl_handpan_example.wav" type="audio/wav">
    </audio>
   <figcaption>Handpan Audio Example</figcaption>
</figure>

### Bending the Flex Sensor

A flex sensor, which is a sensor that returns values  is used to control two different parameters. The first is the pitch of a reverberant drone that plays constantly.

<figure style="float: none">
	<audio controls>
      <source src="/assets/audio/2022_12_7_josephcl_drone_example.mp3" type="audio/mp3">
    </audio>
   <figcaption>Drone Audio Example</figcaption>
</figure>

The second is controlling some background noise when a piezo registers a hit, creating a twinkling effect if you move the sensor fast enough.

<figure style="float: none">
	<audio controls>
      <source src="/assets/audio/2022_12_7_josephcl_sparkle_example.mp3" type="audio/mp3">
    </audio>
   <figcaption>Flex Sensor + Piezo Hit Audio Example</figcaption>
</figure>

### Twisting the Knob

The rotary encoder (or “knob” for the uninitiated) also serves two key functions. The first is adding a delay to the handpan.

<figure style="float: none">
	<audio controls>
      <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2022_12_7_josephcl_delay_example.wav" type="audio/wav">
    </audio>
   <figcaption>Handpan Delay Audio Example</figcaption>
</figure>

The second is adding a bit of a harsher texture to the drone. The faster the user turns the rotary encoder, the more bitcrushed the drone becomes.

<figure style="float: none">
	<audio controls>
      <source src="/assets/audio/2022_12_7_josephcl_bitcrush_example.mp3" type="audio/mp3">
    </audio>
   <figcaption>Rotary Encoder Bitcrusher Audio Example</figcaption>
</figure>

# Construction

The positions of the piezo discs on the helmet are arbitrary, since they are quite sensitive and can register a hit from anywhere on the helmet. I positioned them on my helmet so that it feels the most comfortable when playing.

<figure style="float: none">
   <img src="/assets/image/2022_12_7_josephcl_piezo_placement.jpg" width="50%" height="50%" />
   <figcaption>Position of the piezo discs on the helmet</figcaption>
</figure>

The flex sensor is velcroed to the outside of a glove with the fingertips cut out, which allows the user to still play with that hand without the dampening effect of hitting the helmet with a glove on.

<figure style="float: none">
   <img src="/assets/image/2022_12_7_josephcl_flex_sensor_placement.jpg" width="50%" height="50%" />
   <figcaption>Position of the flex sensor on the glove</figcaption>
</figure>

Finally, I mounted the rotary encoder on the side of the helmet to allow easy access to the user.

<figure style="float: none">
   <img src="/assets/image/2022_12_7_josephcl_rotary_encoder_placement.jpg" width="50%" height="50%" />
   <figcaption>Position of the rotary encoder on the helmet</figcaption>
</figure>

# Video Demonstration

Coming soon!

# Sources and Special Thanks

The handpan samples I used for this project were [provided by freesound.org user tarane468](https://freesound.org/people/tarane468/sounds/426794/). 

Art for the comic book explosions can be found [here](https://www.dreamstime.com/comic-words-cartoon-speech-bubble-zap-pow-wtf-boom-text-comics-pop-art-balloons-vector-set-comic-words-cartoon-speech-bubble-image134503951).

Thank you to my mom for letting me borrow the bike helmet :)

# Files

You can view the Pure Data file for this project [here](https://github.com/jpclemente97/ConcussionPercussion).


