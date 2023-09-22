---
layout: post
title:  "The Augmented Violin: Examining Musical Expression in a Bow-Controlled Hyper-Instrument"
date:   2023-09-22 20:00:00 +0200
categories: interactive-music
author: Jack Hardwick
image: /assets/image/2023_09_22_jackeh_augmented_violin_preview.jpg
excerpt: "A brief look at the affordance for musical expression in a violin-based interactive music system."
keywords: interactive music systems, violin, bowed strings, hyperinstrument, expressivity
---

Many interactive music systems involving existing instruments seek to extend the capabilities of that instrument by adding additional control surfaces for the performer to interact with. For example, a trumpet player typically only uses three of their fingers to play their instrument. To the intrepid IMS designer, this is an open invitation to give them something to do with the remaining seven. In IMS circles this is called exploiting the spare bandwidth of the performer.

Now consider a bowed string instrument like the violin. In this example the fingers and hands are now all accounted for. We could instead use the feet to control other processes, for example through a foot pedal. Aside from the additional cognitive load, one downside of such a system is that the performer is required to dedicate signficant time to learning how to interact with the new input, and how that can best integrate this new input with the gestures already required to perform on their instrument.

# The Augmented Violin

However, there is another possible approach. What if, instead of adding an additional method of input, we reuse the gestures already being performed to play the existing instrument? Enter the Augmented Violin, [1], [2] a violin-based interactive music system developed by a team of researchers at [IRCAM](https://www.ircam.fr/#) in Paris which interprets 'gesture parameters' from the performer's bow motion as the way of interacting with the system.

<figure style="float: none">
   <img src="/assets/image/2023_09_22_jackeh_augmented_violin_image.jpg" alt="The Augmented Violin uses an accelerometer attached to the heel of the bow." width="60%"/>
   <figcaption>The initial version of the Augmented Violin uses an accelerometer attached to the heel of the bow</figcaption>
</figure>

There have been several iterations of the Augmented Violin since 2006. Here we will explore the initial version, which interprets ‘gesture parameters’ from the way the violinist uses the bow to control the pitch of a drone sound. The system affords gesture recognition for three different types of bow strokes – *détaché*, *martelé*, and *spiccato* - which are each mapped to different drone pitches. Concurrently, the intensity of a given bowing gesture controls parameters of granular synthesis of the live violin sound, such that greater quantity of motion increases the number of grains as well as the pitch range they cover.

# From Quantity to Gesture

To a violinist, bow strokes such as those being tracked by the Augmented Violin are an essential part of their toolbox. However, they are not quantities we can directly measure using a sensor. Instead, they are the result of the careful manipulation of several aspects of the bow usage, including bow speed and acceleration perpendicular to the string, and the height of the bow above the string throughout the stroke.

In order to quantify bow strokes, the creators of the Augmented Violin attach an accelerometer module to the heel of the violin bow, which allows them to measure the acceleration of the bow in the X, Y, and Z planes. They then train a k-nearest neighbours classification machine learning model on a dataset of acceleration data and bowing gesture labels to be able to identify the three different bow strokes from their acceleration characteristics. This model is then implemented in real time, allowing the bow stroke performed to be identified during a performance. Meanwhile the intensity of a given bow stroke is determined as the difference between the maximum and minimum amount of acceleration during that stroke.

<figure style="float: none">
   <img src="/assets/image/2023_09_22_jackeh_augmented_violin_data_flowchart.jpg" alt="Bow stroke classification and gesture intensity are calculated from the accelerometer data" width="50%"/>
   <figcaption>The full data processing flowchart in the original Augmented Violin. Bow stroke classification (right-hand side) and gesture intensity (left-hand side) are calculated/predicted from the accelerometer data</figcaption>
</figure>

# Virtuosity and the Augmented Violin

A key consideration when designing or evaluating an IMS is that of the expressivity afforded by the interface. Christopher Dobrian and Daniel Koppelman set out some guidelines and best practices in 2006 at the New Interfaces for Musical Expression conference [3]. They define expression as the ‘felicitous or vivid indication or depiction of mood or sentiment; the quality or fact of being expressive’. Examining the Augmented Violin through this lens, how does it afford the performer the option of musical expression?

One core tenet of Dobrian et al.’s argument is that it is *mastery* of an instrument that opens to door to expressivity. A successful interactive system, or musical instrument of any kind for that matter, should, according to Dobrian and Koppelman, afford the seasoned performer the ability to create the aforementioned ‘depiction of mood or sentiment’. However, true mastery can be hard to find in the IMS community because designer-performers often use their creations for one performance before they are retired. On the other hand, the performer of the Augmented Violin can have precise control of the system quickly as they are already intimately familiar with its input mechanism. In this way, then, the Augmented Violin makes a strong initial case for its potential for expression.

# How Expressive is The Augmented Violin?

However, Dobrian et al. are keen to point out that ‘control ≠ expression’. A control interface with expressive potential can be undone by ineffective gesture-sound mapping. How does the Augmented Violin fair in this arena?

>"I would assert that the gestural phrasing of bowings is the expression of the instrumental thought for strings instruments."
>
>Florence Baschet, composer of [**BogenLied**](http://www.florencebaschet.com/website/fiche2-BogenLied.html) which was composed for the original Augmented Violin

Mapping the intensity of the bowing gesture to parameters related to the intensity of the granular synthesis retains a physical relationship between input and output while also being logically complex and sonically engaging. Meanwhile, the logic in the mapping from bow stroke type to drone pitch is arguably less robust in this initial version, as bowing gestures have little to do with pitch control in purely acoustic violin playing apart from moving between strings. This mapping also limits the number of available drone pitches to three due to the size of the bow stroke vocabulary of the machine learning algorithm. As a result, the latently expressive bow strokes are arguably underutilised as a means of expression here.

An alternative mapping could combine bow stroke and intensity to determine drone pitch. For example, bow stroke type might control the base pitch of the drone, which is then raised linearly in line with stroke intensity in a sonic result similar to a pitch bend. Such a mapping would increase the harmonic range of the IMS while affording greater expressive control of pitch.

# Conclusion

By using extracted bowing gestures and bow stroke intensity rather than directly measured bowing parameters, the Augmented Violin is controlled using the gestural language of its performer, rather than the measurement oriented language of the technology being used. Despite some unconvincing mappings, it nonetheless presents a compelling avenue for technologically extended string instruments.

You can check out one of the future iterations of the Augmented Violin in the video below, where violinist Mari Kimura discusses the glove-based version.

<iframe width="560" height="315" src="https://www.youtube.com/embed/UKRrEdS_SMI?si=s2jd06mP19azUsLW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# References

[1]	F. Bevilacqua, N. Rasamimanana, E. Fléty, S. Lemouton, and F. Baschet, ‘The Augmented Violin Project: Research, Composition And Performance Report’, presented at the International Conference on New Interfaces for Musical Expression, Paris, France: Zenodo, Jun. 2006. doi: 10.5281/ZENODO.1176871.

[2]	M. Kimura, N. Rasamimanana, F. Bevilacqua, N. Schnell, B. Zamborlin, and E. Fléty, ‘Extracting Human Expression For Interactive Composition With The Augmented Violin’, presented at the International Conference on New Interfaces for Musical Expression, Ann Arbor, Michigan, USA: Zenodo, Jun. 2012. doi: 10.5281/ZENODO.1178305.

[3]	C. Dobrian and D. Koppelman, ‘The “E” in NIME: Musical Expression with New Computer Interfaces’, in Proceeding of New Interface for Musical Expression, 2006.

