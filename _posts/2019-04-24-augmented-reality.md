---
layout: post
title:  "Augmented Reality"
date:   2019-05-10 16:40:00 +0200
categories: Portal
author: Mari Lesteberg, Sam Roman, Karolina Jawad, Jørgen Varpe, Sepehr Saghigi
image: /assets/img/cheesy2.jpg
excerpt: "In the final Portal workshop of this semester we were looking at Ambisonics as a potential way to create an augmented auditory space from the perspective of sound."

---

## Creating a virtual/augmented immersive space with Ambisonics in the Portal

<figure>
<img src="/assets/img/mari/24apr3.jpg" align="center" />
</figure>

On the 24 of April, we went into groups to solve a task handed out by Anders Tveit. Our group’s (Karolina, Sam, Sepehr, Jørgen and Mari) task was to create a virtual/augmented immersive space, using Polycom or Zoom for video and a DAW of any choice together with MIDAS mixer and LOLA for sound. We chose to use Ableton Live together with [Envelope for Live plugins](http://www.envelop.us/software) (E4L), and a <a href="https://github.com/MeltingPlanet/M4L_OSCDeviceControl" target="_blank">custom OSC M4L (Max for live) device</a>.


## What constitutes a natural immersive space and in what way can a immersive virtual space be created?

To design an immersive experience in a way that makes it indeed more natural to spend time 'together' is a multi-layered matter. In the final Portal workshop of this semester we were looking at Ambisonics as a potential way to create an augmented auditory space from the perspective of sound. It could be a way of dissolving the playback system from being in the foreground as it is now at any time (along all the other technological means) and getting closer to the idea of immersive practice. 

First we were kicking off the workshop session by discussing on a more higher level what an natural immersive space might be and what therefore an augmented immersive space could or should do. Does it imitate a natural space by means of technology? As elaborated in other posts, spending many hours in a conference system that is not rendered for the human sensory system, can create fatigue symptoms and also some sort of exhaustion. In 'The road to immersive communication' immersive communication is defined as exchanging natural social signals with remote participants, as in face-to-face meetings, and/or experiencing remote locations. Moving towards a playback system that imitates the way ears perceive sounds in a ‘natural’ environment might be a step in the right direction.


## Plan and create an efficient routing setup between the technology, what type of hardware is needed?

We decided to create an immersive space that included both a natural space and also an augmented space which could be experienced both in Trondheim and Oslo. 

In regards to the natural sounds, we used a waterfall and a birds singing sound. For the augmented reality part we used two microphones, each being placed in a corner of the room. These 4 sound sources were sent to Ableton, imported into the E4L Source Panner. This device takes a stereo input and encodes it into 16 channels of high order ambisonics. We chose to place one sound source in each corner of the augmented space. All four sound sources were then sent to a E4L Master Bus, which decoded the sources to binaural. In the end we had an immersive space which included both a natural and an augmented.

<figure>
<img src="/assets/img/mari/24apr5.jpg" align="center" />
</figure>


For the next step we wanted the user to be in control of his/her placement in the space. The output of the DAW was 2 channel binaural, which the participant could hear by a pair of headphones. The output sound was also being sent to Oslo over LOLA and the audience in Oslo could use a pair of headphones to experience this space in parallel to Trondheim.

In order to have the user in control of his or her placement in the immersive space, we used a mobile app by the name of [OSC Controller](https://play.google.com/store/apps/details?id=com.ffsmultimedia.osccontroller&hl=en_US). We chose to use 4 sliders that could send OSC messages to our Max for Live device called OSC Device Control. Each of these sliders were then used to control the radius of our four sound sources. In this way, the user could control his/her distance from the sound sources in the space.

<figure>
<img src="/assets/img/mari/oscapp.png" width="40%" align="center" />
</figure>


## Video: 
<figure align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/WbkeCp7TYyI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>


## Future use of the custom “OSC Device Control” plugin

The M4L device is built using the M4L Live API. With this you can use any application that can send OSC messages to control device parameters in Ableton Live.



<figure>
<img src="/assets/img/varpe/OSCDeviceControl.PNG" width = "100%" align="center" />
</figure>

In the plugin you choose a port you want to use for communication over UDP (9999 is default). The plugin is set to receive OSC messages from four sliders from the Osc Controller app by default. These four addresses can be changed to fit your OSC controller of choice, and you can choose which device and parameter each address will control. 

In the portal in Trondheim we have now available both an optical tracking system called OptiTrack and a radio tracking system called Pozyx. Both of these systems can send tracking information as OSC messages over UDP. By connecting any of these two tracking systems to the OSC Device Control plugin, you can control any device with positional data. If you are walking around the portal with a wireless microphone, you can for example use the E4L Source Panner plugin and let the azimuth and radius of your microphone signal be controlled by this movement data. This could then be decoded to binaural and sent to Oslo. A setup like this in both Oslo and Trondheim might improve the immersiveness of the portal space. At least it would be intersting to experiment with.


### Challenges

When testing our system, we were facing a few issues that made it difficult to get enough time to make the system work exactly like we first have imagined. At least on the Oslo side, we first couldn’t get the OSC controller to work on both phones. But eventually, we got it working on one of the phones, and we could start testing out the system. To calibrate the MAX patch with the OSC controller and with Ableton, we had to use a scale object in the MAX patch. This was working fine with one fader, controlling one parameter, but a problem occurred when we wanted to add an extra dimension to the system, with a second fader.  Unfortunately, we had too little time to solve this problem before the final testing of the system.

<figure>
<img src="/assets/img/mari/24apr1.jpg" align="center" />
</figure>



