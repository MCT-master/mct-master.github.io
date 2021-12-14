---
layout: post
title: "Micro and Macro: The Development of Novel Accessible Musicking Technologies"
date: 2021-12-14 12:10:00 +0200
categories: masters-thesis
author: Mari Lesteberg
image: /assets/image/2021_12_13_fractionmari_comparison2.png
keywords:  MCT, Master's thesis, Audio programming, HCI, Accessibility, Music Therapy, JavaScript
excerpt: ""
---

<figure style="float: none">
   <img src="/assets/image/2021_12_13_fractionmari_macro2.0.jpg" alt="Macro 2.0 iteration" title="Macro 2.0 iteration" width="70%" />
   <figcaption><i>The Macro 2.0 version</i></figcaption>
</figure>

# Introduction
Most of us will never be professional musicians, even though we have the musicality and the motor ability to achieve it. Of course this is mostly due to coincidences, culture and personal preferences, but it is also dependent on our motor abilities. Most musical instruments demand very precise and fast motor control, which not all of us have. Of course this is something a musician will train up with thousands of hours of practice. However, some people I have talked with, were hindered from being able to even start up by playing the instruments they wanted because of their motor skills. This made me reflect on this question: would it be possible for me to create musical instruments that were engaging and challenging to play, but at the same time possible to play with only gross motor skills? How is it possible to design and implement accessible musicking technologies that can be controlled with motion in the air?

# Accessibility
Accessibility in digital music instrument design is not a new thing, and already there exist instruments and interactive music systems that are used in music therapy and aimed at being accessible for people with disabilities. Emma Frid (2018) researched what trends and solutions of accessible digital musical instrument design that exist in NIME, SMC and ICMC conferences the past 30 years. The most common approach was to create tangible controllers which were used in 13 of 30 cases, like for instance an electronic hand drum designed for music therapy sessions. Non-tangible solutions, like air instruments, was the second most common approach with five of 30 papers (Frid, 2018). 

