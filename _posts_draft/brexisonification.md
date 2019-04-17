---

layout: post
title: "Brexisonification"
date: 2019-04-19 21:40:00 +0100
categories: sonification-sound-design
author: Sam Roman, Sepehr Haghighi, Eirik Dahl
image: /assets/img/sonification/brexit.jpg
excerpt: Our sonification project which sonifies the brexit voters' data.
---

# Brexisonification

<figure>
  <img src="/assets/img/sonification/?!?!" alt="?!?!" width="50%" align="middle"/>
  <figcaption><strong>?!?!</strong></figcaption>
</figure>

Our project for the Sonification and Sound Design course, is based on sonification of the Brexit voting data and focuses both on audio and visual aspects.
It gets the desired data, in regards to the Brexit voters and sonifies it in an communicative way.
Also there are visual aspects accompanying the sponical aspect of the project, in order to make the project more expressive.

__Keywords:__ _sonification, Max for Live, Ableton Live, Visuals_

## Our system
### Aesthetic choices and concept and Technologies used

<figure>
  <img src="/assets/img/sonification/?!?!" alt="?!?!" width="50%" align="middle"/>
  <figcaption><strong>?!?!</strong></figcaption>
</figure>

Conceptually, we wanted to capture the mood that Brexit has created within the British population. Using samples of Theresa May saying “Brexit”, and alternating it in pitch and intensity creates an atmosphere of panic and chaos. This, coupled with the underlying drone, is brilliantly mimicking the feeling one can get when perceiving international politics. The sense of things going their own chaotic way, without the perceiver being able to affect the situation is similar both for the individuals in Britain, and the listeners to our sonification.

We used ExcelEd, Max for Live and Ableton Live for our purpose. ExcelEd to create the proper dataset, Max for Live to read the dataset in the Ableton and translate it to parameter values, in order to be used for mapping purposes and creating/modifying the visuals.

<figure>
  <img src="/assets/img/sonification/audpatch.png" alt="Audio patch" width="50%" align="middle"/>
  <figcaption><strong>Audio Patch</strong></figcaption>
</figure>

<figure>
  <img src="/assets/img/sonification/vidpatch.png" alt="Video patch" width="50%" align="middle"/>
  <figcaption><strong>Video Patch</strong></figcaption>
</figure>


The main Host was the Ableton which we loaded the samples and synthesizers and effects in it and mapped those value changes to the desired parameters in it.


<figure>
  <img src="/assets/img/sonification/maxpatch1.jpg" alt="Mapping" width="50%" align="middle"/>
  <figcaption><strong>Mapping the visuals in Ablenton Live</strong></figcaption>
</figure>


### Dataset and Mapping

The [dataset](https://data.gov.uk/dataset/008ef38d-2259-43d5-a4ca-13a56f1d7cc2/eu-referendum-results) that we used, included the statistics in regards to the voter's information and regions. It was very comprehensive and well organized and we had several options to chose, in order to sonify.

We mapped several elements, with three types of sonifications (Sampled - Synthesized -  Effects) in our project.
In the first step, the percentage who voted for remaining in the European Union was used for the process (Sampled sonification). When it was above 50%, it triggered a sample, saying “Brexit means, Brexit!”. But when it was below 50% it triggered one which was saying “Remain in the European Union!”

<figure>
  <img src="/assets/img/sonification/maxpatch2.jpg" alt="Mapping" width="50%" align="middle"/>
  <figcaption><strong>The use of samples in Ablenton Live</strong></figcaption>
</figure>

In the next step, the pitch modulation of the voice got higher when the percentage got higher as well (Effects sonification). This was also mapped to the volume, which means it got louder in higher percentages.
After that, Electorate (people) amount in each area was mapped to a synthesizer which created a Beep, and its pitch got higher when the number of the voters raised - up to 2 million - in that specific place (Synthesized sonification).
Also in regards to the general area and the number of the voters in that area, an ominous sound was synthesized and its pitch got raised by the numbers, getting higher (Synthesized sonification).

<figure>
  <img src="/assets/img/sonification/maxpatch3.jpg" alt="Mapping" width="50%" align="middle"/>
  <figcaption><strong>The use of synthesized sound in Ablenton Live</strong></figcaption>
</figure>

In the end, a reverb, as an effect on the sound samples, were mapped to the whole percentage who voted (Effects sonification). It was done in a way that fewer votes, created more reverb.

<figure>
  <img src="/assets/img/sonification/maxpatch4.jpg" alt="Mapping" width="50%" align="middle"/>
  <figcaption><strong>The use of effects in Ablenton Live</strong></figcaption>
</figure>




## Reflective notes


### Overall impression

### Challenges

### Achievements

## Learning outcomes and future work

