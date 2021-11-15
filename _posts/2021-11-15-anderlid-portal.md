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




[The Advanced Television System Comittee, Inc, (ATSC)](https://www.atsc.org) is an «is an international, non-profit organization developing voluntary standards for digital television.» According to the ATSC Implementation Subcommittee, “The sound program should never lead the video program by more than 15 milliseconds, and should never lag the video program by more than 45 milliseconds”. Because the speed of light is so much faster than the speed of sound (299 792 458 m/s [light] vs approx. 343 m/s [sound]) our tolerance for leading audio is less than that for lagging audio.

#### Part 1: Inbetween the audio and video
For the trial-lecture movie, I wanted to explore some post-production syncronisation-tools. A tool for syncing recordings from multiple cameras and/or sound recorders is [Syncalia](https://syncaila.com) which is free to use with all functionalities the first 20 days. So I decided to use my iPhone, mye Sanyo Xacti camera and my Zoom H2N sound recorder for some testing of this. I also had to find another video-editor than the usual iMovie (which is very limited anyway), one that is compatible with Syncalia. And since DaVince Resolve is free, and also a very powerful video-editing tool, I decided to go for this.

Of course the drawback here, is that I’m all new to these tools, and even though I’ve tried both Adobe Premiere, Adobe After Effects and Final Cut Pro, that was in the early 2000’s



#### To sync or not to Syncalia
After having downloaded the footage (with sound) from my two camera sources and one sound source, I was looking forward to have Syncalia doing all the syncing, making further editing a lot easier for me.
To use Syncalia, you basically just put all footage from each camera on their own layer, and the same with the sounds; one layer containing sound from one (the same) source. No matter where on the timeline you put it, it should be fine. Then you export an .xml or .fcpxml, which are small text-files containing metadata about duration, and recording time and such. Syncalia opens these files in a swoosh, and short videos like this is synced in a couple of seconds. The you just export the synced xml-file, and import this into your video-editor again. Then you’ll have all your recordings on a consistent timeline. Super easy! You can also open these files in a text editor, to see what kind of data it’s using:

<figure style="float: auto">
   <img src="/assets/image/2021_11_15_anderlid_txt.png" alt="" title="" width="auto"/> <figcaption>
   <i>
   Opening the .xml-files in a text editor can reveal what the file contains, and it should be possible to go in there and fix issues with the syncronisation. As you see, the two .MOV-files from my iPhone comes before the first Sanyo-movie, as explained in the text.</figcaption>
   </i>
</figure>


#### What time is it?
But then, when you realize that your recording devices doesn’t share the same time … To me it seems like the hardware needs to be perfectly in sync regarding what time it is. I discovered (too late) that my Zoom thought it was 1. january 1970. Seems kind of strange, since I’ve had it for a year or two. (Jan. 1st 1970 seems like some generic starting date for the hardware/firmware.) I recently did an update of the firmware, maybe that has caused issues. The Sanyo-camera agreed on the date, and hour of day, but it was three minutes earlier than my iPhone, causing issues there as well: As you can see in the screenshot of the text editor, Syncalia has placed two iPhone-files (IMG_1438.MOV and IMG_1438.MOV) before the first Sanyo-file (SANY0002.MP4), simply because when the Sanyo-cam recorded it’s first recording, it registered the time to be 15:46, and the iPhone had the simultaneously recording registered at 15:43.
So it seems that Syncalia would work better with a little more high-end equipment that get’s the date and time via satelite or whatever, so that all equipment actually is synced down to the millisecond. Otherwise you will still have to sync everything using other methods.

Actually, DaVinci Resolve also provides it’s own syncronisation-feature, based on the soundwaves of the files. This is also a good idea, and seems to work good from the YouTube-tutorials I’ve seen, at least as long as the sounds are clean and quite similar.

In my case, I deliberately wanted to try different ways of recording sound, so I had sound from my Zoom H2N which I held in my hand, along with my iPhone, and I had sound from the Sanyo on a stand around 33 meters and 16.5 meters away from me. The plan was to see/hear how the sound would feel more natural or unnatural in the video, based on what source(s) I used for the sound in the finished movie.





If Syncalia had lined up my clips perfectly, I would have had the recording from the Sanyo cam starting out with approx. 100 ms latency (due to me standing 33 meters away in 3° celsius) compared to the Zoom audio recorded in my hand. Of course the sound recorded that far away has a lot of other surrounding noises and sounds in it, making it impossible to hear my voice clearly, but it was actually possible to hear the delay between the two sources. This delay dimished more and more the closer to the Sanyo-cam I got, and with synced recording devices—and using Syncalia—the sound would end up almost perfectly in sync at the very end, when I’m only about 1 meter from the camera.

This experiment would be interesting to try out in an ideal space, with high-end equipment, making it possible to have a good zoomed-in picture and a super cardoid shot-gun microphone, making it possible to experience the lip-sync issues we’d end up with. Speaking of lip-sync, a research by Younkin and Corriveau found the threshold to be a lot higher than the +15 to -45 ms that the ATSC is working with. They found that the mean threshold of 185,19 ms before people stated that the sync was off. This was a research based on lip-sync with one talking person.




#### Part 2: What about musicking together out of sync?

The last part of this little journey of mine, took me to the Portal and the Dungeon at UiO. Because we have these fairly newly acquired Ximea-cameras, that works with the LoLa machines, I wanted to to a simple test with a drum machine and compare Zoom and LoLa video.
Until now I’ve talked about lip-sync and AV-sync in a media to spectator sense, for instance how the sound of a movie at the cinema is perceived synced or not (which mostly is pretty good, but at your home theater the story might be quite different). But what about when we are trying to communicate musically over long distances? Telematic music has been widely discussed in a lot of these blog posts, and there are numerous ways people want to work around the latency issues.

But that left aside, I wanted to see how much better a setup with Ximea-camera was compared to using Zoom. Tico is another option, which we used more last semester, but with NTNU packing down their portal means we only have one Tico box connected these days.

In the Portal Pedro and I set up a Zoom-meeting and joined the meeting from the Dungeon downstairs. I set up a Ximea-cam and we connected through LoLa. The drum machine (Roland TR-8) was put on the floor, playing a beat over LoLa, and I pointed both the Zoom-camera and the Ximea-camera on the drum machine, and in the Portal upstairs, Pedro had already set up the two monitors behind the mixing desk to show Ximea-cam on the left monitor and Zoom-cam on the right, as well as having the sound coming over the speakers as usual in a LoLa-session.
I filmed these two screens in one shot, and with a timer showing milliseconds on the Zoom-screen, I should be able to measure the visual difference between the Ximea- and  Zoom-setups.
It has to be mentioned that when trying to get Ximea working on the oldest LoLa-machine (the one in the Dungeon), the framerate could only be set to 25, and the resolution was fairly small (640x480, RBG), and we still had quite some buffersize-glitches in the sound. So that’s not the best thing for playing music together. But during one of the filming, Stefano and Aleksander entered the room, turned on the lights and talked away and totally destroyed my movie. But they came with one the new LoLa-machines, stole my Ximea-cam and hooked it up to their machine, running full HD with 60 fps and colors. With less latency than my setup on the old machine. So I guess it will be possible to have higher quality video and sound in a very near future now.

Back to the difference between my old Ximea-setup and Zoom, I used my iPhone for filming, and in hindsight, I should have used a camera with a higher framerate, to get a better and more accurate reading. But it’s fairly easy to see that there’s quite a substancial less latency one the Ximea than on the Zoom, around 130 ms less, from what I could read on the timer.


<figure style="float: auto">
   <img src="/assets/image/2021_11_15_anderlid_latency.jpg" alt="" title="" width="auto"/> <figcaption>
   <i>
   In this illustration you see two pictures from the video, showing the Ximea-cam on the left and the Zoom-cam on the right monitor. The time difference between the first led being unlit is 128 ms, according to the timer over the Zoom-picture. </figcaption>
   </i>
</figure>

And now, if you like to, you can watch the video I made, but be aware, your English pronunciation might be worse after watching it.


<figure style="float: none">
<iframe width="560" height="315" src=https://www.youtube.com/embed/7Pr-8FX7ve8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
