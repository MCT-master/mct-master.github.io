---
layout: post
title: "The Hyper-Ney"
date: 2023-12-01 23:00:00 +0200
categories: interactive-music
author: Emin Memis
image: /assets/image/2023_12_01_ahmetem_hyper-ney-cover.jpg
keywords: ims, hci, sensors, flute
excerpt: "Electrizing an ancient flute using capacitive and motion sensors"
---

<figure style="text-align: center;">
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_12_01_ahmetem_hyper-ney.jpg" alt="The Hyper-Ney" style="display: block; margin: 0 auto; width: 85%;">
  <figcaption style="text-align: center;">
    <span class="caption">The Hyper-Ney</span>
  </figcaption>
</figure>

<span style="font-size:small; font-style: italic;">⏯ A video may be auto-playing down in this page - [jump to video](#video)</span><br>

In this post, I'll discuss about an interactive music system that I designed and built in the last couple of months. It's called Hyper-Ney and as the name suggests it's an augmented ney flute.

Ney flute is an ancient wooden flute from middle east rooting 4500–5000 years back. It's a very primitive design with 7 holes on a wooden body, allowing it's master to create noisy and ambient sound on a continuous pitch scale. I integrated  electronic sensors to this beautiful instrument to extend creative opportunities beyond it's capability.

# Design Principles
While designing a Meta-Trumpet, Jonathan Impett aimed for not compromising the traditional playing techniques of the trumpet.

<blockquote style="text-align: center; font-style: italic; font-size: 18px; font-family: 'Times New Roman', serif;">
As far as possible, this is implemented without compromising the richness of the instrument and its technique, or adding extraneous techniques for the performer - most of the actions already form part of conventional performance. In keeping with this idea, it proved possible for the trumpet at the heart of the system to remain inviolate. - Jonathan Impett, 1994
</blockquote>
<br>

Similarly, when designing the Hyper-Ney, I tried to avoid altering the interaction dynamics with the ney instrument as far as possible. So, playing of the The Hyper-Ney involves similar interaction and input modalities.

When discussing the design principles for interactive computer instruments, Perry Cook mentions the principle of *spare bandwidth*. This principle focuses on utilizing the unused capacity of the instrument and its performer. I thought this is a very interesting and successfull approach and had this principle central when designing the Hyper Ney.

# Deep into technical part
To achieve the design goals I have above, I integrated various sensors to a Mansur size ney (see [here](https://en.wikipedia.org/wiki/Ney) for size reference). I used Bela for the sound processing and synthesis.

<figure style="text-align: center;">
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_12_01_ahmetem_hyper-ney_design.jpg" alt="The Hyper-Ney" style="display: block; margin: 0 auto; width: 85%;">
  <figcaption style="text-align: center;">
    <span class="caption">Main components of The Hyper-Ney</span>
  </figcaption>
</figure>

## Mouthpiece
I added a tiny piece of aluminium wire on the mouthpiece to build a capacitive sensor to capture the position of the lips. It needed a very precise work to be able to place the tape symmetrical to accurately capture the capacitance. 

## Holes
I added tiny solid wires around all 6 front holes of the ney. This allowed me to track the utilization of the holes as well as the amount of coverage of each hole. These capscitive sensor wires are routed along the ney's body and connected to Trill Craft, which is a board for creating complex capacitive sensors with Bela.

## Motion of the Instrument as a Controller
Altough not very common when playing ney, motion of the instrument proved very successfull in terms of interaction and creativity. I added an accelerometer at the end of the ney to use the acceleration in two axes in musical mapping.

## Audio Input
To capture the original sound of the instrument, I attached a contact microphone close to the mouthpiece and routed it's hack cable along the ney to come out with other cables.


## Boards
Bela and BeagleBone Black boards are stacked on top of each other. I created a connection board (perfoboard) to be able to connect to Bela pins in a roboust way. These three boards, input and output jacks and a battery are attached to my lower arm using velcro strips.

Here is the final look of Hyper Ney.

<figure style="text-align: center;">
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_12_01_ahmetem_hyper-ney_playing.jpg" alt="The Hyper-Ney" style="display: block; margin: 0 auto; width: 50%;">
  <figcaption style="text-align: center;">
    <span class="caption">Main components of The Hyper-Ney</span>
  </figcaption>
</figure>


# Did it really work?
I conducted a user study to evaluate the insturment from the audience's perspective. Adopting Bellotti and colleagues' method, I asked five questions to gather scores for different aspects of how the audience percieve and experience the instrument. These aspects are:
- Cause comprehension - “How well could you identify the specific parts of the performer’s body and the instrument that were utilized to interact with the system?”
- Effect comprehension - “To what extend the system and the performance provided enough audiovisual input to understand the relationship between the performer’s intentions and the resulting output?”
- Mapping comprehension - “To what extend do you think you understood the mapping of the gestures to sound produced by the instrument?”
- Intention comprehension - “To what extend could you understand the user’s intention while his performance?”
- Error comprehension - “To what extend could you perceive the errors (technical problems, failed or unmapped gestures, unwanted audio) during the performance?”

After a performance with The Hyper-Ney, I asked these questions to 3 people who were moderately familiar with the instrument's design (scored 5.333 in 10) and here are the results of this survey.

| Question                              | Mean Score |
|---------------------------------------|------------|
| Familiarity with the Hyper-Ney        | 5.333      |
| General Impression of the Performance | 8          |
| Cause Comprehension                   | 6.333      |
| Effect Comprehension                  | 7.333      |
| Mapping Comprehension                 | 5.667      |
| Intention Comprehension               | 7.667      |
| Error Comprehension                   | 2          |

<br>

The quantitative evaluation of the Hyper-Ney from the audience perspective revealed generally positive feedback. Participants had a moderate level of familiarity with the instrument, averaging a score of 5.333 out of 10. While participants found it moderately challenging to identify specific body parts and instrument interactions (6.33 out of 10), the system and performance provided sufficient audiovisual input for understanding the relationship between the performer's intentions and output (7.33 out of 10). The mapping of gestures to sound was perceived slightly less clearly, with a score of 5.67 out of 10. However, the audience demonstrated a relatively high level of understanding regarding the performer's intentions during the performance (7.67 out of 10). Notably, the lack of perception of errors (2 out of 10), as reflected in the low score, although potentially suggesting a smooth and technically sound execution, may also suggest a potential disconnect or low engagement with the technical aspects of the performance, as there were small errors during my performance. I can reflect more after analyzing the recording of the performance. 

Additionally, written feedback results indicate overall positive feedback on the instrument, praising its captivating sound and the seamless integration of synthesis and ney audio. The mapping of each hole was appreciated for efficient bandwidth utilization. However, some participants found it challenging to grasp the correlation between gestures and specific parameters. Suggestions for improvement included establishing a clearer visual connection between gestures and sound parameters to enhance audience understanding. While the Hyper-Ney was commended for its aesthetics and craftsmanship, some attendees wished for a more visible demonstration of the affects of motion during play. Despite difficulty in recognizing specific mappings, participants enjoyed the performance and highlighted the instrument's organic and natural sound, along with effective use of effects like delay.

# In wrapping up...
All in all, the Hyper-Ney takes your traditional ney flute and turns it into a musical powerhouse. By using the untapped potential of the instrument's holes, we've opened up a whole new world of creative possibilities while keeping the soul of the ney intact.  All we did is, sprinkling some sensors on the ney, connecting it to Bela and let the magic happen!

# Performing with the Hyper-Ney
<a name="video"></a>
<iframe width="949" height="534" src="https://www.youtube.com/embed/ySrjSWU_Mf8?start=10&rel=0&autoplay=1&loop=1&controls=0" title="Interactive Music Systems Concert Autumn 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


# References
- V. Bellotti, M. Back, W. K. Edwards, R. E. Grinter, A. Henderson, and C. Lopes. Making sense of sensing systems: Five questions for designers and researchers. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems, CHI ’02, page 415–422, New York, NY, USA, 2002. Association for Computing Machinery.

- P. R. Cook. Principles for designing computer music controllers. In Proceedings of the International Conference on New Interfaces for Musical Expression, pages 3–6, Seattle, WA, 2001.

- J. Impett. A meta trumpet(er). In International Conference on Mathematics and Computing, 1994

