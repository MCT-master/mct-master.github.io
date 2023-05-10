---
layout: post
title: "Make The Stocks Sound"
date: 2022-12-10 10:00:00 +0200
categories: audio-programming
author: Masoud Niknafs, Nino Jakeli
image: https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_12_10_masoudn_stock.jpg
keywords: PD, Algorithmic, sonification
excerpt: "Make The Stocks Sound"
---


# PD Sonification Project
  
 This project investigates generative music ,as well as sonification. However, the focus of this post is on the sonification aspect of the investigation.
As part of the group final assignment for the Puredata course, we are sonifying the changes in the stock market index of Turkey and the S&P500 over the course of 500 days, beginning on the same day and time.

Due to the fact that changes in the S&P index have an effect on stock markets around the world, it was necessary for us to be aware of the correlations that exist between the various pieces of data.This required proper scaling and normalisation as the fluctuations can be relatively negligible within days. The temporal data of Turkey stock index fluctuations are used to control the pitch of the phase-modulation polyphonic synthesiser that is being developed for this project. If the randomization machine that is built into the patch is turned on while the instrument is playing, it will randomly regenerate the pitch and timbral characteristics of each of the six modules that forms the synthesisers.


<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_12_10_masoudn_patch.jpg"
      alt="Alternative Text"
      title="Patch"
      width="auto" />
   <figcaption>patch</figcaption>
</figure>




A polyphonic granular synthesizer is also derived from the S&P index. This synthesizer allows the S&P index to regulate the start point and playback speed of the grains. In addition, the density and presence of a stock market sound recording increases when the market is bullish, and the opposite is true when the market is bearish. Additionally, an oscillator-based panning module that is controlled by the same data is also included. When the market is expanding, it moves further toward the stereotypical picture, and when it is contracting, it moves in the opposite direction.


# Results:

Please listen to an exerpt of it!cheers!

<div class="waveform" path="https://www-adm.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2022_12_10_masoudn_sonification.wav?vrtx=admin" color="#56BBCC" splitChannels></div>



