---
layout: post
title: "End of Semester Concert - Spring 2021: Audio Setup"
date: 2021-05-01 09:00:00 +0200
categories: portal
author: Anders Lidal, Pedro Lucas
image: /assets/image/2021_05_01_pedropl_consoleconcert.jpg
keywords: portal, telematic-music, concert, LoLa, live-performance
excerpt: "As part of the audio team for the end-of-semester telematic concert, Pedro and Anders spent several hours in the portal, exploring different ways to organize audio routing. They also found time to experiment with effect loops. Check out the nice musical collaboration between two different musical cultures."
---
Ok, you might not find too many Ecuadorian or Norwegian cultur-specific expressions in this experimentation, but Pedro still plays some nice things, and always has to follow Anders mixing after capturing the piano-playing into his effect loop connected to the Midas M32:


<figure style="float: none">


<iframe width="560" height="315" src="https://www.youtube.com/embed/xVI-sFbiPTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<figcaption><i>Don't mind Anders' filming, his gestures might not be very easy to understand, but he tries to show some of the routing for the piano into the effect loops. But nevermind, just listen.</i></figcaption>
</figure>


Streaming a telematic performance is a challenging process that demands the effort from several disciplines to make it work properly, and one of the fundamental elements is the audio setup.

Here we'll quickly go through some of the audio management process behind the MCT-master students of 2020's end-of-semester concert <i>In Space We Make Music.</i>

<figure style="float: none">
   <img src="/assets/image/2021_05_04_anderlid_mixerinputs.jpg" alt="Input Channels in MIDAS Mixer" title="Input Channels in MIDAS Mixer" width="auto" />
   <figcaption>Input Channels in MIDAS Mixer</figcaption>
</figure>



### Input Organization

For the concert we decided to use different *Scenes* (on the mixer) for each group, since each group had quite different setups with regards to instrumentation and such. That way we could easily switch scene between performances, instead of muting and unmuting different tracks, as well as gainstaging each track. Another advantage is of course that each team can practice and set up their scene with effects, dynamics and such as they please.

So the idea was to create a base scene called *Concert*, and each group using that for further developing thei unique scene. After having the full overview of each groups instrumentation, we started setting up the mixer as shown in the schematics below:

<figure style="float: none">
   <img src="/assets/image/2021_05_01_pedropl_concertaudiosetup.jpeg" alt="Input Chart in MIDAS Mixer" title="Input Chart in MIDAS Mixer" width="80%" />
   <figcaption><i>Input Chart in MIDAS Mixer, also showing what inputs are used by each group. Note that we used a small mixer (shown later) for the first two channels on the Midas. Lack of inputs in the stagebox as well as shortage of cables made it very useful.</i></figcaption>
</figure>

We made sure that the base scene worked properly, and copied these settings into each groups scenes, for them to explore further and set up as they wanted.

In theory this worked really good, but as each group practiced, they ran into different challenges, like LoLa issues (that sometimes just needed a reboot), monitoring issues with feedback and such and other normal challenges one face in an audio setup.

This lead to some hectic moments the day of the concert, so everything is as it should be before a concert.

<figure style="float: none">
   <img src="/assets/image/2021_05_01_pedropl_localmixer.jpg" alt="Local Mixer for Stereo Input 1 and 2" title="Local Mixer for Stereo Input 1 and 2" width="80%" />
   <figcaption><i>Local mixer for channel 1 and 2.</i></figcaption>
</figure>

