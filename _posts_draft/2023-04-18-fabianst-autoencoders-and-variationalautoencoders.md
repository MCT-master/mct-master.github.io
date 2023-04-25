---
layout: post
title:  "AutoEncoders and Variational AutoEncoders"
date:   2023-04-18 14:47:42 +0200
categories: Machine Learning
author: Fabian Stordalen, Alex Wastnidge
image: /assets/image/2018_08_01_username_postthumbnail.jpg
excerpt: "A simple generative algorithm"
keywords: machine learning, deep learning
---

# Introduction to Generative Models
Generative deep learning models are a type of artificial neural network that can learn to generate new data samples similar to the training data provided. These models are designed to learn the underlying patterns and structure of the data, which can then be used to create new samples.

In this blog post we will give you an introduction to one type of generative model architecture called an Autoencoder.
## Autoencoders
An autoencoder is a neural network structure with equal numbers of inputs and outputs and at least one hidden layer which is smaller in size.

<figure style="float: none">
   <img
      src="/assets/image/2023_04_25_alexanjw_Autoencoder.jpg" width="60%" />
   <figcaption>Autoencoder architecture</figcaption>
</figure>

This effectively acts as a form of "compression" and "decompression" of the data.  Importantly, these stages mirror each other.  Many purposes use these to map one value to another. In a musical context, this can be used for accompaniment, mapping inputs of musical parts to desired outputs of accompanying parts, such as in the case of [MiniBach](https://github.com/napulen/MiniBach).

This can also be used for purely generative purposes, if the desired output of the system is set to be the input.  Here the system would essentially "learn" how to construct the input data via its encoder/decoder stages.  In this way, an autoencoder is able to "learn" the rules of a dataset.

The smallest layer in the system, is often referred to as the "latent layer" or "bottleneck layer".  After training, we can use only the decoder layer to generate material by giving values into the bottleneck layer and having them fed-forward through the decoder stage generating new material based on the training data.  

## Variational Autoencoders
A Variational Autoencoder is very similar to a traditional autoencoder the main difference being in how they handle latent space representation. In a traditional autoencoder the encoded data is mapped to a fixed point in the latent space which when reconstructed by the decoder will ideally produce a 1-to-1 reconstruction of the input data. 

In a variational autoencoder on the other hand the encoded data gets mapped to a probability distribution in the latent space. When this distribution is sampled and ran through the decoder it will generate a new sample resembling the input data.

To do this the model needs it's own specialized loss function. The most common way of calculating loss in a VAE is by combining the reconstruction loss and [Kullback-Leibler divergence](https://towardsdatascience.com/understanding-kl-divergence-f3ddc8dff254)
## Sources 

Dhinakaran, Aparna. 2023. “Understanding KL Divergence.” Medium. March 22, 2023. https://towardsdatascience.com/understanding-kl-divergence-f3ddc8dff254.
