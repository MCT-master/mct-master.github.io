---
layout: post
title: "The voice of a loved one"
date: 2020-10-16 12:00:00 +0200
categories: interactive-music-systems physical-computing
author: Joni Mok
image: \assets\image\2020_10_16_joni_cover.png
excerpt: "Can AI really know what our facial expressions mean?"
keywords: face, osc, wekinator, processing, audacity
---

# Prelude

It was quite a ‘heart attack’ when a design researcher was asked to do the prototype and implementation stages in just a week with little prerequisite knowledge of programming.
It was rather challenging to push me to think from my toe than the way I normally do - which is starting from the WHY.

Here I am sharing a basic design process of how a designer normally works:

![Design Process](/assets/image/2020-10-16-design-process.png)

We start with understanding the problem by conducting a series of qualitative research, such as in-depth interviews, in order to gain insights.

However, since the project was given a week time, grrr, what problem can I solve? Instead of keeping this ‘heart attack’ going, I had a quick idea to focus on my ‘heartache’ the fact that I am stuck in a place since March 2020,  where I don’t know anybody, nor the culture.
Like many novelists, artists etc, from history got their rather best ideas from their emotions, so I thought - why not? Just express myself through this project?!


# Aria

So, the first stage of ‘understanding’ is done and here is my problem statement for this project, which is also the 2nd and 3rd stages -Define & Ideation:

<i> Travel restrictions or countries lockdowns
sperate many people from their loved ones. Online communication tools don’t solve the problem ever since the invasion of ZOOM-meetings. According to research, having long hours of digital meetings drain our energy and its effect is as bad as having chronic fatigue… I call this - ‘Zoom fatigue’ here.
It is because of the restrictions of non-verbal expressions, such as using our body movements to implicitly communicate things without words.
The attention span of an average person holds around 8 - 20s and that we need to pause once in a while. Anyway, if our energy drained already after long hours of Zoom meetings, do we still have the energy for our loved ones from afar?
How can we bridge these long-distance relationships issues? </i>

Based on research, such as the experiments by the University of Wisconsin, if you are curious, feel free to look it up yourself. The experiments aimed to find out if students from group 1) having regular phone calls with their loved ones, or from group 2) texting only with their loved ones can handle stress better during their exams.
The result from the blood test showed that group one’s students’ oxytocin level (a.k.a. the love hormone) rise and their cortisol level (a.k.a the stress hormone) fell. Group 2 did not have any changes in their blood chemistry.

Then I got inspiration from the Japanese traditional aesthetics - MA, and I thought of a solo flute piece I performed when I was in Lyon, called : Voice by Toru Takemitsu. The memories of performing this piece had given me an eureka moment - Ah, I guess I know what to do for this project:

<i> An inner voice to remind you whenever you need emotional support </i>

# Chanson

So, back to the Zoom thing, if we are to continue doing this for another months or years (I hope not!) without physical contacts, I definitely need to hear the voice of my loved ones once in a while even during the Zoom meeting. For example, if I am bored, a voice cheers me up to carry on the meetings….

Since Zoom is having a lot of new features and updates pretty regularly, I thought- why not? Let’s have a ‘Mindfulness feature’! If mindfulness is rather a trend in 21st century, why don’t we simply put this inside our favourite Zoom? See the suggestion below (and welcome to have a gaze on my cat collection):

![setting in zoom](/assets/image/2020-10-16-joni-zoom.png)

# Ostinato

For the final stage of prototyping, since we had few options to collect OSC data or I did not have any tools my phone is also a 3rd-hand 50-euro phone...so the only few options I could choose were FaceOSC, or the Reaper thing which I found it was rather boring that restricts possibilities for creativity (just not my cuppa coffee).

Then, I started with testing the original FaceOSC that was linked to Canvas, it was a rather complicated version where training my unskilled facial expression was impossible. I connected it with Wekinator with raw 132 inputs. In parallel, I ran with Processing and sound. I recorded the voice from one of my loved ones via Zoom, so I edited the wav files in audacity just to crop them into individual files.

![Audacity](/assets/image/2020-10-16-joni-audacity_1.jpg)


![Weki 1](/assets/image/2020-10-16-joni-wekinator_1.jpg)


![Processing](/assets/image/2020-10-16-joni-processing_1.jpg)

The first attempt at working with this version of FaceOSC failed. The sound did not come as I trained my facial expression. This version of facial expression capture is a very tricky one if I am not good at separate the movements of my e.g. eyebrows and eye movements, or if my mouth is not big enough (big enough to sip a shot of Jägermeister), I am not able to train proper data in Wekinator.

So, I discovered another version of FaceOSC with 14 inputs. The setup on Wekinator was way easier than the first one, see below:

![Weki 2](/assets/image/2020-10-16-joni-weki2.jpg)

# Finale

What else can I write on? I have to admit that I am really not a programmer although am an interaction designer, to me, if the prototype can show the developers about my ideas, then we normally work together in order for running user testing iteratively…. I might be able to explain more about the tech part when I continually make progress in the MCT course. This few-day project was a ‘heart attack’ to me at first. However, upon making my ideas into some forms, I heartfeltly felt less heartache. Now I can fathom why Samuel Beckett wrote the way he wrote...

[![FaceOSC](/assets/image/2020_10_16_joni_cover.png)](https://www.youtube.com/watch?v=jVwoz0PIpYE&feature=youtu.be&ab_channel=mok614)


Please click to view the video.
Imagine if I am having quirky facial expressions during Zoom meeting and I turn my 'mindfulness mode' on, the voice of my loved one will communicate with me based on how I act in front of the camera. It could be heart-warming and creepy at the same time.



# Sources

For the 14 inputs FaceOSC

[https://https://github.com/kylemcdonald/ofxFaceTracker)
