---
layout: post
title: "The singing shelf bracket"
date: 2020-10-18 23:59:59 +0200
categories: interactive-music-systems
author: Name1 Surname1, Name2 Surname2 
image: /assets/image/2020_10_18_FractionMari_shelfbracket.jpg
keywords: interactive music systems, bela, hci, pure data, pd, physical computing, breadboard, arduino, prototyping, instrument creating, interactive music controller, embedded interactive system
excerpt: "Pure Data (PD) has a lot of possibilities, but when getting the opportunity of putting together all of those digital features into the real word: with real wires, real buttons, real sensors - I must admit - I got a little over-excited!"
---

Pure Data (PD) has a lot of possibilities, but when getting the opportunity of putting together all of those digital features into the real word: with real wires, real buttons, real sensors - I must admit - I got a little over-excited! It’s a new dimension that reveals in front of you in terms of audio programming. It’s like playing with LEGO, but you can make music with it. Just so fun.

![Bela](/assets/image/2020_10_18_FractionMari_bela.jpg "Bela!")

I have been playing around with [Arduino and breadboards before](https://youtu.be/B0jhx1I2dPM), bought a lot of wires, leds, resistors and other electronic stuff online, and I have had some projects with Pure Data and Raspberry Pi, but never really completed anything appliable. Bela is neat, as it is designed to be used together with PD. The difficult thing is that you cannot use messages in Bela, everything should be audio signals. Also, the Bela has not the best CPU capacity, so you have some restrictions on what you can make. But when compared to Arduino and other single-board microcontrollers, Bela is exceptional regarding low latency. It can perform latency as low as 0.5 ms.

In my project, I used an object called Sigmund~, that converts audio signals to midi note float numbers. My idea was to be able to control a synth with the voice, so that hands could be free to do something else. I was thinking about a digital saxophone (Akai Ewi) I heard some years ago at a concert with [Panzerpappa](https://panzerpappa.bandcamp.com/). That was the most awesome thing I’d ever heard, and I wish that I had one, and hey, maybe this could be a chance of building something that would never even be CLOSE to sounding like that instrument, but could be a step forward in that direction? And with a twist: using your voice to create the melodies. Call it a Kazoo if you want, I call it … something else (I will come back to that later). 

![The final PD patch](/assets/image/2020_10_18_FractionMari_pdpatch.png "The final PD patch")

In my PD patch, I tried to create some great many-to-many mapping, because that’s how the traditional instruments are mapped. Initially, I wanted to add so many features for this instrument. A drone note function, a low frequency oscillator, a volume control, a pitch bend, bypass filter, a loop function, recording function, effects such as reverb and other effects were some of the features I initially wanted to include. And of course, some AWESOME synth sounds. In addition to this, I also imagined that you could use the microphone in a traditional way without converting the audio to midi notes. So that you in one small instrument could create a synth loop which you could perform over with your voice. This is definitely something I would love to possess and use myself! 

And this whole thing was supposed to be wrapped inside a 3d printed body without any of the electronics visible, and there were supposed to be dozens of LEDs covering the whole body so the instrument could look like a christmas tree on speed … 

But what did I end up with? 
This:

![A shelf bracket](/assets/image/2020_10_18_FractionMari_shelfbracket.jpg "A shelf bracket")

…. A shelf bracket. A singing shelf bracket that I found in my locker (don’t ask why I had a shelf bracket in my locker - I really don’t know why!)

No loop function, no raw voice function, no reverbs, no filters. But it has a couple of oscillators, a drone and a low frequency oscillator. It is a start really. The shelf bracket shape Is OK, as you can hold it with your both hands and still control the sensors with your fingers! But perhaps not a christmas tree. Definitely no christmas tree. More like a ... chistmas foot? :P

![A shelf bracket](/assets/image/2020_10_18_FractionMari_shelfbracket2.jpg "A shelf bracket")


I wish this course lasted for more than just TWO WEEKS!!! And on the last day, we had to disassemble the whole instrument  - no chance of realizing further plans at all. If I don’t buy my own bela - perhaps I will. I’m addicted!

This diagram shows the mapping of the instrument:
![Mapping of the instrument](/assets/image/2020_10_18_FractionMari_diagram.png "Mapping of the instrument")