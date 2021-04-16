---
layout: post
title: "Posture Guard"
date: 2021-04-16 13:00:00 +0200
categories: motion-tracking
author: Henrik Sveen
image: /assets/image/2021_04_16_henrikhs_greatPosture.jpeg
keywords: motion tracking, sonification, posture, max, msp, jitter
excerpt: "Back pains, neck pains, shoulder pains - what do they all have in common? They are caused by bad posture while working on a laptop. So I made a program that makes the laptop help out maintaining a good posture while working."
---
<figure style="float: auto">
   <img src="/assets/image/2021_04_16_henrikhs_wdyg.jpeg" alt="" title="Accumulated displacement" width="250"/> <figcaption></figcaption>
</figure>

#### The Idea
The last 15 years of my life working on laptops has been more or less a daily routine, and I can’t see it becoming less relevant the older I get. 7 years ago I started to feel shoulder and upper back pains, and a physiotherapist didn’t take long to tell me that my posture while working on a laptop was the reason for my troubles. He showed me how to sit and what to do, but of course, following his advise turned out to be way harder than it should’ve been. That being completely my responsibility and not the physiotherapist’s. Lately these pains have been knocking on my shoulders’ doors again, and once again I’ll have to deal with it.
During motion tracking class we’ve talked a lot about using motion tracking techniques to analyze how performers play instruments and use this data to improve the playing style of the performer. So I figured I wanted to use motion tracking to help myself, and possibly others, with my posture while working on my laptop. The idea is basically a system that acts as an alarm whenever the posture is getting worse.  My main problem with following the physiotherapist’s advise is that whenever I work I get very focused on what I’m working with and I simply forget them. So making the computer help me remember should be the least it could do for me, as it after all is the root of my problems.

#### Analyzing Posture
To analyze my posture I did an optical motion capture in the lab using OptiTrack Motive. I stationed myself at a desk with my laptop. I started sitting in a healthy upright position and slowly drifted downwards into the bad position bending over the laptop. At the same time I did a video capture with my computer webcam so I could align and compare the posture motion capture with the webcam video capture. I exported the CSV data and ran it through the analyzing notebooks we had been using. Tweaks had to be done to the code, which was a nice challenge for digging into the details, understanding them and getting the numbers I needed. I compared the «top back», «head front» and «head top» markers’ displacements to each other.

<figure style="float: auto">
   <img src="/assets/image/2021_04_14_henrikhs_displacement.png" alt="" title="Accumulated displacement" width="auto"/> <figcaption>Accumulated displacement of markers for top back, top head and front head.</figcaption>
</figure>

What I found from the plot of these markers was that my «top head», or just head, was the most moving body part when slowly falling into a «bend-over-laptop» posture. The neck also moved quite a bit, but the head, being placed on top of the neck, still had the biggest displacement. From this I started thinking that if my head is in a good position, then the rest of my neck and back will naturally be placed in a good position giving a good overall posture. A good posture is usually when the ears align with the resting shoulders with an open chest (Morrison, 2018).


<figure style="float: none">
  <video width="500" controls>
    <source src="https://drive.google.com/uc?&id=1M0dMnd2CIXSKmqgr-5tr7g_klGjwM-lw" type='video/mp4'>
    Should show a video player
  </video>
  <figcaption>Video of optical motion capture done with OptiTrack Motive</figcaption>
</figure>

Additionally I did a motion analysis at home with my computer webcam to detect movement as I’m falling closer to the screen. I did four similar videos and they all showed more or less the same pattern. Which I also expected, as the movement is fairly similar each time. The good thing about this was that it showed that there wasn’t much difference in what the computer «saw» each time I was transitioning my posture.

<figure style="float: auto">
   <img src="/assets/image/2021_04_14_henrikhs_webcamCapture.png" alt="" title="Four QoM videos" width="auto"/> <figcaption>Video capture analysis of Quantum of Motion showing a similar capture for all four tests for transitioning from a healthy posture to a bad posture and back.</figcaption>
</figure>

#### Capturing Methods
For the task itself working with the webcam and video capture at the core made sense. It’s already integrated in the computer and doesn’t affect the user like other motion capture system may do. Using a side camera has been considered and it’s a good idea as the main motion to be captured is easiest to spot from the side. I have not been working with a side camera for now as I was eager to find a way to work with an already installed webcam. On the other hand there are limitations to using only cameras, such as lighting situations and some instability in data. So I figured using an additional different capture method would provide an addition dataset that could stabilize the treated data and performance of the program. Phones are simple and great motion trackers, so I used an OSC-connection sending the phones’ gyro (pitch, roll and yaw) and used the pitch data to track the downwards tilt of my neck. By attaching the phone to my head in an upright position the pitch allowed for tracking of head movement in the up and down movement - the nod. Additionally I used the roll for rotation tracking and the yaw for sideways tilt. This gave a good tracking of head position, which is good for making sure that the user’s posture is good.

