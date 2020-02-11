---
layout: post
title: "Practice-Toolbox-for-students-of-music"
date: 2020-02-10 10:00:00 +0200
categories: Audio-Programming
author: Thomas Anda
image: "/assets/img/thomas/thomas_pd.png"
excerpt: "In our audio programming course we were tasked to make a PD-patch without any restrictions on what it should be. I wanted to make something useful I could incorporate in my daily practice routine, and also distribute to some of my guitar students."
Keywords: Audio Programming, Pure Data, MCT4048
--- 

# Overview

In our audio programming course we were tasked to make a PD-patch without any restrictions on what it should be. I wanted to make something useful I could incorporate in my daily practice routine, and also distribute to some of my guitar students. I set out to make a practice toolbox wich would cover several different topics, but where the main focus is on rhythm, time-feel and developing your visualisation of the guitar-neck. I had no previous experience in using PD, so the learning curve during these two weeks was quite steep. Luckily we had great access to help from both Øystein in Trondheim and George in Oslo and I managed to incorporate most of my ideas into the patch. In addition to the patch I also made a MobMuPlat-integration so anyone who choose to use the patch can interact with it on their mobile phone. 

# The system

My main patch consists of several different modules which all serves a dif-
ferent purpose. The modules labeled "rhythm generator" was my rst addition to the
patch. It consists of a metronome which cycles through 4 bars in 4/4, with an
accented click on the first beat of each bar. I used the counter-object from Cy-
clone and also made a makeshift spigot-object. It is just a sub-patch consisting
of several spigots to clean up the already messy brute-force infested patch.
In my formula generator I got good help from Georgios to figure out
how to generate a set number of random numbers where no number is repeated
twice. Luckily for me I could just use the urn-object from cyclone and the uzi-
object to complete this task. I group the numbers into a list, and sort them to
make it look nicer. For further understanding of this modules purpose I would
recommend the book An Improvisers OS - by Wayne Krantz. I also used the
same technique to generate the random patterns in the h-radios in the module
below.

<figure>
 <img src="/assets/img/thomas/formula.png" align="center" alt="formula"/>
 <figcaption>Formula generator</figcaption>
</figure>

<figure>
 <img src="/assets/img/thomas/rhythm.png" align="center" alt="rhythm"/>
 <figcaption>Rhythm Generator</figcaption>
</figure>

<figure>
 <img src="/assets/img/thomas/mobmu.png" align="center" alt="mobmu"/>
 <figcaption>MobMuPlat interface</figcaption>
</figure>

The main metronome is what I spent most of my time working on. The
metronome mechanics was learned from Rafael Hernandez on Youtube, with the
ratelogic for the subdivisions. The rest I figured out through trial and error.
The cycling through the subdivisions was the hardest part. I only managed to
get it working when the time signature is set to 4, due to some weird behaviour
in the counter object that I didn't understand.

<figure>
 <img src="/assets/img/thomas/metronom.png" align="center" alt="Metronom"/>
 <figcaption>Metronome</figcaption>
</figure>

My looper/recorder I also picked up from a YouTube-video. I experienced
some problems with this particular module. The first time it starts, it has to
go through the whole length of bars before the recording starts. And after that
you get a count-in for three beats. 4 or 2 would of course be better, but it does
its job. The goal here was to make a tool for practicing time-feel and sense of
form. By including a click in the abstraction you will easily hear if you're on
or of the grid. This works of course only if you let the sound out through your
speakers.

<figure>
 <img src="assets/img/Thomas/looperthomas.png" align="center" alt="looperthomas"/>
 <figcaption>Looper</figcaption>
</figure>

As a final touch I routed everything into objects in mobmuplat and
made a decent looking GUI for myself and my students to interact with.

# Reflection

As a final conclusion I think that most of what I wanted to achieve with this
project was accomplished. As a newcomer to the world of Pure Data the learning
experience was quite good. I spent a lot of time on debugging and planning.
And many sleepless nights to make this work and look nice. This patch should
work as a great resource for lots of hours of practice and has the potential of
being used in several different ways.