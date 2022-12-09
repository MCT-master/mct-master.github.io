---
layout: post
title: Shimmerion - A String Synthesizer played with Light
date: 2022-12-08
categories: interactive-music
author: Iosif Aragiannis
image: /assets/image/2022_12_08_shimmerionthumbnail.png
keywords: Interactive Music System, Theremin, Mellotron, light, flashlight, smartphone
excerpt: "Use your phone's flashlight to make music!"
---
![Photo of Shimmerion](/assets/image/2022_12_08_shimmerion1.png "Shimmerion in its finished form")

# Inspiration
Shimmerion was conceived as a combination of two instruments: the Mellotron, an analog tape-replay keyboard used to imitate string ensembles, and the very popular Theremin. I wanted to make a string synthesizer that is controlled primarily without physical contact by the performer. The additional key feature I aimed for was a tremolo effect (AM synthesis), that would make the sound exotic, leaving space for a more experimental performance/experience

<figure style="float: none">
   <img src="/assets/image/2022_12_08_mellotron&theremin.jpg" alt="Alternate Text" title="Image Title" width="auto" />
   <figcaption>Mellotron & Theremin</figcaption>
</figure>

# Design
Shimmerion’s pitch is controlled by the incoming light from the performer’s smartphone. There are two versions of the main signal, one with and one without an amplitude modulator (dry/ wet). The pitch of the modulator and the amplitude of the “wet” signal are controlled by the distance between the user’s hand and an IR sensor. The “dry” signal’s amplitude is controlled via a knob.

# Sensors & Controller
I’m using 3 different sensors to drive the system:
- LDR: controlling the frequency of the “dry” signal/carrier, starting from lower and getting to higher frequencies (100–5000 Hz) as incoming light increases.
-	Rotary Potentiometer: controlling the amplitude of the “dry” signal
-	IR: controlling the frequency of the modulator and the amplitude of the modulated signal, starting from lower and getting to higher frequencies (0.35–10 Hz) & amplitudes as the performer brings their hand closer to the sensor. Both values stay at 0 until the performer’s hand gets into the proximity of the sensor. Then the IR starts outputting to an LED that lights up more as the hand gets closer.

The last integral part required for the interaction is a smartphone with a flashlight, used as the instrument’s controller. Anyone that wants to perform with Shimmerion can use their own smartphone’s flashlight to feed light into the LDR.

![Photo of an interaction with Shimmerion](/assets/image/2022_12_08_shimmerioninteraction.png "Interaction with Shimmerion")

# Fabrication
For the case that all the components would be placed I decided to use a small paper mailbox, since it can be very easily painted and drilled. I painted the box black and ran the cables through little holes that I drilled with a pair of scissors, placing the sensors in its outer surfaces. At the core of the system is a Bela board, built on a BeagleBone Black computer. I built my own circuit on a solder board attached on top of the Bela to retrieve analog data from my sensors.

![Photo of the interior view of Shimmerion](/assets/image/2022_12_08_shimmerion2.png "Interior view of Shimmerion")

# Sound Synthesis
The sound synthesis of the instrument was done in Pure Data. Specifically, I used “Synth Strings” from the series of “Rich Synthesis Tutorials” by “Really Useful Plugins”. I tweaked the patch to fit my needs and work with my selection of analog sensors instead of a MIDI keyboard that was the original controller. For the mapping I used Stefano Fasciani’s scalesiglin~ external object.

![Photo of Shimmerion's patch](/assets/image/2022_12_08_shimmerionpatch.png "Shimmerion's patch")

# Interaction Tips
Ideally, Shimmerion should be played in a dark or at least dimly lit room, with the only light source for the LDR being the performer’s phone. Thus, the user will have complete control of the instrument’s full chromatic range. Additionally, it is suggested that the performer downloads an application to their phone (e.g., simple flashlight), that allows for more efficient control of the light, while also providing additional features such as SOS that can be utilized creatively. Lastly, a white glove on the hand used on the IR can provide better range, since the sensor reflects more efficiently on white surfaces.

<figure style="float: none">
  <video width="auto" controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/video/2022_12_09_iosifaragiannis_shimmerion_performance.mp4?vrtx=video-embed" type='video/mp4'>
  </video>
  <figcaption><i>Shimmerion Performance.</i></figcaption>
</figure>