Some examples of musical instruments that have been designed with the purpose of being inclusive to people with physical disabilities are [Soundbeam](https://www.soundbeam.co.uk/) and [Motion Composer](http://motioncomposer.de/). Common for these two instruments are that they are based on motion in the air. Motion Composer uses complicated video tracking technology, while Soundbeam uses ultrasonic sensors to track motion. Both systems are used in music therapy, and Soundbeam claim on their webpage that their instruments have been thoroughly tested and evaluated - especially in use cases for children with learning difficulties.

However, both Soundbeam and Motion Composer are commercial products, and at the time of writing this blog post, a Soundbeam 6 costs about 100 000 NOK (about 10000 EUR). In other words, it is not possible for a person with a normal income to obtain such a thing. A Motion Composer is not really possible to get your hands on (yet?), at least not from what I can understand from their german webpage. 


<figure>
  <div style="display:flex;">

   <img src="/assets/image/2021_12_13_fractionmari_soundbeam.jpg" alt="Soundbeam" title="Soundbeam" width="30%" /><br>
  <figcaption> <i>Soundbeam. Source: SoundbeamFilms Soundbeam youtube channel. </i> </figcaption>
   <img src="/assets/image/2021_12_13_fractionmari_motioncomposer.jpg" alt="Motion Composer" title="Motion Composer" width="30%" /><br>
  <figcaption> <i>Motion Composer. Source: Motion Composer Facebook page</i> </figcaption>
  </div>

</figure>


All of this made it clear to me that the world needs a web-based musical instrument that can be controlled with motion in the air. There are several ways to do this, however, I chose to try out two different approaches: one by using a web camera and one by using a mobile phone with accelerometer and gyroscope sensors. Both approaches have two apps each, so In total I have developed four apps. However, to reach this stage, the prototypes have been trough several development steps with collection of user feedback in each stage. 


# The evolution of the Macro apps

## The Diff Cam Engine

<figure style="float: none">
   <img src="/assets/image/2021_12_13_fractionmari_diffcam.gif" alt="Diffcam Engine" title="Diffcam Engine" width="70%" />
   <figcaption><i>The Diffcam Engine</i></figcaption>
</figure>


[The Diff Cam Engine](http://diffcam.com/) is a open source core engine that enables motion detecting in JavaScript, created by [Will Boyd](https://codersblock.com/about/). As I had learned audio programming in JavaScript through one of the [MCT courses](https://mct-master.github.io/audio-programming/2019/02/11/SpaghettiPlayer.html), I decided to start on the path of creating motion detecting web-apps for musicking.  Very quickly I found out how to use this technology to create sound:

<figure>
<iframe width="560" height="315" src="https://www.youtube.com/embed/OK11-359A4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>  </iframe> <figcaption> <i>The very first motion capture musical instrument attempt</i> </figcaption>  
</figure>

## Macro 1.0

As you can see from the video above, the latency between action and sound was pretty big. So the next step was to lower the latency, make the system more interactive and improve how it sounded. This led to the first offical version which was released with a feedback form that asked people to test out the apps and come with feedback. This verison was called [Macro 1.0](https://fractionmari.github.io/macro) and was named after the Macro level; one of the three "spatiotemporal levels of human action" (Jensenius, 2017) (this will make more sense in the next section when I describe the Micro apps). 

Macro 1.0 consist of three apps: App 1, App 2 and App 3. They are all based on web camera motion detection, but have different approaches for musical interaction. In the video below, you can see a demonstration of Macro 1.0, or try it out yourself from [this link](https://fractionmari.github.io/macro).

<figure style="float: none">
<iframe width="560" height="315" src="https://www.youtube.com/embed/vQleAqkFjdU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  <figcaption> <i>Macro 1.0 demonstration video</i> </figcaption>  
</figure>

## Macro 2.0

With the second release I took the system a step further by introducing a button free design. The intention was to make the instrument more accessible by avoiding fine motor skill dependent actions like clicking a button with a mouse. This version includes only two apps, as app 2 and app 3 from Macro 1.0 was combined into one app. Try out the apps on [this link](https://fractionmari.github.io/macro2):

<figure style="float: none">
   <img src="/assets/image/2021_12_13_fractionmari_Macro2.0diagram.png" alt="Macro 2.0 iteration" title="Macro 2.0 iteration" width="70%" />
   <figcaption><i>The Macro 2.0 version with explanation</i></figcaption>
</figure>

## Macro 2.1

The last iteration took all the feedback and tried to improve the instructions, the interaction and the visuals of the apps. App 1 is a Theremin-like musical instrument where you can control pitch on the Y axis (vertical) and select between two effects and two instruments on the X axis (horisontal). This iteration have less fucntionalities than the previous iteration, as feedback from users showed that people had problems with unintended output. Still it is a problem that the app interpret all movement as input, and the next step will be to teach the system to seperate between different kinds of gestures.



App 2 is a random music generator, where the user can interact by turning instruments on and off and by applying effects (on the Y axis). The web-app [Synastheasia](https://wheelibin.github.io/synaesthesia/) inspired me to create a system for random music generation. 

You are welcome to try out the apps from [this link](https://fractionmari.github.io/macro3). Check out the video below to see a demonstration of Macro 2.1 app 1 and app 2:  



  <div style="display:flex;">
<div style="margin: auto;">
<figure style="float: none">
<iframe width="350" height="200"  src="https://www.youtube.com/embed/_uWnDRlFo94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<figcaption><i>Macro 2.1 App 1 </i></figcaption></figure></div>
<div style="margin: auto;">
<figure style="float: none">
<iframe width="350" height="200" src="https://www.youtube.com/embed/6CDk5RGpxOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<figcaption><i>Macro 2.1 App 2</i></figcaption></figure></div>
  </div>




# The evolution of the Micro apps

At about the same time as I was starting to create the Macro apps, I was developing the Micro web-apps for the [MICRO project](https://www.uio.no/ritmo/english/projects/micro/) at [RITMO Centre for Interdisciplinary Studies in Rhythm, Time and Motion](https://www.uio.no/ritmo/english/about/) at the University of Oslo. The apps were developed as air instruments and explored micromotion by using accelerometer and gyroscope sensors on smartphones with JavaScript and Web Audio API. I decided to develop further on the apps as a part of this Master's thesis.

## Micro 1.0

The first release of the Micro apps included three different apps with different approaches for exploration of sound and music. The apps have it's own [wiki](https://github.com/FractionMari/micro/wiki) all of the three apps are explained. You can also watch this demonstration video which describes the apps:

<figure style="float: none">
<iframe width="560" height="315" src="https://www.youtube.com/embed/G6kqDY6w_q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 

  <figcaption> Demonstration video of Micro 1.0 apps
</figcaption>
</figure>


## Micro 2.0 and Micro 2.1
With the second iteration of the Micro apps, there was a goal to remove the buttons and find a way to make the instrument entirely touch-free. This was achieved by implementing a way to make the user "hover" the buttons with a blue dot that monitored the motion of the phone. In this way, the user could both control melodies and musical parameters by tilting the phone, but also acitvate buttons by tilting the phone in different angles. However, it was not possible to avoid buttons entirely, as the accelerometer and gyroscope sensors has to be activated by a touch action. The solution was to let the button fill the whole screen.

In the app 2 of the 2.0 release, the same random groove generator as in Macro 2.0 app 2 was introduced. In the Micro 2.1 release, most functionalities were the same as in the 2.0 version, but the visuals were improved and also some of the sound design was improved.

The video below show a demonstration of the Micro 2.1 app 1: 

<figure style="float: none">
<iframe width="560" height="315" src="https://www.youtube.com/embed/birDS7ccUOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  <figcaption> <i>Video demonstration of the Micro 2.1 app 1</i> </figcaption>  

</figure>



# User studies, reflections and further research

The goal of this Master's thesis has been to create _accessible_ web based musicking technologies, which meant that it was important to test out how accessible the prototypes acually were. To narrow down the focus, I had from the beginning decided to foucs on people with low fine motor skills. I was lucky and got in contact with three informants who had low fine motor skills, and as a control group I invited three informants with normal motor skills. The main findings from the studies showed that people with low fine motor skills and the people with normal motor skills were able to interact with the prototypes on almost the same level. Both groups could explore sound and music with the apps, however, both groups encountered problems with the Macro apps creating unintended sound by interpreting all motion as input. The informants with low fine motor skills self-reported in general less enjoyment with the apps than the group with normal motor skills. 

The Micro 2.1 app 1 seemed to be the most enjoyed apps among the users. Interestingly, it was showed that the apps were probably less accessible for the users without touch and mouse functionality than it would have been if touch was implemented. Even though the users reported that they had low fine motor skills, they were used to touch and mouse technology and found this easier than making gestures in the air. The exception was one of the three users who said that tilting the phone to activate buttons was easier for him than clicking a button on the mobile screen. 

<figure style="float: none">
   <img src="/assets/image/2021_12_13_fractionmari_userstudies.png" alt="User studies" title="User studies" width="100%" />
   <figcaption><i>How the users self-reported the experience with the apps</i></figcaption>
</figure>

However, only three users with low fine motor skills are not enough to generalize or make any clear conclusions, and more development and research should be done to investigate further on this technology. The obvious advantage with developing web based software is that it is made easily available and accessible to a huge amount of people. In these days with pandemic lockdowns, we are again being prevented from seeing each other, and the development of online motion tracking musicking technologies might hence be of value both for future research, but also for artistic experience. 

The most important findings from the user studies was that the musicking technologies should be able to adapt and optimized to the individual in order to offer accessibility for people with low fine motor skills. For many people, touch technology might increase the accessibility, and can possibly be used in addition to motion tracking technology. Based on other accessible instruments as Motion Composer and Soundbeam, it is likely to assume that the air instrument approach still has a great potetial for accessibilty. The technology developed in this thesis offer a great potential for improvement, and when mobile and computer cameras are improved with e.g. the option for 3D interpretation of the video stream, more precise and complicated mappings can be implemented. Implementing image recognition and machine learning within the web camera based apps, can help distinguishing between different kinds of movements.

<figure style="float: none">
   <img src="/assets/image/2021_12_13_fractionmari_comparison2.png" alt="Comparison of the apps" title="Comparison of the apps" width="100%" />
   <figcaption><i>Comparison of the Micro and the Macro apps</i></figcaption>
</figure>


# Links:

- [Web page of the project](https://fractionmari.github.io/microandmacro/)
- [The Master's thesis pdf](https://fractionmari.github.io/microandmacro/MASTER_THESIS_Mari_Lesteberg_Dec2021.pdf)
- [Macro 2.1 github repository](https://github.com/FractionMari/macro3)
- [Macro 2.0 github repository](https://github.com/FractionMari/macro2)
- [Macro 1.0 github repository](https://github.com/FractionMari/macro)
- [Micro 2.1 github repository](https://github.com/FractionMari/micro3)
- [Micro 2.0 github repository](https://github.com/FractionMari/micro2)
- [Micro 1.0 github repository](https://github.com/FractionMari/micro)
- [Macro 2.1 web-app](https://fractionmari.github.io/macro3/)
- [Macro 2.0 web-app](https://fractionmari.github.io/macro2/)
- [Macro 1.0 web-app](https://fractionmari.github.io/macro/)
- [Micro 2.1 web-app](https://fractionmari.github.io/micro3/) (must be opened on a smartphone)
- [Micro 2.0 web-app](https://fractionmari.github.io/micro2/) (must be opened on a smartphone)
- [Micro 1.0 web-app](https://fractionmari.github.io/micro/) (must be opened on a smartphone)



# Good bye!
<figure style="float: none">
   <img src="/assets/image/2021_12_13_fractionmari_bye.gif" alt="Bye" title="Bye" width="65%" />
   <figcaption><i>Thanks for now!</i></figcaption>
</figure>
# References 

- Frid, E. (2018). Accessible digital musical instruments-a survey of inclusive instruments. In
	Proceedings of the International Computer Music Conference (pp. 53-59). International
	Computer Music Association.
- Jensenius, A. R. (2017). Sonic Microinteraction in “the air”. In M. Lesaffre, P.-J. Maes & M.
	Leman (Eds.), The Routledge companion to embodied music interaction (pp. 429-437).
	Routledge.
   
