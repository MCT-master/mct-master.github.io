---
layout: post
title:  "Motion Controlled Sampler in Ableton"
date:   2023-05-08 10:13:42 +0200
categories: motion-capture
author: Fabian Stordalen
image: assets\image\2023_05_08_fabianst_post_cover_image.png
excerpt: "A fun and creative way of sampling"
keywords: motion capture, max msp, IMU, osc
---

# Introduction

In this post I will show how I created a sampler controlled by IMU data from a phone using Max For Live in Ableton Live. It's a simple but powerfull system with intuitive controls.

# IMUs and Phones

<figure style="text-align: center;">
   <img src="/assets/image/2023_05_08_fabianst_phonesensors.png" alt="Alternate Text" width="auto" />
</figure>

An IMU is an electronic device that measures and reports a body's force, angular rate, and orientation of the body by using accelerometers and gyroscopes. They are inertial since these sensors only measure their own movements 

What makes IMUs so ideal in music technology is the ability to capture motion data they give. The constant stream of data they provide can be mapped in several ways depending on use case. In my case I used acceleration and orientation data specifically, but also other sensor data like the phone’s light sensor.

To get access to this data and to send it to my computer I used an open source application called Sensors2OSC for Android. This application let me choose what sensors I wanted to capture and then send the data over the network as Open Sound Control (OSC) messages.

# Sampler Modules

## Sequencer

The main sequencer is controlled using orientation data. There are two tables which represents how many steps there are in a sequence and which segment of the sample is being played. These tables are controlled by the phones rotation on the x- and y-axis

<figure style="text-align: center;">
   <img src="/assets/image/2023_05_08_fabianst_tables.png" alt="Alternate Text" width="auto" />
</figure>

## LFO

I also added an LFO which is controlled by acceleration data and can be assigned to various parameters. You can use the LFO for either controlling the sequencer or the filter cutoff.

<figure style="text-align: center;">
   <img src="/assets/image/2023_05_08_fabianst_lfo.png" alt="Alternate Text" width="auto" />
</figure>

## Filter

Next, I added a standard filter module where you can choose what type of filter you want to use. The filter cutoff was then mappen to the phone's light sensor. This meant that a brighter environment would open up the filter while a dark one would close it.

<figure style="text-align: center;">
   <img src="/assets/image/2023_05_08_fabianst_filter.png" alt="Alternate Text" width="auto" />
</figure>

## Spectral Freeze

The final module was a spectral freeze effect. This effect takes a snapshot of the signal and calculates the FFT and creates a small spectrogram. This spectrogram is then stored and freezed in place. When finished recording all the spectrograms they are combined and resynthesized to create a unique sound depending on the playback speed and FFT window used. The volume of the effect can also be controlled using the pitch of the phone.

<figure style="text-align: center;">
   <img src="/assets/image/2023_05_08_fabianst_spectralfreeze.png" alt="Alternate Text" width="auto" />
</figure>

# Conclusion

This is how the final patch looks. If you're interesed in trying it out it's available on my [Github page](https://github.com/FabianStord/Motion-Sampler) I've included a README which throughly explains all functions and how they're used.

<figure style="text-align: center;">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_05_08_fabianst_sampler.png?alt=original" alt="Alternate Text" width="auto" />
</figure>