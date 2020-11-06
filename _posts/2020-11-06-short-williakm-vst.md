---
layout: post
title: "Everything's Out of Tune (And Nothing Is)"
date: 2020-11-06 18:00:00 +0200
categories: digital-audio
author: Willie Mandeville
image: /assets/image/2020_11_06_williakm_piano.jpg
keywords: digital-audio
excerpt: "Who says that Csound and early music can't mix? Building a VSTi for swappable historical temperaments."
---

# *Tuning Up*

When thinking about interactions between music, communication, and technology, I am usually starting from a much different place than most other students in the MCT program. I respect, **fear**, and expect to learn much more about coding and all the technology that makes the world go round, but my ultimate goals lean toward preservation, education, and transmission of older, decidedly lower-tech music.

With this in mind, our recent shallow dive (that’s what I’ll call a deep dive that’s done in just a few packed hours) into the world of Csound presented me with an opportunity to create a nifty little tool for explorers of early western music. I developed a VSTi for use in Reaper that allows the user to toggle his or her midi keyboard between a handful of the different tuning systems commonly used in Europe within the last 500 years.

## An Extremely Oversimplified History of Tuning

Equal temperament, the division of the octave into 12 equal parts to produce the chromatic scale is very convenient. People can play things in any key and have them sound ‘correct,’ making transposition and movement of music materials quite simple. However, the dirty little secret of equal temperament is that it is achieved by pushing every single note slightly out of tune. Our oversaturated ears are very used to hearing this tuning system, but, when examined more closely, it really ensures that every interval (except for the octave) has a small amount of rhythmic beating.

Before equal temperament became widespread (some semblance of it has likely always been around in less codified forms) music theorists and performers of different eras utilized a variety of different tuning systems. Renaissance music typically remained in keys with fewer sharps and flats, allowing for tuning systems in which certain chords sounded delightful while others sounded horrendous. The same applied somewhat to Baroque music, however, as harmonies grew more complex, the rougher qualities of far-flung keys likely actually became a compositional and expressive tool that keyboard players could exploit. Today, bowed string players, singers, and other instrumentalists who can adjust intonation while playing may color notes in pursuit of purer intervals, but the constant presence of keyboard and fretted string instruments really drives everything toward equal temperament.

For the purposes of this blog post (since as much as I’d love to go full tuning nerd, the assignment is to write about Csound and not tuning histories) let’s stick with an oversimplified outline of tuning systems. Tuning approaches moved from concepts like Pythagoras’ system (developed in the 6th century BC and based on pure intervals from the harmonic series) toward systems like just intonation and meantone temperament (based on sequences of pure or almost pure intervals) before settling (from roughly the tail end of 18th century onward) into today’s general adherence to equal temperament.

## The VSTi

<figure style="float: auto">
   <img src="/assets/image/2020_11_06_williakm_reapevstrview.jpg" alt="The Score" title="Temperament Toggling" width="auto"/> <figcaption>Temperament Toggling</figcaption>
</figure>

Since I currently still know far more about tuning systems than I do about Csound, it is fair to say that my VSTi is a fairly rudimentary one. It allows a user equipped with a midi keyboard to select equal temperament, just intonation, meantone temperament, Pythagorean tuning, or a mixture of any or all of these tuning systems for use within Reaper. As would be likely on a historical keyboard, the tuning system begins on C, an important distinction in these non-symmetrical temperaments.

I used Cabbage to assemble a series of *if* statements pertaining to each note in the two-octave compass of my midi controller keyboard. By simply giving the proper ratios to provide the correct adjustments away from equal temperament for each note in each tuning system and then assigning each system to a toggle button in the interface, it was possible to construct a basic but serviceable VSTi with a clickable interface. Currently, the VSTi has only been tested in Reaper, but I see no reason why it wouldn’t work in other similar DAWs.

<figure style="float: auto">
   <img src="/assets/image/2020_11_06_williakm_codeif.jpg" alt="If statements" title="If statements" width="auto"/>
</figure>

For my purposes, this little VSTi is useful for exploring early keyboard and plucked string music. A desire to hear different temperaments in musical contexts isn’t convincing enough to drive most keyboard players to retune their instruments every five minutes, however being able to toggle between them makes it much easier to consider how tuning decisions could affect a piece or repertoire. Basically, it’s a fun toy for making nerdy activities even nerdier.

Watch the video below for a taste of the different temperaments in action.

<figure style="float: none">
  <video width="auto" controls>
    <source src="https://drive.google.com/uc?&id=14jkjVbHpTbzafSe0UTC_7UqAvfnV-ZSq" type='video/mp4'>
    Alternate Text
  </video>
  <figcaption>Playing example chords and excerpts in different temperaments.</figcaption>
</figure>
