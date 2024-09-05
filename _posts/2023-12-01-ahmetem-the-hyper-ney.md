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

In this post, I'll discuss about an interactive music system that I designed and built in the last couple of months. It's called Hyper-Ney and as the name suggests it's an enhanced ney flute.

# About the Ney Flute
[**Ney flute**](https://en.wikipedia.org/wiki/Ney) is an ancient wooden flute from middle east rooting 4500–5000 years back. It's a very **simple design** with 7 holes on a **wooden body**, allowing it's player to create noisy and ambient sound on a continuous pitch scale. You can have a look at this [YouTube video](https://www.youtube.com/watch?v=ALrhXN9qYpI) for a traditional performance with the Ney.

A feature that distinguishes it from similar instruments of other cultures is the flared mouthpiece or lip rest, called a <em>bashpare</em>, traditionally made of water buffalo horn, ivory, or ebony, but in modern times many are plastic or similar durable material.
<br></br>
The Turkish ney is played by pressing the bashpare against nearly-closed lips and angling the flute so that a narrow air stream can be blown from the center of the lips against the interior edge to the left or right, depending on whether the flute is left- or right-handed in construction.<sup>1</sup>

# Designing the Hyper-Ney
Jonathan Impett, a researcher and trumpet player, has influenced the way I think about the Hyper-Ney's design. In designing his [Meta-Trumpet](https://quod.lib.umich.edu/i/icmc/bbp2372.1994.037/1), he made sure to keep the traditional playing techniques intact. He innovated without losing what makes the trumpet, well, a trumpet. Please see [Impett's performance](https://www.youtube.com/watch?v=LJxwEqF80sk) with his instrument with this design perspective in mind

<figure style="text-align: center;">
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_12_01_ahmetem_impett.jpg" alt="The Hyper-Ney" style="display: block; margin: 0 auto; width: 35%;">
  <figcaption style="text-align: center;">
    <span class="caption">Jonathan Impett</span>
  </figcaption>
</figure>

<blockquote style="text-align: center; font-style: italic; font-size: 18px; font-family: 'Times New Roman', serif;">
As far as possible, this is implemented without compromising the richness of the instrument and its technique, or adding extraneous techniques for the performer - most of the actions already form part of conventional performance. In keeping with this idea, it proved possible for the trumpet at the heart of the system to remain inviolate. - Jonathan Impett, 1994
</blockquote>
<br>

Inspired by his approach, when designing the Hyper-Ney, I hold onto the classic aspects of playing the ney flute. I tried to avoid altering the interaction dynamics with the ney instrument as far as possible.

When discussing the design principles for interactive computer instruments, Perry Cook mentions the principle of *spare bandwidth*. This principle focuses on utilizing the unused capacity of the instrument for other purposes, which proves to be very interesting and successfull. I had this principle central when designing the Hyper-Ney.

Ney flute is similar to other flutes in terms of the *spare bandwidth* it offers. I built the Hyper-Ney on this availability, by adding extra techniques to synthesize and process audio. This takes us to the technical part where I will write about the implementation more in detail.

# Deep Into the Technical
To achieve my design goals, I integrated various sensors to a *Mansur* size ney (see [here](https://en.wikipedia.org/wiki/Ney) for size reference). I used a [Bela](https://bela.io/products/bela-and-bela-mini/) for the sound processing and synthesis. Before I describe the Hyper-Ney part by part, please have a look at the final form of the components on the Hyper-Ney below.

<figure style="text-align: center;">
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_12_01_ahmetem_hyper-ney_design.jpg" alt="The Hyper-Ney" style="display: block; margin: 0 auto; width: 85%;">
  <figcaption style="text-align: center;">
    <span class="caption">Main components of The Hyper-Ney</span>
  </figcaption>
</figure>

## Mouthpiece
I added a tiny piece of aluminium tape on the mouthpiece to build a capacitive sensor to capture the position of the lips. It needed a very precise work to be able to place the tape symmetrical to accurately capture the capacitance. 

## Holes
I added tiny solid wires around all 6 front holes of the ney. This allowed me to track the utilization of the holes as well as the amount of coverage of each hole. These capscitive sensor wires are routed along the ney's body and connected to Trill Craft, which is a board for creating complex capacitive sensors with Bela.

## Motion of the Ney Flute's Body
Altough not very common when playing ney, motion of the instrument proved very successfull in terms of interaction and creativity. I added an accelerometer at the end of the ney to use the acceleration in two axes in musical mapping.

## Audio Input
To capture the original sound of the instrument, I attached a contact microphone close to the mouthpiece and routed it's hack cable along the ney to come out with other cables.

## Boards
Bela and BeagleBone Black boards are stacked on top of each other. I created a connection board (perfoboard) to be able to connect to Bela pins in a roboust way. These three boards, input and output jacks and a battery are attached to my lower arm using velcro strips.

Here take a look at two diagrams. One showing the high-level design of the system, second showing the main components of the system and connections, and second showing 

<figure style="text-align: center;">
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_12_01_ahmetem_block_diagram.jpg" alt="The Hyper-Ney" style="display: block; margin: 0 auto; width: 90%;">
  <figcaption style="text-align: center;">
    <span class="caption">System design</span>
  </figcaption>
</figure>

![Detailed Mapping](/assets/image/2024_09_05_ahmetem_hyper-ney-mapping.jpg)

<figure style="text-align: center;">
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_12_01_ahmetem_connection_diagram.jpg" alt="The Hyper-Ney" style="display: block; margin: 0 auto; width: 90%;">
  <figcaption style="text-align: center;">
    <span class="caption">Detailed connection diagram</span>
  </figcaption>
</figure>

<br>

Here is the final look of Hyper Ney.

<figure style="text-align: center;">
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_12_01_ahmetem_hyper-ney_playing.jpg" alt="The Hyper-Ney" style="display: block; margin: 0 auto; width: 50%;">
  <figcaption style="text-align: center;">
    <span class="caption">A closer look at the Hyper-Ney while being played</span>
  </figcaption>
</figure>

## Mapping and Sound Processing
An interesting aspect of my work is that the spare bandwidth I utilized for mapping to sound processing modules changes dynamically during playing. This relies on the acoustic phonmena of "when a higher hole is open, all the lower holes doesn't contribute to anything, i.e., they are extra and can be used for extra controls! See the image below for the availability of holes for mapping, and the next one for how I am calculating the availability continuously from the capacitive sensor input.

<figure style="text-align: center;">
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_12_01_ahmetem_hole_availability.jpg" alt="The Hyper-Ney" style="display: block; margin: 0 auto; width: 50%;">
  <figcaption style="text-align: center;">
    <span class="caption">Availability of holes for mapping under different scenarios of hole usage</span>
  </figcaption>
</figure>

<figure style="text-align: center;">
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_12_01_ahmetem_state_calculation.jpg" alt="The Hyper-Ney" style="display: block; margin: 0 auto; width: 50%;">
  <figcaption style="text-align: center;">
    <span class="caption">The calculation of hole availability, where where H1 to H5 are the closure status of each hole, and S1 to S5 are the states of hole availability, as given in the figure above}</span>
  </figcaption>
</figure>


I implemented a many-to-many mapping of the sensor data to audio processing and synthesizing modules. The lower holes are occupied for controlling a delay effect, and a granular synthesis module which is based on a [steel hang](https://freesound.org/people/aldeainvisible/sounds/261349/) audio recording. The higher holes were occupied for controlling a complex frequency modulator combined with a noise generator. At the same time, majority of the holes are used for determining a carrier frequency that is used in many placed in my sound synthesis and processing modules.

The Hyper-Ney is also available when the *Ney* is not being played in a conventional way. It's still possible to play it on your hand without even touching your lips. However, if you still want to blow while playing your flute, that's fine, you can make music by blowing **on** the contact microphone!

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

The quantitative evaluation of the Hyper-Ney from the audience perspective revealed generally positive feedback. While participants found it moderately challenging to identify specific body parts and instrument interactions (6.33 out of 10), the system and performance provided sufficient audiovisual input for understanding the relationship between the performer's intentions and output (7.33 out of 10). The mapping of gestures to sound was perceived slightly less clearly, with a score of 5.67 out of 10. However, the audience demonstrated a relatively high level of understanding regarding the performer's intentions during the performance (7.67 out of 10). Notably, the lack of perception of errors (2 out of 10), as reflected in the low score, although potentially suggesting a smooth and technically sound execution, may also suggest a potential disconnect or low engagement with the technical aspects of the performance, as there were small errors during my performance. I can reflect more after analyzing the recording of the performance. 

Additionally, written feedback results indicate overall positive feedback on the instrument, praising its captivating sound and the seamless integration of synthesis and ney audio. The mapping of each hole was appreciated for efficient bandwidth utilization. However, some participants found it challenging to grasp the correlation between gestures and specific parameters. Suggestions for improvement included establishing a clearer visual connection between gestures and sound parameters to enhance audience understanding. While the Hyper-Ney was commended for its aesthetics and craftsmanship, some attendees wished for a more visible demonstration of the affects of motion during play. Despite difficulty in recognizing specific mappings, participants enjoyed the performance and highlighted the instrument's organic and natural sound, along with effective use of effects like delay.

# In wrapping up...
All in all, the Hyper-Ney takes your traditional ney flute and enriches its expressive potential. By using the untapped bandwidth of the instrument, I've opened up a bunch of creative possibilities while keeping the soul of the ney intact. It was so fun to work on this creative instrument, and I learned a lot! 

# Performing with the Hyper-Ney
<a name="video"></a>
<iframe width="949" height="534" src="https://www.youtube.com/embed/ySrjSWU_Mf8?start=10&rel=0&autoplay=1&loop=1&controls=0" title="Interactive Music Systems Concert Autumn 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br>

***You can read the paper [HERE](https://www.duo.uio.no/handle/10852/111718)***

***See more interactive music works by MCT students [HERE](https://mct-master.github.io/interactive-music/).***

# References
- V. Bellotti, M. Back, W. K. Edwards, R. E. Grinter, A. Henderson, and C. Lopes. Making sense of sensing systems: Five questions for designers and researchers. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems, CHI ’02, page 415–422, New York, NY, USA, 2002. Association for Computing Machinery.

- P. R. Cook. Principles for designing computer music controllers. In Proceedings of the International Conference on New Interfaces for Musical Expression, pages 3–6, Seattle, WA, 2001.

- J. Impett. A meta trumpet(er). In International Conference on Mathematics and Computing, 1994


<br></br>
<br></br>
<sup>1</sup> Based on content from the Wikipedia article Turkish ney, accessed on 05 September 2024.