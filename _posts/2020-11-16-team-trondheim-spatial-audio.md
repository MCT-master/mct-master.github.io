---
layout: post
title: "Music for dreams"
date: 2020-11-16 12:01:00 +0200
categories: spatial-audio
author: Ulrik Halmøy, Tom Ignatius, Simon Sandvik, Thibault Jaccard
image: /assets/image/2020_11_17_ulrikah_iggy_at_notam.jpg
keywords: immersive, reaper, iem, binaural, ambisonics, spatial audio
excerpt: "We tried to make a spatial audio composition based around a dream"
---

# Composition

## Concept

We departed from the idea of making music for dreams. We all had to make individual contributons, i.e. separate parts of the composition. As we were four students in the group, we split the composition into ~ 1 minute long pieces, where three of them were different parts of a dream, and the fourth part was the part where our main character falls asleep and wakes up again. The division of labour went as follows:

1. Iggy was in charge of creating the introduction scene when the first person goes to sleep
2. Ulrik made the first dream scenario
3. Thibault made the second dream scenario
4. Simon made the third dream scenario

Iggy also made the outro to the composition where the main character wakes up from his dream.

The figure below shows an animation of the idea behind our composition.

![Animation of composition idea](https://drive.google.com/uc?&id=1iJEjl23tBZtFttddYPl88KwmRMVn7M-c "Animation of composition idea")



The final composition can we listened to in binaural below. Make sure to use a headset when you listen to it.

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1MugB0apktjGKg8BlLtT5TkQ1KqndOZG_" type="audio/mpeg">
    Binaural rendering of the final composition
  </audio>
  <figcaption></figcaption>
</figure>

### Iggy

### Ulrik

The goal I had for my part was to compose music for abstract dream-like space, where different types of sounds move along trajectories above and around the listeners head. I got inspiration from how dreams suddenly appear and disappear without any, in a seemingly unpredictable manner.

**Recordings**

I did a few recordings with the Zoom H3 VR ambisonics microphone when I was in Trondheim the first week of the course. Two of them were used in the composition.

<figure>
<img src="/assets/image/2020_11_17_ulrikah_recording_construction_work.jpg" alt="Recording of some construction work in Trondheim" width="75%" align="middle">
<figcaption>Recording of some construction work in Trondheim</figcaption>
</figure>

The first recording was used as a background element in the composition. It was recorded outdoors in an space with sound sources coming from multiple directions and distances, as well as the general noise of the city. The recording helped providing a spatial context for the other elements in the composition.

<figure>
<img src="/assets/image/2020_11_17_ulrikah_recording_indoor.jpg" alt="Recording of a metal stick scraping the floor in the Portal" width="75%" align="middle">
<figcaption>Recording of a metal stick scraping the floor in the Portal</figcaption>
</figure>

I also recorded a metal stick that I dragged around the microphone in clockwise order. Iggy had a cool idea of adding a delayed version of this recording on top of the original one, and rotating it the other way around the listeners head. It created an interesting whirlwhind effect that I ended up including in my composition.

**Spat**

<figure>
<img src="/assets/image/2020_11_17_ulrikah_spat.jpg" alt="Spat experiments" width="75%" align="middle">
<figcaption>Spat experiments</figcaption>
</figure>

After having heard very promising words from Natasha about the software, I was curious to look into [Spat](https://forum.ircam.fr/projects/detail/spat/). I decided to process one sample with different variations of a spectral delay, record six slightly different versions of it, and use these six samples in a sound cluster in my composition. This was my take on destructuring a sound in space, a concept that I borrowed from Natasha Barrett's [WoNoMute talk](https://www.youtube.com/watch?v=CQhzOM3ZFF4) last year. I really liked this way of working with spatial audio, and I'm definitively going to use Max and Spat a lot more the next time I work on a spatial audio project.

**Other sources**

There are a couple of other sound sources that I put into my composition as well, such as the drone in the background and the drum breaks that are approaching the listener around `01:26`. I just experimented with positioning them around in space, and automating the position until I felt that it sounded somewhat natural.

### Thibault

This part was composed in a layer-by-layer fashion, improvising 6 voices on a violin (plus one bass note). All voices fit in an A Dorian scale, and stay on one chord (Am).

The idea was to experiment with layer-by-layer spatial automation recording. Indeed, the displacements have been recorder in the same order as the violin tracks, and the aim was to give it a comparable intention as the notes. Speed and proximity are used to reflect bow speed and pressure, but not in a proportional manner. Musical intention may be more intense with a softer sound, and in that case the track sounds very close to the listener.

For violin recording, a piezoelectric pickup was used. For ambisonic encoding, the IEM RoomEncoder was used. All was done in Reaper.

### Simon

In my scene the listener enters a warzone in the midst of a bad dream.
He is heard running through a corridor together with other soldiers and as the doors open we can hear guns blazing from different directions. We enter a larger area where some futuristic cyborg monstrosity is unleashing its attack.

My primary drive was that I wanted to work with diegetic sounds. I have previously worked with sound design and quite enjoy it. As many of the sound libraries I have collected over the years are game related, I had a lot of fitting material on hand for a warzone scene.
I visually sketched out a scene before starting at the beginning and adding sounds.
The IEM suite became my most important tools. In particular, the RoomEncoder, to bring all my monotracks into ambisonics. The plugin allowed me to automate both listener and emitter position which gave me decent control over directionality and movement. One of the challenges that became apparent, was that this plugin is limited to one sound source per instance. This forced me to use an increasing amount of this plugin as I kept adding more sounds to the soundscape. The futility in that approach both became apparent in CPU cost and a non-optimal workflow. Another problem I faced was the dynamic range in my soundscape. Having minor sonic details such as breathing and the rustling of clothes noticeable while guns are blazing in other side of the room became a never-ending struggle of balancing the mix. While I think the overall result was decent, I would not have approached such a task in the same manner if I were to do sound design within ambisonic again. I would believe working in a game engine such as unity and fmod/wwise would give a better visual representation of localization and would be better suited for such a task especially considering the increasing amount of spatialization plugins available.

# Working at Notam

Iggy and Ulrik got the chance to work in [Notam](https://notam.no/)'s spatial audio studio. The studio is equipped with 24 loudspeakers in a hemisphere, evenly distributed approximately 2.5 meters from the listener. It was a great experience, and made it easier to become fully immersed in the world of spatial audio.

![The 24 channel loudspeaker setup at Notam](https://drive.google.com/uc?&id=1A5ktq_fYVdR90OOE_ZU8L76pwDs_-VQr "The 24 channel loudspeaker setup at Notam")

# Slides for presentation

If you're more interested in our project, you can have a look at our slides below. Feel free to contact us about the project as well.

<figure align="middle">
    <iframe src="https://drive.google.com/file/d/12QEWTfdwI5XPl7UhPdjjuyFlnRg8HRWJ/preview" width="800px" height="460px" allowfullscreen></iframe>
    <figcaption>The slides for our presentation</figcaption>
</figure>
