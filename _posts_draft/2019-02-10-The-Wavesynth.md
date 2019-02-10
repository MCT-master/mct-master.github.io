---
layout: post
title: "The Wavesynth"
date: 2019-02-10 23:59:42 +0200
categories: Audio-Programming
author: Jørgen Varpe
image: /assets/img/varpe/wavesynth.jpg
excerpt: "A short summary, typically copy-pasting the first paragraph of the blog post."
---

# The Wavesynth

During the first workshop week in the course Audio Programming, I have been working on a project which I have called "The Wavesynth". I have called it this because I have chosen to use wavetables to shape the output of an oscillator. I have not made a wavetable synthesizer like for instance Ableton's Wavetable (https://www.ableton.com/en/packs/wavetable/), where you can interpolate between waves. instead I use some wavetables created by Google Labs (https://github.com/GoogleChromeLabs/web-audio-samples/tree/gh-pages/samples/audio/wave-tables) to make it sound like "real" instruments. The synth is played by using the computer keyboard, and the user can chose the output sound, and adjust three different effects to shape the sound.

__Keywords:__ Web Audio API, JavaScript, HTML5 Canvas, Wavetable, Synthesizer, DSP, NexusUI

## Early process

Luckily for me I have past experience working with javaScript and the Web Audio API. This meant that I could use my previous knowledge to help others that were new to the field of programming and digital signal processing. Helping others also helped myself refresh my knowledge, which have been laying in the back of my head for some time. It's crazy how quickly one can forget!

During class we went through the basics of HTML, javaScript and the Web Audio API, some of the web technologies required to create a website and to be able to control audio on the web. I fairly quickly decided that my project should be a keyboard-controlled "sound generator". With that in mind, I created a piano keyboard layout, where I made computer keyboard presses correspond to each note.

### The keyboard

<figure>
<img src="/assets/img/varpe/keyboard.jpg" alt="synth piano keys" width="50%" align="middle"/>
<figcaption>Synth piano keys</figcaption>
</figure>

<figure>
<img src="/assets/img/varpe/tast.PNG" alt="computer keyboard" width="50%" align="middle"/>
<figcaption>Computer keyboard</figcaption>
</figure>

Above you can see images of how the computer keyboard is mapped to the piano keys.

The piano keys are created using HTML5 Canvas, a way of creating graphics on the web using javaScript. Two canvas elements area created in the index.html file, one for drawing the white keys on, and the other for drawing the black keys on. The actual drawings are programmed in javaScript, and the canvases are redrawn for every time a key is pressed, with the corresponding key turning blue.

