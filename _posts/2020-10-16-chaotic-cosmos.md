---
layout: post
title: "cOSmoChaos"
date: 2020-10-1 18:00:00 +0200
categories: physical-computing
author: Anders Lidal
image: /assets/image/2020_10_16_anderlid_hardware2.jpg
keywords: physical-computing, osculator, gyrosc, midi, osc, kitten, music, analog, hardware
excerpt: "Cosmos and chaos are opposites—known/unknown, habitated/unhabitated—and man has through all times been seeking to create cosmos out of chaos. But what has this to do with GyrOSC controlling my hardware … well, everything."
---

I love hardware when making sounds. I’ve had several goes on softsynths, MIDI-stuff and also hardware with menus meant for scuba-diving. But I always get back to one-knob-per-function style hardware, at least when performing.

I never got comfortable with using MIDI data, and just assigning some sound to the data, although I appreciate the flexibility and control it offers. But the way I’ve used MIDI and softsynths has always felt unnatural and to clean to me, and my experience is then projected to the whole concept of softsynths and MIDI.

But recently I have started connecting hardware to each other again via MIDI, just to use the control changes of it, to say have «more hands» in a performance. The hardware is producing the sound, but knobs are operated via MIDI.

And in this project knobs and sliders are operated via osc-data from GyrOSC (iPhone), via OSCulator where the osc-data is translated to MIDI Continous Controller (CC) messages.

So what I wanted to achieve was to make a setup that can be a little chaotic, a little uncontrollable, and try to have some kind of control over it using different features in GyrOSC only. My setup for this was as follows:

<figure style="float: auto">
   <img src="/assets/image/2020_10_16_anderlid_pc_setup.jpg" alt="Alternate Text" title="Oh no!" width="auto"/>
</figure>

As you might notice, this is not the normal way to connect audio, as there are feedback loops created between the TR-8 and the Moog (marked with green and red pointers). So the sound coming out can potentially be a little chaotic and for some ears also unpleasant, but processing any audio through the external input on the Moog Voyager is always nice in my ears, and was also one of the more chaotic elements to try to control and make cosmos out of.

####GyrOSC to OSCulator
Communication between GyrOSC and OSCulator is very easy to set up and get going. Just make sure to put in your computer’s IP fin GyrOSC and make sure the port on both GyrOSC and OSCulator matches. Preset on OSCulator was port 8000, so I used that. When you activate different features in GyrOSC, they immediately show up in OSCulator, where you the can scale the MIDI-data you’re sending out, and of course choose MIDI-channel and what MIDI-data to send. You can also easily invert the datas, but what you can’t do, is to make your own labels for it. This can make everything a little chaotic to start with, because you may not immediately understand which sensors are at play all the time. So that would be an improvement to implement in OSCulator, I’d say. And maybe I should actually contribute to the development by buying it, so I don’t need to have it stop every 20 minutes to tell me to do so …

Next step is to start setting up GyrOSC and OSCulator to control different parameters on both the TR-8 and the Voyager, and try to make some sort of action-sound control, or sound gesture resemblance, in the sense that there is analogy between the sounds and the movements, even though I’m working with electronic instruments here.

####Performance
I wanted to emphasize the instrument I was facing, i.e. facing the Voyager, should favor the sound from it and get the drum-machine more in the background, and vice versa. This is—at least in theory—obtainable by simply rising/lowering the volume of the respective hardware, or giving different effects to them. I was also trying to filter the Voyager heavily when facing down, as well as using something towards infinite feedback delay on the TR-8 at the same time, with less kick and snare coming out. And so on.

Well, after spending quite a lot of time tweaking parameters in OSCulator, to provide me with the control I wanted, I had to realize that there will always be many surprises. The calibration in GyrOSC/iPhone is not very stable, even though you can only press one button in the app to re-calibrate. So at last I just had to a little performance.
<i>Note: I started on a kind of composition sending MIDI-notes from Logic to the Moog, but it really didn't work, since the three oscillators started to tune with my movements, due to some OSC sent from GyrOSC. So I went with a drone only, with some fiddling on top from the guitar … please bare with me.)</i>

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/15EFFvLm5BMDdUvwEnTOxNUiAgYO33Dca/preview" width="auto" frameborder="0" allowfullscreen></iframe>
   <figcaption><i>Cosmos … or still chaos?</i></figcaption>
</figure>



I think it worked quite well as a performance tool, and it was fun using it. But I experienced that what worked one day, didn’t work quite as well the next day, and tweaking it wouldn’t help for the next time I turned it on. But anyway, with the scaling of the outgoing data in OSCulator it still worked alright, and I really enjoyed playing with it. Unless I grow more arms in the near future, I can see myself actually implementing something like this in a live performance setting.
