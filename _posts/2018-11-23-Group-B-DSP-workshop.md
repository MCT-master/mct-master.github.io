---
layout: post
title:  "Group B, DSP workshop"
date:   2018-11-23 13:50:00 +0200
categories: digital-audio
author: Mari Lesteberg, Ashane Silva, Shreejay Shrestha, Eigil Aandahl
image: /assets/image/2018_11_23_stefanof_mariashane.jpg
excerpt: "The 4 day DSP workshop introduced some basics of Digital Signal Processing techniques. We were given examples in Csound that focused on physical modeling of a string, and also how to use Csound as a DSP-tool. The exercises allowed us to take ownership of the codes by modifying and creating new sounds. We used simple operations like addition and multiplication to process the digital signals. We enjoyed experimenting with digital waveguides to model sounds travelling through strings and also manipulating with reverbs delay, envelope etc. Trondheim team also built an instrument with a piece of wood connected to a contact mic and used it in some of the tasks."
---

<figure>
<img src="/assets/image/2018_11_23_stefanof_mariashane.jpg" alt="csound" width="70%" />
</figure>

## Abstract

The 4 day DSP workshop introduced some basics of Digital Signal Processing techniques. We were given examples in Csound that focused on physical modeling of a string, and also how to use Csound as a DSP-tool. The exercises allowed us to take ownership of the codes by modifying and creating new sounds. We used simple operations like addition and multiplication to process the digital signals. We enjoyed experimenting with digital waveguides to model sounds travelling through strings and also manipulating with reverbs delay, envelope etc. Trondheim team also built an instrument with a piece of wood connected to a contact mic and used it in some of the tasks.

## C stands for Crazy

Until now, the DSP workshop must have been one of the funniest weeks of the MCT Introduction course, and one of the weeks with the steepest learning curve for several of us. The week started with a Csound test that was unbelievably difficult for some of us, and more easy for others of us. Those of us who thought the test was difficult, were maybe a little worried about what this week would be bringing of challenges. At least *one* of us, was worried if this week was going to include a lot of math. As it seemed like Csound mostly was a program for solving math problems, not making music... or?

<figure>
<img src="/assets/image/2018_11_23_stefanof_kulsupersynth.jpg" alt="Mari's synthesizer" width="50%">
    <figcaption>Mari's supersynth </figcaption>
</figure>

## Go ahead and make something!

Fortunately for this one group member, we didn’t need to solve a lot of math problems during this week. No, this was so much more fun than math! From day one, we were able to try out things on our own in Csound. For most of the people located in Oslo, we were stuck with some confusion when after only a short introduction to Csound, the teachers just said: “Now, go ahead and make something!”. For those of us who had never been into Csound before, who had barely been doing any code before, this was scary. And a little annoying. What were we supposed to make? And how?

Ashane and Mari found a group room, and pretty soon our annoyance was turned into joy and amusement. By slightly manipulating the example codes, we were able to make some pretty cool sounds. Just listen to this crazy stuff Mari made:

<figure align="middle">
<audio controls="">
<source src="https://docs.google.com/uc?export=download&id=1GMK5EI36q390Tzh2_Mdzv0_t126De8oW" type="audio/wav" volume="0.2">
Your browser does not support the audio element.
</audio>
<figcaption>Crazy sound. Warning! This might be loud</figcaption>
</figure>

Bit by bit we were able to make more crazy sounds, and then we learned how to make crazy melodies. Here is another “song”:

<figure align="middle">
<audio controls="">
<source src="https://docs.google.com/uc?export=download&id=1PWixqKyf3nCUudTCCbSlQ6OYmI6CMPnL" type="audio/wav" volume="0.2">
Your browser does not support the audio element.
</audio>
<figcaption>Crazy song. Warning! This might be loud</figcaption>
</figure>

In Trondheim, Shreejay and Eigil worked on making impossible models of strings that resonate in series of itself, showing that DSP opens up for instruments not constrained by physical acoustics. Working incrementally, we started using audio from a contact microphone to excite our virtual strings and even change the pitch with MIDI control. Together we could play on a stick that sounded like a string.


