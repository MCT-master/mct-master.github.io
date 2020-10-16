---
layout: post
title: "How to set up the connection between oscHook and OSCRouter"
date: 2020-10-16 12:39:36 +0200
categories: physical-computing
author: Alena Clim
image: /assets/image/2020_10_15_abhishec_pythonlogo.jpeg
keywords: oscHook, OSCRouter, sensordata, audio processing
excerpt: "Quick guide on how to set up the OSC tools for Android and Windows. Sending sensordata from your phone to the OSC Router and trasmitting it to Reaper to control parameters of audio processing. For noobs."
---

## Introduction (task + idea)

For our Physical Computing project (a module part of the MCT4000 course) we were supposed to use sensor data to controll parameters in audio processing using already-built software, so we can get a basic understanding of data sources and the linkup to musical parameters. 

Having had no previous experience in this field, and having (very) limited knowledge on how to use a DAW, my "prototype" idea was to transmit data from my phone's sensors using oscHook through the OSCRouter to Reaper and controll some effects on different tracks of the song in real-time. A simple enough idea... if you know what you're doing, which I was not. 

For this assignment I used the following softwares:
 * [oscHook](https://play.google.com/store/apps/details?id=com.hollyhook.oscHook&hl=en_US) (for Android)
 * [OSCRouter](https://github.com/ETCLabs/OSCRouter) 
 * [Reaper](https://www.reaper.fm/)


## Setup (technical)

As a novice regardig both parts of this task - on one hand seding sensordata to a DAW in real-time and on the other hand tweaking with parameters and editing effects in a DAW for audio processing purposes - I had to approach things systematically. 

First step was to send data from my phone to the OSC Router and then in Reaper. After installing the necessary software and with some help, I managed to do it successfully, but I found it important to document the process - if nothing else, for future reference since it's likely I will forget some steps and get frustrating if I ever try to do it again from scratch. So, in this section I will describe a few important steps that shouldn't be skipped and some troubleshooting notes.

#### oscHook

- go to `IP/port setup` and write the IP address (e.g. 192.168.1.51) and the port you want to use (e.g. 7400).

- go to `OSC address setup` to select which sensor data you want to transmit (e.g. the `Compass` and `Light` data) and the related paths (e.g. `/orientation/azimuth`). This will be relevant for a further step as well.

_______________ADD PHOTO____________?

#### OSCRouter

The interface shows the incoming IP on the left (info about the `oscHook` app) and the outgoing IP (info about `Reaper`) on the right. 

_______________ADD PHOTO____________ of an empty line

###### Incoming IP

- you don't need to define the `Label` and the `Incoming IP`.
- the port has to be the same as the one used in the `oscHook` app (e.g. 7400)
- the `path` depends on the sensordata you'll be sending from the `oscHook` and can be found under `OSC address setup` (e.g. `/orientation/azimuth`)
- the `Min` and `Max` values refer to the scalling of the sensordata (e.g. for `Compass`, the `azimuth` parameter is scalled between -180 and 180).

- add another line for each different sesorsdata (e.g. if you want to use all parameters of the `Compass` you need to send them each separately)

_______________ADD PHOTO____________ of the azimuth example

###### Reaper settings

- inside Reaper, go to Preferences and then to Control/OSC/web
- add a Control Surface Mode = OSC (Open Source Control)
- give a name to the device (e.g. "Test") and set the mode to Local Port
- set a port for the `local listen port` (e.g. 8000) and write your `Local IP` (e.g. 193.157.251.241)

_______________ADD PHOTO____________ the preferences in reaper

###### Outgoing IP

- use the 127.0.0.1 IP address for the `Outgoing IP` (that's because you're sending the data between two apps/softwares on the same computer)
- write the port you chose in Reaper in the `Port` (e.g. 8000)
- in the folder you saved Reaper (probably in the C: partition) find the document named "XXXXXXXXXXX" and get the setup for defining paths for editing audio effects of certain tracks. 
- the only one I used is "n/track/@/fx/@/fxparam/@/value", where you will need to remove the "n" at the beginning and for each "@" write the number of the track, the effect and the parameter. 

_______________ADD PHOTO____________ track/effect/param

- for the `Min` and `Max` write the scaling of the effects' parameter (e.g. between 0-1)

#### Troubleshooting and other notes

- For a more reliable data trasmission try to change the `OSC timing` (e.g. re-sending data every 100 ms) in the `oscHook` app.

- To minimalize the delay between the movement of the phone (so the sensor data) and the change in effect parameters (in Reaper), only send the data for the sensor that you need. This can be chose in `OSC address setup` in the `oscHook` app (e.g. only the `Compas` data).

- Remember to connect both devices (your phone where you have `oscHook` and the computer where you have the `OSCRouter`) to the same wi-fi. 

- If you are changing the wi-fi you're connected to, you most likely have to restart the `OSCRouter`, to change the network permissions.

## Tracks + parameters

#### Song + tracks

#### Parameters / effects

#### Scaling in OSC Router

## Performance demo + (time axis sheet)

















##### Final thoughts

The aim of the module is to explore physical computing applied to real-time interactive systems for music performance by means of creating prototypes with accessible technologies.