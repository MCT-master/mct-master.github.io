---

layout: post
title: "Brexisonification"
date: 2019-04-19 21:40:00 +0100
categories: Sonification
author: Sam Roman, Sepehr Haghighi, Eirik Dahl
image: /assets/img/sonification/brexit.jpg
excerpt: The goal in the project is to sonify Brexit, in a way that the audience could interpret new insight from the data through audio.
---

# Brexisonification

<figure>
  <img src="/assets/img/sonification/brexit2.jpg" alt="Brexit" width="70%" align="middle"/>
  <figcaption><strong></strong></figcaption>
</figure>

Inspired by the controversy and charade that was and is Brexit, this project is an attempt to make sense of of the data that came from the UKs national European referendum - by translating it into sound. Named “Brexsonification”, our aims were to try and portray a new outlook on the results data (data set here), whilst keeping to the tongue and cheek style both social and regular media have often to come to cover the issue.


## Our system
### Aesthetic choices, Concept and Technologies used

Conceptually, we wanted to capture the mood that Brexit has created within the British population. Using samples of Theresa May saying “Brexit”, and alternating it in pitch and intensity creates an atmosphere of panic and chaos. This, coupled with the underlying drone, is brilliantly mimicking the feeling one can get when perceiving international politics. The sense of things going their own chaotic way, without the perceiver being able to affect the situation is similar both for the individuals in Britain, and the listeners to our sonification.


<figure>
  <img src="/assets/img/sonification/technologies.png" alt="technologies" width="70%" align="middle"/>
  <figcaption><strong>Technologies Used</strong></figcaption>
</figure>

We used ExcelEd, Max for Live and Ableton Live for our purpose. ExcelEd to create the proper dataset, Max for Live to read the dataset in the Ableton and translate it to parameter values, in order to be used for mapping purposes and creating/modifying the visuals.

<figure>
  <img src="/assets/img/sonification/audpatch.jpg" alt="Audio patch" width="70%" align="middle"/>
  <figcaption><strong>Audio Patch</strong></figcaption>
</figure>

The main Host was the Ableton which we loaded the samples and synthesizers and effects in it and mapped those value changes to the desired parameters in it.


<figure>
  <img src="/assets/img/sonification/maxpatch1.jpg" alt="Mapping" width="70%" align="middle"/>
  <figcaption><strong>Mapping the visuals in Ableton Live</strong></figcaption>
</figure>

### Dataset and Mapping

