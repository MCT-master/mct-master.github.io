---
layout: post
title: "Ensemble algorithms and music classification"
date: 2021-09-20 18:10:00 +0200
categories: machine-learning
author: Alena Clim
image: /assets/image/2021_05_04_alenacl_team_a_concert.JPG
keywords: genre, classification, supervised, machine-learning, FMA
excerpt: "Playing around with some supervised machine learning - genre classification is __hard__!"
---

After a long sunny summer, we started our autumn semester with a very compact and interesting course - __Machine Learning (ML)__! The course was no joke, it's great that we are done with a course by the 20th of September, but these past weeks were interse after the lethargy of the hot season. We've learnt a lot during this time, thought, and parts of that is the fact that ML is not the answer to anything. It's a very good technique for _some_ questions but not _all_... 

Luckily, music information retrieval (MIR) is a problem for which ML has been proven to help. (Automatic) genre classification is a subproblem of MIR. It is a widely studies application of ML and the topic of my project. The state of the art results of genre classification are using by (music) tech giants such as Apple (iTunes) of Spotify and I didn't believe I had a chance against their performances. That is why I decided to focus half of my time on some literature search and find out more about the problem at hand before writing a program that would attempt to classify music. 

From the literature search I learned about two relevant phenomena:

- __Genre taxonomy is criticized__: Some researchers are debating whethear genre classification is a task worth investing so much resources into, as it has to be based on a genre taxonomy - that is, genres are labels created and decided by humans who are prone to subjectivism. The classification is based on people's opinions of similarities in harmony and or rhythm or a cultural context but it is not an universal truth. That is why the usefulness of working toward an automatic genre classification based on human defined lables is debated. 

- __Artist and album effect__: Through trial and error it has been discovered that the performance of a ML algorithm is inaccurately high if songs from the same artist are in both the training and the test set. The reason for that is simple - the model learns to recognize the songs of that artist rather than generalize to other songs from the same genre. 

After the literature search I went on to creating some code. I decided to use the [Free Music Archive (FMA)]() dataset. It is a great resource for a multitude of ML tasks; it provides the full audio, it provides a large subset with all songs but only 30 seconds taken from the middle, a medium subset with only the songs labeled with only one genre (16 root genres), and a small subset with a balanced sub-subset (?!) of the medium set (8 root genres). It also provides very comprehensie metadata abouut the track, the artist and the album, as well as audio features extracted with [librosa]() from all the songs, all separately in .csv files, which facilitates a quick start on any task. 



<figure style="float: auto">
   <img src="/assets/image/2021_05_04_alena_small_fma_cent_contrast.jpg" alt="" title="Spectral centroid vs contrast on the small FMA" width=auto/> <figcaption>Spectral centroid vs contrast</figcaption>
</figure>