---
layout: post
title: "Graphic score no. 7"
date: 2020-12-05 00:00:00 +0200
categories: scientific-computing
author: Anders Lidal
image: /assets/image/2020_12_04_anderlid_exam_front.jpg
keywords: python, slicing, segmentation, contemporary music, coding, rms, programming
excerpt: "So … it’s 00:01 in Oslo, December 1st, and the final SciComp assignment is here …
And … it’s a though one …
2345 words … AI must be involved here …"
---

Even though it initially stroke me as a hard task, it also seemed to be some fun ways of handling audio in here, slicing two songs and rearrange all slice into one new.

### Graphic score no. 5
I decided to go for a program that outputs audio-files inspired by John Teske’s Six Graphic Scores, no. 5, starting with heavy loudness moving towards silence. Teske’s no 5 also evolves around a center pitch, which I didn’t work with, I mainly wanted to make my output waves look similar to his graphic score, which essentially should give a somewhat recognizable audible output.

<figure style="float: none">
    <iframe width="auto" height="320" src="https://youtu.be/bE7wrqxK-Ks?t=776" frameborder="0" allowfullscreen></iframe>
    <figcaption>John Teske - Six Graphic Scores, no. 5</figcaption>
</figure>

So my plan was slice my two songs in as small segments as total program execution time allowed me, calculate the RMS for each segment, and put them together in descending order from highest value. Reason I wanted smallest possible segments was of course to make the new song a composition in its own, rather than a mix of the two sources.

### Decisions
As always when presented a task, I spent a lot time on deciding what to do, in this case I spent that time remixing one of my own songs, or rather making a «radio-edit» of the 9 minutes original. During the time I spent radio-editing, I had my plan, and chose Arne Nordheim’s «Den Lille Prinsen» as the other song. Within these two songs there should be both high values RMS as well as low values.

Choosing songs could be crucial, since I still didn’t know how long the segments would be. The shorter segments, the less it would matter, I figured. A sample is the smallest possible segment, and then the songs itself wouldn’t matter too much, but moving towards several seconds, it could be an issue.

### Slicing
After brainstorming for five hours, staring out in the air for four, 17 hours of sleeping, 26 hours of googling, walking around my neighborhood for five hours, and15 hours of writing and testing my code, I ended up with a program that sliced my songs in segments of 150 ms, sorted and played them back in descending order from the RMS-values.

<figure style="float: auto">
   <img src="/assets/image/2020_12_04_anderlid_exam_wave.jpg" alt="Alternate Text" title="Waveform, descending loudness" width="auto"/>
   <figcaption><i>Screendump of waveform from Logic</i></figcaption>
</figure>

The short length of the segments should indicate that whatever input I use, the output will be a new composition, rather than a remix of the two songs. And to me the sonic result is actually very appealing to me, which brings me to the …

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/1MgAfA148tp_PKap7DYzGmMks6LqtpqK5" type="audio/mpeg">
  </audio>
</figure>

1MgAfA148tp_PKap7DYzGmMks6LqtpqK5/view?usp=sharing

### Conclusion
The very last words in the assignment text are «The sonic appeal of the output of your program does not contribute to your grade.»
To motivate myself, I had the sonic appeal of the output as one of my goals for this task, but what’s appealing to me, might not be appealing to you, so leaving it out the grading is probably a good idea.
At the end — apart from some very frustrating moments — I had some good 72 hours working with this, and despite all the things I know should be done better and more effective, I’m very happy with the result.
