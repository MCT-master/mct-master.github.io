---
layout: post
title: "Strange Fragmented Music"
date: 2020-12-08 08:00:00 +0200
categories: scientific-computing
author: Lindsay Charles
image: /assets/image/2020_12_08_lindsay_rms.png
excerpt: "A strange song from Sequencing fragments of stranger things and Astronomia "
keywords: Python, Librosa, Programming, Slicing, Tempo, Final
---

### Task

The task given to us was to segment two audio files in an arbitrary criteria and then sequence the segments back
into a single audio file using a spectral feature to put them back in order, followed by the visualization of the audio and a CSV file containing the details of the audio segments

### Strategy applied

The songs I chose were two covers I made:
 1.Stranger Things, 2.Astronomia.

Both were my favorites to play. They had lots of synth sounds and had the same length but varied in tempo and key.
The slicing done on them was based on seconds, every slice was 1 second long on both the songs.
I computed the spectral feature RMS(root mean square) of each segment and used the ascending order of the RMS values of both songs to sequence them back into one audio output file.


<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1qjoZmZQAWtCf_TnGryXbV4eNv7TwFw_6" type="audio/mpeg">
    Should show a media player
  </audio>
  <figcaption>Stranger things.wav</figcaption>
</figure>


<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1qpaWJXpnAfHVmjQF8S6fPnyd0afIi2U0" type="audio/mpeg">
    Should show a media player
  </audio>
  <figcaption>Astronomia.wav</figcaption>
</figure>


<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1BulevjKsSHxtCXgJzlloGN14pnlvHljB" type="audio/mpeg">
    Should show a media player
  </audio>
  <figcaption>Output.wav</figcaption>
</figure>



![Audio Output](/assets/image/2020_12_08_lindsay_output.png)

### Reflection & Learnings
The slicing section took me less time to implement, but rejoining or sequencing took some time to code and getting them to produce a track was quite a task for me.
On the second day evening, an unfortunate event took place, where my PC crashed, all to find out that my hard drive had failed.
I tried solving the issue early next day, but failed to do so.
Somehow I used my sister's PC, installed Python and started coding from where I left off and thankfully finished before the deadline.
Keeping in my mind the output I was looking for, I initially sliced the segments according to the tempo, but the code didn't seem to work so, I went ahead with slicing with time as 1 second.
The output track sounded very Strange.
I learnt to be prepared for contingencies.
