##---
layout: post
title: Music Mode for Online Meetings
date: 2022-11-27
categories: interactive-music
author: Aysima Karcaaltincaba
keywords: music, network, cisco, microsoft, zoom
excerpt: "It is possible to use popular meeting products for music!"
---

Online meetings and hybrid platforms have become a mandatory tool in our daily lives. Many use those platforms for educational or business purposes but from healthcare to art, hybrid communication is everywhere; but what about playing music over network?

MCT is already part of real-time music performance efforts and we have discussed that in many other blogs therefore I will try to focus on another area which is simpler and has use in many people's life: sending music by a meeting software. You may not need to perform together with someone on a very low latency connection but you may still need to transfer music to another participant in an online meeting. This may still have many problems even though the job may sound easy.

We are talking about the problems like some sounds not being heard or heard differently. I personally have been taking accordion classes during the pandemic and I can briefly say that it was a very bad experience to have to change the octave of the sound or the tone all the time in order to keep things “hearable”. 

There are many reasons behind these problems and I will try to go through the reasons for them while telling about how music mode features solve these problems. My knowledge about the topic is based on what I learned from music mode posts of commercial software products and from our talk with Bjorn Winsvold, a Principal Engineer working on music mode in Cisco Webex Room Devices. Lots of thanks to him for giving me his time and explaining to me the journey of the sound from the speaker of a participant to the microphone of another participant!

<figure>
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/img_0458.jpeg"
      style="max-height:600px; width:auto;" />
   <figcaption>Music Mode vs normal audio path as Bjorn Winsvold explained in a Webex Board</figcaption>
</figure>

The most popular meeting software platforms are focusing on creating a smooth meeting experience regardless of how quiet or meeting friendly your environment is. Therefore the success of a meeting software is very dependent on how good the noise cancellation is, how smart the software is to focus on your voice or how smooth and plain your sound is transferred to the other participants. However, the software modules that allow us to have a smooth meeting experience can also be the reasons why we have problems when we play music in a meeting.

I will talk about these modules and what kind of solutions Cisco Webex, Zoom and Microsoft Teams offer with music mode features of theirs.

<figure>
   <img src="/assets/image/2022_11_27_aysimab_microsoft.jpg"
   style="max-height:300px; width:auto;" />
   <figcaption>Music Mode in Webex</figcaption>
</figure>

**Noise cancellation & echo cancellation**

Noise cancellation is one of the best things we can get from commercial meeting software, it removes your coffee machine beeping, your washing machine screaming and gives you a plain environment to present. On the other hand, the very same algorithm detects every sound that is constant during a period as “noise” and cancels it. For example if you are an accordion or violin player and want to keep a chord for a second, then you lose it, the noise cancellation algorithm removes the sound from the channel. 

Zoom by default turns noise and echo cancellation off in music mode while microsoft teams gives you the option to cancel them yourself. On the other hand, as I was told by Bjorn, Cisco Webex does something different and increases the duration in the noise detection module to a longer time so that you can still protect your noise cancellation feature in a meeting without losing the instrument sounds.

<figure>
   <img src="/assets/image/2022_11_27_aysimab_zoom.jpg"
   style="max-height:300px; width:auto;" />
   <figcaption>High Fidelity Audio Mode in Zoom</figcaption>
</figure>

**Audio compression**

The audio needs to be compressed and decompressed therefore compression algorithms are very essential for audio quality as well. 

**Auto gain controls & audio compression**

Another optional step as part of audio transmission between participants is gain control. The purpose of this is reducing the dynamic range of gains with very loud and quiet elements in order to make them heard clearer. This also can be problematic for sending music audio as we want to keep the original. Zoom eliminates this step in music mode while microsoft teams gives the option to eliminate it to the user. Same as noise cancellation, Cisco Webex replaces this module with the one which is specialized for protecting the music audio and doing a limited gain control.

<figure>
   <img src="/assets/image/2022_11_27_aysimab_microsoft.jpg"
   style="max-height:300px; width:auto;" />
   <figcaption>High Fidelity Music Mode in Microsoft Teams</figcaption>
</figure>


**Filters, post processing**
Audio is mostly processed and filtered before other processing modules. In audio mode zoom and cisco webex says that they disable this filtering and processing steps in music mode.


### Conclusion
Long story short, it is actually possible to have music lessons when you can not meet with your teacher and as efficient as a physical lesson! You just need to know what to look for and choose the optimal software for your needs. It is also possible to use Cisco Webex Devices with Zoom or Microsoft Teams meetings so that you can benefit from both solutions’ features.

Here more information can be found about different “Music Mode” solutions of the three software platforms if you are interested to read more:

- [Music Mode for Cisco Webex Devices](https://help.webex.com/en-us/article/n5lfeod/Music-mode-for-Board,-Desk,-and-Room-Series)
- [Music Mode for Cisco Webex App](https://help.webex.com/en-us/article/h7tezj/Webex-App-%7C-Turn-on-music-mode-in-calls-and-meetings)
- [High Fidelity Music Mode in Microsoft Teams](https://support.microsoft.com/en-us/office/use-high-fidelity-music-mode-to-play-music-in-teams-c1550582-2f76-4b31-9f72-e98c7167a18e)
- [High Fidelity Audio Mode in Zoom](https://blog.zoom.us/high-fidelity-music-mode-professional-audio-on-zoom/)
