---
layout: post
title:  "Group B, LoLa multichannel audio"
date:   2018-11-22 14:00:00 +0200
categories: Portal
author: Mari Lesteberg, Ashane Silva, Shreejay Shrestha & Eigil Aandahl
image: /assets/img/MultiChannelBox.jpg
excerpt: "The objective this week was very clear from the start, we had to set up multichannel audio for LoLa. There was just one problem: our great LoLa supervisor, Anders, was sick, and we were left to figure out things on our own. This was of course a
great challenge, but we like challenges. It might take a little more time, but it's another experience when you are forced to try and fail on your own. Often you also learn much more when you're not being fed all the answers from an expert."
---

<figure>
<img src="/assets/img/MultiChannelBox.jpg" alt="Converter boxes" width="50%" />
  <figcaption> The A/D and D/A converters in Oslo </figcaption>
</figure>

The objective this week was very clear from the start, we had to set up multichannel audio for LoLa. There was just one
problem: our great LoLa supervisor, Anders, was sick, and we were left to figure out things on our own. This was of course a
great challenge, but we like challenges. It might take a little more time, but it's another experience when you are forced to try
and fail on your own. Often you also learn much more when you're not being fed all the answers from an expert.

## Setting up multichannel audio

In Oslo and Trondheim, we were on different stages regarding the multichannel audio setup. The equipment was also not the same in the two respective cities - and we were a little confused to begin with (at least in Oslo). In Trondheim there was only one box to convert the channels while in Oslo, there were two, each for input and output. We had no idea
which cable to put in where, but at least, we could start with finding power cables in the storage room. We soon
figured out that some cables were missing to be able to connect the multichannel boxes to LoLa. We had to
send out a distress call to Alexander, who was able to come and help us later the same day.

While we were waiting for help, we were trying to set up stereo audio with LoLa, as Anders had demonstrated for us some weeks
ago. It looked so easy when he did it, but now we were only able to hear some distorted noises. What were we doing wrong?

In Trondheim, out main focus was to get the mixer connected to the computer soundcard using an RME ADAT converter. This proved more difficult than we thought, even with the correct cables we had been waiting for. The converter required a stable connection to keep the digital signals syncronised, and it turned out we were sending the wrong kind of signal from the PC causing a real headscratcher for us to solve. Before we found out what was wrong, we even repurposed another machine to run LoLa.

Finally Alexander arrived, and we went to get the extra cables we needed for the multichannel box. We set everything up with
two speakers and a Shure SM58 microphone, but still, nothing. Again, the only thing we could hear was some distorted cracks
and noises.

<figure>
<img src="/assets/img/MultiMultiOutput.jpg" alt="Breakout cables" width="50%" />
  <figcaption>Breakout cables for analog signals </figcaption>
</figure>

<figure>
<img src="/assets/img/InputLolaRME.jpg" alt="preamp inputs" width="50%" />
  <figcaption> Preamp inputs</figcaption>
</figure>
## AD/DA converters. What are they?

In Oslo, we used two converters to get sound in and out of LoLa. We used an RME OctaMicII 8 - channel Analog to Digital converter as the inputs for LoLa. This preamp was connected to the LoLa computer's soundcard using an optical cable sending ADAT. With the inputs connected, where are the outputs?

Well, we used a Solid State Logic XLogic Alpha-Link MADI AX as a Digital to Analog converter (because we are now converting the digital audio from the PC sound card to analog audio). The PC soundcard is connected to an SSL Alpha - Link converter using another Optical cable. But to route the outputs to speakers we had use a breakout cable whcih was connected to the SSL converter.Basically now we have multi-channel audio from LoLa.

<figure>
<img src="/assets/img/Group%20B%20LoLa%20converters%201.jpg" alt="Power switch">
  <figcaption> The button has been switched on.</figcaption>
</figure>

## RME TotalMix in a nutshell

How can we control the levels? That is where the RME Total MiX software comes in to control the PC soundcard. The top section (Hardware Inputs) shows the channels going into the computer (ADAT 1 = input 1 , ADAT 2 = inout2 of octaMic II and so on). The Bottom section is where you see the outputs for the SSL Converter. The Middle section (Software playback) is where we can monitor the sound we get through LoLa from the other side. These channels can be routed to outputs from the computer just by using RME Total Mix.


<figure>
<img src="/assets/img/Group%20B%20LoLa%20RME%20TotalMix.jpg" alt="TotalMix window">
  <figcaption>Routing signals in TotalMix</figcaption>
</figure>


LoLa dosen't work well with different buffer sizes. It has to be 32 or 64 samples on each side to make sure it has the lowest latency possible. Otherwise you will get some creepy sounds like this.

<figure>
<video controls>
  <source src="https://docs.google.com/uc?export=download&id=1lH9jltPIy0mX5K5_ja7lRf-FePse1SU0" type="video/mp4" width="65%">
Your browser does not support the video tag.
</video>
  <figcaption>Eigil speaking through LoLa with the wrong buffer settings. Video: Ashane</figcaption>
 </figure>


It is super easy to change those settings from the "Hammerfall DSP settings" which controls the settings of the soundcard.

After having tested that it worked, the Trondheim portal was moved into the newly finished location. Then something unexpected happened. We started to get distorted sound agian. Right away we checked the buffer size and it was fine. But after much struggle, we found that there was loss of packets on the Oslo side. The LoLa Network status window is helpful to monitor those kind of things. We suspected that this was due to some kind of network issue, and it turned out to be a delay in the network when using a fibre connection. Aren't those supposed to be fast? The issue was solved by finding a different path from Trondheim to Oslo which resulted in less packet loss. Think of it as someone running really fast with a lot of boxes and having to trip, dropping some of the boxes. Perhaps taking it a bit slower was what we needed.

## Finally getting to use it

The result of our work came the next week, when we got to try out sending high quality audio on eight different channels each way between the two cities. This way, we could connect and transmit signals for the DSP workshop, and even have an audio effect in another city and get the sound back without a noticeable delay!
