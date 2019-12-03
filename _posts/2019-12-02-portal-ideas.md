---
layout: post
title: 'Portal ideas'
date: 2019-12-02 13:40:30 +0100
categories: Portal
author: Rayam, Gaute, Thibault, Ulrik
image: /assets/img/group_a/portal1.jpg
excerpt: 'Instead of starting up the M32 every day, recalling the correct preset, adjusting the faders, turning on the screens, turning on the speakers, opening LOLA, connecting to the other side, pulling your hair out because nothing will work... Imagine just pressing a button and it all just works. '
---

## Introduction

This is a post about the future potential of the portal, with plenty of proposals for technical solutions to solve our existing problems. 


### The problem 
The portal is in dire need of a fixed setup that "just works" when you press the ON-button. The problem now is that there is way too much complexity and room for error, but not enough flexible functionality, which all in all does not make for a very streamlined experience. But fret not! There are plenty of overly-technical solutions out there, here are some of them: 

# Gear and solutions
<figure>
<img src="/assets/img/group_a/gearheaven.gif" align="center" />
<figcaption><strong>   </strong></figcaption>
</figure>

As you all are very familiar with, we rely on the Midas M32 for our audio processing. This is great, isn't it? Having faders, lots of I/O, buttons for everything, a maze of menus, a decent amount of inherent latency, the worlds least intuitive snapshot-solution, lots of room for error... What? You don't like using the M32 on a daily basis? Don't worry, there are others freaks like you out there, and solutions to your despair: Let me introduce you to the audio processor! 

A processor, unlike a live sound mixer, is a device that is meant to sit in a rack and process audio with very little outside interaction. Think of a very flexible mixer which you program once, plug all your cables into and later interact with through a very simple UI. 

<figure>
<img src="/assets/img/group_a/tesira.jpg" align="center" />
<figcaption><strong> A typical audio processor </strong></figcaption>
</figure>

## There are so many benefits to using a processor in situations like this, here are some: 

### Set it and forget it. 

When you first set up a processor from scratch, it can take some time. One usually has to patch everything from the ground up, in a way that closely resembles working in Pure Data. The beauty of this is that you can get exactly the functionality you what you want from it! Once this is done, you store the settings and if you have done everything right, you hopefully won't have to see that menu for many months. 

<figure>
<img src="/assets/img/group_a/tesira_software.png" align="center" />
<figcaption><strong>The software used to program a processor</strong></figcaption>
</figure>

### Using a control panel. 
Instead of starting up the M32 every day, recalling the correct preset, adjusting the faders, turning on the screens, turning on the speakers, opening LOLA, connecting to the other side, pulling your hair out because nothing will work... Imagine just pressing a button and it all just works. 

That dream could become a reality through a simple touch panel, some clever programming and a GPIO-relay. In short; a GPIO is a way for digital devices to communicate with the outside world through analog on/off messages. This opens up a world of possibilities when it comes to automation, since you now can make your processor control a power strip powering the other equipment, trigger events on another device, maybe even talk to a Raspberry PI or a Bela? 

<figure>
<img src="/assets/img/group_a/biamp_controller.png" align="center" />
<figcaption><strong>No, it's not an ipod classic</strong></figcaption>
</figure>


### AEC, Dante, VOIP and several other goodies. 
AEC: When you have a closed loop situation like the one we have in the portal you very quickly run into situations where the microphones feed back into the system, have you noticed? AEC or "Acoustic Echo Cancellation" is a an algorithm that in short fixes the problem by subtracting the audio coming from the speakers, being reflected by the room and back into the microphones from the signal sent to the other side, thereby greatly reducing feedback and echo. This will require a fixed microphone setup, more on that later. 

Dante: Audinate's Dante is an adio over IP protocol that lets you freely route any source to any output in a network. Imagine being able to plug Natasha Barret's computer to the network and patch up to 64 channels of audio directly to any loudspeaker in Trondheim or Oslo, without ever having to go through the M32 or LOLA. Sounds too good to be true? Right now it is, but that is because the network won't let us to this, but more on that later. 

VOIP: VOIP is an ancient technology, but is still in use daily all over the world, as a testament to how reliable it is. Voice Over Internet Protocol is... Well, exactly what you think it is: a regular old telephone, remember those?  Many processors made for teleconferencing has this feature as a substitute for Skype or Zoom. It allows you to dial up another VOIP unit and communicate directly, with minimal fuzz. It is only mono and does not sound great, but will work for troubleshooting those times the portal is a bit grumpy. 

## Better network communication

To be able to realize the ideas listed over, we will need to do some modifications to the network between Oslo and Trondheim. The problem now is that there are a lot of hops on the network, with some sleeping switches and other challenges along the way. A possible solution to this problem could be to set up a router on each end and a dedicated VPN-tunnel between them. The VPN would trick the devices plugged in at both sides to think that they are on the same network and keep the sleeping switches awake between Oslo and Trondheim, allowing us to connect two audio over IP enabled devices together directly. This could even allow the two M32's to communicate with each other directly throug AES50! Maybe, possibly, probably not... 

<a href="https://help.ubnt.com/hc/en-us/articles/115011377588-EdgeRouter-Route-Based-Site-to-Site-IPsec-VPN" target="_blank">A possible hardware VPN-configuration </a>

<a href="https://www.pfsense.org/" target="_blank"> PFsense is a very good open source VPN-service which can be installed on the school's existing hardware </a>

But why only audio, what about video? 
The network we have should be able to support 4K video with almost no compression together with 64ch of bi-directional audio, if the network is configured correctly. Did I mention that the newest version of Dante supports video as well? 


## Microphones mounted in the ceiling

In order to make the AEC work and to make our lives more pleasant in general, we should mount the microphones we use to the ceiling. If we know the positions of the microphones at all times, we could make sure that they are always 180 degrees out of phase from the signal coming out of the speakers, making the possibility of feedback much less likely. This fact and the mere idea of not having a spaghetti of cables on the floor at all times is more than enough to make the case for doing this, in my opinion. 

One argument against this could be that we then would place the microphones further from the source (us), picking up more of the room. This could easily be mitigated by microphones with a tighter pickup-pattern like a shotgun mic, or even the existing AKG C414 set to supercardioid. 

## Reducing room reflections

Maybe it's not very high-tech MCT, but putting up good old physical absorbents in the classroom is a very easy way to improve the audio in the portal. This might serve a double function by making the space more pleasant to look at as well; During the christmas concert, the Oslo side put up molton over some of the walls, in order to hide the cables. What a difference! Doing this was like enabling dark-mode on your phone. 

Molton is extremely cheap, so is Rockwool and regular floor carpets at IKEA or the local flea market. This might be the easiest way to greatly improve our day to day experience of being in the portal. Further improvements could maybe involve some plants? An MCT cat? The possibilities are almost endless. 
<figure>
<img src="/assets/img/group_a/cat.jfif" align="center" />
<figcaption><strong>The MCT cats</strong></figcaption>
</figure>