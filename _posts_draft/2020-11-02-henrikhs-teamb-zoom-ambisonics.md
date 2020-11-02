---
layout: post
title: "Zoom + Ambisonics"
date: 2020-11-02 15:00:00 +0200
categories: portal
author: Pedro Lucas, Willie Mandeville, Henrik Sveen, Anders Lidal
image: /assets/image/
keywords: zoom, immersive, reaper, iem, binaural, ambisonics,
excerpt: "Talking together in an online room is an interesting topic, as the mono summed communication in regular Zoom can be tiring when meeting for several hours a day. Could ambisonics in digital communication be the solution we're all waiting for?"
---

Talking together in an online room is an interesting topic, as the mono summed communication in regular Zoom can be tiring when meeting for several hours a day. Playing around with *HighFidelity* the first day of MCT was a real eye-opener. Suddenly it was way easier following who-says-what and also the feeling was immediately more natural. I (Henrik) have been testing this with different friends the last months, and the feedback has been more or less the same - that this way of communicating feels more natural than the traditional Zoom/Skype/Teams.
Team B also thinks there is a huge potential for renewing online communication with easy steps. It’s easier and more natural to be in the immersive field of ambisonics, and also there is a level of “togetherness” in having this common room feeling. It’s obviously how we would talk if we were in the same room, and we think adding acoustics to the digital platform will make it more user friendly for people now working long online hours.

Before class of MCT4021 we experimented with using BlackHole for routing sound. We then had success with routing sound from Zoom into Reaper for ambisonics, but less success doing it the other way around. For obvious reasons, that being Zoom not dealing with the BlackHole sound driver. We’re not sure why they made it like this, but “it’s just the way it is”, as Tupac once said it. Nevertheless, routing this way with aggregate (for Mac) turned out to work fine for Team B at least. Combining the audio interface with ZoomAudioDevice enables us to send the stereo signal from Reaper where the ambisonic magic happens with the IEM plugins. Using binaural decoding of course. But this wasn’t gonna be a solution for everyone in the class of 2020.

The class experience of getting a dozen users, roughly ⅔ Mac users and ⅓ Windows users all up and running on the stereo, manipulable setup we’d been hoping for was not particularly smooth. Even some users running identical Catalina operating systems to those used by successful participants were unable to efficiently get everything working. It seems that in an ideal world this approach (creating an aggregate device and routing through reaper to zoom) would be a strong improvement on the current reality of zoom meetings, however if the first 45 minutes of each meeting needs to be fighting with technology it is unlikely that anyone would enjoy this.
 Success rate of 45%

In the case of a Windows machine, there were some issues to solve. Pedro used ASIO4ALL as the driver for Reaper and the virtual cable VB for routing. This ASIO driver steals the device from other programs, that is, it is used exclusively


After talking for a while with the room function, we found that the difference wasn’t that big from regular talking. It has some effect, but it wasn’t imediately revolutionizing for the way we talk. It’s still a static and locked environment, and we got used to it quite fast. When we got used to it, we forgot it a little.

People at home offices don’t necessarily use headphones. Long work days with headphones are not very comfortable. And not everyone likes to wear headphones. And they might not have speakers. Which leaves us with the built in computer speaker. This will, of obvious reasons, make it hard to get any impression of an immersive online space.

An issue with online meetings can be the high bars of getting involved in a discussion. When mimicking a room, could this affect our behaviour on the digital platform? Would we be able to feel more comfortable taking part in discussions, and can discussions be more lively? Lively in the sense of dynamic discussions where other participants react instantly with short comments, or confirmations and objections, while the main speaker is talking. With the room mapping of sound, these short comments don’t feel as interrupting as they do on the traditional mono-platforms, as participants easily can navigate from where and whom the comments are being delivered. This is a natural part of our way of talking and discussing together, so neglecting it with muted microphones might be a bigger online-social handicap than what we initially think.
