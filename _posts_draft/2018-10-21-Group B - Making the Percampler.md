---
layout: post
title:  "Group B, Making the Precampler"
date:   2018-10-21 17:35:00 +0200
categories: Physical computing
author: Mari Lesteberg, Dmitry Vasilev, Ashane Silva, Shreejay Shreshta & Eigil Aandahl
comments: true
---

The Final day of the physical computing was based on creating a custom made instrument based on the knowledge and experience gained from the past three days. We had to figure out if we wanted to make one instrument, which could be played across the to campuses, or if we would choose to make two different instruments that could compliment each other. 


In the morning we brainstormed different ideas about what exactly we could be able to build in the limited amount of time given (Only Three Hours!!!). We decided that it would be most fruitful to build two different instruments, one in each city. In Oslo, we decided on this cool concept of combining the digital and analog worlds that we had explored during the past workshops. We called it an analog digital hybrid percussive synthesizer aka “Percampler”.


From Trondheim, Eigil and Shreejay suggested the idea on using a contact microphone as an input for the little bits and producing beats and percussive elements.

## The Percampler:

The initial idea of the Percampler was based upon the sampler we had learned to make with javascript during the first workshop day. Dmitry had worked a lot on his version of the sampler, adding effects and mapping the different sounds and effects to different keys of the qwerty keyboard. All of the sounds in the sampler was recorded during the soundwalk the first day. Then we experimented by connecting the sampler to LittleBits with a mini jack cable. This turned out to work perfectly! This also solved the challenge of making one instrument that could be played by three persons at the same time. 
As it worked so well to connect one input source to the Little Bits kit, we thought that it could be interesting to also use the "handwaving smartphone-instrument" to the LittleBits chain. Sadly, not only Mari's phone wouldn't collaborate today, but none of our phones! We used some time to troubleshoot, but figured out that this was a waste of time. However, maybe it wouldn't alter the quality of our instrument anyway, to bring an extra chain of sound, some times it's for the better to keep things simple. 


But Mari had brought her colourful MIDI keyboard today, hoping that we could use it together with the sampler. She had successfully made it work together with musical applications made with Pure Data before, so why not make it work together with Javascript as well? But with no pre-experience in javascripting, except from the little we have learned though this course, it proved very difficult to figure out how to do it. We had to give that up as well, and just settle with what we had. However, Dmitry had used a lot of time on the mapping on the qwerty keyboard, and it worked perfectly to use this solution anyway. After all - we had made an instrument we were very satisfied with - and it was possible to be played by three persons at the same time! Dmitry controlled the sampler from his computer, Ashane and Mari controlled the LittleBits sequencer and other of the controls on the Little Bits. 


In Oslo, Dmitry, Mari and Ashane experimented on assigning multiple inputs from a smartphone, laptop and midi keyboard to a chain of little bits where it can generate percussive synthesizer sounds that corresponds to whatever the input. The initial thought was to use the java script sampler as one input where midi keyboard will be used in conjuction to trigger the sounds in the sampler. And also using a smartphone with the handwaving web application as another input for the little bits signal chain.
