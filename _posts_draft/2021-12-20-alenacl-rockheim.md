---
layout: post
title: "Rockheim museum - about an interactive exhibition"
date: 2021-12-20 10:30:00 +0200
categories: applied-project
author: Alena Clim, Lindsay Charles, Pedro Lucas
image: /assets/image/2021_12_20_alenacl_rockheim.jpg
keywords: rockheim, gesture-elicitation, gestures, interactive, exhibition, interactive-exhibition
excerpt: "..."
---

# Rockheim museum
## About an interactive exhibition

### Introduction

Rockheim is one of Norway’s most exceptional museums. It is _the_ National Museum for Popular Music from the 1950s to the present. It is housed in a former warehouse on the bay of Trondheim.
The primary mission of the museum is to preserve and document Norwegian popular music through diverse exhibitions.

One of their main permanent exhibition is known as 'The Time Tunnel' and it opened to the public on 5th August 2010.
Rockheim’s biggest attraction presents music and artists in a cultural-historical context. The time travel starts in the 1950s, when rock first came to Norway, and continues towards the present time. Using interactive dissemination technology, the public is invited to actively participate during their visit. As part of the museum's staff the guides who are present on each floor of the museum help create a smooth experience, by assisting the audience and engaging them in conversation.

The massive grid of walls is located at the entrance of the floor, in front of the elevators. It consists of six displays with each orientated as portrait. From left to right they are assigned for the 50s, 60s, 70s, 80s, 90s, and 00s, respectively. Static images depicting artists of each decade are shown until someone interupt the flow by "breaking the glass". In front of the screens stickers with each decade are placed on the floor to mark where on the ceiling are the webcam sensors placed. When someone stands on a sticker, the camera detects the shape of hands or the body of person from above. The outline of the movement is overlayed on the screen with green, over the virtual glass layer over the static images. By moving the hands, the person can "break the glass over the screen", resulting in a short video of that artist playing.

>>>>>   insert pictures and gifs to explain this process  

### Our applied project

Since this main interactive exhibition was implemented in the museum, technology evolved considerably, and several problems became clear:
    - it was not obvious that the exhibition was interactive;
    - only one person at a time could use the entire exhibition;
    - the division by decades meant that all the music created from the 2000s until now was piled unde only one screen.

Our external partner, the representative of the IT department at Rockheim, got in cntact with the MCT program and suggested an Applied Projec where the students would work on some ways to address (some of) this problems and give well documented suggestions of improving the screen. The focus was meant to be on practical work, and not so much on theory and literature reviews. If possible, integrating the feedback of actual museum employees and visitors was important.

The museum provided us with an Azure Kinect camera and ideas of how to improve the interactivity using machine learning (ML). We had in-depth talks with our partner and shuffled ideas back and forth, to decide what was reasonable to expect from both parties. Our main deliverables were to be a prototype and a comprehensive documentation that would also allow replication of our work.

__And that's when we came up with a plan...__

We researched gestures in human-computer interaction (HCI) and found out a lot of taxonomies of gestures and studies on mid-air gestures in HCI applications, pros, cons and suggestions for mapping on tasks. Most notably, a study from 2010 (...) found that gesture mappings proposed by end-users were more successful than the more conceptually and physically complex ones proposed by HCI researchers. Based on this idea, we decided to conduct an experimental study right at the museum and ask people for concrete feedback.

### Gesture elicitation phase

So, Pedro and Alena packed their bags and flew to Trondheim over the weeekend to get their hands dirty. We created a very short questionnaire, asking people how easy did they think it was to discover that the Time Tunnel exhibition was interactive, how much did they enjoy it once they discovered it was interactive, and what general suggestions of gesture mappings on actions and improvements they had. We arrived with this idea that people will be curious and ask and want to be involved, and we set up our questionnaires and emptied our pencilcases on high tables near the exhibition. We would have waited forever for people to express their curiosity about our presence there, so, after some time of observing their behaviour around the screen, we put on our adult pants and started asking them the questions instead, in smooth conversations instead of on paper.

>>>> add more pictures from rockheim

Our trip to Rockheim was extremely productive, in one day we understood a lot more about the exhibition and how it is integrated with the rest, gathered a lot of good information from the guides (who were working with the screen and visitors for yeaaars) and spontaneous and out of the box feedback from visitors. We organized all the information in a separate section of the documentation and decided on what gesture mappings to implement, based on all the feedback and our own research and ideas.

- __Slide or Swipe right/left__ – moving between decades and artists



