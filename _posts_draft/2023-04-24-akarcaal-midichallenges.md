---
layout: post
title: "Challenges with Midi"
date: 2023-04-24
categories: 'Machine Learning'
author: Aysima Karcaaltincaba
image: /assets/image/2023_04_24_akarcaal_midi.png
keywords: Midi, Programming, Audio programming
excerpt: "Is it easy to create chord progression from midi files?"
---

When programming with audio, midi format can become very beneficial for several reasons. However, it may also be challenging depending on the task intented to be performed. In this post I am going to try to share my experience with midi analysis as part of my machine learning project.


## The goal of analysis

For my project, I needed to extract a chord progression from each song which can be represented as an array of chord names. In order to do so, I needed to parse midi files and understand the chord played at each time step. 

## Challenges

### Using music21 library

As first challenge, after parsing the midi file by music21 library, I was only able to get the musical lines as divided to parts by using partitionByInstrument function. It meant that I had paralel musical lines that includes note, rest, chord values but includes them per [instrument part](https://web.mit.edu/music21/doc/moduleReference/moduleInstrument.html) not for overall song. As my project required, I needed to understand the chord that was played at each time spent so getting that information per instrument didnt help me to find a single chord played. 

In addition, parts have a stream of the instrument elements which might be note, rest or chord but some of the notes were playing at the same time so it wasnt reliable in the sense to have an order within. I also needed to represent each notes played as chord as well so it was still challenging for my need.

Another challenge was with [chordify function of music21](https://web.mit.edu/music21/doc/usersGuide/usersGuide_09_chordify.html) As stated in the guide of MIT, chordify function is defined as below: 

"Chordify is a madeup word that we created in music21 for the process of making chords out of non-chords. Chordify powerful tool for reducing a complex score with multiple parts to a succession of chords in one part that represent everything that is happening in the score." 

It is supposed to work with midi data after parsing midi data to music21 stream by music21 converter function, it is possible to chordify this stream. However this didnt work with any midi file I found. I am still not able to understand the root cause of the problem.


<figure style="float: none">
   <img
      src="/assets/image/2023_04_24_akarcaal_code.jpg"/>
   <figcaption>The code converts and chordifies the midi file</figcaption>
</figure>


<figure style="float: none">
   <img
      src="/assets/image/2023_04_24_akarcaal_chordify.jpg"/>
   <figcaption>The exception I got from each file</figcaption>
</figure>


### Using pretty_midi

Pretty midi is one of the most used libraries in order to analyse midi data, but it required extra work in order to extract some simple informations. The functions like piano_roll gives a very good overview but they are also complex to work with some ML methods like regression which I intended to use. 

Also it is easier to get musical line by instrument from midi and understand each note or chord and start end times. 


## Conclusion

At the end, I lost faith in extracting a one line chord progression from midi and I started to use other data formats like chord txt files. However with more effort I believe it might still be possible to run more advanced algorithyms on midi files and extract a chord that is independent from any instrument or any paralel musical line.

But as an answer to the first question:
- No it is not easy :) 