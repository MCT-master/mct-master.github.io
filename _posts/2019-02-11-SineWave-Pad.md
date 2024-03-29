---
layout: post
title: "SineWave Pad"
date: 2019-02-11 16:16:42 +0200
categories: sound-programming
author: Ashane Silva
image: /assets/image/2019_02_11_aleksati_Synthwave_pad.jpg
excerpt: "It was a wonderful journey we had for a week getting hands-on experience with Web audio API and JavaScript. In the beginning, I was tensed about the way that I will handle coding with zero prior experience. But, at the end of the week, I was happy about what I have managed to achieve. I was lacking ideas to start a project for the week but after getting introduced to oscillators, I thought of making a synthesizer or a drum pad that works on the browser. So it was either to work with Oscillators or sound loops."
---

# SineWave Pad

## How it started
It was a wonderful journey we had for a week getting hands-on experience with Web audio API and JavaScript. In the beginning, I was tensed about how I will be able to handle coding with zero prior experience. But, at the end of the week, I was happy about what I have managed to achieve. I was lacking ideas to start a project for the week but after getting introduced to oscillators, I thought of making a synthesizer or a drum pad that works on the browser. So it was either to work with Oscillators or sound loops.

<img src="/assets/image/2019_02_11_aleksati_sinewavepad.PNG" width = "40%" height = "20%" align="center" />


## Work Progress

On the first day, my first step was to set up an oscillator that works with a click of the mouse. This was a great way to understand how JavaScript works with HTML elements. Then I extended it to six oscillators and additionally, Volume up and Volume Down buttons to control the global gain of the Oscillators. I prefered to have "Sine" as my Oscillator Wave Type.

On the second day, I was trying to implement exponential and linear ramps to the oscillators to create smooth volume increment. However, it wasn’t working as I supposed and maybe I’ll come back to this In the future.

On day three and four, my workflow was to map the keyboard to start and stop the oscillators. And also to implement CSS into my code and make the synth look good and interactive. I was struggling for so many hours to map the keyboard to the buttons that I had in my interface. Then I got help from Eirik and I managed to grab some ideas from his code. I used a CSS and HTML code from code pen and tried to adapt it to my synthesizer to make it look more exciting.  I changed the color attributes to my preferences and tried to map the pads to the oscillators that I have built.  Additionally, I managed to use reverb impulse responses and include it in my signal chain to add reverb to the synth. I used the reverb.js library for that purpose.

I was so much happy at the end of the week about my progress where I managed to build my own synthpad without having any prior knowledge at the beginning. I managed to understand the concept of using audio context and its methods to generate and change characteristics of sounds. Also managed to grasp the ideas about creating effects like delay and Ping-Pong delay with the code.

Watch the video [SineWave Pad](https://streamable.com/a0bw5)

## Challenges

It was challenging to work with the timeline I had. I had to decide which elements I should be included and which not. I was struggling most of the time to make the interaction between the sound and the interface.  It was challenging to learn the concepts and adapt them to my own creation with limited time.I faced the most difficulties with mapping the HTML and CSS elements to work with javascript. I spend so many hours working to changes the colors of the pads with a keypress. Still, that is something I have to work on.  I was working on applying delay attribute to my oscillators but I wanted it to be controlled by a slider. The delay seemed working but the trouble was to map it to a controller. personally, i felt that I need more knowledge on working with CSS and HTML for mapping parameters and to place my elements on the page where ever I want.

## Future Plans

Currently, I have plans to explore more musical possibilities with the oscillator sounds and also to implement envelops to make them sound smooth. and also to add a player with drum loops to make the application more fun to play. Additionally, I hope to experiment with different JavaScript libraries and add controllers to handle reverb and other parameters.

[Click to find the Code](https://github.com/AshaneS/SineWave-Pad)
