---
layout: post
title: Interconnecting Modular Synthesizers Using the Web
date: 2020-12-15 12:00:00 +0200
categories: masters-thesis
author: Eigil Aandahl
image: /assets/image/2020_12_15_eigil94_eurorack.jpg
keywords: NIME, modular, NMP, IMS, Interactive Music System, instrumentation, Modular synthesis
excerpt: " In my thesis project, I present an approach to interconnecting modular synthesizer systems using a prototype multi-channel audio network solution made with Max/MSP. The research explores emergent affordances of such a system in the context of telematics and network music performance. At the bottom of this post there is a video demonstrating the prototype in action.  "
---

#### Introduction
In my thesis project, I present an approach to interconnecting modular synthesizer systems using a prototype multi-channel audio network solution made with Max/MSP.
The research explores emergent affordances of such a system in the context of telematics and network music performance. At the bottom of this post there is a video demonstrating the prototype in action. 

The project involves developing a prototype network interface with Max/MSP and routing scheme for interconnecting a virtual modular synthesizer, in this case [VCV Rack](https://vcvrack.com/), with an [analogue Eurorack modular synthesizer](https://www.modulargrid.net/e/racks/view/831120) equipped with [DC-coupled interface modules](https://www.expert-sleepers.co.uk/es3.html). The thesis contextualises itself in a historical perspective on modular synthesizers and hybrid analogue digital music studios, as well as give a literature review of four relevant papers on networked music systems. The prototype is tested with regards to latency and network in the context of network music performance and evaluated in terms of its affordances to music practice and telematics. Lastly, the thesis discusses the expanded high-level modular system and affordances provided by such a solution, and gives examples of possible ways to further research this topic.

### Inspiration
Inspired by the historic connection between computers and electronic instruments in electroacoustic music, this project aims to expand on this approach by having the relation between the computer and analogue hardware be bi-directional and able to connect to peripheral systems, both digital and analogue.

Modular synthesizers are musical instruments consisting of separate modules with specific functions which a synthesist can arrange and connect, giving it an open signal path architecture. In this section I will provide some historical background on modular synthesizers, their basic function, resurgence and their connection with other hybrid analogue digital synthesizers used in early electronic and computer music. 

<figure align="middle">
<img src="/assets/image/2020_12_15_eigil94_eurorack.jpg" width="95%"/>
<figcaption><strong>The hardware modular used in the project</strong></figcaption>
</figure>

### Methods
To explore the affordances of the system, I made a network interface with Max/MSP capable of connecting to a another instance of itself through a network. This patching hub takes in local and remote signal channels and outputs them to local and remote destinations. In the machine running the virtual modular synthesizer, the interface connects using [Dante Via](https://www.audinate.com/products/software/dante-via), and on with the hardware modular synthesizer, a [MOTU Ultralite mk4 audio interface](https://motu.com/products/proaudio/ultralite-mk4) is used to send signals to the synthesizer with ADAT.

<figure align="middle">
<img src="/assets/image/2020_12_15_eigil94_patchinghub.jpg" width="95%"/>
<figcaption><strong>Image of the patching hub's user interface</strong></figcaption>
</figure>

### Results

By testing round trip latencies of various parts of the system, I was able to reveal some of the main technical issues and challenges with making a telematic music system like this. 

I also found that the system offered new and unique affordances for patchability, playability and connectability with modular synthesizers, letting me use more available modules, play with the network as a new environment, and make possible connections with remote locations.

### Video demonstration of the system in action

The video is made using [OBS, Open Broadcaster Software](https://obsproject.com/), to record the screen of the Windows machine running VCV Rack and Max/MSP together with video of the hardware modular synthesizer filmed with a GoPro Hero5. Audio is tapped from various places in the full patch and mixed within the MOTU sound card before being recorded, specifically the sixth input on the ES-6 module on the hardware modular synthesizer and from VCV, channels 7 and 8 are used as final output to the mix.

<iframe width="800" height="450" src="https://www.youtube.com/embed/eMDdWJepKVI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
