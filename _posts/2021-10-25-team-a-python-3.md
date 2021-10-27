---
layout: post
title: "Audio Blending in Python"
date: 2021-09-23 03:00:00 +0200
categories: portal
author: Hugh Alexander von Arnim, Joachim Poutaraud, Sofía González, Oliver Getz
image: /assets/image/2021_10_25_team_a_pyhton_3_thumbnail.jpg
keywords: python, programming, librosa, audio programming
excerpt: "Blending audio tracks based on transients in Python."
---
# Will it blend?
Our most recent crazy experiment concluded with a choir of glitchy cicadas creepily singing in the middle of the night. Never heard glitchy cicadas? Well check this out:  
<p style="text-align: center;">Cicada Madness</p>
<p style="text-align: center;">
  <audio controls>
    <source src="https://drive.google.com/uc?&amp;id=1ocObeJwGLCleAot43oDpWpxSIhPEJf6F" type="audio/mpeg">
  </audio>
</p>
<br />
This audio file was created using these two field recordings:  
<p style="text-align: center;">Recording 1</p>
<p style="text-align: center;">
  <audio title="Input 1" controls>
    <source src="https://drive.google.com/uc?&amp;id=1stHTPwQ1IkQNW2ryUlG742g3et6hcioz" type="audio/mpeg">
    Your browser does not support the audio tag.
  </audio>
</p>  
<p style="text-align: center;">Recording 2</p>
<p style="text-align: center;">
  <audio title="Input 2" controls>
    <source src="https://drive.google.com/uc?&amp;id=1bijN4Q092qZmw04FWaTeiO-kijX7S4H3" type="audio/mpeg">
    Your browser does not support the audio tag.
  </audio>  
</p>
<br />
Keep reading to find out how!
<br />
<br />
# Slice & Splice
As you heard, the audio we ended up with has an eerie vibe, worthy of being featured as a horror game ambience. Our program extracts slices from the field recordings and sequences them together based on audio data. We then export the resulting audio along with visualization and a spreadsheet to track each slice and determine if our program is fulfilling its destiny.

An overview of the process looks something like this:
1. Extract audio data.
2. Make cuts.
3. Compute weighted values, attach each slice to a value.
4. Re-order weighted values (largest value last), and slices along with them, to create a new audio file.

We approached the idea of slicing and splicing by cutting the audio file at its transients. In order to shuffle each slice of audio around we used weighted values computed from the RMS and spectral centroid mean and range of each audio file. There is a randomness to the way it sounds, but this method will actually result in the same order of slices each time the program is run, and each new pair of audio files fed into the it will shuffle the slices differently. We organized all slices in a spreadsheet in order to track down their origins at a later point. That way, we could figure out if the program did what we wanted it to do. Regarding the visualization, we chose to display the signal along with color coding to show where the slices originated. We also exported a visual representation of the data we extracted, the RMS and Spectral Centroid, for each recording. Here you can get an idea of the data we had to work with:

![Feature Distributions:](https://drive.google.com/uc?&id=11NfFcr0TYgOgGZsMXGND7Wzi0McaoO1Y "Audio Data")

We extracted 275 chunks from the first audio file and 314 from the second file, for a total of 589 tiny moments of glitchy goodness. In the image below, you can see how the audio file was sliced, shuffled, and spliced back together. The orange bits are chunks that belong to the first input file, and the red bits belong to the second file:

![Audio Slices:](https://drive.google.com/uc?&id=1hROXUhVk6cAMtMlB4jecqhCdzD02i6NZ "Audio Slices")

Stay tuned for more wacky audio experiments!
