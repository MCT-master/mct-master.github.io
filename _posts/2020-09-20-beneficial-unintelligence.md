---
layout: post
title: "Beneficial Unintelligence"
date: 2020-09-21 08:00:00 +0200
categories: machine-learning
author: Mari Lesteberg
image: http://i2.cdn.turner.com/cnn/dam/assets/140312125126-robot-musicians-horizontal-gallery.jpg
keywords: artificial-intelligence, ai, support-vector-machine, dadabot, robot music
excerpt: "In the future, when the robots take over the world, we all will be listening to 24/7 live streamed death metal until infinity"
---

<p style="text-align: center; font-size:18px; font-family:'Courier New'">Artificial Intelligence</p>
<p style="text-align: center; font-size:24px; font-family:'Courier New'">Artificial Commonsence</p>
<p style="text-align: center; font-size:28px; font-family:'Courier New'">Practificial Frankinsence</p>
<p style="text-align: center; font-size:34px; font-family:'Courier New'">Beneficial Unintelligence</p>

 
Machine Learning, the buzz word. Since I started on the MCT master, I’ve been looking forward to these two intensive weeks of coding. I imagined building a whole choir of cute singing robots, performing Beethoven’s 9th symphony:
<br> 
<iframe width="560" height="315" src="https://www.youtube.com/embed/gVfBizjQd_M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>
Or to create a music buddy, who could be my new band mate, something like Dr. Squiggles:  
<iframe width="560" height="315" src="https://www.youtube.com/embed/yN711HXPfuY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>
Or an android guitarist with 78 fingers. This is what I need in my band obviously. My Guitar Pro compositions from 2007 (with guitar tabs that demanded the guitarist to have at least 3 hands with 7 fingers each), could have it’s renaissance: 

![Robot guitarist](http://i2.cdn.turner.com/cnn/dam/assets/140312125126-robot-musicians-horizontal-gallery.jpg"This robot guitarist would never have any problems learning my 21 fingers- and three hands-demanding Guitar Pro tabs")

 
So what’s machine learning? It can be many things. It can be something that learns, after you give it a lot of data with labels attached, and after some training, it tries to predict something (supervised learning). Or it can be an algorithm that on it’s own organizes loads of data into lumps, without labels, and it’s called clustering or unsupervised learning. 
It can be something that replicates the network of neurons in a human brain: Artificial neural network. 
 
So Machine Learning is a lot of things, really. It’s not just the robots that are about to get sentient (and soon will take over the world etc). And if you get really good at machine learning, you can make a youtube channel that live streams deathmetal 24/7 until infinity:
<iframe width="560" height="315" src="https://www.youtube.com/embed/MwtVkPKx3RA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
(This is by the way, what we all will be listening to in the future, when the robots take over the world) 
 
If you are not THAT good at machine learning, but had a two weeks intensive MCT Music and Machine Learning course, you could for instance do something like I did: make a system that identifies which vocal technique you’re using! Why, you might say, don’t we have vocal teachers that do that? Well, if this corona hell is going to last, we might really need some online tools for music instrument learning assessment. If your internet connection is bad, and you sound like Dadabot’s Death Metal livestream through Skype, what should your vocal teacher say, I mean. Therefore I present:


<p style="text-align: center; font-size:30px; font-family:'Courier New'">The Vocal Technique Classifier:</p>

To make this tool you need:
* 1 [dataset](https://zenodo.org/record/1442513#.X1ciloaxVH5)
* A couple of feature extractors (E.g. [MFCC](http://man.hubwiz.com/docset/LibROSA.docset/Contents/Resources/Documents/generated/librosa.feature.mfcc.html) and [Melspectrogram](http://man.hubwiz.com/docset/LibROSA.docset/Contents/Resources/Documents/generated/librosa.feature.melspectrogram.html))
* 1 pinch of [Linear Discriminant Analysis](https://scikit-learn.org/stable/modules/generated/sklearn.discriminant_analysis.LinearDiscriminantAnalysis.html) (my favourite ingredient)
* 1 [Support Vector Machine](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html) OR 1 [Artificial Neural Network](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPClassifier.html)

Before you pour the whole datset into the algorithm, it should be processed with an extensive procedure of feature extraction. Add 1 MFCC and 1 Melspectrogram with Librosa. Now it's time to add the emulsifying agent, the Linear Discriminant Analysis. Mix it all together until it turns to a delishious spaghetti code and pour it all into the Support Vector Machine (Optional: Artificial Neural Network). Turn on your CPU to 250 degrees celcius and wait for 5-10 minutes. Bon Apetit.


<p style="text-align: center; font-size:30px; font-family:'Courier New'">Gallery:</p>

<p style="text-align: center; font-family:'Courier New'">The delightful chaos before applying LDA:</p>
![Before LDA](/assets/image/2020_09_20_FractionMari_plot_bLDA.png "Features before applying LDA")

<p style="text-align: center; font-family:'Courier New'">The beautiful tidiness after applying LDA:</p>
![After LDA](/assets/image/2020_09_20_FractionMari_plot_aLDA.png "Features after applying LDA")

<p style="text-align: center; font-family:'Courier New'">Unicorn spaghetti in 450 dimentions:</p>
![Unicorn Spaghetti](/assets/image/2020_09_20_FractionMari_unicorn_spaghetti.png "Not a double rainbow ... Not a triple rainbow ... ")

<p style="text-align: center; font-family:'Courier New'">Spectrogram before LDA:</p>
![Spectrogram before LDA](/assets/image/2020_09_20_FractionMari_spect4.png "The beauty of 450 dimentions")

<p style="text-align: center; font-family:'Courier New'">Barcode of vocal features:</p>
![Spectrogram after LDA](/assets/image/2020_09_20_FractionMari_spect5.png "Barcode")