#### Capturing Motion
For the video capture the computer webcam ended up being sufficient for handling the whole tracking task. The projects is made in Max/MSP with Jitter, and having read about OpenCV I figured a well known package to use in Max/MSP is Jean-Marc Pelletier’s cv.jit - Computer Vision for Jitter. It offers many of the same things, but in the work environment of Max/MSP. To start with, working with color tracking seemed like a possible approach, selecting a color and tracking it and finding bounds of the colored area to draw a shape around it. This worked for the purpose of tracking colors, but for the purpose of tracking body posture it didn’t do a great job as face colors are organic and not strong like the colors of for instance post-it notes. So face colors were detected a lot of places. When looking through the cv.jit library I came across the cv.jit.faces object, which offers face tracking. Tracking faces made sense as that is mainly what the computer sees when someone is working on it. The function works in a way that it looks for the general basics of a face (two eyes, a nose in the middle and a mouth below) and returns the square bounds in pixels around the face. Working with it for a while revealed that this method was excellent for the task of tracking posture using the head/face as marker. The tracker draws a square around the faces it’s tracking and provides bounds given in pixels for each line. The benefit of this was that this square will increase in size when moving closer to the computer and get smaller the further away the user is. This is used as a Z coordinate in the video capture, making it possible for the computer to analyze proximity of the face at any time. This was a big step for the project to reach the end goal and carries out the main motion tracking. However, there are limitations to how this function tracks and that’s where the phones’ gyro data gets useful. For instance, there is no stable way to track via video if the head is tilted in the up and down position, nor does it track the sideways tilt. By using the phone, as an intermediate gyro-tracker solution, because of the inconvenience of having a phone attached to the back of your head while working, it’s way more detailed and easier to keep track of posture. This also opened up for notifying the user of what specifically was going wrong with the posture. Is it your head that is starting to tilt down, are you leaning over to the side or are you simply too close to the screen? Another great feature with the phone is the roll, which in this case tracks which way you’re looking. This has been used to switch off the alarms when the user is not looking at the screen, which is convenient if the user feels like looking out a window or talk to someone in the room without being alarmed about posture.


<figure style="float: none">
  <video width="500" controls>
    <source src="https://drive.google.com/uc?&id=1-nHbLs2Eqe4kvEkdtyFLZiEanm6YcpIh" type='video/mp4'>
    Should show a video player
  </video>
  <figcaption>The basics of Posture Guard - tracking face and proximity via webcam</figcaption>
</figure>

#### Sonification of Posture
For the video capture and tracking there are two different alarms, one subtle mode which is based on sine waves with sonic and rhythmic phasing i stereo, and there’s an «obnoxious» one which sounds more like a traditional siren alarm system. Mainly so you can choose a way to be alarmed. The alarms becomes more intense as the user approaches the computer, which serves as a sonification of the proximity between user and computer. When gyro tracking is connected, additional sounds are played. When pitch is detecting a forward tilted neck, it plays a rising sine wave based on how low the neck is, telling the user how much he or she needs to raise the neck back to an upright position. The yaw is tracking sideways tilt, and has a wind type effect blowing towards the left when the user tilts right, and vice versa, so the user is encouraged to tilt the neck back up in an upright position from the current position. This makes use of the bodily metaphors and verticality we know of in the relation between sound and motion and should serve as a logical sound mapping being intuitive for the user to understand. All sounds are synthesized real time inside the running patch for modulation control and flexibility.


<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1zmCzWJh51-IijLx-657CR2wLGQLOaVHI" type="audio/mpeg">
    Should show a media player
  </audio>
  <figcaption>Nice alarm mode moving very close to the screen and back.</figcaption>
</figure>


<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1-K3_zjGFQpDPkqnTl9LGnW7MrWiy3tRX" type="audio/mpeg">
    Should show a media player
  </audio>
  <figcaption>Obnoxious alarm mode moving very close to the screen and back.</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1as8zkMiOSVusVhNG2-IpqIVJEiY2QaEm" type="audio/mpeg">
    Should show a media player
  </audio>
  <figcaption>Neck tilt (pitch) mapped to pitch where tone height tells you according to verticality how much you need to correct your neck tilt to obtain good posture.</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1QQPoND3-j9tsOnk7a5Ebjpr3GyialvKo" type="audio/mpeg">
    Should show a media player
  </audio>
  <figcaption>Sideways neck movement where sound tells you which direction you should move your neck on the left/right plane to obtain good posture. In the example the head is first leaning too much to the right, triggering a signal that signifies you should be moving more to the left, and the second is the other way around.</figcaption>
</figure>

#### Usage
Regarding use it quickly became clear that parameters like sensitivity and reaction time had to be incorporated, as it’s pretty annoying having the alarm trigger at small movements or if you just want to have a closer look at the screen for a short period of time. This posture guard only reacts when you move closer, and not away from the computer due to many chairs having a «lean back» function which isn’t necessarily a bad thing for posture. Unless working from a very backwards heavy posture. The mode saying asking where you went was made so that if the program doesn't detect a face, it stops the alarms so it doesn't play an annoying alarm sound with no one present. Highly beneficial when sitting in an open office or if you're wearing wireless headphones and go to grab a coffee.

#### Conclusion
Using the Posture Guard is quite interesting as I get to know how often I actually descend from a healthy posture while working on a computer. Which is quite often. At least that has been my experience. As a helper it’s both nice to have and annoying, even though I did my best to make it as gentle as possible. The system doesn’t require any external markers or gadgets, unless used with a phone in gyro mode, but still it feels like something that is quite responsive to what you do. Using the camera’s sense of face size for tracking proximity was an eye opener for working with a three dimensional space captured by one camera alone. This could also be applied for simple strong colored objects when tracking colors, keeping track of the size of the bounds found by the camera. For improvement finding a smaller and more user friendly gyrometer with a wireless connection is a god idea as the gyro mode gives a pretty detailed tracking of the whole neck and head parts. The face tracking itself is a pretty processor heavy task, and something to work on with. Scaling the video helps, and this could probably be scaled down further for lighter processing, even though using 240x160 was sufficient for use on my computer system, giving a pixelated video monitor. A solution for this would be to do the tracking on scaled video data and then scaling it back up when drawing the text and figures on the monitor. But then again, it’s only for visual monitoring purposes in a program where sound is used to notify the user. I did test the program while running video chat and an Ableton Live project, and my computer still works. Thank you.
