---
layout: post
title: "EarSketch (Or How to Get More Python in Your Life)"
date: 2021-11-02 10:15:00 +0200
categories: Portal
author: Joachim Poutaraud, Hugh Alexander von Arnim
image: /assets/image/2021_11_02_hughav_EarSketch.jpg
excerpt: "A review of the asynchronous music production software 'EarSketch'"

keywords: Music Production, EarSketch, Python, Awesome Music

---

#### Introduction

[Earsketch](https://earsketch.gatech.edu/landing/#/) is a browser based compositional tool developed by the Georgia Institute of Technology (Georgia Tech). The aim of its development was to create an accessible environment in which high school and undergraduate students would be able to gain skill in the area of music technology and computational composition, as there are often high financial and practical barriers when it comes to providing students access to music software within educational institutions.
<br>
<figure>
  <img src="/assets/image/2021_11_02_joachipo_EarSketch.jpg" alt="the misty jungle" width="100%" align="middle"/>

<figcaption align="center">Hugh and Joachim <i>EarSketch</i> session</figcaption>

</figure>
<br>


[Earsketch](https://earsketch.gatech.edu/landing/#/) takes the form of a familiar DAW-style interface with a commercial digital audio workstation program (Cockos’ Reaper) that can be opened in a web-browser. Users can assemble songs from a library of nearly 4000 samples, add effects and transitions, and perform some basic audio analysis. However, there is a catch! Instead of a drag and drop, menu-based system found in most DAWs, Earsketch requires the user to program their track using either the JavaScript or Python programming language. Joachim and Hugh decided to test their Python skills and see what they could come up with.

#### Experiment

Joachim started the session by initializing the Python script and set a **100 BPM** tempo using the following code:

```
from earsketch import *

init()
setTempo(100)
```

He then accessed the sound collection to filter some `FUNK` and `NEW_FUNK` samples and started arranging the chosen instrumental samples using the `fitMedia()` function which has arguments to specify the file name, track number, start location, and end location.

`fitMedia(fileName , trackNumber , startLocation , endLocation)`

He then laid down some vocals by making a quick record using the in-built sound recording feature. [Earsketch](https://earsketch.gatech.edu/landing/#/) also allow the users to upload sound and use sounds of the collaborative database of Creative Commons Licensed sounds [Freesound](https://freesound.org/).

Joachim then shared the script with Hugh by sending an [url shortcut file](https://earsketch.gatech.edu/earsketch2/?sharing=rvNruw-gqtgbVbVb-qsWnA).


Hugh then could added some effects such as compression, delay, phasors, and reverb as well as setting some volume automation, using the `setEffect()` function.
```
# Effects
setEffect(2, COMPRESSOR, COMPRESSOR_THRESHOLD, -4.0)
setEffect(2, VOLUME,GAIN, -20, 1, 6, 5)
setEffect(7, DELAY, DELAY_TIME, 500.0)
setEffect(8, VOLUME,GAIN, 12)
setEffect(8, PHASER, PHASER_FEEDBACK, -1.0)
setEffect(8, REVERB, REVERB_TIME, 1000.0)
```

He then sent the script back to Joachim, so that Joachim could programmed some rhythmical fills using the following code:
```
fillA = "0---0-0-00--0000"
fillB = "0--0--0--0--0-0-"
makeBeat(OS_SNARE03, 3, 4, fillA)
makeBeat(COMMON_LOVE_DRUMBEAT_1, 3, 8, fillB)
```
In an innovative way of working, the beats in the fill can be programmed as variables using a string of zeros `0` and dashes `-`, and the sound can then be specified using the `makeBeat()` function which takes these strings as an argument.

At the end of the script, Joachim added the line `finish()` which ensures that the music is prepared for playback in the digital audio workstation. Hugh and Joachim then hit the run button to compile the code, and then listened back to their awesome song! After agreeing that it really was awesome, they decided to upload it directly to [Soundcloud](https://soundcloud.com/discover) using the inbuilt [Soundcloud](https://soundcloud.com/discover) integration, so that the whole world could listen to their awesome baby.

<iframe width="100%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1152619627&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-230930804-586783059" title="User 230930804" target="_blank" style="color: #cccccc; text-decoration: none;">User 230930804</a> · <a href="https://soundcloud.com/user-230930804-586783059/awesome-tune" title="Awesome Tune" target="_blank" style="color: #cccccc; text-decoration: none;">Awesome Tune</a></div>

#### Results
Hugh and Joachim found that there were some positive and negative aspects to working in [Earsketch](https://earsketch.gatech.edu/landing/#/).

##### Pros
The first positive aspect that they found was that sharing the music back and forth was very simple and fast. Because they were mainly working with the in-built sound collection, they just had to send the Python script to each other and could continue working instantaneously. This was a lot quicker and more efficient than having to send DAW-files and bounced tracks. They also found that the DAW-style display was very well laid out, and appreciated that the documentation was included in the interface. They also appreciated ability to record sounds or integrate user samples.

##### Cons
On the other hand, they found that the included samples were a little limited, with Joachim in particular bemoaning the lack of Jazz samples. They also found that the disconnect between making a change and being able to directly play it back stymied their workflow. The major sticking point here was that after each change the code had to be recompiled, which took a non-negligible amount of time. There was also no teletype style functionality or ability to track changes, which made collaboration a little more difficult, especially if the project were to grow in size and scope.

##### Bottom Line
On a more general level, however, they agreed that the program could offer a good introduction to programming and computational music to students with little or no background in these areas. Finally, they both agreed that, for the time being, more traditional methods of working might be a little more suitable when it comes to the practicality of creating professional work.

<br>
##### References

<font size="2"><p><b>[1] </b> McCoid, S., Freeman, J., Magerko, B., Michaud, C., Jenkins, T., Mcklin, T., & Kan, H. (2013). EarSketch: An integrated approach to teaching introductory computer music. Organised Sound, 18(2), 146-160. <a href="https://doi.org/10.1017/S135577181300006X">https://doi.org/10.1017/S135577181300006X</a></p></font>

<font size="2"><p><b>[2] </b> Siva, S., Im, T., Freeman, J., Magerko , B., &amp; Hendler, G. (n.d.). Introduction to Programming with Python and EarSketch. Retrieved November 2, 2021 , from. <a href="https://ggc-itec2120.github.io/EarSketchBook/#_introduction_to_earsketch">https://ggc-itec2120.github.io/EarSketchBook/#_introduction_to_earsketch</a></p></font>



---
