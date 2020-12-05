---
layout: post
title: "Merry slicemas"
date: 2020-12-05 02:00:00 +0200
categories: scientific-computing
author: Henrik Sveen
image: /assets/image/2020_12_05_henrikhs_chopmas.jpg
keywords: segmentation, slicing, audio, spectral_bandwidth, python
excerpt: "Let it slice, let it slice, let it sequence."
---
The task for this program was making piece of music/audio based on slices from two chosen audio files. It being the 1st of December, christmas songs simply felt quite natural. Though I might not consider the generated outcome an instant christmas classic.

The first song i used is a bossa nova version of [**Let It Snow**](https://open.spotify.com/track/4CAUXLm7i1IRyNyP5ONqx4?si=luvZk1_5RYSXmvqjuWabEQ)

And the second is another bossa nova of [**Up On The Housetop**](https://open.spotify.com/track/0JRAAm2fUX7v1mcVW9gdFz?si=t7K5NrrlT2W9xoS924Thrg)

<figure style="float: auto">
   <img src="/assets/image/2020_12_05_henrikhs_jackjezzro.jpg" alt="" title="he really knows how to work that axe" width="auto"/> <figcaption>Both performed by the one and only Jack Jezzro</figcaption>
</figure>


They're both in the same key, so I expected the generated song to be somewhat musical, which it kind of is and isn't. The bossa nova arrangement does introduce some modulations and slick harmonizing, so it jumps in and out here and there.

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1XmWYykJ7hMQZzvshawnmZRiGbjfwIZX9" type="audio/mpeg">
    Should show a media player
  </audio>
  <figcaption></figcaption>
</figure>

The slicing is determined by BPM, either it's given in the audio file name or calculated by onsets and the librosa.beat.tempo. It is pretty accurate, but putting the the tempo in manually provides greater accuracy of slicing. But then again, you'll need to know the BPM. This is audible in the output file as well. Song 1 i put as 125BPM and it's also quantized, resulting in quite tight slices. The other one is analyzed in the program and is not quantized, so you can hear how it slices a little looser around the beats. Song 1 is the one with most guitar, song 2 is the saxophone smooth one.

I went with the BPM type slicing because it struck me as a musical way of slicing a song. It worked better with newer music which tend to be quantized to BPM grid than older analog music. Even though the task said stick to two song and don't switch, I couldn't help but trying different combinations. It was a nice additional challenge to make the program run with different song, making it more flexible and not too much "hardcoded".

The way it is sequenced is that the mean spectral bandwidth is calculated for each slice of both songs. Since this program is working in stereo, I solved analysis of both left and right channel by appending the left and right slice for slice[x] and then calculate the mean spectral bandwidth of all the samples. This plot shows it all more accurately:

<figure style="float: auto">
   <img src="/assets/image/2020_12_05_henrikhs_output.png" alt="" title="a little hard to see, but you can do it!" width="auto"/> <figcaption>The large dots show how slices are distributed, showing global slice index on increasing spectral bandwidth. I also added a "line" of dots (the small dots) showing the order of slicing. This is not referencing slice indexes, but indicating what song is playing at the Nth position in the song.</figcaption>
</figure>

The CSV file holds the accurate details for the plotted data. I had an idea that sorting after spectral bandwidth would contribute to putting slices with spectral equalities together. Looking at how the slices are picked from the songs, we there is a similarity in how slices from the first half is picked for the beginning and the last slices are put towards the end. There are wildcards all over, especially for song 1 where the intro actually is put at the end, but the tendency is there among the dots still.


### Ending note
I think the output file has nice qualities, though it's far from perfect. To me a program like this could contribute to generate new ideas for chord progressions and melodies based on references. There are lucky accidents here and there. Sometimes it also pretty funny, especially with songs having vocals in them, when the lyrics fall into new meanings.
A nice experience from working with this task was to use something else than random for putting things together. Analyzing the audio and then using that to determine what to do makes more sence, unless you want the randomness. It could also serve as a control for random values. I have tried to work with reordering samples as well, like we've done with the slices here. Applying these calculations and manipulating samples might be something interesting to play around with when christmas gets too chistmassy.