## Making new instruments and plugins

On Thursday, we learned how to make VST instruments and plugins with Csound and Cabbage, which took it all to a new level. Now it wasn't just experimenting with crazy sounds, now we were able to make tools and instruments we could use for performance and music production. This day we also were able to do a cross-campus improvisation performance that we recorded:

<figure align="middle">
<audio controls="">
<source src="https://docs.google.com/uc?export=download&id=1-SeC_gOKCe3Pzorc5WOeMHVoNlWhPPcf" type="audio/mp3" volume="0.2" >
Your browser does not support the audio element.
</audio>
<figcaption>Shreejay and Mari's improv</figcaption>
</figure>

Mari used a midi keyboard to play the VST instrument she made, which was based on a basic saw synth from the [Cabbage beginner page.](http://cabbageaudio.com/docs/beginner_synth/?fbclid=IwAR3GcRXna3ib5dgD0J8BTKjtalecbLCgwL0fv_ZaH3DiFhJVPeDIW9VoDS4 "Cabbage beginner synth")  From Oslo she was able to manipulate the synth with reverb and ring modulator-effects, also made in Cabbage and Csound.

Ashane’s set up was made with a plugin consisting a reverb, delay and a saturation. The delay time was set to 200ms. The reverb and saturation can be controlled from knobs. This was used in combination with a percussion patch loaded in Ableton live.  The drum kit was loaded into a midi track and routed to the VST to make long repetitive kick, snare and cymbal sounds. The main idea was to provide some kind of a rhythmic pulse in the performance.

Then the two sound signal was sent to Trondheim through LoLa for further processing. The Trondheim team made an effect that sent the signal from Oslo through a virtual string that could be manipulated by playing on a midikeyboard and then add reverb.

Then the signal was sent back again, and we think the result was a very nice and relaxing ambient soundscape. Quote from one of Mari's friends: "I could listen to this a whole day".

<figure>
<img src="/assets/image/2018_11_23_stefanof_supersynth.jpg" alt="csound" width="50%">
    <figcaption>Csound running with Cabbage in Reaper</figcaption>
</figure>


<br> <br>
## Performing with LoLa

The final day of the workshop was leading up to a group performance using LoLa to play with the instruments and effects we had made. On the Oslo side, we used a lot of time this day to set up things in the portal, moving everything around in the room to find the best set-up for this final performance. After moving one of the screens to the middle of the room, a jungle of wires and cables was revealed as we connected our intruments.

Shreejay couldn't join us that day, so our instrument would consist of three "nodes" with Mari's Csound synthesizer being the first in the chain. Before our soundcheck, we were discussing what kind of structure we wanted for our performance. We decided that Mari was starting, by playing long notes on her Cabbage synth. Then the signal went to be processed in Trondheim by Eigil before being sent back to Oslo and Ashane's processing. Ashane's sound was then sent back again to Eigil a second time and the final result was played in both cities. This might be a bit confusing, so we have made this helpful diagram to illustrate the connection:

<figure>
    <img src="/assets/image/2018_11_23_stefanof_group_B_DSP_diagram.png" alt="signal diagram" width="50%">
         <figcaption>Our performance signal path</figcaption>
</figure>


We tested out our signal levels and routing with a soundcheck to make sure it was working. The performance started out as a very mellow ambient sound and the percussive elements joined later. It felt really comfortable playing through Lola with amazing sound quality. The processing from the Trondheim side added a unique flavour to the sound, and was exactly what we were hoping to accomplish.  

Here is a video clip and an audio recording from our performance:

<iframe width="560" height="315" src="https://www.youtube.com/embed/ylhL8e20YFI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<figure align="middle">
<audio controls="">
<source src="https://docs.google.com/uc?export=download&id=1JVc2gi7LViTkYmPLBlSsHxBZku0goWt4" type="audio/wav" volume="0.2" />
Your browser does not support the audio element.
</audio>
<figcaption>The beginning of our performance recorded in Trondheim</figcaption>
</figure>
