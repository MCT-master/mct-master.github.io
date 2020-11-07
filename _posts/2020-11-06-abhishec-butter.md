---
layout: post
title: "Butter"
date: 2020-11-06 11:45:00 +0200
categories: digital-audio
author: Abhishek Choubey
image: /assets/image/2020_11_06_abhisec_butter.jpg
keywords: digital-audio, csound, phase modulation, Spatial, phasing, dsp, cabbage
excerpt: "An easy to use and fun plugin to make your sound smooth as butter."
---


## Butter: A tool to make your sound smooth as butter.

#### Introduction:

Since the time I got introduced to the world of DAW’s and producing music electronically in general, a part of me was always fascinated by behind the scenes of the tool that I used, to create something palatable to the ears on the blank canvas of my DAW. I wondered how would the song transfer from one effect to the other or how are these sine waves and square waves getting generated? Coming from an engineering background the signal flow of the sound behind those easy to manipulate looking knobs was always at the back of my mind, while the front end of it was busy creating creative things.

The short module on Digital Audio was a nice introduction to the behind the scenes I always wanted to know about. So I took this opportunity to peak into the scenes and create a tool of my own, which had all the effects that I love and have easy to manipulate knobs, and after a lot of trial and error, plus with a little bit of help, I made Butter

**BUTTER** is a Multi-effect plugin which intends to make your sound better and smooth. It has four effects in it, Distortion, Chorus, Reverb & Filter. Each effect can be used individually as well as in combination with each other.

![Butter](/assets/image/2020_11_06_abhisec_butter.jpg)

#### Processing

The signal flow between the opcodes and processing of the audio is as follows:

![Butter Signal Flow](/assets/image/2020_11_06_abhisec_butter_signal_flow.jpg)

The input dry signal goes to the effects one by one and gets processed according to the parameter set by the users. The opcodes used here are [Clip](http://www.csounds.com/manual/html/clip.html) for Distortion, [vDelay](http://www.csounds.com/manual/html/vdelay.html) for Chorus & [Reverbsc](http://www.csounds.com/manual/html/reverbsc.html) for Reverb. ***Clip*** here clips the input signal upto a predefined limit in a soft manner giving a nice warm Distortion, ***vDelay*** is an interpolation time delay function, it basically delays the sound with a longer delay time and a very short feedback to make the effect of Chorus. ***Reverbsc*** is my favourite opcode among all, its based on the Valhalla reverbs created by [Sean Costello](https://valhalladsp.wordpress.com/about/), and the user is manipulating the size of the reverb by the slider.

The output from all these opcodes gets added and is then passed to the Filter effect which uses [moogladder](http://www.csounds.com/manual/html/moogladder.html). ***Moogladder*** opcode is based on the architecture of the famous Moog synthesizers. The ouput from the filter is then sent as the final output from the plugin.

#### Demo:

<iframe width="1287" height="496" src="https://www.youtube.com/watch?v=5vDHtQfnJFo&feature=youtu.be&ab_channel=AbhishekChoubey" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Final thoughts & Future Developments:

It's a fun plugin and can have multiple use cases. Since this is just the first version of the plugin there is a lot of room for improvement. Nevertheless I believe it has big potential. I am not fully satisfied with Distortion & Chorus, but its okay for now considering the short duration of the course. I will definitely work on them along with perfecting the gain staging and smooth signal flow.

For future developments I believe it could be great to integrate this with a synth or maybe even develop it as a pedal which has more controls, enabling me to create multiple ready to use presets, that butters the audio with very less tweaking. You can download the latest version of Butter down below and drop me a [E-mail](mailto:neerrmusicin@gmail.com) if you have any feedback. Enjoy!

#### Download it here:
[Butter](https://drive.google.com/file/d/1XE0Hf3bJqaNdmcjrpkt9ruTjmwIJMJ3t/view?usp=sharing)

Note: To run the plugin keep all files in folder in your plugin directory i.e. the plugin file & .csd file should be in the same folder, it’s essential for smooth running otherwise it will crash.
