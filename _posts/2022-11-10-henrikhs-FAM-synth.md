---
layout: post
title: "FAM Synthesizer"
date: 2022-11-10 09:00:00 +0200
categories: interactive-music
author: Henrik Sveen
image: /assets/image/2022_11_10_henrikhs_famLogo.jpg
keywords: motion tracking, sonification, posture, max, msp, jitter
excerpt: "A simple digital synthesizer with the potential of sounding big, complex and kind of analog. Screenless menudiving included."
---

<figure style="float: none">
   <img src="/assets/image/2022_11_10_henrikhs_fffamfinal2.jpg" alt="mage not showing? Will try to fix it." title="Image Title" width="auto" />
   <figcaption>Final version of FAM.</figcaption>
</figure>


For my MCT4054 Interactive Music Systems midway project I made a FM/AM synthesizer with analog modulation. FM and AM can be very digital sounding, so I wanted to explore and expand some features in this specific synthesis model. Everything was made in Pure Data.

#### Sound Engine
It consists of one carrier oscillator, one FM modulator and one AM modulator which i quitesimole, though the combination of FM and AM in itself opens for some new sonic possibilities as they have different sonic attributes. Ratio is selected from a set of harmonic intervals and modulation amount can be set from 0 to 100 %. To expand on this concept I have added stereo detune for all oscillators, which widens the sound and makes the modulation feel quite different from regular mono signal path modulation. This is also a way to access the non-harmonic ratio parameters for the modulators creating bell and metal like sounds. Lastly there is an ADSR for each of the oscillators and a distortion on the summed output for some analog ish grit.

#### Screenless Menu
One thing is that I don’t know exactly how to integrate a screen into a setup. Another thing is that I in general feel like the screen is distracting me as a user from interacting with the sounds that I sculpt. So I wanted to make a menu system so I could have one encoder control many parameters, but without having to put information on a screen for feedback. The solution for this was using LED lights. At the end I got three buttons with integrated LEDs. Before this I used regular buttons and LEDs seperately. One button for “FM” menu, one for “AM” menu and one for “Amp” menu. Firstly I wanted to detect which button is pressed first to enter one of these three main menus. When the first button is pushed down, then the other buttons will enter the sub menus. The submenu is accessed once a held button is released. The button LEDs are indicating the main menu (FM, AM or Amp) and a RGB LED is indicating which submenu is active.The system is mapped as this:

|Button Combination| Main Menu | Parameter| LED |
|-|-|-|-|
|B1 |  FM | Amount| Turquise |
|B1  + B2 | FM | Ratio| Pink |
|B1 + B3 | FM | Detune| Yellow |
|B1 + B2 + B3 | FM | ADSR| Red |
|B2 | AM | Amount| Turquise |
|B2  + B1 | AM | Ratio| Pink |
|B2 + B3 | AM | Detune| Yellow |
|B2 + B1 + B3 | AM | ADSR| Red |
|B3 | Amp | Cassette Analog FM Amount| Turquise |
|B3  + B1 | Amp | Stereo Modulation Overdrive and Filter| Pink |
|B3 + B2 | Amp | Detune| Yellow |
|B3 + B1 + B2 | Amp | ADSR| Red |

Note that there is a relationship between which button is pressed first and the main menu.


I found that the gestural control of menu accessing was more intuitive than I expected it to be. Of course this may have to do with the fact that I designed the menu system, so I tested it on a friend and didn’t give any information in advance. At first the menu system wasn’t very understandable, but after a few minutes it seemed like it became clearer that the buttons were directing the encoder. This was at a stage in the design process where the buttons needed to be held down for the encoder to actually send data to the desired parameter. Also I should mention that the encoder was a potentiometer at this stage. Based on the feedback from our half our session I changed from holding buttons to pushing buttons and swapping the potentiometer for an encoder. These were the major feedback points on the instrument, and it really improved the experience of using the menuless button system for accessing parameter control. It benefits on using muscle memory to navigate on the instrument which can be very effective once you spend the time needed to learn the button combinations. One obvious downside is that there is no way to control multiple parameter at once, so it calls for programming a sound to be played.
On that note I should mention how expressive the synthesizer is. Both FM and AM modulation amount as well as amp velocity is full range MIDI velocity responsive. This gives the keyboard player a very large dynamic range regarding how hard each note is hit. Almost like playing a mallett. In addition to this I made the velocity impact the release of all envelopes so that hard hit notes have longer release and decay times than the ones played carefully. These mappings afford experimenting with expressive playing styles.


<figure style="float: none">
  <video width="auto" controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/video/2022_11_10_henrikhs_famdemo.mp4" type='video/mp4'>
  </video>
  <figcaption>FAM - Audio Demo</figcaption>
</figure>

<figure style="float: none">
   <img src="/assets/image/2022_11_10_henrikhs_fffam_schematic_comp.jpg" alt="mage not showing? Will try to fix it." title="Image Title" width="auto" />
   <figcaption>Schematics for the hardware integration.</figcaption>
</figure>

<figure style="float: none">
   <img src="/assets/image/2022_11_10_henrikhs_fffamfinal.jpg" alt="mage not showing? Will try to fix it." title="Image Title" width="auto" />
   <figcaption>Solderboard.</figcaption>
</figure>

#### Current state and future potential
For further development some sort of feedback on the encoder should be implemented, like a LED ring or strip showing the current value of the selected parameter. Without it the performer is left with listening at the sound and then assuming the current value. An interesting outcome of not knowing the value of every parameter is that the performer could rather spend energy on listening to the sound instead of thinking about the values shown for the parameter. Personally I find that when given information about the technical state of an instrument it can drag my attention away from the actual sound and towards the technical aspects of data and sound synthesis. This matter is highly subjective.
Soundwise I enjoy the stereo FM and AM modulation. A very simple expansion on an established concept providing quite new sonic results. Musically it creates big textures that are easy to fit into mixes in subtle or aggressive ways. It can create subtle pads that can hide behind other sounds and work in the background to create a stereo room feel without adding reverb, or it can act as lead instrumentation. It naturally creates mallet type sounds of different kinds due to its modulation synthesis basis.

The analog cassette modulation source immediately gives the sound some dustyness and serves as a very effective way to create nostalgic sounds with a good amount of personality. The benefit of using this modulation instead of sampling is that the modulation can happen globally and not on a note basis, and it excludes the matter of noise accumulation when sampling tones through old analog gear. Another aspect of this that I value is how the magnetic tape serves as a sensor for physical degradation over time when the tape is exposed for different environments like heat, humidity and so on.
I hope to further develop this instrument so I can test it more in my own work and maybe also have my friends use it to see how others use it.
