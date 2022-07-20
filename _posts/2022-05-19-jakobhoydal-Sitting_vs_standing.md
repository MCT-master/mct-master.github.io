---
layout: post
title:  "Playing music standing vs. seated; whats the difference?"
date:   2022-05-19 17:00:00 +0200
categories: motion-capture
author: Jakob Høydal
image: /assets/image/2022_05_19_jakobhoydal_positions.png
keywords: motion capture, sitting, standing, saxophone, mocap, analysis
excerpt: "A study of saxophonist in seated vs standing position"
---


<figure style="float: none">
   <img src="/assets/image/2022_05_19_jakobhoydal_positions.png" alt="Pedals" title="" width="auto" />
</figure>

**Its common that musicians** learn and adapt their teachers playing/performing-technique and style. One technique that I have adopted from one of my former teachers, is to use the pose of your body to influence your playing, by standing up and sitting down to regulate the tempo and excitement of what’s played. This type of reaction is called embodied cognition. It’s the psychical reaction to a physical state; in this case position of playing.

My hypothesis was that musicians will move more, play faster and play with more energy in the standing position vs. the seated position. An experiment was constructed where three saxophonists played both given repertoire and improvisation.

Also, a small instrument was built on the basis of the hypothesis. Using a gyro-sensor, OSC data was sent to a Pure Data patch that speeded up an arpeggiator and a drum-machine when the player leaned towards the computer.

First we have to ask the question what an optimal pose for a musician is. The easiest answer is that there is no optimal physical pose. This is because all musicians have their own way of expressing themselves both in their style and instrument. The pose of a pianist is completely different from the pose of a vocalist. Shoebridge et. al [1] tried to make a definition of optimal pose by asking musicians. Their conclusion was that each musician must find their optimal pose on the basis of five concocted subprocesses:

1. Maintaining ease
2. Finding balance
3. Challenging habits
4. Expanding the framework
5. Barriers to change


**Previous research** also shows that the pose has an effect on mood and performance[4], stress and anxiety [2][8], improve the abdominal muscle activity [7], and self esteem [8]. This is linked to different positions in upright vs. stooped. The research done on musicians is limited, but the findings in the papers mentioned, shows that different poses can have an effect.

<figure style="float: none">
   <img src="/assets/image/2022_05_19_jakobhoydal_figure2.png"
   alt="Pedals" title="" width="auto" />
   <figcaption><i>Figure 2: Plotted data of participants sitting</i></figcaption>
</figure>


**The experiment** was conducted in the MCT-portal at the department of musicology at UiO. The participants did not know the cause of the study, and was asked to follow the instructions. Afterwards, they were asked questions about what they find the most comfortable position, and how they think they are affected by their position when playing.

The participants was given Baa Baa Black Sheep as material to play. This was because it was easy to read, and could be played prima vista. The participants was given five minutes to play through the song for the first time. The participants was asked to play in the two different positions, both when playing the given repertoire and improvisation. Between each of the four settings, participants was given a video to watch. This was to reset their state, and become comfortable in seated or standing positions.

<figure style="float: none">
   <img src="/assets/image/2022_05_19_jakobhoydal_figure3.png"
   alt="Pedals" title="" width="auto" />
   <figcaption><i>Figure 3:  Plotted data of participants standing</i></figcaption>
</figure>



|                              | Performer 1 | Performer 2  | Performer 3 |
|------------------------------|-------------|--------------|-------------|
| **Saxophone Used**           | **Tenor**   | **Soprano**  | **Tenor**   |
| Tempo repertoire sitting     | 64          | 63           | 58          |
| Tempo repertoire standing    | 57          | 61           | 52          |
| **Difference**               | **-7 bpm**  | **-2 bpm**   | **-6 bpm**  |
| Mean RMS repertoire standing | -12.2dB     | -12.8dB      | -14.12dB    |
| Mean RMS repertoire sitting  | -12.6dB     | -14.9dB      | -13.3dB     |
| **Difference**               | **+0.6dB**  | **+0.9dB**   | **-0.82dB** |
| Mean RMS imrpov standing     | -13.9dB     | -13.2dB      | -13dB       |
| Mean RMS imrpov sitting      | -11.3dB     | -14.4dB      | -12.9dB     |
| **Difference**               | **-2.6dB**  | **+1.2dB**   | **-0.1dB**  |
| **Preferred position**       | **Seated**  | **Standing** | **Seated**  |

**Seeing the results**, it’s clear that the participants uses a wider area of movement in the upright position compared to the seated position. But this is not the case for all participants. Participant 2 does not move as freely as the other participants. Participant 1 has a clear shift in movement together with the music.



