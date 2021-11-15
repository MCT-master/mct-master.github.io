---
layout: post
title: "Touchpoint that can potentially improve the audio latency in a communication system"
date: 2021-11-14 18:00:00 +0100
categories: portal
author: Joni Mok
image: /assets/image/2021_11_15_joni_1.jpeg
keywords: portal, communication system, audio latency
excerpt: "Quick tips for future MCT-ers or external partners who will be using the MCT Portal for the first time: this article gives you practical information to start with improving audio latency.""
"
---

Quick tips for future MCT-ers or external partners who will be using the MCT Portal for the first time: this article gives you practical information to start with improving audio latency.

## Introduction

Whenever we start working with a new communication system, finding the touchpoint affecting the audio latency can be useful. In human communication, a touchpoint is that part of the system we interact with  connecting  relevant stakeholders within a particular business or an organisation. In a more technical sense, I am borrowing the term: a touchpoint is the element on an electronic device that you can touch in order to carry out a particular action. This blog post will be looking into the touchpoints that can potentially improve the audio latency in a communication system.



### Communication Models

Before diving into the technical setup, I want to look into two particular communication models. Communication models refer to the conceptual frameworks or theories that explain the way of humans exchange information or signals, from “hello” to advertising to morse code.  It also represents the entire process of communication between the sender and the receiver. The purpose of a communication model is to describe the underlying mechanism of a communication system: What happens during the information transmission process between sender and receiver? How will the message eventually be delivered?  A communication model takes into account the many relationships that a system involves.  It explains the elements of a communication process, for example, context, encoding, decoding, channel, message, feedback, noise, sender and receiver. Shannon and Weaver’s linear model of communication can serve as a basic description of one-way communication. However, their model does not directly support feedback. Schramm’s two-way circular communication model between sender and receiver emphasises the encoding and decoding of messages. A message is only sent when encoded by the sender and decoded after has been received. This model allows for unpredictable human complexity and that makes it relevant to the Human-Machine-Interaction (HMI). For HCI and/or HMI designers, asking "what if..?" in every stage of the process can enhance overall experience flow. Shannon and Weaver’s model remains however a starting point of communication novice. The useful aspect of it is the concept of noise. From Schramm's model we get the idea of the communication between two-way.


![Shannon-Weaver](/assets/image/2021_11_15_joni_sw.jpeg "SW")

![Schramm](/assets/image/2021_11_15_joni_ss.jpeg "ss")

## Portal experiment

### Case 1: UiO local testing

Case 1 was a local latency test at UiO. Two microphones (Input 1 and Input 2) were set up, in which Input 1 received an acoustic signal, in this case, the beat from a drum stick. The signal was then converted to digital form and arrived at a Mac. Input 2 registered an electronic signal after a roundtrip of “time travel”. (watch the video for more information).

#### Audio latency testing:

The MIDAS mixer has two sampling rates (SR), they are either 44.1 kHz or 48 kHz. With these limited options at hand, I have tested both SRs from the local UiO Portal. There was a 1ms delay between both SRs.  But overall, the local latency is approximately between 5-6ms.


![Test 0](/assets/image/2021_11_15_joni_case0.jpeg "Test 0")

### Case 2:  UiO Zoom and Lola to NTNU Lola

Case 2 was a latency test between UiO and NTNU. Four microphones (Input 1, Input 2, Input 3 and Input 4) were set up, in which Input 1 received an acoustic signal and served as an Analog-Digital Convertor (ADC). Input 2 received an electronic signal after a roundtrip of “time travel”. The Input 3 microphone connected to the mixer from UiO and sent the signal through either Zoom or Lola to NTNU. The output from UiO played in NTNU’s speaker and the signal was then sent back to UiO via another microphone (Input 4).

![Overview](/assets/image/2021_11_15_joni_overview.jpeg "Overview")

#### Audio latency testing:

In alignment with case 1, both the 44.1 kHz and 48 kHz sampling frequencies were tested. What made this session different was that it was a circular roundtrip communication. Meaning that both UiO and NTNU equally encode and decode messages through “time travel”. While in UiO, both Zoom and Lola were tested, in NTNU, only the Lola was tested due to some technical issues with the Zoom.


![Test 1](/assets/image/2021_11_15_joni_case1.jpeg "Test 0")

![Test 2](/assets/image/2021_11_15_joni_case2.jpeg "Test 0")



#### DAW used:

In this session, I used Reaper, which is a free digital audio workstation. I took two samples from two dynamic microphones (Input 1 and Input 2). Then, the time delay between two signals was observed based on both the nearest zero-crossing points before each attack of the trigger sound.

## Current limitations:

NTNU was not able to connect with Zoom. Both 48 kHz samples were not collected during the testing sessions due to technical errors. Therefore, only 6 pairs of roundtrip and a pair of local testing at UiO were carried out.  However, in the future, if there is also a higher sampling rates option, such as 96 kHz in the MIDAS mixer it could be used instead to decrease audio latency. Additionally, the buffer size in Lola software at the moment cannot go lower than 64 samples. It could be an interesting problem to look at for future MCT students, namely how to increase the buffering.

## Touchpoint to consider while dealing with audio latency in a communication system:

A take-away message for the new MCT students: the most useful things to consider when you need to improve audio latency are whether there are some touchpoints you could start with. In the the Lola software, it’s where you can change the buffer size, for instance. And then, you can also alter the MIDAS mixer sample rates. Another touchpoint may depend on other particulars of the setup, for example, the setting in a DAW and the capacity of a sound card.


## Special thanks:
Pedro and Jarle for being supportive learning buddies.
Abhishek for being in the NTNU Portal.




<figure style="float: none">
    <center><iframe src="https://youtube.com/embed/47UdokqGet0" width="640" height="360" frameborder="0" allowfullscreen></iframe></center>
    <figcaption><center></center></figcaption>
</figure>
