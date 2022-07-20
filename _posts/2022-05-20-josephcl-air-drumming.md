---
layout: post
title: "Developing Techniques for Air Drumming Using Video Capture and Accelerometers"
date: 2022-05-20 10:00:00 +0200
categories: motion-capture
author: Joseph Clemente
image: /assets/image/2022_05_19_josephcl_air_drumming_thumbnail.jpeg
keywords: motion capture, motion tracking, machine learning, ML, air drumming, accelerometry, MLP, ANN
excerpt: "Creating MIDI scores using only data from air drumming"
---

# Introduction

In this blog post, I'll be descibing my process to create a system for air drumming using a combination of accelerometer data and video input, and showing my results via a video synchronizing the generated MIDI files to a test video file. To do this, the system will be broken down into two parts: drum hit detection and drumming position prediction.

# Hit Detection

In order to tell when a drum hit should be registered in the MIDI file, we will use one [AX3](https://axivity.com/product/ax3) accelerometer in each hand. They will both be held in between the thumb and index finger, much like a drum stick would. In order to detect a hit, we will only be analyzing the y axis of acceleration since this was found to be the most accurate.

# Position Prediction

We must also be able to tell exactly what drums the drummer is playing at any given time using purely video data, which is a much harder task. To do this, we will be using a variety of machine learning (ML) techniques and tools. First, we need to train our ML systems using there will be 7 different postions we will use, each corresponding to which drum the left and right hand are playing. Those postions are:

- Left and right hand playing a hi-hat
- Left hand playing a snare, right hand playing a hi-hat
- Left and right hand playing a snare
- Left hand playing a snare, right hand playing a ride cymbal
- Left hand playing a snare, right hand playing a floor tom
- Left and right hand playing a floor tom
- Left hand playing a snare, right hand playing a crash cymbal

You can view one of the test videos below, with the left hand playing a snare and right hand playing a hi-hat.

<video width="720" height="406" controls>
  <source src="https://drive.google.com/uc?&id=1B0Br_3UCS50ewAqU4Iz4K6_D_6xZUwi4" type="video/mp4">
</video>

# Feature Extraction

Now, the question is how we can tell each of these positions apart. To accomplish this, I came up with 4 different feature extraction methods to attempt this: using raw video data in a system similar to the [Wekinator](http://www.wekinator.org/), using raw CSV data from the [VideoAnalysis](https://github.com/fourMs/VideoAnalysis/wiki) software, using smoothed CSV data from VideoAnalysis, and using smoothed VideoAnalysis data along with smoothed AX3 accelerometer data.

## Raw Video Data

In order to use raw video as an input to ML systems, we will import the videos into python using the pacakge [OpenCV](https://opencv.org/), convert them to grayscale, downsample the video to 50x50 pixels, and parse each training video frame by frame to train our systems to predict positions.

## VideoAnalysis Data

The VideoAnalysis software was developed by the [fourMs lab](https://www.uio.no/ritmo/english/research/labs/fourms/) to perform simple motion analysis on video inputs. The inputs we will use for our ML systems that are output into a CSV by the VideoAnalysis software will be the quantity of motion, the x and y coordinates for center of motion, and the x and y coordinates of the motion bounding box’s minimum and maximum values.

We will use this data in two different ways. The first will be similar to the raw video data, where we will parse the output CSV file row by row (equivalent to frame by frame) and use the afformentioned values to train the ML systems. The second will be using a [rolling average](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.rolling.html) in order to smooth the data, and then the ML systems will be trained in the same way as before. Finally, we will be using a combination of smoothed VideoAnalysis data and smoothed accelerometer data as inputs to the ML systems.

# ML Techniques

For each feature extraction method, we'll use both an [MLP regressor](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPRegressor.html) and an [MLP classifier](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPClassifier.html). In regards to this project, the main difference between the two are that the classifier will use input data to predict a label that corresponds to a drumming position, while the regressor will output two continuous values which will be rounded and used to correspond to the position of each hand (ex. [0, 1] corresponds to left hand snare, right hand hi-hat).

# Evaluation Metrics

We will be evaulating the ML systems using both qualitative and quantitative methods. For regressors, we will be using R2 score as our quantitative metric and for classifiers we will be using accuracy. We will also sync the generated MIDI to the test video file, which you can view below.

# Results With Raw Video Features

## Regressor

<video width="720" height="406" controls>
  <source src="https://drive.google.com/uc?&id=1CirrbliAFpmkPGcR73i4wv5Nmp-DJQLI" type="video/mp4">
</video>

## Classifier

<video width="720" height="406" controls>
  <source src="https://drive.google.com/uc?&id=1eMdDgfIH7u8P66LSKW0JQOy2oCvhas9f" type="video/mp4">
</video>

# Results With Raw VideoAnalysis Features

## Regressor

<video width="720" height="406" controls>
  <source src="https://drive.google.com/uc?&id=1cGreB2pYG3ycNQleNEMYy9scFMGw9jqx" type="video/mp4">
</video>

## Classifier

<video width="720" height="406" controls>
  <source src="https://drive.google.com/uc?&id=1ruCIUprCZ1UHfgSQrMOyXDhLikQm61cL" type="video/mp4">
</video>

# Results With Smoothed VideoAnalysis Features

## Regressor

<video width="720" height="406" controls>
  <source src="https://drive.google.com/uc?&id=1NO4Q-oPpUYKuHasTU4-4a8PjEhm2DLi7" type="video/mp4">
</video>

## Classifier

<video width="720" height="406" controls>
  <source src="https://drive.google.com/uc?&id=1pjjQSUBMJQDg91ib_hsDrRvtqkIN2Uwv" type="video/mp4">
</video>

# Results With Smoothed VideoAnalysis And Accelerometer Features

## Regressor

<video width="720" height="406" controls>
  <source src="https://drive.google.com/uc?&id=1qK2y2Rt2ZUONRNmmzr1SmGajhrz7KQ6R" type="video/mp4">
</video>

## Classifier

<video width="720" height="406" controls>
  <source src="https://drive.google.com/uc?&id=1_6jfrnWJemomMbPFumpy_YdwZNK5Eyfg" type="video/mp4">
</video>

# Quantitative Metrics

## Regressors

<figure style="float: none">
   <img src="/assets/image/2022_05_19_josephcl_regressor_r2.png" alt="Alternate Text" width="auto" />
</figure>

## Classifiers

<figure style="float: none">
   <img src="/assets/image/2022_05_19_josephcl_classifier_accuracy.png" alt="Alternate Text" width="auto" />
</figure>

# Conclusions

As you can see from these videos, hit detection with accelerometry was very accurate, but none of the attempted techniques for position prediction worked particularly well. This could be due to a variety of factors, but my main theories are that I tested the ML systems on too many positions and due to some of the movements being incredibly similar (ex. left hand snare and right hand hi-hat vs. both hands snare), the resulting ML system just ended up getting confused. However, there were some brief flashes of success in the results for the regressor using smoothed VideoAnalysis CSV data as an input.

In general, using raw video input with as inputs to ML systems seems to not be a good way to produce accurate MIDI scores through air drumming. One possible alternativesthat may work better is using raw video data, but defining boundaries for each instrument so the onus is on the user to perform correctly instead of relying on an ML system. If ML were to still be used, a more accurate 3D rendering of arm motion using a system such as [OptiTrack](https://optitrack.com/) should be used instead of just flat, 2D video data.

# Files

You can view the GitHub repository with the files for this project [here](https://github.com/jpclemente97/MCT4053FinalProject).

# Image Source

https://jamaddict.com/wp-content/uploads/2019/11/bigstock-Boy-listening-to-music-57379796.jpg
