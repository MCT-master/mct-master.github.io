---
layout: post
title: "A Christmas tale of cookie boxes and soldering"
date: 2022-12-08 00:01:00 +0200
categories: interactive-music
author: Arvid Falch
image: /assets/image/2022_12_09_arvidf_nisser.jpg
excerpt: "How I got the cookie box drum I never knew I wanted for Christmas"
keywords: IMS, Electronic Drums
---

# The Cookie Box Drum

The final submission of the [MCT Interactive Music Systems](https://www.uio.no/studier/emner/hf/imv/MCT4045/) course was to create our own Interactive Music System (IMS), or more specifically create some sort of instrument using the [Bela](https://bela.io/), at least three sensors and some funky [Pure data](https://puredata.info/) code to control it all.  

Trying to come up with an idea for my IMS project, I envisioned a hand held electronic drum capable of playing lots of different drum sounds just by pressure control on the skin and movement of the drum.

This post won't go into details about how the instrument turned out in the end (You can check it out in action on this video (link coming 12.12.2022)). I thought it might be more interesting to describe how a guy with ten thumbs and the practical sense of an ostrich went about the process of building the physical parts of the IMS.  

<figure style="float: none">
   <img src="/assets/image/2022_12_12_arvidf_messy_desk.jpg" alt="My messy workstation" title="" width="auto" />
   <figcaption><i>Spoiler it got messy. This is just me doing some final tweaks. My family can't wait to have their kitchen table back.</i></figcaption>
</figure>

## Planning the build

In my mind's eye I envisioned this black drum frame, strobe lights blinking, and some super cool logo in pink on the skin.

But what kind of material to choose? Should I build it from scratch or find some fitting frame and assemble something? I pondered this for a few days, spending time watching brilliant people construct all kinds of crazy stuff on Youtube.

Somehow I finally realized that I had to find something easy to start with, so I could start testing my IMS. The complex construction would be postponed until later.

So where to go? To the kitchen. Like a kid I took out some different kitchen utensils and started banging anything resembling a drum. And I found my perfect pre-prototype candidate. A Christmas cookie box from last year.

<figure style="float: none">
   <img src="/assets/image/2022_12_12_arvidf_cookie_box.jpg" alt="My cookie box" title="" width="auto" />
   <figcaption><i>My dear cookie box</i></figcaption>
</figure>

I taped up my sensors, hooked it up to the breadboard and started hitting it with a drumstick. And it was booming. My [piezo sensor](https://www.sparkfun.com/products/10293) was ringing like a church bell. And even though my first ever drumming as a kid happened on a cookie box, I had to admit that it wasn't very pleasant to hit on bare metal with a drum stick. So I needed padding.

<figure style="float: none">
   <img src="/assets/image/2022_12_12_arvidf_first_drum.jpg" alt="My first instrument" title="" width="auto" />
   <figcaption><i>Me 3 years old back in 1983 with my very first instrument, after banging on cookie boxes for a long time. </i></figcaption>
</figure>

In a shelf in a CO store I found the perfect material. A black mat, thick yet soft enough to be my drum padding. Only problem was it didn't have a price tag, and it was quite dirty. When trying to purchase it, the guy behind the desk looked at me like I had some serious issues, and informed me that they didn't sell that. It was a shelf mat. I pleaded and almost faked some tears telling him I really needed it, and to avoid scandal the clerk told me to take it under my arm and pretend this never happened. So with a perfect drum padding and slightly injured self esteem I went home ready for the next stage.

## Soldering

I had soldered some guitar mics and pedals back in the early 00's, so I thought this part of the build would be like a walk in the park.

Two days later, three copper boards in the graveyard and an amount of norwegian swear words not heard since [Oddvar Brå broke his ski pole](https://youtu.be/nBr9uQG52a0?t=20)[^1] I was about to give up. Really.

The MCT master program has been pretty challenging to say the least, but I've never actually considered quitting a course. But facing the challenge of soldering very small components on a tiny board almost broke me. I had to call out for help.

A former collegue of my brother had a father (I knew neither of them) that accepted a zoom call to give me some advice. His first reaction when seeing my board was "*Norwegian swearword* how did you do that? How shaky are your hands?" He was witnessing a soldering massacre.

But in the end he gave me some good advice and told me the most important sentence, sort of the moral of this story. "You'll fix this. It'll be fine. Just start over again." And so I did.

Or so I told him. Instead I made a devious plan to unsolder my mistakes and fix my board (so I didn't have to start from the beginning), and spent the night doing just that. I decided not to test it until the next morning, as then maybe I could get some sleep in ignorant bliss.  

It didn't work the next morning. I had made such a stupid mistake (which took yet 4-5 hours of precious time to figure out) that I wont even describe it here, and yet another board had to go the graveyard.

But I sold(i)ered on (sorry), and somehow all this trial and mainly error had improved both my soldering and electronics skills. The final attempt went like a breeze.  

<figure style="float: none">
   <img src="/assets/image/2022_12_09_arvidf_circuitboard_graveyard.jpg" alt="Soldering mishaps" title="" width="auto" />
   <figcaption><i>My three last boards. The one to the left finally worked</i></figcaption>
</figure>

## Final build

November was a flurry of writing some long papers in other courses, desperately trying to finish all my assignments. I had a working pre-prototype (which was pretty fun to play with), but my vision of the cool pink logo and blinking lights was now just a distant dream. Sleep deprivation started to kick in, and I started to think that a cookie box drum was a pretty cool idea after all. And December came, the Christmas lights were lit in the trees, there were even some snow covering the three square meters of ground I could see out of my workspace window. The Christmas box drum was not just a good idea anymore, it was my only chance.

And assembling my board and the bela inside the drum? My drawings of metal tiles, screws and drilled holes in the box?
[Don't even ask](https://en.wikipedia.org/wiki/Gaffer_tape).

Now I'm planning to enjoy the holidays, and whenever I eat a cookie I will have a newfound respect for the box they came from. And I might tap it a bit too hard with my fingers to hear how it sounds. Is there a better cookie box out there? Probably.

* If you're struggling with soldering as me, I found [this video](https://www.youtube.com/watch?v=VxMV6wGS3NY&t=245s) helpful. Or ask around, people with such skills are usually nice people eager to share their knowledge. My only advice? Go slow, expect to redo and start from scratch, and don't give up.  

[^1]: A famous national trauma, during a skiing world championship in 1982.
