---
layout: post
title: Soundscapes for Dream Nest
date: 2020-05-03 10:00:00 +0200
categories: applied-project
author: Jackson, Paul & Iggy
image: /assets/image/2020_05_03_jacksong_baby-spa.jpg
excerpt: "For the spring applied project we created music for a hardware specific device to relax colicy babies in a collaboration with our external partner, Dream Nest. Our final product is a six track EP, engineered to put your baby to sleep (we hope!)"
Keywords: MCT, Dream Nest, sound engine
---
The Dream Nest is a therapeutic product that uses low-frequency sound waves to sooth infants that suffer from various colic or stress related problems, in particular those associated with pre-term birth.

### What music is best for babies?

The task of our group was to design and implement complementary soundscapes that could be used in conjunction with these low-frequency vibrations. The soundscape could be a combination of musical and “environmental” sounds that seek to replicate to an extent the acoustics of the womb environment. We dove into the research to find inspiration for the kinds of sounds and techniques that might provide a baby with the most soothing listening experience.

Our major questions we aimed to answer were:

1. What can research tell us about the therapeutic effect of music on newborns?
2. How can sound serve to relax and comfort babies?
3. Which kinds of sounds would effectively calm infants and stimulate cognitive development in infants (are these two compatible)?
4. How should these sounds be presented in a way that is natural?
5. What elements of music could be potentially distressing for infants?

### Some insights from research

Recent research supports the benefit of music listening in the cognitive and emotional development of pre-term infants (Standley 2002; Lejeune, et al 2019; Sanchez 2019). The types of music that seem to best calm infants has been studied as well (Keith et al 2009; Haslbeck 2012; Loewy et al 2013).

In addition, the sound of the maternal heartbeat and voice has also been found to positively affect auditory plasticity in the brains of premature infants (Webb, et al 2015).

Other research into the acoustics of the womb environment indicates that the maternal abdomen is an effective filter of high- and upper-mid-frequency sounds (Parga, et al 2018). This study also describes the intra-uterine audio environment to be dominated by sounds from the mother’s respiratory, cardio-vascular, and digestive systems.

Listening to recordings taken from inside the stomach were also quite illuminating - it's a loud place in there. It might freak the parents out if we simply replicated the womb and it was important for the bonding experience between the parent and infant that the music be something palatable for both.

### The music

All these elements are filtered in the high and upper-mid frequency ranges to attempt to properly represent the actual intra-uterine environment.

<figure>
    <img src="/assets/image/2020_05_03_jacksong_dn-eq.jpg" width="500px"/>
    <figcaption>An example of the EQ that we applied globally to the mix</figcaption>
</figure>

We created a total of six original musical pieces of a duration exceeding 10 minutes each, with instrumentation including acoustic guitar, piano, bass and synthesized pads. In addition, each composition was edited to include a shorter, loop-able segment, making a total of 12 musical pieces.

Samples of these musical works can be listened to here:

<figure align="middle">
   <audio controls>
     <source src="https://docs.google.com/uc?export=download&id=147RvgDU_VF3wKGiAywOIjXeQ-TZ7DHJc" type="audio/mpeg" volume="1.0">
     Your browser does not support audio tag.
   </audio>
   <figcaption>God Natt - Paul</figcaption>
</figure>

<figure align="middle">
   <audio controls>
     <source src="https://docs.google.com/uc?export=download&id=1MyxV7N94pueT34hJ65BeD3HNKYktVSdK" type="audio/mpeg" volume="1.0">
     Your browser does not support audio tag.
   </audio>
   <figcaption>So Ro - Jackson</figcaption>
</figure>

<figure align="middle">
   <audio controls>
     <source src="https://docs.google.com/uc?export=download&id=1e18IMUfAIosg5caqtUWqK3XX97JHXP3T" type="audio/mpeg" volume="1.0">
     Your browser does not support audio tag.
   </audio>
   <figcaption>Sov Godt - Iggy</figcaption>
</figure>

### Our sound engine

In reference to the above scientific literature, our proposed “sound engine” for the Dream Nest incorporates the following elements:

* Original music composed specifically for Dream Nest
* The mother’s recorded heartbeat
* The mother’s voice (reading a story, singing, etc.)
* Various synthesized “womb” sounds

