---
layout: post
title: "Ondes Martenot's brother - Orange Cabbage"
date: 2020-11-05 12:39:36 +0200
categories: digital-audio
author: Joni Mok
image: /assets/image/2020_11_05_joni_occover.jpg
keywords: Cabbage, Csound, Digital Audio
excerpt: "The evolution of Ondes Martenot."
---

## Introduction:

The Ondes Martenot was an electronic instrument invented by Maurice Martenot in the 1920s. It was used by many 20th century composers such as Oliver Messiaen and Edgar Varèse. In popular culture, the English rock band Radiohead, J.P. Jeunet’s Amelie and many other Sci-Fi movies are still using it. Inspired by this invention, I have made a simple synthesiser with 3 variables: tone,vibrato and waveform. It is a SynthVST plugin and I made in both Cabbage and Csound. The eventual name of this project becomes - Orange Cabbage.

## Analogue-Digital:

The analogue interface of an Ondes Martenot was originally a metal ring. Players slid up and down on the metal wire with their right index finger to create ‘theremin-like’ sweeps in tones (through oscillations in vacuum tubes). The later generations added moveable keys that allow players to create vibrato when the metal wire was wiggled. Martenot later invented a new wooden frame that featured a drawer containing a haptic-sensitive glass ‘lozenge’ to control the sound.

Its amplification system is interesting. In the later development, it had 3 additional loudspeakers, one of which had the speaker cone replaced by a gong. Another had a resonance chamber laced with 12 tuned strings. These modified speakers would add a metallic timbre from the gong along with resonant, clinking tones from the strings. A question is how can I mimic this with Csound?

#### There are three controls in the interface.

1. *Tone*:
The first knob ‘Tone’ allows players to add harmonic partials to the fundamental block, and in sequential order. I discover an interesting opcode called *buzz* that does the work.


2. *Vibrato*:
The second knob ‘Vibrato’ controls the “send” level to the chorus effect. It is the most doable, yet similar effect I found to mimic the haptic-sensitive glass feature on ondes martenot.

3.  *Waveform*:
The last, but not the least important knob, ‘Waveform’ lets players select what type of waveform they like to use as a base. Earlier I mentioned the wooden drawer in the revised Ondes, but I haven’t mentioned what is inside it. It is a drawer with a group of switches controlling the timbre. These select sine, triangle, square and pulse waves, or pink noise. In this project, I prototyped sine waves, pulse waves and square waves.

<figure>
<img src="/assets/image/2020_11_05_joni_ocbrand.jpg" alt="The Patch" width="%" align="middle"/>
<figcaption>Fig 1: Brand and UI Guideline</figcaption>
</figure>

<figure>
<img src="/assets/image/2020_11_05_joni_ocstructure.jpg" alt="The Patch" width="%" align="middle"/>
<figcaption>Fig 2: Code structures</figcaption>
</figure>

#### Video demo:


The following video is a demo to show how the synthesiser works.

<figure style="float: none">
    <iframe width="800" height="480" src="https://www.youtube.com/embed/zss6kU7rlJc" frameborder="0" allowfullscreen></iframe>
    <figcaption>Video Demo</figcaption>
</figure>


Now, we can imagine that the pulse waves and square waves become rather dissonant as the ‘tone’ knob turns up. It becomes even more obvious in the upper octaves. Buzz seems to be built to handle sine waves. So it starts getting ‘mad’ when you ask it to add another pulse or square wave at the frequency. It does make some bass sounds, though, especially when you turn the ‘vibrato’ knob all the way up.


## Lesson I have learned:

In this course, I have learned the basics about building a SynthVST plugin in Cabbage and Csound. The synthesiser is intended to mimic the sound of ondes martenot. However, without having the proper understanding and skills it was difficult to turn this idea into reality. It ended up to be a simple, cute orange monster. In the process of finding solutions, I have gained new understanding about waveforms, about frequency and amplitude in a more scientific way. In the meanwhile, I learned some interesting facts in terms of the infrastructures, architecture and components. This process of making has given me a lot of valuable science lessons that I was once concerned about.

In the future, I would like to explore ways to combine Csound in software engineering tools.


### Reference

[https://forum.cabbageaudio.com/t/understandig-how-cabbage-csound-works/219](https://forum.cabbageaudio.com/t/understandig-how-cabbage-csound-works/219)

[https://www.wikiaudio.org/adsr-envelope/#:~:text=An%20ADSR%20envelope%20is%20a,often%20its%20loudness%20over%20time](https://www.wikiaudio.org/adsr-envelope/#:~:text=An%20ADSR%20envelope%20is%20a,often%20its%20loudness%20over%20time)

[http://www.csounds.com/chapter1/](http://www.csounds.com/chapter1/)

[https://gist.github.com/juniorxsound/33f75fc4dadde18942e561670c80f3f0](https://gist.github.com/juniorxsound/33f75fc4dadde18942e561670c80f3f0)

[https://www.musicworks.ca/featured-article/featured-article/ondes-martenot-making-new-waves](https://www.musicworks.ca/featured-article/featured-article/ondes-martenot-making-new-waves)
