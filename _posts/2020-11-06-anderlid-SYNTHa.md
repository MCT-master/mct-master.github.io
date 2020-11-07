---
layout: post
title: "SYNTHa"
date: 2020-11-07 01:00:00 +0200
categories: digital-audio
author: Anders Lidal
image: /assets/image/2020_11_07_anderlid_SYNTHa.jpg
keywords: digital audio, csound, vst, cabbage, softsynth, feedback, midi, kitten, music, analog, hardware
excerpt: "While this is not a clone of the classic EMS Synthi A, it might have a trick or two up it's sliders, this one to: A softsynth with hard features."
---

Trying out Csound for the first time, was both fun and frustrating. Actually I have previously looked at Csound, but at that time I quickly realized I'd rather make noise the old school way (even though Csound might be consider pretty old school). So I was a little excited on how this should go.

The coding itself was pretty understandable to me, the logic feels more, well, logic to me than other coding I've seen. But there were some bumps in the road. I had, and still have, too many issues with the front ends and what-not, and Cabbage, as I've been using to make this softsynth, needs to restart every time I have runned the code and used my MIDI-keyboard. Very annoying, of course, but at least it's rebooting quickly.

I started out very ambitiously, and planned to make cool plugins for Logic and other DAWs. A sound on sound-looper with degrading loops was my first thought, because I want one after selling my Strymon Volante. But I quickly found out I'd rather make a softsynth, since I even didn't get the filepath to my testloop right.

### SYNTHa
So SYNTHa started coming to life. The name is of course inspired from the classic EMS Synthi A, but other than that, there are little resemblance between them.
<figure style="float: auto">
   <img src="/assets/image/2020_11_07_anderlid_SYNTHa.jpg" alt="Alternate Text" title="Do you see the resemblance?" width="auto"/>
   <figcaption><i>SYNTHa (top left) vs Synthi A (the rest).</i></figcaption>
</figure>

SYNTHa is built using vco2 for the saw and the square, and like many cool analog synths, it's got a pulse width modulation (PWM). I had many issues with the PWM, first I spent some time trying to figure out how to get the PW-slider to move along with the modulation, and I kind of got the idea how to it, but I thought I'd spend the time on the synth itself first. But the main issues with the PW and PWM is that I could not get rid of the click in the modulation, even though I scaled the PW to not go into flatline.
But anyhow … these waveform are feed the moogladder-filter, and then into the ADSR-section (with up to 180 seconds releasetime, no need to rush it …). Before the master this is fed into the reverb, where you can control the amount (Reverb-knob) and the frequency of the reverb (Dampen-knob).

### Hardware
I'm still a hardcore hardware-guy, so I always think in terms of how this synth could be fun as a hardware-synth, sitting on my desk. And one thing I'm a big fan of, is inputs no hardware-synths. Like a vocoder, like the input on my Moog Voyager as well as the input on my TR-8 drum machine. There are always some exciting possibilities when you can put an instrument into another.
So I equipped SYNTHa with two inputs, channel 1 for a microphone, and channel 2 for a guitar. So the pitch of the incoming signal is turned into control signal, using the pitchamdf-opcode. And I have used this to play a synth-tone, ranging from saw- to triangle- to ramp-wave, using the vco2 again.

### Reverbera-a-a-ti-o-o-o-o-o-o-o-on
In addition I use the pitch of my voice to control the amount of reverb, when I activate the VOICEctrl. This function runs even with no volume on the VOIsynth, and I also only run the normal part of the synth through the reverb, to keep things somewhat in line. But as you might hear if—you're patient enough—in this way to long demovideo, the reverb gets a little to eager sometimes, even when scaling it down to 95%. But hey, what's music without any noise and hiss?


<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1ZfR-ovCM-B1g86OZ5bi1BGkZzuUNYpeL/preview" width="800" height="500" frameborder="0" allowfullscreen></iframe>
   <figcaption><i>No rush, huh?!</i></figcaption>
</figure>

Having my hardware oriented brain, I didn't spend time getting this to work properly inside Logic with the inputs, only the supersoftsynth-part of it. So I've been using it for live-playing only, and filmed this session using Quicktime Player, and Photo Booth, to also show what happened outside the computer.

### To be continued
To conclude this very brief introduction course we've had in digital audio: it has been very rewarding and interesting in my point of view, and I will spend a lot more time trying to learn more csounding, as it seems to me there are no limits in what I can do with it (when I learn it), and this is a way to actually experiment with soundrouting, without having to sell my house to buy the hardware.
