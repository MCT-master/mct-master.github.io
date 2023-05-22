---
layout: post
title: "Jazz Over the Network at 184,000km/h"
date: 2023-03-12
categories: portal
author: Jack Hardwick, Alexander Wastnidge, Masoud Niknafs, Emin Memis
image: /assets/image/2023_03_13_jackeh_RITMO_musicians_thumbnail.jpg
keywords: portal, audio, latency, jazz
excerpt: "We worked with local high school students to put together a jazz concert over the LOLA network. Here's a retrospective from Team RITMO."
---

# Introduction

<figure style="float: none">
   <img
      src="/assets/image/2023_03_13_jackeh_RITMO_musicians.jpg" width="100%" />
   <figcaption>Musicians from Edvard Munch Vgs in soundcheck with Alex riding the faders.</figcaption>
</figure>

For our third network musical performance as MCT students, we teamed up with students from Edvard Munch High School in Oslo to put together a jazz concert between Salen at the Department of Musicology and the motion capture lab at RITMO on Tuesday 7 March 2023. Read below for a look behind the scenes and some reflections on the event from the RITMO performers and technicians.

First though, some fun facts and figures. Salen and RITMO are roughly 870 metres apart. Sound travels at approximately 343m/s so it would take sound around 2.5 seconds to travel that distance. However, using the LOLA network we are able to send sound and video from one location to the other and back again in 17 milliseconds. In other words, we played jazz at 149 times the speed of sound, or 184,000km/h.

The ensemble from Edvard Munch High School consists of 3 singers, 2 trumpets, piano, electric guitar, bass guitar, and drum kit. We split the ensemble between our two locations, with the trumpets and guitars performing at RITMO.

# Getting Technical

As with our previous concerts, we used the NMP kits as the core of our setup, which were connected together between Salen and RITMO through the purpose-built LOLA network. We recorded each of the four RITMO musicians on separate tracks to the Yamaha mixer included in the kit. We used Shure SM57 microphones for the trumpets, a Sennheiser e609 microphone for the electric guitar amplifier, and we used a DI box for the bass guitar. This setup worked well and resulted in a great-sounding mix, both at the front of house location in Salen and through the headphones we used for monitoring at RITMO.

We were lucky to be able to make use of a mounted 4k TV from RITMO for the performers. We arranged this screen such that the performers could see both themselves and the Salen performers throughout the concert. This worked well, although the performers experiences some difficulties in communicating with their bandmates remotely. See the Student Reflections section below for more details on this issue.

The LOLA network worked flawlessly during both the soundcheck day on Monday and the concert on Tuesday. We performed round-trip (RTT) latency measurements on both days and recorded 15ms and 17ms of latency respectively with a sample rate of 48kHz and a buffer size of 64 samples on both ends. This worked well for our use case as we aim to achieve a RTT of under 30ms, above which performability can be negatively affected. The performers confirmed that this latency worked well. They could see some slight latency in the camera feeds in front of them, but this did not affect their ability to perform with the system.

You can find a more detailed technical specification of the setup we used on the wiki page [here](https://github.com/MCT-master/portal-wiki/wiki/2023-Mid-Semester-Networked-Music-Performance-in-RITMO).



# Watch the Performance

Watch the full performance on the MCT YouTube channel here:

<iframe width="720" height="405" src="https://www.youtube.com/embed/A-JyaKxe4U4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# Student Reflections

After the performance, we spoke to the RITMO performers to understand their experience of playing telematic music. This was their first experience of network musical performance for all the musicians, therefore we were excited to learn more about their perspectives on the technology. The performers all found the experience to be rewarding. However, they also identified several issues which largely fall into two categories: those inherent to telematic performance, and flaws with our specific setup.

All the RITMO performers found that they missed the physical aspect of performing together in the same room. Specifically, they found it difficult to properly feel the groove as this relies as much on feeling physical movements together as it does listening to bandmates. This could be rectified partly through changes to the setup in each location. The Salen camera was placed facing towards the performers which the RITMO performers said made them feel like they were playing to, rather than with, their counterparts. Placing the Salen camera amongst or behind the performers could have therefore helped to alleviate this issue. Relatedly, the RITMO performers were seeing the Salen musicians on a fairly large TV. A larger view, such as the large projector screens included in the NMP kit, could have helped to make the RITMO performers feel like they were part of the action.

The RITMO performers also identified that performing using headphones felt unnatural and took away from the live feeling of the performance, instead feeling more like a studio or practice session. We chose to use headphones for two main reasons: to minimise bleed into the trumpet and guitar microphones, and because the speakers at our disposal were not large enough for monitoring over loud brass instruments. It is therefore possible that we could have relied on monitoring through wedge speakers, but this might have caused issues with bleed and feedback.

# Summary

According to some reflections, the capability of NMP performance is still unknown, even among younger generations. Furthermore, many conceptions are the result of cultivated expectations. For example, our young performers generally agreed that rhythmic music with repetitive patterns is easier to perform telematically. However, we are aware that this is not always the case. This may indicate that some kind of familiarization and education is required. Perhaps physical and virtual communication courses will be offered in schools in the near future!