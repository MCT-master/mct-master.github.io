---
layout: post
title: "A fake "Steinway" made by Csound"
date: 2020-11-6 20:00:00 +0100
categories: digital-audio
author: Wenbo Yi
image: /assets/image/2020_11_06_wenbo_piano.jpg
keywords: digital-audio, Csound, Piano, Cabbage, Sound Synthesis
excerpt: "How to use Csound to create a digital Steinway?"
---

## Overview

![Acoustic Piano](/assets/image/2020_11_06_wenbo_vst.png)
This VST plugins is a sound synthesizer for simulating real acoustic piano in [CSound](https://csound.com) environment. I was inspired to make this synthesizer by the MCT entrepreneurship course where Group C was trying to develop a remote music therapy App, and the technical core of this app was playing with music using a built-in lightweight sound synthesizer. Therefore, I tried to use Csound to simulate a real instrument in a way that would use the least amount of resources.

## Demo


## Method

After referring the works of others, reading some papers and [CSound](https://csound.com) documentation, I decided to use some real piano sound files as samples to reconstruct the sound. This was done for two main reasons: First, [CSound](https://csound.com) has excellent tools for analyzing and reconstructing FFTs to construct very realistic sounds. Second, instead of requiring 88 samples, this method requires less than 10 samples to build, which is enough lightweight to implement in an App.

In more detail, I used [Pvanal](https://csound.com/docs/manual/pvanal.html) to analyze the sample files from C4 to B4 in the piano to get the .pvx file, and then used the [Pvoc](https://csound.com/docs/manual/pvoc.html) opcode to restore the tone. The specific method is that through the IF Statement, all the C note except C4 are reshaped through FFT files according to C4, all the D note are reshaped according to D4, and so on, thus reshaping the entire piano sound range. However, the FFT reconstruction is rather stilted and not realistic enough in the release part of the piano sound, probably due to the fact that real pianos have echo sound from piano cavity reflections, and in order to mimic the residual sound of the piano cavity, I used the delay to add a brief echo effect to make the Release part of the piano sound more realistic.

In addition to the sound timbre, the sound image of a real piano need to be imitated as well, otherwise the piano will change from a surface sound source to a point source. After some guidance from teacher, I chose to use [notnum](http://www.csounds.com/manual/html/notnum.html) to get the midi note number input from the midi keyboard, and through a simple calculation, I controlled the pan range from 0.1 to 0.9, arranged linearly from left to right in order to make it more realistic.
![pan(/assets/image/2020_11_06_wenbo_pan.png)


Last but not least, In order to give the VST plugins more plasticity and independence, I used [Cabbage](https://cabbageaudio.com/) to add interactive and adjustable reverb and delay plug-ins, using opcodes of [reverbsc](http://www.csounds.com/manual/html/reverbsc.html) and [deltapi](http://www.csounds.com/manual/html/deltapi.html) controlled by slides in Cabbage, which can shape the sense of spatial for the synthesizer piano, more closely resembling a real piano in its natural state.


## Reflections

All in all, the sound of fake "Steinway" is not as smooth as I expected at the beginning. Obviously the sound is more realistic around the sampling points (C4-B4), but the further away from the sampled source the higher the distortion of the sound is, especially in the high and low regions of the piano. It still far away from a real Steinway.

After discussing this with instructor, I learned that using Sprintf[http://www.csounds.com/manual/html/sprintf.html] to match the sample file to the keyboard without limiting the file size is definitely a more mature solution. If it sill need to use partial samples, [pvscale](http://www.csounds.com/manual/html/pvscale.html) also seems to be a better solution than [Pvoc](https://csound.com/docs/manual/pvoc.html), because it fixes the harmonic ratio and makes the sound more realistic. Also, I have read in some papers that synthesis piano can also be modeled using algorithms to simulate piano hammers hitting string vibrations to make the piano sound more realistic, and I think this is a great direction I could improve on in the future.

[Free Steinway vst and code are free available here!](https://drive.google.com/drive/folders/1GHuoTrMjvIfGxWFDK2y7LaD6cJForeec?usp=sharing)