The [dataset](https://data.gov.uk/dataset/008ef38d-2259-43d5-a4ca-13a56f1d7cc2/eu-referendum-results) that we used, included the statistics in regards to the voter's information and regions. It was very comprehensive and well organized and we had several options to chose, in order to sonify.

We mapped several elements, with three types of sonifications (Sampled - Synthesized -  Effects) in our project.
In the first step, the percentage who voted for remaining in the European Union was used for the process (Sampled sonification). When it was above 50%, it triggered a sample, saying “Brexit means, Brexit!”. But when it was below 50% it triggered one which was saying “Remain in the European Union!”

<figure>
  <img src="/assets/img/sonification/maxpatch2.jpg" alt="Mapping" width="70%" align="middle"/>
  <figcaption><strong>The use of samples in Ableton Live</strong></figcaption>
</figure>

In the next step, the pitch modulation of the voice got higher when the percentage got higher as well (Effects sonification). This was also mapped to the volume, which means it got louder in higher percentages.
After that, Electorate (people) amount in each area was mapped to a synthesizer which created a Beep, and its pitch got higher when the number of the voters raised - up to 2 million - in that specific place (Synthesized sonification).
Also in regards to the general area and the number of the voters in that area, an ominous sound was synthesized and its pitch got raised by the numbers, getting higher (Synthesized sonification).

<figure>
  <img src="/assets/img/sonification/maxpatch3.jpg" alt="Mapping" width="70%" align="middle"/>
  <figcaption><strong>The use of synthesized sound in Ableton Live</strong></figcaption>
</figure>

In the end, a reverb, as an effect on the sound samples, were mapped to the whole percentage who voted (Effects sonification). It was done in a way that fewer votes, created more reverb.

<figure>
  <img src="/assets/img/sonification/maxpatch4.jpg" alt="Mapping" width="70%" align="middle"/>
  <figcaption><strong>The use of effects in Ableton Live</strong></figcaption>
</figure>

Also in regards to video, we made the patch read the dataset and extract the name of the places and display it in the message box and show it in the video window.
The video made from a GIF file is being read and looped. The patch is using the amplitude of samples/synthesized sounds in order to control the amount of the distortion affecting the video.

<figure>
  <img src="/assets/img/sonification/vidpatch.jpg" alt="Visuals patch" width="70%" align="middle"/>
  <figcaption><strong>Visuals patch</strong></figcaption>
</figure>

Since there are some developments done afterposting the blog, you can have access the visuals code at the end of the blog, in the further developments section. Also, the code for the audio part of the sonification patch is available in that text file as well. All you have to do is to copy, and hten paste the codes into the patch file. You have to merge them as well.

### Demos (Audio/Visual)
* Visuals demo:
<figure align="middle">
        <video height="100%" width="100%" controls>
        <source src="/assets/video/sonificationvisualsonly.mp4" type="video/mp4">
        <figcaption><strong> presentation of the visual part of the project </strong></figcaption>        
        Your browser does not support the video tag.
</video>
</figure>

* Audio demo:
<audio controls="controls">
  <source type="audio/mp3" src="/assets/sounds/brexisonificaitonaudio.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>

## Reflective notes
### Overall impression
An overall impression can be summed up in a quote by Sam the last day “Guys! This project has been going really well! We have yet to have a crisis!”. And Sam was right. We have progressed in a remarkably steady pace and it has been a pleasure. Coupling the work with the lectures in sonification has also been very good. For instance, working with Iconic, Metaphoric and Symbolic sonification was vital for the aesthetics of our sonification.

### Challenges
Contrary to what is common with these kinds of group projects, we did not have notable challenges with making the concept. As soon as we decided upon working with Brexit, we were pretty unanimous with how to proceed.
The trouble mainly with working with the MAX patch as well as making the data from Kaggle work. A combination of video tutorials, forum searching and not least, trial and error was used to progress. 

### Achievements
We managed to make a sonically interesting audible rendition of the Brexit votes, so the audience perhaps could find him/herself comfortable to interpret and communicate with. Although, since we have not performed the sonification for any audiences, we are not aware of the final outcome.
Also, we have implemented an interactive visual patch, in relation to the audio outcome, which has made our project more expressive.

## Learning outcomes and future work
We have learned how to convey the data via audio, in a way that it’s understandable and define the proper way for sound design and the creating of suitable auditory materials for the use in auditory displays.
Also, we have achieved a proper level of understanding, in regards to technical and aesthetical matters in designing an auditory display and mapping data.
We may want to create an interactive sonified map of England, using Javascript, in which by hovering over, you get a sound that informs you about the votes in the area.
Also, we could create a side project, called Spacexit, which may use our patch to sonify data from spacecrafts.

## Further developments
With working more on the audio and video part of the patch and thanks to [Daeniel Buner Formo](https://www.ntnu.no/ansatte/daniel.formo), we managed to fix the problems!
Starting with the audio part, we had to include "average~" and "snapshot~" in order to average the input signal from the channel that the Max patch was inserted into it, and turn it into a float number for feeding it to the fader. That fixed the audio input problem that we had.
Regarding the visuals, we certainly missed some objects in order to fix the text on the display issue. That was being fixed by using "jit.op" to merge the text and video in the output display window. Following, the code in regards to the visual part of the patch is accessable from [this link](/assets/code/VPatch2.txt). You can have the patch, just by copying the code and pasting it inside an empty patch.

__Keywords:__ _Sonification, Max for Live, Ableton Live, Brexit, Visuals, Audio_


