---
layout: post
title: "A-team - ART IS ANYTHING YOU CAN GET AWAY WITH"
date: 2018-10-22 19:08:00 +0200
categories: Workshop in Physical computing
author: EW, SR, SH, JNV
---

<figure>
<img src="https://raw.githubusercontent.com/MCT-master/mct-master.github.io/master/assets/img/Ateam_pipe.jpg" alt="This Is Not a Pipe" width="70%" align="middle">
<figcaption align="middle"><strong>This Is Not a Pipe</strong></figcaption>
</figure>

## ART IS ANYTHING YOU CAN GET AWAY WITH
 
### Introduction 

We were set our end of week task, incorporating the human interaction technology we have been exploring all week (and in our previous blog posts). After these few days of training - it was finally time to put it to the test, and design an instrument!

### Ideas

After having started the day with each group presenting their blog posts, we moved to work on the concept for our prototype instrument. As a group we started to look at the advantages and disadvantages we had on this particular project. The one aspect that stood out was that we were all collaborating through the portal - something that is unique for our course. So, we thought how could we utilise this in conjunction to our instrument designing?

We came up with the idea of having a signal chain that passes “through” the portal, in real time.  This would allow both campus groups to take part in the same instrument - a “Chinese whispers” of audio if you will. With this as a concept, we then thought- what technology could we use to exhibit this idea well for both composition, and performance? We believed it was an important factor to connect this concept visually for the audience, so they could easily understand what was going on, and relate to the performance. 

Mobile phones have been around for quite a while, and has solidified into the public's mind as a standard communication device. So, we decided to use a phone as the tool to send the signal over to the other campus. There were a few reasons for this. Firstly, it is a common device, those in the public watching would relate (hopefully) to what was going on at a glance, without needing to be explained. It also shows the accessibility of such an instrument setup - in theory it can be done by anyone with a phone. Also it allowed us some options for performance. This was utilised by Jorgen using the app OSCHook, we mapped parameters from the phones movement (up/down, left/right and tilt) to modulation of choice in the signal chain. This, along with the fact we can move around the room with the phone, meant we could potentially have an expressive instrument - that was also instantly recognisable (and hopefully understandable) for those viewing the show. Lastly, a phones microphone will have some degradation/coloration of the sound, that will give it a textual change during the process.

<figure>
<img src="https://raw.githubusercontent.com/MCT-master/mct-master.github.io/master/assets/img/Ateam_feedback.jpg" alt="Basic Feedback diagram" width="70%" align="middle">
</figure>

Of with this kind of audio loop - there is an elephant in the room - the issue of feedback. We have previously seen a lecture on the possibilities of using latency as a signal to process audio. Well in theory - we could utilise feedback as part of the instrument? This was a concept we would of liked to explore, but half a day is way too little time to make feedback an ally, there are lots of considerations (and experiments) to possibly get that to work. The set up also had no limiter (as far as we were aware) and so we didn’t want to risk blowing speakers/amps/laptops or our ears!

<figure>
<img src="https://raw.githubusercontent.com/MCT-master/mct-master.github.io/master/assets/img/Ateam_feedbackDiag.png" alt="Basic Feedback diagram" width="50%" align="middle">
<figcaption align="middle"><strong>Basic Feedback diagram</strong></figcaption>
</figure>

So, like in Darth Vader in revenge of the Sith “if you are not with me - then you are my enemy!” feedback was not our friend, and something to be avoided. For this reason unlike the other groups presenting, we needed to turn off the mics in Oslo, to avoid the dreaded signal loop of feedback death. Funnily enough, we worked out one helpful solution to avoid feedback (and simplify the signal) mid performance. At first we hooked up the main sound generator (Synth)  to a speaker - and then to the phone over the speaker playing out loud. This created some feedback, but only a little, as we were performing at the time it was tricky to hear the significance of this. Halfway through - Sam swapped the speaker for a pair of headphones, and pushed them against the phone sending the signal.  This meant that the audience then only really heard the signal from Trondheim, and I believe it was a more elegant approach to the signal chain. Of course this still wasn’t perfect feedback wise, the phone picked up some sound information sent back by Trondheim. But compared with how it started, the output was simpler and more controlled, a better setup for this kind of experimentation with one less variable factor.

