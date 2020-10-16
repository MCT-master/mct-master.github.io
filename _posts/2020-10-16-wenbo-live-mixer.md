---
layout: post
title: "A Live Mixer made from mobile devices"
date: 2020-10-16 20:00:00 +0200
categories: physical-computing
author: Wenbo Yi
image: /assets/image/2020_10_16_wenbo_title.png
keywords: physical-computing, TouchOSC, oscHook, EDM
excerpt: "How does it look to control audio effects in real-time using gestures?"
---

## The expectation

For this project, my dream of using my phone as a sensor to perform electro-acoustic music was ended by the frustrating stability of the latest OSX. So I tried to build a system that could change the audio effects with gestures for real-time interaction. I think it would make the EDM live concert even more frenetic if I could incorporate more physical performance into the shows.

## The Demo
<figure style="float: none">
    <iframe width="800" height="480" src="https://youtu.be/_h7xlSXgVPU" frameborder="0" allowfullscreen></iframe>
    <figcaption>Demo with Chi Dao</figcaption>
</figure>


## The construction of a simple interactive system

In general, I use the OSCRouter and TouchOSC Bridge on the computer to implant the Reaper as a central hub for transmitting OSC information from the mobile device. On the mobile side, on the one hand, I use my Android phone's oscHook to transmit light sensor and gyroscope data as part of signals, controlling the bypass of some plug-ins and the amount of reverberation of the track; on the other hand, I use my iPad's TouchOSC to control parameters that need to be precisely controlled, such as Pan, Pitch, EQ, etc. In the Demo, you can see that my left hand primarily controls the TouchOSC on the iPad, and my right hand holds the phone's light sensor and gyroscope.


![Plug-ins on Reaper](/assets/image/2020_10_16_wenbo_reaper.png)


More specifically, I connected oscHook to the desktop and linked the OSC data to Wekinator, a user-friendly machine learning application for classifying data; the reason for this is that the range of data emitted by the sensor is very large; also, delays usually higher than 100ms which make real-time control difficult to achieve. But in the Wekinator, the software processed a wide range of data in different lighting conditions classifying the data as 0 and 1, corresponding to plug-ins on and off. At the beginning of the music, my hand covered the sensor, and this bypassed the EQ and compressor, making the drum sounds soft; and as the development of the music, I released my hand, and the EQ and compression were applied to the track, thus making the music more exciting; Besides, the change in the phone's gyroscope data corresponds to the amount of track sent to the reverb track, and when I flipped the phone over, the amount of reverb increased with the phone's rotation.


![Wekinator](/assets/image/2020_10_16_wenbo_wekinator.png)


I originally wanted to control more of the effect through sensors. Sadly, I found out through practice that the application latency made it challenging to guarantee the result, so I abandoned that idea in favor of controlling more of the tracks in real-time through TouchOSC, a sophisticated OSC control app with multiple presets. It allows user to control the parameters of the PAN and some of the plug-ins precisely with the button. The sound image and pitch shifts in the Demo are all controlled by TouchOSC.

## The problems

As an audio engineer accustomed to using Pro Tools and Logic Pro X, neither of the two well-known DAWs could support different OSC applications well. Obviously, Reaper and Abelton Live are better answers for this project. Meanwhile, I found that when passing OSC data using different platform applications, it often failed to link (e.g., Android to Mac OSX), and my attempts to use FaceOSC to recognize facial movements failed due to my OSX system version. Moreover, when using the light sensor, data that is used during the day does not usually work well in the evening. After spent a lot of time testing different application. I realized the sensors and applications on consumer electronics don't work well for this kind of professional needs, so perhaps using more common tools like Wii controller, digital pad, and custom sensors would be a better choice for this project.

## The reflection

Honestly, this project didn't work out the way I wanted it to for some reason, and when I using gestures to modify sound effects, results was never quite what I was looking for. From my perspective, lower latency and better ways to handle OSC data is what I need to improve in the future. As a fan of electronic music, in my imagination, I'm very looking forward to the possibility of collaborating with a visual designer to design a set of visually aesthetically movements to match the various parameters of music mixing, combining electronic music and dance, which will make electronic music live concert even more exciting!

All in all, the project was quite an interesting experience for me this week, and I hope to have more time to complete a more interesting project in the future!
