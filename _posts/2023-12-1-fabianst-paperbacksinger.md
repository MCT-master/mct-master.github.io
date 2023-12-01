---
layout: post
title:  "The Paperback Singer"
date:   2023-12-1 10:00:00 +0200
categories: interactive-music
author: Fabian Stordalen
image: https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_12_1_fabianst_frontcover.jpg?alt=original
excerpt: "An interactive granular audio book"
keywords: ims, granular sythesis, nime, hci, microsound
---

# Introduction
In this blog post I will detail how I created my Paperback Singer. The Paperback Singer is an interactive audio book powered by a granular synthesis engine controlled by a paperback book. Inspired both by the concept or granularity, microsounds and short-term memory, the instrument is able to play back audio files and it tries to sonify the process of remembering what has just been read on a page by using audio buffers and IMU sensor readings. 

All these actions are what the Paperback Singer is capturing and using as control signals for the audio engine. The goal was to make the user more aware of all the ways their body moves and subconciously interacts while reading. All movements are captured by an [Inertial Measurement Sensor (IMU)](https://en.wikipedia.org/wiki/Inertial_measurement_unit) and a [Flex Sensor](https://en.wikipedia.org/wiki/Flex_sensor) while a [photoresistor](https://en.wikipedia.org/wiki/Photoresistor) is used for switching between playing modes. The instrument features two different modes of playing meant to represent the act of reading and remembering. Which a player can seamlessly choose between by opening and closing the book.

<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_12_1_fabianst_frontcover.jpg?alt=original"
  height="500"
  width="400">
  <figcaption>
    <span class="caption">Front view of the Paperback Singer</span>
  </figcaption>
</figure>

## What is Granular Synthesis?

The Paperback Singer uses granular synthesis which is an unique sound processing technique where you take a segment of audio and slice it into small "grains" between 10-100 milliseconds and then play them back. The technique was first proposed by physicist Dennis Gabor in 1947 but it wasn't until 1959 a piece was made using his theory. Iannis Xenakis *Anlogique A-B* from 1959 is considered the first granular piece. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/sOGkhekIGzo?si=eJc2LN16cg3mymWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# Designing the Paperback Singer

## Metaphor 1: Word Grains

When designing the Paperback Singer there were multiple methaphors I wanted to explore with the instrument since just creating a granular synth would not be too exciting. The first thing I tried to to was to transfer the concept of granularity to something different. That's how I came up with the idea of using a book.

If you think about it then reading is a sort of granular activity. You can divide a book into chapters, sections, paragraphs, sentences, words and finally individual letters. In this way you end up with a sort of *word grain* you can play around with.

## Metaphor 2: Subconscious Interactions
The next step was to come up with a way of controling these word grains. I tried to think about in what way you interact with a book while reading and quickly realized that this is quite an interesting topic in itself. When reading you are usually fully immersed in the text in front of you, making you unnaware of all the ways you are interacting with the book itself. You are moving it around and adjusting it in various ways to enhance the reading experience. These are the movements I wanted to capture and use to control the granular synth.

### Capturing Movements

To capture these movements I added an IMU-sensor to the book. An IMU sensor is a device that measures an object's movement using accelerometers, gyroscopes, and magnetometers. It gives information about acceleration, rotation, and orientation. In my case I was interested in using acceleration and pitch, roll, yaw data which is obtained by combining the gyroscope and accelerometer data, this is called [sensor fusion](https://en.wikipedia.org/wiki/Sensor_fusion).

<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_12_1_fabianst_sideview.jpg?alt=original"
  height="400"
  width="500">
  <figcaption>
    <span class="caption">Side view of the instrument, the IMU sensor is on the top of the book to the left</span>
  </figcaption>
</figure>

## Metaphor 3: Short-Term Memory
The final metaphor I wanted to explore was that of short-term memory. When reading you will often forget something you've just read. I wanted to explore this concept with my instrument and so I came up with two different modes of playing. I called these *reading mode* and *memory mode*. To switch between these modes you simply open or close the book.

Reading mode is engaged when opening up the book. A photoresistor is used to recognize this gesture. While in reading mode the instrument simply plays back one of the audio files loaded with some simple ways of controling the volume, pitch of the audio file and duration of each indivual grain. You're also able to switch between audio files by bending the front cover, activating the flex sensor.

<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_12_1_fabianst_openbook.jpg?alt=original"
  height="500"
  width="400">
  <figcaption>
    <span class="caption">The instrument in reading mode with the photoresistor on the right</span>
  </figcaption>
</figure>

Memory mode is enganged when closing the book. When in memory mode the synth uses the last 10 seconds of audio as it's input. In memory mode you have more extensive control over the granular synthesis parameters of the system. You're able to scrub through the recorded sound and focus on specific parts of it.

# Reflections
Designing and conceptualising this instrument was quite fun and challenging. Personally I was very happy with the metaphors I came up with and how they played a part in the system itself. I conducted a short user study with some of my fellow students and got some great feedback on the instrument. They quite liked how the instrument was played and all the possible sounds it could produce.

There were quite a few challenges along the way, the biggest one being processing power constraints. The system is quite CPU hungry and would often go above 100% so I had to work hard on optimising it before performing.

From a performance perspecitve it is quite easy to explore different sounds and textures. I would love to add more functionalities to the system making it even more engaging to play. Like some effects or the possiblity of placing different grains in stereo.

# Demonstration
I was lucky enough to play a short concert using the Paperback Singer. This was quite a fun experience to finally get to showcase what I've been working on all semester and hear the feedback from the audience.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ySrjSWU_Mf8?si=XV4-pYmfXiAKN-m7&amp;start=249" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>