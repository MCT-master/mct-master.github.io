---
layout: post
title: " An Overview of Sonification by Thomas Hermann"
date: 2019-04-05 05:00:00 +0200
categories: sonification
author: Shreejay Shrestha
image: /assets/image/2019_04_05_aleksati_thermann-photo-2009.jpg
excerpt: "It was my privilege and honour to facilitate a guest lecture and introduce one of the 'Gurus' in the field of sonification, Dr. Thomas Hermann. He shared his enormous knowledge on sonification with hands on exercises for two days (March 28, and 29, 2019) through the MCT portal in Trondheim. I am quite excited to share my notes and will try to cover the summary of his talks in this blog."
Keywords: Thomas Hermann, Sonification
---

<figure>
<img src="/assets/image/2019_04_05_aleksati_thermann-photo-2009.jpg " width = "100%" align="center" />
  <figcaption>Dr. Thomas Hermann</figcaption>
  <figcaption><a href="https://sonification.de/thermann/thermann-photo-2009/" target="_blank">Pic Source: https://sonification.de/</a></figcaption>
</figure>

It was my privilege and honour to facilitate a guest lecture and introduce one of the 'Gurus' in the field of sonification, Dr. Thomas Hermann. He shared his enormous knowledge on sonification with hands on exercises for two days (March 28, and 29, 2019) through the MCT portal in Trondheim. I am quite excited to share my notes and will try to cover the summary of his talks below. But first, let me give a short introduction of the guest speaker.  Dr. Thomas Hermann is a computer scientist working in the field of Cognitive Interaction Technology. He earned his master’s degree in Physics in 1997 from Bielefeld University, Germany. He also achieved his Ph.D. in Computer Science in 2002 from Bielefeld University with his thesis on ‘Sonification for Exploratory Data Analysis’. His research focus is on sonification, data mining, human-computer interaction and ambient intelligence. You can explore his <a href="https://pub.uni-bielefeld.de/person/11596" target="_blank">publications</a> and know more about him <a href="https://sonification.de/thermann/" target="_blank">here</a>.

## Day 1
In the first day, Thomas introduced the taxonomy and definition for sonification and auditory display, making us aware that sonification itself is relatively at its developing phase. While sound has a long tradition in science e.g. in the use of Stethoscope, Geiger Counter, machine diagnostics etc., visual elements have been dominating the processing and dissemination of information in the digital age. Nonetheless, we use all our senses to perceive the world. Thus, sonification can play a significant role in the enhancement of our perception in this era of computers by using the neglected modality of sound.

### Sonification

<figure>
<img src="/assets/image/2019_04_05_aleksati_sonification_defn.JPG" width = "100%" align="center" />
<figcaption><a href="http://www.icad.org/Proceedings/2008/Hermann2008.pdf" target="_blank">Diagram reproduced from T. Hermann (2008), TAXONOMY AND DEFINITIONS FOR SONIFICATION AND AUDITORY DISPLAY,http://www.icad.org/Proceedings/2008/Hermann2008.pdf</a></figcaption>
</figure>

Sonification is the use of non-speech audio to convey information (Kramer et.al, 1999). Hermann(2008) has given a relatively modern definition of sonification as a technique, that uses a data set as input and produces sound signals,  if it meets the
following conditions: (1) the sound should reflect objective properties or relation in the input data, (2) the transformation is
systematic, (3) the sonification is reproducible, and (4) the system can be used with different data sets.

### Overview of Sonification Techniques

<figure>
<img src="/assets/image/2019_04_05_aleksati_sonification techniques.JPG" width = "100%" align="center" />
<figcaption><a href="https://sonification.de/media/SonTechniques.png" target="_blank">Figure adapted from https://sonification.de/media/SonTechniques.png</a></figcaption>
</figure>

#### Audification

Audification is the process of direct translation of data into sounds. It is applicable only for structured data sources e.g. time/space etc. The following example is an audification of earthquake in Tohoku, Japan, 2011/03/11 - 2011/03/12.

