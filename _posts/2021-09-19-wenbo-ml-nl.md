---
layout: post
title: "Classifying Classical Piano Music Based On Composer’s Native Language Using Machine Learning"
date: 2021-09-19 16:00:00 +0200
categories: machine-learning
author: Wenbo Yi
image: /assets/image/2021_09_19_wenbo_cover.jpg
keywords: machine-learning, classical music, classification
excerpt: "How does the language we speak help computers to classify classical music?"
---

## Introduction

Music classification is a category of music information retrieval (Kassler, 1966), involves categorizing musical works into various classes, such as genre, composer, mood, and it can be present in the music recommendation system for listeners (Tzanetakis & Cook, 2002), or research purposes such as its cognitive effects (Subramaniam, Verma, Chandrasekhar, NarendraK., & George, 2018).

Music classification usually involves extracting musical features from the audio files or scores to help the machine learning algorithm perform the categorization. However, in recent years linguists have discovered that the features of different musicians' native languages can influence the music they compose. For example, Patel and Daniele (2003) compared 16 composers' music work and found English and British music themes have a significantly higher nPVI (nPVI represents the durational contrast of continuous sequence) compared to French and French music themes.

Therefore, this project aims to build a Machine Learning model to classify classical music based on the composer's native language background, and also investigate whether linguistic features can contribute to the development of machine learning music classification algorithms.



## Dataset
[GiantMIDI-Piano dataset](https://github.com/bytedance/GiantMIDI-Piano) (Kong, Li, Chen, & Wang, 2020) was chosen based on the need to expand the number of composers and repertoire. GiantMIDI-Piano’s metadata is collected from the International Music Score Library Project (IMSLP) and audio files retrieved from Youtube, Piano solos recordings are transcribed to MIDI files using a high-resolution piano transcription system (Kong, Li, Song, Wan, & Wang, 2020).

After sorting through the original database, we have 5729 MIDI files composed by 877 composers from 12 countries speaking 6 languages for training.

<figure style="float: none">
   <img src="/assets/image/2021_09_19_wenbo_table1.png" alt="Data distribution" title="Data distribution" width="75%" />
   <figcaption><i>Data distribution</i></figcaption>
</figure>

## Features
For linguistic features, we extracted the *nPVI* and *CV* from the melody line.

<figure style="float: none">
   <img src="/assets/image/2021_09_19_wenbo_npvi.png" alt="Data distribution" title="Data distribution" width="75%" />
   <figcaption><i>nPVI</i></figcaption>
</figure>
<figure style="float: none">
   <img src="/assets/image/2021_09_19_wenbo_cv.png" alt="Data distribution" title="Data distribution" width="75%" />
   <figcaption><i>CV</i></figcaption>
</figure>

For Music features, we extracted 27 features through *music 21*(Cuthbert & Ariza, 2010) and *jSymbolic* (McKay & Fujinaga, 2006).

<figure style="float: none">
   <img src="/assets/image/2021_09_19_wenbo_features.png" alt="Data distribution" title="Music features" width="75%" />
   <figcaption><i>Music features</i></figcaption>
</figure>

## Result
we chose to use three supervised Machine Learning algorithms Support Vector Machine (SVM), K-Nearest Neighbors (KNN), and Gaussian Naive Bayes (GNB) as classifiers and Principal Component Analysis (PCA), Linear Discriminant Analysis (LDA) as dimensionality reduction techniques in Scikit-learn through Python for comparison. The numerical results of the experiments are below.

<figure style="float: none">
   <img src="/assets/image/2021_09_19_wenbo_result.png" alt="Data distribution" title="Classification accruacy" width="75%" />
   <figcaption><i>Classification accruacy</i></figcaption>
</figure>

Through the accuracy, contrary to our expectations, we found that KNN applied to linguistic features alone had the highest accuracy of any combination at 57.4%, while both SVM and Naive Bayes were much less accurate at just over 30% accuracy when using only linguistic features. From an overall perspective, the KNN algorithm has the highest accuracy, followed by SVM and the worst is Naive Bayes.

From the perspective of features combination, it appears that using only linguistic features was the least accurate under both SVM and Naive Bayes classifiers. However, using only linguistic features had the highest accuracy of all combinations under the KNN classifier, and the accuracy obviously improved when music features were combined with linguistic features compared to using music features alone.

Last but not least, in terms of the choice of dimensionality reduction techniques, we found dimensionality reduction techniques played a degrading role on both KNN and SVM in our case. Nevertheless, for the Naive Bayes, both PCA and LDA provide significant improvements to accuracy, and LDA, as a supervised dimensionality reduction technique, provides the largest improvement when we applied more complex features (Music + Linguistic).

In summary, the combination of applying linguistic features to the KNN classifier and not using dimensionality reduction techniques is the best combination for this comparison, such a combination also provided a good computational efficiency compared to other combinations.


## Reflection

Nevertheless, the accuracy obtained in this experiment leaves us room for improvement. We suppose that the accuracy deficiency could be attributed mainly to two aspects: the imbalance of the dataset and the accruacy of melody line extraction.

Firstly, the MIDI quantization and melody extraction used to extract the melodic lines lost a certain degree of rhythmic features from the original score, which had an impact on the calculation of nPVI.

Secondly, only the English and German classes have approximately the same amount of samples and the other categories are only a third of their quantity in our dataset. Moreover, it is worth mentioning that in a less rigorous trial, we removed the smaller classes and left only the three largest classes, obtained a distinct increase in overall accuracy.

Although we have used 27 musical features and 4 linguistic features, it is apparent that there are many more features also Machine Learning algorithms applicable to music classification that have not yet been addressed, which opens up the opportunity for working in the future.

## Reference

Kassler, M. (1966). Toward musical information retrieval. Perspectives of New Music, 59–67.

Tzanetakis, G., & Cook, P. (2002, July). Musical genre classification of audio signals. IEEE Transactions on Speech
and Audio Processing, 10(5),

Subramaniam, G., Verma, J., Chandrasekhar, N., NarendraK., C., & George, K. (2018). Generating playlists on the
basis of emotion. 2018 IEEE Symposium Series on Computational Intelligence (SSCI), 366-373.

Patel, A. D., & Daniele, J. R. (2003). An empirical comparison of rhythm in language and music. Cognition, 87(1),
B35-B45. Retrieved from https://www.sciencedirect.com/science/article/pii/ S0010027702001877 doi:
https://doi.org/10.1016/S0010-0277(02)00187

Kong, Q., Choi, K., & Wang, Y. (2020). Large-scale MIDI-based composer classification. ArXiv, abs/2010.14805.

Kong, Q., Li, B., Chen, J., & Wang, Y. (2020). GiantMIDI-piano: A large-scale MIDI dataset for classical piano music.
arXiv preprint arXiv:2010.07061.

Kong, Q., Li, B., Song, X., Wan, Y., & Wang, Y. (2020). High-resolution piano transcription with pedals by
regressing onsets and offsets times. arXiv preprint arXiv:2010.01815.

Cuthbert, M. S., & Ariza, C. (2010). music21: A toolkit for computer-aided musicology and symbolic music data.

McKay, C., & Fujinaga, I. (2006). jsymbolic: A feature extractor for MIDI files. In Icmc.
