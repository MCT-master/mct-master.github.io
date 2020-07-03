---
layout: post
title:  "Group B - Circuit sniffing and sampling"
date:   2018-10-17 00:30:00 +0200
categories: physical-computing
author: Mari Lesteberg, Dmitry Vasilev, Ashane Silva, Shreejay Shreshta, Eigil Aandahl
image: /assets/image/2018_10_17_aleksati_piano_piezo.png
excerpt: "During today's workshop, we hunted for sounds created by electromagnetic interferences and vibrations using headphones, contact mics, and portable speakers. Then we 'hacked' a p5.js sampler to play the found sounds from our laptops."
---

<figure>
<img src="/assets/image/2018_10_17_aleksati_piano_piezo.PNG" alt="Piezo on piano" width="90%" />
<figcaption>Fig 1: Contact mic directly on piano strings</figcaption>
</figure>

During today's workshop, we hunted for sounds created by electromagnetic interferences and vibrations using headphones, contact mics, and portable speakers. Then we "hacked" a p5.js sampler to play the found sounds from our laptops.

We tried to capture sounds from both sides, Oslo and NTNU.
The first experiment was to identify exciting interfering radio signals where the headphones were used as the antennas. On the Oslo side, Dmitry, Mari and Ashane tried different places to find a strong electromagnetic field and finally managed to capture a very monotonous sound near the copy machine. The interference from a mobile phone and a card reader machine also produced more rumbling sounds.  
In Trondheim, for the first task, Shreejay’s cell phone failed to get noticeable electromagnetic interferences at first. Eigil came up with an idea of using his body as an antenna. He touched tip of a guitar jack cable while connecting its other end to a tiny battery powered amp and moved it around the room. And Walla! It worked. We finally got a few strong electromagnetic interferences near power sockets, a computer and speakers.

<figure align="middle">
<audio controls>
  <source src="https://docs.google.com/uc?export=download&id=17L0cx0I5xomyHv2Zyv9YsxLQjcwzx4h3" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
  <figcaption>Sound from the electromagnetic interference made by a computer</figcaption>
</figure>

The next task was to use headphones as a microphone. The Overdrive setting on the tiny Marshall amp was a fascinating knob to experiment with and we captured some feedback noises (Those were too loud!). It was fun making different voices and we were even able to moo like a cow.

<figure align="middle">
<audio controls>
  <source src="https://docs.google.com/uc?export=download&id=1I87VNKO6uGGPrjc9KE594yDiiZEwT_D0" type="audio/wav">
  Your browser does not support the audio element.
</audio>
  <figcaption>Sound made by speaking through the headphones</figcaption>
</figure>

Next, experimenting with a contact microphone directly to the Marshall amp was quite thrilling. We captured interesting sounds by directly attaching the mic inside a piano where it produced really growly noises and interesting overtones. We tried with different sting gauges of the piano to produce different sounds and it was quite fun to try new things with the piano pedals.
Also, we enjoyed tapping and scratching the mic on various surfaces like table tops and edges. We also rubbed it on different body parts like throat, cheek and forehead where it could pick up the sound of our voice.

The second part of the workshop centered on going through javascipt code for a simple sample instrument that could play back audiofiles. After looking at how it was put together, we were able to modify the code to play our own recordings from earlier in the day.

The final task was to perform while combining samples recorded in the previous tasks.
Coding in html went from despair to laughter as we slowly grasped the fundamentals of p5.js-based coding, hacked the sampler, and finally performed together, creating a cacophony of noise across campuses of UiO and NTNU.
The sound of mooing cow became a hit in the group jamming session.

<iframe width="560" height="315" src="https://www.youtube.com/embed/t5omfB8WAwU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
