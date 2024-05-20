---
layout: post
title: "Fight latency with latency"
date: 2021-09-22 10:00:00 +0200
categories: networked-music
author: Arvid Falch
image: /assets/image/2021_09_22_arvidf_latency.jpg
keywords: latency, the online orchestra, telematic music systems
excerpt: "Alternative design approaches for telematic music systems."
---


### Introduction


In his paper **The Telematic Music System: Affordances for a New Instrument to Shape the Music of Tomorrow** (Braasch 2009), the author argues that we should view the telematic music system as a new instrument, one that can change the music of tomorrow. I will discuss how the author outlines his reasons behind this perspective. The idea of the system as an instrument will then be compared with the design choices and musical outcomes of The Online Orchestra, a system described in the paper **Telematic Performance and the challenge of latency** (Rofe et al 2017). I will discuss how and if the creators of The Online Orchestra fulfills Braasch' idea of designing a telematic music system as a new instrument capable of creating the music of tomorrow.

### Discussion

By treating it as a new class of instrument Braasch urges telematic music system creators to set new design goals which do not attempt to replicate the real-world sound environment. Performers and composers should consider a telematic music system as a virtual space on it’s own, and be aware of it’s conditions and limitations. This, the author claims,  is the only way a telematic music system can surpass what is already existing in traditional performance spaces. Just as the invention of the piano enabled new sounds and new compositional possibilities, a system designed as a new instrument will have the potential to reap similar benefits. Contrarily, if the only ideal of the system is to show no signal degradation over the transmission pathway, it could only aspire to be equal to the quality of a traditional performance.


All telematic music systems that attempt to emulate a traditional performance space will run into issues with latency. System latency can be overcome by improved hardware and software, but propagation latency (information transfer speed) has it’s purely physical limits which will be a challenge to any telematic music system for the unforeseeable future.

When latency itself is such a fundamental issue in telematic music systems, designers should try to negotiate this while designing new systems by looking closer at what latency does with music. As hard as it is to perform with latency, as a musical phenomenon it is nothing more than temporal displacement.

One interesting design solution mirroring Braaschs framework is proposed by Rofe et.al. in their paper **Telematic Performance and the challenge of latency** (Rofe et al 2017). Through their research they discovered that even a very small values of latency poses huge problems, as attempts to clap in time at 120 bpm with latency exceeding 30 ms were deemed almost impossible by music students. Surprisingly,  much higher values of latency could be managed easily by controlling it to equal a musical temporal value.
On the basis of this research the authors designed a telematic music system called The Online Orchestra, which measures latency and then adds a controlled amount of latency so that the total latency is equal to the note value of a quarter note.  The system then designates a master node which starts playing, and the receiving nodes receive the signal a quarter note later. The sound created from the receiving nodes will then arrive at the master node on the next beat.

With one master node (A), and two separate receiving nodes (B and C), on beat three of the first bar they would then each hear the following combinations:
Node A will hear it’s own third beat and node B and C’s first beat. Node B will hear node A’s second beat and it’s own second beat, while it will only hear the first beat of node C. The opposite of B would be true for node C.

According to the authors, the musicians performing with this system found it easy to navigate, as the music appeared to be synchronized in tempo. On the other hand it is easy to envision that the three different versions in the example would have the potential to sound very different.

One aspect I find interesting about this approach is that the outcome is not just one musical event, but multiple musical events. I propose that these events should not be regarded as separate individual musical events, but rather temporally different versions of the same musical event. I wish the authors of **Telematic Performance and the challenge of latency** would have discussed this outcome of their methods in more detail. One question that is left unanswered by the paper is how the music of the Online Orchestra should be represented if it is recorded, or performed in a traditional setting. The composer would have to give some priority in regard to which node should be the master node. One can imagine a recording version to have as many versions of the track as the composition had nodes, although this is left undiscussed in the text.

The Online Orchestra methodology focuses on composed music rather than improvisational music. The design choice of equalling the controlled latency to one quarter note might be hard to negotiate from a musicians perspective when improvising. Musical motifs would be temporally displaced with different downbeats.     
In the online improvisational software NINJAM, the applied latency is usually set to even longer values equaling a chosen number of measures, which leads to even more temporally offset musical results, while still sounding as the tempo is synchronized. (Mills 2019) This enables longer musical motifs to be at least rhythmically coherent , which would have the effect of masking the temporal displacement.

The approach of both NINJAM and The Online Orchestra do to an extent meet Braaschs requirement of viewing the telematic music system as a class of instrument on its own, creating results that are impossible to create with ordinary instruments or models of compositions.

### Conclusion

One can argue that true zero-latency is a utopian goal in telematic music systems, as it will continue to pose an uncertainty based on network instability, and will always be a factor in cross-continental networks due to the speed of light that electric signals cannot exceed. I would even argue that low latency telematic music systems are less inclusive in terms of availability as they will benefit the users with the best network infrastructures and access to the highest standard of computer hardware. With this in mind, alternative approaches that do not replicate traditional performance structures should be welcomed. Hopefully with the result of creating new ideas in music such as temporally different, yet connected musical events.
A musical event that exists both in the past, present and the future at the same time could very well be the music of tomorrow.

<h2>Works Cited</h2>

<font size="3">
<p>Braasch, Jonas. (2009). <i>The Telematic Music System: Affordances for a New Instrument to Shape the Music of Tomorrow</i>. Contemporary Music Review, 28:4-5, 421-432, DOI: 10.1080/07494460903422404.</p>

<p>Rofe, Michael and Reuben, Federico (2017). <i>Telematic
performance and the challenge of latency.</i> The Journal of Music, Technology and
Education. 167–183. ISSN 1752-7074 . https://doi.org/10.1386/jmte.10.2-3.167_1</p>

<p>Mills R. (2019) <i> Telematics, Art and the Evolution of Networked Music Performance.</i> Springer Series on Cultural Computing. Springer, Cham. https://doi-org.ezproxy.uio.no/10.1007/978-3-319-71039-6_2
