---
layout: post
title: "End of semester reflections for the Portal experience"
date: 2021-05-01 09:00:00 +0200
categories: portal
author: Wenbo Yi, Lindsay Charles, Stephen Gardener
image: assets/image/2021_05_02_wenboyi_performance.JPG
keywords: portal, telematic-music, concert, LoLa, live-performance
excerpt: "The first physical portal experience during the pandemic"
---

# 1. Overview

The **MCT4022** was our first physical course since we attended the MCT. *The aim of this course is to learn to operate and maintain the Portal, the audio-visual communication platform connecting the two campuses in Trondheim and Oslo.* Meanwhile, the preparation of a telematic concert between UiO and NTNU is one of the important outcomes of this course.

In this semester, we followed Guy and Eigil, learned about the operation and the set up of the hardware devices in Portal, also the low-latency communication tools such as [LOLA](https://lola.conts.it/), TICO, [Zoom](https://zoom.us/) between Oslo and Trondheim campuses. In this blog post, we will summarise and reflect on our portal experiences and our telematic concert.

# 2. Experience and Troubleshooting

The experience in Portal was a bit of a mixed bag. During [Team C rehearsals](https://mct-master.github.io/portal/2021/02/28/joni-teamcjam.html), we encountered a variety of software and hardware problems pretty much continuously from the beginning of the course right to the end of the concert. Here we will discuss three LOLA related problems that we encountered during the semester.

The first seems to be a common one - if LOLA is connected for a longer period of time (usually more than two hours), the audio receive will suddenly disconnect at one end, while the other side remains completely normal. This happened to us pretty much every rehearsal we had, and it always happened on the Oslo side. We found that after restarting the whole computer and reconnecting LOLA, communication was restored and everything worked normally again.

The second problem occurred during a rehearsal in the middle of the semester when we couldn't send the audio signal to Trondheim but we could hear from the other side. After asking for help from Stefano, we learned that in the audio input offset option in the LOLA Setup, we should select the same number as the sound card channel setting, which is usually 6 on the Oslo end. We are not sure whether this had reset itself automatically or whether it had been changed by someone, but this became something we would check at the beginning of each session.

<figure style="float: auto">
   <img src="/assets/image/2021_05_02_wenboyi_lola.png" alt="" title="LOLA interface for audio input offset"/> <figcaption>LOLA interface for audio input offset</figcaption>
</figure>

Our third problem happened on one of our last rehearsals, where no matter what we tried, we couldn't hear anything from Trondheim. Despite both the computer and LOLA showing that the signal was being received, the mixer remained silent and we heard nothing. We spent 3 hours trying to fix it before giving up and trying to make do using Zoom (_not_ a good idea!). This problem seemed to magically fix itself after a few days. After consulting with Stefano, we suspect it was caused by a master clock conflict between audio devices. It turned out that the master clock can be set on both the computer running LOLA, as well as the hardware audio interface - we needed to ensure that only one of those devises was set as the master clock.

# 3a. Wenbos Reflection

In summary, it was really a blessing to be able to participate in a physical class and meet people face-to-face during the pandemic. For preparation of the concert, we encountered many problems but we also learnt so much through solving them. It was a valuable experience for me.

From a musical perspective, as a traditional classical music soloist, I am not sure about the concept of telematic performance at the beginning. But rehearsing with Team C did make me feel the joy of playing in an ensemble, and made me realise that it is **POSSIBLE** to play music successfully together even if we are 500 kilometers away. Besides that, I played jazz music for the first time. The jazz rhythm was really hard to feel at the beginning, but with the help of Stephen and Lindsay, also the lead from Guy in the concert, I think I comprehended some tips on how to "swing" with the Jazz.

During the concert, although the digital piano was being constantly compressed for unknown reasons, and re-listening to the Youtube stream was a completely different experience from the live one. But I guess that's probably one of the charms of being involved in telematic performance, you can never predict what strange problems you'll have next time!

The MCT4022 was a good exploration of telematic performance and low-latency transmission techniques, and I hope to further refine my understanding of Portal technology in the next semester!

# 3b. Stephens Reflection

I was very happy to finally be on campus for the portal course this semester. The portal is an exciting place with so much to learn about - pretty much everything in that room was new to me. A myriad of strange black boxes connected to other equally strange boxes via a million leads. It could also be frustrating as there was so much that could wrong, so many points of failure just in that one room, and thats before you take into account the second portal in Trondheim that we were connecting to. 

I really enjoyed the rehearsals. It was an amazing experience to play with Lindsay, Joni and Wenbo - musicians infinitely more talented than myself, and at the same time relaxed and easy to play with. Being hundreds of kilometers apart meant that the latency could be an issue at times (I suspect Lindsay would have struggled with this the most, being on his own up in Trondheim), but I felt it was just about manageable for the most part. Playing the concert was fun, especially getting to play Autumn Leaves with Guy on saxophone. Things sounded fine as we played in the room, but as Wenbo noted above, the streamed sound wasn't brilliant. Maybe monitoring through headphones while playing would have helped us pick up on this sooner.

