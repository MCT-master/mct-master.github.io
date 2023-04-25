---
layout: post
title:  "Chroma Representations of MIDI for Chord Generation"
date:   2023-04-25 21:00:00 +0200
categories: machine-learning
author: Jack Hardwick
image: /assets/image/2023_04_25_jackeh_ABBA_chroma_histogram_thumbnail.jpg
excerpt: "Understanding two ways of representing and generating chords in machine learning."
keywords: machine learning, MIDI, chroma features
---

<figure style="float: none">
   <img
      src="/assets/image/2023_04_25_jackeh_ABBA_chroma_histogram.png" width="75%" />
   <figcaption>An example of a chroma histogram.</figcaption>
</figure>

# Introduction

Using AI to generate new music, or art of any sort for that matter, can instil wonder in some and disdain in others. For some, it’s an exciting new frontier of technology while for others, we are simply giving away some of our best ways of making sense of the world around us to computers which can never truly appreciate the world, only predict it.

I can’t solve that ethical dilemma in this post, but I can at least highlight one way in which we can use machine learning to augment, rather than supplant, our musical creativity.

When I set out to conceptualise my machine learning project this semester, I started from a project I made several years ago in which a patch in Max/MSP synthesises a harmony in real time to a violinist playing a melody. In this project the harmony generated was quite static, working with largely fixed musical intervals. What if this project could be expanded with machine learning? What if, instead of using a deterministic rules-based system for generating harmony, I could leverage machine learning to generate harmony that was constantly surprising to both the performer and the audience?

# The What & Why of Chroma Representations

Many researchers have developed machine learning-based systems for generating or suggesting chords to accompany melodies. Most of these system work by analysing incoming music as harmony and melody, and then suggesting a suitable next chord in the sequence. In machine learning we call this classification algorithms, because it is determining the most suitable option from a set of discrete chords. Most of these systems select from a small subset of possible chords, such as just the 24 major and minor chords.

This works well for offline systems such as composition aids, in which the composer can take the suggestion and play around voicings, chord extensions, and instrumentation. What about real-time systems, where we need complete harmony as quickly as possible?

To tackle this issue, in my project I work with different method of representing harmony to a machine learning algorithm, called chroma histograms. Chroma representations of music are those which remove octave information. For example, in a chroma representation, all C notes are counted as the chroma pitch C, regardless of whether they are high or low. A chroma histogram is therefore the ratios of each of the 12 chroma pitch in a given set of notes, displayed as a list of numbers which add up to 1.

**Chord label representation:**

‘C major’

**Chroma histogram representation:**

|-------|--------|-------|--------|-------|-------|--------|-------|--------|-------|--------|-------|
| **C** | **C#** | **D** | **D#** | **E** | **F** | **F#** | **G** | **G#** | **A** | **A#** | **B** |
|-------|--------|-------|--------|-------|-------|--------|-------|--------|-------|--------|-------|
| 0.33  | 0.00   | 0.00  | 0.00   | 0.33  | 0.00  | 0.00   | 0.33  | 0.00   | 0.00  | 0.00   | 0.00  |

# Interpreting Chroma Histograms

When training my machine learning model, I show it chords and ask it to generate chords as chroma histograms. As a result, the output is not a single chord such as ‘C major’, but instead a set of probabilities that describe what notes should and shouldn’t work in the current context. I can then use this information to work out which, and how many, notes to include in the chord.

The idea behind choosing chroma histogram representations is that while they can represent a C major, such as in the example above, they can also represent any collection of notes which do or do not form part of a standard chord.

I propose this is preferable for a real-time scenario such as the one I describe above because it should allow my machine learning model to generate diverse and interesting harmony that isn’t limited to a small selection of possible chords.

# Conclusion

Of course, this is all well and good as conjecture. I’m currently in the process of finalising my machine learning model which puts chroma histograms into action. This section will be updated with some listening samples and concrete results soon!

The real-time implementation of this algorithm is also beyond the scope of this project. However, it takes only around 30-50 milliseconds to generate a suitable chroma histogram in my testing with a preliminary version of the model. I am therefore optimistic that it will be applicable for deployment as part of a real-time harmony generation system soon.
