---
layout: post
title: "Étude de téléphone portable et popsocket"
date: 2020-10-14 20:00:00 +0200
categories: physical-computing
author: Henrik Sveen
image: /assets/image/2020_10_14_henrikhs_etude_de_dog.png
keywords: physical-computing, maxmsp, delay, dog, music, gyrosc, osc
excerpt: "Click to see a cute dog making strange music. Unbelievable. I think that sums it up."
---

# Étude de téléphone portable et popsocket

For this project I wanted to use data from my phone to control "stuff". I wanted to try to make some sort of Monome Ark speed control. After I experimented with hooking up gyro-values and acceleration to different parameters, ending up with some different results. Ended up with a delay that I built into a reverb with a simple sequencer and microphone providing the reverb with sound. I used Max/MSP and gyrosc on my phone.

#### What is it?
So for the speed control I used the compass data from the phone. Using a popsocket on the back, the phone is able to spin pretty nice on a table, like spinning a record. By splitting the 360 degrees of compass data into four (divided by 90) points, I found this a pretty good way to make the phone «bang» four times per round. By splitting in different values (180, 120, 90, 45 - should be in range of 360) we can achieve different calibrations for how fast we’ll have to spin the phone. I used a timer to get the ms values between each bang, then I wrote a brief JavaScript averaging the four last numbers.

For all osc-values I used a ($1, x)-[line~] which is ramping from value to value, making the value transition less steppy. Also [change] was a great object to use with the compass data to get rid of wild trigger happiness.

The sequencer part has one hardcoded melody and another melody that is making 8 random notes within a pentatonic scale. The random one also has a subdivision of time, making it jump around the steady bass melody. This is an easy way of providing something random that can also be heard as something melodic.

<figure style="float: auto">
   <img src="/assets/image/2020_10_14_henrikhs_etudedetelephoneportable.png" alt="Alternate Text" title="it's kind of messy, but i liked that look for this project" width="auto"/> <figcaption>Face of instrument</figcaption>
</figure>

<figure style="float: auto">
   <img src="/assets/image/2020_10_14_henrikhs_dogdelay.png" alt="Alternate Text" title="good luck zooming in, also a very messy patch.." width="auto"/> <figcaption>Inside of instrument</figcaption>
</figure>

#### But why?
Controlling software in this way gave different results than I expected. I’m quite conventional when it comes to tweaking, really into knobs and faders, not the whole «waving with my arms to make a synth sound»-thing. But this pushed me somewhat closer to the edge, giving me a better view over the valley of body motion control in software. I immediately found it quite interesting working with as little as two parameters (time and feedback), and I realized how I was reacting differently than I normally would, using traditional knobs and faders.
When mapping the values, I took elements of music cognition into consideration. Especially metaphors and affordances. This when deciding on how the delay reacts when you point it up and down, and how filters open when pointing upwards and close on downward movement. I wanted the interaction to correspond with how we initially, and generally, think of interaction and movement in sound. My experience was that this made it easier to understand where to look for certain sounds. Using compass is a little strange though, as north will always be north in the world, not north of your computer. This will give different results in different locations with the same movements, if you don't always face north when using the setup. Maybe I should've built a sonic compass into the thing, so that you'd have to find the right position to get rid of extremely loud 13kHz sine waves 👹... I think not.

So let's hear it in action

### I’m delaying in a room
This is a performance of me using the phone as modulation while typing on the computer keyboard. The computer microphone is picking up the sound, sending it through my patch.
<figure style="float: none">
  <video width="auto" controls>
    <source src="https://drive.google.com/uc?&id=1pjto-nIMrGl2UJlSSTP8WnLwqh5TqxIr" type='video/mp4'>
    Alternate Text
  </video>
  <figcaption></figcaption>
</figure>



### Dog D(el)ays
Maybe it’s not summer at all anymore, but it’s still possible to feel some heat from the sun. This is a piece made by my dog (Sanna) wearing my phone, looking for dog-treats in our yard. There are different inputs and modulations for each act. This also shows the sequencer in action. Enjoy.
<figure style="float: none">
  <video width="auto" controls>
    <source src="https://drive.google.com/uc?&id=1eWcUo7xJGEF2lY5rN6OXs7ve-by42qzv" type='video/mp4'>
    Alternate Text
  </video>
  <figcaption></figcaption>
</figure>

#### Thank you
Two slightly different approaches to this instruments. Hopefully you leave this post with some understanding of what it does. I'm happy I managed to get communication between my devices, and it's probably something I will explore further in music making. I'm happy to take any feedback or suggestions on this if you feel like saying something about it after watching this.
