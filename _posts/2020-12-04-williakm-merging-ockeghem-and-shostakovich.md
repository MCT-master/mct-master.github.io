---
layout: post
title: "Chop it Up: Merging Rearranged Audio"
date: 2020-12-04 15:00:00 +0200
categories: scientific-computing
author: Willie Mandeville
image: /assets/image/2020_12_04_williakm_scissors.jpeg
keywords: slicing, segments, python
excerpt: "Taking beautiful music and making it less so."
---
## The Task
After several weeks of learning the basics of Python in the Scientific Computing module of MCT4000, the reckoning finally arrived: the final exam.

*The mission, should you choose to accept it (and you better):*
Combine and reorganize segments of audio from two distinct audio files in an order dictated by a specific trait. Here’s how it went for me.

As the aural qualities of the final reorganized audio file didn’t matter within the context of this assignment, I didn’t spend a whole lot of time considering the musical properties of my two files. My only aural interest in these selections was ensuring that the instrumentation between my source files was noticeably different.  I selected a Kyrie from a Mass by Johannes Ockeghem and a Fugue for piano by Dmitri Shostakovich. Each less than two minutes long, these selections are both fairly monochromatic in texture, but I find them pleasing.

Having selected these two pieces, I then decided to divide each into 5-second segments and reorganize these segments by ascending maximum amplitude within each segment. All fairly straightforward once I wrapped my head around the right steps.

Because these audio files are, of course, copyrighted I won't be including them here in my post, but do yourself a favor and go look these pieces up. They're the opening Kyrie from Ockeghem's *Missa prolationum* and the second Fugue from Shostakovich's *24 Preludes and Fugues*.

The rearranged final file is not particularly interesting sounding as a piece of music, but does yield some interesting points for consideration, particularly when its visualization is examined.

<figure style="float: auto">
   <img src="/assets/image/2020_12_04_williakm_audiovisualization.png" alt="The Score" title="Comparing Amplitudes" width="auto"/> <figcaption>Comparing Amplitudes</figcaption>
</figure>

Because the segments were ordered by peak amplitudes within each segment, there was no guarantee that the general aural aesthetic of each one would actually trend higher amplitude as the file progressed. This can be seen in the visualization above particularly toward the end of the combined piece where there actually is a visible segment characterized by low amplitude. Since this segment also happens to contain an accented downbeat, it has a moment of high enough amplitude to appear late in the rearranged file. A rearrangement of the 5-second segments by average amplitude within each one would likely have yielded a noticeable different structure.

Another element of this combination of files that I find interesting, and the driving force behind why I wanted files with different instrumentations, is the matter of how sonic structure is actually a key element in how ensemble music is shaped. Although I'm certainly not an expert in recording strategies for vocal music or piano music, it seems obvious that different approaches must be taken. The Kyrie, coming initially from the mouths of several singers, in comparison to the Fugue, featuring multiple voices that all emanate from a single source, raises questions for me about musical shape. Once the multiple voices get involved in the Kyrie, the amplitude shown in its visualization never seems to dip to the same degree that the Fugue'd amplitude does in the course of its duration. 

<figure style="float: auto">
   <img src="/assets/image/2020_12_04_williakm_kyrie1.png" alt="The Score" title="Kyrie Shape" width="auto"/> <figcaption>Kyrie Shape</figcaption>
</figure>

<figure style="float: auto">
   <img src="/assets/image/2020_12_04_williakm_fugue1.png" alt="The Score" title="Comparing Amplitudes" width="auto"/> <figcaption>Fugue Shape</figcaption>
</figure>

## Final Thoughts
Since the point of these blog posts isn't to list line-by-line the specifics of each line of our code but to instead briefly outline some thoughts concerning how and what we produced, I'll leave these last thoughts here. Is the audio I produced here very interesting? No, not at all. Would it be a victory for anyone who had been using Python for more than a few weeks? Definitely not. Was it a victory for me? Absolutely.  
