---
layout: post
title: "Sonification of plants through Pure Data"
date: 2020-02-11 22:10:42 +0100
categories: Audio Programming
author: Gaute Wardenær
image: https://drive.google.com/file/d/1bU_z5q5Snls61m5QpcYWMWa0_tgjz5AW/view?usp=sharing
excerpt: "I am not sure if I am going crazy or if I am actually interacting with plants, but here me out here"
---

# Introduction
For this project I wanted to do something I had heard was possible, but never had experienced for myself. The consept has often been used as an explanation for "plant intelligence" and proned as i am to thinking in those ways, I am not totally convinced. Yet... 

I wrote a journal throughout the project and have chosen to publish the entire thing here as a way of capturing the essence of the creative process. Feel free to skip to the bottom where I have written a more comprehensive summary of the project, including the performance. 


## Journal

Ok, my goal now is to make this thing sound a bit more "humane", maybe to the point that it could be used as a legit instrument. 

What I really miss from the original idea is some sort of percussion and melody. 

That's why I decided to implement a step sequencer. I found some inspiration on the internet and made a very simple one from a metro, a selector and a lot of sliders to control the pitch of the oscillator. 

I don't know what happened just now, but it suddenly struck me that I wanted to do something with binaural audio. It should be very simple, just having two oscillators (one for each ear) and pitching one up a couple of hertz. (this was a total digression, but the patch is still in the folder).

Day two of actually working on this! 

The step sequencer I added suddenly got a purpose: I want it to make random melodies from different scales, according to the input value! 

Aaaaaand creativity struck! 

I had the idea that I wanted to make some sort of melody, but I didn't know what it should be. I figured that I might use five different pre-determined melodies for the five different states of the amplitude on the input, but somehow the idea of making this pre-determined didn't seem right. 

Then I figured that I would make it random. Not just a little random, but very random. Like a "random" object feeding into another "random" object kind of random! But still, it would need to reflect some sort of "mood" in the output of the thing. What if I restricted the randomness to scales? This way, state one could be major, state two could be phrygian, state three could be minor, and so on and so forth. 

WOW!

The weirdest thing just happened. 

I am not sure if I am going crazy or if I am actually interacting with plants, but here me out here: 

I soldered the pins of an XLR-plug to three leads, connected to alligator clips. The XLR was then connected to the input of the sound card in order to capture the differing conductivity in the material connected to the leads. 

I touched the ends of the clips together, and sure enough, the signal spiked. 

Since I have a large plant right by my desk anyways, I immediately connected the clips to this plant to find out once and for all if they really do have intelligence. Expecting to be disappointed, I calibrated the input so that the baseline current floated around 0 and 1 on the output and held my breath as I started interacting with the plant. 

To my great surprise and delight, the signal started fluctuating once I touched the plant and the more volatile the interaction, the greater the fluctuation in the signal. WHAT?! 

Ok, there has to be a good explanation for this. 

Of course! The noise I get on the signal comes from the cables I attached to the plant hitting each other and therefore creating "mechanical" noise! I tried to mess around with the cables, shaking them; nothing... No major fluctuations in the signal. 

Aha! I was the one who interfered with the signal with the conductivity of my skin, that must be it! So I put on a pair of plastic gloves and repeated the process. I almost did not believe that the fluctuations in the voltage still occurred at the input! 

Maybe the fact that I rattle the plant made the change, so that the teeth on the clips grinded on the stem of the plant and thereby caused the reaction? That had to be it. I therefore preceded to pinch my green friend while still wearing the rubber gloves, making sure not to rattle the leaves or cause any form of movement in the leaves. Still, there was a reaction! The graph in the array and the sound produced corresponded perfectly with how hard I pinched, almost like a pressure sensor. 

I am sure there has to be a good explanation for this, but right now I am too ecstatic from the results to have any sort of critical opinion on this. 

Allright. 

After the initial excitement of achieving interspecies communication, I proceeded to do two things: 

1: Clean up the patch from something resembling a drunken bird's nest to something a lot neater. It is truly amazing what one can do with some "send" and "receive" boxes and nudging objects around to be symmetrical. 

2: Making the thing sound nice. 

The original patch used a very basic sawtooth oscillator as the sound-generator for the instrument, but since I decided that I wanted only one voice, this started to sound a bit thin by its own. A fuller sound was achieved by adding more oscillators and multiplying them slightly, to spread them out in the frequency spectrum. 

I wouldn't call the sound it makes now "beautiful" but I deem it a lot better than when I started. 

## The performance

To be honest I was very nervous before presenting for the class, since all the other presentations before me (all the other presentations before me) involved patches that were so much more complex and sophisticated than mine. I want blame the lack of time I had to prepare for this due to the seeming conspiration made by the rest of the universe to sabotage my work in PD up to this point, but it was probably a bit of my planning as well. 

Despite my nervousness, I thought the performance went pretty well. 

This might be flattering myself, but I think that me not focusing too much on making the patch any more complicated or overly technical than absolutely necessary was of great help to the creative process and facilitated "out of the box" thinking. 

I guess that the act of bringing a live plant as as the interface for my instrument to class and showing that the patch really worked helped a lot as emotional support during the performance. 


<figure>
    <iframe src="https://drive.google.com/file/d/1sA97-7QDVNyOdA4yjD59JMiCZ6ZQ0wat/preview" width="400" height="480" align="center" frameborder="0" allowfullscreen="true" alt="Mesmerising GUI"></iframe>
    <figcaption>Photo credit to the great Thomas Anda</figcaption>
</figure>

<<figure>
<img src="https://drive.google.com/uc?export=view&amp;id=1sA97-7QDVNyOdA4yjD59JMiCZ6ZQ0wat/preview" width = "50%" align="center" />
<figcaption><strong>My Caption</strong></figcaption>
</figure>

## Reflections on the process of learning Pure Data

Although I had experience in PD from earlier projects done here at MCT and some knowledge of MAX MSP from my bachelor's degree, the last two weeks has been a quantum leap when it comes to learning the software. 

I quickly adopted the process of figuring out where I wanted to go with the idea and then making a patch for it, not the other way around. Having creativity drive innovation has been my preferred way of thinking ever since I in 4th grade refused to learn to do division on paper until the teacher presented me with a real life situations where I had to and this was no exception. 

I feel like so many examples on the internet of the use of Pure Data are done only for the sake of making a patch in Pure Data. In my opinion, the reason for making a patch in PD and not using some product that already exists on the internet should be because the solution to what you want to do does not already exist. The patches presented by my classmates today really reflect the same idea by almost exclusively being original and novel ideas. 

<iframe title="YouTube video player" width="480" height="390" src="https://drive.google.com/file/d/1BRWdEWCqcmts5bwSQsIXwUpVMrCaSK9J/view?usp=sharing" frameborder="0" allowfullscreen></iframe>
A video of me demonstrating the patch

## About the patch

The patch is made entirely out of PD Vanilla -objects. 

Event the reverbs are plain vanilla, so do I need to credit them? If so I will credit the entire Pure Data community.