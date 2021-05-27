---
layout: post
title: "Toward a Telepresence of Sound: Video Conferencing in Spatial Audio"
date: 2021-05-18 12:00:00 +0200
categories: masters-thesis
author: Jackson Goode
image: /assets/image/2021_05_18_jacksong_orientations.jpg
keywords:  spatial audio, video conferencing, psychoacoustics, jitsi meet, master's thesis
excerpt: "Teleconferencing in spatial audio with the help of Jitsi Meet and Web Audio"
redirect_from:
    - /meet-in-space
---

# Meet in Space
## Video Conferencing in Spatial Audio

### Abstract

Digital communications technologies have developed at an increasingly rapid pace, with the COVID-19 pandemic accelerating its recent adoption. This shift over the last few decades has seen a mass migration online, where utilities like video conferencing software have become essential to entire industries and institutions. This thesis proposes the integration of binaural spatialized audio within a web-based video conferencing platform for distributed conversations. The proposed system builds upon findings on the benefits of spatial audio in video conferencing platforms and is guided by the tenets of telepresence. The developed implementation is based on Jitsi Meet, a robust open-source conferencing system. It localizes participant’s voices through sound spatialization methods provided by the Web Audio API. . This project treads new ground in exploring how localized audio can be conceptualized within an accessible telecommunications platform, proposing a novel integration of HRTF-based binaural spatialization within a standard video conferencing layout. System design and experimental questions used in a technical evaluation and user study are informed from a review of audio and video conference systems found in the literature and commercial market. The system evaluation suggests its viability from a compatibility and performance perspective. Perceptual metrics of cognitive load, social presence, and intelligibility are further investigated by a user study where four remote subjects were asked to engage in a short group discussion on a live deployment of the system. Results find support for improvements across all defined metrics as well as increased opinion scores regarding the preference of conferencing with a spatial audio system.

## Teleconferencing is Here to Stay

But is often a tiring affair...
* "Zoom" fatigue
* Reduced dimensionality
* Poor and inconsistent quality

Teleconferencing has become apart of many of our daily rituals, either a result of the COVID epidemic or the rapid digitization of communication. However, most of us have experienced some symptom of fatigue as a result of our extended use of the system. Latency, network reliability, visual and audio fidelity can all contribute to a fatiguing experience, but software can also play a major role.

## Issues in Teleconferencing

My take:
- Don't reinvent the wheel - instead focus on one critical component
- How can the treatment of audio bring us to the goal of telepresence, and closer to realistic conversations

There is a striking lack of realism in our video meetings, especially in how our voices are conveyed through digital exchange. This project is guided by the principles of telepresence, or the goal of conveying our sensory interactions in high fidelity, as we would in a face-to-face interaction. Every acoustic interaction we experience is spatial so aren't our digital interactions?

## Replicating Face-to-face Interactions 

- Spatial model, spatial audio
    * Visual-aural coherency
    * Binaural audio
- Benefits from the literature
    * Lateralizing audio can improve intelligibility
    * Disentangle double-talk
    * And more: reduce cognitive load, improve comprehension, and is generally more favorable


There are many issues that ought to be addressed in the field from a software and user experience perspective. Given that audio appears the most critical medium in task oriented communication, I chose to work on integrating spatial audio within a teleconferencing system. Spatial audio within telecommunication has a number of cool benefits and has not yet been integrated within a standard video conferencing platform.

## Jitsi Meet and Web Audio

Jitsi Meet is one of the most popular FOSS video conferencing applications that requires no sign up or installation. It works cross browser and has a great support community.

To achieve spatial audio, the only current possibility for high-fidelity reproduction of sound is through binaural production of sound via headphones. Fortunately, WebAudio, a standardized method supported on all browsers, is able to faciliate full HRTF based binaural audio.

## Implementation

* Capturing participants' audio streams (WebRTC)
* Head-related transfer functions via PannerNode
* Dynamic processing of participants

With this, I integrated dynamic, toggle-able, spatial audio for each participant audio stream in a meeting. The voices of the participants appear coherent with the video streams as participants appear and disappear.

## Validating with a User Study

After a technical evaluation of the system suggested its ability to scale at least to 5 concurrent participants, I ran a user study consisting of students from MCT as well as other's who were experienced with conferencing on a daily basis. The experiment consisted of a brief conversation among 4 users, with and without spatial audio. The results, while preliminary, were promising and appear to support previous findings in the literature.

There was support for four hypothesis of perceived metrics:
- Decreased cognitive effort
- Increased social presence
- Increased vocal intelligibility
- Increase in opinion score

## And the future?

Spatial audio is being adopted at a rapid pace, but has still yet to be introduced in small group interactions like the ones presented here. Hopefully, this thesis can provide a valid proof of concept for the benefits of spatial audio in video conferencing platforms.
