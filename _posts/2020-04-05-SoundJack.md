---
layout: post
title: Exploring SoundJack
date: 2020-04-05 19:00:00 +0200
categories: portal
author: Aleksander, Rayam & Thibault
image: /assets/image/Tidemann/soundjack_logo.jpg
excerpt: "SoundJack is a p2p browser-based low-latency telematic communications system."
Keywords: MCT, Portal, SoundJack, Corona
--- 

[SoundJack](https://www.soundjack.eu/index.php) can be described as an ongoing scientific project, created and maintained by Alexander Cârot. On their webpage, SoundJack describes their services as being a browser-based low-latency communications system that provides quality and latency relevant control to the user. In out eyes, this is a pretty spot-on description. The browser UI-implementation, p2p system configuration, up to 8-channel audio support, video, and general customizability makes SoundJack a powerful and easy software to use. 


![browser UI](/assets/image/Tidemann/soundjack_main.jpg)


- Compatibility: macOS, Win


## How to Use


1. First, create an account on SoundJacks webpage.
2. Download the small core application (SJC) which must run on your device before using SoundJack in the browser. 
3. Run the application on your device and navigate to the Stage Tab in the SoundJack browser. 
4. Configure your various audio and video settings.
5. Press the green arrow key next to the user(s) you want to connect to. 


Important: If you are using OS Mojave, or later, you might need a slightly different installation process. The steps to be taken are well documented and can be found [here](https://www.soundjack.eu/index.php/problems).


## Documentation


Speaking of documentation, the SoundJack software is especially well documented considering its ongoing scientific venture, which also might open up possibilities for us to customize and tailor the software to our needs. 


Aditionally, we experience the signifigance of the applications integrated chat where you can easily troubleshoot and connect with fellow users. with everyone logged onto SoundJack. This is great for doing solo system testing and other debugging.


## The facts


To measure the roundtrip latency, we ran six tests. The first three were between Switzerland and Norway while the other three were between Switzerland and Germany. For the CH-NO tests we used the computer in Norway as a mirror, output the sound received using a virtual audio bus (SoundFlower). For Germany, SoundJack offers a mirror user we could use. For both locations, we ran the test three times, with different buffer sizes.


On the testing computer (Switzerland), we also used virtual audio busses to route audio from and to a DAW (Reaper) in order to measure exactly the delay. The complete routing is the following: Mic -> DAW -> vb -> SJ -> mirror vb -> SJ -> vb -> DAW (vb = virtual bus, SJ = SoundJack). We obtained the following results:


| Location | Audio buffer | Network buffer | RTL [ms] |
|----------|--------------|----------------|----------|
| CH - NO  | 512          | 512            | 265 ms   |
|          | 64           |                | 207 ms   |
|          |              | 128            | 106 ms   |
| CH - DE  | 512          | 512            | 111 ms   |
|          | 64           |                | 105 ms   |
|          |              | 128            | 61 ms    |


We can conclude that the latency becomes small enough to let people play together when they use very low audio quality settings and are not too far away. SoundJack can therefore be useful but not in every situation.


## The Cons


Although SoundJack has considerable potential as a online commincations platform, they still have some obstacles to overcome in able to consider themselves as a reliable and stable candidate in fulfilling the publics' telematic needs. 


Throughout our experimentation, we experienced numerous crashes and highly unstable audio quality despite utilizing various audio and video settings. In light of this, we contacted Cârot himself who explained that they are constantly improving and experimenting with the software, which will inevitably result in unreliable user-experiences, as of yet.


Additionally, having a p2p system configuration will put extra demands on users' network connectivity, more so than with other applications like zoom or skype which are tailored to providing a reliable and stable service to a broader number of people. In this sense, it seems natural to consider SoundJack as being tailored for more serious and advanced users, specifically for those who prioritize latency and customizability over general stability. 


## Conclusion


Summing up we can say that SoundJack is a very exciting contribution to the telematic software industry that provides greater freedom to its users via allowing for more network, audio, and video customization than your usual communications application. However, this can give the impression that the system is reserved for more experienced user-groups. 


But despite being tailored for more semi-advanced users, SoundJack is surprisingly easy to use and has an overwhelming amount of documentation which continues to grow. We believe that SoundJack would be an interesting addition to our portal setup as well as a worthy project to follow up on and maybe collaborate with in the near future.