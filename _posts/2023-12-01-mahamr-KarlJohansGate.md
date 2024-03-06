---
layout: post
title: "An Interactive Evening on Karl Johans Gate"
date: 2023-12-01 18:00:00 +0200
categories: interactive-music
author: Maham Riaz
image: /assets/image/2023_12_01_mahamr_thumb.jpg
excerpt: What if everyday objects decide to kick it up a notch and embrace a life of their own?
keywords: interactive music systems
---

What if everyday objects decide to kick it up a notch and embrace a life of their own? I'm talking about a magical realm where paintings aren't just static canvases but interactive experiences that respond to the environment around them. We've all seen this idea in movies and cartoons, where art - whether it is statues of paintings, gains a new lease on life. We're diving into that fantasy land where art meets tech, and it's more than just Alexa playing your favorite tunes.

<figure style="float: none">
   <img src="/assets/image/2023_12_01_mahamr_hp.jpg" width="300" height="174" />
   <figcaption>The singing lady portrait from Harry Potter</figcaption>
</figure>

Let's talk about sensors. They're like the superheroes of the tech world, inspired by our human senses. Touch, sight, hearing – you name it, there's a sensor mimicking it. Want to know the temperature? Thermometer's got your back. Eyes for visuals? Cameras are the tech doppelgangers. Ears for hearing? Say hi to microphones. Taste and smell might be trickier, but pH strips can at least tell us if something is acidic or alkaline. The magic happens when these sensors team up to create seamless interactions. Think of your voice assistant – it hears you, processes your words, and then responds through a speaker. It's a dance of sensing, processing, and responsive output.

Now, entering into our project – an interactive version of <a href="https://www.artchive.com/artwork/evening-on-karl-johan-1892-by-edvard-munch/">Edvard Munch's <em>Aften på Karl Johan</em></a> (tr: Evening on Karl Johans Gate). I am putting sensors on a canvas to make it react to the world around it. Imagine lights twinkling or sounds playing as you walk by.

<figure style="float: none">
   <img src="/assets/image/2023_12_01_mahamr_default.jpg" alt="" width="281" height="197" />
</figure>

The image was reproduced on poster fabric commonly utilized for conference presentations. Using clamps, the printed poster fabric was carefully stretched and affixed to the canvas frame with a staple gun. During this process, it was crucial to avoid overstretching the print to prevent eventual tearing. Tactful folding of the fabric at the corners was necessary to prevent bunching, a phenomenon known as "donkey ears" in canvas stretching. Subsequently, the fabric print underwent a matte sealer treatment, employing white decoupage glue that dries clear. Multiple coats were applied with a paintbrush, allowing each layer to dry before adding the next. Matte sealer not only gives it an oil painting vibe but also makes it water-resistant, a handy feature when you're transporting it through the rainy streets of Oslo.

I am weaving a story into the mix, using sound design to skillfully convey a narrative that engages and immerses viewers. Taking a cue from the world of films and games, the project borrows techniques from both. It includes diegetic and non-diegetic sounds, as well as intermittent sounds, adding a touch of realism with random environmental noises.

The wind sounds in this project were crafted using a Pure Data patch sourced from Andy Farnell's book, "<a href="https://mitpress.mit.edu/9780262014410/designing-sound/">Designing Sound</a>," providing a foundation for authentic synthesis. One-shot environmental sounds were sourced from audio databases on the internet. The background music, uniquely composed for this project, originated in Logic Pro X. It involved the use of a non-native synthesizer plugin, coupled with MIDI orchestration, incorporating a diverse array of sample libraries from third-party VST plugins to achieve a rich and dynamic auditory landscape.

For the background score, I used the principles of <a href="https://link.springer.com/chapter/10.1057/978-1-137-51680-0_5">hyperorchestration</a> and tweaked the timbre of the virtual music ensemble to match the vibe of the painting. It's like adding reverb for that "all alone" protagonist scene. The painting becomes a storyteller, setting the mood with a tense aura in its current iteration.

The painting has a light-dependent resistor making LEDs light up when it gets dark, giving those windows in the painting a soft glow. Infrared sensors – one triggers random street sounds when you walk by, and the other toggles ambient sounds like wind and crowd murmurs on and off. The project was implemented on Bela and Pure Data (Pd). I learnt canvas stretching techniques, how to hammer nails perpendicularly, how to design a circuit, cut a perfboard, use a glue gun -&nbsp; the list goes onnnn.

And, by the way, hard work did pay off. Behold - my first ever perfboard!

<figure style="float: none">
   <img src="/assets/image/2023_12_01_mahamr_download.jpg" alt="" width="204" height="214" />
</figure>

I made sure there were no overlapping wires, that is was customizable (have left space for new inputs and outputs), and that everything was pressed against the board firmly. I was advised to solder parts for one sensor at a time and check if the circuit worked before moving on to the next. However, I soldered the whole thing all at once, then nervously connected this to my Bela and sensors... and it worked. :') The pic below shows the top of the perfboard. There are no wires on this side.

<figure style="float: none">
   <img src="/assets/image/2023_12_01_mahamr_picture.png" alt="" width="206" height="189" />
</figure>

My key takeaways from this project were:
1. One must ensure that the addition of sound and lights complements the original artwork, and aligns with its style and mood - instead of overshadowing it.
2. User testing is a good way to gather feedback and observe how people respond to the interactivity. This helps analyze whether the addition of new modalities (sound and light) contributes to or takes away from the overall art experience.
3. Experimenting with varying intensity and interactivity levels is the way to go. It is perhaps the only way to find the right balance.
4. Sensor thresholds should be set according to the environment the interactive object is in.
5. It always helps to document the process, so when you are writing about it later, you remember the important details.</div>

<figure style="float: none">
  <iframe height=360 width=640 src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/video/2023_12_01_mahamr_interactivepainting.mp4"></iframe>
  <figcaption>Grab some snacks and enjoy the video</figcaption>
</figure>

#### List of Acknowledgments
This interactive journey has been a heartwarming collab and I've learned that creating something new truly takes a village. Here's a shoutout to my amazing folks:
1. Anders from UiO Grafisk Senter: a painter turned graphic designer, who printed the painting on conference poster fabric and offered invaluable guidance on mounting it on a canvas frame
2. Mojtaba: showed me how to solder when I first joined RITMO over a year ago
3. Finn: lent me a hammer and nails
4. Björn, Bilge and Kayla: encouraged/recommended hacks for the assembly of the painting
5. Non-UiO friend: helped figure out how to use a staple gun and stretch fabric onto a canvas
6. Classmates: cheers to an inspiring semester filled with creative sparks
7. Friends at RITMO: their kind words, enthusiastic smiles and friendly waves in the blue room subroom brightened my days
8. Game audio and film scoring teachers: whose lessons continue to inspire me, even years later
9. Staff at Kreatima: paint brush recommendations and insights on deep edge canvases
10. Alexander, my supervisor: for always lending me an ear, in addition to the Designing Sound book and a staple gun for this project
11. Stefano, my teacher: for being an ocean of knowledge and generously sharing it
12. Mom: for contagious enthusiasm and brilliant story ideas. <em>Bohat saara pyaar</em>. :] &lt;3
