---
layout: post
title: "The Granjular Christmas Concert (Portal View)"
date: 2021-12-09 19:24:00 +0200
categories: Portal
author: Joseph Clemente, Kristian Wentzel, Sofía González, Arvid Falch
image: /assets/image/2021_11_23_arvidf_going_live.jpeg
excerpt: "A report on our telematic performance in the Portal."

keywords: Portal, Concert, Telematic, LoLa

---
# **Telematic Performance December 3rd, 2021**

<figure style="float: none">
   <img src="/assets/image/2021_12_10_arvidf_going_live.jpeg" alt="Concert" title="Performers in the Portal" width="90%" />
   <figcaption>Performers in the Portal during the concert</figcaption>
</figure>

## **Introduction**

The annual Christmas concert of the first year [MCT](https://www.uio.no/english/studies/programmes/mct-master/) students has become a tradition at the Oslo campus, and this year it was our time to mark the start of the holidays with a telematic performance. We decided on the theme “A [Granjular](https://www.izotope.com/en/learn/the-basics-of-granular-synthesis.html) Christmas Performance”, which for the non-Norwegian speaking audience is a pun on the words “gran” (spruce, aka christmas tree) and “jul” (Christmas). In this post we will try our best to describe how we went about it, both technically and musically.

The concert took place at two separate locations at [IMV](https://www.hf.uio.no/imv/english/) (Institute of Musicology) on December 3rd, 2021. Our team was based in our much beloved [Portal](https://www.hf.uio.no/imv/english/about/rooms-and-equipment/mct-portal/), while the other team and audience were situated in [Salen](https://www.hf.uio.no/imv/english/about/rooms-and-equipment/salen/index.html), an auditorium in the basement of IMV.

## **What is telematic music and LoLa?**

In order to better understand the concert that we carried out, it is necessary to understand two concepts: what telematic music is and what LoLa is.

Telematic music can be defined as “music performed live and simultaneously across geographic locations via the internet.”  (Oliveros et al., 2009, p. 1).

LoLa, as the name points out, is a “Low Latency audio visual streaming system” that provides the possibility for an accurate real-time connection between different places. It is the key piece of technology that allowed us to perform telematic music during our concert. [LoLa webpage](https://lola.conts.it/)

## **Musical vision**

Musically, the four performers (two in the Portal, two in Salen) planned for an improvisation with lots of live sampling and granular synthesis. We used some eclectic selections of gear and homemade [Pure data](https://puredata.info/) patches to create sounds and create interesting textures together, aiming for one part of dry textures (minimal use of reverb), and one part wet, with lots of reverb and delay. The aim was to listen to each other's sounds and build upon the different sonic contributions, as well as ornamenting the melodic contributions of the saxophone being played live downstairs in Salen.

<figure style="float: none">
   <img src="/assets/image/2021_12_10_arvidf_rig.jpeg" alt="Rig" title="Audio rig" width="75%" />
   <figcaption>The audio rig used by the performers</figcaption>
</figure>

## **Technical setup**

<figure style="float: none">
   <img src="https://drive.google.com/uc?&id=17ieTgMZKO_cqILRP40zSpogeQIGSlVtZ" alt="Alternate Text" title="Image Title" width="auto" />
   <figcaption>Block diagram of technical setup</figcaption>
</figure>

The LoLa rack is a recent creation by MCT, providing an all-in-one, portable setup for low latency telematic performance. For this concert, two LoLa racks were connected to each other: one from the MCT portal (LOLA4) and one from Salen downstairs (LOLA3). Both audio and video were passed through the LoLa program, and routed as seen in the diagram above. The portal performers were positioned in a way where they could easily see the downstairs performers through a monitor at any time, as shown in the pictures below. For a more detailed explanation of our setup and the performer’s rig, please visit our [wiki page](https://github.com/MCT-master/portal-wiki/wiki/Portal-Telematic-Concert-Guide).


<figure style="float: none">
   <img src="https://drive.google.com/uc?&id=1B8CXNnK-AoxZKhC_1uq5lTl5gofynOMK" alt="Alternate Text" title="Image Title" width="75%" />
   <figcaption>Monitor facing the performers</figcaption>
</figure>



<figure style="float: none">
   <img src="/assets/image/2021_12_10_arvidf_rig_diagram.png" alt="Rig" title="Audio rig" width="85%" />
   <figcaption>Audio setup</figcaption>
</figure>

## **Preparations**

During the few rehearsals and test-runs in advance, the time was mostly spent on setting up, troubleshooting, getting some noises flowing between the two stages, and then troubleshooting some more. From the musicians perspective, there was a lot of time to play around and develop musical ideas, and fine-tune the instrument setup. But this was more of a duo endeavor with the musician seated next to you. We got little time to actually practice together as the full quartet, to explore and develop musical ideas together, except for earlier on the very day of the concert. But, as our concept was to engage in a collective granular improvised session, this wasn’t necessarily a hindrance. It made us keep the ideas fresh and our minds sharp for the concert.

## **Going live**

Once we were set to go and the lights were on, we did experience some transfer issues resulting in a lot of clipping and noise from the downstairs audio stream. We crossed our fingers that our stream passed through more fluidly the other way, and started playing. After a few minutes the quality of the sound improved, and it was a lot more rewarding as an improvisational experience. Some interesting textures were created, and it felt quite natural to perform together although not located in the same room. The monitor with the visual feed of the performers from Salen was surely a great aid in order to achieve a sense of interplay and connection. The rhythms were mainly instigated from Salen, and there were never any issues with latency in regard to playing along to the rhythmic structures. We had opted not to use any midi clock or other synchronization tools, so all delay effects and rhythmic components had to be done by ear, which is always interesting when working with electronic music.
The monitor with the visual feed of the performers from Salen helped    

<figure style="float: none">
   <img src="/assets/image/2021_12_10_arvidf_in_concert.jpeg" alt="Concert2" title="Going live" width="65%" />
   <figcaption>Performers hard at work creating that granjular christmas mood</figcaption>
</figure>

Dealing with the technical part of the concert was an experimental experience. In the rehearsals, we had to move a lot of equipment up and down and get used to a certain setup for which we took plenty of notes. However, the day of the concert, we were given the LOLA4 rack, which was appreciated while a little nerve-wrecking. The notes we had taken up until now, were rendered somewhat useless and could not help feeling nervous until we were taught how to get around the new environment. Once all instructions had been given, everything seemed to run smoothly which allowed us to focus on the “stage” decor and on the rehearsals. Nonetheless when it was time for the concert, we experienced some [jitter](https://headfonics.com/what-is-jitter-in-audio/) which forced us to restart the LOLA computer. That somewhat improved the issue, and the remaining problems were solved on the go.

<figure style="float: none">
   <img src="/assets/image/2021_12_10_arvidf_lola_rig.jpeg" alt="Rig" title="Lola rig" width="75%" />
   <figcaption>The LOLA4 rack</figcaption>
</figure>

<figure style="float: none">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-dnpzsVc32M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><figcaption>Full concert.</figcaption>
</figure>

The whole concert was streamed on YouTube and is available [here](https://www.youtube.com/watch?v=-dnpzsVc32M). We had a really good time and are already looking forward to our next concert.



## **Bibliography**

Conservatorio di musica G. Tartini. LoLa, Low Latency Audio Visual Streaming System: Installation & User's Manual. Retrieved from https://lola.conts.it/downloads/Lola_Manual_1.5.0_rev_001.pdf

Oliveros, Pauline, et al. “Telematic Music: Six Perspectives.” Leonardo Music Journal, vol. 19, 2009, pp. 1–29., https://doi.org/10.1162/lmj.2009.19.95.
