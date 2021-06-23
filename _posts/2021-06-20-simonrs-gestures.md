---
layout: post
title: "Designing Gesture-based Interactive Museum Exhibit"
date: 2021-20-06 21:00:00 +0200
categories: masters-thesis
author: Simon Sandvik
image: /assets/image/2021_06_20_simonrs_multitudeofways.png
excerpt: "A short summary of my Masters Thesis on Gesture-based interaction for museum exhibits."
---

<!-- START OF BLOG POST -->

## Abstract

> This thesis looks at research literature and identified principles useful for gesture-based interaction Museum Exhibit design.
> It also reports on the design of a prototype exhibit. It showcases the use of dynamic gestures and spatial positioning as a means of interactively controlling the exhibit, made possible using the Azure Kinect within the Unity game engine.

## Background

Museum exhibit design has seen a paradigm shift towards more technological approaches. They have been forced to renew themselves to approach a wider and younger audience and find themselves competing with other cultural institutions such as sporting events, cinemas etc.
Having worked at Rockheim, the national museum of popular music (Trondheim, Norway), I wanted to investigate this aspect and how gestures can be utilized to control exhibits. Hands-off designs have been especially relevant since the Covid-19 outbreak.
Gestures used for interactivity are defined as either discrete or continuous.
A discrete gesture will elicit an interaction on completion. E.g., A swipe. A Continuous gesture provides continuous data that iteratively affect the output. E.g., Moving an object.
Direct manipulation is one of the most common methods of interaction in VR. Another form of gestural interaction used is pointing with the use of raycasting. Some other ways make use of intermediary tools such as instrumentals (Holding different objects change the interaction), marker menus, widgets, or magic lenses.

<figure>
  <img src="/assets/image/2021_06_23_simonrs_gestureinteraction.png" alt="A selection of various interaction methods" width="70%">
  <figcaption>The reinforcement learning cycle</figcaption>
</figure>

Discoverability of gestures is a key challenge in interactive gesture design.
Providing explicit instructions are unfavorable as it can be disruptive of factors such as goal making, sense of achievement, curiosity, and sense of autonomy, which are found to be important motivating factors. It is found preferrable to find gestures that are easily guessable, and only provide essential feedback and guidance for successful interaction.
Gesture Elicitation studies is the primary methodology adopted for identifying gestures that are suitable for a specific application. These studies ask users to guess the gesture they find most suitable for a referent - the outcome of the interaction. These studies have found commonalities in what gestures are performed and how they perform them.
Many studies have pointed towards a case of media convergence, where gestures used for mobile touch-based interaction are adopted in larger variants, such as swiping, zooming etc.
Many participants in such studies have also underlined that they would like to vary in how gestures are performed. Studies have also found the size of gestures to be dependent on the interactive object, often borrowing from how we normally physically manipulate objects. The size on how they perform gestures are also found to be dependent on the size of the display.
Due to a high level of idiosyncrasy in how gestures are performed, it is a challenging task to for designers and algorithms to find effective ways of recognizing all the different ways gestures can be performed.

One of the main longstanding goals has been to achieve Natural Interaction, an aim to let interaction happen using gestures and movement people use in everyday life through gesticulation and physical manipulation. Making use of a gesture set and interactivity that builds upon everyday situations, is beneficial in being intuitive and allow for immediate interaction without introduction or guidance.
A second goal is making Natural User Interfaces, based upon the same principles of intuitiveness. Secondly, it aims at minimizing, hiding, or finding alternative ways to traditional UI elements such as menus and windows. Virtual Environments are one of the approaches that allow for designing a NUI.
Using avatars that mirror user movements is found to have effect on social acceptance of using movement, which some might find to be socially awkward. It is also effective in prompting user movement and serves as an effective way of giving users continuous feedback.

## Design

The thesis included the design of a prototype exhibit made with Unity using the Azure Kinect DK sensor array to retrieve gesture information. By making use of the Body Tracking API and the “Azure Kinect Examples” asset provided for Unity
The Azure Kinect Examples asset for Unity provides a way of retrieving data from the Body Tracking API directly into unity. The data provided is a skeletal joint array, from which we gestures are recognized by a hard-coded approach of relative positioning to determine states of Start positions and end positions of a discrete gesture.
Swiping gestures allows for browsing various artists featured, and a pushing gesture will play a music video of the selected artist. The prototype also makes use of proxemic interaction where users can walk onto platforms in the virtual environment to change the decade on display.

<figure style="float: none">
    <iframe width="800" height="480" src="https://drive.google.com/file/d/1kII_7_GoYhAbceBvmnl6PwoY4_7GUDxa/view?usp=sharing" frameborder="0" allowfullscreen></iframe>
    <figcaption>Demo of the exhibit</figcaption>
</figure>

## Future work

Possible future work would look into how continuous gestures could be utilized in the exhibit, and how subtle guidance could be provided for a rapid successful interaction.

<!-- END OF BLOG POST -->
