---

layout: post
title: "Touch the Alien"
date: 2019-02-22 17:00:00 +0100
categories: Audio-Programming
author: Eigil Aandahl, Jonas Bjordal, Mari Lesteberg & Sam Roman
image: /assets/img/touchaliensynth/touch-the-alien.png
excerpt:

---

<!-- The blog post should include at least one photo and an embedded video showcasing the mini-project. It is a plus if you add links to the source code and a live demo link (e,g. directory in a personal webpage). The blog post should also include:
- Description: What is the title of the project and main concept. Overview of the technologies used.
- Timeline: Provide an overview of the 3 days that you have been working in the mini-project. What have you been working on?
- Division of labour: Explain who has been working in what, how you have documented it, working strategies and technologies used.
- Live demo: Try to allocate some time for a live demo.
- Achievements: Give a summary of the achievements of this week through the project. Any progress?
- Challenges: Give a summary of the challenges that you have been encountering over the week and how you did face them?
- What is next? e.g. blog post, code repository, website publishing... more development? -->



# Touch the Alien - Web API based synthesiser

<iframe width="560" height="315" src="https://www.youtube.com/embed/Rorv7F5VtcI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


The web audio synth "Touch the Alien", a project by Eigil Aandahl, Sam Roman (, Jonas Bjordal?) and Mari Lesteberg at the master's programme Music, Communication and Technology at University of Oslo and Norwegian University of Science and Technology. The application offers:

- Touchscreen functionality
- Oscillators, FM Oscillator &  Delay
- Phaser, Chorus & Filter on Dry/wet slider
- Canvas UI with follow visual FX

And it's alien themed for your pleasure!
You can try the synth yourself on <a href="http://folk.ntnu.no/eigilaa/public_html/Touch-the-alien/" target="_blank">this page</a>.

In the developing of the synth, we have used tools as:

#### Javascript with Web Audio API, CSS and HTML
  - Javascript to make the "brain" of the synth, such as the audio features, the canvas function with mouse and touch functionality
#### TUNA
#### Visual Studio Code
  - A very convenient source code editor that makes coding a dream!
#### Github
  - We used Github to share our code with each other during the process.

Consultation with extraterrestrial races (coders)

## The team



#### Eigil <img src="/assets/img/touchaliensynth/eigil.png" alt="" width="10%" /> 



#### Jonas <img src="/assets/img/touchaliensynth/jonas.png" alt="" width="10%" /> 

 

#### Mari <img src="/assets/img/touchaliensynth/mari.png" alt="" width="10%" /> 

Mari contributed with her aquired javascript knowledge from last week, about filter nodes, the interactvity between the sound and faders and buttons, and the responsive design with css. During the week, her main responsibility in the team was to research the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Touch_events" target="_blank"> touch event functionality </a>, that would allow our final product to work on touch screen devices. She also made a <a href="https://www.youtube.com/watch?v=xl7XN5LBFpA" target="_blank">prototype</a> that implemented a drawing canvas into the sound- and aesthetic design of <a href="https://mct-master.github.io/audio-programming/2019/02/11/Alien-Reese.html" target="_blank">Sam's Reese the Alien synth</a>. 


#### Sam <img src="/assets/img/touchaliensynth/sam.png" alt="" width="10%" /> 



## Timeline

#### Day	1


The first day of work was on Tuesday, February 12th, and during our Audio Programming class we had decided upon an idea that combined some visuals with sound. Mari's initial idea was to make som sort of a sonified drawing pad, inspired by  <a href="https://mct-master.github.io/audio-programming/2019/02/11/The-Pointilator.html" target="_blank"> Eigil's Pointilator Sequencer synth</a>. The Pointilator allowed you draw sonified dots on a canvas, and play it over and over again as in a sequencer. Mari's idea was to make something similar, but instead of drawing dots, you could draw continous lines (like in <a href="https://en.wikipedia.org/wiki/Microsoft_Paint" target="_blank">MS Paint</a>), with different colours, and maybe also with different textures. The different textures and colours could represent different instruments or timbres. 

Sam's <a href="https://mct-master.github.io/audio-programming/2019/02/11/Alien-Reese.html" target="_blank"> Reese da Alien Synth </a> from the previous week was ideal for the sonification part of our new project. It already used mouse movement to control the pitch of the synth, so we decided that we wanted to use his code as a base for the new project. We also agreed that we wanted our new project to work on touch devices. Then we delegated the tasks: Mari was going to research the touch functionality, 

#### Day	2

Working side-by-side on our different tasks;
Mari: touch-function
Sam: sound design gibber
Eigil: mouse-function

***Excerpt from Mari's Research Diary:***

