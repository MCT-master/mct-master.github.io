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

Our project for the Sonification and Sound Design course, is based on sonification of the Brexit voting data and focuses both on audio and visual aspects.
It gets the desired data, in regards to the Brexit voters and sonifies it in an communicative way.
Also there are visual aspects accompanying the sponical aspect of the project, in order to make the project more expressive.

__Keywords:__ _Sonification, Max for Live, Ableton Live, Brexit, Visuals, Audio_

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
We managed to make a sonically interesting audible rendition of the Brexit votes, in which the audience could find him/herself comfortable to interpret and communicate with.
Also, we have implemented an interactive visual patch, in relation to the audio outcome, which has made our project more expressive.

## Learning outcomes and future work
We have learned how to convey the data via audio, in a way that it’s understandable and define the proper way for sound design and the creating of suitable auditory materials for the use in auditory displays.
Also, we have achieved a proper level of understanding, in regards to technical and aesthetical matters in designing an auditory display and mapping data.
We may want to create an interactive sonified map of England, using Javascript, in which by hovering over, you get a sound that informs you about the votes in the area.
Also, we could create a side project, called Spacexit, which may use our patch to sonify data from spacecrafts.

## Further developments
With working more on the audio and video part of the patch and thanks to [Daeniel Buner Formo](https://www.ntnu.no/ansatte/daniel.formo), we managed to fix the problems!
Starting with the audio part, we had to include "average~" and "snapshot~" in order to average the input signal from the channel that the Max patch was inserted into it, and turn it into a float number for inserting it into the fader. That fixed the audio input problem that we had.
Regarding the visuals, We certainly missed some objects in order to fix the text on the video issue. That was being fixed by using "jit.op" to merge the text and video in the output display window. Following, the code in regards to the whole patch is pasted. You can have teh patch, just by copying the snippet and pasting it inside an empty patch:
<pre><code>
----------begin_max5_patcher----------
2650.3oc6bs0iaiaE94Y9UP3zmJbcDI009TSP2VDfrXA1caA5lFDHKQaqrxh
N5hmYxhM+1KuHYKOlRl1hxYSmY.x3I5hO7bNemK7iT52t8lIyo2SJl.9qf2A
t4le61atQbH9Ato9+eyj0g2GkFVHtrIYj6ny+3joxSURtuTb3hrvMEqnkeA.
sZNYRr3TrK+u.QMGLqZcRVJoT7sg1ePZUYyQg0GUdnxG1PjCvIKRogLw895y
uIrLZUR1xOjShJkWhsMZl0T.DEv+vyg+aj0LKv642xue6s7eMcXpZ3VRd3Rx
WXBCZAVWnPcQ9JUW34otEIKyBS6Uew9XtJ5Zy+cf6XnteLobFcC3uw92eVgp
53bFdVTWpJSHeXcXYdx8SlBlzqJiP9yblBbvBWr6vz4H550jrxiT5bxhbRAW
x.9w.zLvcIYwz69uYJrA1mi61paUy02mqM1Hn.D6Xw+.eo5VIc4xThpgq8jc
ig7v0jRR9GHYgySIsGeCA4lj0eXZshhcEnWjcyuMIt8SLEKmx9ZUYALR5n4g
YK0RMCDPUG+wJ7LMJFXChVElCvHKlJqJEryYfQMQbZ.T3Vc7De.sFEseSNYC
IKFbWdRoJnN1D4g6WMkQo1RWs23jNJMIi.Xi14j71mKhlRykCCqYAAtVd9VP
arG1yKXplGBxGpJpfEXlTZPKnv9D30JkFz+RQAGXBZMbcQWbJsEzrxhjOKtP
HOeTeAD7KNi88KD7qxSXkm6D0LUiLDMlGHTXebj4CwFF9TRuKC7RPTR4C6LS
rxarKMrLgl0t3punkIrMuDqOZuyRQnk0kfPZI11WcOAVPjIPNcYZ1lDSnfbR
XrdVFtihaZ75yzfviqoAgb3CBjk8XZZhCKCArT8KWtOjqCiCD5uG1bv3QwTA
rGYbiefT7iuwQCXSskoF130ukYjin7Y8Ux8OXnIrLyqJKop5F1er6t7jYUQt
h3CYD6.6tra0D+UWOqawBGXYBEUHf8g5gYYz8vpIu3EfetJOCDBjoLYs3SAw
UEkfW7hlaYaX9thiKXy9nUZCZIkqY6N8lj62U5baB4tsIEIySR4UnZaRVrnf
T1zgiEuAl8QNoznekDGylKdQTNMMssYOJMI5WKWkSqVtp8wkNnUGeCxSr83S
Le4ZZLo8fZNMOlj29ZZ2kMTYLr8444a0lsFSEF6IywHaAEhaaj1Yv294YBWx
LlSm8UM4BPHaRCeXdnp1uXc2ahYWvaY5TScD4Ak8HIxxiQxjXtleRUx46qTY
8LgxJht0krCu54RMnYWrlTTDtjnfrCc69I.IvaV6GFpLOVWvjq6pL14MYr5F
ifrog8nwoYwFepb1ZJKs0IrZXYah9x.SWXels.zE.pz1pc97qgsCd7fdTJp7
p55IwDV1EfXhtpKnHtfmfUT78thUTrsEDXnaEEoOY.kTNM93eDxLMu7e8FPb
RAu.DXAMG7ueyu7Ku46.hlv6n8iv37+uAMzU5EY5XYutxY6340Q1EqKfHLyj
S1wULAdj.XUOLCb6pEElaa.votpv8SPjE6Gnudk4bDyis8xonHrz8qVUtZlQ
pa6enq5yATp0kcwpU4emdK+6apEW3rqwoEgaM1NY0MmQoCgOmNKqbkhNG8bM
wZkcZl2svszQrynPIcMAH7zmZgcjbCIWvmCH.YjIxlE4Otrp.srkzdYFBmNj
ug9sox7Tsm2uB8GZZ9XzNfTC1ukltZhLGHAFcgT4zdCdIPPBNCnUsNCzSROd
GnQzprxtxAcrangSXYfVv0CaitNTvik6lhAu3MpyVllrkLqbURQLYaRjpEwy
8bluM9Ty2lSvfF7LTSirjeAOuwnNw2a+1YgaRl8CyKH4aI+bdXVwFZdoJSf6
3uPlREVxw.bfUMNbuGzO235jECC+ZkDSabh83sUFj6jg.Kk6rJ2qxVYntmBj
iI1JCc0l9mpH4OnRGcLgNdB8yUVIRN+2.C1ScaEAa3liuvlfqwrNiXSvhZnj
b.jUkWMvUMS4NJ0W69BOmV2SrNY0qgwxIM4ELFZdNaPR.sZLtcdb3UYF.0qz
WiC1YThVEb08mfp10M98pkZsiKfWvNtPqcZgifQSWqAsSKF.U50U8poR2e+v
PQ+cPyYG6pfmoruMKtrz71VuLWjk3OTDTgMQ+g6xbpQZjl3KY0hQJ9hkAQc3
ks0nWNb2LyLRIBYK9sbdsYp8nS1VS6qbIrOm97kzrCl4EV7yzN9qVgeKynL6
.me2SW9URU6EImct4WWkjFCdfVkCdUUbBE7cKVv7CfUj7cXh4KuHYDFUxLtW
3MeA7N4seGYCQnlFo1cKMDcasK0STUw.LgMp2E5oKB2Rh+PXYYdxbVE68+UQ
MTtFKygqoUD5hlC2b71vxTZ1xNgzGbkIYh0hPhgQJtf0rXGAzqIi9AmsXEaF
h5IIBCzV66XZ.j6+Xeh14CO3habzH4oDQ3MeLJg6uy98pdxIbdBDx+ieaEWy
ZcRRyk8dFQNf9+mdA16AuOGaqJ1FqL118IPr8a+1J1F4+bncWX2mCsUEZ6pL
z194x1+wqrMpdgWeNz9wX2mCsUEZ6nLzF8bU6+XV0FieNx9Hn6SrH6t1zC+c
whoC1RxKShBSAoIqSTwvV+OlmGvvLrCFlsTxjLynWRy.+TXVA36IwIUqA+HY
YU59me.E3ZIC80OkT6KbsCIsJINlHoud7xBhTkEz6IPRPI8ikTvaY1husRHZ
CasqEb8dNiXKX7y85nJJGpJJ28IST9hb55uAiykaLCwhcBpePvreZGlCehFl
20KDjzpkLX0WTMQF8WLcqy90.A30zz3Im3M4zTsdmNY2lRNG7n7ZSgYkRxTY
jfeSYjv8YiD2tXWp7nWvYhuN9wOzvUPqxiZFLMORdf8Qywjhxjrcafh2s+wy
p0Es+Y2Qo2xnhl+rFqRzvgIZKc0Z3wh19JIZzwhFckDM139ZKc80JL3NWIQq
vfiuRhFaZDN+QT5jhl+r5vM3CSRXcPUtiQFD8DsZIiFeI6LFot7b00bCMs4V
OQiGCs10SCQ6VO9FljzQIwPSHIcvPtFSRvSHIniojD5TRBaBIoS2CXeSHInt
oRGpjbbzPRhWMGCWT5nTNl.R3nqfFZgHacJ4YiLfJYqSccnIhbw95jivDwSX
c.DPSfxOiRmCRNHcrcPSfGPvqkWB5dsPdPmqlNg0UmrGpjzolQSS6CSRPecU
J7fEkNNJS.yEuArNs8yLhx5pIJMDDxeLl9BTitxFOIeRcdL5iWKUV8bWfGQ6
U3lMaI4E02sPlSVG9QIG19SE+2jL59WyLSxIbJikWufBuIg4QqRJIQkU4RR7
t2UtMuD7rmmUkTKal1xDYQ4CoOlpsc7+IIh70oUjFJFYZ3hvpzxCsJgQQjrC
el4wPOWaONy5tN1AVHwSHO+Pv5GLdoxOs1XmytewPQH2ZYslInjFrQamyiFf
+GRZJ8t9GhsIA8c.9qmVm.KK+VKZvQpfOxAJz.OenOTrHANAN1NFUADOzo+S
ZZ7Yag4FSKW9vxI.AcDiTnELv8xsvRTnfHZ9HrXSnDqK3q91e+1+GjCGCh.
-----------end_max5_patcher-----------
</code></pre>


