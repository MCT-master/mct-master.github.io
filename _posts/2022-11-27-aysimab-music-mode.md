---
layout: post
title: Music Mode for Online Meetings
date: 2022-11-27
categories: interactive-music
author: Aysima Karcaaltincaba
image: https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_28_aysimab_music-online.jpg
keywords: music, network, cisco, microsoft, zoom
excerpt: "It is possible to use popular meeting products for music!"
---

### What is music mode?

Online meetings and hybrid platforms have become a mandatory tool in our daily lives. Many use those platforms for educational or business purposes but from healthcare to art, hybrid communication is everywhere; but what about playing music over the network?

<figure>
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_28_aysimab_music-online.jpg"
      style="max-height:400px; width:auto;" />
   <figcaption>Performing music in an online meting, photo by Omar Prestwich</figcaption>
</figure>

MCT is already part of real-time music performance efforts and we have discussed that in many other blogs. So, I will try to focus on another area which is simpler and has use in many people's life: performing music as one direction through network. You may not need to perform together on a very low latency connection but you may still need to perform music for another participant in an online meeting. This may still have many problems even though the job may sound easy.

We are talking about the problems like some sounds not being heard or heard differently. I personally have been taking accordion classes during the pandemic and I can briefly say that it was a very bad experience to have to change the octave of the sound or the tone all the time in order to keep things “perceivable”. 

There are many reasons behind these problems and I will try to go through the reasons for them while telling about how music mode features solve these problems. My knowledge about the topic is based on what I learned from music mode posts of commercial software products and from our talk with Bjørn Winsvold, a Principal Engineer working on music mode in Cisco Webex Room Devices. Lots of thanks to him for giving me his time and explaining to me the journey of the sound from the speaker of a participant to the microphone of another participant!

<figure>
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_28_aysimab_music_mode.jpeg"
      style="max-height:600px; width:auto;" />
   <figcaption>Music Mode vs normal audio path as Bjorn Winsvold explained in a Webex Board</figcaption>
</figure>

The most popular meeting software platforms are focusing on creating a smooth meeting experience regardless of how quiet or meeting friendly your environment is. So it wouldn't be wrong to say that the success of a meeting software is very dependent on how good the noise cancellation is or how smooth and plain your sound is transferred to the other participants. However, the software modules that allow us to have a smooth meeting experience can also be the reasons why we have problems when we play music in a meeting.

I will talk about these modules and what kind of solutions Cisco Webex, Zoom and Microsoft Teams offer with music mode features of theirs.

<figure>
   <img src="/assets/image/2022_11_27_aysimab_microsoft.jpg"
   style="max-height:300px; width:auto;" />
   <figcaption>Music Mode in Webex</figcaption>
</figure>

**Noise reduction**

Noise reduction is a very useful feature we can get from commercial meeting software. It removes your coffee machine beeping constantly, your washing machine screaming and gives you a plain environment to present by removing static noises. On the other hand, the very same feature may think of music as noise and remove it too. For example if you are an accordion or violin player and want to keep playing a chord for a second, then the noise reduction algorithm may remove the sound by accepting it as “noise”. 

In music mode, webex keeps the noise reduction module but increases the duration it uses in order to categorize a constant sound as “noise”. Zoom doesn't tell much about noise reduction but it says it turns echo cancellation off in music mode while microsoft teams gives you the option to remove the feature yourself.

<figure>
   <img src="/assets/image/2022_11_27_aysimab_zoom.jpg"
   style="max-height:300px; width:auto;" />
   <figcaption>High Fidelity Audio Mode in Zoom</figcaption>
</figure>


**Audio compression**

The audio needs to be compressed and decompressed because most of these solutions are using standard audio codec for the transmission of the audio packets. This also means compression algorithms are very essential for audio quality. For music mode, the compression algorithm and compression rate becomes even more important.

<figure>
   <img src="/assets/image/2022_11_27_aysimab_microsoft.jpg"
   style="max-height:300px; width:auto;" />
   <figcaption>High Fidelity Music Mode in Microsoft Teams</figcaption>
</figure>

**Auto gain controls**

Another optional step as part of audio transmission between participants is gain control. The purpose of this is to reduce the dynamic range of gains with very loud and quiet elements in order to make them be heard clearer. This also can be problematic for sending music audio as we want to keep the original. Zoom eliminates this step in music mode while microsoft teams gives the option to eliminate to the user. Same as noise cancellation, Cisco Webex replaces this module with a limiter to prevent overload of the signal before it is sent to the codex.


**High pass filtering**

It is common in these systems to apply a high-pass filter to the microphone signal in order to remove low-frequency noise. For music mode this is not a good idea since you then will lose the low tones from your music especially if you are using a bass guitar etc.


### Conclusion

Long story short, it is actually possible to have music lessons when you can't meet with your teacher and it is as efficient as an in person lesson and also as fun! You just need to know what to look for and choose the optimal software for your needs. It is also possible to use Cisco Webex Devices with Zoom or Microsoft Teams meetings so that you can benefit from both solutions’ features.

As I have more insights for Cisco software, I viewed the solutions mostly from their architectural choices but if you want to read more about differences, below you can find more information about different “Music Mode” solutions of the three software platforms:

- [Music Mode for Cisco Webex Devices](https://help.webex.com/en-us/article/n5lfeod/Music-mode-for-Board,-Desk,-and-Room-Series)
- [Music Mode for Cisco Webex App](https://help.webex.com/en-us/article/h7tezj/Webex-App-%7C-Turn-on-music-mode-in-calls-and-meetings)
- [High Fidelity Music Mode in Microsoft Teams](https://support.microsoft.com/en-us/office/use-high-fidelity-music-mode-to-play-music-in-teams-c1550582-2f76-4b31-9f72-e98c7167a18e)
- [High Fidelity Audio Mode in Zoom](https://blog.zoom.us/high-fidelity-music-mode-professional-audio-on-zoom/)
