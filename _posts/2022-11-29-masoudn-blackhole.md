---
layout: post
title: "Blackhole, Open Source MacOS Virtual Audio Device Solution for Telematic Performance"
date: 2022-11-29 07:00:00 +0200
categories: networked-music
author: Masoud Niknafs
image: https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_29_bh_bbc_masoudn_.jpg
keywords: virtual audio device, telematic music
excerpt: "MacOS guide to Blackhole"
---

## Blackhole

BlackHole is a modern MacOS virtual audio driver that allows applications to pass audio to other applications with zero additional latency. As a newly migrated user from Windows to Mac I found Blackhole, pretty reliable, easy to use, and easy to map between platforms, So I decided to share the features and make an installation and user guide! Enjoy!

- Supports 2 , 16 , and 64audio channels.
- Customizable to 256+ channels if you think your computer can handle it.
- Supports 44.1kHz, 48kHz, 88.2kHz, 96kHz, 176.4kHz, and 192kHz sample rates.
- No additional driver latency. BlackHole is also available using brew cask install blackhole
- It is Also available for Windows but here we only introduce the MacOS version

## Benefits:

- Versatile user interface
- Stable working with no crashes (Also on Apple Silicon)
- Different versions available for specific needs
- It is possible to rename the Blackhole
- Customizing Channels, Latency, and Sample Rates

<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_29_bh_1_masoudn.jpg"
      style="max-height:600px; width:auto;" />
</figure>

## Installation of MacOS:

https://existential.audio/blackhole/

## Installation guide:

Approach 1: Download Installer
1.Download the latest installer

<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_29_bh_2_masoudn.jpg" />
   <figcaption></figcaption>
</figure>

You must subscribe for the free version

2.Close all running audio applications

3.Open and install package

<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_29_bh_3_masoudn.jpg"
      style="max-height:600px; width:auto;" />
   <figcaption>Press continue</figcaption>
</figure>

<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_29_bh_3_masoudn.jpg"
      style="max-height:600px; width:auto;" />
   <figcaption>select its destination</figcaption>
</figure>

<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_29_bh_5_masoudn.jpg"
      style="max-height:600px; width:auto;" />
   <figcaption>Finalize your installation</figcaption>
</figure>

Approach 2: Install via Homebrew

1. 2ch: brew install blackhole-2ch
2. 16ch: brew install blackhole-16ch
3. 64ch: brew install blackhole-64ch

## Features:

It has the following routing options for Logic Pro X

- Logic Pro X to FaceTime
- Logic Pro X to Google Meet
- Logic Pro X to Skype
- Logic Pro X to Zoom

It has the following routing options for GarageBand

- GarageBand to FaceTime
- GarageBand to Google Meet
- GarageBand to Skype
- GarageBand to Zoom

It has the following routing options for Reaper

- Reaper to Zoom

It has the following routing options toRecord System Audio

1. Setup Multi-Output Device
2. In Audio Midi Setup → Audio Devices right-click on the newly created Multi-Output and select "Use This Device For Sound Output"
3. Open digital audio workstation (DAW) such as GarageBand and set input device to "BlackHole"
4. Set track to input from channel 1-2
5. Play audio from another application and monitor or record in your DAW

Route Audio Between Applications

1. Set output driver to "BlackHole" in sending application
2. Output audio to any channel
3. Open receiving application and set input device to "BlackHole"
4. Input audio from the corresponding output channels

Creating Aggregate device on mac:
In this example zoom H5 recorder is used as a sound card in combination with Blackhole to be used in Ableton

1. Open Audio Midi Setup

<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_29_bh_masoudn_8.jpg"
      style="max-height:600px; width:auto;" />
   <figcaption>2) You can modify I/O and audio settings of the blackhole here </figcaption>
 </figure>

<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_29_bh_masoudn_9.jpg"
      style="max-height:600px; width:auto;" />
   <figcaption>3)	Or create an aggregate device by hitting the plus Icon on the bottom left </figcaption>
</figure>

<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_29_bh_masoudn_10.jpg"
      style="max-height:600px; width:auto;" />
   <figcaption>4)	You can use this aggregate device in all DAW or Musical programming languages or communication software </figcaption>
</figure>

For Further exploration visit:

https://github.com/ExistentialAudio/BlackHole#readme