In order to create a working model of our sound engine, we implemented a demonstration app in MobMuPlat, using [Pure Data](https://puredata.info/) as our programming language. The app combines our original music, synthesized womb sounds, and recordings of the maternal heartbeat and voice of a real, actual mother (Paul’s wife, Erin).

<figure>
    <img src="/assets/image/2020_05_03_jacksong_dn-pd.jpg" width="500px"/>
    <figcaption>A shot of the Pure Data patch for our demo app</figcaption>
</figure>

Recording the mother’s voice is easy to do with a smartphone or laptop, but the heartbeat is a little more difficult. Ideally, a stethoscope microphone would be used for best results. Build-ing an effective stethoscope microphone is not too difficult or expensive, and perhaps one or two could be kept on hand to loan out to new Dream Nest users. In the references we have included an instructional on the construction of a simple electronic stethoscope microphone (Bhaskar 2012).

The various sound sources are combined in a simple, mixer-like interface allowing the end user to select or deselect elements and set the individual volumes of each to optimize playback on various types of audio equipment.

A short demonstration of the app is here:

<figure align="middle">
<video height="100%" width="100%" controls>
  <source src="https://docs.google.com/uc?export=download&id=1RQSaxzYciynBS0PKyzhC57O0ErnbJ_la" type='video/mp4'>
  Your browser does not support video tag.
</video>
<figcaption>Video of the MobMuPlat interface</figcaption>
</figure>

Our Pure Data code for the app [is here](https://drive.google.com/open?id=16snQbv1wQ5fd8B3dTthX6eqprnb7fOmt)

### Future work

Testing our creations on actual infant-subjects is unfortunately beyond the scope of this project, so much work remains to be done. We based our approach to this problem on the scientific research in the field, but we can’t be sure at this point which elements of our project work and which don’t. The unexpected imposition of COVID-19 quarantine definitely delayed some testing that would have taken place on the part of our industry partner, who no longer was able to continue Dream Nest testing at the local hospital’s neonatal unit.  

Having said that, we think it’s a good start. In the design of the eventual Dream Nest app that will pair with the Dream Nest itself and allow parents/caregivers to control and personalize the experience for their little ones, we recommend the following:

* A multi-channel mixer interface for the sound engine
* An expandable library of musical composition and loops to choose from
* The ability for each mother to record her own voice and heartbeat to be mixed into the over-all soundscape
* A selection of synthesized or sampled “womb sounds” to complete the sound environment

From the app, the parent/caregiver can then stream the sound to either the Dream Nest itself (if the final design allows for it) or an external bluetooth or wifi enabled speaker system. Because of the importance of the low-frequency spectrum in authentically replicating the womb environment, we recommend a good quality speaker with excellent low-frequency reproduction.

The Sonos line of WiFi speakers are already found in many households, and would be a good choice, but there are many others that would be suitable.

### Works Cited

<small>
Bhaskar, A. (2012). A simple electronic stethoscope for recording and playback of heart sounds. _Advances in Physiology Education, 36(4)_, 360–362. https://doi.org/10.1152/advan.00073.2012
</small>

<small>
Haslbeck, F. B. (2012). Music therapy for premature infants and their parents: An integrative review. _Nordic Journal of Music Therapy, 21(3)_, 203–226. https://doi.org/10.1080/08098131.2011.648653
</small>

<small>
Keith, D. R., Russell, K., & Weaver, B. S. (2009). The Effects of Music Listening on Inconsolable Crying in Premature Infants. _Journal of Music Therapy, 46(3)_, 191–203. https://doi.org/10.1093/jmt/46.3.191
</small>

<small>
Lejeune, F., Lordier, L., Pittet, M. P., Schoenhals, L., Grandjean, D., Hüppi, P. S., Filippa, M., & Borradori Tolsa, C. (2019). Effects of an Early Postnatal Music Intervention on Cognitive and Emotional Development in Preterm Children at 12 and 24 Months: Preliminary Findings. _Frontiers in Psychology, 10_. https://doi.org/10.3389/fpsyg.2019.00494
</small>

<small>
Loewy, J., Stewart, K., Dassler, A.-M., Telsey, A., & Homel, P. (2013). The Effects of Music Therapy on Vital Signs, Feeding, and Sleep in Premature Infants. _Pediatrics, 131(5)_, 902–918. https://doi.org/10.1542/peds.2012-1367
</small>

<small>
Parga, J. J., Daland, R., Kesavan, K., Macey, P. M., Zeltzer, L., & Harper, R. M. (2018). A description of externally recorded womb sounds in human subjects during gestation. _PLOS ONE, 13(5)_, e0197045. https://doi.org/10.1371/journal.pone.0197045
</small>

<small>
_Recording audio from a stethoscope · adnbr_. (n.d.). Retrieved 3 May 2020, from https://www.adnbr.co.uk/articles/recording-audio-from-a-stethoscope
</small>

<small>
Sanchez, K., & Morgan, A. T. (2019). Music therapy for neurodevelopment in hospitalised infants. _Acta Paediatrica, 108(5)_, 784–786. https://doi.org/10.1111/apa.14745
</small>

<small>
Standley, J. M. (2002). A meta-analysis of the efficacy of music therapy for premature infants. _Journal of Pediatric Nursing, 17(2)_, 107–113. https://doi.org/10.1053/jpdn.2002.124128
</small>

<small>
Webb, A. R., Heller, H. T., Benson, C. B., & Lahav, A. (2015). Mother’s voice and heartbeat sounds elicit auditory plasticity in the human brain before full gestation. _Proceedings of the National Academy of Sciences of the United States of America, 112(10)_, 3152–3157. https://doi.org/10.1073/pnas.1414924112
</small>
