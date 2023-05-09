---
layout: post
title:  "Simple yet unique way of playing music"
date:   2023-05-09 11:09:00 +0200
categories: motion-capture
author: Nino Jakeli
image: /assets/image/2023_05_09_ninojak_front.jpg
excerpt: "Gestures can be more intuitive to play around with"
keywords: motion capture, osc, sampling, gestures, sound control
---

# Overview


It may seem weird to imagine, but movement can actually make a musical performance richer, more natural, and even more unique than other traditional methods.
I've recently stumbled upon an exciting approach to interactive music performance. The system can be easily implemented using accelerometer data from a phone to control audio samples in real time within the Max/MSP environment. 


<div align="center">
  <img src="/assets/image/2023_05_09_ninojak_osc_max.jpg" alt="Alternate Text" width="auto" />
  <p align="center"><em>The OpenSoundControl help patch</em></p>
  <p align="center">Source: <a href="https://cycling74.com/">Cycling 74</a></p>
</div>




   

## Implementation

The following workflow uses a custom Max/MSP patch that processes incoming accelerometer data from a smartphone, mapping it to the playback of pre-produced audio samples. The given accelerometer sensor has a maximum range of 78.45 and a resolution of 0.0012, allowing precise and responsive control over the pieces.

The Sensors2OSC app sends the X, Y, and Z-axis data via OSC (Open Sound Control) messages, ensuring low latency and high-precision interaction between the phone and the Max/MSP patch. Upon receiving OSC messages, the patch applies various transformations to detect significant changes in hand movements and trigger sound.

The playback of the samples is managed using the "groove~" objects in Max, allowing for continuous looping and amplitude control. Additionally, users can replace samples during the performance, adding versatility and flexibility to the system.

## User Feedback

With regard to the system's efficacy and potential, a user study was conducted with three participants, two musicians and one non-musician. According to the feedback, the project is intuitive and engaging, offering an exciting musical experience. The ease of setup and minimal learning curve highlights the potential for the application to be used by diverse users, regardless of their musical background or technical expertise.

Integrating accelerometer data augmented the experience, as movements enabled more articulate control over the sound than traditional programming methods. However, participants also identified limitations regarding the choice of audio samples. They suggested that percussive or longer ambient sounds would work better as foundational elements.


## Future Work

Users also mentioned several directions for future exploration, such as capturing additional gesture data combined with camera tracking and audiovisual elements. These suggestions open new ways for the design, expanding its capabilities and offering users to have more creative outcomes. For instance, they mentioned that adding biometric data from wearables or integrating multiple data streams could enable more nuanced and expressive control over the sound, creating a richer and more personal musical experience.

Questions about the system's adaptability to different genres or musical styles were also raised. Future developments could involve implementing new features or controls that allow users to tailor the application according to their needs and creative goals.

## Conclusion

The smartphone-based interactive music system may offer a surprisingly exciting and accessible approach to controlling sound through gestures and movements and stimulating improvisational musical experiences. Despite some limitations, the system's flexibility allows for expansion and customization, making it suitable for various musical contexts.
Potential enhancements include:
- Integrating different gesture recognition algorithms.
- Advanced mapping techniques.
- Incorporating additional sensors or input modalities.

Aesthetically, integrating Max/MSP's Jitter objects could create unique effects modulated by accelerometer or gyroscope data, resulting in a multi-sensory experience that blends audio and visual elements. Critically reflecting on the system's benefits, limitations, and potential improvements can lay the foundation for further advancements in interactive music technology at a faster pace.





