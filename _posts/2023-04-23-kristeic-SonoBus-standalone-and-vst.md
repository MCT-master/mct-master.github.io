---
layout: post
title:  "SonoBus setup - Standalone and Reaper Plugin"
date:   2023-04-23 14:00:00 +0200
categories: portal
author: Kristian Eicke
image: /assets/image/2023_04_23_kristeic_sonobus_logo.jpeg
excerpt: "Check out my tutorial on how to use SonoBus for your networked performance."
keywords: sonobus, networking
---

[SonoBus](https://sonobus.net/index.html) is a quite versatile tool for all kinds of networked performance environments, especially since you can use it both as a standalone app and as a VST. Let’s have a look together at how you setup your basic SonoBus session, choose the right audio send quality and options for handling latency. After that, I show you how to send multichannel audio over the network from within [Reaper](https://www.reaper.fm/download.php) with the help of the SonoBus plugin. 


## Video Tutorial
Timestamps:
- 00:00 - Introduction
- 00:27 - Audio Setup
- 01:27 - Connecting to a network
- 02:38 - Audio send quality settings
- 03:56 - Latency monitoring 
- 04:23 - Latency settings -Jitter buffer and latency match

- 07:04 - Reaper session setup
- 08:55 Sonobus VST3 setup

<figure style="float: none">
  <video width="auto" controls>
     <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/video/2023_04_23_kristeic_sonobus_video_tutorial.mp4" type='video/mp4'>
  </video>
</figure>

## SonoBus as a standalone app 

### Before connecting 

A quick list of tips before starting to ensure a stable baseline:
- no matter the network, definitely use an ethernet cable for connecting to your router, WiFi only adds an extra layer of packet sequencing and network jitter.
- [test](https://speed.cloudflare.com/) your bandwidth and network latency beforehand so you have a basic understanding of what you are going to be able to achieve quality-wise
- use an external audio interface instead of your internal soundcard to reduce hardware latency
 
### Audio settings
Choose your interface, input and output routing and your sample rate. All participants in your session can work with different sample rates since audio gets automatically resampled in SonoBus if necessary. With your sample buffer size, start low and go up only if you need to, for example if you hear crackling in your audio processing.

### Private network group connection
You can either use SonoBus’s own connection server (obviously does not work with a local network) or create your own group session by using the app on its own. If you are the one creating the group you need to enter your IP and a specific port in the format IP:Port. Port 10999 is the only port that works with this method. 

### Send formats
What kind of audio format you use really depends on the bandwidth of your network and your specific use case. There is a trade-off you have to keep in mind. Compressed audio is less demanding in terms of bandwidth but adds an additional 2.5ms of latency on either side of the connection. Uncompressed audio uses about 10 times more bandwidth but adds no additional latency. 

### Latency settings/ options 
-   There are three main sources of latency:
    1. Software (audio buffer, apps) and hardware (audio interface)
    2.  Delay in the network connections between you and the other participants
    3.  Latency added by buffering network jitter

What is network jitter? It is essentially a variable latency of incoming data because of dropped or re-routed packets of data. We may hear audible clicks if packets are dropped or arrive late, which is why we need to use buffering. SonoBus offers three modes for buffering jitter and I explain those in detail in the tutorial. There is also viable and quick solution called 'latency match' if your priority is maintaining a stable performance environment.




## SonoBus as a VST in Reaper
Let's say you want to provide backing tracks for your band mates during a concert in Oslo while you are being comfortable in Berlin, or you just want to share your new composition in a listening session. SonoBus as a plugin makes this quite an easy feat. It is as simple as setting up Reaper as you are used to and then creating a bus on which your plugin will be. Send the channels you want to share to the bus, start the plugin and connect to the network - et voilà - you are ready to go. Important side fact: you will not be able to run a local connection server in the plugins. This is only possible in the standalone app. The straightforward solution is to start a standalone application on one machine and just let it sit there, functioning as a hub to which you connect from within Reaper. 

## Sources
SonoBus [userguide](https://sonobus.net/sonobus_userguide.html)