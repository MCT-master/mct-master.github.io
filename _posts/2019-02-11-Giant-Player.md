---
layout: post
title: "The Giant Step Player"
date: 2019-02-11 20:00:00 +0100
categories: Audio-Programming
author: Guy Sion
image: /assets/img/giantplayer.PNG
excerpt: "As part of the MCT master program we are being introduced to a variety of technologies for creating music and sounds. We have just finished a week long workshop learning about Audio programing and web audio API. The benefits of this technology are helpful and relevant in areas like art, entertainment or education. We were introduced to several ways for creating and manipulating sound, follow tutorials and experiment on our own during the days. I must admit that I do not have intensive knowledge in programing in general and javaScript in particular. Many failures accrued while trying, from simple syntax errors to flawed design. But understanding the idea behind each process and striving towards the wanted result was an important progress."
Keywords: Web Audio API, JavaScript, Tone.js, Oscillator, Giant Steps, Jazz, Melody, Timing

---

# The Giant Player

## Background
As part of the MCT master program we are being introduced to a variety of technologies for creating music and sounds. We have just finished a week long workshop learning about Audio programing and web audio API. The benefits of this technology are helpful and relevant in areas like art, entertainment or education. We were introduced to several ways for creating and manipulating sound, follow tutorials and experiment on our own during the days. I must admit that I do not have intensive knowledge in programing in general and javaScript in particular. Many failures accrued while trying, from simple syntax errors to flawed design. But understanding the idea behind each process and striving towards the wanted result was an important progress.

For some unknown reason, I managed to get stuck on a tutorial from our second day. The tutorial was dealing with timing of an oscillator events. I wrote the melody notes of John Coltrane's tune 'Giant Steps' with this [frequency to midi note converter.](http://pages.mtu.edu/~suits/notefreqs.html "frequency to midi note converter")


Later on, I have tried to develop this into a player that will play the same melody with an option to choose the waveform (Sine, Sawtooth, Triangle and Square). I wanted to add a pre-recorded percussion soundwave that would sync with the melody of each oscillator. And of course, the last but not least, a functioning stop button that would let me stop this mad experiment.

<p align="center">
   <iframe width="560" height="315" src="https://www.youtube.com/watch?v=h6NCx0wcrC4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>

## Code Rundown

This is a short description of the code. A much more detailed description can be viewed within the code itself which is available at [my Github repo.](https://github.com/guysion/Giant-Steps-Player "my Github repo")
I added the Tone.js to my source code and created the buttons in the body of the page. Later, I have added a CSS file to set the style of my document. I Added the variables for context, Audio buffering for the audio file, 4 oscillators and 4 players. In the stop button function I've used an *if* statement to ensure the stop of all oscillators playing at any time. Setting the initialization of the audio context to include the buffer initialization, decoding the audio data and initializing the player was not an easy task but thanks to friends, teachers and students I managed to do so. Next came the actual melody set awkwardly with parameters for frequency value (instead of note names) and time value in seconds (instead of using a transport time). This meant that the player plays the melody in 120 bpm. Four Oscillator buttons where then created with the functionality of initializing the player and oscillator together.

## What I've Learned
Besides the fact that almost everything was new to me, the most important points that will continue with me are:
1. It is extremely important to plan your design before jumping into implementation mode. Sketching it out on a piece of paper is a helpful way.
2. Learn how to find your mistakes in the code, use the console.
3. Don't be afraid to (miserably) fail, it's part of the process.
4. Keep your friend close but your programmer friends even closer.

## Resources 
During the week I was introduced to many great sites, tutorials and videos which really helped me understand the potential of Web Audio and the implementation of objects within my code. Using the web-browser's view source option is another helpful tool for figuring out the coding behind many of the available examples online.

For Web Audio API I recommend checking out - 
(https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
and (https://www.toptal.com/web/web-audio-api-tutorial)

For JavaScript this website was very useful - (https://www.w3schools.com/js/)

For the Ton.js API, examples and demos - (https://tonejs.github.io/)

## Work in Progress
Now that my giant player is working properly I can continue experimenting with applying filters, a fancier UI with NexusUI.js, learning how to use notes instead of frequencies, change the way I handle the timing and scheduling of the melody and add a change tempo slider. The Giant Step player in itself is a non-interesting piece of code in my opinion, and I would have loved to invest more time in creating a more interactive system with a much more interesting result. I am happy that I got introduced to the Tone.js library because I could utilize this library together with several Max/MSP patches I am currently working on.
