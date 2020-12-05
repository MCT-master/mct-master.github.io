---
layout: post
title: "Segmentation and Sequencing from and to Multichannel Audio Files"
date: 2020-12-04 5:30:00 +0100
categories: scientific-computing
author: Pedro Lucas
image: /assets/image/2020_12_03_pedropl_multichannel_segmentation_sequencing.png
excerpt: "The strategy explained here considers the slicing of stereo audio files and the production of a new stereo output file based on a multichannel solution. The spectral centroid is used to reorder and intercalate segments in an ascending or descending order according to some rules."
keywords: segmentation, sequencing, spectral centroid, stereo, multichannel
---

# Overview

The segmentation and sequencing solution proposed here takes multiple audio files of any number of channels, then it extracts segments per each channel based on the detection of onset points. The mean of the spectral centroid is calculated for each segment, which is used as a parameter to sort the slices in an ascending or descending order. Those segments are organized in a data structure that is used later for a sequencing process that merges the segments in an intercalated way to compose a new multichannel output file.

An implementation of this strategy was developed in Python. Two audio stereo files were used for testing purposes, corresponding to the following songs:

<figure style="float: none">
    <iframe width="auto" height="240" src="https://www.youtube.com/embed/jda_k6r9R1A" frameborder="0" allowfullscreen></iframe>
    <figcaption>L'Impératrice - AGITATIONS TROPICALES</figcaption>
</figure>

<figure style="float: none">
    <iframe width="auto" height="240" src="https://www.youtube.com/embed/djV11Xbc914" frameborder="0" allowfullscreen></iframe>
    <figcaption>a-ha - Take On Me</figcaption>
</figure>

The resulting output is the next one:

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1PcpwgwJTgq_iXrxur0N3NbAFAfGS_Qg0" type="audio/mpeg">
    Output Audio File
  </audio>
  <figcaption>Output Audio File</figcaption>
</figure>

# The Strategy

## Segmentation and Analysis

The whole algorithm is developed to take into account multiple channels, that is, the input could be mono, stereo, or have more than two channels. Moreover, the output could be a multichannel audio file built from the input channels. It is possible to have different number of channels for the output regarding the input files.

The algorithm takes every channel and manages it as a single signal. Firstly, segments and relevant data are extracted per each channel by following the next procedure:

1. Obtain onset points.
2. The user could decide to reduce the number of onsets, which means a kind of merging of contiguous segments. They could be merged in groups of N segments. This step is indented to reduce the number of segments if needed (which reduces execution time).
3. The collection of onsets is iterated to define the segments by the start and end points. It considers that onsets could not be exactly in index 0 or the last point of the signal. Segments are accumulated in a collection.

**Analyzing:**

4. While onsets are iterated and segments are defined, each segment is analyzed by getting its spectral centroid mean.
5. The centroids are sorted from lowest to highest, nevertheless, it could be configured to sort from highest to lowest depending of the rules explained later in the sequencing part. The output of the sorting is an array that contains the indexes ordered according to the selected criteria, which is useful for accessing in that order to the whole data structure in which the segment is associated.
6. Useful output parameters are obtained for the later sequencing process(segments, start points from onsets, spectral centroids, sorted indexes)

## Structuring the whole segmentation

A data structure collection is shaped in this step. This collection contains the relevant data for each channel from each audio file. For each channel, it obtains the output data given by the process explained above, that is, segments and relevant data. The sorting is inverted (from highest to lowest) when the target input signal is in an odd position (starting from zero) considering the order in which it is processed, that is, the first file (zero) will not be inverted in the sorting of its segments, and the second file (one) will be, and so on.

Also, this process collects the *maximum number of segments that could be found in a channel*, which is used in the sequencing strategy.

At the end, a complete data structure will contain all the segments and their data organized properly in order to be sequenced later.


## Sequencing Algorithm

The number of channels for the complete output signal is defined initially, in the example was established a stereo (2 channels) signal. A new output signal is constructed for each channel. This strategy takes all the segments from the same channel that corresponds to the input signals, that is, assuming that channels are numbered from zero, if the output channel is 0, then all the segments to be merged will be from channel 0 of the input signals, in case that the number of channels mismatch, the strategy will take channels in a circular way, for instance, if the output channel is 3 and there are only 2 channels in the input, channel 3 will take segments from channel 0.

The segments are taken from the complete data structure. As the exact number of segments in this particular iteration process is not known initially, the *maximum number Of segments in a channel* calculated previously is used, then each signal is iterated and the segments and their data is retrieved by using the number of the channel that is being filled. Segments are accessed via the sorted collection of indexes based in the spectral centroid, which ensures a merging order considering the criteria explained previously. Note that indexes must be validated to be within the range of the number of segments since the general segment index per each iteration is limited by *maximum number Of segments in a channel* and not all channels has that number of segments, they could have fewer of them.

This merging process intercalates between signals for each channel, for example, segment 0 from file 0 is merge with segment 0 from file 1, then segment 1 from file 0 and segment 1 from file 1, and so on. Also, the order of the segments is inverted for odd channels, which gives a very noticeable effect in the channels when they are heard simultaneously.

The effect of this strategy is reflected in the image below. It represents the output generated that used the input songs mentioned previously. Here, each slice is differentiated within the waveform according to the corresponding input, also it is noticeable how the spectral centroid is increasing or decreasing per each channel. Considering that this is a vector-based image,  you can open a new tab and zoom in [here](https://drive.google.com/uc?&id=1q5ON-U7aDWOuGbUkHJuNt2Fu1j9NPdI2){:target="_blank" rel="noopener"}


<figure style="float: auto">
   <img src="https://drive.google.com/uc?&id=1q5ON-U7aDWOuGbUkHJuNt2Fu1j9NPdI2" alt="Output Visualization" title="Output Visualization" width="auto"/> <figcaption>Output Visualization</figcaption>
</figure>


# Reflection

This strategy is an interesting process to perform a kind of concatenative synthesis over multichannel files and for generating a multichannel output. The feature used (Spectral Centroid) can be combined with other features, or the sequencing solution could be modified in favor of a better aesthetical result.

The output is highly variated in both ears when it is heard, I do not consider that is aesthetically appealing, but that is a subjective judgment. However, it is noticeable that the effect of slicing by using onsets is present per each segment in the resulting output, and the influence of the sorting regarding the spectral centroid could be appreciated when there are some smooth segments when values are lower, or a high concentration of segments and more rich sounds when values are higher, at the end, this feature is related perceptually with the 'timbre', that is, the 'brightness', and one can argue that variations of this parameter are changing in a more or less way across the output.
