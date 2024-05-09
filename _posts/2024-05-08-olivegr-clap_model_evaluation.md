---
layout: post
title: "CLAP Models and How To Make Them"
date: 2024-05-08 20:11:00 +0200
categories: machine-learning
author: Oliver Getz
image: /assets/image/2024_05_09_olivegr_clap_thumbnail.jpg
excerpt: "Is there anything CLAP models can't do?"
keywords: machine learning, thesis
---
As the meeting point between machine learning, language, and audio, Contrastive Language-Audio Pre-Trained models (CLAP) has potential for a plethora of language-aligned audio applications, including:

1. Zero-Shot Classification
  * Instruments, Voice Emotion, Music Genres, Counting Speakers and much more!   
2. Class Separation
3. Music Retrieval
4. Automatic Captioning
5. Audio Content Filtering
6. Sound Event Detection

Additionally, contrastive representations have been used for conditioning Text-To-Audio systems. So, if CLAPs are so great, how do they work? 

# Contrastive Representation Learning
The bad news is that such an architecture is quite complex to build from the ground up. The good news is that we can use pre-trained models within our contrastively pre-trained model, which can then be trained pre-integration in larger audio systems. Neat! All we need is a language model (BERT, RoBERTa, or T5 are common choices) and an audio model (HTSAT or PANN for instance). Projecting their logits into the same latent space using an appropriate loss function will give us the desired result.

<figure style="float: none">
  <img src="/assets/image/2024_05_09_olivegr_clap.jpg"
  width="100%" height="100%" />
</figure>

A contrastive loss function will be able to pull text logits and audio logits that belong together closer (positive pairs), but repell those that do not (negative pairs). What does such a loss function look like? I'm glad you asked! You can find code to get you started on my [UCS-CLAP Github](https://github.com/olivergetz/UCS-CLAP).

# CLAP Comparison
I recently compared two CLAP models through the embeddings they produce, and through my experiments I can safely say that I am 76% confident that inspecting the proximity of CLAP embeddings through a 2D PCA plot gives a solid estimate of classification accuracy!

<figure style="float: none">
  <img src="/assets/image/2024_05_09_olivegr_clap_pca.jpg"
  width="100%" height="100%" />
</figure>

**Disclaimer**: these findings are<sub>not backed by the <sub>statistical power necessary<sub>to say for certain :(</sub>

# Dataset & Code
Should you want to recreate my results, you may get audio embeddings [here](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/other/2024_05_09_olivegr_thesis_dataset.zip). Notebooks for the project and a reproduction guide may be found on [Github](https://github.com/olivergetz/thesis).

# Acknowledgements
My thesis was made possible with help from Stian Aagedal and Peder Jørgensen of [HANCE.AI](https://hance.ai). I would like to thank them for their continued support and for granting me access to the entire Soundly audio collection for my work.