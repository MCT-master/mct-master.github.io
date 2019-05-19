---

layout: post
title: "Brexisonification"
date: 2019-04-19 21:40:00 +0100
categories: Sonification
author: Sam Roman, Sepehr Haghighi, Eirik Dahl
image: /assets/img/sonification/brexit.jpg
excerpt: The goal in the project is to sonify Brexit, in a way that the audience could interpret new insight from the data through audio.
---

<figure>
  <img src="/assets/img/sonification/brexit2.jpg" alt="Brexit" width="70%" align="middle"/>
  <figcaption><strong></strong></figcaption>
</figure>

## Brexit
Wikipedia article on [Brexit](https://en.wikipedia.org/wiki/2016_United_Kingdom_European_Union_membership_referendum).  

“Fuck knows. I’m past caring. It’s like the living dead in here.”  

An unnamed UK Cabinet minister’s texts BBC Newsnight editor Nicholas Watt when asked why May was holding another vote on her deal. In doing so, the pretty much summed up an entire nation. (The Journal, 2019)  

Inspired by the controversy and charade that was, and is Brexit. This project is an attempt to make sense of the data that came from the UK’s National European referendum - by translating it into sound. Named “Brexsonification”, our aims were to try and portray a new outlook on the data from the results, whilst keeping to the tongue in cheek style both social and regular media have often to come to cover the issue.

## Inspiration & Other works
When looking for other sonifications on the subject of Brexit we found very little, [one piece](https://soundcloud.com/anti-system-records/sets/brexification-the-sonification-of-brexit) that was heavily artistic, and not directly communicating the brexit data. So we found inspirations from other places. The Sonification & Sound Design lecture series we attended and the MCT blog especially helped explain us understand the concept of sonification, in particular the [Thomas Hermanns lecture](https://mct-master.github.io/sonification/2019/04/05/Thomas-Hermann.html?fbclid=IwAR3gSKAiNAwhCmsh0wnQerg6WShf448gXcXwM-0TIWAL9YhGu9LcSrOTqm8). Aside from this, one tutorial helped inspire our Max patch. It also helped us troubleshoot as we worked with the prototype. It was the only tutorial using similar technologies to ours:
<iframe width="642" height="361" src="https://www.youtube.com/embed/3UP-Fs6b9_k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
## The Data
The [dataset](https://www.kaggle.com/electoralcommission/brexit-results/version/1) that we used is a publicly available archive of statistics on the EU referendum, providing some of the voter and region information data from the results.  

When we looked at the referendum results we noticed how the different counties that make up England happened to vote quite differently, depending on the location. In London and the south for instance, there was a high proportion of voters who wanted to remain in the EU, whereas in the northern part of England it was common to have a majority to leave.  

These inconsistencies have been debated over the media, and sheds some light into how the Brexit decision was come to. This, including other factors such as voter turnout, were used to create a sonification. We wanted to see if we could portray this in a different light and understand better through sound. At very least it can add to the over bloated media steamroller that is Brexit, in a somewhat original way.  

Lastly, going in to the project we had a clearer idea on what parts of the data we could highlight, and a possible tone for the project, and the rest often came down to experimentation and trial and error.

## Our system

<figure>
  <img src="/assets/img/sonification/technologies.png" alt="technologies" width="70%" align="middle"/>
  <figcaption><strong>Technologies Used</strong></figcaption>
</figure>

### Technologies Used
* ExcelEd - Editing and adjusting the data set
* MaxMSP - Main patch for translating the data into parameter values, midi & importing and processing video
* Max for Live - imports the patch into ableton
* Ableton Live - Map parameter values to audio and composition  

When deciding how to approach creating the sonification system, we decided to stick to our strengths. We had previously been using Max4Live to process Motion capture data earlier in the academic year. When we came with this objective, we thought we could use a similar technique to process this type of code.  

One advantage to this method is that if we use M4L for different sonifications, we become more adept to the program. Eventually we might be more adept at M4L  and advance to creating auditory displays that can be fed various data sets. 
Another bonus is that we have experience with ableton, that made the mapping part a lot easier after processing the data - we could then foreseeably get a prototype up in the limited time we had.
### The Patch
Here is our completed audio patch! Details can be found in this [text file](/assets/code/VPatch2.txt). You are very welcome to download the patch to look in more detail or try out! Just copy the code and paste it into a new patch.
<figure>
  <img src="/assets/img/sonification/audpatch.jpg" alt="Audio patch" width="70%" align="middle"/>
  <figcaption><strong>Audio Patch</strong></figcaption>
</figure>
#### Audio Patch
In our prototype we used three techniques to process the audio: 
* Sampled - Sampled political speech
* Synthesized - Low drone
* Effects - Rave Generator (digital sampler), Overdrive, Reverb, Delay  

Each of these processes were applied to the sonification mapping as well. 

#### Mapping & Reasons
Our projects lead, as you will - came from vocal cuts from Theresa May  ("Brexit means Brexit" - May, 2016) and opposition. This was inspired by the mashup of media that surrounds brexit, and how iconic in particular the prime ministers voice is, in regard to the issue. From here we painted a picture, finding other mappings along the way:				
#### Lead mapping - Remain or Leave?
* Leave EU above 50% - “Brexit means, Brexit!”
* Remain EU above 50% - “Remain in the European Union!”  

The reason behind the choice of sounds is two-layered. In the foreground, we have the “brexit” and “remain” statements. These obviously represent if there is a majority vote to remain or leave in that area, but also have an aesthetic quality that portrays the value of the data.  

If the majority to leave is high in percentage, Theresa May will be higher in pitch, sounding more angry and intense, trying to represent the mood of those voters. If the area has a majority to remain the “remain in the European Union” also plays high in pitch as the majority increases
Both of these can sound quite silly in their extreme, however we feel that this tone fits the mood of brexit, and hopefully makes it a little more entertaining.
#### Drone 
On the other, deeper level, we have the ominous drone sound. This is mapped to area (north, south and so on) to create a feeling of dread. It is staccato in nature, a constant deep rumble that represents the intensifying mood among the british population as brexit progressed.  

As each area progressed, the drone would rise a semitone - acting as a information as to when the next area is being played, but also giving a narrative to the whole composition, intensifying the mood further with each rising tone.

<figure>
  <img src="/assets/img/sonification/maxpatch2.jpg" alt="Mapping" width="70%" align="middle"/>
  <figcaption><strong>Drone sound in ableton live sampler</strong></figcaption>
</figure>

#### Bleep
We then synthesised a “bleep” sound, that we used to represent the overall Electorate (people) amount in each area went to vote - up to 2 million! The bleep would rise in pitch as the amount that voted in the area went up. This gave some context, the counties in england can have very different sized populations, so this represented that factor in the demo. (Synthesized sonification). 

<figure>
  <img src="/assets/img/sonification/maxpatch3.jpg" alt="Mapping" width="70%" align="middle"/>
  <figcaption><strong>The use of synthesized sound in Ableton Live</strong></figcaption>
</figure>

#### Other mappings
* The voter percentage turnout of each area was also mapped to the volume of the voice, which got louder in higher percentages - representing the loudness of the “voice” of that area.
* Reverb was also mapped to the whole percentage who voted as a counter mapping. It was done in a way so that fewer votes created more reverb. (Effects sonification)

<figure>
  <img src="/assets/img/sonification/maxpatch4.jpg" alt="Mapping" width="70%" align="middle"/>
  <figcaption><strong>The use of effects in Ableton Live</strong></figcaption>
</figure>

### Video (Failure!)
Also as an afterthought, we decided to try and make a data reactive video that would enhance the sonification. To do this we got a looped GIF file that we felt fitted the tone of the prototype, and applied FX from the data parameters using M4L. The patch is using the amplitude of samples/synthesized sounds in order to control the amount of the distortion affecting the M4L patch.  

To accompany this, we also ported the area names to the M4L patch in presentation mode, so that on screen this information could help reinforce the sonification, and make sense of the video image. On another note, it was very useful when checking to see if the sonification was working properly!

<figure>
  <img src="/assets/img/sonification/maxpatch1.jpg" alt="Mapping" width="70%" align="middle"/>
  <figcaption><strong>Mapping the visuals in Ableton Live</strong></figcaption>
</figure>

Here was the “presentation” view from ableton, that showed the relevant text data as the sonification played. 
Both these visual elements never made it to the final prototype, for reasons we will go into later (although there is an example).

### Demos (Audio/Visual)
**Youtube link and final publication of the sonification:**  

Please leave any comments that you have, in regards to the sonification, in the comments section.
<iframe width="640" height="360" src="https://www.youtube.com/embed/wbUrU9azTlQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

**Visuals demo:**
<figure align="middle">
        <video height="100%" width="100%" controls>
        <source src="/assets/video/sonificationvisualsonly.mp4" type="video/mp4">
        <figcaption><strong> The unused visual elements of the project </strong></figcaption>        
        Your browser does not support the video tag.
</video>
</figure>

## Reflective notes
### Overall impression
“Guys! This project has been going really well! We have yet to have a crisis!” - Sam, late into the project.  

Our team have progressed in a remarkably steady pace and it has been a pleasure. On the whole the decisions we made to crete our prototype have been a success. The tone and choice of the audio is fitting.  

As noted in our report we managed to implement Symbolic, Metaphoric, and Iconic sounds representing data in our sonification. It was important for the aesthetics. Thomas Hermann introduced us to this way of thinking sonification, and we wanted to implement it in our project to familiarize us with sonication as a practice.  

Maybe too much? At least for us we were exploring the possibilities that this craft has to offer, while at the same time doing some experimentation!

<figure>
  <img src="/assets/img/sonification/funnybrexit.jpg" alt="Mapping" width="10%" align="middle"/>
  <figcaption><strong></strong></figcaption>
</figure>

In this portrayal of serious, political data we originally tried to remain unbiased. However, with a overarching feeling of “dread” as part of our sonification, we didn't exactly achieve neutrality. So our mapping and choice of sounds could be seen as somewhat biased in terms of the brexit standpoint. Maybe it begs the question, isn't the majority of media biased when reporting on brexit? Or even in general? (let's not go down THAT road) 

### Challenges & Achievements
Contrary to what is common with these kinds of group projects, we did not have notable challenges with planning the concept. As soon as we decided upon working with Brexit, we were pretty unanimous with how to proceed. We did come into some challenges though:
* Difficulty in MAX reading the data, we solved this by editing the data set in EdExcel
* The audio part of the patch were being developed in Oslo and the Visual part in Trondheim. While merging them, there was had a synchronization problem. The tempo of the data being read by the Max patch was different for the video than for the audio. Remains unfixed.
* Also, alongside the region text being displayed in the max patch presentation mode, we wanted to have it displayed on the video as well. But we couldn’t fix that issue as well.
* Patch would reset all mappings in Ableton Live each time on reopen - big pain in the posterior!  

The main failure was the inability to use the video element we had spent a lot of time working on. We attempted to fix the issue after the presentation of the prototype, to no avail. We managed to implement the region text in the video. That was being done by using "jit.op" to merge the text and video in the output display window (success!) but could still not fix the tempo issue - rendering it useless for the project as a whole.  
<br />

Overall we managed to make a sonically interesting audible rendition of the Brexit votes, so the audience perhaps could find him/herself comfortable to interpret some meaning from it. Although, since we have not performed the sonification for any audiences, we have little feedback after the final outcome, aside from the presentation of the prototype in MCT class.

### Learning outcomes and future work
We may want to create an interactive sonified map of England, using Javascript, in which by hovering over, you get a sound that informs you about the votes in the area.
Also, we could create a side project, called Spacexit, which may use our patch to sonify data from spacecrafts.

### Further developments
The plan we had in mind for the publication and use of this project was to feed it back to the inspiration that started it - the media that follows Brexit. As with the subject itself, the media has been an influence on the situation, not merely covering it. So, we wanted to complete the feedback loop and show our sonification to the world. One of the comments we received after the presentation was what we wanted to do with our project. We have uploaded it to Youtube, and posted it on our social media. In our minds, we may get feedback and further collaboration opportunities, that could help propel the project further into the future.  

Other possible future ideas:
* Create an interactive sonified map of England, using Javascript, in which by hovering over, you get a sound that informs you about the votes in the area. 
* Create a side project called “Spacexit”, which may use our patch to sonify data from the position of spacecrafts.

## Acknowledgements: 
We wholeheartedly thank [Daniel Buner Formo](https://www.ntnu.no/ansatte/daniel.formo) and [Anna Xambó Sedó](http://annaxambo.me/) for their support.

## Refrences
Rónán Duffy, for The Journal “F**K knows. I'm past caring' - The week in Brexit quotes”
Retrieved from: https://www.thejournal.ie/brexit-quotes-3-4567342-Mar2019/

Producer: RT UK. (2016, 07.11)  "Brexit means Brexit" - May. Retrieved from URL: https://www.youtube.com/watch?v=KMek1okqphs

__Keywords:__ _Sonification, Max for Live, Ableton Live, Brexit, Visuals, Audio_


