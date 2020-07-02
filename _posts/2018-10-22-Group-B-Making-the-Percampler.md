---
layout: post
title:  "Group B, Making the Percampler"
date:   2018-10-22 12:10:00 +0200
categories: physical-computing
author: Mari Lesteberg, Dmitry Vasilev, Ashane Silva, Shreejay Shreshta, Eigil Aandahl
image: /assets/image/2018_10_22_aleksati_percampler_header.jpg
excerpt: "The Final day of the physical computing was based on creating a custom made instrument based on the knowledge and experience gained from the past three days. We had to figure out if we wanted to make one instrument, which could be played across the two campuses, or if we would choose to make two different instruments that could complement each other."
---

<img src="/assets/image/2018_10_22_aleksati_percampler_header.jpg" alt="Trondheim Percampler instrument">

## The Percampler:
The Final day of the physical computing was based on creating a custom made instrument based on the knowledge and experience gained from the past three days. We had to figure out if we wanted to make one instrument, which could be played across the two campuses, or if we would choose to make two different instruments that could complement each other.

In the morning we brainstormed different ideas about what exactly we could be able to build in the limited amount of time given (Only Three Hours!!!). We decided that it would be most fruitful to build two different instruments, one in each city. However, "both" instruments were to be complementary, and furthermore had to fit into the concept decided by the group - a digital-analog hybrid percussive instrument that combined different technologies and sound sources that we had explored during the past workshops - the javascript digital sampler and the analog Korg LittleBits kit. With the final concept in place, we decided to aptly call our analog-digital hybrid percussive sampler the “Percampler”.

From Trondheim, Eigil and Shreejay suggested the idea on using a contact microphone as an input for the LittleBits and producing beats and percussive elements in real time. The idea was to incorporate the soundwalk and circuit sniffing techniques for real-time sound sampling into the Percampler. This idea perfectly fit the analog-digital hybrid concept, and while performers in Oslo played with the digital sampler, performers in Trondheim supplied the analog sounds, noises, and feedback by utilising the contact mic, cymbals, and an amplifier connected to the LittleBits delay effect to produce and alter sounds through analog means. The instrument was packaged together in a portable design as can be seen here:

<figure>
  <img src="/assets/image/2018_10_22_aleksati_trondheim_percampler_inside.jpg" alt="Trondheim Percampler LittleBits">
  <figcaption>Inside the Trondheim Percampler instrument</figcaption>
</figure>

The digital aspect of the Percampler was based upon the sampler we had learned to make with javascript during the first workshop. Dmitry had worked a lot on his version of the sampler, adding effects and mapping the different sounds and effects to different keys of the qwerty keyboard, allowing to change the delay time, reverse the sample, and pitch the sounds by changing their playback rate. All of the sounds in the sampler were recorded during the sound hunting excursion of the first workshop. The coded digital sampler was connected to the microphone module of the LittleBits kit with a mini jack cable. By adding the sequencer module to the signal chain, we were able to treat any sound percussively, with the sequencer module of the LittleBits kit acting as an analog audio gate (or in fact 4 audio gates, the volume of which could be individually adjusted to produce rhythmic variations and glitchy stutter effects). This turned out to work perfectly, and thus the Percampler - the percussive sampler was realised. With the addition of an analog delay and filter modules this also solved the challenge of making one instrument that could be played by multiple persons at the same time! Dmitry controlled the sampler from his computer, Ashane and Mari controlled the LittleBits sequencer and other knobs on the effects of the Little Bits modules.

Besides the analog effects, the analog nature of the Percampler was based upon the real-time circuit sniffing and soundwalk techniques - the idea of finding sounds and interferences in everyday objects. In Trondheim, Eigil and Shreejay used a contact mic as the input, a cymbal and other items to produce sounds, as well as a portable speaker built into the "body" of the Percampler to produce feedback and noise.

### Trouble in Paradise:
As it worked so well to connect one input source to the Little Bits kit, we thought that it could be interesting to also use the "handwaving smartphone-instrument" to the LittleBits chain. Sadly, not only Mari's phone wouldn't collaborate, but none of our phones! We used some time to troubleshoot, but figured out that this was a waste of time. However, maybe it wouldn't alter the quality of our instrument to bring an extra chain of sound, sometimes it's for the best to keep things simple.

Additionally, Mari had brought her colourful MIDI keyboard, hoping that we could use it together with the sampler. She had successfully made it work together with musical applications made with Pure Data before, so why not make it work together with Javascript as well? But with no pre-experience in javascripting, except from the little we have learned though this course, it proved very difficult to figure out how to do it. We had to give that up and just settle with what we had.

### Digital Sampler in-depth:
The javascript of the sampler is attached at the end, for anybody willing to try it out. The sampler used in the performance was fitted with 4 drum sounds and 4 "melodic" sounds (e.g. sounds of a discernable frequency).

The under-the-hood elements of the sampler include variable delay time mapped to the Z and X buttons of the keyboard (X increases the delay time by 0.2 seconds, Z decreases it by the same amount), the ability to reverse sounds by pressing R (works great for turning percussive samples with long "tails" into swelling drones), the ability to loop-play sounds to create rhythmic collages by pressing L, as well as the ability to play the computer keyboard like a real piano, changing the pitch of the melodic sounds by affecting the playback rate. If you want to change the sound of you keyboard, just press the up/down/left/right arrow to select one of the four melodic sounds (provided you set the sounds accordingly when you run the example below).

For the melody - say, you want to play a C note, corresponding to 131 Hz, but the sampled melodic sound is 104 Hz. Well, simply divide 131 Hz by 104 Hz and set the playback rate to the result, and voila, your sample is now sped up to match the note C. Or let's say you want to play the sound in reverse (perhaps you're looking for hidden satanic messages in your drums). Simply set the playback rate to negative one. For the javascript implementation of the aforementioned things and more, see the code [here](https://docs.google.com/uc?export=download&id=1TFDzJsfwvtM8EY8jkZr5MC5TOywQqCPB).

### In conclusion:
Dmitry had used a lot of time on mapping the keyboard, and it worked perfectly to use this solution. Thus the group decided to not spend time mapping MIDI to control the instrument. After all - we had made an instrument we were very satisfied with - and it was possible to play it by multiple people at the same time!
<iframe width="560" height="315" src="https://www.youtube.com/embed/7UzxM-bNzNo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


The Percampler is an instrument playing on the ambiguity of technology and the fluidity between the digital and analog worlds. It can be realised as a simple 4-channel audio gate and built into a digital app or a VST plugin, or it can be incorporated into an analog modular synthesizer setup, with tangible controls and analog sound sources. It is very open for interpretation, and this is what makes it so fun to play with!

As a closing remark, big thanks to Anna Xambó for an incredibly engaging and FUN week! We learned a lot, built our own prototype, and had a great time learning, doing, and learning by doing.
