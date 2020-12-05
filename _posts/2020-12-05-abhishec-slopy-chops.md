---
layout: post
title: "A new season of chopped music"
date: 2020-12-05 22:00:00 +0200
categories: scientific-computing
author: Abhishek Choubey
image: /assets/image/2020_12_05_abhishec_chop_excerpt.jpg
excerpt: "The arbitrary mixing of two seasons (two songs representing seasons)"
keywords: Python, Librosa, Programming, Slicing, Tempo, Music, Patrice Baumel, House Music, Ambient Music, Remix, Editing
---
#### The Task

The task was basically to chop pieces of two existing tracks and then rearrange them in a manner defined by a property of those chops into one single file!

#### The idea

I started with two songs called sender and receiver by Patrice Baumel, released in his EP called [**Transmission**](https://open.spotify.com/album/0ATwhE2Mf31xPWD0RSOohY?si=n73ljiRBTwSNhzGANG59sA). Both these songs are fairly similar in there technical as well as aesthetic values yet so distinguishable which is what I love about the EP and so, I thought it would be interesting to hear an arbitrary remix of the songs, but the processing time to remix these songs was turning out to be way above the permissible limit so I had to drop them in between my code. I thought I was back to the blank plate, but came two songs that I produced for artwork to save me, sometimes back I made songs that represented four seasons in the year, and so I took winter and autumn and tried to make a unique season out of them.

You can listen to both the songs down below:


**Winter Texture:**

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=133aC4BPjrZlerOfW5o1R03LY6QpVjQ9_" type="audio/mpeg">
    Should show a media player
  </audio>
  <figcaption>Winter</figcaption>
</figure>


**Autumn Texture:**

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1pfBP21z4PCjTxkLYa4E_lVVJo7j6FWDa" type="audio/mpeg">
    Should show a media player
  </audio>
  <figcaption>Autumn</figcaption>
</figure>


#### The work

I started by making three-second slices of the songs, after that, I calculated RMS values of each of these chops and stored them into a CSV file, which also had information about the slicing points or the starting point of the slice. The sorting of these segments according to the increasing RMS values of these segments frustrated me a lot, as it would sort the segments but the final output did not merge into one another, just one after the other. After a lot of google searches and brainstorming plus a broken laptop charger that I had to repair and solder myself and the help from some of my peers, I understood that since I made the songs, one is less in volume than the other(as the client wanted it that way), and since RMS represents the average level of the signal my winter texture had low values than the autumn texture so my final output became a concatenation of two songs remixed within themselves played one after the other, and I kept thinking for a very very long time that something is wrong with my code. The final output was nevertheless a good mix of the songs but didn't quite fit mine and assignments expectation. But it was interesting to see the waveform, as it is clearly seen in it how the RMS values are increasing. After the submission, I ran the program on the First two 6 and half minute songs and the code processed them as intended too, which mixes them one after the other and created a 13-minute output file.

you can listen to the final season output and the 13 minute output down below:

**Season Output:**

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1hIwmhGxtHHdV6Pzvl4_3YYqimJ7zsx_b" type="audio/mpeg">
    Should show a media player
  </audio>
  <figcaption>The Hybrid Season</figcaption>
</figure>

**The 13 minute Transmission Output:** (Receiver & Sender by Patrice Baumel - Mixed)

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1EAxNj0XNWWrYbUxpZNVGM63M_Ey6GBox" type="audio/mpeg">
    Should show a media player
  </audio>
  <figcaption>The sent & received</figcaption>
</figure>

The season mix waveform with increasing RMS values:

<figure style="float: auto">
   <img src="/assets/image/2020_12_05_abhishec_waveform_rms.PNG" alt="Alternate Text" title="Waveform, ascending RMS loudness" width="auto"/>
   <figcaption><i></i></figcaption>
</figure>


#### Final Thoughts:

This assignment taught me a lot, which also includes life lessons, that bad things can happen anytime, and sometimes you should take a step back and see the situation from a broader view. At the first look, I felt that assignment was very deep and it would be hard to complete it, but finally, when I started working on it some time I felt confident about it, and sometimes I got afraid that I would have to submit an incomplete assignment. Coming from not so good coding background I felt the scientific computing module was the best introductory module to the fascinating world of audio programming, and the assignment was a good amalgamation of the things taught in it. I had my ups and down and although I am not satisfied with the final result, I feel the experience as a whole was worth it.
