---
layout: post
title: "MCT Portal II - The Dungeon"
date: 2021-05-10 20:00:00 +0200
categories: applied-project
author: Henrik Sveen, Anders Lidal, Leigh Murray, Alena Clim
image: /assets/image/2021_05_10_anderlid_videodungeon.jpg
keywords:  portal, telematic-music, LoLa, live-performance, jacktrip, applied project
excerpt: "First time we entered the videolab, it was basically a storage room, full of outdated audio equipment and also hardware we would use. The ceiling lights didn’t work, and the cleaning personal hadn’t been there for quite a while."
---

# MCT Portal II - The Dungeon

## Introduction

One of the main objectives of the MCT Master’s program is to equip its students with personal and technical skills that are highly relevant for real-life challenges. The Applied Project courses are two opportunities for students to apply their music-technological knowledge in creative ways by completing complex projects in real-life settings and interdisciplinary teams.
This semester, the Musicology Department (IMV) decided to use available resources (software and hardware) to create another portal, where students can experiment and explore audio-visual technologies in search for high quality, high speed and low latency transmissions.

## The Dungeon

For our applied project we were assigned to make a second portal that would be based on, and expand beyond, the functionalities of the existing portal. The MCT Portal is a room at IMV that is able to connect to other rooms in the world with very low latency. Usually through a software called LoLa.

For setting up another one of these rooms we analyzed in depth how the Portal treats audio regarding receiving and sending. The room we were given to repurpose was the Videolab, previously used for recording and editing audio and video. Our proposal kept many of the functionalities of the Videolab and we expanded it to also work as a portal.
Flexibility and ease of use has been two important factors for us while working and developing what we named the Dungeon. The name relates to the Portal upstairs in a mythical fashion and is very describing for the room itself – located in the basement, with no windows and low ceiling, and dungeon-y vibes.

## Explanation and evaluation

The proposed solution was designed to implement and expand on the functionality of the existing Portal at UiO, whilst trying to reduce complexity. To this end, a second LoLa PC was set up in the Dungeon and connected to a 32 channel analogue mixer, a Mackie 32-8. Channels 1-20 are used for microphones and inputs while channels 21-32 are used for receiving signals from Zoom, LoLa and JackTrip through Zoom-computer, RME Fireface 800 interface and Mac Mini. The mixer is set up so audio can be passed through the faders to whatever submix you wish to use, and the B-mix knobs can be applied for a separate monitor mix in the Dungeon. This is fairly similar to the way the Midas M32 mixer is set up in the MCT Portal, which should make it easier to use the Dungeon if you already know how to operate the portal upstairs. In total there are 480 knobs plus 512 buttons just for the mixer channels, so making sure they are all reset can be a little tiring after a hard day’s work in the Dungeon. The mixer and the audio setup is documented in this diagram and mixer chart explaining all channels and how they should be reset after use.

<figure style="float: none">
   <img src="/assets/image/2021_05_10_henrikhs_DungeonAudioDiagram.png" alt="Henrik's Instrumentation" title="Dungeon Audio Diagram" width="auto" />
   <figcaption><i>Dungeon Audio Diagram.</i></figcaption>
</figure>

<figure style="float: none">
   <img src="/assets/image/2021_05_10_henrikhs_DungeonMixerChart.jpg" alt="Henrik's Instrumentation" title="Dungeon Mixer Chart" width="auto" />
   <figcaption><i>Dungeon Mixer Chart.</i></figcaption>
</figure>

To expand on the functionality of the room, we had three different networks patched to the ethernet ports in the room; the audio/visual network which allows access and control of the SDI cameras and displays (a PC is supplied for this but not set up), the UiO network which is connected to the Zoom and Mac Mini allowing allowing connections to JackTrip, and the LoLa network for the LoLa PC.  This provides for several different audio/visual configurations that include onsite and external connections, something previously unachievable with the MCT Portal’s setup.

