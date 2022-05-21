---
layout: post
title: "A Human-Machine Music Performance System based on Autonomous Agents"
date: 2022-05-15 23:59:00 +0200
categories: masters-thesis
author: Pedro Lucas
image: /assets/image/2022_05_15_pedropl_thesis_featured_image.jpg
keywords:  human-machine-music, multi-agent-systems, live-algorithms, interactive-music-systems, artificial-intelligence, machine-learning, spatial-audio, motion-capture, max-msp, sound-synthesis, mixed-reality, hololens
excerpt: "Let's make music with virtual fellows in mixed reality."
---

This blog post presents a brief summary of my thesis. The main intention is to provide an overview of this work and multimedia material (video, audio, source code) for a complete understanding of how the system works and the results obtained from the research process. For more details you can read the full manuscript.

## Abstract

> This thesis proposes the design and implementation of a multimodal system for human-machine music performances in real-time. The machine behavior is modeled under the concepts and paradigms related to an artificial Swarm of Autonomous Agents. The system used three advanced technologies as subsystems: Motion Capture, Spatial Audio, and Mixed Reality.  These subsystems are integrated in one only solution that is evaluated regarding 'system measurements' and 'music improvisation sessions'. The 'system measurements' determine the advantages and limitations in terms of effectiveness and efficiency; and the 'music improvisation sessions' evaluate user interaction through the analysis of data recording and a survey. The results provide latency, jitter and other real-time parameters that are contrasted with user data. Moreover, the user analysis shows that the system is easy-to-use and highly enjoyable. These findings indicate that the strategy to conceive the system is validated and can be used for further investigation for autonomous agents and musicology aspects.

## Background

This system is based on concepts and paradigms related to *Musical Agents* (Tatar & Pasquier 2019),  *Live Algorithms* (Blackwell et al. 2012), *Swarm Intelligence* (Blackwell 2007), and *Music in Extended Realities (Musical XR)* (Turchet et al. 2021). The relevance of this topics relies in bringing the interaction with artificial musicians in a physical space, which requires to know how they react to the human musician and among themselves, how they can work collectively (as simple individuals) so that complex behaviors emerges, how to structure a solution in an architecture for music improvisation, and how to perceive and participate with them in a physical-virtual environment that foster an effective and efficient communication.  

The main technologies that were integrated to this systems are: *Motion Capture*, *Spatial Audio*, and *Mixed Reality (MR)*. There are related works described in the manuscript that used the concepts and technologies mentioned before in an implicit or explicit way, nevertheless, at the moment of the conception of this work, there was no a system that integrates those paradigms and technologies as one only solution for a human-machine music improvisation.

## System Overview

The design is supported by the three cutting-edge technologies mentioned above (Motion Capture, Spatial audio, and Mixed Reality) and a musical input source through a MIDI controller. These components are connected to the core of the solution, which means that there are five elements that assemble the complete platform as shown in the figure below. An *agent* is the representation of a *sound source* located in space that contains musical material from the performer and is able to adopt an autonomous behavior when the user decides it.

<figure style="float: none">
   <img src="/assets/image/2022_05_15_pedropl_thesis_design.png" alt="design" title="System Design Overview" width="auto" />
   <figcaption>System Design Overview. The wider arrows represent inputs and outputs from the component to the system and the thinner ones show inputs provided by the user and outputs received from the system.</figcaption>
</figure>

The technologies illustrated above allow the user to interact with the system and receive feedback in real-time. An *agent* (sound source) is initially an audio track that is created when the human performer finishes a musical line that is input from the MIDI controller and looped it. The sound source can be moved in space through a trackable object called *rigid body* whose position is detected by an *optical motion capture system* (OptiTrack). The position is fed into the system to place the agent in space in terms of sound and image. For the audio output, a *spatial audio system* (MCT Portal) composed of a circular array of loudspeakers reflects the location of the sound source. For visualization, a *mixed reality* headset (Microsoft HoloLens) is used to render the agent (as a 3D colored sphere) in the physical space where the performer is, also the headset allows to interact with simple gestures to select the agent to control it or let it to behave autonomously (generate new musical material and move independently), that is why the mixed reality device receives and sends data to the main system.

The communication between components depends of the technology that is using. For the spatial audio system, the infrastructure from the MCT portal (8-channel loudspeakers array) is used. The motion capture system and the mixed reality headset are connected through a local network (LAN) over a router. The motion capture uses a wired (Ethernet) connection while the mixed reality headset uses the wireless network.

These interconnections have an impact in the size, time, and rate of data transmission back and forth, which is significant for the user experience in a real-time setting. That is why it is relevant to take system measurements as part of the methodology to evaluate this system, since those measurements can help to improve and find a balance between the experience and the system efficiency, or identify the feasibility for music performances under these limitations.

The video below demonstrates the operation of the system from several perspectives.

### Video Demo

<!-- <figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1qfJgAZUb33o_cZHdKHdLJDp7v0LZ_aiD/preview" width="1024" height="576" frameborder="0" allowfullscreen></iframe>
   <figcaption>System operation from 4 perspectives for a human-machine music improvisation session.</figcaption>
