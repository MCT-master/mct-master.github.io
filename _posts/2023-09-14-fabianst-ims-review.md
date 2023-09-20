---
layout: post
title: "Controling Guitar Signals Using a Pick?"
date: 2023-09-20 01:00:00 +0200
categories: interactive-music
author: Fabian Stordalen
image: https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_09_14_fabianst_magpick.jpg?alt=original
keywords: ims, hci, guitar, interactive music systems, magpick
excerpt: "A deeper dive into the Magpick"
---

# Controling Guitar Signals Using a Pick?

## Introduction

There are many ways of playing and expressing yourself using the guitar. Either through the use of [extended techniques](https://www.youtube.com/watch?v=UJZvc24IaD4&list=PLk9q3gCxIzjcmDlTBtBw-wMcErt6KqdYc&index=4), [effect pedals](https://www.youtube.com/watch?v=rYaloTRzVtc), or even [augmented guitars](https://www.youtube.com/watch?v=WXhh9hSlyHs). If you want to control and manipulate the signal coming from the guitar you're generally forced to  use your feet to control pedals. But this introduces some problems in regards to adjusting pedal parameters while playing since humans generally don't possess the ability to operate and fine-tune switches and dials with their feet, especially not when wearing shoes.

<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_09_17_fabianst_pedalboard.jpg?alt=original"
  height="600"
  width="600">
  <figcaption>
    <span class="caption">A pedal board can help a guitarist express themselves. </span>
    <i class="photo-credit">Photo by Kelly Sikkema.</i>
  </figcaption>
</figure>

## How to Create New Control Surfaces
There are many ways to go about creating new control surfaces, either for an existing instrument or a new system you've developed. In 2001 Perry R. Cook introduced 13 principles for designing computer music controllers (Cook 2020), and in 2009 he added 3 more (Cook 2009).

These principles are artistic, technological and more philosophical and are meant to serve as guidelines for instrument designers. He notes that these principles are not "universal, but are rather a set of opinions formed as part of the process of making many musical interfaces" (ibid.).

There's also the question of difficulty when designing a new controller. Should playing this instrument be easy? James McDermott et al. makes a case for why music interaction *should* be difficult in some cases (McDermott et al. 2013, 31). One of the main arguments for difficulty is long-term engagement. If a musician can master an instrument without much hassle they will quickly get bored and move on.
## The Magpick

The Magpick introduced at NIME 2019 is an augmented guitar plectrum which enables the user to control pre-defined effects using magnetic signals emitted from the guitar's pickups. This pick promises low latency and highly nuanced control over the sound by using the [bela platform](https://bela.io/). The idea behind the project was to use *ancillary gestures*, which are the physical movements made by musicians while playing their instruments or singing, to control sound production. The Magpick specifically utilizes the pre- and post-pluck movements of the picking hand to actuate the sensors in the plectrum.

<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_09_18_fabianst_magpick.png?alt=original"
  height="600"
  width="600">
  <figcaption>
    <span class="caption">The Magpick system. </span>
    <i class="photo-credit">Photo by bela.</i>
  </figcaption>
</figure>

## Evaluating the System
If analyzed through Perry Cook's principles for designing a computer music controller. Does it hold up to scrutiny? These principles aren't hard rules you have to follow when designing an instrument interface, but more of a design philosophy. The principles most applicable to this project are:
1. **Programmability is a curse**
2. **Copying an instrument is dumb, leveraging expert technique is smart**
3. **Existing instruments suggest new controllers**

Let's have a look at how the Magpick approaches these principles.

### Principle 1: 
#### Programmability is a curse
This principle refers to a sort of feature creep which can often occur when designing a new interface. The Magpick has managed to avoid this feature creep both on the hardware and software side of things. On the hardware side the Magpick features two amplifier circuits. One amp produces an integrator signal used to detect slower movements, while the other produces a proportional signal used for detecting faster movements. The authors have also provided some pseudocode in Pure Data to visualize how little processing is needed to create good interactions.

<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_09_18_fabianst_pseudocode.png?alt=original">
  <figcaption>
    <span class="caption">Pseudocode showing how the Magpick system can be programmed. </span>
    <i class="photo-credit">Photo by bela.</i>
  </figcaption>
</figure>


### Principle 2:
#### Copying an instrument is dumb, leveraging expert technique is smart
Both the second and third principle are closely linked in this project. What Perry means by saying copying is dumb is that instead of re-inventing the wheel you can invent something new wheel-inspired, since the best wheel is still the wheel. The Magpick is not trying to re-invent the guitar pick but rather it uses the guitar pick design to create it's own control interface.

### Principle 3:
#### Existing instruments suggest new controllers
Now the last principle is quite interesting, because it's true in some ways and untrue in others. The guitar pick is decidedly not a *new* controller. But the Magpick is a *new* way of using the controller. As mentioned in their paper, the Magpick is not the first guitar pick controller, there have been others like the [PLXTRUM](https://www.youtube.com/watch?v=lIWzZeIgHIE&t=133s), but it is the first one which uses sensors to detect changes in the magnetic field (Morreale, Guidi, and Mcpherson 2019).

<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_09_18_fabianst_ancientplectrum.jpg?alt=original"
  height="300"
  width="300">
  <figcaption>
    <span class="caption">Vase depicting a subject holding a lyre and plectrum from the late archaic period. </span>
    <i class="photo-credit">Photo by Egisto Sani.</i>
  </figcaption>
</figure>

### What About Difficulty?
The Magpick is interesting when it comes to the question of difficulty, since it is meant to be used by guitarists whom already possess previous knowledge on how to play the guitar and use a traditional pick. They mention that guitarists were able to seamlessly integrate the Magpick into their playing quite quickly (Morreale, Guidi, and Mcpherson 2019, 69). This would suggest that the device is not particularly hard to use, so how can it inspire long-term engagement? Through subtlety and precision. Due to the sensors used and the bela platform which offers extremely low latency players are able to achieve a level of precision not possible with traditional devices such as pedals.

<iframe width="560" height="315" src="https://www.youtube.com/embed/6NU81paEbis?si=qsASyY_YBJL8_EMB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Conclusion
The Magpick offers an interesting control interface for the guitar which is easy to integrate and use for players. Analyzing the controller through Perry Cook's principles one can also see that it avoids many common pitfalls new music controllers often fall into.
## References
bela. (2019, July 4). "Magpick: An Augmented Guitar Pick for Nuanced Control". blog.bela.io. https://blog.bela.io/magpick/ 
Bela Platform. (2019, July 4). "Magpick: an Augmented Guitar Pick for Nuanced Control – Scrambled Delay". Youtube. https://www.youtube.com/watch?v=6NU81paEbis
Cook, Perry R. 2009. “Re-Designing Principles for Computer Music Controllers: A Case Study of SqueezeVox Maggie.” In New Interfaces for Musical Expression. https://api.semanticscholar.org/CorpusID:5050967.
———. 2020. “Principles for Designing Computer Music Controllers.” https://doi.org/10.48550/ARXIV.2010.06524.
Morreale, Fabio, Andrea Guidi, and Andrew Mcpherson. 2019. “Magpick: An Augmented Guitar Pick for Nuanced Control.” In .
Sani, Egisto. "Alcaeus and Sappho". 2012, 9 April. Flickr. https://www.flickr.com/photos/69716881@N02/6916026822/in/photostream/
Sikkema, Kelly. "Untitled Image". 2019, 19 February. UnSplash. https://unsplash.com/photos/oiYgrDjSJhM
