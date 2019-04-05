---
layout: post
title: "Two days of workshop on Sonification with Thomas Hermann"
date: 2019-04-05 05:00:00 +0200
categories: Sonification
author: Shreejay Shrestha
image: /assets/img/thermann-photo-2009.jpg 
excerpt: "It was my privilege and honour to facilitate a guest lecture and  introduce one of the Gurus in the field of sonification, Dr. Thomas Hermann. He shared his enormous knowledge on sonification with hands on exercises for two days (March 28, and 29, 2019) through the MCT portal in Trondheim. I am quite excited to share my notes and will try to cover the summary of his talks below."
Keywords: Thomas Hermann, Sonification
---

<figure>
<img src="/assets/img/thermann-photo-2009.jpg " width = "100%" align="center" />
  <figcaption>Dr. Thomas Hermann</figcaption>
</figure>

It was my privilege and honour to facilitate a guest lecture and  introduce one of the Gurus in the field of sonification, Dr. Thomas Hermann. He shared his enormous knowledge on sonification with hands on exercises for two days (March 28, and 29, 2019) through the MCT portal in Trondheim. I am quite excited to share my notes and will try to cover the summary of his talks below. But first, let me give a short introduction of  the guest speaker.  Dr. Thomas Hermann is a computer scientist working in the field of Neuroinformatics. He earned his Master’s degree in Physics in 1997 and Ph.D. in Computer Science in 2002, both from Bielefeld University, Germany. The topic of his doctoral thesis is ‘ Sonification for Exploratory Data Analysis’. His research focus is on sonification, data mining, human-computer interaction and ambient intelligence. You can explore his <a href="https://pub.uni-bielefeld.de/person/11596" target="_blank">publications</a> and know more about him <a href="https://sonification.de/thermann/" target="_blank">here</a>.

## Sonification & Overview of Sonification Techniques

We use all of our senses to perceive the world. However, while exploring the digital world, significant amount of information processing is done visually. As such, sound has become a neglected modality. Thus, Sonification can enhance our perception in better understanding of the digital world through sounds. Sound has a long tradition in science eg use of stethoscope, Geiger counter, machine diagnostics etc.

Sonification is the use of non-speech audio to convey information (NSF-Report, Kramer et.al). A modern definition is put forward by Hermann T., 2008, ICAD, that says; Sonification is a technique that uses a data set as input and produces sound signals. The technique, however, should meet the following conditions; The sound should reflect objective properties or relation in the input data, the transformation is systematic, the sonification is reproducible and the system can be used with different data set. 

## Sonification Techniques

<figure>
<img src="/assets/img/sonification techniques.JPG" width = "100%" align="center" />
  <figcaption>Sonification Techniques</figcaption>
</figure>

## Audification

It is more or less the direct translation of data into sounds and is applicable only for structured data sources eg time/space etc.

<figure align="middle">
<audio controls>
  <source src="/assets/sounds/SHB-S12.3.mp3" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
  <figcaption>Example S12.3: Earthquake</figcaption>
  <figcaption><a href="http://www.sonifyer.org/sound/erdbewegung/" target="_blank">Source</a></figcaption>
</figure>
 

## Earcon
It can be defined as structured sounds that serve as index for abstract messages. 

<figure align="middle">
<audio controls>
  <source src="/assets/sounds/SHB-S14.1.mp3" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
  <figcaption>Example S14.1: An Earcon representing a paint filee</figcaption>
  Figure source: Brewster, Wright and Edwards (1994)
</figure>
  

## Auditory Icons
It can be defined as acoustic event markers whose meaning can be understood via an association process. It is easier to understand than earcons. 

<figure align="middle">
<audio controls>
  <source src="/assets/sounds/SHB-S13.2.mp3" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
  <figcaption>Example S13.2: A flowing river</figcaption>
   <figcaption><a href="https://sonification.de/handbook/chapters/chapter13/#S13.2" target="_blank">Source</a></figcaption>
</figure>


## Parameter Mapping Sonification
In this technique, data is mapped with different parameter of sound synthesis. Following example is taken from                         <a href="https://sonification.de/handbook/" target="_blank">'The Sonification Handbook'</a>. It shows continuous change of rising water temperature with five data points (in the original sonification, each respectively mapped to each of the five stages of heating water in traditional Chinese tea preparation simulated here).

<figure align="middle">
<audio controls>
  <source src="/assets/sounds/SHB-S15.3.mp3" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
  <figcaption>Example S15.3:Sonifying specific data points in a sequence along with the entire process</figcaption>
  <figcaption><a href="https://sonification.de/handbook/chapters/chapter15/#S15.3" target="_blank">Source</a></figcaption>
</figure>
 
 
## Model Based Sonification
Here, a data set is used to construct a virtual data object in a state of equilibrium condition. The object is then allowed to be disturbed by human interaction which transfers the energy and produces a temporal signal that can be sonified. It has many benifits over parameter mapping sonification. It is generally applicable for any type of data set. It facilitates interpretation, and the interaction with data is built-in via excitation. It can be useful in creating more complex sounds due to holistic dependencies etc. The figure below is derived from chapter 16 from <a href="https://sonification.de/handbook/" target="_blank">'The Sonification Handbook'</a>.

<figure>
<img src="/assets/img/mbs.png" width = "100%" align="center" />
  <figcaption>Model Based Sonification</figcaption>
</figure>

## Application of Sonification and auditory display
It can set the eyes free as a replacement of visual information and thereby can serve as a powerful medium for visually impaired people. It is very useful in data mining that enable to see hidden patterns/informations. It also enable better monitoring of complex processes for eg. in analysis of Epileptic EEG as sonification helps to perceive dynamic changes in brain activity. Similarly, vocal EEG sonification helps to learn concepts from experience, measuring EEG of a person while sleeping etc.In the same way, Interactive sonification can substitute or amplify sensory information and can be used in rehabilitation, therapy, skills learning, sports performance etc.

## Q&A

The talks were very intresting and thus there were plenty of questions from both Oslo and Trondheim. One question was about the adverse effect of sonification that asked if it adds in noise pollution instead. In reply, Thomas said that it’s a frequently raised issue and it is not true. He gave an example of a supermarket where numerous scanners produce high frequency(~1000Hz) sounds. He arguied that sonification could result in better sound design that could rather change the harmful soundscape into more healthy, aesthetically more pleasing or entertaining. It could even be designed to serve multiple purposes like notifying users with various offers etc. Similarly, some questions were posed regarding sound design and reason for selecting particular type of sound. Thomas clarified that sonification design are meant for specific tasks under specific situation with specific audio context in mind. He added that, at times there could be conflicts or even trade-offs between aesthetic qualities and informative aspects. Therefore, he suggested that one should maintain a check and balance as it’s nature is often subjective and open ended.  

### Final Reflections  

I was very inspired by Thomas's ideas and his works in the field of sonification. I had goosebumps when he showed the example of EEG of a boy showing his brain activity. It was breathtaking to see how well sonification communicated the state of his brain activity which is,in my openion, far more superior than any other visual display. Besides, I have been dazzled with whole new facets of music since the beginning of the MCT program. And the talks in this MCT4046 Sonification and Sound Design course has driven me to a next level. Its a great experience being exposed to professionals working with sounds/music technology in many different ways. I feel so proud to be a part of the MCT program.











