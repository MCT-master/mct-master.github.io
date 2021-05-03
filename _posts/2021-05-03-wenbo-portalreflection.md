---
layout: post
title: "End of semester reflections for the Portal experience"
date: 2021-05-01 09:00:00 +0200
categories: portal
author: Wenbo Yi
image: assets/image/2021_05_02_wenboyi_performance.JPG
keywords: portal, telematic-music, concert, LoLa, live-performance
excerpt: "The first physical portal experience for the MCT 2020 class"
---

# 1. Overview

The **MCT4022** was our first physical course since we attended the MCT. *The aim of this course is to learn to operate and maintain the Portal, the audio-visual communication platform connecting the two campuses in Trondheim and Oslo.* Meanwhile, the preparation of a telematic concert between UiO and NTNU is one of the important outcomes of this course.

In this semester, we followed Guy and Eigil, learned about the operation and the set up of the hardware devices in Portal, also the low-latency communication tools such as [LOLA](https://lola.conts.it/), TICO, [Zoom](https://zoom.us/) between Oslo and Trondheim campuses. In this blog post, I will summarise and reflect on my personal experience with the MCT4202 and our telematic concert.

# 2. Experience and Troubleshooting

The experience in Portal was a mixed bag. During [Team C rehearsals](https://mct-master.github.io/portal/2021/02/28/joni-teamcjam.html), we encountered a variety of problems, from software to hardware, from the beginning of the course to the end of the concert. Here I will list three common problems related to LOLA that we encountered during the semester.

The first is a very common one, if the LOLA is connected for a longer period of time (usually more than two hours), the audio receive will suddenly disconnect at one end, while the other side is completely normal. My experience is that after restarting the whole computer altogether and reconnecting LOLA, communication can usually be restored.

The second problem occurred during a rehearsal in the middle of the semester when we couldn't send the audio signal to Trondheim but we could hear from the other side. After asking for help from Stefano, we learned that in the audio input offset option in LOLA Setup, we should select the same number as the sound card channel setting, which is usually 6 on the Oslo end.

<figure style="float: auto">
   <img src="/assets/image/2021_05_02_wenboyi_lola.png" alt="" title="LOLA interface for audio input offset"/> <figcaption>LOLA interface for audio input offset</figcaption>
</figure>

The appearance of the last problem wasted 3 hours: we couldn't hear from Trondheim, the computer and LOLA showed the signal, but the mixer remained silent. This problem was automatically restored to normal after a few days. After consulting with Stefano, this may be caused by a master clock conflict between audio devices. In the entire signal flow, we need to ensure that there is only one master clock, and this can be set on both the computer and the hardware interface.

# 3. Reflection

In summary, it was really a blessing to be able to participate in a physical class and meet people face-to-face during the pandemic. For preparation of the concert, we encountered many problems but we also solved them through learning. It was a valuable experience for me.

From a musical perspective, as a traditional classical music soloist, I am not sure about the concept of telematic performance at the beginning. But rehearsing with Team C did make me feel the joy of playing in an ensemble, and made me realise that it is **POSSIBLE** to play music successfully together even if we are 500 kilometers away. Besides that, I played jazz music for the first time. The jazz rhythm was really hard to feel at the beginning, but with the help of Stephen and Lindsay, also the lead from Guy in the concert, I think I comprehended some tips on how to "swing" with the Jazz.

During the concert, although the digital piano was being constantly compressed for unknown reasons, and re-listening to the Youtube stream was a completely different experience from the live one. But I guess that's probably one of the charms of being involved in telematic performance, you can never predict what strange problems you'll have next time!

The MCT4022 was a good exploration of telematic performance and low-latency transmission techniques, and I hope to further refine my understanding of Portal technology in the next semester!
