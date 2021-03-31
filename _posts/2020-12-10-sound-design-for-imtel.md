---
layout: post
title: "Sound Design for IMTEL"
date: 2020-12-10 12:00:00 +0200
categories: applied-project
author: Simon Rønsholm Sandvik, Thibault Jaccard
image: /assets/image/2021_03_31_thibault_virtual_reality.jpeg
excerpt: "For the applied project 2, we worked on enhancing the sound components of a VR language learning application in Unity"
Keywords: VR, Unity, Game-Development, SteamAudio, FMOD, Sound-Design
---

## Project Overview

For the Applied Projects 2 course, the team consisted of Thibault and Simon.
We were given IMTEL as our external partner, a research group focusing on developing VR and AR applications for learning purposes.

The project was a language learning application. In it, several people can connect together with a teacher in a multiplayer setting. They can talk together and the players can interact with objects in the game and by doing so the words are read out loud and players are asked to repeat them back through speech recognition.

The application consists of two scenes, a Kafé scene and a Forest one. Each scene contains different objects (e.g. table and cake in the Kafé, tent and campfire in the forest).

## Our solution

Our solution for the project was to introduce audio middleware for the game, FMOD, and provide basic documentation of workflow to utilize this.
We improved the sound design for the game and added spatialization for an improved immersive experience.

<figure>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/0p6tdIcdqaI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <figcaption>Snippet from the Kafé scenes</figcaption>
</figure>


## FMOD

FMOD is a middleware and engine to handle game audio. Most who have previous experience with working with audio will immediately find familiarities with the UI being similar to that of a DAW and having many of the same functionalities.
Using audio middleware has certain advantages. FMOD allows
you to create a timeline for each event that can be triggered.
Here you can lay out multiple or individual tracks much like in a DAW and
process these in a similar way. This allows
looping and skipping back and forth to different timestamps. It also provides
access to VST’s which can all be automated through game parameters. You can let
audio tracks trigger with different parameters e.g., pitch each time they are
triggered to make the event sound unique each time they are triggered, reducing
the need for multiple audio files within the game project itself, which can be one
of the bigger contributors to game size and loading times.

<figure>
    <img src="https://www.fmod.com/assets/img-studio/feature-for-sound-designers.jpg" width="650">
    <figcaption>A project in FMOD</figcaption>
</figure>


## SteamAudio

SteamAudio is a spatializer that can virtualize the audio through the ambisonics format and decode it binaurally, and add geometrically and materially correct reverberation greatly improving immersion, which is important for VR-enabled games. By using the steam audio source, material, and geometry components within Unity we can achieve a realistic and immersive soundscape.

[INSERT IMAGE]
<figure>
    <img src="/assets/image/2021_03_31_thibault_steamaudio.png" width="650">
    <figcaption>SteamAudio plugin for FMOD</figcaption>
</figure>

## Process

The first step was to dig into the existing project, and try to understand the existing implementation. The general architecture was done using the Unity GUI, but a lot of the logic was hiding in C# scripts. We therefore spent hours reading and meeting with programmers to make sense out of it.

Then, what turned out to be the most time consuming process has been setting up FMOD and SteamAudio. Indeed, we had to try various versions of each, and follow step-by-step tutorials many times to make those pieces of software work.

Then came the most interesting part, the actual sound design and implementation. We switched off the Unity audio engine, therefore disabling the existing sounds, and implemented all our sounds using the FMOD sound engine. All the words were created using the Google text-to-speech services, exported and integrated as wav files. We also did some sound design, especially for the environmental sounds, such as the Kafé background music and crows croaks in the Forest.

## Issues we faced

Originally we were 4 team members, but losing Rayam and Jarle along the way left us having to reduce the workload and our ambitions.

The game was originally a VR application but during the course, a desktop version was made available for us to work on. This solved a lot of issues for us as we did not have access to the necessary VR hardware.

The project was a challenge for the team, as we did not have any previous substantial experience working with Unity and C#. It became a learning experience and we relied on documentation which there was plenty of.

Creating the necessary scripts for triggering the sounds were for the same reason one of the harder tasks for us to achieve. While the FMOD API is easy to understand, referring to the correct object within unity can be a challenge.


## Last remarks

We did not reach all the goals we wanted, such as enhancing VoIP capabilities or implementing different languages. But given the Covid situation and half of the team leaving the project, we managed to still have a working prototype, and most of all we learned a lot about gaming sound design!

Our main contribution was establishing a new workflow, and documenting it extensively. We will see in the future if IMTEL is going to use it in other projects!
