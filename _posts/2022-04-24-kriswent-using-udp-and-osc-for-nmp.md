---
layout: post
title: "Setting up a controlled environment"
date: 2022-04-24 23:00:00 +0200
categories: portal
author: Joseph Clemente, Kristian Wentzel
image: /assets/image/2202_04_25_kriswent_TakeControl.jpg
keywords: networked music performances, telematic music, osc, pure data, bespokesynth, sonic pi
excerpt: "Taking advantage of light-weight control messages to do Networked Music Performances"
---

<!-- Alternative title: "Give and take control!" -->

As MCT students, we have been exposed to Networked Music Performances ([NMP](https://en.wikipedia.org/wiki/Networked_music_performance)) – both in theory by reading up on the technology and research in the field, and in practice by arranging our own NMP concerts. We've been introduced to different approaches in coping with latency issues introduced when playing together in real-time by sending raw audio between each location. Are there other ways to perform music together over the internet which are not as demanding in regards to bandwidth and latency? We've looked into using lightweight control messages to create and manipulate music together. This can be done in an interactive, interdependent setting where each participant is creating music locally while influencing the music-creation process of the other(s). It can also be a setting where some participants are *manipulators* and others are *creators*, where the manipulators influence the outcome of the creators. In this tutorial, we will introduce and explain three simple, network-based musical examples using UDP messages through network connections and with the OSC protocol.

<figure style="float: none">
   <img src="https://drive.google.com/uc?&id=1Td6m6q3Lf63i9YH1tNq4My6-UUvt1Zur" alt="Controlled Environment" title="" width="80%" />
   <figcaption><i></i></figcaption>
</figure>

### UDP
Let’s start with the User Datagram Protocol ([UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol)), which is one of the main protocols computer applications use to send and receive messages over an Internet Protocol ([IP](https://en.wikipedia.org/wiki/Internet_Protocol)) network. The other common protocol for sending messages through the network is known as the Transmission Control Protocol ([TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)). This is slower than UDP, but much more reliable. TCP is connection-oriented, establishes a connection before transmitting, and expects confirmation messages back from the receiver. UDP on the other hand is a connectionless communication model which does not send or receive confirmation messages. This makes it more unreliable overall, but is much simpler and faster – the perfect choice for us! UDP is often ideal for musical contexts, since we care more about fast connections than sending and receiving every message exactly correct.

## Example #1: Pure data
One simple way to use UDP in a musical context is through the application [Pure Data](https://puredata.info/). Music in Pure Data is created and manipulated using "objects", such as a phasor and reverb. Two of the key objects in our Pure Data patch are "netsend" and "netrecieve", which give the user the ability to collaborate with others across a network. In our small [example](https://youtu.be/AYnd_vlNUxY?t=162), two users are controlling each other's synthesizer patch. The user on the left is controlling song tempo and presets, while the user on the right is controlling vibrato and low-pass filter cutoff. Notice how when a user change each of these parameters on their device, it concurrently changes other user's patch.

### OSC
So now that we know what UDP is, what is [OSC](https://en.wikipedia.org/wiki/Open_Sound_Control)? OSC stands for Open Sound Control, and it is a protocol that allows different devices connected on the same networks or through the internet to send messages to each other. It is much like [MIDI](https://en.wikipedia.org/wiki/MIDI) in many ways, but way more flexible. For our upcoming OSC example, one is manipulating the other music creator over internet through UDP.

To do this, each participant first needs to know their public IP address. Preferably, you would want a static IP address for this, but that could prove difficult – as there are not enough static IPs for everyone. This usually won't be an issue, but you would want to check if your public IP is still the same before starting a new NMP session, since dynamic IPs are – well – *dynamic*. Your public IP can easily be found by simply [googling](https://www.google.com/search?q=what+is+my+ip) it.

The second thing to take care of before jamming out and broadcasting OSC messages across the internet, is to configure port forwarding on your LAN router. (Look up your router address in your network settings, e.g. [192.168.0.1](http://192.168.0.1/)) This part makes it hard, or even impossible, to do this through a public Wi-Fi, at campus, or even at your friend’s house. Some [ISP](https://en.wikipedia.org/wiki/Internet_service_provider)'s won't even let their customers access such settings on their router.

<figure style="float: none">
   <img src="/assets/image/2202_04_25_kriswent_PortForwarding.png" alt="Port Forwarding" title="" width="80%" />
   <figcaption><i>An example of port forwarding in the router settings.</i></figcaption>
</figure>

The good thing is that this setup only needs to be done on the receiver's end, due to the nature of UDP messages not establishing a two-way connection. If we assume a setting where one is controlling the other, the sender only needs to know the public IP of the receiver and decide on a [port](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers). The receiver then needs to know the public IP of the sender and do port forwarding of messages from the chosen port of that IP to their local IP address (on an arbitrary port). **Note: Under such circumstances, TCP would've not worked.**

## Example #2: BespokeSynth
Let’s show an [example](https://youtu.be/AYnd_vlNUxY?t=378) of a one-way NMP using [BespokeSynth](https://www.bespokesynth.com/) where Joseph is located at the MCT campus in Oslo, manipulating the music creation process of Kristian residing in Nittedal. We are using the modules ‘oscoutput’ to send, and ‘osccontroller’ to receive messages.

### Adding layers of complexity
The cloud is the limit (pun intended) for how you could take advantage of this technology for creative purposes. In our final example we're seasoning OSC with accelerometer data from a phone, and a Machine Learning model in Python. The model is trained on 4 different gestures, and its output are scaled and converted back to OSC messages. We're running Python and the music software on the same computer, but this could've been happening on different devices in different locations.

## Example #3: Sonic Pi
[Here](https://youtu.be/AYnd_vlNUxY?t=528) is our last brief example, using [Sonic Pi](https://sonic-pi.net/) and based around a loop of the 'Amen' break. The gestures are controlling cutoff and beat_stretch rate of the loop.

### Conclusion
In summary, we have gone through the basics of UDP and OSC, as well as three different ways to use these tools to create and manipulate music across networks. What we have shown here is only the beginning in terms of the possibilities afforded by playing music through networks. This blogpost is accompanying our video tutorial found [here](https://www.youtube.com/watch?v=AYnd_vlNUxY). We hope that you take what we have taught in this video as a basis to explore further and create your own NMP someday soon!
