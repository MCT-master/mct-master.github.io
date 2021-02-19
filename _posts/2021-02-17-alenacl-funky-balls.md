---
layout: post
title: "Funky Balls"
date: 2021-02-17 20:00:00 +0200
categories: audio-programming
author: Alena Clim, Leigh Murray
image: /assets/image/2021_02_19_leigh_funkyballs.gif
keywords: csound, reverb, bit crusher, delay, moog diode, string resonator, harmoniser
excerpt: "Want a more organic and dynamic way of mixing and applying effects? Experiment with funky balls!"
---

![Funkyballs](/assets/image/2021_02_19_leigh_funkyballs.gif)

## The idea

We started by considering the effects of music on the human brain and all the amazing music therapy techniques discovered so far. Then we looked for some examples of studies about music therapy and stress to understand more about how they are correlated (and if?). We found the [MISTRESS project](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwikwv23qPbuAhXwpIsKHfL7DlkQFjABegQIAhAD&url=https%3A%2F%2Fdanishsound.org%2Fwp-content%2Fuploads%2F2018%2F10%2FMISTRESS_Phase1_Report.pdf&usg=AOvVaw1s214Cl7_42xLTUh1_PFX5) by Rudi Agius, part of the [Danish Sound Cluster](https://danishsound.org/) where they analysed the effects of music intervention on stress reduction - and the results are that of course it helps! We also found a [paper](https://ieeexplore.ieee.org/document/7557197/authors#authors) about a study where they used music as a non-invasive technique of identifying stress in people (they used EEg and noticed that the brainwaves were substantially different before and after listening to music).

Now, of course these studies are not enough for undebatable evidence, but we took it at face value that music is good for de-stressing and we extrapolated until we came up with the idea of creating a **de-stressing audio tool**. It would allow people both with and without a musical background to play around with some instruments / tracks and several effects, and in general _make_ music in an unconventional way. It would facilitate communication through sound, without semantic content, among people who would mix / play together.

To concretise, we decided to create a web interface for any type of user for the purpose of de-stressing through making / mixing / playing around with music. It would include blobs/shapes of different colors: some would represent effects (e.g., reverb, harmonise, delay) and other would represent instruments or tracks (e.g., drums, cellos, synth, piano) and the users would then be able to move these blobs around and they would interact with each other and voila! mix / make new music. See the next sections for more details about the further inspiration and implementation.


## Inspiration

These platforms inspired us:

[YUME - HELIOS](http://unseen-music.com/yume/)

[Chrome Music Lab](https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw)

[Gøy](http://goy-goy.herokuapp.com/)

[Finding Love](https://findinglove.activetheory.net/)

[Bouncy Notes](https://www.youtube.com/watch?v=lflaa09CVqg)

## Implementation

### One effect and one track

We started by using sliders to implement a simple version. The example directory of [csound for web](https://csound.com/download.html) contains an example containing effects applied to a synth and an example that lets you upload a midi file to play.

![Sliders Example](/assets/image/2021_02_19_leigh_slider_example.png)

We combined these to allow the user to upload an audio file, and apply the effects to that audio instead.

![Basic Audio Player](/assets/image/2021_02_19_leigh_basic_audio_player.png)

### Many effects and tracks

Next step was to implement more tracks and keep the same possible effects for each. 6 effects per track with their own variable parameters. We used loops because of the size of wav files.

![Basic Audio Player](/assets/image/2021_02_19_leigh_sliders_complete.png)

Effects:
- **Moog Diode Ladder Filter**: a digital emulation of this filter. Slider changes the cutoff frequency [(moogvcf)](http://www.csounds.com/manual/html/moogvcf.html).
- **Reverb**: it reverberates an input audio signal with a “natural room” frequency response. Slider changes the reverb time [(reverb)](http://www.csounds.com/manual/html/reverb.html).
- **String Resonator** (our waveguide!): a string resonator with variable fundamental frequency. Slider changes the fundamental frequency values [(streson)](http://www.csounds.com/manual/html/streson.html).
- **Delay**: it delays an input signal by some time interval, with feedback. It's a combination between delayr and delayw. Slider changes the feedback ratio [(delay)](http://www.csounds.com/manual/html/delay.html).
- **Bit-crusher**: Slider controls the bit depth [(custom opcode)](http://www.csounds.com/manual/html/upsamp.html) found in the example code.
- **Harmoniser**: it analyzes an audio input and generates harmonizing "voices" (or frequencies) in synchrony. The slider controls the ‘lowest expected frequency’ of the input [(harmon)](http://www.csounds.com/manual/html/harmon.html).

### Simple interface

With all the tracks and effects shown in the image above, it is easy to become overwhelmed. So we wanted to create a simple user interface that hides this complexity and lets the user focus on exploring the different sounds and effects.  We found the [Paper JS](http://paperjs.org/examples/meta-balls/) metaballs example and it seemed to suit our use-case perfectly.

![Metaballs](/assets/image/2021_02_19_leigh_metaballs.gif)

We wanted a minimalist user interface that doesn't immediately let the user know what circle represents which instrument or effect. This is to encouring exploring and relying on the audio feedback to influence the user's choices.

### Dynamic interface

After implementing the PaperJS metaballs example into the project, the user experience and visual feedback was quite intuitive but the interface was still quite bland and static.  We decided to have all the effects as the same colour so that there's no way to distinguish them, you have to interact with them to know what kind of sound they make.  The instruments all have their own colour.

To combat the static look and sound when the user is not interacting, we implemented the ability to have the balls move slowly back and forth virtically or horizontally, or combined to move in a circle.  This brought much more life to app and creates a much more pleasing visual and audio experience, allowing the user to create a dynamic "artwork" with audio feedback.

Finally we wanted to allow different multi-tracks for different user experiences, so we chose a second song the user can experiment with, and made it very easy to implement more through the use of a url parameter.

![Funkyballs](/assets/image/2021_02_19_leigh_funkyballs.gif)

### Getting started

When you select a ball, you have control of it until you click again to de-select. To initially enable an instrument you must select it and increase its volume by scrolling up. The size of the instrument represents the amplitude of the instrument.

There are several controls you can use when a ball is selected:

- **space** = hide the instructions
- **scroll** = instrument amplitude
- **v** = toggle moving vertically
- **h** = toggle moving horizontally
- **d** = change horizontal direction
- **up** = increase vertical distance
- **down** = decrease vertical distance
- **right** = increase horizontal distance
- **left** = decrease horizontal distance
- **f** = move faster
- **s** = move slower

## Where to go and play?

There are two "interfaces" you can choose from: the sliders (mostly useful for debugging, it's not very pretty) and the funky balls (not the best for debugging but very pretty). You can also choose between two songs. You can download the entire repository from github or you can go to these links:

**Github**: [https://github.com/leighmurray/csound-gui-mixer/](https://github.com/leighmurray/csound-gui-mixer/tree/master)

**Sliders, sliders, sliders**: [balls.leighmurray.com/controls](https://balls.leighmurray.com/controls)

**Funky balls - first song**: [Leigh's](https://balls.leighmurray.com/)

**Funky balls - second song**: [Alena's](https://balls.leighmurray.com/?song=1):not the [epic movie soundtrack](https://cambridge-mt.com/ms/mtk/#NahumStrickland), but a funky drum&bass loop extracted from [Human Mistakes by Skelpolu](https://cambridge-mt.com/ms/mtk/#Skelpolu)

## Future improvements

_Let's play together!_ Although in the beginning we wanted to create a multi-user platform, behind the scene it would have been somewhat similar to Leigh's [Kovid Keyboard](https://mct-master.github.io/digital-audio/2020/11/03/kovid-keyboard.html). That's why we decided to work on other features, such as the dynamic effects instead of taking the time to integrate the already existing code. For the future, however, this connectivity feature is important to implement.

_Wanna see something cool?_ Another feature that helps with the connectivity side is to be able to save the project and send it to someone - and enable them to pick it where you left off. Sharing work and being able to save it for later is important!

_Can I play with my own music?_ Enabling a feature where users can upload their own tracks to play with. This complicates things of course, because we would have to maybe consider a flexible number of instruments/tracks.

_What if I remember the positions?_ To avoid people using the same effects on the same instruments, it would be good to randomise ball positions and colours.

_What about loops?_ As per Henrik's idea, it would be great to let the user record their own audio to create their own loops.  There is a csound for web example that takes input from the user's microphone so it would be fun to implement this feature.

_How else can I controll the effects?_ It would be interesting to enable camera control. By that we mean that head/hand movements would control the position of the instruments or tracks.