Two DAWs (Ableton and Reaper) have been installed on the Mac Mini which allows people to use a large variety of virtual instruments as well as multi-track recordings, that previously was only able to be done if users provided their own laptop and software.  With the secondary speakers set up and connected to the McONE audio switcher, users are able to preserve the stereo field and audio experience while working directly on the PC and continue to use the room as a “video room”.

Two PAR lights can be found in the Dungeon. They are controllable by the Mac Mini using a program called LightKey which adds more atmosphere during telematic performances. The new fadable LED room lighting also provides an even white light for optimal use of the green screen.

An external Linux server has been set up to run JackTrip, which can become part of the MCT project for future students and be expanded for testing and production use of software that is otherwise difficult to have run on UiO networks due to network and permission constraints.

## Demonstration and Achieved Objective

For our demo we used a connection between the Portal and the Dungeon using JackTrip for streaming audio. The result was something one could consider a telematic performance. Upstairs, Anders played the piano and then drums, while downstairs, Henrik played drums on his OP-1 and Leigh contributed with some synth bass. Everything was routed to Zoom through the Mackie mixer. It was done on the fly as the break before our presentation got halved from ten to five minutes, so we weren’t able check our sound and levels properly. And yes, it’s fair to say that we maybe should have done this way before, but we tried and this ended up being our backup solution. What we meant to do was to use LoLa between the portals, but for some reason we weren’t able to hear the sound that was being sent from the portals. Luckily, we managed to get JackTrip up and running at the last minute and here is what we played.

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1r5XUluiKmsNdroVMfWKJIylfOg92w9dG/preview" width=auto height=auto frameborder="0" allowfullscreen></iframe>
   <figcaption><i>Live Demo over JackTrip.</i></figcaption>
</figure>

## Deliverables and Documentation

The main and most obvious deliverable for this project was the room itself, evolving from something a bit more than a storage space to an aesthetically pleasant room with high quality audio-visual technologies ready to be used for extended classroom, telematic performance and other use cases.

<b>Before ...</b>
<figure style="float: none">
   <img src="/assets/image/2021_05_10_anderlid_videolab.jpg"  width="auto" />
   <figcaption><i>Our first glance at the videolab.</i></figcaption>
</figure>

<b>Conceptualization ...</b>

<figure style="float: none">
   <img src="/assets/image/2021_05_10_alena_dungeon_conceptualization.JPG"  width="auto" />
   <figcaption><i>Conceptualization of the Dungeon.</i></figcaption>
</figure>

<b>After ...</b>

<figure style="float: none">
   <img src="/assets/image/2021_05_10_anderlid_dungeon.jpg"  width="auto" />
   <figcaption><i>The Dungeon today.</i></figcaption>
</figure>

After considering which of the available equipment would fit with the functionalities we had in mind, we took some time to design the room in 2D and 3D sketches. We presented the final conceptualisation in our proposal and after receiving the go from our external partner we started the implementation of IMV’s second portal - by installing software applications, network services and configurations, and setting up communication channels through Zoom, LoLa and JackTrip.

All through the project we tested and troubleshooted the functionalities of the room to maximize the benefits of the room and its use cases. We decided to focus on an extended classroom setup, with a main and alternative Zoom connections, and a telematic performance setup using audio connection through LoLa and/or Jacktrip. In Subsection 3.5.B of the [user manual](https://drive.google.com/file/d/1_TCKjiNMqUOxZ6JhYI6ItkbJhPYzL_JP/view) you can find some details and diagrams about three possible telematic connections.

In the Dungeon there are three quick setup guides for using Zoom and LoLa printed and displayed on the wall so that anyone going in can immediately start using the available facilities. To facilitate a quicker understanding of how to operate the mixer, the audio diagram and mixer chart can be found displayed on the wall near it. For anyone interested in more details about the functionalities of the room, check out our [user manual](https://drive.google.com/file/d/1_TCKjiNMqUOxZ6JhYI6ItkbJhPYzL_JP/view) - that’s where you can find instructions for using the audio-visual technologies, audio, video and network diagrams, quick setup guides, and some tips and tricks.

Enjoy the Dungeon!
