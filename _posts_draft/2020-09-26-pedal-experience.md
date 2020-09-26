---
layout: post
title: "Pedál to the Metal"
date: 2020-09-26 20:12:57 +0200
categories: portal
author: Alena Clim, Leigh Murray, Abhishek Choubey
image: /assets/image/2020_09_26_pedal_interface.png
keywords: Pedál, latency, jamming
excerpt: "Another day, another audio-streaming platform. Here is Team A's impressions of Pedál."
---

# Pedál

Pedál is a cross plattform service to stream audio, speak, share screen, and record high quality audio together.

## User Interface Design

As the name suggests, this app is designed to look like a footpedal, the type you would use to add audio effects to your guitar.  Typically these pedals only have one button which enables or disables the effect.  This is great for physical pedals while your playing guitar, for a desktop app - not so much.
In order to keep with the pedal asthetic, all the features of the program are hidden from the user. Even what the main pedal button does is not clear.

So lets go through a few things.

How do you think you would configure your input and output devices? Maybe the "settings" cog at the top right, that sounds reasonable. 

![Pedal Seetings.](/assets/image/2020_09_26_pedal_settings.png)

Nope, that just lets you Quit, Subscribe (we'll get to this later) and share screen.

To configure your input and output devices you actually have to click on your UV meter display.

![Input and Output.](/assets/image/2020_09_26_pedal_your_uv.png)

Let's say you want to mute your audio for a minute.  We already know clicking your UV meter configures your devices so that can't be it. But it kind of is... If you hover your cursor over your name it will change to the word "mute" allowing you to click your name to mute your audio.

Let's press on.

To actually connect to someone else, you click on the UV meter on the right, of course.  This brings up a contacts screen where you can add contacts to create a session with or go "On call" which allows anyone else using Pedal to request a session with you.

So what are the two windows below the UV meters?  The top one is your WAV/MIDI recordings and the bottom one is the WAV/MIDI recordings of the person you're connected to.

Yes, there is a user guide (if you care to scroll down to the bottom of their website and click "knowlege base" and then scroll to the bottom of that webpage) but this is a simple app and it's 2020, you shouldn't have to RTFM.

## Features

Pedal spouts on their website - "Sample or send WAV directly between each DAW" which led me to believe this was some kind of audio VST, routing the other user's audio directly into a channel in my DAW.  That's not the case. So what does it do?

When you click the big pedal button, it records either your audio input (if you've selected wav) or midi input (from a MIDI keyboard, not your DAW when you've selected MIDI) and sends it to the other user's Pedal app.  

### Send WAV

When you click the pedal on WAV mode, your audio is sent directly to the other user allowing them to drag the wav file from pedal directly into their daw.

### Send MIDI

There is a "BPM" you can set when you're sending midi, but there's no click track when you hit the foot pedal to start recording, so assumably you need to provide this yourself.

## Impressions

When we were testing this software we found that the latency of audio using the Pedal app was actually slightly higher than the latency of Zoom's audio.

## Summary

It's hard to see who this app is targeted at.  When people record audio for someone, very rarely do they want to send it to a producer in RAW form.  Typically they will want to redo sections, apply effects or just tidy it up a bit.  But for the sake of arguement lets say you want to stream directly to someone else and let them have the unedited audio files immediately rather than saving them to your drive and sending it to them via some other means e.g. shared dropbox.  How often is someone likely to do this? If pedal becomes a producer's preferred method of working with clients, how easy is it going to be for them to convince their client to subscribe to pedal for $5/month for a one off session?

If this is what you want, I don't see why you wouldn't just use audacity and save your files to a shared dropbox, where you would then be able to have different versions saved. And if you want to use the app for jamming, there are free apps available with less latency, which allow more than two users at a time.


### Notes - Remove this before posting ###
$5 a month
easy to setup?
the quality?
usability/stability
undervisning
even after one person stopped sharing the screen, the window didn't close from the other person's screen
user interface is not intuitive
having sessions with more than one person is problematic: how do you do it
feedback issues, gets into infinite feedback loop if proper driver is not selected
latency a bit higher than zoom
bpm is unusable
