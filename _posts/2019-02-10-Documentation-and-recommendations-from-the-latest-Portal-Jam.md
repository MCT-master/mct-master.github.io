---
layout: post
title:  "Documentation and recommendations from the latest Portal Jam"
date:   2019-02-10 19:00 +0200
categories: networked-music
author: Karolina Jawad, Eirik Dahl, Espen Wik, Shreejay Shrestha, Jørgen Varpe
image: /assets/image/2019_02_10_aleksati_portal_jam19.jpg
excerpt: "As the Portal is still in its infancy, pushing and exploring its technical possibilities is an ongoing process. We still encounter
different issues while actually seeking a smooth and standardized setup of the signal routing and performance space. At the end it is about
optimizing the telematic experience but not getting stucked in technicalities at the same time."

---
<figure align="middle">
<video width="640" height="480" controls>
  <source src="https://docs.google.com/uc?export=download&id=1d2vct13G0caHEbcgeBz4GSQghVjnIUFw" type='video/mp4'>
  Your browser does not support video tag.
</video>
</figure>

As the Portal is still in its infancy, pushing and exploring its technical possibilities is an ongoing process.
For different scenarios like jamming with acoustic instruments cross-campus, we still encounter different issues while actually
seeking a smooth and standardized setup of the signal routing and performance space. A teaching-workshop set-up requires
for example a different solution than a lecture-performance, so in each of those scenarios we try to find out how to optimize
the telematic experience.

In one of our latest test-jams we were testing the current semester set-up and tried to apply many of these considerations.
We also tried to implement a screen layout, since the visual cross-campus communications helps to increase the sense of immersion.
This was the first time we putted up lightning in Trondheim in order to recognize the faces better and remove visual noise from the screens.
Our current system still leaves much to be desired when it comes to the visuals. For instance, the faces in Oslo are unclear.
This is due to the fact that the performers in Oslo have to be very far back in the frame due to the position of the mixer.
This, combined with visual noise in the frame makes it hard to immerse visually with the performers in Oslo. However, it would have been
optimal to install them on the racks from above in a 65 degree angle. By now we're moving more and more towards a film-studio-/ theatre stage like situation, but without the 4th wall.

In terms of latency, on an audible level it was low enough to perform together. Visually, the latency was so
distracting that the performers chose not to look at the screens in order to be able to focus on the sound and stay in synch.
For some parts of the jam we chose to use the click track from the drums in Oslo. This was sent and recieved on the same channels as the drum sounds themselves, which of course was not ideal in terms of sound mixing. The click was also heard in Trondheim later than in Oslo, because of the latency added in the signal chain. By playing "on click" you are thereby playing the system's latency behind Oslo.


<figure align="middle">
<img src="/assets/image/2019_02_10_aleksati_signal_flow_chart.jpg" alt="Broadcasting header image" width="100%">
</figure>
<br>


## Technicalities

Both sides agreed to use headphones for monitoring, which eliminated the chance of feedback.
In Oslo, drums, vocals and saxophone were sent through LOLA. In Trondheim, bass, piano and guitar were routed to Oslo. Some instruments took longer time to connect, like the bass guitar. The output of the bass amp which was bought to be directly connected to the mixer, created noise. To solve the noise issue, the bass was instead connected to a DI box, connected to the Midas mixer.
All other instruments were connected directly to the mixer, like the guitar through an amp. For documentation we used several video sources, like Sony camcorder, Zoom audio-visual capturing and mobile phones.

## Stereo mix/ monitor mix
In Trondheim we recieved audio from Oslo on 4 channels through LOLA (Two for drums). These channeles were sent together with the local audio channels to output bus 9 and 10, as you can see illustrated in the signal flow chart above. These channeles were physically connected to a headphone amplifier, which distributed the signal to the local participants in Trondheim. Since only two channels (left and right) were used, everyone got the same monitor mix. This mix was set by adjusting the amount of each instrument sent to the monitor busses. Later on we will add several busses, to be able to send different mixes to each participant.


General thoughts on the documentation, it would be practical to develop a standard procedure for them.
Templates that can be executed and documented in a standardized way. To achieve that we need reliable equipment which is always accessible.
