---
layout: post
title: "Beethoven under Moonlight"
date: 2020-11-05 18:09:38 +0200
categories: digital-audio
author: Alena Clim
image: \assets\image\2020_11_05_alenacl_moonlight.jpg
keywords: csound, FM synthesis, amplitude envelope, digital audio, moonlight sonata
excerpt: "Creating a CSound project that uses Frequency Modulation synthesis (carrier and modulating oscillator) and plays the first few bars of the Moonlight Sonata by Beethoven based on a score."
---
# Beethoven under Moonlight using CSound

![Beethoven Moonlight Sonata](\assets\image\2020_11_05_alenacl_moonlight.jpg)

## Introduction

During the Digital Audio module we've been given a basic introduction to __CSound__, a domain-specific programming language for audio programming. In class, we covered the basics of this language: the syntax, structure, a few syntesis techniques, and effects based on delay, distorsion and filtering. For the individual projects we each wrote a functioning Csound program in the form of an audio generator and/or a processing unit for incoming audio. 

With these freshly-acquired knowledge about __CSound__ and the assignment instructions I designed my idea. Sound effects are fascinating to me, but still a bit of a mistery; on the other hand, I have quite some experience with acoustic instruments (especially pianos). Having said this, I decided to ease into the world of digital audio by writing a __CSound__ program that would imitate as closely as possible the sound of an acoustic instrument while "performing" a classical piece of music. For me, this was a theoretical assignment as much as it was practical.

In 2020 people all around the globe are celebrating the 250th anniversary of the birth of _Ludwig van Beethoven_ (1770-1827). During the years I performed classical music, I played several pieces composed by him for piano and I always found them extremely... fullfilling to play and full of emotions. This, together with the special significance of this year inspired me to choose his "Moonlight Sonata" for the present assignment. 

#### Fun fact:
This sonata was completed in 1801 and dedicated in 1802 to Countess Giulietta Guicciardi, his pupil. Its original name is _The Piano Sonata No. 14 in C-sharp minor, marked Quasi una fantasia, Op. 27, No. 2_. The popular name of _Moonlight Sonata_ dates back to the remark of a musical critic sometime after Beethoven's death.

## Preparations & Resources

