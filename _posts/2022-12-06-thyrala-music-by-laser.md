---
layout: post
title: "Music By Laser: The Laser Harp"
date: 2022-12-06 09:30:00 +0200
categories: interactive-music
author: Thyra Liang Aakvåg
image: /assets/image/2022_12_06_thyrala_music_by_laser.jpg 
keywords: interactive-music-system, laser-harp
excerpt: "If you want to know how to play music with lasers, and maybe learn something about the laser harp, then you should give this a read."
---

<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/DnAfXK-hft8" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
>
</iframe>

Picture yourself on a Friday night. You’re standing in a dark room, and all you hear is the buzzing of voices from the people around you. In the distance, you can see the shadow of a person onstage. Suddenly, a deep sound fills the room, and the buzzing is replaced by cheer. The shadow lights up in neon colors and is now standing in front of something reminding of a sprinkler system of lasers. 

What you’ve now been picturing is a concert where the artist will perform with a laser harp. A laser harp is an electronic musical user interface with a laser display and is what I will enlighten your knowledge about. You can play music with the harp by cutting off the different laser beams, which will create various notes. It was patented in 1982 by the French composer Bernard Szajner, but the Australian Geoffrey Rose claims it was his invention and that he had taken out a provisional patent in 1975-1976. Later, the harp was popularised by Jean-Michel Jarre, which uses the instrument at almost every concert. 

<figure>
    <img src="/assets/image/2022_12_06_thyrala_jarre_harp.jpg" align="center" />
</figure>

There are two different styles of laser harps that are commonly used today, framed and unframed style. The framed style has, shockingly, a frame around the beams so that it looks like a traditional harp, while the unframed style, again shockingly, doesn’t have a frame and looks more like a fan or a sprinkler (as described earlier). 

<figure>
    <img src="/assets/image/2022_12_06_thyrala_framed_harp.jpg" align="center" />
</figure>

# Framed style
The framed style is the one invented by Geoffery Rose. How the instrument detects the blocking of the beams by using an array of photodiodes, often called light dependant resistors, inside either the upper or lower part of the frame. When the laser beam is blocked, the light reflected off your hand is detected by the corresponding resistor and the harp gives a MIDI feedback signal. The number of lasers is not fixed and can be everything from one to 32 or even more. This is mostly dependent on the capacity of the MIDI controller(s) and the software used but is also a freedom of choice. The size of the laser harp is also optional considering all limitations, and some larger installations have been seen at Burning Man, an event in the US that focuses on art and self-expression among other things.

<figure>
    <img src="/assets/image/2022_12_06_thyrala_frameless_harp.jpg" align="center" />
</figure>

# Unframed style (frameless)
The unframed style, or the sprinkler (yes, I think it looks like a sprinkler), is often built as one laser split into the wanted number of beams by using a mirror. Since there is no frame, the detection of blocking is a bit more complex than with the framed style. The detection is reliant on the timing of the light reflecting back to only one photoresistor. I have also found some examples that use a stepper motor that is connected to a mirror, and by changing the motor position fast enough, the single beam is split into multiple. This way, every laser beam has its own angle, or position, which is used for detecting which beam is being blocked.

# Closing words
These techniques are of course not the only ones used to create this type of control data with a laser harp. Other alternatives that have been tested are the use of an infrared rangefinder to determine the position of the hand that blocks the laser beam, a laser-based rangefinder to calculate the distance between the hand and sensor, a camera that tracks the position and motion of the laser, and I am guessing there are multiple other techniques which can be used. These are just some examples :)) Thank you for reading!

# Additional reading
Informationg about the installation of a laser harp on Burning Man from 2005 can be found [here](https://www.jenlewinstudio.com/portfolio/the-arc-harps/). 

More information about the framed harp, invented by Rose, can be found on this [link](https://duino4projects.com/build-your-own-laser-harp-using-arduino/).