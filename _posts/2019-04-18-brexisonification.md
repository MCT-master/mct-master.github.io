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
  <img src="/assets/img/sonification/brexit2.jpg" alt="Brexit" width="50%" align="middle"/>
  <figcaption><strong></strong></figcaption>
</figure>
<br/><br/>

Our project for the Sonification and Sound Design course, is based on sonification of the Brexit voting data and focuses both on audio and visual aspects.
It gets the desired data, in regards to the Brexit voters and sonifies it in an communicative way.
Also there are visual aspects accompanying the sponical aspect of the project, in order to make the project more expressive.

__Keywords:__ _sonification, Max for Live, Ableton Live, Brexit, Visuals, Audio_

## Our system
### Aesthetic choices, Concept and Technologies used

Conceptually, we wanted to capture the mood that Brexit has created within the British population. Using samples of Theresa May saying “Brexit”, and alternating it in pitch and intensity creates an atmosphere of panic and chaos. This, coupled with the underlying drone, is brilliantly mimicking the feeling one can get when perceiving international politics. The sense of things going their own chaotic way, without the perceiver being able to affect the situation is similar both for the individuals in Britain, and the listeners to our sonification.


<figure>
  <img src="/assets/img/sonification/technologies.png" alt="technologies" width="50%" align="middle"/>
  <figcaption><strong>Technologies Used</strong></figcaption>
</figure>
<br/><br/>

We used ExcelEd, Max for Live and Ableton Live for our purpose. ExcelEd to create the proper dataset, Max for Live to read the dataset in the Ableton and translate it to parameter values, in order to be used for mapping purposes and creating/modifying the visuals.

<figure>
  <img src="/assets/img/sonification/audpatch.jpg" alt="Audio patch" width="50%" align="middle"/>
  <figcaption><strong>Audio Patch</strong></figcaption>
</figure>
<br/><br/>

The main Host was the Ableton which we loaded the samples and synthesizers and effects in it and mapped those value changes to the desired parameters in it.


<figure>
  <img src="/assets/img/sonification/maxpatch1.jpg" alt="Mapping" width="50%" align="middle"/>
  <figcaption><strong>Mapping the visuals in Ableton Live</strong></figcaption>
</figure>
<br/><br/>

### Dataset and Mapping

