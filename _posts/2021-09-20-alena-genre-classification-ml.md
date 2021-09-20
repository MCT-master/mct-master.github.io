---
layout: post
title: "Ensemble algorithms and music classification"
date: 2021-09-20 18:10:00 +0200
categories: machine-learning
author: Alena Clim
image: /assets/image/2021_09_20_alena_music_genres_icons.png
keywords: genre, classification, supervised, machine-learning, FMA, knn, SVC
excerpt: "Playing around with some supervised machine learning - genre classification is __hard__!"
---

After a long sunny summer, we started our autumn semester with a very compact and interesting course - __Machine Learning (ML)__! The course was no joke, it's great that we are done with a course by the 20th of September, but these past weeks were interse after the lethargy of the hot season. We've learnt a lot during this time, thought, and parts of that is the fact that ML is not the answer to anything. It's a very good technique for _some_ questions but not _all_... 

Luckily, music information retrieval (MIR) is a problem for which ML has been proven to help. (Automatic) genre classification is a subproblem of MIR. It is a widely studies application of ML and the topic of my project. The state of the art results of genre classification are using by (music) tech giants such as Apple (iTunes) of Spotify and I didn't believe I had a chance against their performances. That is why I decided to focus half of my time on some literature search and find out more about the problem at hand before writing a program that would attempt to classify music. 

From the literature search I learned about two relevant phenomena:

- __Genre taxonomy is criticized__: Some researchers are debating whethear genre classification is a task worth investing so much resources into, as it has to be based on a genre taxonomy - that is, genres are labels created and decided by humans who are prone to subjectivism. The classification is based on people's opinions of similarities in harmony and or rhythm or a cultural context but it is not an universal truth. That is why the usefulness of working toward an automatic genre classification based on human defined lables is debated. 

- __Artist and album effect__: Through trial and error it has been discovered that the performance of a ML algorithm is inaccurately high if songs from the same artist are in both the training and the test set. The reason for that is simple - the model learns to recognize the songs of that artist rather than generalize to other songs from the same genre. 

After the literature search I went on to creating some code. I decided to use the [Free Music Archive (FMA)](https://github.com/mdeff/fma) dataset. It is a great resource for a multitude of ML tasks; it provides the full audio, it provides a large subset with all songs but only 30 seconds taken from the middle, a medium subset with only the songs labeled with only one genre (16 root genres), and a small subset with a balanced sub-subset (?!) of the medium set (8 root genres). It also provides very comprehensie metadata abouut the track, the artist and the album, as well as audio features extracted with [librosa](https://librosa.org/doc/latest/index.html) from all the songs, all separately in .csv files, which facilitates a quick start on any task. They also published a comprehensive manifest together with the data, where they tested the performance of several ML algorithms on several combinations of features extracted from their data - the medium subset. 

Due to limited computational power, I chose to work on the small subset. It onsists of 1000 tracks of the top represented root genres: Hip-Hop, Pop, Folk, Experimental, Rock, International, Electronic, Instrumental. In total there were 8000 fragments of 30 seconds. To split the data into training and test sets I used their defined splits, because theymade sure the artist and album effect would not occur; however, I combined the training and validation sets, with a resulting distribution of 90%-10%. I also decided to work directly from the csv file with the extracted features. 

In total, I tested 3 ML algorithms with one variation:

-	Logistic Regression 
-	K-Nearest Neighbor (k = 120)
-	Support Vector Machine (SVM)
-	SVM with additional Linear Discriminant Analysis (LDA) dimensionality reduction.

I tested the performance of each of these algorithms on the following (combination of) features:

-	__Mel-Frequency Cepstral Coefficients (MFCC)__: of the spectral shape features, this seems to convey the most meaning with the least dimensionality; instead of the usual 15 or 20 coefficients, only the first 10 were chosen here;

-	__MFCC + Tempo__ (manually assigned tempo);

-	__MFCC + Spectral Centroid__ (indicator of “brighter” musical textures) + __Spectral Contrast__ (the difference between the peaks and valleys of the audio spectrum).

The models were evaluated based on their accuracy and the results of the analysis can be seen in the Table below. As you can notice, not great performances! In line with previous research, the SVM model perfrmed best. Interestingly, the simpler Logistic Regression Classifier performed as "good". 

<figure style="float: auto">
   <img src="/assets/image/2021_09_20_alena_ML_table.jpg" alt="" title="Test set accuracies of several feature sets fed to several classifiers for genre recognition" width=auto/> <figcaption>Test set accuracies</figcaption>
</figure>

How badly did it actually perform, though? Below is the confusion matrix of the performance of the SVM model trained on MFCC + spectral contrast + spectral centroid. Aside from Hip-Hop, Rock, and Electronic, the rest of the genres are mostly misclassified. For example, Folk songs have been classified as Pop, Folk, International and Instrumental almost equally. Same with Pop, it was classified mostly as Folk, Hip-Hop, and equally between Pop and Electronic. So you see, the existing genre txonomy is very subjective (what is "internationl" as a genre anyways?!). 

<figure style="float: auto">
   <img src="/assets/image/2021_05_04_alena_small_fma_cent_contrast.jpg" alt="" title="Confusion matrix of SVM fed with MFCC, spectral centroid and spectral contrast" width=auto/> <figcaption>Confusion matrix for SVM</figcaption>
</figure>

Why did it perform so badly? Well... there's several reasons that can be the case. Firstly, I used a small dataset. Secondly, the features I chose might not have been the best representations of the data; I could have also used the 30 seconds of audio. And thirdly, look below how the data is almost one big cluster! I used a 2D representation of the spectral contrast and centroid and it looks like each genre is just a layer on top of other layers in almost the same place! Possibly these two were not the best features to use for a visual representation, but it's giving a rought idea of the complexity of the problem. 

<figure style="float: auto">
   <img src="/assets/image/2021_09_20_alena_scatterplot_contrast_centroid.jpg" alt="" title="2D Scatter plot of the spectral contrast x spectral centroid color coded based on genre" width=auto/> <figcaption>Scatter plot of centroid vs contrast</figcaption>
</figure>

In conclusion, this project was a complex, but fun idea! I never thought how complex it is to classify genres, but I should have known given that I'm very bad at telling the genre of a song myself! There's so much subjectivity and it's all based on our own opinions afterall. If I were to continue with this project, I would test other features as well, and I would work with the large if not full dataset. A classification of subgenres might also be interesting to look into. If there are fewer outliners it might also be cool to look into which song specifically or genre got mislabelled often - as my classmate Stephen was saying, why is shoegaze so hard to classify? I am personally amazed at the fact that there is a genre called "international", huh (and it has a subgenre called Juju!)

If you would like to read the whole technical report or take a look at the code, email me at alenacl@uio.no!