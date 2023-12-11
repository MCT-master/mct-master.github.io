---
layout: post
title: "Setting Levels in Virtual Communication"
date: 2021-11-26 21:51:00 +0200
categories: networked-music
author: Jarle Steinhovden
image: /assets/image/2021_11_26_jarlefst_submix.png
keywords:  acoustic-feedback, puredata, max-msp, midi, osc, rme, totalmix, midas-m32
excerpt: "Inspired by how virtual communication has been adopted and integrated in daily life around the globe, this post looks at how simple control messages might help prevent acoustic feedback."
---


<img src="https://drive.google.com/uc?export==view&amp;id=11UGcmpTdXJjXk3cMGnei5QHyx2t0zXdX" alt="fader_snake" style="width:100%;height:width/2.56px;">


##  Audio Feedback / LOLA / ZOOM / & MIDI


---
<br>  

### Looking Back - and Feedback


__As 2021__ comes to an end, a particular virus might hopefully find its way to follow. A look back on all of what two years of special measures has brought to change - and without wish or patience to circle round any darker corners - it is apparent that _virtual communication_ has arrived. It certainly had to - and also: it works.


<br>  


__MCT_Portal__ virtual communication persists in 2021 through lectures and seminars, group collaborations, and scattered non-academic pursuits. Well documented throughout this blog - the MCT_Portal is the audio/video link connecting students in Trondheim (NTNU) and Oslo (UiO) and part-takers from around the globe joining classes and workshops via ZOOM.  



__The particulars__ of the Portal audio-communication architecture engender some seemingly inherent artifacts. Seeking to squeeze every drop of intelligibility from the LOLA sound, anyone might be tempted to turn the volume up just a little too far. Resulting is the much dreaded ***Audio Feedback***.  


<figure align="center">
  <img src="https://drive.google.com/uc?export=view&amp;id=1aPN3BXXObHI1NiIddxMZdJT-TH7r2UK2" alt="Audio Feedback in the MCT Portal" style="width:480px;height:auto;">
  <figcaption>fig. 1 - <i>Portal feedback is not usual feedback</i> -</figcaption>
</figure>



__Rules of audio thumb__ dictate that microphones should not be routed to nearby loudspeakers if avoidable. The amplified signal from the loudspeakers potentially _bleeding_ back into the microphones, and if gained to hot, causing a self-amplifying loop.

__Where multiple microphones__ in Trondheim and Oslo are _live_ by default - receiving and transmitting once the power is turned on - the MCT_Portal has its inherent feedback structure. Although local loudspeakers do not amplify local microphones - Oslo mics are not sent to Oslo speakers, Trondheim mics are not sent to Trondheim speakers - the system itself constitutes an augmented audio loop. As _fig.1_ illustrates - if the gain staging done at both communication nodes is set too hot local microphones might very well receive their own amplified signal, only by the detour of the other nodes' loudspeakers and microphones.  

__Complicating things__ further is the transitory latency governing the Trondheim/Oslo communication.  Once acoustic feedback has occurred in the system, the initial response is naturally: mute everything! Just make that howling noise disappear! To later establish what instigated the problem has proven particularly tricky. The Portal audio moves so counterintuitively that traditional approaches to feedback-reduction (EQing, Gating) have fallen short.

__And yet,__ rules of thumb, again, dictate that if acoustic feedback occurs, it is because IT IS TOO LOUD! Gain the microphones DOWN by 6dB - or even 12dB - and that incessant ringing disappears.  

---
<br>  

### Looking forward  


__Cooperative communication__ in 2020 and 2021 has been exercised by speaking into a computer keyboard while looking at a small screen. Regardless of age, education,  ethnicity, gender - regardless of most any socio-cultural context or geographical divide - people have learned to adopt a new language allowing those communications to be good ones.  

__ZOOM, Teams, and Skype__ have some very impressive echo-canceling algorithms working to make the laptop meeting more pleasant. But more important still might be the _unmute_ button. Simply turning the microphone off when not using it is an excellent idea. If everyone does their part - acoustic feedback becomes a non-issue.  


__Which has inspired__ this simple proposition:

---
<br>  

### Fighting Audio Feedback with MIDI

