---
layout: post
title: "Generating Music Based on Webcam Input"
date: 2022-03-23 10:00:00 +0200
categories: portal
author: Arvid Falch, Hugh Alexander von Arnim, Jakob Høydal, Joachim Poutaraud
image: /assets/image/2022_jakobhoydal_webcamThumbnail.jpg
keywords: portal
excerpt: "Do you miss PS2 EyeToy? Then you have to check this out!"
---

<figure style="float: none">
   <img src="/assets/image/2022_jakobhoydal_webcamHeader.jpg" alt="Alternate Text" width="auto" />
</figure>

### Introduction

For people, recognising if somebody is giving a thumbs up is easy. The arm might be a bit higher or lower, or it might be viewed from a slightly different angle, but we can instantly recognise the posture. To programme a computer to do this, however, is a lot of work. Every combination of pixels that can form a thumbs up has to be programmed individually, which requires a lot of time and effort. And even after that, there will probably be a lot of edge cases that aren’t recognised.

However, through the use of machine learning techniques, this becomes a lot simpler. The programme can just be provided with a lot of examples of various thumbs up postures, and after training, will be able to infer that a new posture that it has never seen before is also a thumbs up. The problem here is finding and collecting all of these examples. But what if we could just generate them on the fly, and spontaneously train our programme to recognise new postures? And moreover, what if we associated these postures with sound generation parameters, enabling the flexible programming of posture-controlled music generation systems? This is one of the use cases of the [Wekinator](http://www.wekinator.org/), developed by Rebecca Fiebrink [1]. And to really get an idea of how the system works, we created our own simplified version of this.


### How it works
Our system is based around a [classifier](https://towardsdatascience.com/machine-learning-classifiers-a5cc4e1b0623), a machine learning technique that involves the programme learning to sort input examples into discrete classes. It takes the input from the computer’s webcam, and allows the user to provide examples of up to 5 classes of posture by pressing the ‘q’, ‘w’, ‘e’, ‘r’, or ‘t’ keys while holding the posture that they want the programme to learn. When this has been done, the user can press the ‘spacebar’ and a [Support Vector Classifier](https://towardsdatascience.com/support-vector-machine-introduction-to-machine-learning-algorithms-934a444fca47) algorithm is trained on the postures and classes. When the user then holds the posture again, the programme should recognise which class it is. This information is then sent to a Pure Data patch via [OSC](https://pypi.org/project/python-osc/), which triggers one of 5 sounds. By default, this is just 5 sine waves spread over 5 octaves, but if the user wishes they can alter these to be any desired sounds or parameters for sound generation in the PD patch.

In the video below, you can watch Arvid providing a short demo.

### Video Demo
<iframe src="https://drive.google.com/file/d/1unpa4zKbXelILvJtu8r8ogyOhvj5xC_m/preview" width="640" height="480" allow="autoplay"></iframe>


If you want to try it out or modify the code, it can be found [here](https://drive.google.com/file/d/1d7TEcmdwUOz9vCtpvW5maQwZ6vx-Fl5r/view?usp=sharing) !

# References
[1]R. Fiebrink and P. R. Cook, ["The Wekinator: a system for real-time, interactive machine learning in music."](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiHnMjF6tz2AhXIRvEDHT9WAPEQFnoECAMQAQ&url=http%3A%2F%2Fismir2010.ismir.net%2Fproceedings%2Flate-breaking-demo-13.pdf&usg=AOvVaw2GOYHdwxeFO_Z6RwbEHNe0), 2010, vol. 3.
