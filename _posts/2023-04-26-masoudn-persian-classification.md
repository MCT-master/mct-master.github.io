---
layout: post
title: "Persian classical instruments recognition and classification"
date: 2023-04-26 13:00:00 +0200
categories: machine-learning
author: Masoud Niknafs
image: https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_04_26_masoudn_cover.jpg
keywords: Machine Learning, MIR
excerpt: "This blog post will go over various feature extraction techniques used to identify Persian classical music instruments."
---

<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_04_26_masoudn_cover.jpg" width="100%" />
   <figcaption></figcaption>
</figure>

# Introduction


This blog post will go over various feature extraction techniques used to identify Persian classical music instruments. The similarity in timbre and tonality between various instruments makes this task difficult. We will investigate the efficacy of a number of features, including Chroma, Spectral Centroid, Spectral Flatness, and Zero Crossing Rate in order to address this challenge. After that, we will classify the instruments based on these features and evaluate their performance using a Support Vector Machine (SVM) model.


# Process

Data preparation: lets begin by making a list of the instruments used in Persian classical music and listening to the corresponding audio files for each one. We take into account Santur, Setar, Ud, Ney, Tar, and Kamancheh as our instruments.

Features listed below:

MFCC: Represents the audio signal's power spectrum and is frequently used in tasks involving music and speech recognition.
Chroma: Chroma is a useful concept for analyzing tonality and harmony in music as it depicts the distribution of energy across various pitch classes.
The spectral centroid, which represents the power spectrum's center of mass, can shed light on the timbre of an audio signal.
Measures the power spectrum's flatness and can offer information about the timbre of the audio signal.
Zero Crossing Rate: This metric illustrates the speed at which the audio signal crosses the zero amplitude and can shed light on the audio signal's texture.
Data organization: For later use, we create dictionaries out of the extracted features and store them in pickled files.

Evaluation of extracted features: Using a k-fold cross-validated SVM model, we combine the extracted features for all instruments and assess each one's performance. Then, we evaluate each feature's accuracy and contrast how well it performs.

# Findings

Here are the findings of the experiment:
- The accuracy of the SVM model using MFCC features is: 88.88%
- The accuracy of the SVM model using Chroma features is: 62.12%
- The accuracy of the SVM model using Spectral Centroid features is: 41.91%
- The accuracy of the SVM model using Spectral Flatness features is: 24.40%
- The accuracy of the SVM model using Zero Crossing Rate features is: 42.45%
- The accuracy of the SVM model using MFCC concatonated features is: 89.8%



<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_04_26_masoudn_findings1.png" width="100%" />
   <figcaption>Findings</figcaption>
</figure>




The SVM model's accuracy when employing MFCC features is 88.88%.
Using Chroma features, the SVM model achieves a 62.12% accuracy rate.
With Spectral Centroid features, the SVM model achieves a 41.91% accuracy rate.
When Spectral Flatness features are used in an SVM model, the resulting accuracy is 24.40 percent.
Using features based on the zero crossing rate, the SVM model achieves a 42.45% accuracy rate.
Conclusion

The data  collected shows that the MFCC features do well at identifying the instruments used in Persian classical music, with an accuracy of 88.88%. This makes sense, as MFCC features have previously been shown to capture crucial aspects of the audio signal for applications like speech and music recognition.

With an accuracy of 62.12%, the Chroma features are a close second. Chroma features still provide a respectable level of accuracy for identifying instruments in Persian classical music, despite being less effective than MFCC features in this particular application.

Lower precision is achieved by employing the Spectral Centroid, Spectral Flatness, and Zero Crossing Rate features. These features are not as discriminative as the MFCC and Chroma features for the task of instrument recognition in Persian classical music, or in general instrument recognition, but they can provide some insight into the timbre and texture of the audio signal.

As the MFCC and Chroma feature represent the first two accurate feature vectore we concatonated them to increase the accuracy and as the results show it increased it by roughly 1 percent.


# Acknowledgements:
Dataset:
Mousavi, Seyed Muhammad Hossein, and VB Surya Prasath. "Persian Classical Music Instrument Recognition (PCMIR) Using a Novel Persian Music Database." 2019 9th International Conference on Computer and Knowledge Engineering (ICCKE). IEEE, 2019.






