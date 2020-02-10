---
layout: post
title: "The MIDI Remixer"
date: 2020-02-08 12:00:00 +0200
categories: Audio-Programming
author: Aleksander Tidemann
image: /assets/img/Tidemann/bach.jpg
excerpt: "This sequencer based poly FM-synthesizer invites its users to remix and play with some of Johann Sebastian Bach's most famous preludes and fuges."
Keywords: Audio Programming, Pure Data, MCT4048
--- 

## Overview 
The MIDI Remixer is a sequencer designed to remix and play with some of Johann Sebastian Bach's preludes and fuges. The application reads and stores MIDI-files before letting the user control which sections of the composition to sequence upon through a poly FM-synthesizer featuring external OSC-controls.

<iframe width="560" height="315" src="https://www.youtube.com/embed/p8KCVo8fYVU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## System
# MIDI Storage

An application that allows someone to sequence different sections of a MIDI-file needs to have a system where the MIDI information is labeled, timestamped and stored for later retrieval. I decided to base my MIDI-storage device with cyclones [coll] object following MIDI execution objects such as [seq] and [midiparse]. If correctly done this would allow the user to index any part of the MIDI-file they wanted.

<figure text-align="center">
<iframe src="https://drive.google.com/a/uio.no/file/d/1DY0B8BAmGymgEor3b6eTQ5xJymex2vDP/view?usp=sharing" width="640" height="400"></iframe>
<figcaption>Coll</figcaption>
</figure>

The overall logic of the storing mechanism can be described as such; when reading a MIDI-file to the [seq], and executing it with a ”start" message, the MIDI information (note and velocity) is split, packed and indexed into the [coll] object. Ensuring careful scheduling was crucial for this storing process to work.

I figured out that the best way to index the [coll] was at the very beginning of each step by using the first note-on value from the steps (MIDI sequences) starting with "index 0", which simply functions as a blank index. This little hack properly ensured correct scheduling in all cases, as the image below shows.

<figure text-align="center">
<iframe src="https://drive.google.com/a/uio.no/file/d/1XImLnvBKaJWNfbhH6YC_-t3jCgvat5Yo/view?usp=sharing" width="640" height="400"></iframe>
<figcaption>Scheduling</figcaption>
</figure>

However, this method has several limitation when working with polyphonic compositions which I will discuss further in the reflection below.

# Trigger Mechanism

I considered several retrieval mechanisms for accessing and playing the stored MIDI for this application. My first idea was to use piezo transducers and drumsticks as triggers. However, I ended up with an internal sequencer system because it is easier to use and enables users to create different, interesting and more meaningful content (remixes) faster.

The sequencer features the following functions:

* You can choose how many steps you want to loop. This enables the user to set the whole "track" on loop if desired. An 8-step loop is default.
* There are eleven 8-step presets the user can choose between (highlighted in green). These represent different sections throughout the stored composition. The starting point of these presets can also be altered by clicking "new presets". There is also a way to go back to the original presets. 
* A BPM navigator so the user can raise or lower the speed at which the notes play in succession. 
* A simple drum machine that solidifies the true techno-barouque experience. 

# Synthesis

The polysynthesis of the application was inspired by a [Youtube Tutorial](https://www.youtube.com/watch?v=mvtN7de6Oko) on building simple FM-synthesis in Pure Data, as seen in the image below. I went for something very simple and melancholic due to the previously discussed purpose of the application. Therefore, I believe too much sound control and complexity in the synthesis could distract the user from the application main purpose.

<figure text-align="center">
<iframe src="https://drive.google.com/a/uio.no/file/d/1_kCl5EBGmioHCc8DXBVhqIJNDoupxCEq/view?usp=sharing" width="640" height="400"></iframe>
<figcaption>FM</figcaption>
</figure>

However, not all parameters all fixed. I implemented some OSC-control to effect something resembling a filter (modulation index) as well as the total reverb amount. The OSC-control messages come from TUIOpad, a smartphone application that sends X and Y parameters, among many, to the patch in realtime.

## Reflections

During the development of this project, a few things caught my attention which is worth discussing/reflecting upon. First, my MIDI storage method did not end up to be as elegant as first expected. Another approach could be to use a different indexing method that would write note on-and-off values in different indexes, making full use of the [poly] functionality. A third, and perhaps a better, way could be to have an abstraction before the [pack] object that stores and sends the index value with a note value first, before sending the same index complete with note duration (when note-off is received) later. The [coll] could then be rearranged chronologically, from first to the last index, after the writing process is complete.

On a related note, this method would still require a realtime storing process which is quite time-consuming. To achieve faster writing speeds, which is possible with the [seq] object, one can not use the [timer] object to calculate note duration as the latter example would require and what my application uses. This could be avoided if there was an object which could dump out the duration of each MIDI-notes at non-realtime speed. 

However, considering my sequencer trigger mechanism, I believe my method works just fine for the task at hand.

Finally, my choice of trigger mechanism is an action that inevitably restricted and limited the boundaries of my project. In theory, anything that bangs could function as a sound trigger here. This leads me to reflect on other possible applications for my remixing sequencer. It would, for instance, be interesting to modify the application to fit an installation setting, where users interact with the MIDI via gestures/movements or manipulation of objects in a confined space, or an educational setting where the music theory and modern relevance of Bach's music were more in focus.

## References

Really Useful Plugins. (2019). *PureData Tutorials - rich synthesis (6)- FM.* YouTube. Online at: https://www.youtube.com/watch?v=mvtN7de6Oko 