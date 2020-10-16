---
layout: post
title: "The Dolphin Drum"
date: 2020-10-16 12:01:00 +0200
categories: interactive-music-systems
author: Simon Sandvik
image: /assets/image/2020-10-16-simonrs-vase.png
excerpt: "My granular synthesis percussive instrument from the Interactive Music Systems course."
keywords: gesture, interactive, bela, pure-data
---

<figure>
<iframe width="450" height="253" src="https://youtu.be/Gr4fOyIvK0w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen align="middle"></iframe>
<figcaption><strong>A short demonstration of the instrument</strong></figcaption>
</figure>

#This is the dolphin drum.

For my project I have turned a vase into a percussive tactile instrument based on granular synthesis.
It is a hollow vase with different textures making it ideal for a range of use as a sound generator.
I placed a speaker inside the vase, so all the output acoustically feeds back into the system picking up qualities from the vase. A piezo is mounted inside the vase which is used as the sound input for the system. 
Accompanying the vase as a part of the instrument is the bela breadboard which has a 9DF sensor and a force resistor. By turning the breadboard on three axis I can simultaneously play the drum and interact with multiple parameters. From the 9DF sensor I obtain the fusion pose, which I mapped windowsize, pitch, and delay. The force sensor is mapped to control feedback. With a large amount of delay and feedback in the system, the user continuously reacts to the system output to explore a sonic landscape. 

<figure>
<img src="/assets/image/2020_10_16_simonrs_circuit.png" alt="The Circuit" width="50%" align="middle"/>
<figcaption>Fig 1: Circuit and sensors used</figcaption>
</figure>

I identify this instrument as percussive, but not rhythmical.
It is pitch based, but is not tonal.
To me it’s a great dynamic toolbox for creating interesting sounds.
Instrument has a large dynamic range. Heavily reliant on the initial acoustic sound input. Strike vs slide, material as a drum stick. Material on the drum itself and the shape allows various acoustical properties from the instruments shape. The rotation of your hand is quite Low effort, but the results are high expression. It heavily relies on buildups, risers, noise, and percussive sounds. Controlling the parameters becomes a balancing act of shaping the sound, and has some inherent intuitiveness to it.
While the instrument has a range of dynamics, these dynamics are easy to control and as such its not an instrument bound by skills or practice necessarily. It is more of an exploratory journey that anyone playing the instrument could attain.

<figure>
<img src="/assets/image/2020_10_16_simonrs_patch.png" alt="The Patch" width="80%" align="middle"/>
<figcaption>Fig 1: Circuit and sensors used</figcaption>
</figure>

“a perspective of interactive music systems that focuses on the shared creative aspect of the process in which the computer influences the performer as much as the performer influences the computer …An interactive system has the potential for variation and unpredictability in its response, and depending on the context may well be considered more in terms of a composition or structured improvisation rather than an instrument.” (Drummond 2009)
I think this resonates quite well with the instrument. There is a large element of continuous feedback, between performer and system due to the amount of delay as well as actual system feedback. I found myself continuously adjusting to the system response to aim for a coherent soundscape. The name of dolphin drum somewhat emphasizes this. While the dolphin uses echolocation, this system equally provides feedback in how to navigate, also it sounds a bit similar at times. 

