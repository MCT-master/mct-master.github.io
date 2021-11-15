---
layout: post
title: "Touchpoint that can potentially improve the audio latency in a communication system"
date: 2021-11-14 18:00:00 +0100
categories: portal
author: Joni Mok
image: /assets/image/2021_11_15_joni_1.jpeg
keywords: portal, communication system, audio latency
excerpt: "Quick tips for future MCT-ers or external partners who will be using the MCT Portal for the first time. This article will give you some quick, practical information to start with in terms of dealing with audio latency.
"
---

This tutorial is for MCT people or external partners who use the Portal for the first time.

## Introduction

Whenever we are exposed to a new communication system, finding the touchpoint in order to fix audio latency can be useful in any scenario. In human communication, a touchpoint is a user contact point that aims to connect all relevant stakeholders within a particular business or an organisation. On the other hand, in a more technical sense, a touchpoint is an area on an electronic device that you can touch in order to carry out a particular action. This blog post will be looking into the touchpoints that can potentially improve the audio latency in a communication system. It provides some practical information for new MCT people or external partners who will be using the portal for the first time.

Before diving into the technical setup, I want to look into two particular communication models.

###Communication Models

Communication models refer to the conceptual frameworks or theories that explain the way of human communication. It also represents the entire process of communication between the sender and the receiver. The purpose of a communication model intends to explain the underlying mechanism of a communication system - What happens during the information transmission process between sender and receiver? How will the message eventually deliver?  A communication model looks into the many relationships that a system involved. It explains the elements of a communication process, for example, context, encoding, decoding, channel, message, feedback, noise, sender and receiver. Shannon and Weaver propose a linear model of communication while Schramm’s model is circular. Each model predicts a slightly different response time and involves different stakeholders.


![Shannon-Weaver](/assets/image/2021_11_15_joni_sw.jpeg "SW")

![Schramm](/assets/image/2021_11_15_joni_ss.jpeg "ss")

## Portal experiment

### Case 1: UiO local testing

Two microphones (Input 1 and Input 2) were set, in which Input 1 received an acoustic signal and converted it directly as a digital signal in a Mac. Input 2 received an electronic signal after a roundtrip of “time travel”.

#### Audio latency testing:
The MIDAS mixer has two sampling rates (SR), there are either 44.1 kHz or 48 kHz. With these limited options at hand, I have tested both SR from the local UiO Portal. There was a 1ms delay between both SRs.  But overall, the local latency is approximately between 5-6ms.


![Test 0](/assets/image/2021_11_15_joni_case0.jpeg "Test 0")

### Case 2:  UiO Zoom and Lola to NTNU Lola

Four microphones (Input 1, Input 2, Input 3 and Input 4) implied, in which Input 1 received an acoustic signal and served as an ADC. Input 2 received an electronic signal after a roundtrip of “time travel”. The Input 3 microphone connected to the mixer from UiO and sent the signal through either Zoom or Lola to NTNU. The output from UiO played in NTNU’s speaker and the signal was then sent back to UiO via another microphone (Input 4).


![Overview](/assets/image/2021_11_15_joni_overview.jpeg "Overview")

#### 3.2.1 Audio latency testing:
In alignment with case 1, both the 44.1 kHz and 48 kHz sampling frequencies were tested. What made this session different was that it was a circular roundtrip communication. Meaning that both UiO and NTNU equally encode and decode messages through “time travel”. While in UiO, both Zoom and Lola were tested, in NTNU, only the Lola was tested due to some technical issues with the Zoom.


![Test 1](/assets/image/2021_11_15_joni_case1.jpeg "Test 0")

![Test 2](/assets/image/2021_11_15_joni_case2.jpeg "Test 0")

#### 3.2.2 Notes on Case 2:
Schramm’s two-way circular communication model between sender and receiver emphasises on encoding and decoding of messages. A message is only sent when encoded by the sender and decoded after its receiving by the receiver. In this case, a further experiment in other setups would be ideal. However, based on the quick testing, it seemed like when the NTNU Lola increased its SR at 48 kHz, the latency between both UiO and NTNU decrease slightly. It could be saved for future considerations.



#### 3.3 DAW used:

In this session, I used Reaper, which is a free digital audio workstation. I took two samples from two dynamic microphones (Input 1 and Input 2). Then, the time delay between two signals is observed based on both the nearest zero-crossing points before each attack of the trigger sound.

## 4 Current limitations:

NTNU was not able to connect with Zoom. Both 48 kHz samples were not collected during the testing sessions due to other technical errors. Therefore, there were only 6 pairs + a pair of local testing at UiO were tested.  However, in the future, if there is also a higher sampling rates option, such as 96 kHz in the MIDAS mixer could be something to decrease audio latency. Additionally, the buffer size in Lola software at the moment cannot go lower than 64 samples. It could be an interesting problem to look at for future MCT students.

## 5 Touchpoint to consider while dealing with audio latency in a communication system:

A take-away message for the new MCT students, the quickest possible ways to look at when being asked to improve audio latency, there are some touchpoints you could start with. The Lola software, where you can change the buffer size, for instance. And then, the MIDAS mixer sample rates. Another touchpoint may depend on how the setup would be, for example, the setting in a DAW and the capacity of a sound card.



<figure style="float: none">
    <center><iframe src="https://youtube.com/embed/47UdokqGet0" width="640" height="360" frameborder="0" allowfullscreen></iframe></center>
    <figcaption><center>Synchronisation demonstration</center></figcaption>
</figure>
