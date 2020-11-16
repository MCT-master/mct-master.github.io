---
layout: post
title: "Zoom here & Zoom there: Ambisonics"
date: 2020-11-14 15:00:00 +0200
categories: portal
author: ALena Clim, Abhishek Choubey, Leigh Murray
image: /assets/image/22020_11_16_abhishec_ambisonic_feature.jpeg
keywords: zoom, immersive, reaper, iem, binaural, ambisonics, Audio, virtual driver
excerpt: " A more natural way of communicating online, wherein it feels like all the members are in the same room talking."
---

## Zoom here & Zoom there: Ambisonics

Ever since we started this digital semester as part of the MCT program, we knew we were in for a ride. With each of us sitting at our homes in different parts of the world, riding on the Zoom ferris wheel, resisting that urge to have snacks midway the meeting (sometimes giving up and having them), we kept trying to make the experience more immersive. With our first class in [HighFidelity](https://www.highfidelity.com/) we tried to host ourselves in a more natural way, as it created a spatial map of our voices making it easier to follow each other. After trying multiple software to make the jamming experience more than just an exchange of audio, we tried to do a similar thing during the workshop in Ambisonics, using [Zoom](https://zoom.us/) as the exchange platform.

#### Workshop Task:

The task seemed easy: integrate an ambisonic “effect” within Zoom, to simulate the organic way of having conversations. With the voice of each member coming from a different direction and fooling the HRTF into believing that our course mates are sitting right beside with their faces getting displayed in Zoom it was a pretty weird but an interesting experience. Put simply, the aim was to explore a more natural way of communicating online, wherein it feels like all the members are in the same room talking.


#### Setup:

All members of Team A lie at the Windows end of the spectrum and _spoiler alert_: this side of the spectrum isn't as smooth as it could (should?) - we had our fair share of fails and wins while setting up the Ambisonical Zoom.
So, let’s start detailing: to integrate ambisonics into the otherwise flat and mono sound of Zoom you need an external software which does this, i.e. maps the input audio into the spatial audio field  and then passes it to a binaural decoder and to Zoom via a routing driver.

The first part of this signal flow is achieved by using __Reaper__ as the host DAW and [IEM plugins](https://plugins.iem.at/), to manipulate the audio into an ambisonic sound. The input audio from the __microphone__ is received in as an audio track in Reaper, and is processed by the __RoomEncoder plugin__. This audio is sent to the master track in Reaper which has the __Binaural decoder__ by IEM loaded and then outputted to Zoom via the audio driver __Virtual Cable__ by [VB Audio](https://vb-audio.com/Cable/). A scheme of the process can be seen below.

![Ambisonics Signal Flow](/assets/image/2020_11_16_abhishec_ambisonic_signal_flow.jpg)

![Ambisonics plugins in Reaper](/assets/image/2020_11_16_abhishec_ambisonic_reaper.png)

Don’t forget to select __Cable Output driver__ as the input device in Zoom’s audio settings.

![Zoom Setting for Ambisonics](/assets/image/2020_11_16_abhishec_ambisonic_zoom_settings.png)



#### Our experience:
Windows has always struggled with multiple software that use a single audio device. Since we all had different sound devices, a mix of internal and external sound cards, we faced different issues and ultimately were unable to get this system working between the three of us.  For example, for one of us, initialising the soundcard in Reaper would cause all Zoom audio to be lost, and this could not be rectified without a restart, making it difficult to communicate with other teammates while trying to get the system working.

Some of our classmates kept their ambisonics settings activated when returning to the main communication room in Zoom, and, after several months of hearing only single channel/centred voices, it was a nice surprise to hear some of the voices from different directions. In real life it is never the case that the exact same sound waves hit both eardrums, even if the sound comes from straight in front or back of you. Because of this, the unnatural way of listening while in a Zoom meeting needs more focus, so, even slightly offset audio felt better and required less mental effort.

#### Conclusion:
It would be great to have this _ambisonic feature_ as a built-in of Zoom, or as a standalone program that does all the processing for you.  Having to get the soundcard to play nice with Reaper, with the virtual audio device (VB-CABLE Virtual Audio Device) and with Zoom, as well as setting up the correct ambisonic routings in Reaper for the master tracks and input tracks is definitely not an user-friendly solution.  It would also be interesting to try other solutions like [Røde’s soundfield VST](https://www.rode.com/soundfieldplugin), which requires less configuration and doesn’t need a DAW that supports multiple audio channels per track. Overall, it was a nice and fruitful experience that helped understand the theory behind ambisonics.
