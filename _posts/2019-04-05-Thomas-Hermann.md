---
layout: post
title: " An Overview of Sonification by Thomas Hermann"
date: 2019-04-05 05:00:00 +0200
categories: Sonification
author: Shreejay Shrestha
image: /assets/img/thermann-photo-2009.jpg 
excerpt: "It was my privilege and honour to facilitate a guest lecture and introduce one of the 'Gurus' in the field of sonification, Dr. Thomas Hermann. He shared his enormous knowledge on sonification with hands on exercises for two days (March 28, and 29, 2019) through the MCT portal in Trondheim. I am quite excited to share my notes and will try to cover the summary of his talks in this blog."
Keywords: Thomas Hermann, Sonification
---

<figure>
<img src="/assets/img/thermann-photo-2009.jpg " width = "100%" align="center" />
  <figcaption>Dr. Thomas Hermann</figcaption>
  <figcaption>Source: https://sonification.de/thermann/thermann-photo-2009/</figcaption>
</figure>

It was my privilege and honour to facilitate a guest lecture and introduce one of the 'Gurus' in the field of sonification, Dr. Thomas Hermann. He shared his enormous knowledge on sonification with hands on exercises for two days (March 28, and 29, 2019) through the MCT portal in Trondheim. I am quite excited to share my notes and will try to cover the summary of his talks below. But first, let me give a short introduction of the guest speaker.  Dr. Thomas Hermann is a computer scientist working in the field of Neuroinformatics. He earned his master’s degree in Physics in 1997 from Bielefeld University, Germany. He also achieved his Ph.D. in Computer Science in 2002 from Bielefeld University with his thesis on‘ Sonification for Exploratory Data Analysis’. His research focus is on sonification, data mining, human-computer interaction and ambient intelligence. You can explore his <a href="https://pub.uni-bielefeld.de/person/11596" target="_blank">publications</a> and know more about him <a href="https://sonification.de/thermann/" target="_blank">here</a>.

## Sonification 

Sound has a long tradition in science e.g. in the use of Stethoscope, Geiger Counter, machine diagnostics etc. In contrast, visual activity has been dominating the processing and dissemination of information in our digital world. Nonetheless we use all our senses to perceive the world. Thus sonification can play a significant role in the enhancement of our perception in this digital world by using the neglected modality of sound.

Sonification is the use of non-speech audio to convey information (Kramer et.al, 1999). A relatively modern definition is put forward by Hermann(2008). As per the definition, a technique that uses a data set as input and produces sound signals, can be termed as sonification if it meets the following conditions; The sound should reflect objective properties or relation in the input data, the transformation is systematic, the sonification is reproducible and the system can be used with different data set. 

<figure>
<img src="/assets/img/sonification_defn.JPG" width = "100%" align="center" />
<figcaption>Definition of Sonification as per Hermann, 2008 </figcaption>
</figure>

## Overview of Sonification Techniques

<figure>
<img src="/assets/img/sonification techniques.JPG" width = "100%" align="center" />
  <figcaption>Sonification Techniques</figcaption>
  </figure>

## Audification

Audification is the process of direct translation of data into sounds.It is applicable only for structured data sources eg time/space etc. The following example is an audification of earthquake in Tohoku, Japan, 2011/03/11 - 2011/03/12. 

<figure align="middle">
<audio controls>
  <source src="/assets/sounds/SHB-S12.3.mp3" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
  <figcaption><a href="http://www.sonifyer.org/sound/erdbewegung/" target="_blank">Example S12.3: Earthquake</a></figcaption>
  <figcaption>Source: Hermann, Hunt, & Neuhoff, 2011 </figcaption>
  </figure>
 

## Earcon
Earcons are structured sounds that serve as index for abstract messages. For example, those who are using windows operating system may be aware of system sounds when starting the computer or getting some error messages, earcons are these type of sounds. Below is another similar kind of example

<figure align="middle">
<audio controls>
  <source src="/assets/sounds/SHB-S14.1.mp3" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
  <figcaption><a href=" https://sonification.de/handbook/chapters/chapter14/#S14.2" target="_blank">Example S14.1: Earcon representing a paint file</a></figcaption>
<figcaption>Source: Hermann et. al., 2011</figcaption>
</figure>
 

## Auditory Icons
It can be defined as acoustic event markers whose meaning can be understood via an association process. It is easier to understand than earcons because unlike earcons, the sounds do not have abstract meaning. Auditory icons have an existing relationship between the sound and the information that it is providing.

<figure align="middle">
<audio controls>
  <source src="/assets/sounds/SHB-S13.2.mp3" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
  
   <figcaption><a href="https://sonification.de/handbook/chapters/chapter13/#S13.2" target="_blank">Example S13.2: A flowing river</a></figcaption>
   <figcaption>Source: Hermann et. al., 2011</figcaption>
