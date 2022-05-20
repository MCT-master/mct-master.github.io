---
layout: post
title: "Piano Accompaniment Generation Using Deep Neural Networks"
date: 2022-05-20 09:00:00 +0200
categories: machine-learning
author: Kristian Wentzel
image: /assets/image/2022_05_20_kriswent_spread.jpg
keywords: mct, machine learning, MIDI, neural networks, deep learning, transformer
excerpt: "How I made use of Fourier Transforms in deep learning to generate expressive MIDI piano accompaniments."
---

How can you generate piano accompaniments to any given melody using machine learning (ML)? That was my question. The answer, my friend, seemed not to be blowing in the wind, but revealed itself after extensive googling, trial, and error. My goal was to somehow generate piano accompaniment by conditioning the ML model on a melody. To do so, I had to look into the field of Natural Language Processing (NLP) and deep neural networks. I settled on working with symbolic music representation in the form of MIDI for my project, and not raw audio. There has been a lot of research in translation tasks using ML. Let’s pretend that melodies are Chinese, and accompaniments are Swedish. Now we simply need to translate the Chinese melody into a Swedish accompaniment. Easy, right? Not when you’re completely new to the field, as I was. But I managed to learn some basics of ML translation, and a lot of general ML theory along the way.

### Sequence to Sequence
Translational tasks are usually tackled by using sequence to sequence (seq2seq) models. This architecture takes one sequence in and spits another sequence out. One of many challenges is that the sequences probably won’t be of the same length. And especially for my use case, where there should be several more notes (analogous to words) in the generated accompaniment than there will be in the incoming melody. One ML model design which has gained much attention (pun intended) the last years, is the Transformer model [1]. This model uses self-attention mechanism to learn the relationship between notes and can potentially learn long-term and high-level structures and phrases in music. This model performs even better than the Long Short-Term Memory (LSTM) layers, which previously was used by Google Translate, among others.

### FNet
For my project, I chose to use the FNet architecture [2], which is a modification of the Transformer. Here, the attention layer of the encoder is exchanged with a Fourier transform layer to project the input into the Frequency domain. This makes the model much faster, as a multiplication in the frequency domain is equivalent to a convolution in the time domain, while the performance is only slightly less accurate. I’m not too concerned about the accuracy scores when working with a generative model like this anyway.

### Model Architecture
Seq2seq models are made up of an encoder block and a decoder block – in my case, the melody (source language) is fed into the encoder, and the accompaniment (translated language) is fed into the decoder when training the model. The encoder output is merged with internal layers of the decoder, to condition the accompaniment generation on the melody, while the decoder output is the predicted accompaniment. When the model is trained, you’ll still feed the encoder with the melody, but the decoder will only get its last predicted output token at any given step. (You can also feed the decoder a portion of the original accompaniment to give it a flying start, as I did when prediction my accompaniments.) Output token you say, what’s a token?

### Tokens
The food for seq2seq models is tokens. Tokens would usually be a word representation in an NLP task. For symbolic music translation, this could be a note. There are several ways to tokenize music, and I chose to use a modified version of the design found in Google Magenta’s [Performance RNN](https://magenta.tensorflow.org/performance-rnn) and the source of my dataset, [POP909]( https://github.com/music-x-lab/POP909-Dataset). I encoded MIDI notes into the following four categories:

-	128 note-on events (One for each of the 128 MIDI pitches – to start a note)
-	128 note-off events (One for each of the 128 MIDI pitches – to release a note)
-	32 time-shift events (Making 32nd notes the shortest possible time-shift)
-	32 velocity events (MIDI velocities quantized into 32 different values)

### Dataset and processing
As my dataset, I chose the mentioned POP909 dataset, consisting of 909 Chinese pop songs. I wanted to work with popular or groove-based music, as much research has already been done in classical piano music. This dataset conveniently had MIDI files with separated tracks for melody and accompaniment, which made the whole process easier for me. I chose to quantize the MIDI files into a 32nd second note resolution and chop the files into 32 bar segments to expand my dataset. Now, I only needed a model!

### Model training
As my tool for building a machine learning model, I used the [Keras](https://keras.io/) ML framework, which is a part of the [TensorFlow](https://www.tensorflow.org/) library. I spent a *lot* time in building the model and tweaking different hyperparameters to make it perform in the best way possible. In the start, I used my poor old laptop, and kept it running overnight. (Disclaimer: Do not try this at home! I have to say I was a bit worried if the laptop would heat up too much) After a while, I switched to using UiO’s [ML Nodes](https://www.uio.no/tjenester/it/forskning/kompetansehuber/uio-ai-hub-node-project/it-resources/ml-nodes/). This, in the end, made it possible to fit my model in time. The final training of 695 epochs took about 6 hours and 45 minutes using 2 GPUs on the ML Nodes, while it would’ve approximately taken 10 days and 15 hours on my laptops CPU. (20 seconds per epoch vs 22 minutes pr epoch.) In the end, I chose to also include a vanilla Transformer model, to compare with the FNet.

### Accompaniment generation
In the end, I was quite surprised how the generated accompaniments turned out. It played in key, but the timing and rhythm was usually a bit off. The model seemed to be able to generate accompaniments with  [not finished]