- __“Point at”__ – selecting an artist or to go back by hovering over something on the screen 



- __Zoom in__ – choosing to hear a musical excerpt of the selected artist



- __Zoom out__ – exit the music video 



- __Putting hands in an X__ (or close to each other) – exit music video 


### Hardware and software setup

#### Hardware

The required equipment for this application is shown in the picture below.

<figure style="float: none">
   <img src="/assets/image/2021_12_20_pedropl_rockheim_hardware.png" alt="Hardware Setup" title="Hardware Setup" width="100%" />
   <figcaption><i>Hardware Setup</i></figcaption>
</figure>

Using camera technology such as the Microsoft’s Azure Kinect when placed in front of the user would enhance the results of detection and user’s feedback perception. The Azure kinect has a body recognition system which can be utilized to extract minute gestures and when mapped intuitively can have versatile applications. This sophisticated sensor needs a powerful PC to run properly. Microsoft define the minimum requirements [here](https://docs.microsoft.com/en-us/azure/kinect-dk/system-requirements).


#### Software

The default application was a basic slide show of images/artist, where the timing cannot be controlled, nor the selection of the image/artist. Our team proposed a system where the person can select the decade by pointing with his hand and using gestures to rotate and zoom in and out of the artist, he/she would prefer to listen to.

It was designed based on the modules showed below.

<figure style="float: none">
   <img src="/assets/image/2021_12_20_pedropl_rockheim_software.png" alt="Software Modules" title="Software Modules" width="80%" />
   <figcaption><i>Software Modules</i></figcaption>
</figure>

We used the [Azure Kinect SDK](https://docs.microsoft.com/en-us/azure/kinect-dk/body-sdk-download), [Unity Game Engine](https://unity.com/), and  [Wekinator](http://www.wekinator.org/) as the three main tools to support the development.

The content behavior and the logic to manage a virtual pointer was implemented in Unity, which was communicated to Wekinator to perform gestures based on machine learning strategies. We render a virtual skeleton to provide feedback to the users which also was useful to control virtual objects through explicit programming and machine learning. In the following section you will see a demonstration of the system we achieved.

### Demo

Here you can watch a short demo of someone without prior knowledge of the project discover the final version of the prototype. 

>> code 

### What next?

After integrating everything we could from the feedback, our observations and research in the prototype, we came up with a couple things that could be improved - with a little effort, the prototype will become from great to extraordinary (no bias)!

- The setup could be extended based on the available space. One Azure Camera detected up to three people, but the computer didn't have enough processing power to render all the skeletons. So, by using 2 or 3 cameras, each with its own computer, it would be possible to have more than one person using the prototype in the same time. It would also be possible to add collaborative features, such as a queuing mechanism for playing the videos in order. 

- The ML algorithm can be very easily improved by training the existing models with more diverse people - different physical characteristics, some standing some sitting (to improve the recognition for people using wheelchairs). The model can be extended by mapping other gestures and actions together. For example:
    - __Crossing arms__ – exit, go back or stop a music video
    - __Keeping a palm up in front of the body__ - pause or stop a video
    - __Lifting shoulders in a shrug or tilting head__ - clues/instructions appearing on the screen

- From an aesthetic point of view, the graphical content should bbe designed properly by an expert. Our fun idea is to change the skeleton to fit the theme of the museum and perhaps based by decades - for example, if someone chooses the 70s, all of a sudden their skeleton feedback would have a big wig on. 

- From the point of view of the trade-off between discover-it-yourself and instructions, there are two things that could be implemented to help people with hints, without taking away from the fun of discovering:
    - __Screen overlays__ for the gestures that would trigger actions, without also giving the instructions of what the gesture would do. These could appear only once every 20 seconds, to grab the attention of people passing by, but still give the opportunity for self discovery. 
    - __Screen brightness__ changes that correlate with the distance a body is being recognized away from the screen. The screens would start by being dim, and then the moment someone passes through the field of the camera they would get brighter and brighter until the person is in the ideal spot (distance wise). The screen would get dimmer again if the person gets too close to the cameras. 

### Evaluation

maybe Lindsay can develop this part?

### Conclusion

Throughout the project we changed very few things against our original plan. 

## From last year's instructions
1. The problem you addressed in this project.
2. Explanation and evaluation of the proposed solution and/or the achieved
objectives, and how these align with the requirements from the external
partner.
3. A demonstration (live or video) of the technology/solution that has been
developed and/or objectives that have been achieved.
4. Details of the project deliverables and their documentation.

The blog post should be comprehensive without exceeding 1500 words.
