---
layout: post
title: "Audio-video sync"
date: 2021-11-15 22:00:00 +0200
categories: portal
author: Anders Lidal
image: /assets/image/2021_11_15_anderlid_txt.png
keywords: latency, audio, video, audio-video sync, syncronisation, composition, lip-synchronized, lip-sync, synchronisation
excerpt: "Due to the fact that sound travels a lot slower through air than the light, our brain is used to seeing before hearing."
---




[The Advanced Television System Comittee, Inc, (ATSC)](https://www.atsc.org) is an «is an international, non-profit organization developing voluntary standards for digital television.» According to the ATSC Implementation Subcommittee, *“The sound program should never lead the video program by more than 15 milliseconds, and should never lag the video program by more than 45 milliseconds”.* Because the speed of light is so much faster than the speed of sound (299 792 458 m/s [light] vs approx. 343 m/s [sound]) our tolerance for leading audio is less than that for lagging audio.

#### Part 1: Inbetween the audio and video
For the trial-lecture movie, I wanted to explore some post-production syncronisation-tools. A tool for syncing recordings from multiple cameras and/or sound recorders is [Syncalia](https://syncaila.com) which is free to use with all functionalities the first 20 days. So I decided to use my iPhone, my Sanyo Xacti camera and my Zoom H2N sound recorder for some testing of this. I also had to find another video-editor than the usual iMovie, one that is compatible with Syncalia. And since DaVince Resolve is free, and also a very powerful video-editing tool, I decided to go for this.


#### To sync or not to Syncalia
After having downloaded the footage (with sound) from my two camera sources and one sound source, I was looking forward to have Syncalia doing all the syncing, making further editing a lot easier for me.
To use Syncalia, you basically put all footage from each camera on their own layer, same thing with the sounds; one layer containing sound from one (and the same) source. No matter where on the timeline you put it, it should be fine. Then you export an .xml or .fcpxml, which are small text-files containing metadata about duration, aperture, lenses, recording time and such. Syncalia opens these files in a swoosh, and short videos like this is synced in a couple of seconds. Then you export the synced xml-file, and import this back into your video-editor, now all synced. Super easy! You can also open these files in a text editor, to see what kind of data it’s using:

<figure style="float: auto">
   <img src="/assets/image/2021_11_15_anderlid_txt.png" alt="" title="" width="auto"/> <figcaption>

   Opening the .xml-files in a text editor can reveal what the file contains, and it should be possible to go in there and fix issues with the syncronisation. As you see, the two .MOV-files from my iPhone comes before the first Sanyo-movie, as explained in the text.</figcaption>

</figure>


#### What time is it?
But when you realize that your recording devices doesn’t share the same time you run into some problems. To me it seems like the hardware needs to be perfectly in sync regarding what time it is. I discovered (too late) that my Zoom thought it was 1. january 1970. The Sanyo-camera and iPhone agreed on the date and hour of the day, but there was a three minutes difference there as well, causing issues for the syncing. As you can see in the screenshot of the text editor, Syncalia has placed two iPhone-files (IMG_1438.MOV and IMG_1438.MOV) before the first Sanyo-file (SANY0002.MP4), simply because when the Sanyo-cam recorded it’s first recording, it registered the time to be 15:46, and the iPhone had the simultaneously recorded file registered at 15:43.
It seems that Syncalia would work better with a little more high-end equipment that get’s the date and time via satelite or whatever, so that all equipment actually is synced down to the millisecond. Otherwise you will still have to sync everything using other methods.

If Syncalia had lined up my clips perfectly, I would have had the recording from the Sanyo cam starting out with approx. 100 ms latency (due to me standing 33 meters away in 3° celsius) compared to the Zoom audio recorded in my hand. Of course the sound recorded that far away has a lot of other surrounding noises and sounds in it, making it impossible to hear my voice clearly, but it was still possible to hear the delay between the two sources. This delay dimished more and more the closer to the Sanyo-cam I got, and with synced recording devices—and using Syncalia—the sound would end up almost perfectly in sync at the very end, when I’m only about 1 meter from the camera.

This experiment would be interesting to try out in an ideal space, with high-end equipment, making it possible to have a good zoomed-in picture and a super cardoid shot-gun microphone, making it possible to experience the lip-sync issues we’d end up with. Speaking of lip-sync, a research by Younkin and Corriveau found the threshold to be a lot higher than the +15 to -45 ms that the ATSC is working with. They found that the mean threshold of 185,19 ms before people stated that the sync was off. This was a research based on lip-sync with one talking person.




#### Part 2: What about musicking together out of sync?

The last part of this little journey of mine, took me to the Portal and the Dungeon at UiO. Because we have these fairly recently acquired Ximea-cameras, that connects to the LoLa machines, I wanted to to a simple test with a drum machine and compare Zoom and LoLa video.
Until now I’ve talked about lip-sync and AV-sync in a *media to spectator sense*, but what about when we are trying to communicate musically over long distances? Telematic music has been widely discussed in a lot of these blog posts, and there are numerous ways people tries to work around the latency issues. But that left aside, I wanted to see how much better a setup with Ximea-camera was compared to using Zoom.

In the Portal Pedro and I set up a Zoom-meeting and joined the meeting from the Dungeon downstairs. I set up a Ximea-cam and we connected through LoLa. The drum machine (Roland TR-8) was put on the floor, playing a beat over LoLa, and I pointed both the Zoom-camera and the Ximea-camera on the drum machine, and in the Portal upstairs, Pedro had already set up the two monitors behind the mixing desk to show Ximea-cam on the left monitor and Zoom-cam on the right, as well as having the sound coming over the speakers as usual in a LoLa-session.
I filmed these two screens in one shot, and with a timer showing milliseconds on the Zoom-screen, I should be able to measure the visual difference between the Ximea- and Zoom-setups.

It has to be mentioned that when using Ximea on the oldest LoLa-machine (the one in the Dungeon), the framerate needed to be set to 25, with a fairly low resolution (640x480, RBG), and still we had quite some buffersize-glitches in the sound (as you can hear in the video). Not the best thing for playing music together.

During one of the recording, Stefano and Aleksander entered the Dungeon with a new LoLa-machine, connected a Ximea-camera and ran full HD with 60 fps and colors, with less latency than my setup on the old machine. So I guess it will be possible to have higher quality video and sound in a very near future now.

As you can see; there’s quite a substancial lower latency on the Ximea than on the Zoom, about 128 ms less, also on the old LoLa machine, but glitching sounds might occur.


<figure style="float: auto">
   <img src="/assets/image/2021_11_15_anderlid_latency.jpg" alt="" title="" width="auto"/> <figcaption>

   In this illustration you see two pictures from the video, showing the Ximea-cam on the left and the Zoom-cam on the right monitor. The time difference between the first led being unlit is 128 ms, according to the timer over the Zoom-picture. </figcaption>

</figure>

And now, if you like to, you can watch the video I made, but beware, your English pronunciation might be worse after watching it.


<figure style="float: none">

<iframe width="560" height="315" src=https://www.youtube.com/embed/7Pr-8FX7ve8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<figcaption>A movie by Anders Salomon Lidal.</figcaption>
</figure>
