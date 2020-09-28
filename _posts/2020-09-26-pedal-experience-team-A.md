---
layout: post
title: "Pedál to the Metal"
date: 2020-09-26 20:12:57 +0200
categories: portal
author: Alena Clim, Leigh Murray, Abhishek Choubey
image: /assets/image/2020_09_26_pedal_interface.png
keywords: Pedál, latency, jamming
excerpt: "Another week, another audio-streaming platform to test. Here is Team A's impressions of Pedál. According to their website, Pedál is a cross platform service to stream audio, speak, share screen, and record high quality audio together and the simplest way to make music together online."
---

# Pedál

![Pedal Logo.](\assets\image\2020_09_28_abhishec_pedal_logo_square.jpg)

According to their website, [Pedál](https://miidbaby.com/) is "a cross platform service to stream audio, speak, share screen, and record high quality audio together" and "the simplest way to make music together online."

## User Interface Design

As the name suggests, this app is designed to look like a footpedal, the type you would use to add audio effects to your guitar.  Typically these pedals only have one button which enables or disables the effect.  This is great for physical pedals while you're playing guitar, but for a desktop app? - not so much.
In order to keep with the pedal aesthetic, all the features of the program are hidden from the user. Even what the main pedal button does is not immediately clear.

So, lets go through a few things.

How do you think you would **configure your input and output devices**? Maybe the "settings" cog at the top right, that sounds reasonable.

![Pedal Settings.](/assets/image/2020_09_26_pedal_settings.png)

Nope, that just lets you Quit, Subscribe and Share Screen.

To configure your input and output devices you actually have to click on your UV meter display.

![Input and Output.](/assets/image/2020_09_26_pedal_your_uv.png)

Let's say you want to **mute your audio** for a minute.  We already know clicking your UV meter configures your devices so that can't be it. But it kind of is... If you hover your cursor over your name it will change to the word "mute" allowing you to click your name to mute your audio.

Let's press on.

To actually **connect to someone else**, you click on the UV meter on the right, of course.  This brings up a contacts screen where you can add contacts to create a session with or go "On call" which allows anyone else using Pedal to request a session with you.

So what are the two windows below the UV meters?  The top one is your WAV/MIDI recordings and the bottom one is the WAV/MIDI recordings of the person you're connected to.

Yes, there is a **user guide** (if you care to scroll down to the bottom of their website and click "knowledge base" and then scroll to the bottom of that webpage) but this is a simple app and it's 2020, you shouldn't have to RTFM.

## Features

Pedál spouts on their website - "Sample or send WAV directly between each DAW" which led me to believe this was some kind of audio VST, routing the other user's audio directly into a channel in my DAW.  That's not the case. So what does it do?

When you click the big pedal button, it records either your audio input (if you've selected wav) or midi input (from a MIDI keyboard, not your DAW, when you've selected MIDI) and sends it to the other user's Pedal app.  

### Send WAV

When you click the pedal on WAV mode, your audio is sent directly to the other user allowing them to drag the wav file from pedal directly into their daw. From there on it's pretty clear, you can use it as any other audio file in your daw.

### Send MIDI

There is a **"BPM"** you can set when you're sending midi, but there's no click track when you hit the foot pedal to start recording, so assumably you need to provide this yourself. However, the audio file the other person receives has a BPM attached to it. It's not clear what would this help with: a BPM it's more useful while you're playing and recording not afterwards.

## Impressions

When we were testing this software we found that the **latency** of audio using the Pedal app was actually slightly higher than the latency of Zoom's audio which is not great for a platform made specifically for streaming and recording high quality audio.

Regarding the option to **share screen** to the person you're connected to, as Windows user we encountered a surprising bug. Even after we stopped sharing the screen, the "shared screen" window didn't close from the other person's screen, it stayed there as a black window confusing and dark until manually closed.

Pedál's usability is undermined by the impossibility to connect to more than one other person. We still haven't figured out if it's possible, and if yes, how - it's not clear based on their user guide either. Latency issues aside, the quality of the audio is quite alright - that is, if you're careful to **select the proper drive**! If not, then you get stuck into an infinite loop and end up having feedback issues.

## Summary

It's hard to see who this app is targeted at.  When people record audio for someone, rarely do they want to send it to a producer in RAW form.  Typically they will want to redo sections, apply effects or just tidy it up a bit.  But for the sake of argument lets say you want to stream directly to someone else and let them have the unedited audio files immediately rather than saving them to your drive and sending it to them via some other means e.g. shared Dropbox.  How often is someone likely to do this? If pedal becomes a producer's preferred method of working with clients, how easy is it going to be for them to convince their client to subscribe to pedal for $5/month for a one off session? Its probable best working scenario is when two producers are working on a song and want to share and monitor files immediately, it will also help if there are audio plugins which are not common to both the producers and want to use them in runtime on the audio while producing a song.

But if this is what you want, you can also use Audacity and save your files to a shared Dropbox, where you would then be able to have different versions saved. And if you want to use the app for jamming, there are free apps available with less latency, which allow more than two users at a time to join (see for example [Jamulus](https://mct-master.github.io/portal/2020/09/06/jamulus-team-a.html)).
