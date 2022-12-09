---
layout: post
title: "Expressive Voice: an IMS for singing"
date: 2022-12-09 10:00:00 +0200
categories: interactive-music
author: Sofía González
image: /assets/image/2022_12_09_sofiagon_expressive_voice.jpg
keywords: ims, ims desing, singers
excerpt: "Take a peak at my IMS and the reasoning behind its design."
---

Some years ago now, I went to a concert in which the singer used a megaphone in front of their microphone to sing a part of the song. I remember thinking back then that it was such a cool concept to get a different sound from your voice...As a teenage singer, I had never thought of modifying my voice live. And now, years later, I got to implement that concept in a IMS.

<figure style="float: none">
   <img src="/assets/image/2022_12_09_sofiagon_megaphone.jpg" alt="" title="by Thirdman in pexels" width="auto" />
</figure>

I designed this IMS with the goal of giving more control to the singer (in this case, me) to enhance the expressiveness of their voice, (the reason why I chose its name). By allowing singers to add effects in real time, I wanted to expand what they can control from their performance to augment the emotions they want to transmit. But, more importantly, I wanted to expand what **I** could do in my performances. Yes. This IMS was somewhat of a self-indulgent project.

<figure style="float: none">
   <img src="/assets/image/2022_12_09_sofiagon_expressive_voice.jpg" alt="" title="" width="auto" />
</figure>
This is what Expressive Voice looks like. Even though it's not the most aesthetically pleasing design you'll ever see, it fulfilled its purpose.

To better understand what it does, I'll present the sensors and their functions:

- The rotary potentiometer, more commonly known as a knob that regulates a distortion effect.
- The sliding potentiometer, a.k.a. slider which regulates the amount of reverberation.
- And the force resistor sensor (FRS) or what I usually call pressure sensor, which regulates a delay effect.

As for the effects, I chose the ones I thought were more common and that I considered myself capable of implementing (not without tutorials, that is). On the other hand, the reason why I chose these sensors among the different and more complex ones I had available was mainly because
*singing is **hard** *.

Singing in itself, like playing any other instrument, is already a complex task. But I, personally, need to concentrate a lot for singing. In the past, I was diagnosed with chronic pharyngitis (inflammation of the pharynx). Thankfully, after going to singing lessons, I stopped suffering pharyngitis, yay! However, I still struggle with my throat and need to think a lot about how I position it to avoid hurting it. Even when I talk. In fact, it's been a few years now since I started playing guitar (at a basic level), yet I'm still unable to sing while I'm playing for long before I notice that my throat is sore.

The point I'm trying to get to (after all this over-sharing) is that singers, in general, and me, more specifically, need to be able to focus their concentration on singing. That is a big part of why I went with the knob and the slider, which are pretty common and straightforward sensors. As for the pressure sensor, it is a more interesting sensor and it does take a little more of attention than the other two. It is a little bit sensitive, so you need to apply just the right amount of pressure depending on how much intensity you want, which can take some thinking and practicing.

<figure style="float: none">
   <img src="/assets/image/2022_12_09_sofiagon_singer.jpg" alt="" title="by CDD20 in pixabay" width="auto" />
</figure>

So, basically, since I wanted to work on a project that really motivated me, I went for a design specific to my needs as a singer. Even though this kind of extended-microphone IMS is not a new concept at all [1]. But, as I mentioned in my previous post about IMSs and emotions [2], it is very important that IMSs become more accessible and that people create more of them. Someone might build one that caters to specific needs (whether they are aesthetic or for, for example, differently-able people). Someone might create one that aids people through music therapy. Or, simply, because someone will be able to carry out an idea that occurred to them in a concert, which they thought was very cool.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

# References

[1] Y. Park, H. Heo, K. Lee, "VOICON: An Interactive Gestural Microphone For Vocal Performance" in *NIME*, 2012. https://www.nime.org/proceedings/2012/nime2012_199.pdf

[2] S. González, "Interactive Music Systems", in *The MCT Blog*, 2022. https://mct-master.github.io/interactive-music/2022/12/09/sofiagon-emotion-IMS.html [Accessed, Dec. 09, 2022]
