---
layout: post
title: "Chopping Chopin and Kapustin preludes"
date: 2020-12-05 19:12:53 +0200
categories: scientific-computing
author: Alena Clim
image: /assets/image/2020_12_05_alena_preludes.jpg
keywords: slicing, segmenting, onsets, python, librosa, rms, spectral flatness
excerpt: "Chopping a prelude by Chopin and one by Kapustin and then merging the slices based on their loudness (RMS) and tonality (Spectral Flatness)."
---
## Chopping Chopin and Kapustin preludes

The Scientific Computing module within the MCT4000 course was the longest and most complex. I had some experience with programming from before, but not with anything audio, so this module provided a good introduction to audio processing with Python. The final assignment was a good combination of straight-forward and complex tasks: we had to choose two songs of relatively similar length, slice them and then concatenate all the segments based on a certain feature (this will become clearer in a moment). 

#### The Initial Songs

The melodicity of the final song - can we even call it a song? audio sequence? - didn't matter, I didn't overthink the selection phase. I thought it would b a good idea for the two initial songs to be 2 minutes or less (for computational purposes), so I went searching through Frédéric Chopin's Preludes. I remembered than Nikolai Kapustin, inspired by the way Chopin composed a prelude for each key, did the same in opus 53, with his "Jazz Preludes", so an idea formed: I would chose one prelude by Chopin and one by Kapustin! Pretty smooth, eh? I wanted to chose either the same key or a major/minor combination, but the pairs I checked out were either too different in length or too different in rhythm, so I ended up choosing the Prelude in do minor by Chopin and the Prelude in fa minor by Kapustin - both minor keys, just the way I like them. These are the versions I used:

<figure style="float: none">
    <iframe src="https://www.youtube.com/embed/XeX4X_1_lo0" frameborder="0" allowfullscreen></iframe>
    <figcaption>Chopin - Prelude op 28 no 20</figcaption>
</figure>

<figure style="float: none">
    <iframe src="https://www.youtube.com/embed/K2NIMXa30e8" frameborder="0" allowfullscreen></iframe>
    <figcaption>Kapustin - Prelude no 53 no 18</figcaption>
</figure>

_Note_: For simplicity, I used an universal sample rate of 44100 Hz. For this, I preprocessed the songs in Audacity and changed their original sample rate. I also made sure to normalize the audio and cut off most of the "dead audio" from the beginning and end of the songs, to avoid as much as possible having slices contain no sound (e.g., it would influence the "score" of each slice).

#### The chopping strategy

We were allowed to slice each audio file in an arbitrary number of segments based on any criteria we chose. Before trying anything fancier, I wanted to have a basic, working program, so I started by writing a function that slices an audio input every 2 seconds (every 88200 samples). That worked out nicely from a programming point of view, but the final audio sequence wasn't anything special, it was chopped up without retaining anything melodic from the input songs. 

<figure style="float: auto">
   <img src="/assets/image/2020_12_05_alena_chopin_kapustin_audacity.JPG" alt="The Waveforms" title="Waveforms" width="auto"/> <figcaption>Chopin and Kapustin Waveforms</figcaption>
</figure>

Observing the waveforms of the two songs, I realised that Chopin's prelude was nicely structured in chunks and this gave me the idea to try to split it based on this. So next, I wrote a function what would slice an audio input based on the onsets of the songs, the "peaks" in the melody. I tried the same with Kapustin's prelude, but that ended up chopped into 500 something slices, very very short slices, which wasn't nice at all for the final audio. In the end, I decided to slice Chopin's prelude based on its onsets - it provided 73 slices - and Kapustin's prelude every 2 seconds - it provided 61 slices. 

#### The analysis criteria

Each slice was supposed to be analysed according to some criteria that would provide the basis (of the order) in which they would be merged in the final audio sequence. For this step I had multiple ideas; I thought about using the amplitude of each slice, the spectral centroid (brightness of sound), the root mean square (loudness of sound), or the spectral flatness (tonality coefficient). All these were good ideas, but I wanted something more relevant to the two songs I chose. 

Given that both are classical pieces, played on the piano, I thought the spectral flatness, the tonality coefficient, was most relevant. The way I understood it, the higher thespectral flatness, the less "melodic" the sound is; it would be more similar to white-noise. I thought this coeffficient would be particularly interesting when combined with root mean square, the loudness of a sound. So, I multiplied these to scores, for each slice, to get a score that would represent how loud and noisy they are. A high score after multiplying would mean the slice was particularly loud and noisy, and a low score would mean a quiet, melodic slice.

#### The final sequence and its visualisation

The final sequence consisted of all slices from the two initial songs mixed up, merged based on their spectral flatness multiplied by their root mean square score, in descendant order. The noisiest and loudest slices first and the most melodic ones last. Interestingly, the two preludes proved to be quite different with regards to their loudness and tonality; however, considering that Kapustin's prelude is jazzy while Chopin's all for slow nice harmonies it is understandable. 

It has to be mentioned that I tried to concatenate the slices based only on their spectral flatness and only on their root mean square, but the end result was not particularly nice-sounding or visualy more appealing than the version I settled on. But slicing chopin based on the onsets in the song definitely helped both with the audio and visual output. The final visualisation can be seen below. 

<figure style="float: auto">
   <img src="/assets/image/2020_12_05_alena_output_sequence.png" alt="The Visualisation" title="Color-coded output waveform according to source file" width="auto"/> <figcaption>Output Sequence</figcaption>
</figure>

#### Final thoughts

At a first glance this assignment seemed so complex that I didn't know where to start with handling it. But once I started to go through the guidelines (2345 words! but I always prefer too many details instead of too little especially when it's about a graded, important assignemnt) it was a matter of figuring out how to do it one step at a time. I was nicely surprised to realise I knew how to do most of the stuff - after "transforming" the instructions into programming steps - for example, get an empty numpy array where you will append each slice or go through each row of the pandas dataframe and then update it with the relevant scores, etc. - it started to be clear and a matter of how to handle numpy arrays as audio files. Overall, I quite enjoyed the assignment!

