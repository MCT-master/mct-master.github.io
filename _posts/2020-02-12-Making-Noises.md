---
layout: post
title: Making Noises With |noise~|
date: 2020-02-12 00:24:00 +0200
categories: Audio-Programming
author: Paul Koenig
image: assets/img/2020-02-12-paulgk-ProgrammingParadise.jpg
excerpt: "Wherein I attempt to either program paradise or just make bacon-frying noises, which could be the same thing, actually"
Keywords: Puredata, breakfast, relaxation, nature
---

# Nice Weather

The project I undertook was to design several soundscapes derived from nature and implement them in a mobile application. The sounds I attempted to model were Ocean Waves, Wind, Rain, and Thunder. I also included a simple filtered-noise generator for my wife, used to help mask external noise while sleeping.

<figure>
<iframe src="https://drive.google.com/file/d/1eDOx_gGJmMBOftpK9IzgPl4KOZ04KFfb/preview" width="640" height="480"></iframe>
    <figcaption>How It Works, More Or Less</figcaption>
</figure>

# Ocean Waves

The ocean wave generator uses three nearly identical “engines” panned left, right and center. In each engine, white noise is modulated by a low-frequency sine wave to produce the basic slowly-swelling undulation of an ocean wave. For additional character and variation, I piped this through a low-pass filter with a cutoff frequency varying between 30 and 400 hz, and then automated this value using metro and random objects to create an element of unpredictability to the sound.

The last element in the ocean waves generator is a little filtered white noise cut off at 218hz, to provide some background rumble. I had noticed that the randomly-generated waves occasionally would conspire to align their cycles and result in a split second of near-silence, as if the sea had suddenly evaporated. The background noise keeps this apocalypse a reasonable arms-length away, and also smooths out the sound in general. Pleasant!

The panning of the three main elements does a pretty good job of giving the impression of waves crashing to the left, right and center as you stand on the beach. A little imagination helps. 


# Wind

As it turns out, the sound of wind (at least, a certain kind of wind) is not altogether unlike ocean waves in its basic implementation. The patch takes the same form, using a low-frequency sine wave to modify noise to produce a slow undulation in sound. 

This time, however, I used a very narrow bandpass filter to give the resultant sound a little pitch, then automated the cutoff frequency to randomly range between 300-600hz. The automation is set a bit faster than the waves, causing the sound to rise and fall like the wind whistling through a high mountain pass in an old Western, say the 1969 classic “Paint Your Wagon”, which just so happens to feature Harve Presnell singing “Mariah”, a song about the wind. 

Incidentally, also featured in the film is a young Clint Eastwood, who sings(!) “I Talk To The Trees”, which might be of some interest to my colleague Gaute Wardenær and his attempt to communicate with his houseplants. 

# Rain

This is where things started to get interesting. Rain is pretty complex and, needless to say, can take a great many different forms. Since a full-on downpour is pretty close to full-spectrum noise, I tried to reproduce something slightly more subtle, a pretty good soaking shower that creates a variety of distinct sounds as millions of droplets strike and then run off the roof of the porch, drip off the leaves of the trees, and soak the load of clean laundry you forgot to bring in before it started raining. 

The rain engine has five elements. The first is just filtered background noise to keep things ambient. Another element consists of noise modulated by noise filtered at a low frequency and then bandpass filtered at 400hz to create a rough, muffled series of low-frequency spikes that remind me of rain on a well-insulated roof (if you’re inside). Intrepid observers will also note this part of the patch’s similarity to the Thunder generator, coming up next. 

The next three elements create the main body of the sound, and get quite interesting in their implementation. Once again I used noise modulated by a sine wave as in the prior examples, only this time the signals interact at huge, city-block-leveling amplitudes. I experimented around quite a bit with the numbers, always being sure to view the waveform on the array before piping it into my ears. What one gets is gigantic amplitude spikes that are a bazillion times (I’m using scientific terms here) greater than the mean. Greatly reduced in amplitude and filtered, one gets either a series of random pops like individual raindrops falling on a old Samsonite suitcase, or, depending on the relative hugeness of the numbers, a more even sizzling sound that could be the bulk of the rain coming down or bacon frying, depending on whether or not you’ve had breakfast yet. 

# Thunder

And now the good bit - a little distant thunder to go with the nice, soaking rain shower. Using the same principle as the low-frequency rumble generator used in the Rain patch, combined with a couple of line objects to create a slowly fading boom, and the sound is pretty close to distant thunder already. I put two of these elements side by side, filtering the second at 100hz and delaying its bang by 4000ms to create the “aftershock” of a good crack of thunder as it echoes off the mountains several kilometers away. 

There is a lot that could be done with this patch to introduce some randomizing elements, but for now it’s one kind of thunder.

# Filtered Noise For My Wife To Sleep To

I probably don’t need to explain this one, but it’s included for its simple appeal: heavily filtered, low-frequency noise to sooth you to sleep. Zzzzzzz.

# Conclusion: The Application

All of these patches were combined into an app using MobMuPlat! Now I can take the weather with me everywhere I go. It’s especially fun, and perverse, to listen to the rain on headphones, while walking home in the rain. Who does that? I do, apparently. 

<figure>
    <iframe src="https://drive.google.com/file/d/1gWHBN_J_e-_OvU_9OisvmYefqB22yzOJ/preview" width="400" height="480" align="center" frameborder="0" allowfullscreen="true" alt="Mesmerising GUI"></iframe>
    <figcaption>Mesmerising GUI</figcaption>
</figure>

For all of these patches, I am deeply indebted to a series of online tutorials by Obiwannabe, who I believe to actually be Andy J Farnell, author of an excellent book on Pd sound synthesis (Farnell, 2010) . I also did a bit of reading in Tony Hillerson’s book, Programming Sound With Pure Data (Hillerson, 2014). 

# References

Farnell, Andy. Designing Sound. Cambridge, Mass: MIT Press, 2010.

Hillerson, Tony. Programming Sound with Pure Data: Make Your Apps Come Alive with Dynamic Audio. Pragmatic Programmers. Dallas, TX: Pragmatic Bookshelf, 2014.
