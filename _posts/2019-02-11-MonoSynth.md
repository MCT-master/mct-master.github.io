---

layout: post
title: "The Mono Synth"
date: 2019-02-10 22:45:00 +0100
categories: audio-programming
author: Eirik Dahl (code credit. Jørgen Varpe)
image: /assets/image/Monosynth.jpg.jpg
excerpt: This blog post outlines the production of the MonoSynth. The Mono Synth is drawn by Jørgen N. Varpe, who also wrote a lot of the code. The objective of this prototype was to improve my familiarity with coding, and at the same time be able to have a working chromatic instrument. Working with a cromatic instrument is interesting because it allows me to have a less abstract understanding of what happens in the code - behind the scenes if you will.

---

<figure align="middle">
<img src="/assets/image/Monosynth.jpg.jpg" alt="Broadcasting header image" width="70%">
</figure>
<br>

My previous knowledge with programming before starting the MCT course was virtually nonexistent, much unlike the error codes I have come across during the creation of this project. Still, I feel like my understanding of programming has grown alot since the previous semester's programming course.

### Finding A Project

It was somewhat difficult to decide what i would be able to do. Working with sonification or making a simple synth was my two options and I even thought this could be challenging, but after a short discussion with Anna, i
landed on the latter. 

From there i tried to implement code from the web. I find it very helpful to use exsisting code when starting out. That helps one to get an overview of the functions rather than having to guess all the names and commands
oneself. As a beginner i would advise people that is starting out to do the same. Anna also gave me another good tips, and this was to make code that does not work, or need improvement into comments, so you can segment the code to isolate problems.

To concretize, my goal was to make a mono synth that was routed to the keyboard on my laptop. My overarching goal was simply to gain more insight into coding through being more exposed to it.
That might not sound very impressive, but for me, with my startpoint, I think it was an ambitious goal.

### Technologies used

* _Visual studio Code_
  Visual studio code was the code editor i used. I do not have too much to compare it to but it seems to be a powerful tool, and from what i gather from my peers, it seems like a very good place to start with coding. I also like the live share function, and the ease of importing folders. Drag and drop is my style!
  
 * _Java Script_
  Most of the code and functions are written in Java Script. This includes the keyboard, the oscillator, and all the mappings
  
 * _GitHub_
  GitHub was used for repositories and the sharing.
  


### Workflow and progress

After going through the code examples of the day, we were encouraged to use the group rooms. I felt more comfortable staying in the portal so as to get help from Anna and some of the more experienced students in the class.
While doing programming, it is not always intuitive to find out what is the issue. For example, a word in a line could be right, but missing a capital letter. That is really not easy to figure out if you are just starting out, such as i am. 

It is very helpful to have your peers and teachers looking over the code and teach you some debugging tricks. For late night work, google is your friend. Googeling everything will in many cases give you an asnwer, because
someone else has probably experienced a similar issue before. Finding the right keyword, and knowing what to google is still an issue that is left to oneself.

Routing the keys was actually the easiest and most pleasurable thing to do. I am not really a huge fan of repeating tasks, but here, it provided me with a sense of progress and independency which was very motivating. 


### Timeline
* _Day 1_
  I familiarized myself with the code, and got the keyboard code from Jørgen. Most of the day went with just understanding how that went. 
  
* _Day 2_ 
  Day two was used to connect and test the Oscillator. From here i had sound, which is an achievement in itself. i Was very happy with getting sound even though the piano was not playable.
  
* _Day 3_
  Day three was used to make the routings of the keyboard. This was satisfying since i could do it on my own without any help.
  I also had to work on the functionality of the keyboard. The keys did not work as a piano. I needed to implement an keyup event to make the keyboard play a sustained note and stop it when i lifted the key.
  
* _Day 4_ 
  This day was used to add some visual features through CSS. I was pleased with how it worked and how i could change the visual apperarance. 


### Code snippets

Keydown function:

This is the keydown function routed to black and white keys on my keyboard:


```
  //window.addEventListener("keyup", function (event) {
      this.console.log("up");
      drawWhite(20, 14, "up");
      drawBlack(55, 10, "up")
      switch (event.key) {
        case "a":
        case "s":
        case "d":
        case "f":
        case "g":
        case "h":
        case "j":
        case "k":
        case "l":
        case "ø":
        case "æ":

        case "w":
        case "e":
        case "t":
        case "y":
        case "u":
        case "o":
        case "p":
        case "å":

            stopSound();
            break
    }
```

Keyup function:
This is the function i used to stop the oscillator form playing when i lifted the key.


```
//window.addEventListener("keyup", function (event) {
    this.console.log("up");
    drawWhite(20, 14, "up");
    drawBlack(55, 10, "up")
    switch (event.key) {
        case "a":
        case "s":
        case "d":
        case "f":
        case "g":
        case "h":
        case "j":
        case "k":
        case "l":
        case "ø":
        case "æ":

        case "w":
        case "e":
        case "t":
        case "y":
        case "u":
        case "o":
        case "p":
        case "å":

        stopSound();
          break
    }
```




### Happy Birthday

At the day of the presentation, one of my peer's had a birthday. I choose to use the oppurtunity to play him the birthday song. 

<center>
<iframe width="640" height="360" src="https://www.youtube.com/embed/k0llkVnh2hA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

### End Product

Albeit not the most complex project, I am proud of what i was able to produce. Making this synth gained me more understanding than i initially tought i would get from the first week of Audio Programming.
It was very helpful to be able to follow a sectioned piece of code like what was produced in the teaching materials.

I ended up with a workable MonoSynth that I was able to complete with a CSS color scheme. As seen in the video, a previous part of the code was 
able to produce Happy birthday, allthough the performance is littered with human errors. 

For now, i am done with the messy spaghetti code that eventually became this project, and I am looking forward to start anew with a shared project next week.


### Future possibilities

Right now, the synth is mono. An obvious improvement would be to make it polyponic. That could be solved with adding more oscillators - for instance one per key, which would improve the playability considerably. Another aspect that could be changed is the sound of the oscillator itself. For instance one could make a button to change the waveform. There are multiple possibilities that could make this synth a very interesting product to use when a midi keyboard is not available. 

For anyone interested, here is a link to my GitHub repository where i keep the code
https://github.com/EirikDahl/Code
