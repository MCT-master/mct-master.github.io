---
layout: post
title: "The Joys of Jitsi"
date: 2020-09-28 17:00:00 +0200
categories: portal
author: Joni Mok, Wenbo Yi, Lindsay Charles, Stephen Gardener
image: /assets/image/2020_09_28_stephedg_jitsi_logo.jpg
keywords: jitsi, videochat, disaster
excerpt: "Jitsi is a venerable open source chat and video-conferencing app thats been around since 2003. It's multi-platform, and runs pretty much everywhere. We were given the task of testing the desktop apps on MacOS and Windows, and the mobile apps on Android and iOS."
---


[Jitsi](https://jitsi.org) is a venerable open source chat and video-conferencing app thats been around since 2003. It's multi-platform, and runs pretty much everywhere. We were given the task of testing the desktop apps on MacOS and Windows, and the mobile apps on Android and iOS.

Let's start with [Jitsi desktop](https://desktop.jitsi.org). First impressions weren't great - you are requested to log in with an account from **Google Talk** (a service whose retirement was announced in 2012), **SIP** (eh?) or **XMPP**. I had a Jabber account once, although I wouldn't even know where you'd set one up now. I guess we've all been sucked into the proprietary services offered by the likes of Apple and Facebook. 

![Jitsi Desktop.](/assets/image/2020_09_28_stephedg_jitsi_1.jpg)

We wanted to see if there was a way to chat together without us having to set up Jabber accounts, so we dismissed that window and had a rummage around the app itself.

_"Jisti wants to access your contacts. Allow?"_ - Deny! 

Ah, there's an _"Add a chat room"_ option hidden under the File menu (where else?), maybe this is it? _"Choose account"_ - ah, bugger.

Lets check the documentation. Hm.. a little thin on the ground here. There is a _"How to download and install Jisti"_ video from erm.. 2012.

Ok, maybe we'll have a bit more joy with the mobile apps. 
Oh, hang on - whats this in the FAQ?

> Is there an iPhone/iPad version of Jitsi?
> 
> No. Due to the restrictions imposed by the platform it is highly unlikely this answer is going to change. 

Bugger.

Thankfully the answer has changed, and not only that, but the Jitsi experience on iOS was much better.


At least initially.


[Jitsi Meet](https://jitsi.org) (the mobile version of Jitsi) doesn't require you to sign in to other services, so we could jump straight into setting up a room. 

_"This room is insecure, anyone can join. Press the security button"_ Um.. which security button? After not managing to find any security buttons anywhere, we decided to throw caution to the wind and start our video chat. 

And it worked! Latency seemed fine on iOS, although there was no direct way of measuring it like there is in Zoom. On Android it didn't run quite as smoothly, with quite a lot of audio dropouts.

We were still a little nervous a stranger might jump into our cosy video chat, so the hunt for the 'security button' resumed. Tucked away 2 levels down in a menu, I found an option that allowed you to set a password for the room. We'd done it!

Jitsi Meet has a nice 'recents' list, which allows you to jump straight back into any rooms from previous sessions. Unfortunately we found that it didn't remember the password we had set, and not only that, but it didn't warn us this time. 

Jitsi is free and open source, and we were really hoping for it to be a viable and more ethical alternative to the Zooms of this world, but for us it was a disaster. In terms of UX, it is user-unfriendly to the extreme and even worse, it's clumsy attempts at security are leaving people vulnerable. Until the Jitsi team sort out these issues, our recommendation is to look elsewhere.

# Update

Shortly after we published this post, there was a big update to the [Jitsi Meet](https://meet.jit.si) mobile apps, fixing quite a few of the issues we came across. We have also been pointed in the direction of [https://meet.web.net](https://meet.web.net), a web based client for Jitsi that works really well, and offers a much improved user experience. We would still recommend avoiding Jitsi Desktop, but both the web and mobile apps are beginning to look like viable alternatives for online video meetings.