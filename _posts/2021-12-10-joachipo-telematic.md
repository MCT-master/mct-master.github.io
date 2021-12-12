---
layout: post
title: "The telematic experience: space in sound in space"
date: 2021-12-10 11:00:00 +0200
categories: portal
author: Hugh Alexander von Arnim, Jakob Høydal, Joachim Poutaraud, Oliver Getz
image: /assets/image/2021_12_10_joachipo_telematic.jpg
excerpt: "A report on our telematic experience in Salen"

keywords: Portal, Concert, Telematic, LoLa
---
<center><figure style="float: none">
   <img src="/assets/image/2021_12_10_joachipo_telematic.jpg" alt="Concert" title="Performers in Salen" width="100%" />
   <figcaption>Performers in Salen before the concert</figcaption>
</figure></center>

## **Introduction**

The term telematic performance refers to a live performance (art, dance, music, etc.) which makes use of telecommunications and information technology to distribute the performers between two or more locations. When it comes to organizing and running a large-scale public networking concert in the UiO Portals, this means that we had to be able to receive audio from the other performers, manipulate it in real time, and be able to communicate musically despite being in separate rooms.

As Barry Truax mentioned [**[1]**](#References), composition and diffusion can be understood as two complementary and related processes: bringing sounds together, and spreading them out again in an organized fashion. In our point of view, a telematic performance can be understood in a similar way because it focuses on space in sound in space:

- *Space in sound* i.e. variations and manipulations of sound using Pure Data patches.
- *Sound in space* i.e. receiving and broadcasting sound through the UiO Portals

For this specific performance, two teams were split between two spaces in the Department of Musicology (Portal & Salen). As members of the team *Salen*, Hugh and Jakob focused on technical configurations and routing while Joachim and Oliver focused on the performance.

### **Performer Reflections**

We created our systems independently, but communicated about what each of us wanted to contribute through a few in-person meetings. We agreed on constraints due to the use of several acoustic instruments, along with a general outline of the music: an improvised sound texture.

According with team Portal, we agreed on two different improvised sound textures:

- *Dry* i.e. rhythmical and sharp musical variations or manipulations
- *Wet* i.e. extensive use of reverb, delay and feedback with sustained sounds

Furthermore, we didn’t have proper rehearsals with all the performers in one physical space, as the whole point was to create music over a network and to consider the latency introduced by the network.

<center><figure style="float: none">
   <img src="/assets/image/2021_12_09_joachipo_reflections.jpeg" alt="Rig" title="Performers" width="80%" />
   <figcaption>Performers reflecting on the performance</figcaption>
</figure></center>

### **Technicians Reflections**

For the rehearsals, we split the work mostly evenly, although Jakob mainly focused on the video and LOLA setup, and Hugh on the audio setup. For the concert Jakob handled the video stream mix and kept an eye on the LOLA machine, and Hugh did the audio mixes. Three mixes were created, the *Salen* FOH mix, the LOLA mix to send to the Portal, and the streaming mix. It was sometimes a challenge to keep the routing clear in our heads, especially in terms of the different mixes. There was a challenge posed in that the streaming mix send was also the master send to FOH, and therefore it was easy to accidentally clip the streaming mix. On the whole, however, we were satisfied with our technical setup and performance.


<center><figure style="float: none">
   <img src="/assets/image/2021_12_09_joachipo_technical.jpeg" alt="Rig" title="Technicians" width="80%" />
   <figcaption>Technicians configuring the routing</figcaption>
</figure></center>

## **Technical Setup, Softwares, Settings and Configurations**

### **Communication**
In order to communicate during the rehearsals, we primarily used the software Discord for troubleshooting. We also weren’t beyond relying upon a good old phone call when we needed to talk effectively.

### **Media**

- Routing diagram for each location
- Link to stream
- Mixer routing spreadsheet
- Poster

### **Performers equipments**

*Oliver’s equipment*

- Laptop
- Zoom H6 Interface & XY Microphone (1 device).
- XLRs inputs from the mixer (other performers) into H6, USB to laptop.
- Mini-jack from Laptop to DI box to mixer.
- iPhone, mini-jack to 2 x DI box to mixer.

**Pure Data patches:**

<center><figure style="float: none">
   <img src="/assets/image/2021_12_09_joachipo_pdpatch2.PNG" alt="Rig" title="Ambient generator" width="100%" style="border: None; box-shadow: None;"/>
   <figcaption>Ambient Generator: This patch is controlled from an iPhone 6 and controls which notes are played and the modulation of those notes</figcaption>
</figure></center>

<center><figure style="float: none">
   <img src="/assets/image/2021_12_09_joachipo_pdpatch1.PNG" alt="Rig" title="Autosampler" width="100%" style="border: None; box-shadow: None;"/>
   <figcaption>Autosampler: This patch takes input from the performers in the Portal as well as a kalimba and snare drum. It then lets us sequence and change the speed of the audio we get</figcaption>
</figure></center>

*Joachim’s equipment*

- Laptop Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz 1.80 GHz 8Go RAM
- AudioBox Interface (Presonus), USB to laptop.
- Stereo mini-jack from laptop audio output to 2 x DI box to mixer
- Alto saxophone
- Shure SM57 Microphone

**Pure Data patch:**
<center><figure style="float: none">
   <img src="/assets/image/2021_12_09_joachipo_pdpatch.jpg" alt="Rig" title="Telematic Patch" width="100%" style="border: None; box-shadow: None;"/>
   <figcaption>Telematic performance patch: This patch takes the alto saxophone as input. Sound can be either pitched with the subpatch pitch shift, sequenced, modulated using the RM/AM modulator or filtered using the Parallel filter bank analyzer</figcaption>
</figure></center>

<br>

## **The Music and Experience of Playing Telematically**

Several challenges needed to be taken into consideration regarding the telematic performance. As discussed by Jonas Braasch [**[2]**](#References), these challenges remain mainly technical and involve physical-distance and latency issues. In our case, because we were still new to the sudden changes of speed and bandwidth of multiple networks, and because latency problems remain a significant issue for audio-visual streaming of live telematic performance, we tried to develop a new musical language working on this new time basis. With this in mind, considering our performance a structured sound texture rather than a song was more appropriate and manageable.

## **Media Content and Relevant Links**

End of semester concert for students enrolled in the Physical-Virtual Communication and Music (MCT4024) Autumn 2021

[Telematic performance](https://www.youtube.com/watch?v=-dnpzsVc32M)

[Telematic concert guide](https://github.com/MCT-master/portal-wiki/wiki/Salen-Telematic-Concert-Guide)

## **Final Thoughts**

We were happy to have the opportunity to put the skills and theories that we had learned throughout the semester into practice, especially in a manner that allowed us to explore musical spaces that interested us. The concert also emphasized the way in which we work well as a team, with very quick division of work and no conflicts in the preparations. We are already looking forward to the next concert and to further explore aspects of *space in sound* and *sound in space*.

<a name="References">**References**</a>

<font size="2"><p><b>[1] </b>Truax, B. (1998). Composition and diffusion: Space in sound in space. Organised Sound, 3(2), 141-146. <a href="https://doi.org/10.1017/S1355771898002076">doi:10.1017/S1355771898002076</a></p></font>

<font size="2"><p><b>[2]</b> Braasch, J. The Telematic Music System: Affordances for a New Instrument to Shape the Music of Tomorrow, Contemporary Music Review, Routledge, 2009</p></font>
