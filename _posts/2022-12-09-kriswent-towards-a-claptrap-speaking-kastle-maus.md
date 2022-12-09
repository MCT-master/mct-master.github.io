---
layout: post
title: "Towards a Claptrap-Speaking Kastle Maus"
date: 2022-12-09 13:00:00 +0200
categories: interactive-music
author: Kristian Wentzel
image: /assets/image/2022_12_09_kriswent_kastle_maus.jpg
keywords: mct, modular synthesis, puppets, interactive music systems
excerpt: "Once upon a time, there was a maus living in a kastle.."
---

# Introduction

It's the most beautiful time of the year! The time of the year when MCT projects are due and exams keep competing for your attention. As for the beautiful part of it, this means that the MCT perimeters will showcase telematic performances and instruments you didn't knew you wanted to experience.

This is the story of my project in Interactive Music Systems, trough it's early stages and aaaaalmost to it's final iteration. I hope you enjoy it!

<figure style="float: none">
   <img src="/assets/image/2022_12_09_kriswent_puppet_maus.jpg" alt="Maus" title="" height="auto" width="55%" />
   <figcaption><i>Say cheese to Maus.</i></figcaption>
</figure>

# The Maus

Meet Maus! Maus is a puppet. He competed against other puppets in demanding its owner's attention. Some of it's good qualities are:

- two flexible arms
- a mouth who can open and close (completely)
- a head that can nod, with a secret compartment for an accelerometer
- a talkative, claptrap-speaking mood

Maus' mouth is my personal favorite. I could lay for hours (if I didn't have exams upcoming) and listen to his non-soothing, non-comforting, algorithmic - yet slightly randomized - babbling. His mouth also houses a light sensor. This is essential to my well-being, as this allows me to filter out some of his foulest words and worst ramblings, using a low-pass filter in Pure data of course. The arms are filled with one flex sensor each. As Maus is a profound gesticulateer, this will alter the jargon and dialect of his non-verbal output. As he is not the biggest fan of word-shaping, this will instead affect the wave-shaping, and also timbre, of his voice. As for his head, this is more of a mystery to me. One thing I know is that it can be manipulated in space, but I haven't figured out how to use this to my advantage yet. I'm sure I'll get there. I also know that his brain is just a mere accelerometer. This might be controlling the speed of his flapdoodling, but it might also just be an big empty void (which in case might prove excellent for spacious reverbs).

Except from his knack to speaking loud, (don't get him started on his opinions on modular synthesis or he'll never stop,) he is a great Maus!

# The Kastle

The Kastle is where the Maus resides. It originates from the Czech Republic, but is now located next to the MCT Headquarters. To Maus, this is more than just a home, it's a place of refuge. It's a place where he can be himself, without being judged. It's a place where he can be free. It's a place where he can be Maus. The Kastle is magical, and the true inspiration for all of Maus' gibberish.

<figure style="float: none">
   <img src="/assets/image/2022_12_07_kriswent_bastl.jpeg" alt="Bastl Kastle" title="" height="auto" width="45%" />
   <figcaption><i>The (Bastl) Kastle.</i></figcaption>
</figure>

Besides being a place for refuge, the Kastle is also a place for music. It's an analog synthesizer accounting for the essence of what Maus is communicating, and is interconnected with a Bela board. A few other sounds are generated and modulated in the Bela through a Pure data patch. This patch is the true puppet master, taking care of all the sensor data and mapping it either internally or to the Kastl. The randomized sequencer in the Kastl is also sent back to Pure data to control some secret magic only Maus will know about. As the sequencer will have to take responsibility for the randomness of Maus' nonsensical sentence construction, I will briefly list it's three states which is controlled by Maus' waist bag:

1. Semi-random 8-step pattern (Ground)
2. Semi-random 16-step pattern (Floating voltage)   
3. Ever-changing random pattern (5V)

This works in the way that by connecting the sequencer to ground or floating voltage, the randomly generated sequence will be "captured" in a 8-step or 16-step pattern. The output of the sequencer is really just 8 different voltages which is mapped to the synthesizers pitch, and also routed back to Bela for some aforementioned secrets. According to Bastl, "*the STEPPED generator is inspired by the Rungler circuit by Rob Hordijk.*"


<figure style="float: none">
   <img src="/assets/image/2022_12_09_kriswent_burg_maus.jpg" alt="Burg Maus" title="" height="auto" width="65%" />
   <figcaption><i>The actual Castle Maus (Burg Maus). Photography by Felix König.</i></figcaption>
</figure>


# Status Quo

Today is Friday the 9th of December and there is still 3 days until deadline. My mood is toggling between stressed and composed, just like Maus' waist bag is doing to him. Everything is prototyped and soldered, all sensors work, and the Bela is running. I've got bidirectional connection between the Kastle and Bela, while Maus himself have been sitting patiently on the sideline. It's not long until I'll look back to these moments of quiet serenity with rejoice, as I won't be able to silence his mumbo jumbo anymore, though..  Below is a video documenting the work-in-progress this week, with raw unfiltered audio and temporary LFOs in pure data modulating the Kastle instead of Maus' sensors.

<figure style="float: none">
  <video width="45%" controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/video/2022_12_09_kriswent_prototype.mov" type='video/mp4'>
  </video>
  <figcaption><i>Work-in-Progress after the soldering was done, and everything (except sensors) spoke gobbledygook fluently to each other.</i></figcaption>
</figure>

The next step for me now is to securely attach the sensors inside of Maus without any broken parts inducing "*gråt og tenners gnissel*", as we are prone say in Norwegian. (Which would translate to something like *crying and gnashing of teeth*.) I'll also have to work on the software working behind the scenes, to make this experience as pleasant as possible. There's a thought gnawing like a mouse in the back of my head though, curios of transforming the Maus into a beat-boxer instead of claptrap-speaker by switching to the Bastl Kastle Drum. If there had been a comment section below, I'd ask for your opinion. In any case, I can't wait to hear what Maus has to say!

*This blogpost was sponsored by a few suggested sentences by GitHub copilot too fitting to be discarded.*