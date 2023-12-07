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

However, there is another possible approach. What if, instead of adding an additional method of input, we reuse the gestures already being performed to play the existing instrument? Enter the [Augmented Violin](https://www.nime.org/proc/bevilacqua2006/), a violin-based interactive music system developed by a team of researchers at [IRCAM](https://www.ircam.fr/#) in Paris which interprets 'gesture parameters' from the way the violinist uses their bow as the way of interacting with the system.

<iframe width="560" height="315" src="https://www.youtube.com/embed/UKRrEdS_SMI?si=s2jd06mP19azUsLW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

There have been several iterations of the Augmented Violin since it first debuted in 2006. Here we will explore the initial version, which interprets ‘gesture parameters’ of bowing motion to control the pitch of a drone sound. The instrument is able to recognize for three different types of bow strokes (*détaché*, *martelé*, and *spiccato* for the string players in the audience) which are each mapped to different drone pitches. At the same time, the intensity of a given bowing gesture controls parameters of a granular synthesis which is mangling the sound of the violin in real time. As the amount of motion in the bowing gesture increases, so does the number of tiny 'grains' of sound as well as the range of pitches they cover.

# From Quantity to Gesture

To a string player, the bow strokes such as those being tracked by the Augmented Violin are an essential part of their expressive toolkit on their instrument. However, much to the chagrin of technologically-minded string players everywhere, there is sadly no such thing as a 'bow stroke sensor'. Instead, bow strokes are complex gestures which are the result of careful manipulating several aspects of the bow usage that we _can_ measure, including bow speed and acceleration perpendicular to the string, and the height of the bow above the string throughout the stroke.

<figure style="float: none">
   <img src="/assets/image/2023_09_22_jackeh_augmented_violin_image.jpg" alt="The Augmented Violin uses an accelerometer attached to the heel of the bow." width="60%"/>
   <figcaption>The initial version of the Augmented Violin uses an accelerometer attached to the heel of the bow</figcaption>
</figure>

In order to quantify bow strokes, the creators of the Augmented Violin attach an accelerometer module to the heel of the violin bow, which allows them to measure the acceleration of the bow in all three dimensions. They then train a machine learning model on a dataset of acceleration data with the accompanying bowing gesture labels to classify the three different bow strokes from their acceleration characteristics in real time during a performance. Meanwhile, the intensity of a given bow stroke is calculated as range of acceleration values measured during the stroke.

# Virtuosity and the Augmented Violin

A key consideration when designing or evaluating an IMS is that of the 'expressivity' afforded by the interface. But what is expressivity? Christopher Dobrian and Daniel Koppelman set out some [helpful guidelines and best practices](https://www.nime.org/proc/dobrian2006/) in 2006. To them, music expression is 'the felicitous or vivid indication or depiction of mood or sentiment; the quality or fact of being expressive’. Examining the Augmented Violin through this lens then, how does it afford the performer the option of musical expression?

One core tenet of their argument is that it is *mastery* of an instrument is what opens to door to expressivity. A successful interactive system, or musical instrument of any kind for that matter, should, they say, afford the seasoned performer the ability to create the aforementioned ‘depiction of mood or sentiment’. However, true mastery can be hard to find in the IMS community, because designer-performers often use their creations for one performance before they are retired. Comparitively, the performer of the Augmented Violin can have precise control of the system quickly as they are already intimately familiar with instrument on top which it is built. In this way, then, the Augmented Violin makes a strong initial case as a truly 'expressive' music system.

# How Expressive is The Augmented Violin?

However, Dobrian et al. are keen to point out that ‘control ≠ expression’. A control interface with expressive potential can be undone by ineffective gesture-sound mapping. How does the Augmented Violin fair in this arena?

>"I would assert that the gestural phrasing of bowings is the expression of the instrumental thought for strings instruments."
>
>Florence Baschet, composer of [**BogenLied**](http://www.florencebaschet.com/website/fiche2-BogenLied.html) which was composed for the original Augmented Violin

Mapping the intensity of the bowing gesture to parameters related to the intensity of the granular synthesis retains a physical relationship between input and output while also being logically complex and sonically engaging. Meanwhile, the logic in the mapping from bow stroke type to drone pitch is arguably less robust in this initial version, as bowing gestures have little to do with pitch control in purely acoustic violin playing apart from moving between strings. This mapping also limits the number of available drone pitches to three because that is how many types of bow strokes the machine learning model has be trained to recognize. As a result, the latently expressive bow strokes are arguably underutilised as a means of expression.

An alternative mapping could combine bow stroke and intensity to determine drone pitch. For example, bow stroke type might control the base pitch of the drone, which is then raised linearly in line with stroke intensity in a sonic result similar to a pitch bend. Such a mapping would increase the harmonic range of the IMS while affording greater expressive control of pitch.

# Conclusion

By using extracted bowing gestures and bow stroke intensity rather than directly measured bowing parameters, the Augmented Violin is controlled using the gestural language of its performer, rather than the measurement oriented language of the technology being used under the hood. Despite some mapping that arguably don't utilise the bowing gestures as effectively as they could, it nonetheless presents a compelling avenue for technologically extended string instruments.

