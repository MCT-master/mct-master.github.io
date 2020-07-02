---
layout: post
title: "Smokey and the Bandwidth"
date: 2020-04-04 23:00:00 +0200
categories: portal
author: Paul Koenig
image: /assets/image/2020_04_04_aleksati_70s_CB.JPG
excerpt: "Hijacking Old Tech for New Uses"
Keywords: Citizens' Band, CB Radio, Online Collaboration, Latency
---

## CB Radio for Real-Time Monitoring?

Here in the MCT program, we deal a lot with internet communication technologies. In the years B.C. (before COVID-19), we would
meet four or five days a week in the Portal and chat, collaborate, and conduct classes between Oslo and Trondheim with some of
the best technology available. Leveraging the cutting edge and trying to push the boundaries of LOLA, TICO, Dante, and other
low-latency protocols was our daily task.

Now, the Portal sits empty. Hopefully, someone remembered to turn off the lights. All MCT courses and meetings now takes place
via Zoom, pretty much like the rest of the university’s activities - like the rest of universities and businesses worldwide.

It’s kind of a step backwards for us, technology-wise. But I think it’s been a good exercise in the practical application of
"everyday" tech, and really valuable for me personally. In the last few weeks, I think I’ve learned more about my own laptop, it’s capabilities and limitations, than I learned in the entire seven years since I bought it.

After all, most people don’t really have access to the level of tech we became accustomed to using in the Portal. What do we
have to teach others about Music Communication Technology when the average person lacks a Portal? The real question becomes,
what can we do with what we have?

I don’t know if it’s just the effects of sitting around the house all day, carefully cultivating my quarantine beard and
pondering the future, or something that could actually be of use to somebody - but I have this weird idea to help local
musicians be able to collaborate in real-time, without having to leave their own quarantine bunkers. Yes, it involves CB radios.

## What's the big deal?

The problem space here is the same as it always has been: latency. Even for musicians that live right down the street from
each other, the cumulative round-trip latency incurred as a musical signal from Musician A is A/D converted, sent over WiFi,
bounced from node to node all around town, then D/A converted and piped into the ears of Musician B, who reacts with a
collaborative musical signal which then travels back to Musician A along the same lines can be too much to be useful,
particularly when network traffic is high. And right now, it’s pretty much always high.

In the Portal, we didn’t have this problem. With our dedicated network, round-trip latency Oslo-Trondheim was consistently
around 30-40ms, making real-time musical collaboration possible. At home, using Zoom or other similar technologies, latency
has fluctuated widely and unpredictably, veering drunkenly between 30-300 or more milliseconds. It’s enough to make me want to
take up drinking myself, except that I can’t afford booze now.

## But I digress.

The idea works like this: Each musician has a CB receiver for each member of their ensemble, plus one
transmitter for themselves. Each musician transmits their signal on a separate dedicated channel, which is received in turn by
each other musician.  Therefore, if the ensemble has four players, each player would have four CB receiver/transmitters, three to receive the signals from their bandmates, and one to transmit their own. Each player would then be able to mix their own custom monitor mix by routing each of the four signals into a simple desktop mixer.

The fun doesn’t have to stop there, of course. The players could also send a separate signal (not the CB audio) in high-
quality via the internet, without concern for latency, since they would be playing and reacting to the audio they were
receiving through their CBs. These signals (audio as well as video, if desired) could be received, aligned, and streamed as a
real-time performance via the internet, with very good results. The end observer wouldn’t have to be aware of the novel
monitoring system used, all they would know is that the musicians are keeping surprisingly good time, considering their
geographical separation.

Now, since none of that made any sense, I made a diagram. See Figure 1.


<figure>
    <img src="/assets/image/2020_04_04_aleksati_CB_Monitoring_Flow.jpg" width="800">
    <figcaption>Fig 1. How It Works</figcaption>
</figure>


Anyway, that’s how it works in my dream. Could it work in real life? 10-6, good buddy. Gonna need some green stamps to put the
hammer down on that one.