The [dataset](https://data.gov.uk/dataset/008ef38d-2259-43d5-a4ca-13a56f1d7cc2/eu-referendum-results) that we used, included the statistics in regards to the voter's information and regions. It was very comprehensive and well organized and we had several options to chose, in order to sonify.

We mapped several elements, with three types of sonifications (Sampled - Synthesized -  Effects) in our project.
In the first step, the percentage who voted for remaining in the European Union was used for the process (Sampled sonification). When it was above 50%, it triggered a sample, saying “Brexit means, Brexit!”. But when it was below 50% it triggered one which was saying “Remain in the European Union!”

<figure>
  <img src="/assets/img/sonification/maxpatch2.jpg" alt="Mapping" width="50%" align="middle"/>
  <figcaption><strong>The use of samples in Ableton Live</strong></figcaption>
</figure>
<br/><br/>

In the next step, the pitch modulation of the voice got higher when the percentage got higher as well (Effects sonification). This was also mapped to the volume, which means it got louder in higher percentages.
After that, Electorate (people) amount in each area was mapped to a synthesizer which created a Beep, and its pitch got higher when the number of the voters raised - up to 2 million - in that specific place (Synthesized sonification).
Also in regards to the general area and the number of the voters in that area, an ominous sound was synthesized and its pitch got raised by the numbers, getting higher (Synthesized sonification).

<figure>
  <img src="/assets/img/sonification/maxpatch3.jpg" alt="Mapping" width="50%" align="middle"/>
  <figcaption><strong>The use of synthesized sound in Ableton Live</strong></figcaption>
</figure>
<br/><br/>

In the end, a reverb, as an effect on the sound samples, were mapped to the whole percentage who voted (Effects sonification). It was done in a way that fewer votes, created more reverb.

<figure>
  <img src="/assets/img/sonification/maxpatch4.jpg" alt="Mapping" width="50%" align="middle"/>
  <figcaption><strong>The use of effects in Ableton Live</strong></figcaption>
</figure>
<br/><br/>

Also in regards to video, we made the patch read the dataset and extract the name of the places and display it in the message box and show it in the video window.
The video made from a GIF file is being read and looped. The patch is using the amplitude of samples/synthesized sounds in order to control the amount of the distortion affecting the video.

<figure>
  <img src="/assets/img/sonification/vidpatch.jpg" alt="Visuals patch" width="50%" align="middle"/>
  <figcaption><strong> Visuals Patch <strong></figcaption>
</figure>
<br/><br/>

Here you can find the core code, for the visual part of the patch:
<pre><code>
----------begin_max5_patcher----------
2321.3oc6as0iiaaE94Y9UP3sO53UjRhRpukEosX.xhBzlFfjEAKnkns4FIQ
GcwyLaP9uWJRIa4wTxzdn7l1j8g0ynK9bNe76bkb906ua1R9SzxYf+J3Cf6t
6Wu+t6jWp4B20962MKi7TbJoT9Xyh4YYz7pYyU2qh9Tk75orbJHuNaIsn6dr
D4c3K+zWg5+7w7TdgRlNKhhvNAgdtPrCFE4N2vKAW3.9o1uSgTY4ozJoBBOb
QdcU2UcZu5VRU7FV95OVPiqTp.zwEuvQ7MB8je36H+HrQ.Muzuc+8M+2bCwm
Ag.7dLXEOupj8YpTccWbP2JHYzJZwGo4jkoz95sVSr46IW7JRQ70ELR5LsFO
x.i2SZ09MZC.41CbUeOUOukpdiYylClsjjud1UAOorczERRS62+NRwda3jat
jWjPKNhu3J+27A9oC5cOj26Dx56pYoIfm40Ef2+v27.ftZk.R.anEztmkDWI
zlkquJgqaoDN1RYFO4n06U735xWg02o877q50uRy1XZGRR5BTNbdvlObiNR9
WohqksN6.oXcNWnEor3etO5WR1QS9Hoppfsrthd3mJaYxsT4F1ZZMkup6xcW
u+JNKeGqj0tn2hAG8.YBGBoz677O5tka3EUC5Q7BtUcVqYJzKXioJ9Ds2bO5
g6vDcZTJOesFQpdPoCd2GWn29PIK9F5NVLEriVTwhIofTVFqRSLyHsgL2Cbl
DVTrPTwyA+aRdI38zDVcF3eQWWmR1GidCKIgleU4NToJBTe3pBd5bkINLKx3
Gf+jcCNhOYwQFQbUAOC7sBo9mwCuAwCkgCQHYPQYzPj2eFM72WQCab7d8ADy
oOJb5NwkKikvX4ZB.B0F.zYwEVWH3c7zD8EGBGIKsjJ5ICqopODMJ6hIhzeU
g9FJMQE+wbvaAwrpm6t21BZo3QIULddeUsMFbzB+4fPzgJ30zJh+rw.u9B3p
xIDEfTvVjMZmXHnYGKgxAETRhgHiCRBMAiBMtSKzfPsA2PSIzjPpH.QHq0qO
zG1.fin8mCzlizGMthdSK3.cfs9XASN5X.uoCZT7lfwgFmoEZBaILd91.YDo
xDUDpIXa3rqsSbyCohUQE7B6xx+hb8mDT85a0dfbMehUsHMNQm8OdjwKdnBd
9Rqz0+7oNDJ0GyHBm1mZKQwpqqtS+BajJAoGzc5WXWJk+gfaj7b9AuqYu4Mf
DQhyRR11TJfjm.1lRxoYjs.UVCV915JvaditFM1+l8Bcxq3M589mYK6o8SZZ
Gi9nrBOVZSV5dfDe0pRZ+9j5S.R4w+LMIofrtLtfml1egPVPZ0lBd85M8utZ
Iayouf5F6N8FKW20GA7ndl5+L84I6a2buot6yKNfHKDqBBnWqSh+kRX7vAMA
V8baKVIT0C43kuOQzkuqtHGP1yNp3fj5xgXHq3qW+GPxgOTG4PBFiwK7t3LD
9vaDuPDU34kDcipF5DZmLAHrSiwffRaxEoRbiOWKpWciDijx6QVtvSVqwFXG
is0iFCkqb9AmOqmLEvUmuKiVVRVSOwZMuof.oB6dZqcGAO5KtCcQE2MFgWjl
rgi3DMfxXI59HbieoZQFWDr5Lnlqpytv.YNdLbLXKBYgRhQmsPxVURitLMkX
c1TIecaVjDpH5BPtofCTnQyC7GwhLBzVjgDMrZhDbPnZND+Nn.i+NQ.Hu8+7
.HgU1j1ArhW.99G9we7g+FP1P5.kZPRJ9+FNvfAUjAg+J0jqT6Hl3R5Cp3ns
FDAJMFyAZqH09QdsyP5fpFgsOeZnDaumkHZjIozrjatRDMBOVT5P7zlaKJP0
HLTVLfFcwV41N5PGLzDch5kz2ezj9gdWcGyu5LasXValMeSpGX9DLljOmtHu
Zil5ECFmyXtcpFRPqcZxPRt971mYXfMgOMh6nFTJ1czgAhbt4G1GKL7Urpdc
UmJ1cDiiiop3TZlXTeLEFNwNjvwvl.UWbnfoe1VCwTa1CHvaAxcDRPopyxAi
DzqotyXdcd0PQy0Psa2fDkeXz.aPx+CRsi5BvXkMcYfnkpsIcCqLQdxNzc72
tjtrcGcaR7OrsjAWPW1MSUXBFtv6891EjsrE+ykkzhczuqfjWtkWn63rfwyr
xvl6vfv1Cdh+TUWQEe85TpY6TjIwwPnujgwTf1EDFy1TEgAWvapO0Q2bntj5
JFqlSnZX.p1+LYx.Wez5gpT+WpoEOqyF8sjM1t+YnNl2Mot59Fhs1RIjAaHb
3W1JgkIRoE.nPizybgWvVh3c9Jhgx0yfHyNwIyaKLdBBsWHDHEzq539wxg1o
MfPOY+Xstq9SZa.C4tJGS2eApwJcCOygVWqwa5ASGZvASWcHgwNFbvzu0SQu
MwW6TzCOQC6m3CdM33P47r.91R6fXIgSixOsScu+4bsuSkqcJRryoRkevTmp
9EJZUtjHBhd2KOG6jOTz9p5bGDFYbphirP4yIiC7h+XfjBq45Ga1k75h3tup
t86.bPbIzxJV9dh6GNrA68dnCiHUKVaWQGnWzvoWzM6brNQidch1wT.Gcpn8
tAhtAvgmJZ+ajnQeY.7FQ6ZcFtiozLM.N9FIZM.t6MRzt11u9EApzKZ4AG.L
zXTLVTA2NQgMgA6aCI4e6LJOCDUyL6a7MdcRx0D3COEo3LSzSQFtPiVHCsvB
Y.1T3EZa30LQ6NE3K1D2eL1B3K1DiDgrgjLgshg1RRvyQO8skjPmSRt1PRlT
SoqM73vPSCc9ZkjO7lkOvyjpFf1f74ZRrQrMnDHSnDParPgf2JaBhuUqSP+a
lM4ZpM48ZkDLzTQ49pEkIvmMxaruNhQEUjcDky0IJ0fRHa2tiVT19zRoLKi7
I0tAGNW9qrb9gy+0rBZygWS87xw6LiTDugUQiqpKTCx6Ir5T2H+ietHul0Vc
gv9Dhrr54zWNbl8y.TMks2kVS69KFUXQqH0oUGiCj3XZ9w6asKL.6Ezr2zXe
uHGjbWpatDrcyoUF+7V3sP79RUQJ2VYkIDDqqLr9KGuPA+AZZJ+wKVECQ9Po
FFDBCgxy2mejum+w6dd+Aq9APygv1OxwIzVFfbmf9G7zjKV8a.SGbiZ6Ggf9
RKA5.ivWOBqXgxAO1ngkaIJ1sb9j2+a2+e8DdEy.
-----------end_max5_patcher-----------
</code></pre>

### Demos (Audio/Visual)
* Visuals demo:

<figure align="middle">
        <video height="100%" width="100%" controls>
        <source src="/assets/video/sonificationvisualsonly.mp4" type="video/mp4">
        <figcaption><strong> presentation of the visual part of the project </strong></figcaption>        
        Your browser does not support the video tag.
</video>
</figure>
<br/><br/>

* Audio demo:

<audio controls="controls">
  <source type="audio/mp3" src="/assets/sounds/brexisonification.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
<br/><br/>

## Reflective notes
### Overall impression
An overall impression can be summed up in a quote by Sam the last day “Guys! This project has been going really well! We have yet to have a crisis!”. And Sam was right. We have progressed in a remarkably steady pace and it has been a pleasure. Coupling the work with the lectures in sonification has also been very good. For instance, working with Iconic, Metaphoric and Symbolic sonification was vital for the aesthetics of our sonification.

### Challenges
Contrary to what is common with these kinds of group projects, we did not have notable challenges with making the concept. As soon as we decided upon working with Brexit, we were pretty unanimous with how to proceed.
The trouble mainly with working with the MAX patch as well as making the data from Kaggle work. A combination of video tutorials, forum searching and not least, trial and error was used to progress. 

### Achievements
We managed to make a sonically interesting audible rendition of the Brexit votes, in which the audience could find him/herself comfortable to interpret and communicate with.
Also, we have implemented an interactive visual patch, in relation to the audio outcome, which has made our project more expressive.

## Learning outcomes and future work
We have learned how to convey the data via audio, in a way that it’s understandable and define the proper way for sound design and the creating of suitable auditory materials for the use in auditory displays.
Also, we have achieved a proper level of understanding, in regards to technical and aesthetical matters in designing an auditory display and mapping data.
We may want to create an interactive sonified map of England, using Javascript, in which by hovering over, you get a sound that informs you about the votes in the area.
Also, we could create a side project, called Spacexit, which may use our patch to sonify data from spacecrafts.