The principal resource of this assignment was [__CSound__](https://csound.com/). I tried several methods of running it, for example the frontend __CSoundQT__ with which __CSound__ comes when installed, [__Cabbage__](https://cabbageaudio.com/) and [__Winxound__](https://mnt.conts.it/winxound/). Although I managed to make __Cabbage__ work on my computer, it crashed quite a lot which got frustrating, so I ended up using a [__Visual Studio Code__](https://marketplace.visualstudio.com/items?itemName=kunstmusik.csound-vscode-plugin) extension. 

__CSound__ has a pretty consistent [manual](https://flossmanual.csound.com/introduction/how-to-use-this-manual), which proved to be an important resource. In order to understand more about this language programming and __digital audio__ in general, I had to start with the [basics](https://flossmanual.csound.com/basics/digital-audio) and read about sounds, waveforms, pitch, frequencies and other realted concepts. This proved to be very useful for the next steps: understanding the basic mechanisms of __sounds__ allowed a smoother transition to __digital__.

## Program development

### Theoretical background

In 1971 he wrote an article about [stimulating real instruments](https://www.aes.org/e-lib/browse.cfm?elib=2220).  

While at Stanford University, [John M. Chowning](https://en.wikipedia.org/wiki/John_Chowning), an American composer, musician and researcher worked on finding ways to stimulate real instruments digitally. He developed something called __Frequency Modulation synthesis__ (FM synthesis) which is a way of synthesising sound based on its frequency and amplitude: the frequency of a waveform is changed using a modulator such that the frequency of an oscillator is altered "in accordance with the amplitude of a modulating signal" ([Chowning, 1973](https://www.aes.org/e-lib/browse.cfm?elib=1954)). 

Using this synthesis method, both _harmonic_ and _inharmonic_ sounds can be created - for the former, the modulating signal has to be harmonically related to the original "carrier signal" (i.e., the sound grows more complex the more the amount of frequency modulation increases), while for the latter, modulators with frequencies that are not integer multiples of the "carrier signal" have to be used. 

Implementing __FM synthesis__ through analog oscillators can result in pitch instability, so the digital implementation quickly became standard practice. This is how __digital FM synthesis__ began to be the basis of digital instruments starting from 1974. It was implemented using __phase modulation__(a form of angle modulation). 

### CSound implementation steps

Implementing a __FM synthesis__ in __CSound__ proved to be doable after understanding the concepts and the formulas. Below is a step by step explanation that leads to the final program (based on an example found online).

#### First step: 

* Creating an instrument inside `<CsInstruments>` that plays sine tones.
* Creating an oscillator that gets the `amplitude`, `frequency` and `wave shape`. The parameters are all determinted by p-fields in the score file `<CsScore>`. This is also playing the role of the __carrier oscillator__.

![CSound step 1](\assets\image\2020_11_05_alenacl_step1.jpg)


#### Second step:

* Creating another oscillator, the __modulating oscillator__, that will modulate the `frequency` of the __carrier oscillator__ by adding the output of this oscillator to the frequency of the other one.
* The `rate` of the modulation (the `vibrator rate`) is determined by the `frequency` of the modulator, whereas the `depth` of the frequency deviation is determined by the `amplitude` of the modulator. 
* A subtle vibrato - deviation `depth` of about 1/5 of a semitone and a `rate` of 6Hz - in the __carrier oscillator__'s frequency is caused this way, by adding the low-aplitude, low-frequency sine wave as the __modulator oscillator__.

![CSound step 2](\assets\image\2020_11_05_alenacl_step2.jpg)

This far we've seen an example of __FM__ (frequency modulation), more specifically using a __LFO__ (low-frequency modulating oscillator) to create a slight vibrato. When the __modulating oscillator__ has an audible frequency and larger amplitude, something else happens: __sidebands__ (other frequencies present around the carrier frequency) are created. 

This __sidebands__' frequencies depend on the frequencies of the carrier and modulating oscillator: c+m, c-m, c+2m, c-2m, etc (where c stands for carrier and m for modulating oscillator's frequencies). This relationship represents the ratio of carrier frequency to modulating frequency (Fcar/Fmod) = __the harmonicity ratio__. 
The number of __sidebands__ is determined by how strong the modulating oscillator's amplitude relative to its frequency. The ratio Amod/Fmod = __modulation index__.

The harmonicity ratio and the modulation index are the main factors in determining the number, placement, and relative strength of the different partials of the resulting sound = the __timbre__. 


#### Third step:

* Create a high-frequency __modulating oscillator__ to create __sidebands__ (in addition to the LFO for the vibrato). In order to control the __timbre__ of each note, we specify the modulating index and the harmonicity ratio as separate p-fields in the score file.
* Doing the necessary calculations as described above, obtain the ratios needed for this new modulating oscillator (in the instrument design). 
* Harmonicity ratio = Fcar/Fmod => Fmod = Fcar/harmonicity ratio. Fcar is `p5` and the harmonicity ratio is `p7` => the frequency of the modulating oscillator = p5/p7. 
* Use an __amplitude envelope__: the [`linseg`](http://www.csounds.com/manual/html/linseg.html) generator. This traces a series of line segments between some specified points - in this case the shape of the envelope is made to be directly dependent on the amplitude value given through `p4`. The same envelope is used to shape the amplitude of the modulating oscillator: the lounder a sound gets, the more partials is contains (the modulation deviation increases), giving a more realistic __timbre__. 

![CSound step 3](\assets\image\2020_11_05_alenacl_step3.jpg)

Although defining frequencies for the notes to be played is alright, it can get quite messy the more complex the score. Luckily, it's fairly easy to use pitch notations, as __CSound__ has a function called `cpspch()` to translate pitch to cycles per second. Pitch = actave plus a number of semitones: e.g. A above middle C = middle C plus 9 semitones = `cpspch(8.09)`.

#### Forth (and last) step:

* Adding a variable `ifreq` in the instrument design that will save the carrier frequency based on the pitch notation in the score => replacing `p5` with `ifreq`. 

![CSound step 4](\assets\image\2020_11_05_alenacl_step4.jpg)


### CSound final score and demo

[Here](https://drive.google.com/file/d/1Ixc1KU-n8zlD6z_ig9d2erCi2BMSsH5u/view?usp=sharing) is the final __CSound__ program. Using a [Tempo and Note Length Calculator](http://www.harmoniccycle.com/hc/music-07-tempo_and_note_length.htm) I calculated the durations of each note based on a BMP = 51 (_Largo_). Knowing the [frequencies](https://pages.mtu.edu/~suits/notefreqs.html) of notes was also useful at different stages of this project. 

[Here](https://drive.google.com/file/d/1TR05VM9QG7z2vZSkP18NDb7nGTIEYQQk/view?usp=sharing) is a demo video of the final "performance" of the first few bars of "Moonlight Sonata" by Beethoven using a slightly peculiar sound - somewhere between a marimba and a vibraphone. 

<!-- <figure style="float: none">
  <video width="auto" controls>
    <source src="https://drive.google.com/file/d/1TR05VM9QG7z2vZSkP18NDb7nGTIEYQQk/view?usp=sharing" type='video/mp4'>
  </video>
  <figcaption>CSound Moonlight Sonata</figcaption>
</figure> -->

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1TR05VM9QG7z2vZSkP18NDb7nGTIEYQQk/view?usp=sharing" width="auto" allowfullscreen></iframe>
   <figcaption>CSound Moonlight Sonata</figcaption>
</figure>

## Overall impressions

It was a nice experience to read so much about oscillators and ways to module sound and creating the score was really fun, even if a bit tedious as well. 
This assignment helped me understand more about the basis of __CSound__. Before this, I knew nothing about sound modulation and how we can use the frequency and amplitude of sounds, so even the simple notion of creating an oscillator slightly confused me. I can now say that I familiarized myself with the concept of creating different types of oscillators and I know how to use the "interface" of CSound (e.g. I know how to create an instrument and how to controll it from the score). I even got the chance to use the manual when looking for `linseg`. 
However, for me, the most interesting part was to read the theory behind these techniques, and finally understand (at least a few of) the concepts behind digital audio.



---
---
#### References

[Chowning, J. (1973)](https://www.aes.org/e-lib/browse.cfm?elib=1954). "The Synthesis of Complex Audio Spectra by Means of Frequency Modulation" (PDF). Journal of the Audio Engineering Society. 21 (7).
