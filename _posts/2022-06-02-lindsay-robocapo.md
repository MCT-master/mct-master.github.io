---
layout: post
title: "RoboCapo: A Digitally Controlled Actuated Capo for Enhanced Guitar Playing "
date: 2022-06-02 06:00:00 +0200
categories: masters-thesis
author: Lindsay Charles
image: /assets/image/2022_06_02_lindsay_robocapo_cad.jpg
keywords:  Master's thesis, Music technology, NIME, Design, Actuated Instruments, Guitar technology
excerpt: "An augmentation device for the guitar, a robotic capo mechanism that explores the emergence of new complex and meaningful modes of interaction."
---

<figure style="float: none">
   <img src="/assets/image/2022_06_02_lindsay_robocapo_full.jpg" alt="Front View" title="RoboCapo " width="85%" />
   <figcaption><i>RoboCapo</i></figcaption>
</figure>

## Abstract

This thesis presents a novel tool, RoboCapo; an augmentation device for the guitar, a digitally controlled actuated capo mechanism that explores the emergence of new complex and meaningful modes of musical interaction. The device enables the musician to incorporate new techniques of guitar playing, freeing up cognitive bandwidth and promoting human and technological capabilities that enables gestures that may be rarely used, prominently the little finger in the musical endeavor. The concept design and prototype are presented, along with an exploration into its potential applications as a semi-controlled and a fully automated device. The mechanical and electronic latency, and the force applied by the capo which affects the sustain of the vibration of the string are evaluated. Artistically, a set of composed excerpts with the use of the proposed device are presented in the form of video and audio recordings. The RoboCapo in itself is not meant to produce sound via string manipulation, but is seen as a tertiary finger that evokes intimate control of the sound which can be compared as a human augmentation that aids in fretting the strings. Lastly, the thesis opens a discussion on the emergent behaviours exhibiting sound producing elements and expands on other unexpected facets that have been observed in the making.




## Introduction

The conception of this idea, inspired in its basic form, weaved out of the necessity to be able to incorporate fingering flexibility in the root notes of chord voicings or harmony in general. Thus, leading to design this system and thereby exploring various symbiotic applications and new features, not only as fully automatic system but also as an electronically controlled mechanized motion which affords substantial human involvement in the sound production process.

The system provides a middle ground for digitally controlled autonomous instruments and passive controllers, a dynamic system where the human performer and the system mutually influence each
other in a musical context. Such integrated concepts with real, physical motion producing acoustic sounds that exhibit meaningful behaviors are sought to engender rich diverse and fluid modes of interaction in this sparsely researched area.

The design process was practically motivated, demanding an explorative approach with a functional prototype. this thesis
explores a set of design philosophies, and what is considered as appropriate freedom to make artistic choices, the author takes a mixture of technological and artistic approach towards its entirety. [Lim et al., 2008]

## Research Question

My main research question has been;

How can we design a controllable actuating capo system that can be used to explore alternative modes of interaction with a guitar?

To go about answering the question, the aim of the project is to incorporate an actuating capo into a guitar in order to explore alternative methods of leveraging performers’ consciously controlled gestures without hindering pre-learned gestures and sharing some of the control with the machine while still providing proactive and intimate human control of the sound.


## Implementation

For reasons of brevity, I shall present only the final prototype here, and if you are interested in the machine, I recommend to read the whole thesis.

In the third and final iteration of the prototype, the design was made as an improvement in its weight distribution, mounting mechanism to be integrated within the guitar, a final design of the 3D printed arm and the button housing to be placed on the body of the guitar.

#### Linear Motion System

Existing techniques for the moving mechanism in various robotic instruments such as MechBass [McVay et al., 2015], GuitarBot [Singer et al., 2004] employed the use of carriage slides on beams often made of aluminium extrusion due its simplicity and speed.
Commercial solutions were reviewed and avoided due to its high costs and delivery time. Instead, this linear motion system was approached with a customised and off the shelf material. An aluminium extrusion was used as a rail, an aluminium carriage with low friction wheels, a motor at one end, an idler pulley at the other end and a timing belt
drive attached to the motor were used.


<figure style="float: none">
   <img src="/assets/image/2022_06_02_lindsay_robocapo_tslot.jpg" alt="Front View" title="RoboCapo " width="85%" />
   <figcaption><i>T-Slot</i></figcaption>