__The quickSet_TotalMix.pd__ patch is directly inspired by the mentioned unmute buttons of ZOOM et al. With simple, customizable keystrokes or similarly settable MIDI ControlChange messages - or MIDI notes - the patch sends six presets to safeguard against acoustic feedback. [[download_patch](https://drive.google.com/file/d/1_37MblkcVWLT2fKEMnbnaaav2QXkXb8p/view?usp=sharing "Download the folder including /abstractions for fully functioning patch - Patch is pure-vanilla.pd with no other dependencies")]


<figure align="left">
  <img src="https://drive.google.com/uc?export=view&amp;id=1i1M1bTu9Q8xFYPFB80TvQq3QkcR7yOIS" alt="TotalMix and PureData">
  <figcaption>fig. 2 - <i>TotalMix submixes reflected in the quickSet_patch</i> </figcaption>
</figure>






__This control is made__ possible by the technological backbones providing for the Portal virtual communication. [LOLA](https://lola.conts.it): the "Low Latency AV Streaming System" requires one of six [RME]( https://www.rme-audio.de/home.html) Audio Interfaces to operate. All of these sound cards utilize the MIDI programmable _TotalMix_ software as the graphical user interface.


__Selecting a TotalMix__ output operates similar to a _Sends On Fader_ function - as found in many digital mixing consoles. _fig. 2_ shows how the quickSet_patch has mapped the four input-faders directly corresponding to their output mix. This way, the quickSet_patch affords an intuitive hands-on control of any sub-mix fader. In turn, allowing for triggering six sub-mix presets affecting all outputs. Three of these presets are seen at the top of _fig. 2_

__The__ ___"... is talking"___ presets give that when one of the LOLA nodes is talking, the other nodes' microphone outputs are attenuated by -20dB. A particularly safe buffer against that looping signal from _fig. 1_. If _"ZOOM is talking"_ or _"MUSIC is playing"_ both LOLA nodes microphone outputs are attenuated. A _"Default"_ preset sets all microphone outputs to an equal level at -6dB - again, a safety buffer. Finally, there is a _"MUTE ALL"_ preset - because, well... Just in case.  


<br>  


<figure align="left">

### MIDI setup

<img src="https://drive.google.com/uc?export=view&amp;id=1dCT-W5Nyq40RCwHku6OlHdPCgnQlfFCo">
  <figcaption>fig. 3 <i> MIDI-setup in PureData and TotalMix </i> </figcaption>

</figure>



__Routing MIDI__ from the quickSet-patch to TotalMix and LOLA is relatively straightforward. Although LOLA is Windows only, and internal MIDI-routing can be cumbersome, all LOLA-compatible RME sound cards have dedicated MIDI-ports. This makes possible for the quickSet_PureData-patch to send its information through _any_ MIDI interface that utilizes standard 5-pin DIN-cables directly into the LOLA operating RME-card as illustrated in _fig. 3_. Here: the TotalMix MIDI input port is set to its own Fireface UCX input. Set the PureData MIDI input to what controller one wishes to use

**!*NOTE*!** the _PureData MIDI Output_ sending control messages to TotalMix must be set to the **topmost** of the _Output Devices_ slots for the quickSet_patch to operate as intended straight out of the box (seen left in _fig. 3_).  


<br>  


### For the Future...

__There is much__ still wanting in the quickSet_patch. A preset storing system... OSC routing... Optimizing MIDI timing... As it is, it also "requires" another fixture of the laptop meeting: _The Moderator._ Perhaps a path forward is with automating these tasks? Assuming that with use in real-world application, there might be arise more questions than answers...

... but hopefully less __Audio Feedback__


---
<br>  

<img src="https://drive.google.com/uc?export=view&amp;id=1C8HsXwgQn3DvwlUB3AG2ZYQrxc8WKlu7" alt="M32 fader Wave" style="width:100%;height:auto;">

__POST SCRIPT__  --- These somewhat hypnotizing silver sinewaves are the faders on a Midas M32 mixing console. Controlling the M32 - another fixture in the MCT_Portal setup - is another path to reducing feedback. Next year then...
__Though serving__ no sensible purpose for any audio - and disregarding the absolute racket emanating from twentyfive hardworking motorized faders - there is a particular satisfaction in sending some MIDI-messages from a [MaxMSP_patch](https://drive.google.com/file/d/1BhlUMk2YPaMMHXPfJ-hrCUCUOzIejjTC/view?usp=sharing "set the MIDI-menu to correspond to the M32 and make waves!") to set some things in motion.


... so a huge thanks to Joni Mok for all help, reflections, inspiration, and drive!!


---
<br>  


__FURTHER READING:__



* A fantastic resource on DSP to minimize acoustic feedback:
  * https://www.ranecommercial.com/legacy/note158.html  


* The TotalMix MIDI-implementation chart:
  * http://rmouneyres.free.fr/puredata/MIDI_Assignigation_TotalMix.pdf  


* A 5-minute video explaining and demonstrating how to maximize signal quality from any speaking-microphone:
  * [Sound Advice for Intelligible Audio](https://www.ranecommercial.com/legacy/video-5-minute-gain-structure-part2.html)  

<br>  
<br>  
<br>  

![subMix](https://drive.google.com/uc?export=view&amp;id=1jD5r-kUvaGPPzdfKoV6oM3wNZ2YdKGpG)
