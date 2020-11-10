---
layout: post
title: "Zoom + Ambisonics"
date: 2020-11-10 15:00:00 +0200
categories: portal
author: Pedro Lucas, Willie Mandeville, Henrik Sveen, Anders Lidal
image: /assets/image/2020_11_10_henrikhs_zoomInReaper.jpg
keywords: zoom, immersive, reaper, iem, binaural, ambisonics,
excerpt: "Talking together in an online room is an interesting topic, as the mono summed communication in regular Zoom can be tiring when meeting for several hours a day. Could ambisonics in digital communication be the solution we're all waiting for?"
---


The dynamics of talking together in an online room make for an interesting topic, as the mono summed communication in regular Zoom can be tiring when meeting for several hours a day. Comparatively, playing around with *HighFidelity* on the first day of MCT 4021 was a real eye-opener. Suddenly it was way easier to follow who-said-what and the feeling of organic conversation was immediately more natural. I (Henrik) have been testing this with different friends the last months, and the feedback has been more or less the same - that this way of communicating feels more natural than the traditional Zoom/Skype/Teams.

In light of these and similar technologies, Team B thinks that there is huge potential for reviving the effectiveness of online communication with easy steps toward more humanizing. It’s easier and more natural to be in the immersive field of ambisonics, and also there is a level of “togetherness” in having this common room feeling. It’s obviously how we would talk if we were in the same room, and we think that adding acoustics to the digital platform will make it more user-friendly for people now working long online hours.

Before a recent MCT4021 class we experimented with using BlackHole for routing sound. We then had success with routing sound from Zoom into Reaper for ambisonics, but less success doing it the other way around. The culprit of this difference appeared to be Zoom's inability to deal with the BlackHole sound driver consistently. We’re not sure why they made it like this, but “it’s just the way it is”, as Tupac once said. Nevertheless, routing this way with aggregate (for Mac) turned out to work fine for Team B at least. Combining the audio interface with ZoomAudioDevice enables us to send the stereo signal from Reaper where the ambisonic magic happens with the IEM plugins. *Using binaural decoding of course.* But sadly this wasn’t going be a ready solution for everyone in the class of 2020.

<figure style="float: auto">
   <img src="/assets/image/2020_11_10_henrikhs_zoomInReaper.jpg" alt="Should show picture..." title="" width="auto"/> <figcaption></figcaption>
</figure>

The class experience of getting a dozen users, roughly ⅔ Mac users and ⅓ Windows users all up and running on the stereo, manipulable setup we’d been hoping for was not particularly smooth. Even some users running identical Catalina operating systems to those used by successful participants were unable to efficiently get everything working. It seems that in an ideal world this approach (creating an aggregate device and routing through reaper to zoom) would be a strong improvement on the current reality of zoom meetings, however if the first 45 minutes of each meeting needs to be fighting with technology it is unlikely that anyone would enjoy this. Our class success rate over 90 minutes was around 45%.

In the case of a Windows machine, there were some issues to solve. Pedro used ASIO4ALL as the driver for Reaper and the virtual cable VB for routing. This ASIO driver steals the device from other programs, that is, it is used exclusively for the platform it is working on. The configuration is a little tricky regarding the driver since the inputs that are used for the DAW must not be used for Zoom and vice versa, and yet problems persist. Sometimes  Zoom or Reaper has to be restarted, other times Zoom works just by deactivating and activating the Mic, so there is not a fail-safe way to claim that everything will work on Windows. Other options to be explored would be using different drivers than ASIO4ALL or even the audio interface driver and performing some further tests by exchanging devices in Zoom and Reaper.

After talking for a while with the room function, we found that there wasn't a significant difference from regular talking. It had some effect, but it wasn’t immediately revolutionizing the way we talked. It’s still a static and locked environment, and we got used to it quite fast. When we got used to it, we actually somewhat forgot about it and reverted to almost the same level of engagement as with the flat audio of a typical Zoom meeting.

For wider use there is also the problem that people at home offices don’t necessarily use headphones. Long work days with headphones are not very comfortable. And not everyone likes to wear headphones. And they might not have speakers. Which leaves us with the built in computer speaker. This will, for obvious reasons, make it hard to get any impression of an immersive online space.

An issue with online meetings can be the high bar for getting involved in a discussion. When meeting participants are 'stepping upon' one another aurally often only the most persistent speakers will be able to make their points heard. This is a key area in which a less flat digital meeting space might be an improvement for meeting effectiveness. When mimicking a room, could this affect our behaviour on the digital platform? Would we be able to feel more comfortable taking part in discussions, and could discussions be more lively? Lively in the sense of dynamic discussions where other participants react instantly with short comments, or confirmations and objections, while the main speaker is talking. With the room mapping of sound, these short comments don’t feel as interrupting as they do on the traditional mono-platforms, as participants can easily navigate from where and from whom the comments are being delivered. This is a natural part of our way of talking and communicating together, so neglecting it with muted microphones might be a bigger online-social handicap than what we initially think.