</figure>

Considering the force required to move a carriage carrying about
150grams of weight with an optimal speed and with high precision, the NEMA 17 stepper motor, one among the most common motors used for linear motion drives with variety of torque and speed ratings was chosen and mounted on the plate. A timing belt drive of width 5mm was attached to the motor, the carriage and around the idler pulley. The motor actuated the movement of the carriage. The carriage then provided a base for the capo/ fretting mechanism discussed below.



<figure style="float: none">
   <img src="/assets/image/2022_06_02_lindsay_robocapo_stepper.jpg" alt="Front View" title="RoboCapo " width="85%" />
   <figcaption><i>Stepper motor</i></figcaption>
</figure>



#### Capo/Fretting Mechanism
The action of the traditional capo mechanism in its basic form must press/push the top strings of the guitar and it must have a fairly equal force on all the types of guitars because each type of guitar neck has different curvatures. These traditional capos have a large amount of force pushing against the fretboard on all the strings. It is known that the force required to fret the strings lies from 1N to 6N depending on the string gauge and the string action [Grimes, 2014]

<figure style="float: none">
   <img src="/assets/image/2022_06_02_lindsay_robocapo_fretarm.jpg" alt="Side View" title="RoboCapo " width="45%" />
   <figcaption><i>Fretter: Side view</i></figcaption>
</figure>


Since the fretting mechanism must deliver this much force, a high-power servo motor MG996r with rated torque of 11kg/cm, equivalent to 107N/cm, tested in the first prototype was chosen. The servo motor was fastened to the carriage and the horn of the servo motor is attached with a 3D printed arm which resembles a sleeve with a fret-pad on a traditional capo. The 3D arm has undergone thorough numerous iterative designs, the first design was a simple rectangular arm with two holes. The final design of the arm has a slight concave curvature resembling a traditional capo sleeve, it also two holes placed at the top of the arm, these holes are used to screw on to the horn and hold the arm tightly to avoid any movement when the large amount of force is applied. A clip like mechanism was designed to enable a fast attach and release of the arm. This was done in foresight of developing a system where the user can avail a set of customized arms for fretting any desired string or number of strings. Though the 3D CAD designs were made, it was decided that was over and beyond the scope of this thesis and shall not pursued.
Refer appendix for CAD designs.


<figure style="float: none">
   <img src="/assets/image/2022_06_02_lindsay_robocapo_top.jpg" alt="Front View" title="RoboCapo " width="45%" />
   <figcaption><i>RoboCapo: Front view</i></figcaption>
</figure>


#### Inputs

Two scenarios in the two categories which are the supportive role and robot initiative role as discussed above are taken into account when designing the control mechanism, firstly, as a semi-robotic device, the control mechanism was designed with the intention of the human having total control of the movement of the capo in his/her hands/fingers.
The right hand’s gestures on the guitar are confined to a smaller area than the left and as Stone et al. states the dominant hand takes an exploring function [Stone et al., 2013]. It was chosen to place the control system in reach to the right hand. A button system was designed to activate the movements, 7 push buttons in a line are placed in 3D printed case which holds the buttons. The button housing is placed on the body of guitar, below the strings, in reach of the plucking hand (dominant hand), the buttons are such that the centre button is mapped to 0th position, the buttons on the right side of the centre button are +1 and +2 and +3 mapped to the nth number of position accordingly and the buttons on the left are mapped similarly such that they are -1, -2 and -3 accordingly. The frets on the right-hand side of the capo mechanism was chosen arbitrarily to be the positive, making the left side to be negative.

<figure style="float: none">
   <img src="/assets/image/2022_06_02_lindsay_robocapo_control.jpg" alt="Front View" title="RoboCapo " width="75%" />
   <figcaption><i>Control Mechanism with buttons</i></figcaption>
</figure>

<figure style="float: none">
   <img src="/assets/image/2022_06_02_lindsay_robocapo_housing.jpg" alt="Front View" title="RoboCapo " width="75%" />
   <figcaption><i>Button Housing, CAD</i></figcaption>
</figure>


