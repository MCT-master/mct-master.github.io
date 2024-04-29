---
layout: post
title:  "AcidLab: deep acid bass-line generation"
date:   2024-04-28 10:48:00 +0200
categories: machine-learning
author: Tom Oldfield
image: /assets/image/2024_04_28_thomaseo_cover.jpeg
excerpt: "Using machine learning to generate acid bass-line melodies with user-created datasets."
---
### Introduction
AcidLab is a machine learning system for symbolic music generation. It composes melodic midi loops for use in dance music genres such as bass-lines in acid house. One of the key points about this system is its use of small, user-composed datasets. Traditionally in machine learning, ‘more is more’ when it comes to dataset size, but AcidLab explores the viability of using small data sets in this context. This blog post will describe the machine learning techniques used, data flow of the system and discuss the results of a comparative study looking at the ability of AcidLab to learn harmonic structures from different sized datasets.
<br>

### Why use a small dataset??
So why should we use small, user-composed datasets in the first place? Well, AcidLab is a tool for musicians to embellish their own ideas rather than simply producing new ideas based on hundreds of files downloaded from the internet. This gives the artist more ownership over the outputs of the system. Also, if the datasets are user-composed, then they have to be small; if the objective is to generate variations of a musical motif, this goal is achieved without the need of a machine learning system.

This does come with some disadvantages. Even a dataset of limited size does take time to curate and prepare. Not to mention the fact that if we give less data we give to the model, the outputs will be less varied. AcidLab attempts to mitigate some of these disadvantages by using a probability-based model and dataset augmentation techniques.
<br>

### The Variational Autoencoder

AcidLab uses a Variational Autoencoder (VAE) to generate symbolic music patterns. VAEs are a type of Artificial Neural Network (ANN) and consist of two main parts - an encoder and a decoder.

The encoder performs dimensionality reduction. It takes high dimensional features and reduces them down to a smaller number of dimensions. The small layer at the end of the encoder is called the encoded vector, or ‘bottleneck’, and the data inside this layer, the lower-dimensional representation of the input data, is referred to as the latent space. Below is an diagram of a traditional Autoencoder.

<img src="/assets/image/2024_04_28_thomaseo_AE.jpeg" width="80%" style="display: block; margin: auto;" />
<br>

The decoder is a mirror image of the encoder. The low-dimensional representation is converted back to it’s original dimension. This type of model is often used to repair corrupted images or audio.

What makes the VAE different from a basic autoencoder is the introduction of probability to the latent space. Instead of being deterministically mapped in the latent space, values are now mapped to a distribution, typically a Gaussian distribution. Once this model is trained, the latent space distribution can sampled. Values which represent this distribution can be feed to the decoder, generating completely new outputs which ‘look like’ the training data.

<img src="/assets/image/2024_04_28_thomaseo_VAE.jpeg" width="80%" style="display: block; margin: auto;" />

<br>
<br>

### Building a dataset

To test initial designs of AcidLab, I created a data set of 50 examples. I used an Arturia KeyStepPro sequencer to generate and edit patterns and Ableton Live to record the midi data. All patterns begin on midi note 36 and last for 1 bar of 4/4. Before exporting each clip to a midi file, the notes were quantised on a 16th note grid and the tempo was set to 120 bpm. The whole process took approximately 90 minutes. Below you can see one example pattern inside the piano roll editor in Ableton Live.

<img src="/assets/image/2024_04_28_thomaseo_midi.jpeg" width="80%" style="display: block; margin: auto;" />
<br>


You can listen to some examples from the dataset here:

<audio controls>
    <source src="/assets/audio/2024_04_28_thomaseo_dataset.wav" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
<br>
<br>

### Data processing

Once a data set was created, it required processing to be interpreted by the model. The MIDI files were imported to a python script and a piano roll extracted using the pretty_midi library. Velocity values are replaced with 1s and the upper register of notes are removed, leaving a 3 octave range from midi note 36 to 73. 

7, 9 and 10 step patterns are created by replacing notes with zeros. These pattern lengths are commonly used in acid house music for creating polyrhythms. This dataset augmentation technique is known as cropping.

<img src="/assets/image/2024_04_28_thomaseo_cropping.jpeg" width="80%" style="display: block; margin: auto;" />
<br>
<br>


### Design and Implementation

Using Tensorflow and Keras, I implemented a VAE architecture in python. Although I experimented with different numbers and sizes of hidden layers, every input layer contained 592 neurons, one for each ‘pixel’ of the example data. Here is a diagram of one tested architecture:
<img src="/assets/image/2024_04_28_thomaseo_my_vae.jpeg" width="80%" style="display: block; margin: auto;" />


The model was trained on the dataset in the same way as a traditional autoencoder, where the goal is to reconstruct the input at the output. Here are some of the results from early testing.
<img src="/assets/image/2024_04_28_thomaseo_training_outputs.jpeg" width="60%" style="display: block; margin: auto;" />


Then, randomly generated values within the boundaries of the latent space distribution are fed to the output, generating images that look similar to the inputs. These images are then processed to create monophonic patterns. The image below shows a before and after of this processing.

<img src="/assets/image/2024_04_28_thomaseo_output_mask.jpeg" width="20%" style="display: block; margin: auto;" />


Now the piano roll images are converted back into MIDI files to be approved by the musician.
<br>
<br>


### Comparative Study

A study was conducted to see how well AcidLab learns harmonic data from datasets of differing sizes. For the study, datasets were created using a combination of the original 50 examples dataset and outputs generated by the model during the design and testing process. Sizes of dataset tested were 10, 20, 50 and 100 examples and there were 2 different harmonic structures, minor and Phrygian mode - totalling 8 datasets.

The results of this study found that AcidLab does learn the harmony from its given dataset. Often 10 example datasets gave the best results. This can be expected because there is less data to choose from. Below shows a Pitch Class Transition Matrix (PCTM) for the minor 10 and 25 example datasets. PCTMs describe the relationships between different notes and are a way of displaying the harmonic relationships in a song.

<img src="/assets/image/2024_04_28_thomaseo_PCTM.jpeg" width="100%" style="display: block; margin: auto;" />
<br>


### Summary

In summary, I believe there is cause for further exploration in this area. With a better model, AcidLab could become a like a jam partner that gets better the more you play with them. Possibilities for live performance, if a transition to real-time processing is made, beckon. In the meantime, here's some outputs from the modal harmony dataset with some drum backing, enjoy!

<audio controls>
    <source src="/assets/audio/2024_04_28_thomaseo_outputs.wav" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>



<br>
<br>
<br>
<br>
<br>

### Sources

Autoencoder diagrams from this article on Towards Data Science:
https://towardsdatascience.com/understanding-variational-autoencoders-vaes-f70510919f73

Cover image by imustbedead:
https://www.pexels.com/photo/lsd-on-tongue-11481152/