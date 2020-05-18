---
layout: post
title: "I scream, you scream, we all scream for livestream"
date: 2020-05-18 22:00:00 +0100
categories: Portal
author: Rayam, Paul
image: /assets/img/gaute/Rayam.jpg
excerpt: "Some cameras won't allow you to film for more than 30 minutes, don't use those."
Keywords: Stream, concert, corona, telematic 
--- 

## Intro
Building on the experience derived from having concerts in a very controlled environment, such as the portal and the experience we have from photography and live-shows, we have done several streaming concerts to help artists reach their audience during lockdown. Covid19 presented society with a host of challenges, and continuing to have concerts is one of them. We have put together a quick guide for those who want to put together their own streaming-concerts and developed routines and techniques that can be used for concerts in the portal, when the campus opens up.  

After doing some research, we came to the conclusion that [OBS Studio](https://obsproject.com/) is the best solution if you want to do streaming. OBS is open source, very well maintained and has an intuitive, modern and feature packed interface. 

### Lighting
Have good lighting on stands. 3-point lighting with soft-boxes are preferred. The LED lights are the most reasonable type of lights for this task. When utilizing lamp bulbs, they are very hot and if you don't have a proper dimmer it is overpowering, being even uncomfortable to the artist in the scene. If you don't have proper material, like a diffuser for example, you are gonna deal with harsh lighting, which is not aesthetically appealing and it doesn't look professional at all. By the other hand, when it comes to LED lights, in most models you have much more control of the intensity and other features of the light. Even in the cheapest models, you can find temperature control, intensity (dimmering) and some of them come with a soft-box for diffusing the lights. The LED lights are also much lighter and portable, requiring cheaper stands and less effort to transport it and set it up.

<figure>
<img src="/assets/img/gaute/lamps.jpg" width = "50%" align="center" />
</figure>

We have used 2 spot lights, but they were too big and too heavy for the task. No need to overkill with lighting and melt the artists during the performance. On the other hand, they were very useful, especially because we had a dimmer to control the power of the lights. They were well used when the face and other details of the subject in the scene were a bit in the shadow.

### Microphones
Streaming a concert through a camera is a very different thing than a live concert. Since cameras often zoom close to the face of the people singing or the instrument being played and the audience does not have the distractions they do at a concert, you have to keep in mind that the microphones can become obstructive in the image. Try as best as you can to select discrete or visually pleasing microphones and it will look a lot better than using regular stage-mics.

A USB mic can greatly reduce the complexity of a setup. You can find good condenser USB microphones for a good price, and it takes out the need of a sound card, since the USB microphones are plug-and-play, meaning you just need to plug it directly to your computer's USB port.

### Audio and Video processing
OBS provides support for utilizing audio and video processing, you can use native plugins or 3rd party plugins of your choice. To find these options you have to right click on the video device listed, to find the option Filters on the menu that pops up. We have used it to pop up the musicians and give contrast to the scene when we were using a webcam, that despite having quality, had a bit of a washed picture.

### Basic video Processing
You can start it by colour correction. To do that, you have to add (click on the + icon) a video plugin, chose the Color Correction and you are gonna see a few basic options such as:

#### Gamma
It is a very sensitive parameter, small changes make a big difference. Don't overdo it. Gamma makes the bright areas of the image brighter, while the dark areas will be darker when increased. It is similar to Contrast, but affects more the middle range or grays of the image.

#### Contrast
In case your picture is a bit "washed", and you need to make the subject and objects of the scenario stand out, increase contrast. Bear in mind that increasing it too much can make certain regions of the image too dark, or too bright, and also can lead you to have a picture that feels amateur.

#### Brightness
Similar to Gamma, it is better used for small corrections. If your video is dark, slowly increase it, but don't try to fix a lighting problem that should be done by a correct light placement and natural environment lighting. Sometimes the subject can be too exposed too, in this case you should decrease subtly the value of this parameter.


### Basic audio Processing
When mixing for live broadcast, you got to think differently than if you were mixing for a concert venue.

<figure>
<img src="/assets/img/gaute/mixer.jpg" width = "100%" align="center" />
<figcaption><strong>Waves LV1 and Yamaha HS8</strong></figcaption>
</figure>

#### Compressor
Use the compressors the same way as you would in any other mix (try to be tasteful), but keep in mind that the audience you are mixing for will probably not hear your mix in an optimal environment. Your mix will be played through anything from earbuds to a large HIFI, so try to master your tracks accordingly. Most importantly, set a limiter before the signal reaches OBS. Think that you should aim at reducing the peaks by 3 to 6db and keep a steady signal at -8 to 12 and you will make sure that your work is heard in all situations. 