From NTNU we received a stereo signal on the [LoLa](https://lola.conts.it/) network, so they were responsible for sending a good mix from their side, which was no problem, as there were only one guy playing there at the time.


### Output Organization

In terms of output, we needed to manage two sources to feed the streaming and the local monitoring, also take care in sending our mix to Trondheim trough LoLa. For streaming, the video team took the output from the USB port in the Midas mixer and the signal was routed from the *Monitor* output. The local monitoring was given through the *Main Stereo* output that is send to the front speakers. Note that *Monitor* and *Main Stereo* are two different set of signals that can be routed in several places inside the mixer configuration.

With one of the groups using acoustic instruments (flute and double bass), we came with the idea of using headphones for monitoring instead of the local speakers to reduce feedback. So, we configured the mixer to send the output from the *Monitor* to one pair of outputs in the AES—the stagebox—(mapped with inputs from 1 to 8) and connected a headphone amplifier with several outputs for every participant. The configuration panel to change this setting is shown below. Note that output 7 and 8 would be the physical points to connect any device, in this case it was the headphones amplifier.

<figure style="float: none">
   <img src="/assets/image/2021_05_01_pedropl_settingsheadphones.jpg" alt="Monitor Output to AES Outputs 7 and 8" title="Monitor Output to AES Outputs 7 and 8" width="auto" />
   <figcaption><i>Monitor Output to AES Outputs 7 and 8.</i></figcaption>
</figure>



<figure style="float: none">
   <img src="/assets/image/2021_05_01_pedropl_headphonesamp.jpg" alt="Headphones Amplifier" title="Headphones Amplifier" width="auto" />
   <figcaption><i>Headphone amplifier.</i></figcaption>
</figure>

Although we made this setup work, when we tested with the groups playing, some of them preferred to hear the sound from the speaker and found this solution invasive and not suitable for the performance flow. So we discarded it, and just used the main speakers for monitoring at a low enough volume to avoid feedback issues, but anyone who wants to replicate this setup could use this solution. It would of course have been a lot better if every player could have their own headphone mixer, to mix their own monitoring, but there is no such equipment available in the portal.

### Time to play

With every performance saved as a scene, the operation of the mixer is fairly easy throughout the concert. Since two of the groups played two songs each, and one group did an improvisational piece, we made five scenes in total, and just changed between each performance. Due to a full stagebox, we didn't have a designated microphone for the presenter, so the flute-mic (or saxophone, as it was used for, due to stand-in for a sick flutist) also served as presenter-mic—meaning Anders had to unmute it after switching scenes.
The switching between scenes could be a lot more efficient, if there weren't to many confirmation stages on the Midas, but in total, it worked fine.

<figure style="float: none">
   <img src="/assets/image/2021_05_01_pedropl_consoleconcert.jpg" alt="Control Center in the Portal" title="Control Center in the Portal" width="auto" />
   <figcaption><i>Control center with angry old man in the Portal.</i></figcaption>
</figure>

### Team responsibilities and final reflection

Anders and Pedro participated in several portal sections in classes and outside classes to test, install, and configure the setup used in the concert, each team was responsible to adjust their settings in rehearsals. In some specific tasks, Pedro figured out the way to route the output to the headphones amplifier and tested the whole setup considering this new addition. Anders operated the concert for all teams in the presentation day and made specific adjustments in the mixer on every test.

#### Anders' last reflections

Having some experience with both live and studio mixing, this was a fun task for me. I'm not very fond of digital mixers, they offer possibilities that's not available in analog mixers, so to explore some of those have been interesting. Luckily, when I get lost in the menus, I've had good people around me to lead me back on track. Both Pedro, Leigh and Henrik has been invaluable in different situations. The concert ran quite smoothly, even though Alena sometimes was muted when talking (due to slow scene shifting because of numeral confirmations required by stupid Midas).
It was also rewarding to me to use my analog (and digital) effect pedals and the mixer itself as my main instrument for this telematic performance, and I would definately do something like this again … maybe already next semester.

#### Pedro’s last reflections

Participating as part of the audio team for the concert was challenging because I still was struggling with the mental model for the operation of the MIDAS mixer, but it helped me to get a better understanding of it as well as the portal setup since we had to modify some configurations that were in there from the very beginning of the course, mostly regarding microphones and input types. The organizational aspect of the audio in the concert was a good point to learn how to manage live concerts and specially in a telematic setting as well as the needs from performers locally and remotely. I would suggest to continuing exploring ways to reduce feedback issues and manage proper monitoring that satisfies the performer’s demands.  
