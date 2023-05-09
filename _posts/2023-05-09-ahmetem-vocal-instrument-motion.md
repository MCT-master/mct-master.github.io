---
layout: post
title:  "A Body Instrument: Exploring the Intersection of Voice and Motion"
date:   2023-05-09 12:14:22 +0200
categories: motion-capture
author: Emin Memis
image: assets\image\2023_05_09_ahmetem_vocal_mocap_cover.jpg
excerpt: "Manipulate your voice with your body"
keywords: motion capture, pure data, motive, python, osc
---

<figure style="float: none">
   <img
      src="/assets/image/2023_05_09_ahmetem_vocal_mocap_banner.jpg" width="50%" />
</figure>

In this post I am exploring the exciting intersection of vocals and motion by developing a system that allows performers to translate their physical movements into sonic processes. I've designed a performance system that allows performers to control and manipulate their voice  in real time using their body movements. By using their bodies as instruments, performers are able to create music that is both highly personalized and deeply expressive.

# Motion Tracking
To capture the motion of the body, I used the OptiTrack system in the Portal and used Motive to capture the position of markers placed on the body. I then sent the positions of the markers and rigid bodies to my computer using NatNet, which a network protocol for streaming motion capture data. I used 21 markers, 18 of them constituting 6 rigid bodies on OptiTrack's plastic rigid bodies. I placed the rigid bodies on the head, hands and feet, and 3 standalone markers along the spine.

One of the challenges in using marker-based motion capture systems is the need to identify each marker uniquely. In some systems, markers come with preassigned IDs, which makes tracking them easier. However, in other systems, the markers do not come with IDs, and the tracking software has to assign unique IDs to each marker. This can be challenging because the tracking software needs to distinguish between markers that are very close together or even touching. In some cases, the markers can move in and out of each other's range, making it difficult to assign a consistent ID to each marker.

To overcome this challenge, we can use various methods to assign IDs to markers. One method is to place the markers in specific patterns that the tracking software can recognize, such as placing four markers in a square shape or three markers in a triangle shape. This is how I use rigid bodies. They are automatically detected and their centroids are calculated and sent over the network with unique IDs.

However, for the spine, I used a marker-based motion capture system that did not come with preassigned IDs. To assign IDs to each marker, I developed a custom algorithm in Python that calculated the distance between each marker and the previous positions. Based on this calculation, I obtained a matrix of distances. I matched each marker to closest marker in based on this matrix. This allowed me to accurately track the movement of each marker and use the data for my research as long as I launch the system standing on T pose.

<figure style="float: none">
   <img
      src="/assets/image/2023_05_09_ahmetem_vocal_mocap_marker_placement.jpeg" width="55%" />
   <figcaption>Marker placement on the body</figcaption>
</figure>

# Audio Processing

Here is the motions that I used and the correspioinding audio processing operation.

|     Motion                                 |     Audio   processing                                     |
|--------------------------------------------|------------------------------------------------------------|
|     Angle of   the head                    |     Stereo panning                                         |
|     Hand   distance (left hand higher)     |     Tremolo modulation frequency and magnitude             |
|     Hand   distance (right hand higher)    |     Delay Feedback                                         |
|     Spine   curvature                      |     Comb. of Reverb, low-pass filter, band-pass filter     |
|     Neck   curvature                       |     Comb. of Reverb, low-pass filter, band-pass filter     |
|     Left foot   lift/press                 |     Boolean control for clearing the loop                  |
|     Right   foot lift/press                |     Boolean control for writing in the loop                |

One of the key features of this system is its flexibility in motion and freedom to move in the room as desired. This allows for a wide range of musical expressions.

The resultant stereo audio is routed to 6-speaker array forming a 225°-sphere suspended from the ceiling, with the user's sitting position being the center of the sphere. The following shows how the speaker is placed with the user.

<figure style="float: none">
   <img
      src="/assets/image/2023_05_09_ahmetem_vocal_mocap_speakers.jpg" width="60%" />
   <figcaption>Speaker positions</figcaption>
</figure>

# Evaluation
I sat down with two talented classmates and a close friend to put my system to the test. I wanted to hear firsthand how the technology impacted their body awareness and musical abilities. The group consisted of a singer, a violinist, and a user experience researcher. They individually tested the system after my general introduction to the genreal purpose and how to use.

<figure style="float: none">
   <img
      src="/assets/image/2023_05_09_ahmetem_vocal_mocap_looper.png" width="85%" />
   <figcaption> There was a display in front of the participants showing
   the waveform of the looping channels with a vertical line showing the time.</figcaption>
</figure>

Overall, everyone liked the system. They all found it creative, expressive and fun to play with. They found stereo panning with head and the delay effect the most natural. They also liked the looping functionality as it creates a room for various possibilities of music creation.

However, there were also points that they mentioned to be improved. One was the latency that is introduced by the wireless microphone, audio interface and the processing time of the effects. Secondly, some of the participants found the pedal motion not natural or something that would take time to get comfortable with. Some participants said that they wanted to see more tracks to record on, loop and cycle for more possibilities.

Overall, it seemed that the system worked in terms of introducing new ways of creating music with voice, and interaction with body motion. It was very exciting to create such an interactive system as it opens up new avenues for musical expression and creativity.
