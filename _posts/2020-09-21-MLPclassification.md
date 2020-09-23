---
layout: post
title: "Multilayer Perceptron Classification"
date: 2020-09-21 21:00:00 +0200
categories: machine-learning
author: Simon Rønsholm Sandvik
image: /assets/image/2020_09_21_simonrs_mlpheaderimg.png
keywords: Machine-Learning, MLP, Multi-layer-perceptron, Neural-Network
excerpt: "Multi-layer Perceptron classification. Big words for a big task. During this two-week course in machine learning all my brain cells were allocated in solving this task. Initially I wanted something simple to do for my project since wrapping my head around ML was a daunting enough task. I soon realized there really is no such thing as simple in machine learning."
---

# Multilayer Perceptron Classification of Drums

## OVERVIEW
For my project I have worked with drum samples and respectively classified them into snare, kick, tom, ride, crash etc… There has been done quite a bit of research into this field, as drum classification is a vital part in auto transcription of music, as well as its commonplace within software to handle and organize large sample libraries.

## THE DATA SET
The dataset I used for this site I collected from [this](http://www.mattprockup.com/percussion-dataset) site.
It consists of a whopping 10 600 files. Albeit some are these are different microphones of the same recordings. Every drum is struck from different positions, heights and intensities making it a great dataset to work with. I used the three 10 seconds of each sample, and loaded it at 44,1 kHz as I came to the conclusion that a higher sample rate would help better define the relatively short and large frequencies drums will get you.
![Overview of the dataset.](/assets/image/2020_09_21_simonrs_datasetimg.png "Overview of dataset.")

## FEATURES
What soon became apparent working with such a large dataset, was the amount of time spent on extracting features and training. Of course I just got to have it all, so the first time around I extracted literally every feature librosa had to offer. A whopping 99% accuracy! Looking at the CSV file of all my features, it was getting close to 2GB, so obviously I got to working with reducing the amount of features, and basically going back to scratch. I came up with a process where I tested each of the features to see what kind of accuracies, they alone would give me, for some indication as to their importance. Zero crossing rate, is for many a given when working with drums and it gave me decent results, ranging in the 80% accuracy just from the mean of the ZCR. The other two I identified as important were the melspectrum and the chroma energy normalized distribution statistics. I quickly also realized I were extracting a whole lot of unnecessary data of nothing and reduced the duration to three seconds. Using only these three features I reduced the amount of data to a fraction of my starting point but was able to preserve accuracies in the high 90’s.
As a learning experience this was a valuable course. But the time constraints really did limit the scope of the project. Despite this, the course was an excellent introduction to librosa, and how powerful it can be, if only put in the right hands!
