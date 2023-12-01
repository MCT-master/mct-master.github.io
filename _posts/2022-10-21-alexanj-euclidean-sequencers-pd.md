---
layout: post
title:  "Euclidean Rhythms in Pure Data"
date:   2022-10-21 15:00:00 +0200
categories: sound-programming
author: Alexander Wastnidge
image: /assets/image/2022_28_11_alexanjw_euclid_cover.jpg
excerpt: "What are Euclidean Rhythms and how can you program them?"
keywords: Pure data, Euclidean rhythms, Euclidean sequencer
---


The idea first posited by Godfried Toussaint in his paper "The Euclidean Algorithm Generates Traditional Musical Rhythms" for using mathmatics to generate rhythmic elements has been applied to modules in the Eurorack modular synth ecosystem for some time now.  The basic principal is that given a total number of "steps" in a rhythmic sequence and a chosen number of desired events within that sequence, the algorithm will attempt to space those events evenly, thereby creating pleasing rhythmic parts.  [This video demonstrates one such module in the Eurorack ecosystem](https://youtu.be/dyyUOOX5P0Q)

Drawn in by their balance of immediacy, unpredictability and musicality, I set out to program useable Euclidean Rhythm sequencers using Pure Data.

### Rhythm Sequencer

<figure style="float: none">
   <img
      src="/assets/image/2022_11_28_alexanjw_euclidean_seq.jpg"
      style="max-height:600px; width:auto;" />
   <figcaption>First implementation</figcaption>
</figure>

This first implementation is based on the one found here by Andrew Brown: https://www.youtube.com/watch?v=lCcGeVXHkbE

This gives user input for number of notes and "rotation" which is an offset control.  You can see the signal flow and the maths at work here.  The output can be the float number or it can be taken from the "bang" to trigger something within a patch.  This works well when connected to percussive sounds.

The user interface allows for fast input of the available values.  Randomising these values can also yield unexpected but pleasing results.

Expanding this concept further I have also been building sequencers for melodic purposes as well

## Eucliean Melodies

By combining several sequencers in parallel, each with their own designated notes, this implementation of euclidean sequencing allows for the generation of melodic parts.

<figure style="float: none">
   <img
      src="/assets/image/2022_11_28_alexanjw_mel_seq.png"
      style="max-height:600px; width:auto;" />
   <figcaption>Sequencer Swarms</figcaption>
</figure>

For monophonic voices, four sequencers is a good number for generating patterns.  Bass lines, lead lines, arpeggios and more are possible in this configuration.  I have experimented with both chromatic and scaled note selections, the latter working especially well for generative/randomised patterns.

For polyphonic voices, greater numbers of sequencers can work well to create complex parts and swarms of notes.

### Do Try This At Home

My Euclidean Sequencer implementations are available from this Githib repository: https://github.com/ajwast/Euclidean-Sequencers-in-PD

You are free to inspect, use and adapt them as you see fit.


### Bibliography/Further Reading

["The Euclidean Algorithm Generates Traditional Musical Rhythms" by Godfried Toussaint](http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf)


A deeper dive into Euclidean sequencers in Eurorack from mylarmelodies

<iframe width="560" height="315" src="https://www.youtube.com/embed/EMhbDbMcLBY?start=470" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



