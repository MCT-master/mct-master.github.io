---
layout: post
title:  "AutoEncoders and Variational AutoEncoders"
date:   2023-04-18 14:47:42 +0200
categories: Machine Learning
author: Fabian Stordalen
image: /assets/image/2018_08_01_username_postthumbnail.jpg
excerpt: "A simple generative algorithm"
keywords: machine learning, deep learning
---

# Introduction to Generative Models
Generative deep learning models are a type of artificial neural network that can learn to generate new data samples similar to the training data provided. These models are designed to learn the underlying patterns and structure of the data, which can then be used to create new samples.

In this blog post we will give you an introduction to one type of generative model architecture called an Autoencoder.
## Autoencoders

## Variational Autoencoders
A Variational Autoencoder is very similar to a traditional autoencoder the main difference being in how they handle latent space representation. In a traditional autoencoder the encoded data is mapped to a fixed point in the latent space which when reconstructed by the decoder will ideally produce a 1-to-1 reconstruction of the input data. 

In a variational autoencoder on the other hand the encoded data gets mapped to a probability distribution in the latent space. When this distribution is sampled and ran through the decoder it will generate a new sample resembling the input data.

To do this the model needs it's own specialized loss function. The most common way of calculating loss in a VAE is by combining the reconstruction loss and [Kullback-Leibler divergence](https://towardsdatascience.com/understanding-kl-divergence-f3ddc8dff254)
## Sources 

Dhinakaran, Aparna. 2023. “Understanding KL Divergence.” Medium. March 22, 2023. https://towardsdatascience.com/understanding-kl-divergence-f3ddc8dff254.
