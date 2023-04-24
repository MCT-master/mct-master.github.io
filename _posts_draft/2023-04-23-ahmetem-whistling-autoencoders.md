---
layout: post
title: "Whistling Autoencoders"
date: 2023-04-24 20:00:00 +0200
categories: machine-learning
author: Emin Memis
image: /assets/image/2023_04_24_ahmetem_vae_whistling_bird.jpeg
keywords: autoencoder, machine learning, data processing, whistling
excerpt: "How I used autoencoders to create whistling."
---

Whistling is a primitive capability of humankind.

I trained  variational autoencoders to generate unique human whistling sounds.

It was capable of generating things that are like whistling! I will conduct a user study to have is measured.

After reviewing the existent literature, I realiosed that human whistling is not studied using variational autoencoders. I thought it worths trying.

<figure style="float: none">
   <img
      src="/assets/image/2023_04_24_ahmetem_vae_whistling_spec1.png" width="80%" />
   <figcaption>Example whistling spectrogram.</figcaption>
</figure>

# Data
I used [MLend's Hums and Whistles](https://www.kaggle.com/datasets/jesusrequena/mlend-hums-and-whistles) dataset, which contains recordings of people whistling different songs. I applied the following preprocessing on the dataset.

## Amplitude normalization
   Min-max normalizing the amplitude of the recordings.

## Removing the silent parts
   I removed the silent portions that are over 500 ms, using the [pydub](https://pypi.org/project/pydub/) library.

## Splitting into samples
   I chopped each recordings into ##-sample-long audio pieces, and disregarded the remaining slice. This awkward number is to make sure that resultant dataset has a power-of-two shape.

## Extracting spectrograms
   I extracted spectrogram of each samples using [librosa](https://librosa.org/doc/latest/index.html)'s stft method and converted them to magnitude values.

## Frequency filtering
   I applyed frequency filtering to the spectrograms to reduce the dimentionality. First, I analysed the spectral density of the dataset to have an idea of the principal frequencies. Above #### Hz indicated no significant power. This point luckily is very close to the mid-point of the frequency range, and I put a global threshold at the middle point (###), to make sure things are in powers of two!

These steps resulted in ~12000 spectrogram representations with a shape of (128, 256). I splitted them into training and validation sets (80:20) and now ready for training!

# Model and Training
After several experiments, my final VAE model had 5 convolutional layers in encoder and decoder each, with batch normalization and linearizations after each layer. I calculated the loss by combining Mean Squared Error and Kullback-Lebiler divergence(* 10^-6). I trained the model with 10000 samples for 178 epochs on Google Colab with a batch size of 64.

## Encoder and Decoder
Encoder part has 5 convoltuional layers with 512, ..., 32 filters. Encoder encodes the input spectrograms into a 64-dimensional latent space, by learning the characteristics of the spectrograms and mapping them as a probability distribution. 

## Latent Space
The latent space that encoder creates is a 64-dimensional array with spectrogram encryptions are scattered here and there. See below the UMAP latent space visualisation after the training.

<figure style="float: none">
   <img
      src="/assets/image/2023_04_23_ahmetem_computer_networks_addr.png" width="80%" />
   <figcaption></figcaption>
</figure>

## Decoder
Decoder part is a mirrored encoder, taking the encoded representations to reconstruct a spectrogram. Last layer of the decoder has a sigmoid function that produces a spectrogram output with values between 0 and 1.

## Loss Functions
I used a combintaion of (Kullback-Leibler Divergence)[https://www.jstor.org/stable/2236703] (KL) and Mean Squared Error (MSE). MSE aimed to reduce the reconstruction error, while KL aimed to establish optimal probability distribution. I weighted the KL by 10^-6 to balance their importance in the loss function.

## Generating New Samples
After training the model, I used decoder part to generate new samples simply by randomly picking a sample from the latent space. Then the decoder reconstructed a new spectrogram based on whatever it has in his mind(!) about this point. And this is the final result, ALMOST!

## Postprocessing
Firstly, I had to put the filtered spectrogram part back - I simply filled by zeros. Secondly, I had to denormalize the amplitudes back to a normal range. Then I converted the them to audio using the [Griffin-Lim algorithm](https://ieeexplore-ieee-org.ezproxy.uio.no/document/1164317). That is the final result!

## Discussions
I think the resultant spectrograms are very close to human made ones. Altough some noise in the background and some artifacts here and there, I couldn't barely distinguish them from the originals. Also, not all the generated spectrograms are that good - some even terrible, sounding like an alien whistling, or someone practicing whistling while shaving.

I will also conduct a user study on a random pool of model-generated and original whistling samples. I will ask participants to rate the whistling sample by their _realism_ (in terms of _audio-quality_ and _expressiveness_) then to find out how unreal the model-generated whistles are.

Here are some generated good whistling samples. 


<figure style="float: none">
   <img
      src="/assets/image/2023_04_23_ahmetem_computer_networks_addr.png" width="80%" />
   <figcaption></figcaption>
</figure>
