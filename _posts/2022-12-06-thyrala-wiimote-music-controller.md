---
layout: post
title: "Wii controller as the Gestural Controller"
date: 2022-12-06 17:00:00 +0200
categories: interactive-music
author: Thyra Liang Aakvåg
image: /assets/image/2022_12_06_thyrala_cover_wiimote_music_controller.jpg 
keywords: interactive-music-system, wii, wii-controller, mct
excerpt: "Read this post to find information on a different use of a Wiimote than playing games on your Wii console."
---

<figure>
    <img src="/assets/image/2022_12_06_thyrala_wiimote_first.jpg" 
    alt="Wii Controller" title="" align="center"/>
    <figcaption><i>Wii Controller</i></figcaption>
</figure>

You might know the Wiimote from playing bowling, tennis, or even fencing on your Wii console back in the day. This might be the more traditional way of using the controller, but that didn’t stop anyone from exploring other possible ways of applying it. Though many tried the Wiimote on other game consoles, some thought about the use of it in a musical sense. With its 6 degrees of freedom and affordability, it had the potential to become a powerful digital interactive music system. This was tested by Wong et al. among others.

# Design
Gesture is a big part, if not the biggest, of how we interact with interactive music systems today. And how these gestures are mapped into sound depends on how the system interprets the gestures. With 6 degrees of freedom: 3 linear translation directions in X, Y, and Z positions and 3 rotation angles e.i. pitch, roll, and yaw - the Wiimote has the opportunity to interpret movement from more than pushing buttons. The controller of Wong et al. uses the built-in accelerometer to measure acceleration in the 3 different direction positions. With this, moving around how you feel, can lead to music that matches your mood and feelings. 

<figure>
    <img src="/assets/image/2022_12_06_thyrala_wiimote_music_controller.jpg" alt="Wii Controller Motion Sensing" title="" align="center"/>
    <figcaption><i>Wii Controller Motion Sensing</i></figcaption>
</figure>

# Evaluation by musicians vs. non-musicians
Something I found interesting in the paper by Wong et al. was that they compared the evaluation from musicians with the one from non-musicians. The system was designed to detect different beat patterns, and Wong et al. tested how well these patterns were detected in the hands of the different experienced people, as well as how they felt about the experience with the Wiimote.

<figure>
    <img src="/assets/image/2022_12_06_thyrala_beat_pattern_wiimote.jpg" alt="Conducting gestures of 2/4 and 4/4 beat pattern" title="" align="center"/>
    <figcaption><i>Conducting gestures of 2/4 and 4/4 beat pattern</i></figcaption>
</figure>

<figure>
    <img src="/assets/image/2022_12_06_thyrala_curve_line_wiimote.jpg" alt="2/4 beat pattern in curve and linear shape" title="" align="center"/>
    <figcaption><i>2/4 beat pattern in curve and linear shape</i></figcaption>
</figure>

The people with music experience often listen more to the actual music, while the non-musicians mostly focused on the visual aspect of the system. And what the people with little to nothing experience in music did pay attention to with the sound, was the control of it, not necessarily the music directly. 

The musicians often tested the gestural controller with motions corresponding to how they usually perform, which wasn’t the direct intention of this designed system. The “amateurs” however often used the system as intended, which also makes sense since the system wasn’t developed for professionals. On the other side, the experienced musicians got their gestures detected more than the non-musicians. The people with no background in music didn’t quite understand how the usage of force affected the controller, hence how important it is in the expression of emotions, ascent, etc. This led to less detection of the gestures.

# Article of inspiration
If you liked this post, I recommend you to read the original article by Wong et al. Thanks for reading! :))

Elaine L. Wong, Wilson Y. F. Yuen, and Clifford S. T. Choy. 2008. Designing Wii controller: a powerful musical instrument in an interactive music performance system. In Proceedings of the 6th International Conference on Advances in Mobile Computing and Multimedia (MoMM '08). Association for Computing Machinery, New York, NY, USA, 82–87. [https://doi.org/10.1145/1497185.1497205](https://doi.org/10.1145/1497185.1497205)

# Video not related to article
Here is a YouTube video of someone making music with the Wiimote.

<iframe 
    width="560" height="315" 
    src="https://www.youtube.com/embed/YU2lYohgUnI" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    >
</iframe>