<figure align="middle">
<audio controls>
<source src="https://docs.google.com/uc?export=download&id=1rqukdBEjwq4sUGUtS-2BIun4pZ7V_Pxm" type="audio/wav" volume="0.2">
Your browser does not support the audio element.
</audio>
<figcaption><a href="http://www.sonifyer.org/sound/erdbewegung/" target="_blank">Sound example by www.sonifyer.org taken from https://sonification.de/handbook/chapters/chapter12/#S12.3</a></figcaption>
</figure>

#### Earcon
Earcons are structured sounds that serve as index for abstract messages. For example, those who are using windows operating system in their computer, may be aware of the system sounds when the computer starts or gets some error messages etc., earcons are these types of sounds. Below is another similar kind of example.

<figure align="middle">
<audio controls>
  <source src="https://docs.google.com/uc?export=download&id=1RmOCZZBBGpcf2yHNNQRgwaFYQlOW0Nth" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
  <figcaption><a href=" https://sonification.de/handbook/chapters/chapter14/#S14.2" target="_blank">Sound example by T. Hermann, A. Hunt and J.G. Neuhoff taken from https://sonification.de/handbook/chapters/chapter14/#S14.2</a></figcaption>
</figure>

#### Auditory Icons
It can be defined as acoustic event markers whose meaning can be understood via an association process. It is easier to understand than earcons because unlike earcons, auditory icons do not reflect abstract meaning. Auditory icons have an existing relationship between the sound and the information that it is providing.

<figure align="middle">
<audio controls>
  <source src="https://docs.google.com/uc?export=download&id=1gwSi3bhbzn_dwxOJJLUPmd5d2K3LUzDH" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>

<figcaption><a href="https://sonification.de/handbook/chapters/chapter13/#S13.2" target="_blank">Sound example by T. Hermann, A. Hunt and J.G. Neuhoff taken from https://sonification.de/handbook/chapters/chapter13/#S13.2 </a></figcaption>
</figure>

#### Parameter Mapping Sonification (PMSon)
In this technique, a data set is mapped with different parameter of sound synthesis. Below is an example of **PMSon** which shows a continuous change of rising water temperature with five data points.

<figure align="middle">
<audio controls>
  <source src="https://docs.google.com/uc?export=download&id=1perNGAZsplh6Y3QlX-GJ1y3R_mqaLgkU" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
    <figcaption><a href="https://sonification.de/handbook/chapters/chapter15/#S15.3" target="_blank">Sound example by T. Hermann, A. Hunt and J.G. Neuhoff taken from https://sonification.de/handbook/chapters/chapter15/#S15.3 </a></figcaption>
</figure>

## Day 2
In the second day, Thomas talked about sonification techniques beyond parameter mapping. These include **Model based sonification (MBS)** and **Wave Space Sonification (WSS)**.

### Model Based Sonification (MBS)
In **MBS**, a data set is used to construct a virtual data object in a state of equilibrium. The object is then allowed to be **interfered by human interaction** which transfers **energy** over the object and produces a temporal signal that can be **sonified**. It is very different from **PMSon** and has many benefits over it. For instance, **PMSon** is about mapping certain sound sequence to data and user has no control over sounds produced. In contrast, **MBS** does not work at all without interference of a user. Moreover, user can control the sound depending upon how he/she interacts with the model. **MBS** can be designed in a very physically plausible way, for instance by respecting Newton's third law of motion: **For every action there is an equal and opposite reaction**.

<figure>
<img src="/assets/image/2019_04_05_aleksati_mbs.png" width = "100%" align="center" />
<figcaption><a href="https://sonification.de/handbook/chapters/chapter16/" target="_blank">Diagram reproduced from Hermann, T., Hunt, A., & Neuhoff, J. G.(2011), The Sonification Handbook, https://sonification.de/handbook/chapters/chapter16/</a></figcaption>
</figure>

### Wave Space Sonification (WSS)
**WSS** is a newly established novel class of sonification technique for time-space indexed data.  Hermann (2018) defines **WSS** as the transformation of data into sound signal by sampling **wave space function** while moving along the **embedded trajectory** by means of chosen **time-advancement morphing**. It provides a system for defining (1) geometric objects (trajectories) from time-sequenced data and (2) a wave space of equal dimensionality. In essence, the time series navigates a high-dimensional wave space and probes it's sound to create the sonification. For more detail, please follow Thomas’s paper on <a href="https://pub.uni-bielefeld.de/record/2919707" target="_blank">WSS</a>.

