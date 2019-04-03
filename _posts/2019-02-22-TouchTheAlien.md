---

layout: post
title: "Touch the Alien"
date: 2019-02-22 17:00:00 +0100
categories: Audio-Programming
author: Eigil Aandahl, Jonas Bjordal, Mari Lesteberg & Sam Roman
image: /assets/img/touchaliensynth/touch-the-alien.png
excerpt: "The web audio synth 'Touch the Alien', a project by Eigil Aandahl, Sam Roman, Jonas Bjordal and Mari Lesteberg at the master's programme Music, Communication and Technology at University of Oslo and Norwegian University of Science and Technology. The application offers touchscreen functionality, Oscillators, FM Oscillator &  Delay, phaser, Chorus & Filter on Dry/wet slider,Canvas UI with follow visual FX	and it's alien themed for your pleasure!"

---

<!-- The blog post should include at least one photo and an embedded video showcasing the mini-project. It is a plus if you add links to the source code and a live demo link (e,g. directory in a personal webpage). The blog post should also include:
- Description: What is the title of the project and main concept. Overview of the technologies used.
- Timeline: Provide an overview of the 3 days that you have been working in the mini-project. What have you been working on?
- Division of labour: Explain who has been working in what, how you have documented it, working strategies and technologies used.
- Live demo: Try to allocate some time for a live demo.
- Achievements: Give a summary of the achievements of this week through the project. Any progress?
- Challenges: Give a summary of the challenges that you have been encountering over the week and how you did face them?
- What is next? e.g. blog post, code repository, website publishing... more development? -->




<iframe width="560" height="315" src="https://www.youtube.com/embed/Rorv7F5VtcI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


The web audio synth "Touch the Alien", a project by Eigil Aandahl, Sam Roman, Jonas Bjordal and Mari Lesteberg at the master's programme Music, Communication and Technology at University of Oslo and Norwegian University of Science and Technology. The application offers:

- Touchscreen functionality
- Oscillators, FM Oscillator &  Delay
- Phaser, Chorus & Filter on Dry/wet slider
- Canvas UI with follow visual FX

And it's alien themed for your pleasure!
You can try the synth yourself on <a href="http://folk.ntnu.no/eigilaa/public_html/Touch-the-alien/" target="_blank">this page</a>.

In the developing of the synth, we have used tools as:

#### Javascript with Web Audio API, CSS and HTML5
  - Javascript to make the "brain" of the synth, such as the audio features, the canvas function with mouse and touch functionality. HTML and CSS for the page UI elements.
#### Tuna
  - An audio effects library for the Web Audio API. 
#### Visual Studio Code
  - A very convenient source code editor that makes coding a dream!
#### Github
  - We used Github to share our code with each other during the process.

Consultation with extraterrestrial races (coders)

## The team



#### Eigil <img src="/assets/img/touchaliensynth/eigil.png" alt="" width="10%" /> 

