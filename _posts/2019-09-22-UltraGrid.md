---
layout: post
title: 'UltraGrid'
date: 2019-09-22 16:00:00 +0200
categories: Portal
author: Aleksander Tidemann, Thomas Anda, Paul Koenig, Tom Ignatius
image: /assets/image/2019_09_22_stefanof_ultragrid.jpg
excerpt: 'Exploring an alternative audio and video network transmission software in the MCT portal.'
Keywords: Portal, Network transmission, ultragrid
---
# **Group C**

## The UltraGrid software

[UltraGrid](http://www.ultragrid.cz/) is a free low latency and high-quality video network transmission software. The main benefit of using UltraGrid in the portal is its ability to transmit both high quality 4k video and IP-audio between campuses from the same software. Our mission is to successfully install UltraGrid in Oslo and Trondheim so that we can together explore its features and compare it to our current setup.


Assumed pros | Assumed Cons
------------ | -------------
Audio and video transmission from same software | High latency
High quality audio and video | interconnectivity problems
Highly Flexible | userfriendliness

## User interface

The installation and run format of UltraGrid is command line based, which means it does not have a proper GUI at the moment. However, they are currently working on implimenting a GUI which will make it much more practically applicable and user friendly in the near future.

![alt text](/assets/image/2019_09_22_stefanof_ultragrid_gui.jpg "Current GUI") <font size="2"> [Figure 1]</font>

## Installation process

The [installation process](https://community.jisc.ac.uk/system/files/15551/Ultragrid%20%E2%80%93%20How%20to%20use.pdf) is surprisingly extensive and has six unique steps:

1. **System test** - Set up a testcard, a virtual video capture card, and broadcast a basic colour information stream locally (*see figure 1*).

2. **Video input** - Connect UltraGrid to computers capture card and recieve video.

3. **Video output** - Directing the video input signal to the correct local output (video card).

4. **Audio input** - Connect Ultragrid to the appropriate sound card and channels.

5. **Video and audio output** - Set up local network transmission which broadcasts sound and video to an external IP address.

6. **Recieve and broadcast audio and video** - Set up bidirectional network transmission between two locations.

Step 1-4 is achieved locally prior to any cross-campus transmission, but step 5 and 6 require both campuses to be on the same page and cooperate.

## Week 38

Our first priority was to check the LoLa computer's specs to see if it was compatible with Ultragrid. When this was confirmed we downloaded the software on a personal device and transferred the installation files locally to the LoLa PC. This had to be done this way because the LoLa computers cannot be connected to the internet.

Step 1 went smoothly for both campuses, however we encountered problems with step 2 and 3 in Oslo when trying to make UltraGrid connect and recognize the computer's capture card, the Blackmagic Intensity pro 4k also known as "Decklink" (*see figure 2*). This is the device which we will use to receive high quality HDMI video information that will be transmitted to the external location. Our plan to resolve is by rebooting or finding relevant updates for the capture card.

![alt text](/assets/image/2019_09_22_stefanof_Blackmagic1.jpg "Error") <font size="2"> [Figure 2]</font>

On the other hand, step 4 was successful in Oslo. We managed to recieve an audio stream from the local portaudio soundcard on the LoLa pc. However, we did not manage to explore receiving audio from the other soundcards, due to the complications with steps 2 and 3.

## To be continued

In the following weeks there are 2 important tasks we need to focus on for the installation process to succeed:

- Make UltraGrid communicate with all the desired computer components (Capture card, Video card, Video cameras and Sound card). 
  - This also involves collecting the relevant information from these components like correct addresses, channels, desired compression formats etc.


- Opening several IP-ports so that transmission between campuses is possible.
  - This involves contacting UiO and NTNU´s IT-departments.

With the help from other MCT students and teacher guidance, we should be able to get UltraGrid up and running during the next couple of weeks.
