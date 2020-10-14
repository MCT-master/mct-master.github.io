---
layout: post
title: "Scientific Computing Midterm"
date: 2020-10-14 16:16:16 +0200
categories: scientific computing
author: Alena Clim, Leigh Murray, Abhishek Choubey
image: \assets\image\2020_09_28_abhishec_pedal_logo_square.jpg
keywords: python, jupyter notebook, audio files, numpy, pandas, matplotlib, librosa
excerpt: "Team A's reflection on the midterm scientific computing assigment. Shortly, this had as purpose the creation of a general python program that would read audio files from a specified folder based on a csv file and would output another csv file with an added values for each individual audio file: the average Root Mean Square, Zero Crossing Rate, Spectral Centroid. Moreover, the program displays and saves to a file several scatterplots."
---

# remove before submission
As a team, reflect on the learning experience in Python so far. In particular focus on this assignment and how it improved over the different submission stages, check differences across team members on approaches to the programming task and coding style. Write a blog post (category scientific computing (Links to an external site.)) about these reflections before the beginning of Session 7.

# Assignment description

.... edit this

The folder Files/database/ which includes several audio files (.wav) and a CSV file (meta.csv) which describes the contents (i.e. label or class) of each audio file. In particular, each audio file includes the recording of one acoustic musical instrument. The audio files have different lenght and format (i.e. sampling rate and number of channels).

The goal of this task is to write a python program which creates another CSV file (extendedmetadata.csv) which also includes (i.e. add more columns): the average Root Mean Square (rms) of each file, Zero Crossing Rate (zcr) of each file, the average Spectral Centroid (cent) of each file, a positive integer number representing each label (e.g. 0 for all instruments X, 1 for all instrument Y, 2 for all instrument Z, etc.).

Moreover the program should also display (and save to a file) a scatter plot of:

1) rms vs zcr 2) zcr vs cent 3) rms vs cent In the scatter plot, you should color code the entries belonging to the different instruments. Axis should be laveled and a legend should br provided to decode the colors.

In the folder Files/database/ you find output.zip which includes examples of the four files that your program should generate. The output that your program generate may be different in terms of row/columns ordering in the csv file or name of the columns, colors, size and text of the figures, etc.

Your program must not ude any prior knowledge on the contents of the meta.csv (i.e. how many entries, which are the various labels, how many different labels are there). Everything must be computed by analyzing the data in the file. In other word, your program should also work if the contents of the database folder changes (e.g. more files, and more type of instrument), which is a test we will carry out next week.

When loading the audio files, marge them to mono (if stereo) and use a resample them to 44100 Hz. This can be easily achieved using librosa which you should also use to compute the required audio features.

Your implementation should be presented in a Jupiter Notebook. You are free to particion your code in how many cells as you want.

You should submit this assignment here three times:

1) right at the end of the session of Friday 9 October (likely to be incomplete) 2) by Tuesday 13 October 1pm Oslo time 3) by Thursday 15 6pm Oslo time (see details here for the follow up task

## Alena's reflection

......

## Leigh's reflection

.....

## Choubey's reflection

....
