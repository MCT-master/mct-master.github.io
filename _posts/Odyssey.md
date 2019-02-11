---
layout: post
title: "Odyssey"
date: 2019-02-11 16:43:00 +0100
categories: Audio-Programming
author: Shreejay Shrestha
image: /assets/img/odyssey.jpg
excerpt: "Odyssey is a Web Audio Api envisioned to immerse users into a misty jungle environment with sounds of music and nauture. Besides the jungle environemt, the application adds bits of fun providing sounds of domestic animals like dog, cat and a chicken. It may not give you a profound immersion into the environment at the moment though. But I am hopeful that user will enjoy and have fun playing with  it. The application is written in HTML5 and javascript. The sounds are taken from freesound.org while the beautiful picture of the mistyjungle has been borrowed from www.selfgrowth.info/WDF-13569.html."
---

# Odyssey
<figure>
  <img src="/assets/img/odyssey.jpg" alt="the misty jungle" width="90%" align="middle"/>
  !--<figcaption><strong>Odyssey</strong></figcaption>--!
</figure>

## Introduction
Odyssey is a Web Audio Api envisioned to immerse users into a misty jungle environment with sounds of music and nauture. Besides the 
jungle environemt, the application adds bits of fun providing sounds of domestic animals like dog, cat and a chicken. It may not
give you a profound immersion into the environment at the moment though. But I am hopeful that user will enjoy and have fun playing with 
it. The application is written in HTML5 and javascript. The sounds are taken from https:freesound.org while the beautiful picture of the misty
jungle has been borrowed from www.selfgrowth.info/WDF-13569.html.

The start button plays a jungle environt sound and fills in a jazz piece after around 10 seconds. Four buttons are provided which plays 
sounds of the animal followed by their name. Finally, the stop button ends the application. 

__Keywords:__ _Web Audio API_, JavaScript, HTML5 

## Routing of Different Audio Nodes
<figure>
  <img src="/assets/img/Routing-audio-nodes-03-delay-node.png" alt="Routing of the audio signals" width="60%" align="middle"/>
  !--<figcaption><strong>Routing of the audio signals</strong></figcaption>--!
</figure>
 
 The application is built upon example 3 of both the the first and the third day of the Audio Programming workshop called 'play sound'
 and 'delay node' respectively. The environment sound and jazz music piece have been directly sent to the output without delay or any
 kind of envelope. All other sounds have been individually routed following the figure above.

### Future Plans
I wish to make the application a bit more immersive with binaural/ambisonic techniques and adding varieties of soundscape. Besides, to
make it more interactive, features like mouse interaction can be applied that we exercised during Day 1 of the Audio Programming Workshop in
example 6 called 'Mouse Interaction'.

Please follow the link to my repository to find all the files.
https://github.com/shreejayshrestha/Odyssey.