The main source sound came from a patch Sam had made with Korgs “little bits”. It was a reese patch - whereby the main bulk of the sound comes from two phasing oscillators only slightly out of pitch with each other. This makes the oscillators clash with each other sonically, creating a thicker sound with movement, that changes with the subtlest of pitch change for either oscillator. It was done with two saw waves, then a keyboard was used to control the overall main pitch, and a filter and delay at the end for modulation; sound crafting and flavour. On top of this Espen had control over the phone movement to adjust the sound input further, and also accompanied with the sampler playing some percussion on the laptop, generated from the visual studio code project recorded and set up a couple of days ago   This was then sent to Trondheim via the phone. 

<figure>
<img src="https://raw.githubusercontent.com/MCT-master/mct-master.github.io/master/assets/img/Ateam_whispers.jpeg" alt="Basic Feedback diagram" width="70%" align="middle">
<figcaption align="middle"><strong>Sams “Little bits” synth setup</strong></figcaption>
</figure>

In Trondheim Sepehr worked on setting up the analog Korg modules, as another expansion to the instrument, by receiving the signal from the manipulated sound, coming from the Oslo and being processed with spring delay and a frequency shifter on Jørgen’s laptop. The chain for included a microphone, delay, filter on one side and a noise maker on the other side, both going to the mixer and then to the speaker. The spring delay effect on the signal being sent from the oslo, was controlled with a phone, using its motion sensors routed over the UDP connection to a Max for Live device in Ableton. Finally both Jorgens processed through Ableton and Sepehrs analog signal both played out at the same time in both campuses.

<figure>
<img src="https://raw.githubusercontent.com/MCT-master/mct-master.github.io/master/assets/img/Ateam_chain.jpeg" alt="Basic Feedback diagram" width="70%" align="middle">
<figcaption align="middle"><strong>Trondheim output Map</strong></figcaption>
</figure>

<figure>
<img src="https://raw.githubusercontent.com/MCT-master/mct-master.github.io/master/assets/img/Ateam_abletonFlow.png" alt="Basic Feedback diagram" width="70%" align="middle">
<figcaption align="middle"><strong>Jørgens Ableton Chain</strong></figcaption>
</figure>

### Setup Trials & Tribulations 

Our first point of action was to establish an audio connection between campuses over the phone. We realised we would run out of time when it, due to some technical issues, turned out that we were not able to get the signal into Ableton on Sam’s computer. So, we started to work the other way around, trying to get the signal through from Sam’s Samsung, using Google Hangouts - and into Ableton on Jørgen’s computer in Trondheim. 

However, with Sam’s phone having only 10% battery left and no available power supply, Oslo started working on backup solutions. This was either sending from using Espen’s iPhone (or laptop worst case), and frustratingly, google hangouts did not want to connect properly on Espens phone. 

### The performance

As the clock was ticking towards performance things got a little heated, as everyone got a little stressed. With 5 minutes left we wrapped up, everybody barking at each other, and once more told our self that this is an experimental concept - Or rather - an experiment. If everything failed, we could always refer to Murphy’s law! So, after some nail biting 15 minutes, it was our turn: Some fiddling and confusion (and biting some more nails!) we were ready for the event: It started fine. Then, after a minute or something, Oslo realized we could not hear Trondheim. Everything stopped. Then, as if in some kind of anthill, everyone in the room started to check things out. One minute and 30 seconds later it worked, and - EUREKA!

<figure>
<img src="https://raw.githubusercontent.com/MCT-master/mct-master.github.io/master/assets/img/Ateam_samEspen.jpg" alt="Basic Feedback diagram" width="70%" align="middle">
<figcaption align="middle"><strong>Sam and Espen performing</strong></figcaption>
</figure>

We ended up with a concept that seemed to actually kind of work! Sam as a Virtuoso on the Korg, Espen moving the cell phone around, - and with Trondheim in total control of the processing of the sound with phone sensors and littleBits, - we believe we managed to make an interesting “feedback”based event. And - after the performance we got? What else - good feedback. Thank You! 

As a basis for an idea this could go on to further experimentation and ideas, different sound sources, possibly many locations, as well as utilising the feedback for effect. Other ways you could “play” this instrument is using the world around you as a input signal - the portability of the telephone is advantageous in this way. Even acoustic experiments passing the signal back and forth until it is unrecognisable could be an idea…… Possibilities seem endless! 

**TEAM A**  

<video width="640" height="480" controls>
  <source src="https://github.com/MCT-master/mct-master.github.io/blob/master/assets/video/Ateam_performance.mov?raw=true" type="video/mp4">
  Your browser does not support the video tag.
</video>
