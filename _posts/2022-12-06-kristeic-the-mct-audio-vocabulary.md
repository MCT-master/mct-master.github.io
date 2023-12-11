---
layout: post
title: "The MCT Audio Vocabulary"
date: 2022-12-06 03:00:00 +0200
categories: networked-music
author: Kristian Eicke
image: /assets/image/2022_11_27_kristeic_frontmatter_audio101.jpg
keywords: audio, routing, tips, guide, portal
excerpt: "Click this post if you need some explanation on jargon, mainly related to the Portal and the NMP kits."
---

After my first MCT semester I found answers to my tech questions and also asked my fellow students what part of the audio jargon they need clearance on. So what I will do in this post is providing a short portal-related list of vocabulary and explanations some of you will find helpful, as well as tips and tricks I learned over the years as a rookie guitar player and some general workflow for a happy day in audio-land. Bear in mind that I will only cover hardware audio routing – so basically everything you can touch. I also plan on updating this post with more relevant vocabulary after the semester break. 


## Mix Bus/Bus/Buss, Subgroups and Aux/Returns  
<br/>
You question yourself: “What do words mean?” I hope I can help.
In short, a mix bus is a channel where signals from several other places are combined on your mixing board.
You can literally think of it as a public bus that picks up individuals along the way and drops all of them at a final location. The one bus you will always find in a DAW or on a mixing board is the Main Stereo or Master (Bus) where all your individual channels are pre-routed to. 

The concept of a Mix Bus comes in handy if you want to group together signals of similar instruments, typically percussion, to be able to adjust the level of all instruments mixed together and then potentially add effects. This is also called creating a subgroup. The NMP kit mixer has two group channels next to the Main Stereo with which you can exactly achieve this. 

Occasionally, you come across a channel called Aux(iliary) or Return. It is similar to a mix bus insofar that it can receive input from various channels. The simple difference is how the signal is routed to it. It receives a copy from the source channel via a send option rather than from the channel output, so you can add effects for example without affecting the source. 
You can read more extensively on the matter [here](https://www.izotope.com/en/learn/mix-buses-101.html).


<figure>
   <img
      src="/assets/image/2022_12_06__kristeic_yamaha_mixer.jpg"
   />
   <figcaption>The NMP-kit Yamaha Mixer and different routing options</figcaption>
</figure>



## Pre-fader vs. Post-Fader
<br/>
Those terms refer to send options, meaning that you can send the signal to wherever you desire before or after it is affected by the channel fader.
The Pre-Fader option is mostly used for monitoring situations where you want to send a separate personal mix to an artist without affecting the room mix.  The button PFL (Pre Fader Listen) on the mixer for the NMP kits is another handy option for you as an aspiring sound tech. You can listen to the raw signal from the channel on your headphones to correctly equalize it. Your outputs will not be affected by that. 

Post-Fader Sends are generally used to send the signal to an effects channel (Aux), so when you fade out the instrument, the effect on that instrument will fade out similarly. Easy!


## Phantom Power
<br/>
is a positive voltage for equipment that contains active electronic circuitry, mainly condenser microphones (if you wonder about all the different types of microphones click [here](https://higherhz.com/microphone-types/)). All currently installed microphones in the Portal (3 ceiling mics and two gooseneck tabletop mics) require phantom power, so if you someday find them not working check the MIDAS settings for each mic channel and enable the Phantom +48V button (phantom power can range from +12V to +48V output). It gets its cool name from the fact that it provides the voltage through the same XLR cable that the audio signal goes through – on pins 2 and 3 to be specific – no extra power plug needed. To be reasonable with your equipment, do not use phantom power with dynamic mics as they do not require it.


## ADAT vs. S/PDIF 
<br/>
ADAT originally referred to the *A*lesis *D*igital *A*udio *T*ape recorder module developed in the 1980s. The ADAT Optical interface protocol was introduced later for sending audio between recorders, and to this day we use the abbreviation for the protocol (commonly referred to as ADAT Lightpipe) rather than for the recorder. 
ADAT and S/PDIF (Sony/ Philips Digital Interface) are optical audio cable formats that allow the transfer of digital audio between devices without a conversion to analog to retain high quality. 
S/PDIF can be implemented either through an optical cable (TOSLINK) or a coaxial cable (RCA), whereas ADAT requires an optical cable. 
So what are the differences besides that?

| ADAT                                     | S/PDIF |
| ---------------------------------------- | ---------------------------------------- |
| -	supports up to 8 channels              | - supports only 2 channels               |
| -	fixed sample rate of 48khz/ 44.1kh     | - no fixed sample rate, the clock is embedded in the protocol   |

And: optical cables can be damaged more easily but are the preferred choice if length matters and electromagnetic interference needs to be avoided.


<figure>
   <img
      src="/assets/image/2022_12_06_kristeic_adat_spdif.jpg"
   />
   <figcaption>Possible Connections</figcaption>
</figure>


## Hierarchy of On/ Off - Plugging/ Unplugging
<br/>
Some people might care more for the technology they own than for their fellow human beings whereas others do the opposite. I think a balance between both ways is vital. So, here are some general rules on what to plugin first and power off last to prevent damage on your speakers or microphones.

- Always switch your speakers on last or off first. Powering on your mixing desk after the speakers results in a loud pop that can damage your devices. 
- Always mute the corresponding channel or switch off your device before unplugging cables to prevent damage. 
- Correspondingly, turn off phantom power before plugging in a microphone. 
- If you do not know how loud a signal will be, always start with the fader down and gradually increase volume. 


## How to roll a cable correctly
<br/>
I feel this is a very spicy topic, many cables have suffered a slow death because of that. Seriously, the right way to roll a cable prolongs the live of it exponentially and it is a nice routine, so here is how I do it. (Please correct me if you see some room for improvement.)

First, make sure that the cable is untangled and lies on the floor in a more or less straight fashion without any bumps. This makes it a lot easier to roll it. Please avoid the sailor-rope-method. Let the cable hang loosely in your hand and roll it into an O-shape like in the video.

<figure style="float: none">
  <video width="auto" controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/video/2022_11_27_kristeic_cableroll.mov" type='video/mp4'>
  </video>
</figure>


If you feel that there is strain on the cable try to roll it to the left or right with your fingers to release that strain. The final product should look like this. 

<figure>
   <img
      src="/assets/image/2022_11_27_kristeic_cableroll.jpg"
   />
   <figcaption>A good rolled cable</figcaption>
</figure>

Bonus easter egg: the speaker array in the Portal is routed counter-clockwise on the MIDAS.