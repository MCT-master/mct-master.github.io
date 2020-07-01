---
layout: post
title: 'Spatial Trip - a Spatial Audio Composition'
date: 2019-11-03 11:00:00 +0200
categories: Spatial-Audio
author: Ashane Silva, Sam Roman, Elias Andersen, Guy Sion
image:
excerpt: 'In this project, we recorded and synthesized sounds with spatial aspects which is meant to be heard over headphones or loudspeakers (8-channel setup in Oslo/Trondheim). Coming to simulate both the indoor and outdoor real and or fictional scenarios.'
Keywords: Workshop, Spatial Audio, 3D Sound, Ambisonics, MCT4044,
---

## Introduction

In this project, we recorded and synthesized sounds with spatial aspects which is meant to be heard over headphones or loudspeakers (8-channel setup in Oslo/Trondheim). Coming to simulate both the indoor and outdoor real and or fictional scenarios.
Our composition is made out of four scenes lasting 1 minute each.<br>
**Scene I** - At home - The whole composition based on a person who suffers with schizophrenia that he hears voices inside his head sometimes. The starting scene is based on day to day activities happens in a busy morning in the kitchen.<br>
**Scene II** - After the accident - Connecting between the morning scene and the accident scene is the TV rapport about an accident. This scene can be an unforgotten experience or maybe memory. We are listening from a point of view of a person that is laying on the ground, facing upwards by a highway after an accident. As the scene develops, more help is arriving connecting us to the next scene at the hospital.<br>
**Scene III** - Connecting the accident scene and the space scene. This seen follows the person lying on the ground from previous scene. The person is badly injured and needs medical help. The person finds himself lying on an operating table at the hospital.<br>
**Scene IV** - As a ambisonic composition, it is quite ironic to do a scene in the absolute silence of space!
As the subject of our piece has elements of abstract mental struggle, and a clear death scene - we felt it fitting that the last scene would be ambiguous, or other wordly - there is no clear understanding of what happens beyond death…..<br>


## Have a listen to our result (Headphones required):

<figure align="middle">
   <audio controls>
     <source src="https://docs.google.com/uc?export=download&id=1V_d_rpn-oNy3mKUS9BAlRkp8rTwAmI9r" type="audio/mpeg" volume="1.0">
     Your browser does not support audio tag.
   </audio>
</figure>

## Complete scene and timeline description

**Scene 1 - At Home - Ashane Silva**

Concept:
The whole composition based on a person who suffers with schizophrenia that he hears voices inside his head sometimes. The starting scene is based on day to day activities happens in a busy morning in the kitchen.

Sounds:
A basic scenario in a kitchen was recorded using a soundfield recording in a first person’s perspective. The recording includes, sounds of water pouring into a glass, opening a door, opening and closing cupboards, stirring in a cup. The recording was done in multiple takes and combined together.

Additionally, Some voice recordings were done to create the voices that the main character hears in his head. The phrases are referring to the accident scene which he starts to regret. Mainly multiple samples of normal voice and whispering voices were recorded.

**Soundfield mic and converting to B-Format**

The raw state of the audio consists of LF, RF, LB, RB recordings and converted to B-Format(Ambix) which has W, X, Y, Z axis for rotation. The B-format source was directly routed to the decoder.<br>
W – a pressure signal corresponding to the output from an omnidirectional microphone<br>
X – the front-to-back directional information<br>  
Y – the left-to-right directional information<br>
Z – the up-to-down directional information<br>

Extra sounds:<br>
Multiple samples has been used to emphasize a busy environment.

Timeline:<br>
Door opens, kitchen work, people chatting
Cat sound, phone rings, crying baby.
Turning on the radio, News,
The character turns towards the radio and turns back to front position.
Voices starts to appear in his head.

Scene:<br>
The scene starts with the person entering the kitchen and doing some basic work. He washed a cup andt trying to make some tea. And opens one of the cupboards and take some food packets. Once he entered the room the cat starts to make noise which can be heard far from behind and also moves around back left and front-right later.Then a phone starts to ring and a baby wakes up to that sound and starts crying..And also there are some  people talking in another room and also a person goes down the stairs of the other side of the wall.

