---
layout: post
title: "MIDI and Effects: the Musicpathy "
date: 2020-10-18 17:00:00 +0200
categories: physical-computing
author: Abhishek Choubey, Lindsay Charles
image: \assets\image\2020_10_18_abhishec_musicpathy.jpg
excerpt: "The magic of controlling instruments from 1000km apart"
keywords: physical-computing, osc, midi, ableton, VPN, OSCrouter, FaceOsc
---

# Introduction

Since MCT began, we both were looking for an opportunity to make music together and we finally did it on our physical computing project. We both are from India, but still live 1000 km apart (Abhishek in Central India & Lindsay in South of India), this brought a series of challenges.  

Our main idea was to collaborate playing live music with the tools that we were introduced to in the physical computing module, to input sensor data and control various aspects of the setup.
We approached it with a hands-on physical controller that was self-made for another project and also the OSC router which takes inputs from the mobile phone. Ableton Live was our preferred DAW as both of us are well versed in using it. Abhishek was the host, he used his phone as an input device and Lindsay used his MIDI Controller to send data over the network.


## Tools and Setup

So to make music together live over the internet and still be technologically engaged, what do you need? A couple of computer applications and a decent internet connection, if you have a cool custom-built MIDI controller, that’s like a cherry on top.

### Tools:

To jam live together we used the following software/tools :

[1. Ableton:](https://www.ableton.com/en/)
The Digital Audio Workstation of our preference, any DAW can be used.

[2. rtpMIDI:](https://www.tobias-erichsen.de/software/rtpmidi.html)
rtpMIDI is a virtual MIDI driver that sends MIDI data over the network.

[3. Hamachi (VPN):](https://www.vpn.net/)
Since rtpMIDI sends data over the network, you need to have a LAN connection to be able to do so, or else you need to do port forwarding. Hamachi here fits as it makes a virtual LAN like network enabling the exchange of MIDI information.

[4. OSChook (Android):](https://play.google.com/store/apps/details?id=com.hollyhook.oscHook&hl=en_US)
This is the android application that reads data from different sensors and sends OSC messages to the OSC receiver.

[5. OSCRouter:](https://github.com/ETCLabs/OSCRouter)
OSCRouter receives the OSC messages and routes it to the application on your system that uses them to control things.

[6. LiveGrabber:](https://www.showsync.com/tools)
This is free MAX for Live plugin and is used to take data from OSCRouter and then control different effects in Ableton.

7. Midi controller(Arduino Micro):
Any MIDI controller works but we used the self-made MIDI controller that is based on the Arduino Micro with an analog multiplexer for many inputs, it has 18 buttons, 8 rotary potentiometers, 2 linear potentiometers out of them one acts as a channel controller and two buttons are octave shifters.
The program was written in C, for Arduino and sends MIDI data as output. The buttons are Sanwa arcade, which has a super-fast reaction time.


### Setup:

The basic flow of the setup is as follows: Lindsay sends MIDI data to Abhishek’s Ableton, and Abhishek controls the Ableton effects from his phone via OSC messages, achieving this was a little tricky. There are two aspects of this setup, one is the MIDI connection and the other is the OSC connection.

**MIDI:**

For controlling the instrument setup into Abhishek’s Ableton using Lindsay’s MIDI controller we tried sending data over the network and since we both were on a wired connection, the latency that we always fight with at MCT, was very decent at about 37ms.
The MIDI controller is directly plugged in via USB to the system, rtpMIDI takes the input data and sends it to Ableton’s instrument rack to the receiving port setup in Ableton, over a virtual VPN network made through Hamachi. There’s a flexibility of controlling multiple channels and playing them all at the same time by mapping the controller inputs to different instruments and parameters.

![MIDI Setup signal flow.](\assets\image\2020_10_18_abhishec_MIDI_setup.jpg "MIDI Setup signal flow")


**OSC:**

To control the audio effects of Ableton via the smartphone, OSChook app installed in the phone takes data from different sensors and converts it to OSC messages that are sent to the OSC router’s receiving port, this messages are directed towards LiveGrabber plugin. LiveGrabber takes the data and uses it to control the effects mapped to the ParamGrabber plugin.

![OSC Setup signal flow.](\assets\image\2020_10_18_abhishec_MIDI_setup.jpg "OSC Setup signal flow")



## Live Jam

To have a structure in the song we agreed to make a basic arrangement with drums and keys, which gave us a base track to jam upon. Here's a video from one of our sessions:

<figure style="float: none">
  <video width="auto" controls>
    <source src="https://drive.google.com/file/d/1v8Don0tcLSeIFhigIWDBklWw9w8o8e2r/view?usp=sharing" type='video/mp4'>
  </video>
  <figcaption>Jam Session</figcaption>
</figure>




## Conclusion: Individual Reflections

#### Lindsay’s Reflection:

I really enjoyed making music with Abhishek although I did not have any experience in making chill LoFi type of music. The whole procedure of setting up and getting our conceptual idea into a working model was super fun and exciting. An advantage of being in the same time zone, we spent a whole night trying to solve the challenges and figuring out ways to bring out our idea, making music with the least latencies, and during the night time, we had latency levels as low as 20ms. The whole process of composing music on the go and live was thrilling and the night well spent. Finally, I would like to say that making your own controller and your DIY setup with the least latency to connect and play collaborative music is a very satisfying experience.


#### Abhishek’s Reflection:

The whole process was super fun and felt like we were in a hackathon or something, setting up connections and then finally making music was a different experience, although it still cannot replace the physical jams, this one was the best and closest to the physical jam session we used to have in the pre-covid era. Nevertheless, the best part of this setup is that once everything is fixed and connected, the next time you want to jam again you don’t need to do it from scratch, just plug in the controller, start the DAW and you’re pretty much ready to go making it super easy to have more jams with Lindsay. The next iteration of this setup for me will be to include acoustic instruments in the jam, use FaceOsc to control the effects, and increase the precision and accuracy of OSC controls.
