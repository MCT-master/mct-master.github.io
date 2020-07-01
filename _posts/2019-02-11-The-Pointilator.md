---
layout: post
title:  "The Pointilator Sequence Synthesizer"
date:   2019-02-11 17:00:00 +0200
categories: audio-programming
author: Eigil Aandahl
image: /assets/image/pointilator.png
excerpt: "The Pointilator sequence synth is an experimental instrument that can be played directly from a web browser! It is tested to work with Opera and Chrome, but does not work in Safari.
	It is based around entering a sequence of notes as points on a Canvas that registers each click and draws a circle where the note was put. It can then play back the notes from left to right with the height of the click translating to pitch.
  The result is a sequencing synthesizer that has a finely detailed scope in both time and pitch, although it is not easy to control based on traditional musical scales or rhythmic time."

---

<figure align="middle">
<img src="/assets/image/pointilator.png" alt="The Pointilator GUI." width="70%">
</figure>

### Introduction
During the first week of the audio-programming workshop, we were tasked with making an individual project incorporating some of the skills and tools learned as we progressed through the week. Having had some experience with web technologies, [HTML, CSS and JavaScript](https://www.w3.org/wiki/The_web_standards_model_-_HTML_CSS_and_JavaScript), I was quite confident, but not necessarily that sure of what I wanted to do. 

After experimenting a bit with the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) and how to achieve playback of audio samples, I went back to things I knew from before using the [HTML5 Canvas element](https://www.w3schools.com/html/html5_canvas.asp) to draw and log clicks on a digital surface.

This led me to make The Pointilator sequence synth, which I will describe in further detail below. 

### Description 
[The Pointilator sequence synth](http://folk.ntnu.no/eigilaa/public_html/webaudio/index.2.html) is an experimental instrument that can be played directly from a web browser! It is tested to work with Opera and Chrome, but does not work in Safari.
	It is based around entering a sequence of notes as points on a Canvas that registers each click and draws a circle where the note was put. It can then play back the notes from left to right with the height of the click translating to pitch. This is done by pressing the 'Play' button. The sequence will loop, and a 'reset' button can stop the audio by muting it and then reset the Canvas. 
	Further control is added by using controllers from [NexusUI](https://nexus-js.github.io/ui/), a library for making graphical user interfaces for JavaScript. These include changing the values of three sliders for 'Timescale', 'Envelope Level' and 'Note Length'. The 'Timescale' refers to the length of the sequence in seconds. The volume envelope of each note can be somewhat controlled by a ten-values multi slider that creates a curve for note's volume over time.
  The result is a sequencing synthesizer that has a finely detailed scope in both time and pitch, although it is not easy to control based on traditional musical scales or rhythmic time.

I will come back to how this was achieved, but first I will provide a quick timeline for the project development.

### Timeline

<figure align="middle">
<img src="/assets/image/pointilatordiagram.png" alt="Diagram showing the development of the project over 4 days." width="80%">
</figure>

When I started out on the first day of the workshop, I worked on a sampler instrument that would use a Convolver node to create reverb, but this proved less inspiring than I had thought, and after just achieving sound and some improvements in the program structure, I abandoned this angle for the project.

On the second and third day, I worked on what would become The Pointilator, focusing mostly on the graphics and interactivity on day 2 and adding sounds on day 3. Much of the work was put into how the sequence of notes was generated and controlled.

The last day was spent updating the visuals of the instrument to reflect its somewhat refined state having gotten more control of the notes using [Nexus UI](https://nexus-js.github.io/ui/).

### Achievements

The main achievements of the project as I see them are connected to how I was able to make the information from the Canvas element and clicks translate into a playing sequence of notes. The signal processing and sound of the instrument is however quite basic, being a collection of single oscillators per note. This gives the instrument a somewhat boring sounding timbre and audio quality. 

I will now give a more detailed description of some of the code to explain how each part works.

Clicks on the Canvas element are registered by the code and draws based on the coordinates. Since the vertical range of the Canvas starts at 0 at the top, this value has to be reversed.
```javascript
//Eventlistener for click on Canvas
c.addEventListener('click', function(event) {
  let x = event.pageX - c.offsetLeft, y = event.pageY - c.offsetTop;
  //Draw dots
  drawDot(x, y);
// Add note event by click coordinate to array
noteEvents.push(new noteEvent(x/width, reverseRangeOfCanvasScale(y, 200, 2000)));

function drawDot(x, y) {
  console.log(x, y);
  ctx.beginPath();
ctx.arc(x, y, 10, 0, 2 * Math.PI);
ctx.stroke();
}
```

A note event is then created as an object with the coordinates of the clicks and added to an array.
```javascript
//Note events
let noteEvent = class {
  constructor(x, y){
    this.time = x;
    this.pitch = y;
  }
};
var noteEvents = [];
```
The array can then be iterated through using a for loop which generates the oscillators and sounds each time the loop starts.

```javascript
function scheduler() {
  running = true;
playedOnce = false; // to make it work in no looping mode
while ((nextLoopTime < context.currentTime+0.1) && (!playedOnce || loopingbool) && !stopper) // Keep playing if loop.
  { 
    for (event in noteEvents)  // play note events
      {
      playTone(noteEvents[event]);
      }
    loopStartTime = context.currentTime;
    playedOnce = true;
  }
  timerID = window.setTimeout(scheduler, 100.0);
}
```

More of the code can be found in my [Github repository.](https://github.com/Eigil94/Web-audio-individual-project)

### Challenges

Making the sequencer play in the way I wanted to proved to be a challenge, because of the time-sensitive nature of audio programming. 
I mostly did not use prebuilt libraries to handle the scheduling of all audio events, which meant some things were happening asynchronously and before real-time. That meant adding notes while the sequence was playing would only manifest after the current loop was finished. 
I was however able to overcome this by calculating when the note should play based on the current loop's start and when the Canvas was clicked. 

The way I did it was however mostly a workaround than revorking how the scheduling basically functioned, which could have been better, but as I was working on it, I became somewhat intrigued by the limitations and challenges this entailed.
Another thing was that I locked myself in using basic elements from HTML and Web Audio compared to using premade GUI and audio libraries since I would have had to just redo a lot of what I had done to switch over to the libraries.
This might have been a poor decision since it made much of the programming more cumbersome.

### Further development

There are still many bugs and issues with the instrument, but I am satisfied with what I achieved during the week. Further improvements could be made to the audio quality, scheduling of note events and control over pitch. Quantizing the pitch and time would also be interesting to explore, as well as functionality for editing and undoing steps added to the sequencer.

The working prototype is hosted at my [NTNU web space](http://folk.ntnu.no/eigilaa/public_html/webaudio/index.2.html) and the source code is available at my [repository on Github](https://github.com/Eigil94/Web-audio-individual-project). 


