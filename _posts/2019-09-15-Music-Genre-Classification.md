---
layout: post
title: "Music Genre Classification with Machine Learning"
date: 2019-09-15 21:16:42 +0200
categories: Projects
author: Ashane Silva
image: /assets/img/genre_orig.jpg
excerpt: "Classification is a classic problem in machine learning. This is one of the focused areas in digital music platforms today. Companies like spotify, iTunes and other digital distributors try to sort music according to genre, mood, number of listeners, location etc. There is an algorithm behind the scene that doing all the job. Well, this project is about trying to understand the basics of music genre classification and test some of the algorithms and evaluate their performance. My plan was to train a machine learning model to classify songs in classical, heavy metal and hip-hop genres. The most important thing in machine learning is data. The data set consisted of 100 songs for each genre and all are 30 sec long. Check the complete GATZAN data set."
---

# Project idea

Classification is a classic problem in machine learning. This is one of the focused areas in digital music platforms today. Companies like spotify, iTunes and other digital distributors try to sort music according to genre, mood, number of listeners, location etc. There is an algorithm behind the scene that doing all the job. Well, this project is about trying to understand the basics of music genre classification and test some of the algorithms and evaluate their performance. 
My plan was to train a machine learning model to classify songs in classical, heavy metal and hip-hop genres. The most important thing in machine learning is data. The data set consisted of 100 songs for each genre and all are 30 sec long. Check the complete GATZAN data set. 
I worked in the python environment with Jupyter Notebook. The packages used are Numpy, Librosa, matplotlib, scipy, Scikit-learn and pandas. The feature extraction was done with Librosa and extracted the following features: Zero Crossing Rate, Spectral Centroid, Spectral Contrast, RMS, Spectral bandwidth, Spectral roll off and Chroma Short Term Fourier Transform. 
The extracted features were then saved as a CSV file for training and testing the algorithms. So my experiment had three stages. Each machine learning algorithm was trained and tested using three variations of data:
1. Using projections from the Principle component analysis 
2. Using projections from the linear discrimination analysis 
3. Using all features as data. 

## Supervised Machine Learning approach 
To solve the problem, the used approach is a supervised learning method. So I tested following algorithms to see how much accuracy they can achieve. 

### Gaussian Naive Bayes model (GNB): 
is based on the Naive Bayes algorithm which related with the Bayes theorem. Gaussian Naive Bayes algorithm assumes a Gaussian distribution and uses the estimated mean and standard deviation from training data. 

### K-Nearest Neighbor (KNN): 
is a supervised machine learning algorithm which classifies data points based on how its neighboring data points are classified. It stores all available instances in training data and sorts based on a similarity measure. A new data point is classified based on the maximum number of neighboring data points with a given class for a given K value.   

### Support Vector Machines (SVM): 
Support Vector machine algorithm defines the optimum decision boundary with the widest gap between classes. To obtain the maximum gap it uses support vectors which can be defined as the data points that are closest to the opposing class. In non-linear support vector machines, the data are transformed into a high dimensional space to define the hyper-plane between two classes. 

### Multi-Layer Perceptron Classifier (MLP):
is a feed forward artificial neural network. An MLP consists of at least three layers of nodes: an input layer, a hidden layer and an output layer. Each neuron consists of a nonlinear activation function. This differs from the perceptron due to the non-linear activation function and multiple-layers.

## Results
All the models performed really well and achieved an accuracy level above 80%. But KNN yielded an accuracy of 90% after tweaking its K value. Since it has only one parameter it is fairly easy to test with iterating the algorithm. 




 