<figure>
<img src="/assets/image/2019_04_05_aleksati_WSS.JPG" width = "100%" align="center" />
<figcaption><a href="https://pub.uni-bielefeld.de/record/2919707" target="_blank">Diagram reproduced from T. Hermann (2018), WAVE SPACE SONIFICATION, https://pub.uni-bielefeld.de/record/2919707</a></figcaption>
</figure>


### Application of Sonification
Apart from **Earcons** and **Auditory Icons**, rest of the techniques can be used for time-series sonification. Besides, the application of sonification is quite diverse. It can set the eyes free as a replacement of visual information and serves as a powerful medium for visually impaired people. It can be useful in data mining enabling to see hidden patterns/information. Similarly, it enables better monitoring of complex processes for e.g. in analysis of epileptic brain activity as sonification of EEG helps to perceive dynamic changes in brain activity. Likewise, vocal EEG sonification helps to learn concepts from experience, measuring EEG of a person while sleeping etc. Likewise, interactive sonification can substitute or amplify sensory information which can be used in rehabilitation, therapy, skills learning, sports performance etc.

### Q&A Sessions

The talks were very interesting and thus there were plenty of questions from both Oslo and Trondheim. One question was about the adverse effect of sonification that asked if it adds in noise pollution instead. In reply, Thomas said that it’s a frequently raised issue which is totally untrue. He explained it giving an example of a supermarket where numerous scanners produce high frequency (~1000Hz) sounds. He argued that sonification could result in better sound design that could rather change the harmful soundscape into healthier, aesthetically more pleasing or entertaining. It could even be designed to serve multiple purposes like notifying users with various offers etc. Similarly, some questions were posed regarding sound design and reasons for selecting particular type of sound. Thomas clarified that sonification designs are meant for specific tasks under specific situation with specific audio context in mind. He added that, at times there could be conflicts or even trade-offs between aesthetic qualities and informative aspects. Therefore, he suggested that one should maintain a check and balance as its nature is often subjective and open ended.  

### My Final Reflections  

I was very inspired by Thomas's ideas and his works in the field of sonification. I had goose bumps when he showed the example of EEG of a boy showing his brain activity. It was breath-taking to see how well sonification communicated the state of his mind which is, in my opinion, far more superior than any other visual display. Besides, I have been dazzled with whole new facets of music since the beginning of the MCT program. And the talks in this MCT4046 Sonification and Sound Design course have driven me to a next level. It’s a great experience being exposed to professionals working with sounds/music technology in many different ways. I feel so proud to be a part of the MCT program.

### References
Hermann, T. (2018). *WAVE SPACE SONIFICATION*. 24th International Conference on Auditory Display, Michigan Technological University June 10 - 18, 2018. Retrieved from: <a href="https://pub.uni-bielefeld.de/record/2919707" target="_blank">https://pub.uni-bielefeld.de/record/2919707</a>.

Hermann, T. (2008). *TAXONOMY AND DEFINITIONS FOR SONIFICATION AND AUDITORY DISPLAY.* 14th International Conference on Auditory Display,      Paris, France June 24 - 27, 2008. Retrieved from: <a href="http://www.icad.org/Proceedings/2008/Hermann2008.pdf" target="_blank">http://www.icad.org/Proceedings/2008/Hermann2008.pdf</a>.


Hermann, T., Hunt, A., & Neuhoff, J. G. (2011). *The Sonification Handbook (1st ed.)*. Berlin: Logos Publishing House. Retrieved from:        <a href="https://sonification.de/handbook/" target="_blank">https://sonification.de/handbook/</a>.

Kramer, G., Bargar, R., Barrass, S., Berger, J., Evreinov, G., Tecumseh Fitch, W., … Tipei, S. (1999). *Sonification Report: Status of      the Field and Research Agenda*. International Community for Auditory Display. Retrieved from: <a href= "http://www.icad.org/websiteV2.0/References/nsf.html" target="_blank">http://www.icad.org/websiteV2.0/References/nsf.html</a>.