_I did a lot of work on my own after I got home because I knew that the next day I had to be at the doctor and would lose a lot of time in class. I started by trying to implement the touch function with my <a href="https://mct-master.github.io/audio-programming/2019/02/11/SpaghettiPlayer.html" target="_blank">Spaghetti code player</a> from Audio Programming workshop week 1. I found a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Touch_events" target="_blank">tutorial</a> on how to use touch event and canvas functionality on the Mozilla developer pages. By the end of the day I had been able to also add this function into Sam's code._

_First, I made the touch events work together with the Spaghetti Code Player that I had made in my individual project. We had not planned to use any of the code from my Spaghetti Player, but since I was more familiar with this code, I thought that this was a good exercice just to increase my understanding of the touch event code._

_I got this working pretty soon. Anna showed me in class how I could use the Chrome developer tools to use the toggle device toolbar function to preview how the page would look on touch devices. The difference from the original code was that I now was able to control the filter effect using touch screen, that before was only possible to do with a computer mouse._

_Now, when I sort of had a concept of how the touch event function was working, next step was to try it out together with Sam's <a href="https://mct-master.github.io/audio-programming/2019/02/11/Alien-Reese.html" target="_blank"> Reese the Alien synth</a>. Sam had shared the code with me on Github. Since I'm still a beginner in JavaScript coding, it's not an easy job, and the code turned out more and more <a href="https://en.wikipedia.org/wiki/Spaghetti_code" target="_blank">spaghetti</a>. First, I was able to implement a canvas in the Alien synth, and surprisingly, it worked! At this point, one was able to make a drawing, just like in MS Paint, and the sound was following the line you drawed. But the problem now, was that when you first had hitted the canvas and activated the sound, the sound wouldn't stop before you were hitting the "stop" button. I also included a volume control in the application, that hadn't been there before. In Sam's original synth, there were two oscillators, but only one of them was controlled by the mouse movements, the other one was controlled by keys on the keyboard. But for two reasons I made the two oscillators being controlled by moving x and y axis instead: 1: since the synth was supposed to be used on touch devices, it wouldn't work to make it dependent of a PC keyboard. 2: It seemed that there had to be two oscillators, one for each direction, to make the canvas sonification work at all._

_So the next step now, was to also make the sound stop when you were lifting your finger from the touch device. I solved this by moving the code that handled the "stop" function of the sound from the "shutup"-button to the `function handleEnd(evt)` function. This was working perfectly fine, except from that now, the volume control and the FM effects didn't work anymore! However, I had at least got the main aspects of my idea working, and now it was time to go to bed ..._

***Under the "Prototype section" of this blog post, you can see a video demonstration of how Mari's prototype looked by this point.***



#### Day	3
Divide js-script, css and html into separate files
Starting on combining our codes
Audio FX tuna & Dry/Wet

#### Day	4
Finishing the prototype, combine all codes together
Final touch on design and functions


## Ideas and prototypes

#### Reece da Alien

- Originally made for experimenting with phasing and clashing frequencies 

- Uses both  mouse & keyboard

- FM synthesis functionality

- Audio clip sampler

- can be used for creating reese sounds, for sound design or fun!

- whoh! Alien are out there dude .... 


#### Pointilator synth
<img src="/assets/img/touchaliensynth/pointilator.png" alt="" width="70%" />

Basis and inspiration for using Canvas to draw visual feedback when playing.
Used Canvas as click input.
Played note events based on position of clicks.


#### Hello there human.
<img src="/assets/img/touchaliensynth/hellohuman.png" alt="" width="70%" />


#### Prototype: - Reece Da Alien with sonified drawing pad


<iframe width="560" height="315" src="https://www.youtube.com/embed/xl7XN5LBFpA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- Implemented the touch events code into Sam’s Alien Synth

- Two oscillators controlled by X and Y movements in the canvas

- But the buttons and volume slider didn’t work by this point


## Flowchart

<img src="/assets/img/touchaliensynth/flowchart.jpg" alt="" width="70%" />

## Achievements

- Working prototype
- Implemented the following:
  - Touch interaction
  - Sound
    - Samples
    - Synthesis
    - Effects
  - Styled website
  - Responsive design
- Combined elements by linking scripts
- Implemented lessons from the workshop

## Challenges

## Issues & Further Development 

- Audio gets degraded over time due to inefficient scripts that leak over time

- Is a one trick pony - could have more parameters for a more complete app

- Canvas is centred, but would be preferable for an adjusted aspect ratio that fills the screen on every device

- Make it more like an actual sonified drawing pad (aka MS Paint). Add a function that allows you to play and store the drawing, so you can play it over and over again, like in the Pointilator.

- Make a function that allows you to draw with different colours and textures. Different colours represented by different instruments or timbres.

<img src="/assets/img/touchaliensynth/touch-the-alien.png" alt="" width="70%" />
