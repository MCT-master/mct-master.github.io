---
layout: post
title: "Using machine learning to model analog guitar pedals"
date: 2022-05-20 10:30:00 +0200
categories: machine learning
author: Arvid Falch
image: /assets/image/.png
keywords: mct, machine learning, scientific computing, analog effects
excerpt: "Using LSTM recurrent neural networks to model two analog guitar pedals."
---

<!-- Alternative title: "Testing 5G Networked Music Performances" -->

# Using a Recurrent Neural Network to model two analog guitar effects

For my Machine Learning (ML) project this spring I chose to emulate some analog guitar effects using Recurrent Neural Networks (RNNs).  
An analog effect is a non-linear system which changes some of the sonic characteristics of an audio source. The dry sound is input into the unit, and the resulting output is the wet audio. My chosen effects where the Boss SD-1 distortion pedal and the Wampler Black '65 tube saturator.
(Insert image)

Using ML techniques, we are able to emulate this effect without having any prior knowledge of the effect we emulate. By feeding raw dry audio to a neural network, we can train it to predict the wet audio. More specific; we feed it a segment of dry audio and the model (which is a regressor) predict the value of the target sample of wet audio. (Fig 1)

Normal fully connected feed forward neural networks aren't very good at this, because they are not able to keep any memory of former events. Even though my chosen effects had very short time-variances, they still affect the audio source in ways that needs to be understood in the time domain. RNNs on the other hand are able to keep some memory of former events in their cell state which makes them quite good at learning how a non-linear system like an analog distortion effect works.
RNNs come in many forms, from the simple recurrent unit to the Gated Recurrent Unit (GRU). But the most popular and successful when it comes to audio effect modeling is the Long Short Term Memory unit (LSTM).

During my preliminary tests I quickly realized that the LSTM networks performed much better than the other RNNs. I also found that LSTMs had some peculiar challenges with audio prediction which I decided to explore. My project ended up being a comparative study of different LSTM architectures and different hyperparameters and how they performed modeling my chosen effects.
