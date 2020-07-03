---
layout: post
title: "A-team - Phone sensors, servers and javascript"
date: 2018-10-18
categories: physical-computing
author: Juno Jensen, Espen Wik, Sam Roman, Jørgen Varpe, Sepehr Haghighi
image: /assets/image/2018_10_18_stefanof_Ateam_sixDegrees.jpg
excerpt: "So, day two of coding was pretty much like day one: It startet with total confusion. Confusion then driftet into anxiety followed by panic. Then hysterically laughter and something that could be mistaken for self confidence because what I wrote in the code actually worked. Only difference today was that I thought I was having a hart attack around lunchtime, but it was only low blood sugar and dehydration. Coming home I went for a long run in the woods, looking for a Wolfpack I could join, just to make my life a little easier. Didn't find one so I limped my way back through the woods, trying to summarize the day, but the only word that came to my mind was revenge. Made it home just before dark. Tomorrow is another day. Probably."
---

<figure>
<img src="/assets/image/2018_10_18_stefanof_Ateam_sixDegrees.jpg" alt="Six degrees of freedom" width="50%" align="middle">
<figcaption><strong>Six degrees of freedom</strong></figcaption>
</figure>

## Phone sensors, servers and javascript

<div align="middle">

<i>So, day two of coding was pretty much like day one: It startet with total confusion. Confusion then driftet into anxiety followed by panic. Then hysterically laughter and something that could be mistaken for self confidence because what I wrote in the code actually worked. Only difference today was that I thought I was having a hart attack around lunchtime, but it was only low blood sugar and dehydration. Coming home I went for a long run in the woods, looking for a Wolfpack I could join, just to make my life a little easier. Didn't find one so I limped my way back through the woods, trying to summarize the day, but the only word that came to my mind was revenge. Made it home just before dark. Tomorrow is another day. Probably.</i><br>
<strong>Espen Wik</strong>

</div>

### Looking for sensor apps
The first assignment was to download some sensor checking apps on our smart phones and compare them together. Espen and Sepehr both figured one of the most suitable apps for this purpose were “Sensor Kinetiks” which displayed several types of sensor data, and included the ability to record the data for more analysis. For Sam on android, Sensorlab was the most intuitive, showing all sensors on one page in graph form.

<figure>
<img src="/assets/image/2018_10_18_stefanof_Ateam_sensorApp.jpg" alt="Sensor app" align="middle">
<figcaption><strong>Sensor kinetiks</strong></figcaption>
</figure>

For Android, Jørgen and Sam managed to download 2 apps that were very convenient; and presented a lot of data. Jørgen demonstrated the use of an app called oscHook together with a max for live device, controlling the pitch of a sample in Ableton by flipping the phone. The group came up with several ideas on how to use this function in action, in relevant fields. That included controlling synthesizers (oscillators and filters) and also controlling recorded or live samples in live performance.

### Coding in javascript
First we had to connect our phones to our local web servers, using the phone’s sensors as input data. There were a lot of different issues with connecting phones to the servers. Enabled VPN and use of different networks on phone and computer were some of the issues, but others were never solved. Espen could not connect his phone at all throughout the whole session. In the end, some people ended up to connecting to each others servers and pairing up. Sam managed to get it working, so Espen ended up pairing with him on the task. Ironically, yesterday it was Sam who could not get the code to function, and had to cosy up to Espens laptop.

When connected to the server, the one´s using iPhones did not see any sensor data displayed in the browser. Deleting the method on line 23 in the first exercise solved this issue. This was clearly not supported by iPhone…..

<figure>
<img src="/assets/image/2018_10_18_stefanof_Ateam_methodNotSupp.png" alt="Javascript code" align="middle">
<figcaption><strong>Method on line 23 not supported</strong></figcaption>
</figure>

In javascript we mainly looked at the way to use our phone’s accelerometer, using the devicemotion event. This event receives the parameters x, y and z, and we had to write javascript code to normalize these values so that they would stay between 0 and 1. This is common to do, because than we can scale the values to fit the application of them.

After understanding the gathering of accelerometer data, we looked at examples where we could trigger synth sounds by moving the phone in the six degrees of freedom (up/down, right/left, back/forward). This did not work on Sepehr’s phone for some unknown reason. The next example code we looked at was utilizing the same sensor control, but to trigger samples. This did not work on either Sepehr or Jørgen’s phone, where no sound would play. After a lot of troubleshooting, including changing browsers, using different servers, clearing cache, restarting phones, and no errors were showing in the console, we concluded with the reason being that our phones did not support the method used by flocking.js for handling samples.

Over in Oslo, Sam had managed to get the iberlin.js code to work… sort of. The playback of samples that was triggered by left/right horizontal motion worked switching between our loaded sounds, gathered from yesterday's soundwalk session. It felt like tuning an old FM radio, you would speed past sounds very quickly, with pops of tone and texture, sometimes you could stop just right - and the sound would become whole, and playback fully. The tilt and up/down (“Y” and “Z”) parameters on the other hand - or worked rarely, and Sam and Espen found that most of the time these motions were more likely to stop the sound dead, than effect the volume or pitch. Still, It was a glimpse into the potential, and it didn't stop us from shaking hands wildly with phone in hand come the performance at the end of the day!

### Performances
To be able to join the performance, Jørgen managed to use an app he had coded before. This app is coded in javascript using the Web Audio Api, and uses the deviceorientation event to get sensor data. By pushing and holding the buttons that you can see in the picture below, samples are played. A lowpass filter is applied by moving the phone back/forward and a delay is applied by moving it up/down.

<figure>
<img src="/assets/image/2018-10-18_stefanof_Ateam_jorgenApp.jpg" alt="Jørgen's sampler in browser" width="50%" align="middle">
<figcaption><strong>Jørgen's sampler in browser</strong></figcaption>
</figure>

Sepehr’s phone’s issue wasn't solved either; he used Tone.js instead to accompany the improvisation.

Today, everybody had their own speakers It made the whole performance far clearer. There were more complications however, compared to yesterday regarding controls. The plan for the A-team (just as yesterday) was Trondheim taking responsibility for the ambient parts, and Oslo jamming over the top with percussive elements.

The whole class improvisation sounded much better aesthetically and included a far larger variety of sounds and textures.. Since the performers were amped up (individual small speakers), the whole accompaniment together was much more sonically pleasing.
