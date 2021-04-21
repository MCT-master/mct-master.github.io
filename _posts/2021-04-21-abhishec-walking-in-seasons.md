---
layout: post
title: "Walking in Seasons"
date: 2021-04-21 13:00:00 +0200
categories: motion-tracking
author: Abhishek Choubey, Lindsay Charles, Joel Vide Hynsjö
image: /assets/image/2021_04_21_abhishec_wis.jpg
keywords: sonification, motion-tracking, Audio, DSP, Music, Max MSP, python
excerpt: "Sonification of motion"
---

## Walking in Seasons

<figure style="float: auto">
   <img src="/assets/image/2021_04_21_abhishec_wis.jpg" alt="" title="Walking_in_Seasons" width="auto"/> <figcaption></figcaption>
</figure>


### The project:
We wanted to explore the motion tracking system that we have at the Portal at NTNU, using Motive and IR cameras. This system can track reflective markers in a room and you can quite easily make a recording and get the data to make anything you want with it. We had the idea to create a virtual space of sound where the four quadrants of the room represented one season each, and when you move through the room you can hear sounds from each season. We call this project “Walking in Seasons”.

### Python:
The Python code takes the data from Motive as a csv (comma separated values). You don’t really need to use any fancy libraries, it’s just a list of numbers that you can make Python do stuff with. Since we couldn’t make the Motive software stream the tracking data in real time everything was already filtered and gaps were filled when Python started working, which made everything much easier.

All that needed doing was organizing the data in Python (in more lists and dictionaries) and trying to figure out how to find out what the tracked person was doing depending on the numbers.

Getting the position of the person was pretty straight forward, just checking on what x (left/right) and z (forward/backward) coordinates the head was. We had calibrated Motive so that x=0, z=0 was in the middle of the room, so if x was positive and z was positive we knew that the person was to the forward and right. If x was negative but z was positive the person was back to the right, and so on. Some if-statements (and lists) later we had Python figuring out in what quadrant of the room the person was through the whole recording!

We could track when the person was walking by checking when the feet passed from above to below a threshold on the y coordinate (up/down). Now we had two lists of interesting stuff made from the (pretty boring) raw data! Before moving on to Max MSP we made another list of how high up each of the hands were (y again), scaled between the lowest and highest point in the recording. It’s just so much easier to work further in Max if you know you’re going to get values from 0 to 1!

We got Python talking to Max through osc, just sending the values at the same speed that they were recorded so we later easily could sync the sound with the video.

### Max MSP:
Max for Live is a great addition to Ableton Live, making projects like this much easier. When you run Max as a plugin in Ableton you can make Max control some things in Ableton, like volume sliders and other things like that, check this out if you’re curious: [Controlling Live using Max for Live – Ableton](https://help.ableton.com/hc/en-us/articles/209071389-Controlling-Live-using-Max-for-Live-))
We figured if we put all the sounds of different seasons on different tracks we could just lower the volume of the ones we didn’t want to hear at the moment. So if the person was in “winter” we lowered the volume of the other three seasons. After making some routing to make sure we knew where the different types of messages from Python were going we made some functions that changed the volume of the tracks. Gradually, of course, to avoid clicking. And also, using squared scaling instead of linear so the volume didn’t seem to drop out when going from one season to another, confused? Check this out: [Constant power panning using square root of intensity | Computer Music](https://sites.uci.edu/computermusic/2013/03/29/constant-power-panning-using-square-root-of-intensity/))

Playing the step sounds was just a matter of making a bang every time Python sent a “step” message. Python just sent “1” every time a step was taken, to make this easy. We sent this bang along to trigger the clips of the stepping sounds, each on its own track. We controlled the volume of all the stepping sounds the same way as with the ambient sounds of the seasons, so we only needed to hear the steps for the rights season at the right time.

The hand messages were used to control the amount of send to effects, the only thing we needed to do was some mathy scaling magic to make sure we got the right amount of effect from the right amount of waving of the hands.

<figure style="float: auto">
   <img src="/assets/image/2021_04_21_abhishec_max_wis.PNG" alt="" title="WIS_Max_Patch" width="auto"/> <figcaption></figcaption>
</figure>


### Ableton Live:
Ableton Live was used in two cases here, first is to produce sounds and as discussed above to manipulate the sound. We made four tracks related to four seasons (Autumn, Winter, Monsoon, and Summer) The autumn track expresses a happy and chill vibe as a metaphor for the colors of the autumn season. The winter track is trying to depict a cold and stormy day of the winter, Summer track depicts a dark night with cricket and bug sounds in the background. Various step sounds again as mentioned above were made pertaining to the seasonal sounds, i.e., the autumn sound of walking on leaves, winter walking on snow, summer walking on a dusty road, and monsoon walking in water.

The other function of Ableton is to host the Max MSP patch and control different parameters related to the sounds and apply the effects on it according to hand positions. The Max MSP patch plays track summer if the head is the quadrant linked to summer and the step sound is also triggered accordingly. This is done for all four seasons. The left-hand position controls the amount of tremolo effect applied to the season sounds and the right-hand controls the distortion effect amount.

A final track is then recorded in Ableton by running Python and Max patch at the same time, which is then used in the video.

<figure style="float: auto">
   <img src="/assets/image/2021_04_21_abhishec_ableton_wis.PNG" alt="" title="WIS_Max_Patch" width="auto"/> <figcaption></figcaption>
</figure>

### MATLAB

To bring out the perspective of the markers placed on the body, we used MATLAB to produce the animation which was added in the demo video, as stated above, we faced  difficulty in streaming real time data, so we decided to make a proof of concept video which enhances a person to understand what exactly is happening.

The Motion tracking data from Motive OptiTrack was exported in .c3d format and then used in MATLAB (using MoCap Tool Box) to produce an animation.The animation shows movement of various markers and lines connecting the markers with various colours for each part of the body from the front view.



### Demonstrative video:

The Video was shot from two different angles, front and top. The front was recorded on an android phone and the top was recorded by an action Camera, giving us a large field view.
The top view was then layered with different representations for seasons and border lines. Both the views, the animation layer and the audio were edited on Adobe Premiere Pro.   


<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1IG1VEUJdoIz8vH0k_aQgzS4erOONQqVF/preview" width="auto" frameborder="0" allowfullscreen></iframe>
   <figcaption>Walking_in_Seasons_Demonstration</figcaption>
</figure>

### Endnotes:
We managed to create a system that sonifies the motion, although not in real-time completely but can be expressed as a proof of concept for a real-time immersive and interactive sound and motion installation. The quality of the system is fairly accurate but has a lot of scope for improvement. The first and foremost is being able to stream and calculate the data in real-time and then integrate it with the sound system, either using more markers or using the predefined marker set preset in Motive for a better visual representation of the skeleton and body. Mapping more audio parameters to different motions also including the derivatives of the motion can improve the system immensely. Overall the installation provides valuable insight into how to use the MoCap system for the sonification of motion.

You can access the python script and max patch using this link [Walking_in_Seasons Python&Max](https://drive.google.com/file/d/1CWA7jJBbqHW-LQG2XSOKxNm3pKGSuqI6/view?usp=sharing)