</figure>


## Parameter Mapping Sonification
In this technique, a data set is mapped with different parameter of sound synthesis. Following example is taken from                         <a href="https://sonification.de/handbook/" target="_blank">'The Sonification Handbook'</a>. It shows continuous change of rising water temperature with five data points.

<figure align="middle">
<audio controls>
  <source src="/assets/sounds/SHB-S15.3.mp3" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
    <figcaption><a href="https://sonification.de/handbook/chapters/chapter15/#S15.3" target="_blank">Example S15.3:Sonifying specific data points in a sequence along with the entire process</a></figcaption>
   <figcaption>Source: Hermann et. al., 2011</figcaption>
</figure>
 
 
## Model Based Sonification
Here, a data set is used to construct a virtual data object in a state of equilibrium. The object is then allowed to be operated by human interaction which transfers the energy and produces a temporal signal that can be sonified. It has many benifits over parameter mapping sonification. It is generally applicable for any type of data set. It facilitates interpretation, and the interaction with data is built-in via excitation. It can be useful in creating more complex sounds due to holistic dependencies etc. 

<figure>
<img src="/assets/img/mbs.png" width = "100%" align="center" />
  <figcaption>Model Based Sonification</figcaption>
  <figcaption>Source: Hermann et. al., 2011</figcaption>
</figure>

## Application of Sonification and auditory display
The application of sonification is quite diverse. It can set the eyes free as a replacement of visual information and serve as a powerful medium for visually impaired people. It can be useful in data mining enabling to see hidden patterns/informations. Similarly, it enables better monitoring of complex processes for eg. in analysis of epileptic brain activity as sonification of EEG helps to perceive dynamic changes in brain activity. Likewise, vocal EEG sonification helps to learn concepts from experience, measuring EEG of a person while sleeping etc. Moreover, interactive sonification can substitute or amplify sensory information which can be used in rehabilitation, therapy, skills learning, sports performance etc.

## Q&A

The talks were very intresting and thus there were plenty of questions from both Oslo and Trondheim. One question was about the adverse effect of sonification that asked if it adds in noise pollution instead. In reply, Thomas said that it’s a frequently raised issue which is totally untrue. He explained it giving an example of a supermarket where numerous scanners produce high frequency(~1000Hz) sounds. He arguied that sonification could result in better sound design that could rather change the harmful soundscape into more healthy, aesthetically more pleasing or entertaining. It could even be designed to serve multiple purposes like notifying users with various offers etc. Similarly, some questions were posed regarding sound design and reasons for selecting particular type of sound. Thomas clarified that sonification designs are meant for specific tasks under specific situation with specific audio context in mind. He added that, at times there could be conflicts or even trade-offs between aesthetic qualities and informative aspects. Therefore, he suggested that one should maintain a check and balance as it’s nature is often subjective and open ended.  

### Final Reflections  

I was very inspired by Thomas's ideas and his works in the field of sonification. I had goosebumps when he showed the example of EEG of a boy showing his brain activity. It was breathtaking to see how well sonification communicated the state of his mind which is,in my openion, far more superior than any other visual display. Besides, I have been dazzled with whole new facets of music since the beginning of the MCT program. And the talks in this MCT4046 Sonification and Sound Design course has driven me to a next level. Its a great experience being exposed to professionals working with sounds/music technology in many different ways. I feel so proud to be a part of the MCT program.

#### Reference
Hermann, T. (2008). *TAXONOMY AND DEFINITIONS FOR SONIFICATION AND AUDITORY DISPLAY.* 14th International Conference on Auditory Display,      Paris, France June 24 - 27, 2008. Retrieved from: <a href="http://www.icad.org/Proceedings/2008/Hermann2008.pdf" target="_blank">http://www.icad.org/Proceedings/2008/Hermann2008.pdf</a>.


Hermann, T., Hunt, A., & Neuhoff, J. G. (2011). *The Sonification Handbook (1st ed.)*. Berlin: Logos Publishing House. Retrieved from:        <a href="https://sonification.de/handbook/" target="_blank">https://sonification.de/handbook/</a>.

Kramer, G., Bargar, R., Barrass, S., Berger, J., Evreinov, G., Tecumseh Fitch, W., … Tipei, S. (1999). *Sonification Report: Status of      the Field and Research Agenda*. International Community for Auditory Display. Retrieved from: <a href= "http://www.icad.org/websiteV2.0/References/nsf.html" target="_blank">http://www.icad.org/websiteV2.0/References/nsf.html</a>.

















