---
layout: post
title: "Integrating JackTrip and Sonobus in a DAW"
date: 2023-04-20
categories: portal
author: Fabian Stordalen
image: /assets/image/2023_03_13_jackeh_RITMO_musicians_thumbnail.jpg
keywords: portal, audio, latency, DAW, network music, jacktrip, Sonobus
excerpt: "How you can integrate both jacktrip and Sonobus into your DAW"
---

# Introduction

 JackTrip and Sonobus are both free open-source software applications designed for live, high-quality audio streaming and communication. They allow musicians, and other creative professionals to collaborate in real-time, almost regardless of their geographic location. This makes them ideal for producers wanting to collaborate in real-time.

 ## JackTrip DAW

To setup JackTrip in your Daw you will need to download JACK, JackTrip and QjackCTL. Start by opening Qjack, JackTrip and your DAW. In my case I will be using Live. First, start your Qjack-server. Now, go back to your DAW, choose ASIO and your driver type and JackRouter as your audio device. If you are getting an error, it might be because you have forgotten to start your Qjack server first. If successful you will see Live within the Qjack graph window. The next step is to start a JackTrip server. As soon as a connection is established you will see JackTrip pop up in the Qjack graph. To route incoming audio to my DAW I connect the receive output from JackTrip into one of my Live inputs. I will also remove the connection between JackTrip and my system playback since I can monitor the signal within Live. Also send the output from Live back into JackTrip so that on the other side they will able to hear the metronome while recording, if the signal is only being heard on 1 ear try to connect both receives to both playbacks on the other end. You should now see a signal incoming in your DAW and you're ready to record!

## Sonobus DAW 

Unlike JackTrip you will only need to download the Sonobus software to use it in a DAW.  After installing you should be able to find Sonobus in your DAW. To use Sonobus in your DAW simply add it to one of your channels as an effect. To start a session, click on the connect button. If you want to create a session, simply give your group a name and password and click connect to group. Other will be able to join your session by simply typing in the same group name and password. Just like JackTrip it is heavily recommended that you always use a wired connection to ensure network stability. Since Sonobus is running as a VST it means we’re able to run multiple instances of it on different channels. This means that we can record multiple people playing at once or send multiple channels from our DAW over the network. Let’s add another instance of Sonobus to channel 2 where we have the drums playing. If we want to record the incoming signal, we can do this by creating a return track and another audio track. I set the audio track to resampling mode and to only receive from sends. Within my first instance of Sonobus I solo the track I want to record and then send the signal to the return track. The final step is to start recording.

