---
layout: post
title: "Theory Controller: A Silent IMS"
date: 2021-06-03 12:00:00 +0200
categories: masters-thesis
author: Thibault Jaccard
image: /assets/image/2021_06_03_thiblejack_theory_controller.png
excerpt: "Interactive system to control music theory"
Keywords: Music Theory, IMS, Mapping, SpaceMouse, JavaScript
---

## Abstract

This paper explores music theory real time controllability through the design of an interactive musical interface. More precisely, the instrument described here lets the user select any standard heptatonic scale - including all twelve keys and seven modes of the four main scale classes, diatonic, acoustic, harmonic minor and harmonic major - using a joystick-like gesture input device. The program presents a complex visual interface, and multiple use cases are explored. The system as it is does not produce any sound, it is thus not playable in performance settings on its own. It may however be used in conjunction with other compatible custom apps, such as an arpeggiator or a dynamic MIDI scale mapper, as well as virtual instruments.

The Theory Controller opens a discussion about chord progression awareness as well as inter-plugin scale data synchronisation. The typical user is portrayed, and possible enhancements for the system are envisioned. The latter is also compared with other existing music theory enabled interfaces.

## Design

The interface offers one-to-one control of three main parameters: scale class, key and degree. The scale class parameter has four states (diatonic, acoustic, harmonic minor and hamronic major), the kay may be one of the twelve pitch classes, and the degree represents one of the seven heptatonic modes of the selected scale. That gives us a total of 336 scales.

In additions, these scales may be accessed using other navigation means: chord type, mode in type, semitone and minor third. To control these parameters, either a SpaceMouse or mouse and keyboards may be used. You can have an overview of the mapping in the following video. You may also test the system itself in the web app down below. Use the mouse to change the three main parameters on the bottom right corner and keyboard arrows to navigate using types.

<figure>
    <iframe width="560" height="315" src="https://youtu.be/PS_K6YkZnro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <figcaption>Mapping</figcaption>
</figure>

The visual interface consists of a third of the circle of fifths at the bottom, a smaller circle of modes on top of it, containing small circles for the accessible scales. Moreover, you can see mouse navigation buttons on the bottom right corner, the six chord types on top and finally a list of the available modes in type on the right.

<iframe id="theory-controller"
    title="theory-controller"
    width="700"
    height="425"
    frameBorder="0"
    scrolling="no"
    src="https://thiblejack.ch/theory-controller/">
</iframe>

## applications

The instrument may be used in different manners. In order to make music, it has to be used in conjunction with a compatible app. For example, you can watch below a demonstration of the Theory Controller used with a dynamic MIDI scale mapper. The selected scale is communicated using OSC, and a Pure Data patch makes the drum pad trigger a MIDI tetrad chord according to the selected mode. That way, both musicians are always harmonically in synch, while only one has control of it using the Theory Controller. All generated MIDI data are routed to virtual instruments.

<figure>
    <iframe width="560" height="315" src="https://youtu.be/nrOcMIe3s-Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <figcaption>Demonstration</figcaption>
</figure>
