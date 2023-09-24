---
layout: post
title:  "Shadows As Sounds"
date:   2023-09-23 11:09:00 +0200
categories: interactive-music
author: Nino Jakeli
image: /assets/image/2023_09_23_ninojak_yupana.jpeg
excerpt: "4-step sequencer using seeds and corns"
keywords: NIME sequencer, interactive music instruments
---

# Background

NIME (New Interfaces for Musical Expression) is the largest international gathering of digital luthiers interested in pushing the boundaries of instrument design, exploring how artistic expression, ergonomic design and novel technologies interact during performance with new musical instruments. 

In 2022, Patricia Cadavid an artist and a researcher from Colombia received the NIME Best Music Category prize for creating an open-source interactive electronic instrument that generates rhythms and experimental live sound inspired by the Andean yupana, a hand-controlled physical calculator that was used for the placement of seeds on divided boards to perform basic arithmetic operations. 

![Description of Image](/assets/image/2023_09_23_ninojak_nime.jpg)
<p align="center"><em>bela.io/nime-2022/</em></p>



# Introduction

<div align="center" style="margin-bottom: 20px;">
   <img src="{{ site.baseurl }}/assets/image/2023_09_23_ninojak_mainpic.jpeg" alt="Description of Image" style="display: block; margin-bottom: 0 !important;">
   <em style="display: block; margin-top: 5px;">Kanchay_Yupana//: Rhythm sequencer inspired by ancestral Andean technologies</em>
</div>





Many artists today have been inspired by ancestral technologies of their territories of origin to claim them in artistic expression. Kanchay_Yupana_// (Yupana of Light in Quechua) can be seen as an interface that belongs to one of them as well. The instrument is a part of the designer's short genealogy of interfaces that builds upon the memory of ancestral technological tools and reuses them in new artistic ways. 

Kanchay_Yupana_// functions similarly to an ancient Andean physical calculator. The arrangement of seeds on board creates patterns that can be transformed into rhythms and other sonorities. By taking this foundational concept of seed positioning to produce a concrete rhythmic action, adapted the interaction to a step sequencer. 





# Technical Implementation

![Description of Second Image](/assets/image/2023_09_23_ninojak_screenshot.jpg)



The interface includes a wooden board with sixteen boxes and holes, LDR digital modules, potentiometers, and a Teensy 2.0 microcontroller. The holes are arranged in three rows consisting of four steps and an additional box for the general control. The board has a 24 x 25 cm design that enables low-cost manufacturing and easy transportability. 

The wooden material is also simple to prototype and has historical context as well. The interface is built as a 3-instrument drum machine based on the structure of the one-seed-per-box yupana where the placement of one seed in each box represents a particular cipher. In this fashion, the core section of the instrument preserves yupana's original four-column arrangement.

In addition, at the peripheries of the interface, there are an extra four slot rows of different sizes. The controls for each instrument are given in this row. To play or pause the rhythm, the same holes and photoresistors are used along with the potentiometer to control the loudness of each track. The total loudness and tempo are additionally manipulated by a higher box with two potentiometers, and a separate hole determines the device's on/off state. 

Each box has a Light Sensing Module LDR to detect the shadow cast by placing the seed in the box. Potentiometers control the volume and tempo of each instrument as well. Modules were selected over traditional LDR components due to their affordability, dependability, easier programming and configuration.

Also, using a micro potentiometer to determine each component's on/off state by having a threshold of light, significantly facilitated the electronic building of the interface. The Kanchay_Yupana// uses native Andean corn and huayruro seeds to produce shadows. These seeds have historical significance and are optimal for interaction. 

A Teensy 2.0 microcontroller is integrated for its affordability, compactness, and ease of programming. Pure data patch receives MIDI messages produced by recognizing the shadow on photoresistors. The instrument enables real-time rhythm creation. Users are free to interact by adding or removing seeds, and manipulating the rhythm's steps and tempo.

# Reuse of tools for creative porpuses

| ![The representation of khipu and yupana](/assets/image/2023_09_23_ninojak_tools.jpeg) | ![Representation of number 1999 in yupana](/assets/image/2023_09_23_ninojak_tools2.jpg) |
|:--:|:--:|
| *The Representation of khipu and yupana* | *Representation of number 1999 in yupana* |



Kanchay_Yupana// can be viewed as a supplementary instrument for another Electronic_Khipu_ made by Patricia Cadavid. This interface is also based on the ancient device that was used for ritual purposes and as a calculating tool. Electronic_Khipu_ produces sound by knotting its sensitive conductive rubber strings. 

Since The yupana and the khipu were not used originally to make music, the artist demonstrates an ability to repurpose machinery and technology for expressive musical ends (Tanaka, 2012). The performance with both interfaces seems like a speculative exercise of imagining sounds in an Andean musical context. 

# Piece, not an instrument

The Electronic_Khipu_ is programmed to generate a variety of experimental sounds that are explicitly linked to conductivity and the performer-instrument relationship, whereas the Kanchay_Yupana// contributes to generating a rhythm that can easily change during the performance, indicating different moments of intensity or calm. Together they transform the performance into a ritual act where the artist connects with the audience in a unique way. 

One could argue that in this instance, the instrument no longer stays as a separate tool but becomes an artwork itself. It responds well to Perry Cook's 5th principle for designing computer music controllers: "Make a piece, not an instrument or controller". Also, in this context, technology is viewed not merely as a material-oriented channel but as a transparent medium for communicating ideas. (Mudd, T. Chapter 8: Material-Oriented Musical Interactions). 

# Good for beginners

Technically, using both instruments live is simple and intuitive. The artist was able to observe the interface's accessibility for individuals as well, resulting in an immediate understanding and a fast learning curve. This so-called, low "entry fee" in getting started with a computer-based instrument could be beneficial for novices as being relatively easy and less intimidating to try out. However, sometimes many simple-to-use computer interfaces appear to have a toy-like character after even a limited period of use and do not encourage continuous musical evolution (Wessel, D., & Wright, M. Problems and prospects for intimate musical control of computers). 

Hopefully, this won't be the case here as the artist plans to improve and maximize the instrument's usability by adding LEDs that show the step in real time, larger control boxes for better ergonomics and integrating extra holes for creating further steps to construct more complicated rhythms. however, often this approach can easily fall into the "curse of programmability" where designers redefine and remap indefinitely without ever finishing artworks or creative projects (Cook, P. Principles for designing computer music controllers).

Finally, I believe Kanchay_Yupana// can establish quite an intimate and delicate connection with both the performer and the audience as well. It is definitely worth checking!

<iframe width="560" height="315" src="https://www.youtube.com/embed/MPrPLPLASrw" frameborder="0" allowfullscreen></iframe>




References:

- **Cook, P.** Principles for designing computer music controllers. [Link](https://arxiv.org/abs/2010.06524)
  
- **Mudd, T.** Material-oriented musical interactions. [Link](https://link-springer-com.ezproxy.uio.no/content/pdf/10.1007/978-3-319-92069-6_8)

- **Wilkie, K., Holland, S., & Mulholland, P.** Towards a participatory approach for interaction design based on conceptual metaphor theory: A case study from music interaction. [Link](https://link-springer-com.ezproxy.uio.no/chapter/10.1007/978-1-4471-2990-5_15)

- **Wessel, D., & Wright, M.** Problems and prospects for intimate musical control of computers.

- **Tanaka, A. (2012).** Sensor-based musical instruments and interactive music. In *The Oxford Handbook of Computer Music*. Oxford University Press. [Link](https://doi.org/10.1093/oxfordhb/9780199792030.013.0012)