The was used with automating the source from right back to left back. And a low pass filtering has been done cut recreate the perception of the object moving away.

After the radio turned on, the scene rotates as the character face towards the radio and in few seconds the scene rotates back to previous state.

Creating voices<br>
This section is not meant to sound realistic but more dramatic and create more tension. After news stating about an accident the character starts to remind of a past situation. And he speaks “ Oh not again” , “ another accident” and suddenly other voices starts to appear in his head. The main voice is placed in front while other voices moving around the 360 soundfield.

### Effects and plugins.

**Plugins from the IEM plugin suite**

**Multi-Encoder** - Once instance of the multi encoder was used to place the sound samples of cat, baby crying,Phone ringing and people talking. Each sample is placed differently  in the 360 degrees soundfield by controlling the azimuth angle and automating to add some movement.


![Muti-Encoder](https://drive.google.com/uc?export=view&amp;id=19n6wP7R5adbooElhZCrpKU3tlxFTweOn "Muti-Encoder")


**Lowpass Filtering** - adding Low pass filtering for the samples that has to be placed a bit far in the soundfield. This more like additional reinforcement with the gain adjustment to move objects further away from the listener.

**Room Encoder** -  Room encoder was used to create a large space that include stairs.  The position of the person was automated from right back to left back. And the cutoff frequency of the  low pass filtering has been automated to add a better perception of distance and the size of the environment.

![Room Encoder](https://drive.google.com/uc?export=view&amp;id=1dveiOSEow2BFTKoGRhC8pcTUKLWge4i3 "Room Encoder")

**LFO shapes** - LFO shapes of Saw,Triangular, Square and Parametric were used as automation patterns of the Azimuth angle in Multi_Encoder  to create fast movements for the voices. Using LFO shapes seems to be an efficient way of spreading sound in the field evenly and changing the number of cycles with time.

![Automation](https://drive.google.com/uc?export=view&amp;id=1Gc-X1L6n_s85sewmmGxB1dzwRYENnnBI "Automation")

**Dual Delay** -  This was used to add repetitions for voices and automation of the delay time to add a pitch warping effect to voices add the very end. The delay added more glue to the section with voices and also gave a better transition to the next scene.

![Dual-Delay](https://drive.google.com/uc?export=view&amp;id=1iH0t2PCq8_pTR5gItNUdEZn1876q7IQR "Dual-Delay")

**Scene 2 - After the accident - Guy Sion**

Connecting between the morning scene and the accident scene is the TV rapport about an accident. This scene can be an unforgotten experience or maybe memory. We are listening from a point of view of a person that is laying on the ground, facing upwards by a highway after an accident. As the scene develops, more help is arriving connecting us to the next scene at the hospital.

The scene starts with a loud Thunder composed of two layers: mid-high and a deep dark/far thunders, together with rain sample. The dark/far thunder continues playing through the scene, setting up the scene’s spatial depth - it is raining, there is a storm in the distance.

Additional layers that start playing from the beginning of the scenes are an ambisonic recording made on the side of a highway (by ullevål stadion in Oslo).

![Highway](https://drive.google.com/uc?export=view&amp;id=1iVjs5HqorrIj3P6u-_bs7kpRjCVUYBsL "Highway")

We can hear the heavy breathing of the person, breathings that will slow down as the scene continues and more help arrives.
A car is stopping by to assist. A door is open and we can hear a baby crying from within the car. Someone is running out of the car to approach the person on the ground, calling for his attention as he gets closer. Reverb is applied over the voice offering help to give the feeling that those words have been registered by the person on the ground who might be losing conscious.

Timeline:<br>
Thunders - 2 layers, Rain, Ambiance/Traffic - Ambisonic (original recording), Road.<br>
A car breaks - front right to back right<br>
A car door opens and closes - a baby crying being (EQ change)<br>
Steps (wet ground) and Voice (Ashane) approaching<br>
More Steps<br>
Another car door opens and closes<br>
Police radio is being heard<br>
Violins with a long tail reverb. Intervals: 5th up (uplifting), 5th up down to 4th (suspension), 5th up and up to the major 7th (hopeful).<br>
An ambulance is being heard in the background, passing by buildings.<br>

**Scene 3 - The Hospital - Elias Andersen**

Concept:<br>
Connecting the accident scene and the space scene. This seen follows the person lying on the ground from previous scene. The person is badly injured and needs medical help. The person finds himself lying on an operating table at the hospital.

Timeline (Person lying on operating table):<br>
Breathing, heartbeat, heart monitoring beeping and doctor speaking while taking on rubber gloves.<br>
Operating (bones cracking), heart monitor beeping, heartbeat and breath starts to fade until they disappear completely.<br>
Heart monitor beeping stops, heart monitor alarm goes off, doctor speaking, defibrillator and heavenly sound.<br>
Heart monitor alarm stops (person is dead) and heavenly sound continues.

Scene:<br>
The scene starts with a person lying on an operating table. The idea is that he wakes up/get conscious. The person is breathing heavy, hearing his own heartbeat and the heart monitor beeping. Beside him there is a doctor taking on rubber gloves and talking about his condition and that they have to operate. The doctor then starts to operate and you can hear the sound of bones cracking (his rib cage is crushed). The heartbeat and breathing fades away. The heart monitor beeping then stops, obviously. Then the heart monitor alarm goes off and the doctor acknowledge that they are losing him and then the doctor use a defibrillator. It does not work. A melancholic sound start to play, to lead the listener to perceive that the person is dying. The defibrillator is used again, but does not save him. All sounds then fades away and the only sound left is the melancholic sound.      

Sounds:<br>
All the sound samples used are taken from freesound.org, except from the doctor speaking. Most of the sounds I use are meant to sound like the sound object that I want to recreate. What I mean by that is for example the heart beat and the heart beat monitor was put up on freesound.org as heartbeat and heart beat monitor. For the defibrillator on the other hand, I use a kick drum sound as the sound of the kick the defibrillator gives to the body.

The sound of the doctor speaking is a recording of Sam talking. This recording was done in the studio in Oslo with the AKG C414 XLS microphone.

Effects used:<br>
Multi encoder: The melancholic sound are placed in the space using the multi encoder. They are played in a stereo perspective, moving 360 degrees from 180 degrees to -180 degrees.

Room encoder:<br>
All the other sounds are placed in the space with a room encoder. The reason is that the scene takes place in a fixed sized room and is there for easy to place in the room to make it sound realistic; like you are in that room. I also used the room synchronization to get the perspective that the sounds are all in the same space/room.

Volume:<br>
Volume are used to make some of the sounds to fade out (away). At first I tried to make the same effect with placing the sounds further away from the listener's perspective in a linear manner, but got a more realistic result with using the volume for this. Examples where the sounds are fading are the heartbeat, breathing, the heart monitor alarm and the doctor speaking. In the beginning the fade in effect are used to make it sound like you are waking up; being conscious.

Reverb:<br>
Reverb are used for the same effect as volume, to make the object sound like they are fading away; making the room sound bigger. This effect are used on the doctors voice.

**Scene 4 - Space - Sam Roman**

Concept<br>
As a ambisonic composition, it is quite ironic to do a scene in the absolute silence of space!
As the subject of our piece has elements of abstract mental struggle, and a clear death scene - we felt it fitting that the last scene would be ambiguous, or other wordly - there is no clear understanding of what happens beyond death…..

This ambiguity allowed for an opportunity to be more abstract. I find it very interesting the idea of augmenting reality with 3D sound scenes - creating a “ultra- reality”. Sound that we hear is based on real world physics - we are used to the way spatial audio works in real life. So by playing on these laws, and subverting them one can create a scene that is beyond reality. It should be noted that there is a balance between realism and extrinsic sounds, and manipulating these sounds to be unreal. The audience needs have some footing in reality to appreciate and understand when it differs from it, thus understanding the scene is producing sounds in unrealistic and improbable ways.

This was inspired by the recent WoNoMute held in the portal with Nattasha Barret. In her piece it starts with a normal outdoor scene, that over time gets subverted and twisted as it progressed.

I also wanted to subvert expectations - Firstly introduce the scene, highlighting sounds that suggest space scene stereotypes. However, I then wanted the scene gradually break down - physics would start to go awry with glitchy processed sounds, and the spatial information would turn extreme, with sounds that are stretched and unreal. This will ramp up to the end with a crescendo - finishing the piece. In my opinion, for this to be successful, the audience needs to be invested in the reality of the scene from before - to have a reference to how abstract it will become. In other words, if the scene is abstract all the time, there would be no contrast to make sense of being in a particular space and time.

Timeline:<br>
Scene is split into three components-
Floating in space - reaching a ship or space station
Opening and entering airlock and walking inside the vessel
Augmentation of the scene - breaking down of reality



Sound sources<br>
Recording - Stairs in ZEB building.

The stairs in the ZEB building are made of stone and are four floors high, with good isolation of sounds from outside the stairwell. This space had a long reverb time, and I used as representations of a tunnel in a ship. This sample i used for a quiet ambience bed inside the ship, designed to be a similar acoustic space. The whistle I did for testing - however i liked the mood of the sound and decided to keep it in.

Sampled sources<br>
Action Sounds

Footsteps - The sample represents walking down the tunnel and is in constant movement,  This is in stereo, and put up in elevation, and panned slightly to the front. I found this gave the most realistic spatial position to imitate hearing your own footsteps within a long, metal tunnel like space with large reverberation. Having the sample in stereo spreads the sound over a 90 degree angle. The sample came from hitting a shoe on a radiator!

Metal - To compliment this, there are metal clunk sounds, that fill out the footsteps and other actions. This are panned differently, and give the imagery of a clunky, metallic structure that creaks as it is walked down.

Airlock Open & Close - There are three different samples that make up the opening and closing of the ship. These are positioned in the centre on the first sample, then pans to the left as the swoosh goes - similar to a sliding door. The next sample is the loudest - and signifies the full opening. This is positioned the opposite, starts on the left of the listener then swipes to the middle. This was to show the airlock closed behind the listener. This is where there is silence for a second - this is to signify the change of space for the character. The is a last swoosh for the opening of the main station. An impulse response of a car garage ha was used on the door - modulated quite extremely to enhance the power. It had the right “metallic” quality i was looking for.

Bleepy - There is also a bleepy sound placed on the right of the space, to show the input or recognition of an action that will open the door. It was placed here to counter the door action working on the left, as if the dial is on the right of the door.

Voice - acknowledged. This confirms that there is a system for the door the character is accessing. In the space the speaker it is located on the right side of the hatch.

Bleep - In the ship as the character is walking down a tunnel. There is a bleep coming from in the tunnel, that the character walks past on the left. As he walks past, the spatial position comes from front left, left then to left back. Volume automation is added to for a mild doppler effect.

Percussive glitch - This element was made through experimentation. I used E4L spatial slicer on an ambient sound source, and it produced an almost “stick brushed over radiator” sound. This sounded glitchy to me, and it worked well indicating the breaking down of reality. The timbre fits with the scene, sounding like a computer or electronics on the ship. The placement gets more and more erratic as the piece comes to a close, spinning around the listener twice at the very end.

Heavy Human Breathing - This is the same sample used in the roadside scene, which adds a nice touch of continuity. This is used later to show the human reaction to such a scene, and for us as the viewer to understand his condition. It is also twisted and stretched later on, panning increases in intensity. As breathing is one of the most human sounds in the world, it was intentionally used to break convention, and let the listener know that reality is getting distorted.

Ambient Sounds:<br>
Space drones - 3 layered sounds at the start to signify space. 2 starts out stereo image out of the front sides, one on each side then collapses into the very centre before the door.

Pad - There is a tonal pad that sets the tone of the scene in the ship. The pitch is raised at the end to signify the crescendo finale.
