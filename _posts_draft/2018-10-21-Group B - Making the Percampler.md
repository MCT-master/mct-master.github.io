---
layout: post
title:  "Group B, Making the Precampler"
date:   2018-10-21 17:35:00 +0200
categories: Physical computing
author: Mari Lesteberg, Dmitry Vasilev, Ashane Silva, Shreejay Shreshta & Eigil Aandahl
comments: true
---
## The Percampler:
The Final day of the physical computing was based on creating a custom made instrument based on the knowledge and experience gained from the past three days. We had to figure out if we wanted to make one instrument, which could be played across the to campuses, or if we would choose to make two different instruments that could compliment each other. 

In the morning we brainstormed different ideas about what exactly we could be able to build in the limited amount of time given (Only Three Hours!!!). We decided that it would be most fruitful to build two different instruments, one in each city. However, "both" instruments were to be complementary, and furthermore had to fit into the the concept decided by the group - a digital-analog hybrid percussive instrument that combined different technologies and sound sources that we had explored during the past workshops - the javascript digital sampler and the analog Korg LittleBits kit. With the final concept in place, we decided to aptly call our analog-digital hybrid percussive sampler the “Percampler”. 

From Trondheim, Eigil and Shreejay suggested the idea on using a contact microphone as an input for the LittleBits and producing beats and percussive elements in real time. The idea was to incorporate the soundwalk and circuit sniffing techniques for real-time sound sampling into the Percampler. This idea perfectly fit the analog-digital hybrid concept, and while performers in Oslo played with the digital sampler, performers in Trondheim supplied the analog sounds, noises, and feedback by utilising the contact mic, cymbals, and other tools to produce and alter sounds through analog means.

The digital aspect of the Percampler was based upon the sampler we had learned to make with javascript during the first workshop. Dmitry had worked a lot on his version of the sampler, adding effects and mapping the different sounds and effects to different keys of the qwerty keyboard, allowing to change the delay time, reverse the sample, and pitch the sounds by changing their playback rate. All of the sounds in the sampler were recorded during the sound hunting excursion of the first workshop. The coded digital sampler was connected to the microphone module of the LittleBits kit with a mini jack cable. By adding the sequencer module to the signal chain, we were able to treat any sound percussively, with the sequencer module of the LittleBits kit acting as an analog audio gate (or in fact 4 audio gates the volume of which could be individually adjusted to produce rhythmic variations and glitchy stutter effects). This turned out to work perfectly, and thus the Percampler - the percussive sampler was realised. With the addition of an analog delay and filter modules this also solved the challenge of making one instrument that could be played by multiple persons at the same time! Dmitry controlled the sampler from his computer, Ashane and Mari controlled the LittleBits sequencer and other knobs on the effects of the Little Bits modules. 

Besides the analog effects, the analog nature of the Percampler was based upon the real-time circuit sniffing and soundwalk techniques - the idea of finding sounds and interferences in everyday objects. In Trondheim, Eigil and Shreejay used a contact mic as the input, a cymbal and other items to produce sounds, as well as a portable speaker built into the "body" of the Percampler to produce feedback and noise.

### Trouble in Paradise:
As it worked so well to connect one input source to the Little Bits kit, we thought that it could be interesting to also use the "handwaving smartphone-instrument" to the LittleBits chain. Sadly, not only Mari's phone wouldn't collaborate today, but none of our phones! We used some time to troubleshoot, but figured out that this was a waste of time. However, maybe it wouldn't alter the quality of our instrument anyway, to bring an extra chain of sound, some times it's for the better to keep things simple. 

Additionally, Mari had brought her colourful MIDI keyboard today, hoping that we could use it together with the sampler. She had successfully made it work together with musical applications made with Pure Data before, so why not make it work together with Javascript as well? But with no pre-experience in javascripting, except from the little we have learned though this course, it proved very difficult to figure out how to do it. We had to give that up as well, and just settle with what we had. 

### Digital Sampler in-depth:
The javascript of the sampler is attached at the end, for anybody willing to try it out. The sampler used in the performance was fitted with 4 drum sounds and 4 "melodic" sounds (e.g. sounds of a discernable frequency).

The under-the-hood elements of the sampler include variable delay time mapped to the Z and X buttons of the keyboards (X increases the delay time by 0.2 seconds, Z decreases it by the same amount), the ability to reverse sounds by pressing R (works great for turning percussive samples with long "tails" into swelling drones), the ability to loop-play sounds to create rhythmic collages by pressing L, as well as the ability to play the computer keyboard like a real piano, changing the pitch of the melodic sounds by affecting the playback rate. And if you want to change the sound of you keyboard, just press the up/down/left/right arrow to select one of the four melodic sounds (provided you set the sounds accordingly when you run the example below).