In figure 5, we can see the the change of frames of the participants improvising. The motion can be higher because the performers are less constraint to the note-stand. My hypothesis here was that all of the performers will have higher motion, since they can focus more on themselves. As we see, this is the case for participant 1 and 3. But participant 2 is still not moving as much.

<figure style="float: none">
   <img src="/assets/image/2022_05_19_jakobhoydal_figure4.jpg"
   alt="Pedals" title="" width="auto" />
   <figcaption><i>Figure 4: Frames of motion, given repertoire</i></figcaption>
</figure>



All participants had a higher average tempo when sitting compared to standing. Nair[8] found similar results in their research, with higher speech times in an upright position. This is not an apples-to-apples comparison, since these are two different states, but the lean of the upper body in a seated configuration vs. the upright position in a standing configuration can lead to similar results. As seen in figure 4, participant 1 and 3 has a slight more lean forward in the seated configuration, versus participant 2 that has similar lean in both positions. This correlates to the tempo findings in table 1 with a lower difference in tempo for participant 2.

<figure style="float: none">
   <img src="/assets/image/2022_05_19_jakobhoydal_figure5.jpg"
   alt="Pedals" title="" width="auto" />
   <figcaption><i>Figure 5: Frames of motion, improvisation</i></figcaption>
</figure>


Regarding energy-levels in the different recordings, we can see that there is little conclusion to draw from the data. Participant 1 and 2 has a higher difference in volume when playing improvisation vs. given repertoire. Participant 3 has little difference. The difference is too little to see any large correlations. The results form Ackermann’s study [7] saw an increase in abdominal muscle activity in upright position. The same results could not be measured using the technique in this study measuring the average RMS levels. Ackermann also stated that its hard to recommend a seat- ing position on the same basis that Awad[4] does, with each musician finding optimal positioning. But they saw that their participants has a higher preference in the standing position vs. the seated. The findings in table 1 suggest that 2 of the 3 participants favours seated position.

**To conclude**, the data collected suggest that there is a link between pose of a musician and the performance. But it did not prove that there is an optimal performing position. This is determined by factors the musician has learnt from years of experience, and is not something that can universally be applied to all musicians. In regards to the hypothesis of enhanced tempo, express more energy, and more movement in the standing position is partially true, but more participants are needed to see correlation between the factors.
The number of samples used in this study makes it hard to draw conclusions, but similarities can be seen.

### References

[1] A. Shoebridge, N. Sheilds, K.E. Webster, (feb. 1. 2017) Minding the body: An interdisciplinary theory of optimal posture for musicians [Online]. Available: doi.org/10.1177/0305735617691593

[2] E.R. Valentine, D.F.P. et al., (Oct. 1. 1995) The Effect of Lessons in the Alexander Technique on Music Performance in High and Low Stress Situations [Online] Available: doi.org/10.1177/0305735695232002

[3] I. Foxman, B.J. Burgel, (Jul. 1. 2006) Musician Health and Safety: Preventing Playing-Related Musculoskeletal Disorders [Online]. Available: doi.org/10.1177/216507990605400703

[4] S. Awad et al., (Jun. 16. 2021) Embodiment: I sat, I felt, I performed - Posture effects on mood and cogni- tive performance [Online]. Available: doi.org/10.1016/j.actpsy.2021.103353

[5] M. E. Bates, E.P. Lemay, (May, 2004) The d2 Test of attention: construct validity and extensions in scoring techniques [Online]. Available: doi.org/10.1017/S135561770410307X

[6] P. Briñol, B.C. Wagner, R.E.Petty (Oct. 2009) Body posture effects on self-evaluation: A self-validation approach [Online]. Available: doi.org/10.1002/ejsp.607

[7] B.J. Ackermann, N.O’Dwyer, M. Halaki (Aug. 25. 2014) The difference between standing and sitting in 3 different seat inclinations on abdominal muscle acti- vity and chest and abdominal expansion in woodwind and brass musicians [Online]. Available: doi.org/10.3389/fpsyg.2014.00913

[8] S. Nair et al. (Jun. 2015) Do Slumped and Upright Postures Affect Stress Responses? A Randomized Trial [Online]. Available: 10.1037/hea0000146

[9] PureData (Pd-0.52), IEM. Accessed: 01.04.2022 [Online]. Available: puredata.info/downloads/pure-data

[10] GyrOSC (2.5.1) Bit Shape. Accessed: 01.05.2022 [Online]. Available: bitshapesoftware.com/instruments/gyrosc/

[11] A.R (2005) Developing Tools for Studying Musical Gestures within the Max/MSP/Jitter Environment. [Online]. Available: urn.nb.no/URN:NBN:no-32299

[12 ]Qualisys Track Manager (2021.2) Qualisys [Online]. Available: qualisys.com/software/qualisys-track-manager/
