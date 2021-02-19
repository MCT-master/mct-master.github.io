---
layout: post
title: "Trinity: Triple Threat"
date: 2021-02-18 18:00:00 +0200
categories: audio-programming
author: Abhishek Choubey, Tom Ignatius, Lindsay Charles
image: /assets/image/2021_18_02_abhishec_trinity_trinity.jpg
keywords: audio programming, effect, Audio, DSP, Music, Csound, Reverb, Chorus, Granular, Shimmer, modulation
excerpt: "Trinity: What happens when you combine Grain shimmer + Chorus + Stereo Width? Click to find."
---



# TRINITY

TRIPLE DSP FOR TRIPLE THE FUN


## CONCEPT

***What is Trinity?***

**Trinity** is a Granular Shimmer/Chorus effect programmed to create a distinctive space manipulation through the use of granular processing and modulation.

In developing the effect, the workload was spread out into three sections allocated to each of us.

	1.	Shimmer Reverb - Tom Ignatius
	2.	Chorus - Abhishek Choubey
	3.	Stereo Spread - Lindsay Charles


The eventual individual processing would be then summed accordingly through the various ins and outs of the Csound code.



## SIGNAL FLOW:

<figure style="float: none">
   <img src="/assets/image/2021_18_02_abhishec_signalflow_trinity.png" alt="Alternate Text" title="Image Title" width="auto" />
   <figcaption>Caption Text</figcaption>
</figure>
The signal flow of Trinity is simple and linear with a few quirks to give it its signature sound. The inputs of the DAW go into the shimmer then into the chorus and lastly processed through the width matrix at the end. However, what makes the effect complex is the feedback of the granular processing is fed by the chorus output and not the first pass of the shimmer.

The chorus operates with four voices. Two voices are assigned to each of the two inputs. The resulting output of the chorus is 4 channels that are then fed to the width and pan control that allows for those 4 voices to be spread in the stereo field.



## THE ELEMENTS

***Shimmer:***

<figure style="float: auto">
   <img src="/assets/image/2021_18_02_abhishec_shimmer_trinity.png" alt="Alternate Text" title="Waveform, ascending RMS loudness" width="300" height="auto"/>
   <figcaption><i></i></figcaption>
</figure>