For the melody - say, you want to play a C note, corresponding to 131 Hz, but the sampled melodic sound is 104 Hz. Well, simply divide 131 Hz by 104 Hz and set the playback rate to the result, and voila, your sample is now sped up to match the note C. Or let's say you want to play the sound in reverse (perhaps you're looking for hidden satanic messages in your drums). Simply set the playback rate to negative one. For the javascript implementation of the aforementioned things and more, see the code below (the formatting is bad because of gitHub layout, we swear!):

// Original code supplied by Anna Xambó

// Digital sampler of the Percampler of Group B. Load your own sounds!


var sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8;
var isLooping;
var isRev;
var bgvalue = 0;
var toggle_idx;
var pitch = [131, 139, 147, 156, 165, 175, 185, 196, 208, 220, 233, 247, 262];
// var pitch = [65, 69, 73, 78, 82, 87, 92, 98, 104, 110, 117, 123, 131];
var drone_idx = 0;

function preload(){
  // load sound here
  //sound1 = loadSound("sounds/Drop Coin.ogg", loaded);
  //sound2 = loadSound("sounds/psi_35.ogg", loaded);
  //sound3 = loadSound("sounds/SFX_Jump_10.ogg", loaded);
  //sound4 = loadSound("sounds/Synth Bass 016.ogg", loaded);
  sound1 = loadSound("sounds/copymachine.mp3", loaded);
  sound2 = loadSound("sounds/pianobody.mp3", loaded);
  sound3 = loadSound("sounds/pianoextra.mp3", loaded);
  sound4 = loadSound("sounds/pianolow.mp3", loaded);
  
  sound5 = loadSound("sounds/Headphone howl.wav", loaded);
  sound6 = loadSound("sounds/Jack noise from imac.wav", loaded);
  sound7 = loadSound("sounds/Piezo tapping.wav", loaded);
  sound8 = loadSound("sounds/Voice grinder.wav", loaded);
  sounds = [sound1, sound2, sound3, sound4, sound5, sound6, sound7,sound8]; 
  drones = [sound5, sound6, sound1, sound8];
}
function setup(){
  createCanvas(400, 400);
}
function draw(){
  background(bgvalue);
}
// FX
function setup() {
    // Reverb:
reverb = new p5.Reverb();
// Reverb time in second,  decayRate in percentage
RT = 4; decay = 2;     
    // Delay:
delay = new p5.Delay();
// delay.process() accepts 4 parameters:
// source, delayTime, feedback, filter frequency
delay_time = 0; feedback = 0.7; filter_freq = 3300;
}
function loaded() {
  console.log("loaded");
  sound7.playMode('restart');
  sound2.playMode('restart');
  sound3.playMode('restart');
  sound4.playMode('restart');

  sound1.playMode('sustain');
  sound5.playMode('sustain');
  sound6.playMode('sustain');
  sound8.playMode('sustain');
  isLooping = 0;
  isRev = 0;
  isSustain = 0;
  toggle_idx = 0;
}
function keyPressed() {
// Adjustable FX:
    if (keyCode == 90) { 
        delay_time = delay_time - 0.2;
        if (delay_time < 0){
            delay_time = 0;
        }
        console.log("Delay time ", delay_time);
    } else if (keyCode == 88){
        delay_time = delay_time + 0.2;
        if (delay_time > 0.99){
            delay_time = 0.99;
        }
        console.log("Delay time ", delay_time);
// Loop sounds:
    } else if (keyCode == 76){ // l
        if (isLooping == 0){
            for (var I = 0; I<8; I++){
                var s_loop = sounds[I];
                s_loop.setLoop(true);
            }
            console.log("loop on");
            isLooping = 1;
        } else if (isLooping == 1) {
            for (var I = 0; I<8; I++){
                var s_loop = sounds[I];
                s_loop.setLoop(false);
            }
            console.log("loop off");
            isLooping = 0;
    }
// Reverse play
    } else if (keyCode == 82) { // r
        if (isRev == 0){
            for (var J = 0; J<4; J++){
                var s_rev = sounds[J];
                s_rev.rate(-1);
            }
            console.log("Reverse On");
            isRev = 1;
    } else if (isRev == 1){
        for (var J = 0; J<4; J++){
            var s_rev = sounds[J];
            s_rev.rate(+1);
        }
        console.log("Reverse Off");
        isRev = 0;
    }
// Keyboard:
    } else if (keyCode == 65){ // a
        drones[drone_idx].rate(pitch[0]/104);
        drones[drone_idx].play();
    } else if (keyCode == 87){ // w
        drones[drone_idx].rate(pitch[1]/104);
        drones[drone_idx].play();
    } else if (keyCode == 83){ // s
        drones[drone_idx].rate(pitch[2]/104);
        drones[drone_idx].play();
    } else if (keyCode == 69){ // e
        drones[drone_idx].rate(pitch[3]/104);
        drones[drone_idx].play();            
    } else if (keyCode == 68){ // d
        drones[drone_idx].rate(pitch[4]/104);
        drones[drone_idx].play();
    } else if (keyCode == 70){ // f
        drones[drone_idx].rate(pitch[5]/104);
        drones[drone_idx].play();        
    } else if (keyCode == 84){ // t
        drones[drone_idx].rate(pitch[6]/104);
        drones[drone_idx].play();     
    } else if (keyCode == 71){ // g
        drones[drone_idx].rate(pitch[7]/104);
        drones[drone_idx].play();  
    } else if (keyCode == 89){ // y
        drones[drone_idx].rate(pitch[8]/104);
        drones[drone_idx].play();  
    } else if (keyCode == 72){ // h
        drones[drone_idx].rate(pitch[9]/104);
        drones[drone_idx].play();  
    } else if (keyCode == 85){ // u
        drones[drone_idx].rate(pitch[10]/104);
        drones[drone_idx].play();
    } else if (keyCode == 74){ // j
        drones[drone_idx].rate(pitch[11]/104);
        drones[drone_idx].play();
    } else if (keyCode == 75){ // k
        drones[drone_idx].rate(pitch[12]/104);
        drones[drone_idx].play();
// PERCUSSIVE SOUNDS
    } else if (keyCode == 49) {
        console.log("1");
        delay.process(sound7, delay_time, feedback, filter_freq);
        sound7.play();
        bgvalue = random(1, 255);
    } else if (keyCode == 50) {
        console.log("2");
        delay.process(sound2, delay_time, feedback, filter_freq);
        sound2.play();
        bgvalue = random(1, 255);
    } else if (keyCode == 51) {
        console.log("3");
        // reverb.process(sound3, 2, 2);
        delay.process(sound3, delay_time, feedback, filter_freq);
        sound3.play();
        bgvalue = random(1, 255);
    } else if (keyCode == 52) {
        console.log("4");
        delay.process(sound4, delay_time, feedback, filter_freq);
        sound4.play();
        bgvalue = random(1, 255);                
// DRONE SOUNDS
    } else if (keyCode === UP_ARROW) {
        console.log("UP arrow");
        reverb.process(sound5, RT, decay);
        drone_idx = 0;
        bgvalue = [random(1, 255), random(1,255), random(1,255)];
  } else if (keyCode === DOWN_ARROW) {
        console.log("DOWN arrow");
        reverb.process(sound6, RT, decay);
        drone_idx = 1;
        bgvalue = [random(1, 255), random(1,255), random(1,255)];
  } else if (keyCode == LEFT_ARROW) {
        console.log("LEFT arrow");
        sound1.disconnect();
        reverb.process(sound1, RT, decay);
        drone_idx = 2;
        bgvalue = [random(1, 255), random(1,255), random(1,255)];
  } else if (keyCode == RIGHT_ARROW) {
        console.log("RIGHT arrow");
        reverb.process(sound8, RT, decay);
        drone_idx = 3;
        bgvalue = [random(1, 255), random(1,255), random(1,255)];
  }
}

### In conclusion:
Dmitry had used a lot of time on the mapping on the qwerty keyboard, and it worked perfectly to use this solution anyway, thus the group decided to not spend time using mapping the midi keyboard. After all - we had made an instrument we were very satisfied with - and it was possible to be played by multiple persons at the same time! 
<iframe width="560" height="315" src="https://www.youtube.com/embed/7UzxM-bNzNo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

The Percampler is an instrument playing on the ambiguity of technology and the fluidity between the digital and analog worlds. It can be realised as a simple 4-channel audio gate and built into a digital app or a VST plugin, or it can be incorporated into an analog modular synthesizer setup, with tangible controls and analog sound sources. It is very open for interpretation, and this is what makes it so fun to play with! 

As a closing remark, big thanks to Anna Xambó for an incredibly engaging and FUN week! We learned a lot, built our own prototype, and had a great time learning, doing, and learning by doing.
