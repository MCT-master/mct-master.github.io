---
layout: post
title: "'Chasing Stars': An interactive spatial audio application"
date: 2021-12-10 18:00:00 +0200
categories: spatial-audio
author: Pedro Lucas
image: /assets/image/2021_12_10_pedropl_chasing_stars_art.jpg
keywords: spatial-audio, ambisonics, motion-capture, max-msp, sound-synthesis, interactive-music-systems
excerpt: "Let's explore an interactive 3D-audio application under an ethereal sound landscape."
---

This project is an interactive spatial audio application considering an artistic approach as a starting point for its development. A description of the design and implementation is provided as well as the interaction of several subsystems in the development chain (motion capture, remote control, system behavior, audio generation, spatialization, and sound playback).

## The Concept

The music and sound composition is based on an *Ethereal* environment, I interpret this concept as sounds "out of this world" that have to do with a *fantasy experience*.

The inspiration for this type of composition comes from the way in which artists have depicted the outer space regarding color and shapes, and their translation with "non-existing" sounds that can be achieved by the human imagination through sound synthesis. Additionally, I believe that this kind of composition can be also focused on a human perspective in terms of emotions. The picture below shows an [illustration](https://www.deviantart.com/mrperv/art/Chasing-stars-562098006) that tries to describe the concept of this project considering the fantasy component (art style), emotions (character expression), and situation (trying to reach a star).


<figure style="float: none">
   <img src="/assets/image/2021_12_10_pedropl_chasing_stars_art.jpg" alt="chasing stars" title="chasing stars" width="50%" />
   <figcaption><i>'Chasing Stars' by MrPerv</i></figcaption>
</figure>


As such, the goal of this application is to reflect the situation shows in the illustration mentioned before, which is *Chasing Stars*. The idea is to fill an immersive sound ambience based on the *space* theme with some sonic elements moving around. In this environment, a participant is able to listen sounds that come from random directions and he or she should approach towards the right direction so that a new sound is triggered, this new sound informs you that a "star" has been caught.

In order to implement this application, a *motion capture* system was used. The next video shows a demo performance and the data from the motion capture regarding the position of the *participant* (red circle), and the position of the *guidance sound* that calls the user to a specific direction (green circle). The participant is trying to go to the place where he or she thinks the sound is coming from, and move the hand towards the guessed direction. Note that the participant is holding an object which is tracked by the motion capture system so that the position can be sent to the controller to confirm whether it is close to the right direction or not.

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1k9NrcsDJmKv-E-LNuV5xv0OqXVaX8RSe/preview" width="1024" height="576" frameborder="0" allowfullscreen></iframe>
   <figcaption>Video Demo</figcaption>
</figure>

## Sound Elements

The sound elements that are part of the application are the following ones:

* **"Strings-like" sound:** This is the base sound that fills the soundscape and is present from all directions. It is a chord progression that leads the musical motif.
* **Reverse Hi Hat:** This is a rhythmical sound that is composed of two sources (each stereo signal) traveling around the space. It sets the musical tempo and the spatial perception of two elements in motion.
* **Guidance sound:** This a soft but strong sound that is triggered in the random direction to localize. It is a random musical note from the A minor scale (440Hz to 880Hz)
* **"Vibraphone-like" sound:** This is a sharp and percussive sound that represents a "hit" when the guidance sound is localized and is also triggered as a musical note as the guidance sound.
* **"Sparks-like" sound:** This is a continuous sound that is played in the direction in which the performer move the tracking object. It receives the same chords from the "Strings-like" sound but synthesized differently.

## Spatial Features

Una spatial audio technique used is *pairwise amplitude panning*, in which the relative amplitude of two adjacent loudspeakers is adjusted to create a phantom image between them. The figure below shows the contribution for a pair of speakers depending on the angle position in an 8-loudspeakers array. This configuration was implemented in order to increase the spatial resolution so that the participant can identify the direction more precisely.

<figure style="float: none">
   <img src="/assets/image/2021_12_10_pedropl_pairwise_panning.png" alt="Pairwise amplitude panning" title="Pairwise amplitude panning" width="75%" />
   <figcaption><i>Pairwise amplitude panning</i></figcaption>
</figure>

The sounds that use this strategy are: *guidance*, *vibraphone-like (hit)*, and *sparks-like (continuous)*, which are the ones that are closely related to the interactive part. Although this technique depends on the speaker configuration, it is possible to translate to a different setup. The following picture depicts the complete solution that was used for a 8-loudspeaker array and a binaural setup. Note that an encoding and decoding process is needed for the binaural format, which basically consists in treating the speakers as sources placed in a space where the stereo system is located.

<figure style="float: none">
   <img src="/assets/image/2021_12_10_pedropl_pairwise_enc_dec.png" alt="Pairwise amplitude panning - Encoding and decoding process" title="Pairwise amplitude panning - Encoding and decoding process" width="75%" />
   <figcaption><i>Pairwise amplitude panning - Encoding and decoding process</i></figcaption>
</figure>

Other strategy that was used is *High Order Ambisonics (HOA)* for the *string-like (base)*, and *reverse hi hat* sounds. The next figure shows how every channel of these sources is placed in the sound field. Note that these two sounds are composed of a stereo signal in which source 1 and 2 are the ones corresponding to the hi hat sound and are constantly moving around the center in a epicycloid and cardioid path respectively. Sources 3 and 4 are the ones for the base and are placed permanently in the same positions to fill the environment.

<figure style="float: none">
   <img src="/assets/image/2021_12_10_pedropl_ambisonic_solution.png" alt="Base and Hi hat sources placed in the sound field" title="Base and Hi hat sources placed in the sound field" width="100%" />
   <figcaption><i>Base and Hi hat sources placed in the sound field</i></figcaption>
</figure>

The process to encode and decode to the 8-loudspeakers array and the binaural setup is shown below. The four sources and the loudspeakers are positioned in the sound field and then encoded into a *third order ambisonics* format. The trajectories act over the sound field and are part of the encoding, then, two decoders are used for each setup.

<figure style="float: none">
   <img src="/assets/image/2021_12_10_pedropl_ambisonics_enc_dec.png" alt="Ambisonics - Encoding and Decoding process" title="Ambisonics - Encoding and Decoding process" width="100%" />
   <figcaption><i>Ambisonics - Encoding and Decoding process</i></figcaption>
</figure>

This model is used for the mentioned sources because it reinforces the spatial environment, and a high spatial precision is not required. The advantage of this configuration is the management of any loudspeakers array. The final mix of the whole application is the sum of the pairwise sources and the ambisonics ones into one only multi-signal output according to the required setup (8-loudspeakers or binaural).

## Implementation

The overall implementation is illustrated in the next diagram. The main framework for the development was [Max/MSP](https://cycling74.com/products/max) with the interconnection of several modules explained below:

<figure style="float: none">
   <img src="/assets/image/2021_12_10_pedropl_chasing_stars_implementation.png" alt="System Implementation: Modules and Subsystems" title="System Implementation: Modules and Subsystems" width="100%" />
   <figcaption><i>System Implementation: Modules and Subsystems</i></figcaption>
</figure>

* **Motion Capture (MoCap):** The [OptiTrack](https://optitrack.com/) motion capture system was used to detect a specific object in space. This object is called *rigidbody* and is an element that provides position ( X, Y, Z), and rotation (roll, pitch, yaw). The application uses the position projected to the plane (X, Y) that is parallel to the floor to control the 'vibraphone-like (hit)' and 'sparks (continuous)' sound position in real time. The data is sent from the PC that runs the software that controls the MoCap ([Motive](https://optitrack.com/software/motive/)), to the machine that runs the application, through OSC messages over the local network. An implementation used from the [N-Place project](https://www.uio.no/ritmo/english/news-and-events/events/conferences/2021/RPPW/performances/telematic-etudes/index.html) to take the data streamed from *Motive* to an OSC module in the MoCap PC was used to transmit the data from machine to machine.
* **Remote Control from Smartphone:** There are toggle controls sent by a smartphone to *start and stop the application* and, *start and stop the guidance sounds and the game behavior*. This remote control can be used with any mobile application that sends OSC messages. The spatial application just needs to take the right path for every trigger.
* **System behavior (Controller):** The controller implements the logic for the interactive behavior. It generates the random angles for the guidance sound and triggers them every four beats when it is started. It receives the position data from the motion capture and translates the cartesian coordinates to spherical coordinates, then it takes the azimuth angle which is compared with the random angle to trigger the hit sound if necessary. Additionally, this azimuth angle is mapped to the "sparks-like" continuous sound so that it can follows the rigidbody.
* **Audio Generation:** All the sounds, except the hi hat (an audio sample), are synthesized by the plugin [Hybrid3](https://www.airmusictech.com/product/hybrid-3). There is a pre-recorded MIDI score for playing back the chords through this synthesizer. Moreover, the application manages an array of numbers that represents an A minor scale, which is converted to MIDI notes that feed corresponding instances of the same plugin.
* **Spatialization:** The spatial features used in the implementation are detailed before. The library [Spat](https://forum.ircam.fr/projects/detail/spat/) for *Max/MSP* was used for ambisonics, and a custom implementation for the pairwise panning was developed by the author. The solution takes into account an 8-loudspeakers configuration and a stereo setup, both simultaneously. There are several streams of audio that are mixed to compose one only output as shown in the implementation diagram.
* **Sound Playback:** *Max/MSP* is capable of sending audio signals to independent channels in a sound card. This implementation considers 3 type of outputs that are assembled at the same time: Two set of 8 signals (two 8-loudspeakers array), and one set of two signals (stereo).

## Conclusions

As an interactive spatial audio application, this project demanded to solve technical challenges for its development. One of them was to use the right set of tools in order to reduce complexity and increase reliability. Thus, it is important to study the problem carefully to choose the platforms that best fits the application.

Choosing the proper spatialization techniques is crucial according to the problem. In this work, as explained, a pairwise panning approach was used instead of an ambisonic one to have full control of the gain sent to the loudspeakers, so that it has a higher spatial resolution to easily identify the guidance sound. However, due to perceptual reasons, it is unclear if there is a major difference between both techniques for this specific application, thus it can be part of a future testing.

A personal remark regarding the whole process to build this application is that a combination in sound exploring and spatialization techniques can be a source of inspiration for artistic work, and it can easily become in a never-ending creative workflow.

As future work, the musical composition can be enriched with more spatialized sounds and musical layers, however there is a trade-off that should be considered if the interactivity is affected by a dense sound environment. The interaction can be increased by adding more degrees of freedom and mappings, which has to take into account principles for human-machine interaction. This application can be scaled to an *interactive music system* by exploring music-making capabilities in terms of gestures and movements. Finally, visual feedback by using technologies such as virtual or mixed reality can improve a complete 3D experience for a user.