The Shimmer effect’s engine is based on Øyvind Brandtsegg’s Partikkel Reverb. It’s not meant to sound like a replication of a true space but a creative stretch of the original audio files. To increase the resolution of the sampling, I modified the code to allow for 8 waveforms to be stretched out. To be able to compensate for restrictions of the partikkel, I duplicated the [partikkel](http://www.csounds.com/manual/html/partikkel.html) opcode to allow for the 8 sampled sections.

The feedback input is processed post to the chorus effect. The 4 signals are summed and sent back to the granular element allowing for an even richer palette of sounds.





***Chorus:***

<figure style="float: auto">
   <img src="/assets/image/2021_18_02_abhishec_chorus_trinity.png" alt="Alternate Text" title="Waveform, ascending RMS loudness" width="300"/>
   <figcaption><i></i></figcaption>
</figure>


This is an extension of the chorus effect in my plugin Butter, which I created in my physical computing module in the first semester. Although it uses the same opcode for delaying the signal the process is very different in this one. The chorus now combines four instances of the opcode called [vDelay](http://www.csounds.com/manual/html/vdelay.html) which is an interpolation time delay function. The delay time is modulated by an oscillator and the frequency of this oscillator is controlled by the user. Each instance uses this combination and produces four chorused signals for a deeper output. The phase of the oscillator which is controlling the delay-time is different in each instance that spawns a slightly varied signal creating a lush chorus.

The four outputs of the chorus as mentioned before are fed back into the reverb producing a richer sound. The final output coming out of the chorus unit is then fed into a highpass filter which can be controlled by the user. There is also an option to phase the dry signal feeding into the delays, by utilizing the phase knob.


***Stereo Width:***

<figure style="float: auto">
   <img src="/assets/image/2021_18_02_abhishec_width_trinity.png" alt="Alternate Text" title="Waveform, ascending RMS loudness" width="300"/>
   <figcaption><i></i></figcaption>
</figure>


The initial idea for this effect was to have 2 incoming channels which will be processed into a stereo field, each having Width and Panning parameters respectively. But we decided that as  the chorus is sending out 4 delayed channels excluding the dry signal, the width will use these  4 channels and place them at different positions into a stereo field. The position of the signal can be controlled by the width parameter. The Pan knob pans the signals to right or left.
Each signal is placed so that the chorus delays are equally distributed and the dry signal is in the center or in mono.
When the Width is to the extreme left or zero position, the signals are squashed at the center making it mono, on the other hand when the Width is on the other extreme or One Position, the signals are spread out in the stereo field.
The Panning effect can only be noticed when the width is less than maximum as the signals will be spread out the farthest at maximum width causing no change in pan.



## ARCHITECTURE & DESIGN


<figure style="float: auto">
   <img src="/assets/image/2021_18_02_abhishec_trinity_trinity.jpg" alt="Alternate Text" title="Waveform, ascending RMS loudness" width="400"/>
   <figcaption><i></i></figcaption>
</figure>


The design of Trinity is based on Retrowave aesthetics rooted in the 80’s. It goes from the top left, bottom left and then into the width and wet sections.

The architecture of the program was to restrict the effects from being rearranged and used purely as a chorus or just as a shimmer. Trinity is therefore not a multi-effect plugin but purely an effect of it’s own character. Therefore, it only ranges from the original signal to the “trinity” effect adjustable between them through the dry and wet.


## DEMO


<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1QPOWB4IEUttN6ckXWfQ6DQdrxCHOhURx/preview" width="640" height="360" frameborder="0" allowfullscreen></iframe>
   <figcaption>Trinity_Demo</figcaption>
</figure>


**Download Trinity here** [Trinity](https://drive.google.com/file/d/13B5mM7f4-Aeq9u3DqZ59jE3LZe58rcVn/view?usp=sharing)

## FINAL THOUGHTS: REFLECTIONS


***Iggy:***

The process of getting a grasp of the partikkel opcode was almost impossible in the time frame. At the final stages of this process, I am still in the process of trying to understand the code used. However, within the two weeks of active programming, I have been able to translate some of my reaktor knowledge into Csound to allow me to add the finishing touches of the code.

As a recreational UX/UI designer, it gave me an opportunity to give the plugin a design language. In this case, it was a retrowave aesthetic. However, thinking back, I would love to be able to implement filmstrips into the plugin allowing for a more distinctive look compared to the standard knobs available with Csound.

There was an initial lack of communication in my group resulting in a misunderstanding of the infrastructure of the plugin however we’ve managed to pull through in finishing the plugin.




***Abhishek:***

These two weeks were exciting, I learned a lot about DSP and Csound and made a combination of some of my favorite effects, also working with Lindsay and Iggy was fun and interesting, they both taught me a lot about audio in general. We had a communication gap initially which made the direction of our project ambiguous but in the end, we managed to work towards a common goal and it turned out pretty well.
This time it felt much easier to work with Csound in comparison to the short module we did in our first semester because of the basics we learned then. I am not fully satisfied with the output, I think we can fine-tune it a lot more. I feel if the course was longer we would have managed to make a more polished instance of Trinity, but that’s what we will continue working on to develop a better version of our retro-designed plugin. On another note, I feel the chorus in itself produces a very rich and wide sound so I will also be making a standalone part of it.



***Lindsay:***

Since the last semester, although working on Csound has gotten easier, the increase in learning and usability curve has taken more time than I thought it would.
Working on this project has given me more insight into the spatial world and a better understanding of how the signals are developed for stereo. The integration between the effect chain was not as difficult as I imagined, which gave me time to understand the blocks.
The “Trinity” is definitely going to be my favorite plug-in to use among other shimmers, I think the output that we have attained is quite close to the one we planned to execute, despite some setbacks with Stereo Panning.     
