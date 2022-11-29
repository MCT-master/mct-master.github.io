---
layout: post
title: "Blackhole, Open Source MacOS Virtual Audio Device Solution for Telematic Performance"
date: 2022-11-29 07:00:00 +0200
categories: portal
author: Masoud Niknafs 
image: https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_29_bh_bbc_masoudn_.jpg
keywords: virtual audio device, telematic music
excerpt: "MacOS guide to Blackhole"
---
## Blackhole 
BlackHole is a modern MacOS virtual audio driver that allows applications to pass audio to other applications with zero additional latency. As a newly migrated user from Windows to Mac I found Blackhole, pretty reliable, easy to use, and easy to map between platforms, So I decided to share the features and make an installation and user guide! Enjoy!
-	Supports 2 , 16 , and 64audio channels.
- Customizable to 256+ channels if you think your computer can handle it.
- Supports 44.1kHz, 48kHz, 88.2kHz, 96kHz, 176.4kHz, and 192kHz sample rates.
-	No additional driver latency. BlackHole is also available using brew cask install blackhole
-	It is Also available for Windows but here we only introduce the MacOS version


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
   <figcaption></figcaption>



## Installation of MacOS: 
 https://existential.audio/blackhole/  

## Installation guide:
Approach 1: Download Installer
- Download the latest installer                                                   
<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_29_bh_2_masoudn.jpg" />
   <figcaption></figcaption>

You must subscribe for the free version

- Close all running audio applications


- Open and install package    
<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_29_bh_3_masoudn.jpg"
      style="max-height:600px; width:auto;" />
   <figcaption>Press continue</figcaption>
   
<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_29_bh_3_masoudn.jpg"
      style="max-height:600px; width:auto;" />
   <figcaption>select its destination</figcaption>
   

<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_29_bh_5_masoudn.jpg"
      style="max-height:600px; width:auto;" />
   <figcaption>Finalize your installation</figcaption>
   

Approach 2: Install via Homebrew
- 2ch: brew install blackhole-2ch
- 16ch: brew install blackhole-16ch
- 64ch: brew install blackhole-64ch

## Features:

It has the following routing options for Logic Pro X
-	Logic Pro X to FaceTime
-	Logic Pro X to Google Meet
-	Logic Pro X to Skype
-	Logic Pro X to Zoom


It has the following routing options for GarageBand
-	GarageBand to FaceTime
-	GarageBand to Google Meet
-	GarageBand to Skype
-	GarageBand to Zoom

It has the following routing options for Reaper
- Reaper to Zoom 

It has the following routing options toRecord System Audio
-	Setup Multi-Output Device
-	In Audio Midi Setup → Audio Devices right-click on the newly created Multi-Output and select "Use This Device For Sound Output"
-	Open digital audio workstation (DAW) such as GarageBand and set input device to "BlackHole"
-	Set track to input from channel 1-2
-	Play audio from another application and monitor or record in your DAW

Route Audio Between Applications
- Set output driver to "BlackHole" in sending application
- Output audio to any channel
- Open receiving application and set input device to "BlackHole"
-	Input audio from the corresponding output channels

Creating Aggregate device on mac: 
In this example zoom H5 recorder is used as a sound card in combination with Blackhole to be used in Ableton
- Open Audio Midi Setup



<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_29_bh_masoudn_8.jpg"
      style="max-height:600px; width:auto;" />
   <figcaption> You can modify I/O and audio settings of the blackhole here </figcaption>
   


<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_29_bh_masoudn_9.jpg"
      style="max-height:600px; width:auto;" />
   <figcaption>Or create an aggregate device by hitting the plus Icon on the bottom left </figcaption>



<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_29_bh_masoudn_10.jpg"
      style="max-height:600px; width:auto;" />
   <figcaption>You can use this aggregate device in all DAW or Musical programming languages or communication software

 </figcaption>


For Further exploration visit:


https://github.com/ExistentialAudio/BlackHole#readme 

  
  