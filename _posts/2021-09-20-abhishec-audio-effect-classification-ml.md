---
layout: post
title: "Can Machine learning classify audio effects, a dry to wet sound ?"
date: 2021-09-20 21:00:00 +0200
categories: machine-learning
author: Abhishek Choubey
image: /assets/image/2021_09_20_abhishec_excerpt_ml.PNG
keywords: audio, audio effects, classification, supervised, machine-learning, MLP, KNN, SVC
excerpt: "Distortion or No Distortion - Machine learning magic"
---
After the intense weeks of machine learning, what did I learn? Machine learning is hard and it’s a journey. But it is not as mysterious as it used to be anymore! Will Artificial Intelligence and Machine learning take over the world? Not anytime soon and not forever, well that’s debatable. But the world of machine learning is a fascinating one, is it capable of solving all the problems of the world? Definitely not, but for the right challenges applied in the right way, it leads to the astonishing result, and that’s why it is so famous. After days of fiddling around on the internet trying to find inspiration for a project that I wanted to do, I decided to look into if machine learning can distinguish audio effect(s) applied on the audio, essentially classification of a dry audio signal to a wet audio signal.

## How did I start?
First I decided on what machine learning technique will I use, supervised or unsupervised? And which techniques among these two categories? After a bit of research, I decided to go with supervised machine learning techniques and apply a couple of them to see which one performs the best. I ended up using Support Vector Machine (SVM), Multilayer Perceptron (MLP), and K-Nearest Neighbour (KNN) for the problem. The next task was to find an appropriate database for training and testing the model I wanted to create. I ended up using the IDMT-SMT-Audio-Effects database, as it had a variety of audio effects and multiple settings on each of them, applied to different types of guitars. It was perfect for me because then I could train my model to not just classify between a dry and wet sound but also classify basically into different positions of dry/wet knob, or different amount/type of same audio effect.

## Approach
I took two approaches while dealing with this problem, the first was to just randomly split the data into training and training parts and use them to train and test the models. The other was to optimize all the processes before we actually train the model, so optimal split of data, Dimensionality Reduction, scaling and so on. The motivation behind this approach was to check how badly the system will perform without the optimization and how much the performance will enhance after applying these optimizing techniques.

## Dataset
The data set as mentioned above I used was the IDMT-SMT-Audio-Effects, it is a dataset consisting of 55044 audio files recorded a 44.1 kHz, 16 bit, and in mono. This is divided into monophonic guitar and bass notes, and polyphonic guitar sounds, with an overall of 11 different types of audio effects applied to these recordings, you can get the dataset with detailed information here []. I ended up using a small chunk of the data. I used the monophonic guitar notes with distortion applied to them and the corresponding no-effect audio files. There are three different distortion settings in the audio effects, so it gave me enough bracket of audio files to play with.

## System Architecture
As discussed above, the system here uses supervised machine learning techniques to classify between audio samples with three variations of distortion audio effect and audio samples without any audio effect, essentially trying to classify between dry and wet audio samples. First, I extracted the features using the python library Librosa, plotted them for visual representation using matplotlib as shown in figure 1 and figure 2, and understanding their distribution.


<figure style="float: auto">
   <img src="/assets/image/2021_09_20_abhishec_scatter2D_ml.png" alt="" title="Features Scatter Plot in 2D" width=auto/> <figcaption>Figure 1: Features Scatter Plot in 2D</figcaption>
</figure>

<figure style="float: auto">
   <img src="/assets/image/2021_09_20_abhishec_scatter3D_ml.png" alt="" title="Features Scatter Plot in 2D" width=auto/> <figcaption>Figure 1: Features Scatter Plot in 3D</figcaption>
</figure>

After that I divided the dataset into a 70/30 split using Scikit learns [train_test_split] method [Scikit learn](https://scikit-learn.org/stable/index.html) is also the library that I have extensively used in this project for employing all the machine learning techniques. Subsequently, I used SVM, MLP, and KNN and got the results. A brief introduction to these machine learning models is given below:

[Support Vector Machine (SVM)](https://scikit-learn.org/stable/modules/classes.html?highlight=svm#module-sklearn.svm) – SVM has shown excellent results in binary and multi-class classification tasks, this technique tries to divide the dataset using a hyperplane separating negative and positive points with maximum distance.

[Multilayer perceptron (MLP)](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPClassifier.html?highlight=mlp#sklearn.neural_network.MLPClassifier) neural network classifier – a multi-layered neural network technique MLP has been used in various tasks ranging from image to audio classification. When there are high complexities in the features of the dataset, MLP is found to be successful in classification problems.

[K-Nearest Neighbor (KNN)](https://scikit-learn.org/stable/modules/generated/sklearn.impute.KNNImputer.html?highlight=knn#sklearn.impute.KNNImputer) – Being applied in various musical and audio analysis applications, the basic idea behind KNN is to allow a small number of neighbors to influence the decision of the organization of the dataset. It assumes that similar things exist in close proximity.

After modeling the system using these techniques, parameter tuning, scaling, and Dimensionality reduction techniques are employed to increase the efficiency. To increase the performance of the system firstly a different cross-validation approach using [Repeated Stratified KFold (RKF)](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RepeatedKFold.html) to split the data for training and testing is applied. In Repeated Stratified KFold, the dataset is divided into ‘K’ number of folds and the cross-validation procedure is repeated multiple times, and the mean of all the runs across all the folds are taken. After Splitting the data using RKF, it is scaled using the [standard scaler](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html) from the scikit learn library, we need scaling so that the machine learning model interprets the data on the same scale.
After the scaling Dimensionality Reduction (DR) technique is used for reducing the feature dimension, also to find the best optimum features we can use to classify the data. In the proposed system, [Principal Component Analysis (PCA)](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html) technique is used. PCA is a highly used DR technique that essentially transforms a large set of variables into a smaller one by trying to maximize the sum of the squared distance from the origin to the projected points.
After tuning the dataset and features the three machine learning techniques stated above are implanted again to examine the increase in performance.

## Results
After tuning the dataset and features I noticed a significant amount of improvement in all three techniques, with Multilayer perceptron performing the best among all giving an accuracy of 97.6% jumping from 83% before optimization, Support Vector machine produced an accuracy of 96.6% while it was % before, and K-Nearest Neighbor being the last still saw a significant improvement from 66% to 95%.


## Conclusions
In this project I tried classification of audio samples with audio effect – Distortion applied at three different settings to the audio signals without any effect. Three different supervised machine learning techniques have been applied in order to determine the best-performing technique. Considering that the task was the classification of similar types of audio effects particularly distortion to a dry signal the acquired accuracy of the system, ranging from ~82% to jumping to 96% with optimization can be taken as a decent sub-par result to the problem. Although the accuracy can be improved it was noticed that most of the wrongly classified samples came from the no-effect category and were misplaced due to the affinity of the sound to the ones for which the effect was applied. Finally, in order to make the system more robust, Hyperparameter tuning, noise addition, and other such techniques can be taken into consideration for future prospects.  	