Two C-Clamps were employed to mount the system on the guitar. One C-clamp was placed on the head of the guitar, and the other was placed on the body, adjacent to the neck of the guitar. The rail is positioned on the mounts such that the distance between the neck and the rail is 11mm. This ensures that the capo arm rests on the 5th and 6th string of the guitar and also provides ample amount of space for the hand and thumb to hold and move freely along the neck. Another smaller clamp is used to tighten the rail and the body clamp in place to restrict any minor movements. The microcontroller was programmed and set for testing.

<figure style="float: none">
   <img src="/assets/image/2022_06_02_lindsay_robocapo_front.jpg" alt="Front View" title="RoboCapo " width="110%" />
   <figcaption><i>RoboCapo: Front view</i></figcaption>
</figure>


## Evaluation and Discussion

#### Capo/Fretting Evaluation

To determine the speed and latency of fretting mechanism from point A to point B on the neck including the rotation of the arm from the fretted position at point A to the fretted position at point B, the video of the motion of the RoboCapo was recorded. The video was recorded at a framerate of 60fps. The 0th time stamp was considered at the moment when the arm lifted itself from the point of contact on the string, and the nth time stamp was considered when the arm pressed down on the string such that the string was touching the fret. A variety of fret potions at varying travel lengths were considered in the test.
The test included moving from and to all 9 accessible frets at steps of one, two an three.

• The average time to move one fret forward : 0.354 seconds


• The average time to move one fret backward: 0.333 seconds


• The average time to move two frets forward : 0.477 seconds


• The average time to move two fret backward: 0.46 seconds

• The average time to move three frets forward : 0.568 seconds

• The average time to move three frets backward: 0.574 seconds


#### Acoustic performance evaluation

For this test, the audio output of the guitar was recorded while the RoboCapo fretted at stationary position and moving to different positions on the neck while the string was plucked by a plectrum. The audio was recorded at a sample rate of 48kHz, and the sample was determined to have full clarity if the string vibrated for long periods of time and did not consist of a buzz tone, which occurs when the string is not depressed with the required amount of force, causing the string to have an improper contact with the fret markers. The samples were then analyzed by listening and marking the decay times.
The test sample size was taken to be 82 The analysis is as follows:
The decay time of the notes was found to be in the range of 5.5 seconds to 7.3 seconds.

Out of all the tests, 3 notes resulted in improper fretting, which caused a loud buzz sound and had a decay time of less than 3.5 seconds as indicated in the test recordings. 4 of the recordings had a decay time of less than 5 seconds but did not have the buzz
sound.

The results indicate that the error chance rate of the fretting mechanism is then calculated to be 3.65%. And the rate of which a note has a chance to decay in less than 5 seconds is 4.87%.

The small decay occurs due to sudden changes in the pressure of the fretting arm which be caused by mechanical or electrical faults.
From this, we can conclude that the force or the pressure applied by the fretting mechanism works with high consistency.



#### Applications

These proposed applications glimpse into techniques which exploit the enhanced expressivity of the novel system, RoboCapo, which can be added into the instrumentalist’s arsenal of tools for self-expression, these are a number of ideas that have come up from the exploration and this list is not meant to be exhaustive. The performance technique and usage of this system is ripe with potential and has only begun its journey as a musician’s tool.

• Extended Chords

• Extended number of strings

• Barre Chords

• Multiple right-hand techniques

• Slide Guitar

• Partial capo

• Auto Metronome

• Automatic tertiary finger

• Mechanical sound synthesizer

• Scordaturas (alternate tuning)

• Finger tapping alternative

• Atypical; shared musical performance

• Delay

## Conclussion

RoboCapo, an actuated musical instrument or a physical attachment device for Guitar endowed qualities that proved to provide intuitive and engaging forms of new interactions. As an augmentation that needed to be attached to the guitar, the process of integration and calibration was one of the major challenges, precise measurements were needed such that the RoboCapo fit into the guitar perfectly.
In conclusion, I would like to state that the RoboCapo system exhibits the key factors that make an actuated musical instrument effective [Overholt et al., 2011]:
• Free up human cognitive bandwidth.
• Enable and even compel the performer to interact with the technology in new ways.
• Allow the performer to steer external sources of electrical energy by controlling when and how they are applied; such that the performer can physically attend to other aspects of playing.
• Endows a physical instrument with virtual qualities that are adjustable in real time by a computer, but which are nevertheless tangible, fostering intuitiveness and possible intimate interactions.

## Demo Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/zh0h4Caf5y0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
