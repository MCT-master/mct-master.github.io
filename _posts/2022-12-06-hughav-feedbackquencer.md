---
layout: post
title: "The Feedbackquencer: Making Music with Feedback - Part 1"
date: 2022-12-06 20:30:00 +0200
categories: interactive-music
author: Hugh Alexander von Arnim
image: /assets/image/2022_12_06_hughav_micspeaker.jpg
excerpt: "Using feedback in a sequencer"
keywords: interactive music system, acoustic feedback, sequencer, Bela,
---
# Microphones, Loudspeakers, and Feedback

We all know the sound of [acoustic feedback](https://en.wikipedia.org/wiki/Audio_feedback), the screech that occurs when a microphone is held too close to a loudspeaker.

<figure style="float: none">
   <img src="/assets/image/2022_12_06_hughav_feedback.jpg" alt="Alternate Text" title="Image Title" width="auto" />
   <figcaption>How acoustic feedback occurs <br>
   <i>From: https://www.toa.jp/soundoh_wiki/index.php?Soundindex/Acoustic%20feedback</i></figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="/assets/audio/2022_12_06_hughav_feedback.mp3" type="audio/mp3">
  </audio>
  <figcaption>The sound of feedback</figcaption>
</figure>

Usually we try to minimise the occurrence of this phenomenon as we see it as intruding upon the musical performance which is taking place. This is part of a tendency we have towards attempting to make microphones and loudspeakers transparent. We see the focus as lying upon the performer and their instrument, and not the auxiliary technology that we are using to facilitate it.

But what if we draw attention to the fact that we are using microphones and loudspeakers, remove the transparency and use them as musical instruments? Then acoustic feedback can be seen as the sound of the instrument, and one of its most fundamental sounds at that! It is “the sound of microphones and loudspeakers themselves” **[[1, p. 4]](#link1)**. In fact, the composer Robert Ashley describes it as “the only sound that is intrinsic to electronic music” **[[2, p. 185]](#link2)**.

This concept underlies two projects that I’ve worked on over the last few months. Both conceptualise a microphone and loudspeaker as a musical instrument, presented in different interactive contexts. The first of these is presented in this post, and is based around building musical sequences out of feedback. It takes the form of the Feedbackquencer.

# The Feedbackquencer

The Feedbackquencer is focussed on the timbral aspects of acoustic feedback. It encourages the musician to explore the way in which the spatial relationship between loudspeaker and microphone alters and emphasises different aspects of the sound of the feedback. The instrument consists of two main components: a microphone mounted in a stable position and a loudspeaker held in the hand.

The musician plays the instrument by moving the loudspeaker towards the microphone until feedback is generated. This feedback is then played back by a four-step sequencer, with each note [pitchshifted](https://en.wikipedia.org/wiki/Pitch_shift) to a different musical pitch (the length of each sequence step and the pitches are set before the instrument is booted up). The musician then explores the timbral space offered by the acoustic feedback within this set pattern.

But there’s more! An [LED](https://en.wikipedia.org/wiki/Light-emitting_diode) is mounted next to the microphone which increases and decreases in brightness at a set rate. Adjacent to the LED is a [photoresistor](https://en.wikipedia.org/wiki/Photoresistor) (a sensor that can be used to measure light). The signal from the photoresistor (corresponding to the brightness of the LED) is used to control the volume of the feedback, in effect working as an amplitude envelope. So the musician can also control this parameter by placing an object between the LED and photoresistor. There’s also a button that can be used to control the rate at which the LED flashes.

<figure style="float: none">
   <img src="/assets/image/2022_12_06_hughav_fq_breadboard.jpg" alt="Alternate Text" title="Image Title" height="70%" width="70%" />
   <figcaption>The Feedbackquencer constructed on a breadboard</figcaption>
</figure>

The use of the photoresistor also means that the system is sensitive to the environment. So you can also play the instrument through interactions as simple as turning on and off the light in the room.
A short performance with the system can be seen below, where a piece of paper was used to control the light reaching the photoresistor.

<br>
<figure style="float: none">
<iframe width="800" height="500"
src="https://www.youtube.com/embed/hTqeqTyfqrg "
title="YouTube video player"
frameborder="0"
allow="accelerometer;
100%play;
clipboard-write;
encrypted-media;
gyroscope;
picture-in-picture"
allowfullscreen>
</iframe>
<figcaption><i>The Feedbackquencer in action</i></figcaption>
</figure>
<br>

All of the computation and signal processing is carried out by a [Bela](https://bela.io/) running a [Pure Data](https://puredata.info/) patch. The block diagram below shows how all of the various components interact.

<figure style="float: none">
   <img src="/assets/image/2022_12_06_hughav_fq_block.png" alt="Alternate Text" title="Image Title" height="70%" width="70%" />
   <figcaption>A block diagram showing how the Feedbackquencer functions</figcaption>
</figure>

If you want to try constructing the system and playing around with it yourself, all the software and design documents can be found [here](https://github.com/Hughav92/feedbackquencer.git).

This instrument works well enough, but interaction by the musician is limited to control over timbre and the amplitude envelope. Can a more complex system be developed that offers the musician control over many more parameters, enabling much richer interaction with the feedback. Check out [part 2](https://mct-master.github.io/interactive-music/2022/12/08/hughav-feedback-mop-cello.html) of this post to see the further development of these ideas.

# References

<p><b><a name="link1">[1]</a></b> C. van Eck, Between air and electricity: microphones and loudspeakers as musical instruments. New York London Oxford New Delhi Sydney: Bloomsbury Academic, 2017.

<p><b><a name="link2">[2]</a></b>	T. Holmes, Electronic and Experimental Music, 3rd ed. New York: Routledge, 2008.
