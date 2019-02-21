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

<img src="/assets/img/touchaliensynth/touch-the-alien.png" alt="" width="70%" />



- Touchscreen functionality
- Oscillators, FM Oscillator &  Delay
- Phaser, Chorus & Filter on Dry/wet slider
- Canvas UI with follow visual FX
- Alien themed for your pleasure!

#### Tools used

- Javascript
- CSS
- HTML
- TUNA
- Visual studio code
- Github

Consultation with extraterrestrial races (coders)

## The team



#### Eigil <img src="/assets/img/touchaliensynth/eigil.png" alt="" width="10%" /> 



#### Jonas <img src="/assets/img/touchaliensynth/jonas.png" alt="" width="10%" /> 

 

#### Mari <img src="/assets/img/touchaliensynth/mari.png" alt="" width="10%" /> 

Mari contributed with her aquired javascript knowledge from last week, about filter nodes, the interactvity between the sound and faders and buttons, and the responsive design with css. During the week, her main responsibility in the team was to research the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Touch_events"> touch event functionality </a>, that would allow our final product to work on touch screen devices. She also made a <a href="">prototype</a> that implemented a drawing canvas into the sound and esthetic design of Sam's Reese the Alien synth. 


#### Sam <img src="/assets/img/touchaliensynth/sam.png" alt="" width="10%" /> 



## Timeline

Day	1
Discussing our ideas and path
Delegating tasks

Day	2
Working side-by-side on our different tasks;
Mari: touch-function
Sam: sound design gibber
Eigil: mouse-function

Day	3
Divide js-script, css and html into separate files
Starting on combining our codes
Audio FX tuna & Dry/Wet

Day	4
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


#### Spaghetti Player with Touch Events

- Found a tutorial on how to make touch events work on: https://developer.mozilla.org/en-US/docs/Web/API/Touch_events

- Added canvas with drawing functionality

- Filter controlled by touch movements. 

#### Pointilator synth
<img src="/assets/img/touchaliensynth/pointilator.png" alt="" width="70%" />

Basis and inspiration for using Canvas to draw visual feedback when playing.
Used Canvas as click input.
Played note events based on position of clicks.


#### Hello there human.
<img src="/assets/img/touchaliensynth/hellohuman.png" alt="" width="70%" />


#### Prototype: - Reece Da Alien with sonified drawing pad

<img src="/assets/img/touchaliensynth/drawingpad.png" alt="" width="70%" />

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