</figure> -->

<figure style="float: none">
    <iframe width="1038" height="584" src="https://www.youtube.com/embed/6wm24BC5NLg" frameborder="0" allowfullscreen></iframe>
    <figcaption>System operation from 4 perspectives for a human-machine music improvisation session.</figcaption>
</figure>

## Evaluation

The system was evaluate for a number of 8 agents. This size was chosen from several experimentations considering the trade-off between latency and audio dropouts. The summary for the measurements based on this size is shown in the table below.

<figure style="float: none">
   <img src="/assets/image/2022_05_15_pedropl_thesis_systemmeasurements.jpg" alt="measurements" title="system measurements" width="auto" />
   <figcaption>Summary of system measurements for an agent size of 8.</figcaption>
</figure>

Seven users tested the system. In a testing session a user had to familiarize with the equipment, improvise a musical piece as long as he or she decided (relevant anonymize data was captured on each music performance), and complete a survey. These user testing sessions demonstrated that the previous measurements do not produce significant issues, except for the *MIDI controller to sound output latency* when a high tempo (BPM) is set. Moreover, the system was stable on every performance and tolerated a long music improvisation of 43 minutes (the longest time that a participant spent).

Comparisons were established between the system measurements, the captured user data, and the survey applied to the participants. In general, the system provided to the users a positive unconventional experience that was considered enjoyable.

You will find below an excerpt of 1 minute for the audio that the musicians produced. This is a binaural render taken from the ambisonic output that they experienced in the room.

### Audio Excerpts from Participants

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1DU8NcpDur8sfyJqQ8xM4d73f9ekue9sw" type="audio/mpeg">
    Output Audio File
  </audio>
  <figcaption>User 0</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=12nstBLgeV4DRACW9hnWgFlQ-wWXWoTzc" type="audio/mpeg">
    Output Audio File
  </audio>
  <figcaption>User 1</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1ohwup78cIrk6Ykz0AMK2atyqjdSvOXWb" type="audio/mpeg">
    Output Audio File
  </audio>
  <figcaption>User 2</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1cNcSH6KRE91PXsY-k538qKdC7UvfMKPf" type="audio/mpeg">
    Output Audio File
  </audio>
  <figcaption>User 3</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1Y5DGOPJJ06lX8vkRFpBXTqy2Vg__E-wW" type="audio/mpeg">
    Output Audio File
  </audio>
  <figcaption>User 4</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1qFYy_2SinceKFqGQO050vzUBkm269HrI" type="audio/mpeg">
    Output Audio File
  </audio>
  <figcaption>User 5</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1OmUaL3JmeskIPpMx_a4U8JTX6AfxrpTz" type="audio/mpeg">
    Output Audio File
  </audio>
  <figcaption>User 6</figcaption>
</figure>

## Conclusions

The results obtained validates the *way-of-making* for the system, and the research question about *how to design and implement* such system is answered with the endorsement of the key findings of this work. Therefore, it is possible the conception of the envisioned system as an integrated solution for human-machine musical performances.

The contributions of this work are: the design and implementation of the proposed system, the evaluation strategies, and the results of this study.

The limitations are related with: equipment (low resolution for spatial audio, limited field of view for HoloLens, PC no powerful enough for supporting more than 8 agents), measurement equipment (low frame rate cameras), and time restrictions (not enough participants for generalization, and there is still more data that can be analyzed). Despite of these limitations, the findings are relevant to validate the system and answer the research question.

It is recommendable to address the limitations described above, reduce latency and packet loss values, and search for more efficient implementations. For future work it is considered the exploration of other strategies for multi-agent behaviour and their level of participation in human-machine musical performances. Besides, a further evaluation of human aspects in the musicology field can be conducted by using this system.


## Source Code

The core system was implement in *Max/MSP* and the source code can be found below:

*  [https://github.com/pedro-lucas-bravo/agent_music_improviser](https://github.com/pedro-lucas-bravo/agent_music_improviser)

The mixed reality application was developed in *Unity3D* for the *Microsoft HoloLens version 1*. The source code is placed in:

* [https://github.com/pedro-lucas-bravo/mr_agent_visualizer](https://github.com/pedro-lucas-bravo/mr_agent_visualizer)

## References

* Thelle, N. J. W., & Pasquier, P. (2021). Spire Muse: A Virtual Musical Partner for Creative Brainstorming. In Nime 2021. PubPub
* Blackwell, T., Bown, O., & Young, M. (2012). Live Algorithms: Towards Autonomous Computer Improvisers. In Computers and creativity. Berlin, Heidelberg: Springer Berlin Heidelberg.
* Blackwell, T. (2007). Swarming and Music. In Evolutionary computer music (pp.194–217). London: Springer London.
* Turchet, L., Hamilton, R., & Camci, A. (2021). Music in Extended Realities. IEEE Access, 9 , 15810–15832.
