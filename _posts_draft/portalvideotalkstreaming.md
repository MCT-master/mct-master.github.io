---
layout: post
title:  "How to stream content from the portal"
date:   2019-01-27 23:25:00 +0200
categories: Streaming
author: Eigil Aandahl & Sepehr Haghighi
excerpt: ""

---

Eigil's notes:
  How to use OBS with for example Youtube to stream content from the portal to a wide audience
    First a little context on streaming ("you are the content")
      Live streaming can enable fast interaction, two-way-communication.
    What is OBS?
      and a little bit on how to use it
    
    For Sepehr: How we've been setting up streaming together with Oslo for WoNoMute
    
    In order to have a proper communication, two computer is needed in the place that the presenter is presenting and one in the other place. The first two (in Trondheim) are going to be used for streaming, setting up LOLA for audio sharing and video sharing (presenation and live videos), using Zoom video conferance. The third computer (in the pther place/Oslo) is going to be used for receiving the sound and image, via LOLA and Zoom video conference. Also a mixer is requierd to mix the sounds in the presenter's place. Below we shall explain the signal chain and the way that audio/visual aspect of this presentation could be set up.
    AUDIO:
    There could be three audio sources in place A, where the presenter is (Trondheim) and one in place B (Oslo).
    Further we shall address the places as Trondheim and Oslo, to match the flowchart presented in here.
    The audio sources in Trondheim consist of: 1 - Presenter Mic, 2 - Presentation material (presenter's laptop) and 3 - Audience Mic). Those sources are going to the mixer and being mixed and sent to Oslo and be played back via LOLA system. Also the same thing happens regarding Oslo. The audience mic in Oslo signal is going to be received in Trondheim via LOLA and be played back.
    In the end, the sound from the mixer (consisting all of the sound sources from two sides) goes to the streaming computer and shall be played back in the stream as well.
    
    VIDEO:
    When it comes to the video, the process gets more complicated. Starting from the Trondheim's side, there are three video sources. 1 - Presneter camera, 2 - Presentation meterial (presenter's laptop) and 3 - Audience camera. Also there is one camera in Oslo to capture the audience. For video communication, Zoom video conference software is going to be used.
    Starting from the presenter camera in Trondheim, It goes directly to the streaming computer. When it comes to audience cameras, the Trondheim one's signal goes into Blackmagic web presenter along side the audience camera signal coming from Oslo, via the Zoom (Zoom computer). Then both are getting into the streaming computer and go into the stream. Also the Zoom is being used in the streaming computer, in order to share the presenter video with Oslo.
    The presentation material's video is directly going into the Zoom computer and going to be shared. That shall allow the Zoom software in the streaming computer to receive the video for streaming.
    In regards of the displays, both places use two big screens. In Trondheim, one screen is receiving the audience signal from Oslo via Zoom and the other is showing the presentation material, again coming from the Zoom. In Oslo both screens receive their picture from Zoom as well and one is dedicated to presenter's picture (since the presenter is not in Oslo) and one to the presentation material.

