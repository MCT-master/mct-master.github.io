---
layout: post
title: "Rockheim - about an interactive exhibition"
date: 2021-12-20 10:30:00 +0200
categories: applied-project
author: Alena Clim, Lindsay Charles, Pedro Lucas
image: /assets/image/2021_12_20_alenacl_rockheim.jpg
keywords: rockheim, gesture-elicitation, gestures, interactive, exhibition, interactive-exhibition
excerpt: "Anyone who visited Rockheim knows about the Time Tunnel, where 6 screens show the history of Norwegian music from the 50s until today. If you have no idea what I am saying, add a visit to Rockheim on your bucket list! For this project, we had to investigate and offer improvement ideas."
---

# Rockheim - About an interactive exhibition

<figure style="float: none">
   <img src="/assets/image/2021_12_20_alenacl_rockheim.jpg" alt="Rockheim" title="Rockheim" width="50%" />
   <figcaption><i>Main exhibition at Rockheim</i></figcaption>
</figure>

### Introduction

Rockheim is one of Norway’s most exceptional museums. It is _the_ National Museum for Popular Music from the 1950s to the present. It is housed in a former warehouse on the bay of Trondheim.
The primary mission of the museum is to preserve and document Norwegian popular music through diverse exhibitions.

One of their main permanent exhibition is known as 'The Time Tunnel' and it opened to the public on 5th August 2010.
Rockheim’s biggest attraction presents music and artists in a cultural-historical context. The time travel starts in the 1950s, when rock first came to Norway, and continues towards the present time. Using interactive dissemination technology, the public is invited to actively participate during their visit. As part of the museum's staff the guides who are present on each floor of the museum help create a smooth experience, by assisting the audience and engaging them in conversation.

The massive grid of screens on the wall is located at the entrance of the floor, in front of the elevators. It consists of six displays with each orientated as portrait. From left to right they are assigned for the 50s, 60s, 70s, 80s, 90s, and 00s, respectively. Static images depicting artists of each decade are shown until someone interrupt the flow by "breaking the glass". In front of the screens stickers with each decade are placed on the floor to mark where on the ceiling are the webcam sensors placed. When someone stands on a sticker, the camera detects the shape of hands or the body of person from above. The outline of the movement is over-layed on the screen with green, over the virtual glass layer over the static images. By moving the hands, the person can "break the glass over the screen", resulting in a short video of that artist playing.

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/11FD9ON759Ad_skwR16zVB44YSnnUDza5/preview" width="512" height="288" frameborder="0" allowfullscreen></iframe>
   <figcaption>Screen interaction</figcaption>
</figure>

### Our applied project

Since this main interactive exhibition was implemented in the museum, technology evolved considerably, and several problems became clear:
    - it was not obvious that the exhibition was interactive;
    - only one person at a time could use the entire exhibition;
    - the division by decades meant that all the music created from the 2000s until now was piled on only one screen.

Our external partner, the representative of the IT department at Rockheim, got in contact with the MCT program and suggested an Applied Project where the students would work on some ways to address (some of) this problems and give well documented suggestions of improving the screen. The focus was meant to be on practical work, and not so much on theory and literature reviews. If possible, integrating the feedback of actual museum employees and visitors was important.

The museum provided us with an Azure Kinect camera and ideas of how to improve the interactivity using machine learning (ML). We had in-depth talks with our partner and shuffled ideas back and forth, to decide what was reasonable to expect from both parties. Our main deliverables were to be a prototype and a comprehensive documentation that would also allow replication of our work.

__And that's when we came up with a plan...__

We researched gestures in human-computer interaction (HCI) and found out a lot of taxonomies of gestures and studies on mid-air gestures in HCI applications, pros, cons and suggestions for mapping on tasks. Most notably, a study from 2010 (...) found that gesture mappings proposed by end-users were more successful than the more conceptually and physically complex ones proposed by HCI researchers. Based on this idea, we decided to conduct an experimental study right at the museum and ask people for concrete feedback.

### Gesture elicitation phase

So, Pedro and Alena packed their bags and flew to Trondheim over the weekend to get their hands dirty. We created a very short questionnaire, asking people how easy did they think it was to discover that the Time Tunnel exhibition was interactive, how much did they enjoy it once they discovered it was interactive, and what general suggestions of gesture mappings on actions and improvements they had. We arrived with this idea that people will be curious and ask and want to be involved, and we set up our questionnaires and emptied our pencil cases on high tables near the exhibition. We would have waited forever for people to express their curiosity about our presence there, so, after some time of observing their behaviour around the screen, we put on our adult pants and started asking them the questions instead, in smooth conversations instead of on paper.

<figure style="float: none">
   <img src="/assets/image/2021_12_20_alenacl_jukebox.jpeg" alt="Rockheim visit: jukebox" title="Rockheim visit: jukebox" width="80%" />
   <figcaption><i>Rockheim visit: jukebox</i></figcaption>
</figure>

<figure style="float: none">
   <img src="/assets/image/2021_12_20_alenacl_thunderbird.jpeg" alt="Rockheim visit: Thunderbird" title="Rockheim visit: Thunderbird" width="80%" />
   <figcaption><i>Rockheim visit: Thunderbird</i></figcaption>
</figure>

Our trip to Rockheim was extremely productive, in one day we understood a lot more about the exhibition and how it is integrated with the rest, gathered a lot of good information from the guides (who have been working with in the museum and with visitors for years) and spontaneous and out of the box feedback from visitors. We organized all the information in a separate section of the documentation and decided on what gesture mappings to implement, based on all the feedback and our own research and ideas.

