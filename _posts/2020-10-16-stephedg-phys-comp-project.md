---
layout: post
title: "Improvised electronica with TouchOSC"
date: 2020-10-16 17:00:00 +0200
categories: physical-computing
author: Stephen Gardener
image: https://hexler.net/gfx/_software/touchosc-15.png
excerpt: "In this project, I wanted to explore the options available when performing electronic music live with no pre-recorded / pre-sequenced material."
keywords: physical-computing, osc, midi, ableton, reason, touchosc
---

In this project, I wanted to explore the options available when performing electronic music live with no pre-recorded / pre-sequenced material.

In a band or orchestra, you have multiple musicians, each focusing on a particular instrument. For electronic music makers, we have an entire suite of sound generators (instruments) and sequencers (the performers) in our laptop, and the question becomes - how can we translate an electronic composition on a laptop into something that can be performed in a live situation? The obvious answer would be to assemble a band, with each person controlling a single part on their laptop or with a synth, in order to keep the one-to-one ratio of performer and instrument. Another option is to look upon the laptop as an orchestra of musicians, with each sequencer / synth combination being a part controlled by an individual ‘performer’. In this way, you become the conductor, directing the musicians (sequencers) at a higher level. Such a system, designed correctly, could allow for a great deal of compositional and improvisational freedom in a performance context, and my project was a first attempt at looking into some of the options that would be available to such a performer.

As I wanted individual control over all parts at the same time, I limited the number of parts to four - two melodic parts, a harmony part and a rhythm section. I put together a system using Reason Players (Dual Arpeggio, Scales & Chords, Beat Map and Note Echo) which I could feed with single notes, and let them generate the melodies, harmonies and beats.

<figure style="float: none">
    <iframe src="https://drive.google.com/file/d/1_YgCD0Wx22rZaVOnwaqpeO4hCRWMwnI8/preview" width="430" height="500"></iframe>
    <figcaption>I used Reason Rack to turn singles notes into melodies</figcaption>
</figure>


# Introducing TouchOSC

After an initial test using a Playstation 4 DualShock controller, I decided to build a custom TouchOSC interface. TouchOSC Editor allows you to put together a control interface consisting of wide variety of sliders, buttons, rotary knobs and various other controls. Each control can be configured to send an OSC message, MIDI data including note on/off, or a keystroke.

My custom layout included buttons 1 - 7 for triggering the notes in a D mixolydian mode (hard coded in this example), plus part specific controls for the melody, harmony and rhythm sections.

![TouchOSC layout](/assets/image/2020_10_16_stephedg_touchosc.png)

The two melody parts were handled by Native Instruments Monark and U-he Repro-1 soft synths. The note received from TouchOSC was turned into a 4 note chord and sent through two arpeggios set at two different rates and lengths in order to generate an interesting rhythm.

The first group of sliders controlled these melody parts - one I assigned to the Note Echo (MIDI echo) device, allowing me to introduce additional notes which would vary in pitch (a subsequent player mapped these notes back to the D7 scale). The other slider I assigned to the Monarks third oscillator, allowing me to shift the octave up and down, in essence introducing an additional note/voice to the melody.

The second group of controls were for the harmony part. This was a synth pad played by U-he Repro-5 soft synth, and the note received from TouchOSC was mapped to a chord using the Chords & Scales player. I used the sliders to adjust sound parameters (cutoff frequency and the introduction of a tremolo effect) rather than notes for this part.

The final group of controls controlled the bass and drums, with a slider for a beat-repeat effect, and a button for muting / unmuting the part.
I used Ableton Live as the host for the VSTs and the Reason rack plugins. TouchOSC on the phone connected via the TouchOSC Bridge app to the Max for Live Connection Kit device running in Ableton, which then allowed me to map the TouchOSC controls to Ableton.


# In practice


<figure style="float: none">
    <iframe width="800" height="480" src="https://www.youtube-nocookie.com/embed/VhKo2_FoRFs" frameborder="0" allowfullscreen></iframe>
    <figcaption>Performing with TouchOSC</figcaption>
</figure>


I feel there is a lot of potential in a setup like this. Once you have an idea of how you would like things to work, creating a TouchOSC layout and mapping it to elements in an Ableton session is quick and straight forward. I could easily imagine a whole live set being performed using this method. TouchOSC lets you store multiple pages of controls within a layout, and so makes it easy to switch layouts depending on the needs of the song. I used a mobile phone for this particular project, but I suspect the screen real estate of a tablet would feel more comfortable and offer more space to organise the layout.

# The future
The basic idea presented here could be extended in a number of ways:
- sending notes individually to each part
- allowing the choice of root note and scale/mode, for on-the-fly key changes
- being able to tap in rhythms for the melody parts to follow
- the ability to change the flavour of the chords - adding 7ths, 9ths, suspended 4ths, inverting chords, etc.
- use the Beat Map player to generate and manipulate beats on the fly
- adding more sound sculpting parameters for each part

I feel there is a danger of getting carried away when adding more controls however - I would be worried it could increase the distance between me and the performance, as the number of controls I can manipulate at one time is limited, and so the temptation could be to start to automate more and play less. For me, the key would be selecting a small but effective number of parameters to control, and for the focus of those parameters to be on manipulating the melodic, harmonic and rhythmic elements of the song, with a few well chosen sound sculpting controls thrown in.
