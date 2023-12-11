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
There are many ways to go about creating new control surfaces, either for an existing instrument or a new system you've developed. In 2001 Perry R. Cook introduced [13 principles for designing computer music controllers](https://arxiv.org/abs/2010.06524), and in 2009 he added [3 more](https://www.nime.org/proceedings/2009/nime2009_218.pdf).

These principles are artistic, technological and more philosophical and are meant to serve as guidelines for instrument designers. He notes that these principles are not "universal, but are rather a set of opinions formed as part of the process of making many musical interfaces".

There's also the question of difficulty when designing a new controller. Should playing this instrument be easy? James McDermott et al. makes a case for why [music interaction *should* be difficult](https://www.researchgate.net/publication/286349597_Should_Music_Interaction_Be_Easy) in some cases. One of the main arguments for difficulty is long-term engagement. If a musician can master an instrument without much hassle they will quickly get bored and move on.
## The Magpick

The [Magpick](https://www.nime.org/proceedings/2019/nime2019_paper013.pdf) introduced at [NIME 2019](https://www.nime.org/) is an augmented guitar plectrum which enables the user to control pre-defined effects using magnetic signals emitted from the guitar's pickups. This pick promises low latency and highly nuanced control over the sound by using the [Bela platform](https://bela.io/). The idea behind the project was to use *ancillary gestures*, which are the physical movements made by musicians while playing their instruments or singing, to control sound production. The Magpick specifically utilizes the pre- and post-pluck movements of the picking hand to actuate the sensors in the plectrum.

The system works by taking a hollowed out pick and embedding it with loops of wires which then reacts to the magnetic signal sent out from the guitars pickups. So, voltage is generated based on how fast you are playing. The signal then gets sent to an amplifier before it reaches Bela to be further processed.

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
1. **Copying an instrument is dumb, leveraging expert technique is smart**
2. **Existing instruments suggest new controllers**

Let's have a look at how the Magpick approaches these principles.

### Principle 1:
#### Copying an instrument is dumb, leveraging expert technique is smart
Both the second and third principle are closely linked in this project. What Perry means by saying copying is dumb is that instead of re-inventing the wheel you can invent something new wheel-inspired, since the best wheel is still the wheel. The Magpick is not trying to re-invent the guitar pick but rather it uses the guitar pick design to create it's own control interface.

The Magpick is used very similarly to a traditional pick. A lot of the gestures utilized will be familiar to guitarists. Although it does add some new gestures to the repertoire, like vertical strumming above the strings demonstrated here.

<iframe width="560" height="315" src="https://www.youtube.com/embed/09sDsUIVr2Y?si=Ob8FeLLOHBeIFBGe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Principle 2:
#### Existing instruments suggest new controllers
Now the last principle is quite interesting, because it's true in some ways and untrue in others. The guitar pick is decidedly not a *new* controller. But the Magpick is a *new* way of using the controller. As mentioned in their paper, the Magpick is not the first guitar pick controller, there have been others like the [PLXTRUM](https://www.youtube.com/watch?v=lIWzZeIgHIE&t=133s), but it is the first one which uses sensors to detect changes in the magnetic field.

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
The Magpick is interesting when it comes to the question of difficulty, since it is meant to be used by guitarists whom already possess previous knowledge on how to play the guitar and use a traditional pick. They mention that guitarists were able to seamlessly integrate the Magpick into their playing quite quickly. This would suggest that the device is not particularly hard to use, so how can it inspire long-term engagement? Through subtlety and precision. Due to the sensors used and the Bela platform which offers extremely low latency players are able to achieve a level of precision not possible with traditional devices such as pedals.

<iframe width="560" height="315" src="https://www.youtube.com/embed/6NU81paEbis?si=qsASyY_YBJL8_EMB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Conclusion
The Magpick offers an interesting control interface for the guitar which is easy to integrate and use for players. Analyzing the controller through Perry Cook's principles one can also see that it avoids many common pitfalls new music controllers often fall into.