- __Slide or Swipe right/left__ – moving between decades and artists

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/112VYDB3nJz4m3Xac6rbyCdtpy0AdQ0Ih/preview" width="960" height="540" frameborder="0" allowfullscreen></iframe>
   <figcaption>Swiping Right</figcaption>
</figure>

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1Qd38BDxx4bYTOW7SyKflJosBjUpKi2hZ/preview" width="1024" height="576" frameborder="0" allowfullscreen></iframe>
   <figcaption>Swiping Left</figcaption>
</figure>

- __“Point at”__ – selecting an artist or to go back by hovering over something on the screen

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1h1oydQiVet02eeB50ugHYiOEndtBw8kH/preview" width="1024" height="576" frameborder="0" allowfullscreen></iframe>
   <figcaption>Pointing</figcaption>
</figure>


- __Zoom in__ – choosing to hear a musical excerpt of the selected artist

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/11ApYg0LRIWAZgdRzYYj2h6pR_jtyfiFU/preview" width="1024" height="576" frameborder="0" allowfullscreen></iframe>
   <figcaption>Zoom in</figcaption>
</figure>


- __Zoom out__ – exit the music video

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1s_FKFW528jkY84OcO7nLAHwXOjRo43yT/preview" width="1024" height="576" frameborder="0" allowfullscreen></iframe>
   <figcaption>Zoom out</figcaption>
</figure>



- __Putting hands in an X__ (or close to each other) – exit music video

<figure style="float: none">
   <img src="/assets/image/2021_12_20_lindsay_close_rockheim.jpg" alt="DOA Estimation" title="Close gestures." width="75%" />
   <figcaption><i>Close gesture demonstration.</i></figcaption>
</figure>

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

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/172_EaEgBzQr1nauqLi9Ii_Vh8P_zEuUc/preview" width="1024" height="576" frameborder="0" allowfullscreen></iframe>
   <figcaption>Demo of a user interacting with the prototype for the first time</figcaption>
</figure>

### Evaluation

 The evaluation of the prototype was done internally in the team. Each evaluation phase was approached slight different.

 Initially, the quality of the gesture recognition was tested, by making fast gestures and documenting the optimal speed for any gesture. Gestures which we obtained from the study in Rockheim were trained with different variations and training these gestures with Lindsay as the user and then testing it out, had promising results. The gestures we decided on after our trip to Rockheim were trainined into the model by Lindsay and then tested for accuracy.

 A few other tests were also done to find the optimal position of the user in relation with the camera. The "sweet spots" we found were between 3 and 4 meters away from the camera and inside 25 degrees to the right and left from the central axis.

 For the final testing, we asked an external user wiht no previous knowledge about the project to interact with the prototype and recorded it. After this test, we observed that some gestures had to be done twice or thrice; we think it may due factors such as speed of movement, and/or training of the machine learning model with only one user. This could, however, be corrected using higher frame rates and by training the ML model with multiple and diverse users.

 As our main objectives were to have a working, 'fun and intuitive' prototype, we think the last test (seen partially in the demo) was genuinely satisfactory.

### What next?

After integrating everything we could from the feedback, our observations and research in the prototype, we came up with a couple things that could be improved - with a little effort, the prototype will become from great to extraordinary (no bias)!

- The setup could be extended based on the available space. One Azure Camera detected up to three people, but the computer didn't have enough processing power to render all the skeletons. So, by using 2 or 3 cameras, each with its own computer, it would be possible to have more than one person using the prototype in the same time. It would also be possible to add collaborative features, such as a queuing mechanism for playing the videos in order.

- The ML algorithm can be very easily improved by training the existing models with more diverse people - different physical characteristics, some standing some sitting (to improve the recognition for people using wheelchairs). The model can be extended by mapping other gestures and actions together. For example:
    - __Crossing arms__ – exit, go back or stop a music video
    - __Keeping a palm up in front of the body__ - pause or stop a video
    - __Lifting shoulders in a shrug or tilting head__ - clues/instructions appearing on the screen

- From an aesthetic point of view, the graphical content should be designed properly by an expert. Our fun idea is to change the skeleton to fit the theme of the museum and perhaps based by decades - for example, if someone chooses the 70s, all of a sudden their skeleton feedback would have a big wig on.

- From the point of view of the trade-off between discover-it-yourself and instructions, there are two things that could be implemented to help people with hints, without taking away from the fun of discovering:
    - __Screen overlays__ for the gestures that would trigger actions, without also giving the instructions of what the gesture would do. These could appear only once every 20 seconds, to grab the attention of people passing by, but still give the opportunity for self discovery.
    - __Screen brightness__ changes that correlate with the distance a body is being recognized away from the screen. The screens would start by being dim, and then the moment someone passes through the field of the camera they would get brighter and brighter until the person is in the ideal spot (distance wise). The screen would get dimmer again if the person gets too close to the cameras.

### Conclusion

Throughout the project we changed very few things against our original plan. We managed out time quite well considering our other courses and outside work, and organized our resources accordingly. Based on each of our background and experience we split the work to make the most of the available time. If you'd like to download and use our prototype and the documentation we wrote for it, or have any questions, get in contact with us! Due to the nature of this project we can't disclose all the information publicly.

Overall, this was a very fun project and a great opportunity for all of us to work on a real-world application. We learnt a lot and we're very grateful to Rockheim.

<figure style="float: none">
   <img src="/assets/image/2021_12_20_alenacl_retro_team.jpg" alt="Retro team" title="Retro team" width="80%" />
   <figcaption><i>Retro team Rockheim</i></figcaption>
</figure>
