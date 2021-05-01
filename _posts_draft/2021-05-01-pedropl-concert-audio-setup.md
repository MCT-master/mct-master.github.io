---
layout: post
title: "End of Semester Concert - Spring 2021: Audio Setup"
date: 2021-05-01 09:00:00 +0200
categories: portal
author: Anders Lidal, Pedro Lucas
image: /assets/image/2021_05_01_pedropl_consoleconcert.jpg
keywords: portal, telematic-music, concert, LoLa, live-performance
excerpt: "Streaming a telematic performance is a challenging process that demands the effort from several disciplines to make it work properly, and one of the fundamental elements is the audio setup."
---

Streaming a telematic performance is a challenging process that demands the effort from several disciplines to make it work properly, and one of the fundamental elements is the audio setup.
Here we will describe the audio management process behind the Spring 2021 concert in MCT considering resources and methods used for this event.

# Background

As part of the initial organizational setting, we considered the distribution of people between Oslo and Trondheim for choosing the best approach to stream the concert, which lead us to decide to stream from Oslo since we were more people in there for handling the technical arrangements. In that sense, we had to manage all the audio inputs (locally and remotely) through the necessary outputs (streaming and monitoring).

In Oslo we were eight people with a different instrument each one, while in Trondheim they were three in a similar situation. Three groups played and we needed to find out the best approach for rehearsals and the final performance trying to keep similar settings but at the same time give to each group enough flexibility for their specific instrumentation.

Considering these facts, we came out with the following solutions as well as other challenges that appeared on the way which were solved.

# Input Organization

<figure style="float: none">
   <img src="/assets/image/2021_05_01_pedropl_mixerinputs.jpg" alt="Input Channels in MIDAS Mixer" title="Input Channels in MIDAS Mixer" width="auto" />
   <figcaption>Input Channels in MIDAS Mixer</figcaption>
</figure>

We decided to use the *Scenes* features from the **MIDAS** mixer to manage settings per group. In that sense, we created a base scene called *Concert* with the setup that everyone used in Oslo so that we did not deal with plug and un-plug situations and we tagged properly which input is used by who on each group. This setting is depicted in the next chart.

<figure style="float: none">
   <img src="/assets/image/2021_05_01_pedropl_concertaudiosetup.jpeg" alt="Input Chart in MIDAS Mixer" title="Input Chart in MIDAS Mixer" width="80%" />
   <figcaption>Input Chart in MIDAS Mixer</figcaption>
</figure>

As you can see, we were split in groups A, B, and C using specific inputs. We ensured that the instrumentation was independent per each song even if the inputs were shared since we defined later specific scenes per each group based on the *Concert* scene, which means that we created the scenes *Concert A*, *Concert B*, and *Concert C* so that each group could change as they need for rehearsals previous to the concert without affecting the others.

Note that we used a small mixer (shown below) for the first input (a stereo input) to share it. It was useful for not having many channels in the mixer and make the operation easier since each instrument was playing in different songs and the changes could happen in both sides (Midas mixer using scenes, or independent channels in the other mixer).

<figure style="float: none">
   <img src="/assets/image/2021_05_01_pedropl_localmixer.jpg" alt="Local Mixer for Stereo Input 1 and 2" title="Local Mixer for Stereo Input 1 and 2" width="80%" />
   <figcaption>Local Mixer for Stereo Input 1 and 2</figcaption>
</figure>

It is important to remark that we received the remote signal from Trondheim through channel 11 and 12 as stereo by using the [LOLA](https://lola.conts.it/) system. It means that it was the responsibility from them to send the signal correctly and in a good level in order to mix it properly with the rest of instruments, luckily, each participant from Trondheim played in a different group, which helps to simplify the audio operation remotely, also they did not deal with the complexity of several input groups, and that is why they preferred to assign each instrument to a different channel in the same scene.

# Output Organization

In terms of output, we needed to manage two sources to feed the streaming and the local monitoring, also take care in sending our mix to Trondheim trough LOLA. For streaming, the video team took the output from the USB port in the Midas mixer and the signal was routed from the *Monitor* output. The local monitoring was given through the *Main Stereo* output that is send to the front speakers. Note that *Monitor* and *Main Stereo* are two different set of signals that can be routed in several places inside the mixer configuration.

Specifically, regarding monitoring, we came with the idea of using headphones instead of the local speakers to reduce feedback. So, we configured the mixer to send the output from the *Monitor* to one pair of outputs in the AES box (mapped with inputs from 1 to 8) in front of the room so that it can be installed a headphone amplifier with several outputs for every participant. The configuration panel to change this setting is shown below. Note that output 7 and 8 would be the physical points to connect any device, in this case it was the headphones amplifier.

<figure style="float: none">
   <img src="/assets/image/2021_05_01_pedropl_settingsheadphones.jpg" alt="Monitor Output to AES Outputs 7 and 8" title="Monitor Output to AES Outputs 7 and 8" width="auto" />
   <figcaption>Monitor Output to AES Outputs 7 and 8</figcaption>
</figure>

As it was mentioned before, we used a headphone amplifier to split the monitor signal in several outputs for each participant. This device is shown in the next image.

<figure style="float: none">
   <img src="/assets/image/2021_05_01_pedropl_headphonesamp.jpg" alt="Headphones Amplifier" title="Headphones Amplifier" width="auto" />
   <figcaption>Headphones Amplifier</figcaption>
</figure>

Although we made this setup work, when we tested with the groups playing, some of them preferred to hear the sound from the speaker and found this solution invasive and not suitable for the performance flow. That is why we discarded it and we just used the *Main Stereo* as normal by taking care of levels and EQ to avoid feedback issues, but anyone who wants to replicate this setup could use this solution.

# Operation in the Concert

** ANDERS COULD WRITE IN HERE **

<figure style="float: none">
   <img src="/assets/image/2021_05_01_pedropl_consoleconcert.jpg" alt="Control Center in the Portal" title="Control Center in the Portal" width="auto" />
   <figcaption>Control Center in the Portal</figcaption>
</figure>

# Team Responsibilities and Final Reflection

Anders and Pedro participated in several portal sections in classes and outside classes to test, install, and configure the setup used in the concert, each team was responsible to adjust their settings in rehearsals. In some specific tasks, Pedro figured out the way to route the output to the headphones amplifier and tested the whole setup considering this new addition. Anders operated the concert for all teams in the presentation day and made specific adjustments in the mixer on every test.

## Ander’s Reflection


## Pedro’s Reflection

Participating as part of the audio team for the concert was challenging because I still was struggling with the mental model for the operation of the MIDAS mixer, but it helped me to get a better understanding of it as well as the portal setup since we had to modify some configurations that were in there from the very beginning of the course, mostly regarding microphones and input types. The organizational aspect of the audio in the concert was a good point to learn how to manage live concerts and specially in a telematic setting as well as the needs from performers locally and remotely. I would suggest to continuing exploring ways to reduce feedback issues and manage proper monitoring that satisfies the performer’s demands.  
