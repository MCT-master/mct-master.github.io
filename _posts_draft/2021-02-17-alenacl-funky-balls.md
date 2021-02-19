---
layout: post
title: "Funky Balls"
date: 2021-02-17 20:00:00 +0200
categories: audio programming
author: Alena Clim, Leigh Daniel Murray
image: /assets/image/...
keywords: csound, reverb, bit crusher, delay, moog diode, string resonator, harmoniser
excerpt: "ccc"
---

# Funky Balls
________________add an image in the beginning?___________

#### Assignment description / Requirements (can be deleted)

- Group project
- Develop an application of audio programming: Csound for the audio processing combined with another interface for the rest (e.g., PythonAPI, Web, OSC, VST). 

## The idea

therapeutical de-stressing audio tool
theoretical background

## Inspiration

YUME - HELIOS
Chrome Music Lab
Gøy
Finding Love
Bouncy Notes


## Implementation

### One effect and one track

We started by using sliders to implement a simple version. Maybe add something about the sliders code we took from Oyvind.

________________add an image or small video with the first version___________

### Many effects and tracks

Next step was to implement more tracks and keep the same possible effects for each. 6 effects per track with their own variable parameters. We used loops because of the size of wav files.

________________add an image or small video with the last version of sliders?___________

Effects:
-  **Moog Diode Ladder Filter**: a digital emulation of this filter. Slider changes the cutoff frequency [(moogvcf)](http://www.csounds.com/manual/html/moogvcf.html).
- **Reverb**: it reverberates an input audio signal with a “natural room” frequency response. Slider changes the reverb time [(reverb)](http://www.csounds.com/manual/html/reverb.html).
- **String Resonator** (our waveguide!): a string resonator with variable fundamental frequency. Slider changes the fundamental frequency values [(streson)](http://www.csounds.com/manual/html/streson.html).
- **Delay**: it delays an input signal by some time interval, with feedback. It's a combination between delayr and delayw. Slider changes the feedback ratio [(delay)](http://www.csounds.com/manual/html/delay.html).
- **Bit-crusher**: Slider controls the bit depth (custom opcode).
- **Harmoniser**: it analyzes an audio input and generates harmonizing "voices" (or frequencies) in synchrony. The slider controls the ‘lowest expected frequency’ of the input [(harmon)](http://www.csounds.com/manual/html/harmon.html).

### Simple interface

The implementation of the Meta Balls from the paper.js
Minimalist user interface: Learn by exploring & Rely on audio feedback


________________add an image or small video with the last version of sliders?___________

### Dynamic interface

Adding dynamic effects and changing colors and adding the instructions. Also adding the possibility of another song. 
Modifying effects without user interaction
Visual feedback of dynamic changes

________________add a small demo video with the last version___________

## Where to go and play?

There are two "interfaces" you can choose from: the sliders (mostly useful for debugging, it's not very pretty) and the funky balls (not the best for debugging but very pretty). You can also choose between two songs (Leigh chose the first and Alena the other one). You can download the entire repository from github or you can go to these links:

**Github**: it has to have a link to your repository right?
**Sliders, sliders, sliders**: do you have a link for this, or only if you download it?
**Funky balls - song 0**: balls.leighmurray.com
**Funky balls - song 1**: what's the difference with the link?

## Future improvements







- remove at the end !!!!!!!!!!!!!! -
    The final project will be graded based on these aspects:
        To what degree you have explored new audio programming techniques (new to you!)
        A well defined purpose for the audio application (what does it do and why is that a good thing?)
        How well it fulfills the stated purpose
        Interfacing and accessibility for the intended user
        Quality of code:
            clarity in structure, sensible variable names
            appropriate documentation for
                yourself to be able to pick it up later
                others to re-use and build upon
        Clarity of presentation
            in class and in blog post
        Description of your own role in the group effort.
