---
layout: post
title: "It's not just phase, mom!"
date: 2019-08-24 14:57:20 +0100
categories: digital-audio
author: Gaute Wardenær
image: /assets/image/2019_08_24_stefanof_SMAART.jpeg
excerpt: "Why phase coherency in loudspeakers matters."
---
## Buzzwords
There is a lot of abstract terms and expressions being tossed around in Pro Audio. Buzzwords like "floating point", "time alignment", "pattern control", "crossfired, dual endfire, cardioid subwoofer array", "holographic stereo imaging"- the list goes on and on - dominate our lingua when we try to one-up each other in conversations about sound reinforcement. But there is one term that I hear being misrepresented or poorly understood more than others, and that is phase.

## What is phase?
In short, phase is the relationship between two waveforms. Say that you have two matching loudspeakers, each is playing a sine wave of 440Hz. The loudspeakers are placed close together and have matching amplitude, so that the total sum of the signal produced is +6db of a single source.

Now, imagine that we flip the polarity of the signal going into one of the loudspeakers. The two loudspeakers are now 180 degrees out of phase and should theoretically cancel each other out perfectly, so that the result is total silence at the listening position.

There is also another way we can get the same result without flipping the polarity of any loudspeaker, and that is with distance.

Instead of flipping the polarity of one of the speakers, we are now going to move said speaker back half a cycle of 440Hz:

342 (the speed of sound through air at sea level in 22 Celsius) divided by 440 equals one period or 0.777 meters. Divide that by two and we get 0.3886 meters.

By moving one of the speakers back 0.3886 meters and compensating for the loss of amplitude by distance, we should achieve the same result of total cancellation at the listening position.

## Consequences in the real world

"But, Gaute; I never listen to loudspeakers placed in that way, this is nonsense!"

Yes, you do, all the time.

Imagine a typical loudspeaker, say the Yamaha NS10
<figure>
  <img src="/assets/image/2019_08_24_stefanof_NS10.jpeg" width = "100%" align="center" />
  <figcaption>The most iconic studio monitor</figcaption>
</figure>
While true that you can obtain almost perfect time alignment with the drivers in these speakers by sitting dead center of the stereo pair, with equal distance to the drivers in both the horizontal and vertical plane - in reality you can't, but crossover distortion and the like is a whole nother story -, but let's be realistic here, when do you ever sit exactly like this? Not at a concert, that's for sure.

The problem occurs when you have loudspeakers with multiple drivers that does not sum perfectly, and it is MULTIPLIED when you have arrays or clusters of imperfect (hint: no loudspeaker is perfect) loudspeakers interfering with the other imperfect loudspeakers, trying to reproduce the sound of imperfect microphones picking up the same source at different distances, summed by a mixer with uneven latency on a channel basis...

The result of this is a blurry stereo image, lack of clarity, impact and dynamics and poor separation in the listening experience.

## Conclusion

Sadly, I do not have the time to address all these issues in this blog post. The main goal has been to introduce you, the reader, to the concept of phase and how it effects your listening experience.

For you engineers out there: Before you reach for the EQ knob in order to give the kick drum a little more "oomph", have you considered that it might just be out of phase somewhere?

For the audiofiles: Instead of buying gold plated connectors for your HIFI, have you considered checking if the drivers in your 100 000$ speakers really sum that well in your listening position?

For further reading, here are some useful links:

<a href="http://www.danleysoundlabs.com/wp-content/uploads/2012/01/The-Tapped-Horn.pdf" target="_blank">- Tom Danley's Synergy Horn explained</a>

<a href="https://www.merlijnvanveen.nl/en/study-hall/42-understanding-phase" target="_blank">- Merljin van Veen's explanation of phase</a>

<a href="https://www.youtube.com/watch?v=zyPUTxsuZN8" target="_blank">- Robert Scovill explains time alignment between tracks in a digital mixer</a>