Eigil used his experience with web technologies and coding to make the canvas work as the interactive centerpiece of the instrument, and then he made the connections to the audio functions, making the instrument playable. He was also responsible for the [live demo](http://folk.ntnu.no/eigilaa/public_html/Touch-the-alien/).

#### Jonas <img src="/assets/img/touchaliensynth/jonas.png" alt="" width="10%" /> 
During the first day was bug fixing and generally advising and cleaning up the code from Sam's <a href="https://mct-master.github.io/audio-programming/2019/02/11/Alien-Reese.html" target="_blank">Sam's Reese the Alien synth</a>. Unfourtunatly Jonas was unwell for the later part of the project development.
 

#### Mari <img src="/assets/img/touchaliensynth/mari.png" alt="" width="10%" /> 

Mari contributed with her acquired Javascript knowledge from last week, about filter nodes, the interactivity between the sound and faders and buttons, and the responsive design with CSS. During the week, her main responsibility in the team was to research the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Touch_events" target="_blank"> touch event functionality </a>, that would allow our final product to work on touch screen devices. She also made a <a href="https://www.youtube.com/watch?v=xl7XN5LBFpA" target="_blank">prototype</a> that implemented a canvas with drawing function into the sound- and aesthetic design of <a href="https://mct-master.github.io/audio-programming/2019/02/11/Alien-Reese.html" target="_blank">Sam's Reese the Alien synth</a>. 


#### Sam <img src="/assets/img/touchaliensynth/sam.png" alt="" width="10%" /> 

Sam took the role of expanding and improving the functionality of the audio code for the synth. This included utilising the <a href="https://github.com/Theodeus/tuna/wiki/Getting-started" target="_blank">Tuna.js</a>
 library for new effect nodes, expanding the audio parameters from the original <a href="https://mct-master.github.io/audio-programming/2019/02/11/Alien-Reese.html" target="_blank">Sam's Reese the Alien synth</a> prototype made a week ago. 

<a href="https://github.com/Theodeus/tuna/wiki/Getting-started" target="_blank">Tuna.js</a>

## Timeline

#### Day	1


The first day of work was on Tuesday, February 12th, and during our Audio Programming class we had decided upon an idea that combined some visuals with sound. Mari's initial idea was to make some sort of a 'sonified' drawing pad, inspired by  <a href="https://mct-master.github.io/audio-programming/2019/02/11/The-Pointilator.html" target="_blank"> Eigil's Pointilator Sequencer synth</a>. The Pointilator allowed you draw 'sonified' dots on a canvas, and play it over and over again as in a sequencer. Mari's idea was to make something similar, but instead of drawing dots, you could draw continuous lines (like in <a href="https://en.wikipedia.org/wiki/Microsoft_Paint" target="_blank">MS Paint</a>), with different colours, and maybe also with different textures. The different textures and colours could represent different instruments or timbres. 

Sam's <a href="https://mct-master.github.io/audio-programming/2019/02/11/Alien-Reese.html" target="_blank"> Reese da Alien Synth </a> from the previous week was ideal for the sonification part of our new project. It already used mouse movement to control the pitch of the synth, so we decided that we wanted to use his code as a base for the new project. We also agreed that we wanted our new project to work on touch devices. Then we delegated the tasks: Mari was going to research the touch functionality, 

#### Day	2

Working side-by-side on our different tasks;
Mari: touch-function
Sam: sound design gibber
Eigil made the Canvas draw lines as you click and drag on it, even making the line fade out over time. This process took a lot of experimentation to get right, as it essentially was making a user interface with relatively low level code compared to using something like [Nexus UI](https://nexus-js.github.io/ui/).

***Excerpt from Mari's Research Diary:***

_I did a lot of work on my own after I got home because I knew that the next day I had to be at the doctor and would lose a lot of time in class. I started by trying to implement the touch function with my <a href="https://mct-master.github.io/audio-programming/2019/02/11/SpaghettiPlayer.html" target="_blank">Spaghetti code player</a> from Audio Programming workshop week 1. I found a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Touch_events" target="_blank">tutorial</a> on how to use touch event and canvas functionality on the Mozilla developer pages. By the end of the day I had been able to also add this function into Sam's code._

_First, I made the touch events work together with the Spaghetti Code Player that I had made in my individual project. We had not planned to use any of the code from my Spaghetti Player, but since I was more familiar with this code, I thought that this was a good exercice just to increase my understanding of the touch event code._

_I got this working pretty soon. Anna showed me in class how I could use the Chrome developer tools to use the toggle device toolbar function to preview how the page would look on touch devices. The difference from the original code was that I now was able to control the filter effect using touch screen, that before was only possible to do with a computer mouse._

_Now, when I sort of had a concept of how the touch event function was working, next step was to try it out together with Sam's <a href="https://mct-master.github.io/audio-programming/2019/02/11/Alien-Reese.html" target="_blank"> Reese the Alien synth</a>. Sam had shared the code with me on Github. Since I'm still a beginner in JavaScript coding, it's not an easy job, and the code turned out more and more <a href="https://en.wikipedia.org/wiki/Spaghetti_code" target="_blank">spaghetti</a>. First, I was able to implement a canvas in the Alien synth, and surprisingly, it worked! At this point, one was able to make a drawing, just like in MS Paint, and the sound was following the line you drawed. But the problem now, was that when you first had hitted the canvas and activated the sound, the sound wouldn't stop before you were hitting the "stop" button. I also included a volume control in the application, that hadn't been there before. In Sam's original synth, there were two oscillators, but only one of them was controlled by the mouse movements, the other one was controlled by keys on the keyboard. But for two reasons I made the two oscillators being controlled by moving x and y axis instead: 1: since the synth was supposed to be used on touch devices, it wouldn't work to make it dependent of a PC keyboard. 2: It seemed that there had to be two oscillators, one for each direction, to make the canvas sonification work at all._

_So the next step now, was to also make the sound stop when you were lifting your finger from the touch device. I solved this by moving the code that handled the "stop" function of the sound from the "shutup"-button to the `function handleEnd(evt)` function. This was working perfectly fine, except from that now, the volume control and the FM effects didn't work anymore! However, I had at least got the main aspects of my idea working, and now it was time to go to bed ..._

***Under the "Prototype section" of this blog post, you can see a video demonstration of how Mari's prototype looked by this point.***



#### Day	3
The third day was also spent on working with our individual tasks, but in a more organised way. We divided our scripts, CSS and HTML into separate files to make the different components of the app more clearly defined. In the end, we started combining our codes by linking the files and calling functions from the script concerned with interactivity to the script audio. When this was done, we could start focusing on expanding the audio functionality with effects from the Tuna JavaScript library.


#### Day	4
On the last day, we finished the prototype by combining all codes together and made final touches on design and functions. This meant tidiying up some of out code, bugfixing and making each intended function work properly. The final part of the day was spent on the presentation, where we got positive feedback from the class and guests, Alexander, Daniel and Arthur. The questions we got were mostly focused on the issues we faced, and how we could further develop the instrument.

## Ideas and prototypes

#### Reece da Alien

<figure align="middle">
        <video height="100%" width="100%" controls>
        <source src="/assets/video/Alien Reese.webm" type="video/webm">
        Your browser does not support the video tag.
</video>
</figure>
<br>

The original inspiration for the project was Sam’s Alien synth. Originally made for experimenting with phasing and clashing frequencies, it also utilised the computer keyboard to effect the frequency of the second oscillator. The idea started as a reese bass creator, however the move to use canvas and touchscreen functionality was a natural progression for the project – it makes the page more accessible and easy to use, as well as a more modern incarnation to present this project.

#### Pointilator synth
<img src="/assets/img/touchaliensynth/pointilator.png" alt="" width="70%" />

Eigil's Pointilator synth from the first week was the basis and inspiration for using Canvas to draw visual feedback when playing.
Instead of having continous sound when clicked, it played note events based on the static and stored position of clicks in sequence.



#### Hello there human.
<img src="/assets/img/touchaliensynth/hellohuman.gif" alt="" width="70%" />	
This was the prototype for the canvas pad after the first day, and as you can see, the canvas draws a line after the mouse pointer which fades over time. Some features for the drawing was still not implemented at this point, but the main style and functionality was already working.

#### Prototype: - Reece Da Alien with sonified drawing pad


<iframe width="560" height="315" src="https://www.youtube.com/embed/xl7XN5LBFpA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The process of developing this prototype was described earlier in this blog post, in the excerpt from the day 2 of Mari's research journal. But briefly summed up, the prototype featured:

- Implementation of the touch events code into Sam’s Alien Synth

- Two oscillators controlled by X and Y movements in the canvas

- The buttons and volume slider didn’t work by this point


## Flowchart

<img src="/assets/img/touchaliensynth/flowchart.jpg" alt="" width="70%" />

This is the signal chain for the prototype’s audio code. It includes the 2 saw oscillators, FM oscillator and audio player brought over from the alien synth from last week. New additions include everything located right of the output node on the graph – the 3 audio FX and the dry/wet routing.

## Audio code & Tuna.js

This is a sample of the code of how the Tuna.js code was implemented. The library has to be in the same folder as the code (as with all the external libraries and plugins used) and then opened in the code: 

```javascript
<script src="tuna.js"></script>
 ```
 
Each FX node had similar layout, and examples were found online. Each node the FX of choice is declared, and then each has parameters that are used for each, different depending on the FX (threshold for compression, feedback for delay etc.). The code below shows the options for the chorus – rate, delay, feedback and bypass. The aim for these FX is to have a simple user friendly use of multiple FX in one action – so the parameters of the FX were generally modest and not too intense. This is due to the fact that the synth design creates crazy sounds already – the ethos of the FX addition to the project was to sweeten the sound (the FM function messes it up enough already!). Here are some <a href="https://github.com/Theodeus/tuna/wiki/Node-examples" target="_blank">Tuna.js examples</a> used.

```javascript
document.querySelector("#button1").addEventListener('click', function() {
  var tuna = Tuna(context);

  var chorus = new tuna.Chorus({
    rate: 1.5,
    feedback: 0.2,
    delay: 0.0045,
    bypass: 0
  }); 
```

The Tuna.js effects Sam found needed to be inside a function to work. At first a dedicated button for named tuna was created to activate the FX, in the end once a slider was introduced the button was triggered by the talk button along with the rest of the sound. This was because now the user had the choice to activate the tuna.js FX using the slider. The solution to using the slider for all FX at once was dealt with via routing a dry and a wet path in the signal flow – and then the fader used volume between the different nodes to crossfade between the “wet” path and the “dry”. 

## Dry/Wet Functionality


```javascript
var slider2 = new Nexus.Slider('#slider2',{
        'size': [120,20],
        'mode': 'relative',  // 'relative' or 'absolute'
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
      })

slider2.on('change',function(filterValue) {
  wet.gain.value = filterValue             // map the wet gain to the filter value
  dry.gain.value = 1 - filterValue          // doing the opposite of wet
```

Here ‘FilterValue’ is the fader variable. Lines below it attaches this variable to the ‘dry’ and ‘wet’ nodes gain. The -1 on the dry line inverts the 0-1 range so it does the opposite gain fade to the wet value. This creates a crossfade effect – the fader in the middle it will be 0.5 and 0.5 each, or 0.7 and 0.3. the value of both nodes together will always be 1, wherever it is on the slider. This code was referenced from <a href="https://www.w3.org/TR/webaudio/." target="_blank">W3</a>.


```javascript
  dry = context.createGain();
  dry.gain.value = 1;

  wet = context.createGain();
  wet.gain.value = 0;

  MainMix.connect(wet)
  MainMix.connect(dry)

  wet.connect(chorus);

  chorus.connect(phaser)
  phaser.connect(filter);  
  filter.connect(context.destination);

  dry.connect(context.destination);
```

This is the code for the routing of the dry/wet nodes.




## Achievements

So, for the the workshop we materialised a working prototype! 

Featuring: 

 - Touch interaction on both canvas, buttons and sliders
 - Sounds made with samples, synthesis and interactive effects
 - A styled website
 - Responsive design

We managed to combine our three branches of code. Working as a group and moving to produce code individually during the midweek development was a decision we made. In doing this we could produce more code, but we had to be able to compile the results (on the last day!). One of our achievements was to successfully implement all the code for the presentation – it showed that our organisation of labour worked out in the end!

## Challenges

Working on each other's code together was certainly both challenging and rewarding, highlighting the importance of a good project structure and management to not make a big mess when putting the pieces together. This was defiantly a challenge;
on the first days it could be hard to know what work process each member had. This also hindered communication somewhat in the first days, although we showed each other our code, it was hard to understand their whole process after each day’s work. As its been stated, we compiled and worked together on the last day, demystifying what the other members of the group had been working on.


### Sam's Challenges - Gibber me Timbers! 

Sam was very inspired by the online JavaScript based live coding environment introduced to the MCT workshop early in the week. The way the platform dealt with FX inspired Sam to get it working with the Alien synth, the audio manipulation on the mouse movements were a particularly cool feature, as well as simple beat generation (ringo a code for drums!). After downloading the library for use in the project, two days of trial and error, problem scanning and asking for advice ensured – to no avail. 

From what Sam found was that gibber didn’t want to play ball inside the JavaScript audio context that was used to compile and output the audio. There is very little online to help with the external library for Gibber, and so this is Sam's guess after findings testing the library. It works easily with its own examples, and sets up the audio context differently. So after coming to this rough conclusion – Sam realised that there was too little time to get Gibber to work – and instead used Tuna.js to achieve a similar goal.


## Issues & Further Development 

Even with all that we achieved during the four days, there are some issues.
After the app is loaded, the app seems to slow down after a while. This is probably due to a memory leak where part of the code keeps piling up information over time without freeing itself.

The instrument is a one trick pony and could have more parameters for a more complete app.

For a more responsive design, the Canvas could be adjusted to fit the screen size of any device, but this was not implemented, so it does not take full advantage of for example a smartphone in portrait mode.

If we had the time, we would have liked to make it more like an actual sonified drawing pad (a bit like MS Paint), adding a function that allows you to play and store the drawing, so you can play it over and over again, like in the Pointilator.
Expanding on this, we could make a function that allows you to draw with different colours and textures. Different colours represented by different instruments or timbres.

<img src="/assets/img/touchaliensynth/touch-the-alien.png" alt="" width="70%" />

## Closing remarks
In the end, we are pleased with the result and experience we got from Anna's workshop. Perhaps this project or something based on it could be presented by us as a paper or workshop during the [2019 Web Audio Conference](https://www.ntnu.edu/wac2019) in December, who knows?
