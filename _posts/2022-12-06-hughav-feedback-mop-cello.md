---
layout: post
title: "The Feedback Mop Cello: Making Music with Feedback - Part 2"
date: 2022-12-08 16:30:00 +0200
categories: interactive-music
author: Hugh Alexander von Arnim
image: /assets/image/2022_12_08_hughav_fmcheader.jpg
excerpt: "Using a mop to play the feedback"
keywords: interactive music system, acoustic feedback, Cello, bela
---

In [part 1](https://mct-master.github.io/interactive-music/2022/12/06/hughav-feedbackquencer.html) of this blog post, the idea of using microphones and loudspeakers was presented with focus placed on the musical use of acoustic feedback. Based upon these principles, I developed two projects over the course of the last few months; The Feedbackquencer, presented in the previous post, and the Feedback Mop Cello, which is presented here.

# The Feedback Mop Cello

<figure style="float: none">
   <img src="/assets/image/2022_12_08_hughav_inst_3_crop.jpg" alt="Alternate Text" title="Image Title" width="70%" height="70%" />
   <figcaption>The Feedback Mop Cello <br>
   Left - Bow, Centre - Body, Right - Speaker</figcaption>
</figure>

The Feedback Mop Cello builds upon the functionality of the Feedbackquencer. While still keeping the central interaction of moving one component of a loudspeaker and microphone combination, the Feedback Mop Cello aims to offer additional expressive capabilities and control intimacy. The musician draws a ‘bow’, which is pointed towards a loudspeaker and upon which is mounted a microphone and accelerometer, back and forth across the mop (which represents the body of the cello). The changes in direction and proximity of the microphone in relation to the loudspeaker determine several aspects of the feedback generated. The motion of the bow (acquired through the accelerometer) is mapped to several parameters, including the loudness of the feedback. But on top of this, the interaction of the bow with the mop influences the sound of the feedback.

<figure style="float: none">
   <img src="/assets/image/2022_12_08_hughav_bowcombined.jpg" alt="Alternate Text" title="Image Title" width="70%" height="70%" />
   <figcaption>The bow. Visible are the microphone and accelerometer mounted on the end</figcaption>
</figure>

<figure style="float: none">
   <img src="/assets/image/2022_12_08_hughav_hardwareblock.jpg" alt="Alternate Text" title="Image Title" width="auto" />
   <figcaption>A block diagram of the various hardware components and their position on the bow and the mop</figcaption>
</figure>

However, there is still the question of pitch. Although the pitch of the feedback can be altered through careful placement of the microphone as well as through the choice of loudspeaker, it can be quite difficult to play precise pitches in a reliable manner. That’s why the feedback signal is passed to a [pitchshifter](https://en.wikipedia.org/wiki/Pitch_shift), similar to the Feedbackquencer. The pitchshift is controlled through a ‘neck’, intended to be analogous to the neck of the cello. By placing a finger higher or lower on this neck, the pitch is raised and lowered. This was a custom design, making use of 15 [capacitive sensors](https://en.wikipedia.org/wiki/Capacitive_sensing) with a pitch range of two and a half octaves, run from a [Trill Craft](https://learn.bela.io/products/trill/about-trill/) breakout board. It even allows the use of techniques such as vibrato!

<figure style="float: none">
   <img src="/assets/image/2022_12_08_hughav_necktrill.jpg" alt="Alternate Text" title="Image Title" width="60%" height="60%" />
   <figcaption>Left - The capacitive sensors on the neck which control pitch, Right - The Trill Craft breakout board which processes the capacitive sensors</figcaption>
</figure>

<figure style="float: none">
   <img src="/assets/image/2022_12_08_hughav_softwareblock.jpg" alt="Alternate Text" title="Image Title" width="auto" />
   <figcaption>A block diagram of the software processing of the sensor input</figcaption>
</figure>

Below is a video of the Feedback Mop Cello in action.

**Video Coming Soon!**

Like the Feedbackquencer, the Feedback Mop Cello runs on a [Bela](https://bela.io/) with the software written in [Pure Data](https://puredata.info/). If you want to try constructing the system and playing around with it yourself, all the software and design documents can be found [here](https://github.com/Hughav92/feedback_mop_cello.git).

# Why the Cello?

<figure style="float: none">
   <img src="/assets/image/2022_12_08_hughav_cello.jpg" alt="Alternate Text" title="Image Title" width="40%" height="40%" />
   <figcaption>Why use this instrument as a control interface for manipulating acoustic feedback? <br>
   <i>From: www.freepik.com</i></figcaption>
</figure>

Although the Feedback Mop Cello offers an approach to an instrument based around the use of acoustic feedback, an immediate question is why present it in the form of a cello? The reason for this is also related to the goals of offering additional expressive capabilities and control intimacy. The cello and the physical gestures required to produce musical sound with it are a known quantity. By basing the input gestures of the Feedback Mop Cello on these, the goal was to gain a head start on achieving these goals.

This is also related to the concept of transparency in Digital Musical Instrument (DMI) design. Transparency can be thought of as an understanding of the distance between the gestural input and sound output of a DMI **[[1]](#link1)**.

<figure style="float: none">
   <img src="/assets/image/2022_12_08_hughav_mapping.jpg" alt="Alternate Text" title="Image Title" width="auto" />
   <figcaption>The components of a DMI, showing the mapping <br>
   <i>Reproduced from [2]</i></figcaption>
</figure>

As instrument designers, we can arbitrarily choose how these inputs and outputs are linked (this is referred to as the mapping). To take a simple example, I could decide whether the mapping of finger position to pitch on the Feedback Mop Cello maps a higher finger position to a higher or a lower pitch. If the distance between the input and output of the instrument are not intuitively easy to understand (i.e. the mapping is opaque instead of transparent), it is difficult for the musician to intuitively express their musical ideas on the instrument. Moreover, it becomes very difficult for audiences to understand how the instrument works. What is the physical gesture which is creating this sound, or is the musician even creating the sound through their gesture at all?

A solution to the difficulty in creating transparent mappings is to rely on commonly understood metaphors within the wider culture. For example, we often use one dimensional spatial metaphor for pitch, such as conceptualising lower pitches to the left and higher pitches to the right. All of the various metaphors we have add up to a cultural literature **[[1]](#link1)**, a shared understanding that members of the culture have. If we base the mappings in this cultural literature, we can increase the transparency as there is a shared understanding by the musician and the audience of how the instrument should and will create sound based upon the musician’s input gestures. Therefore, by basing the design of the Feedback Mop Cello on the actual cello the aim is to create an instrument which presents interaction with acoustic feedback in a manner more transparent than the sole use of a single microphone and loudspeaker. If you understand how a cello works, you should understand how the Feedback Mop Cello works. Take a look at the video of a performance below and decide how successful this was!

**Video Coming Soon!**

# References

<p><b><a name="link1">[1]</a></b>  S. Fels, A. Gadd, and A. Mulder, ‘Mapping transparency through metaphor: towards more expressive musical instruments’, Organised Sound, vol. 7, no. 2, pp. 109–126, 2002, doi: 10.1017/S1355771802002042.

<p><b><a name="link2">[2]</a></b> G. Emerson and H. Egermann, ‘Exploring the motivations for building new digital musical instruments’, Musicae Scientiae, vol. 24, no. 3, pp. 313–329, Sep. 2020, doi: 10.1177/1029864918802983.
