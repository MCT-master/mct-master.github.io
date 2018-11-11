---
layout: post
title:  "Group B, LoLa audio multichannel setup"
date:   2018-11-10 02:00:00 +0200
categories: The Portal
author: Mari Lesteberg, Ashane Silva, Shreejay Shrestha & Eigil Aandahl
comments: true
---

<figure>
<img src="" alt="" width="40%" />
</figure>

The objective this week was very clear from the start, we had to set up the audio multichannel for LoLa. There was just one
problem: our great LoLa supervisor Anders, was sick, and we were left to figure out things on our own. This was of course a 
great challenge, but we like challenges. It might take much more time, but it's another experience when you are forced to try 
and fail on your own. Often you also learn much more when you're not being feeded all the answers from an expert.

In Oslo and Trondheim, we were on different stages regarding the audio multichannel setup. The equipment we were going to use 
was also not the same in the two respective cities - and we were a little confused to begin with (at least in Oslo). In 
Trondheim there was only one multichannel box, and in Oslo there was two! One for input and one for output. We had no idea 
which cable to put in where, but at least, we could start with finding power supply cables in the storage room. We soon 
figured out that some cables were missing to be able to connect the multichannel boxes to LoLa. We figured out that we had to 
send out a distress call to Alexander, who was able to come and help us later the same day. 

While we were waiting for help, we were trying to set up stereo audio with LoLa, as Anders had demonstrated for us some weeks 
ago. It looked so easy when he did it, but now we were only able to hear some distorted noises. What were we doing wrong? 

Finally Alexander arrived, and we went to get the extra cables we needed for the multichannel box. We set everything up with 
two speakers and a Shure SM58 microphone, but still, nothing. Again, the only thing we could hear was some distorted cracks 
and noises

AD/DA converters. What are they? 

We used the RME OctaMicII 8 - channel Analog to Digital converter as the inputs for the LoLa.The optical out from this preamp was routed in to LoLa computer's soundcard using an optical cable. Now the inputs are set. where are the outputs? well, We used the Solid State Logic XLogic Alpha-Link MADI AX as a Digital to Analog converter(because we are now converting the digital audio from the PC sound card to analog audio).Now the output from the PC soundcard is connected to this SSL Alpha - Link converter using another Optical cable. Basically now we have a multi-channel audio from LoLa.  


RME TotalMix in a nut shell 

How can we control the levels? Thats is where the RME Total MiX software comes in. The top section(Hardware Inputs) is basically the Inputs.( ADAT 1 = input 1 , ADAT 2 = inout2 of octaMic II and so on ). The Bottom section is where you see the outputs for the SSL Converter. The Middle section(Software Inouts) is where we can monitor the sound we get from the otherside. Now can route those sounds to outputs of the SSL converter just by using the RME Total Mix. 

Anything else?

LoLa dosen't like to have two different buffer sizes. It has to be 32 bit or 64 bit. Otherwise you will get some creepy sounds like this.   

Well, Everything was workig perfectly until friday and something unexpected happened. We started to get the distroted sound agian. right away we chacked the buffer sizes and they were fine. But after so much struggle we found that there is a Audio Packet drop from oslo side. 
