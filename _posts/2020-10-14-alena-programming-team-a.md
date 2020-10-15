---
layout: post
title: "Scientific Computing Midterm"
date: 2020-10-14 16:16:16 +0200
categories: scientific computing
author: Alena Clim, Leigh Murray, Abhishek Choubey
image: /assets/image/2020_10_15_abhishec_pythonlogo.jpeg
keywords: python, jupyter notebook, audio files, numpy, pandas, matplotlib, librosa
excerpt: "Team A's reflection on the midterm scientific computing assignment. Shortly, this had a purpose of creation of a general python program that would read audio files from a specified folder based on a csv file and would output another csv file with an added values for each individual audio file: the average Root Mean Square, Zero Crossing Rate, Spectral Centroid. Moreover, the program displays and saves to a file several scatterplots."
---

# Assignment description

##### Input components

A folder with several audio files (.wav) and a CSV file containing the descriptions of each audio file (i.e. labels) - each file is a recording of one acoustic musical instrument of different length and formal (i.e. sampling rate and number of channels).

##### Tasks

Write a python program which creates (and saves) another CSV file with extra columns for each audio file:
    - the average Root Mean Square (rms)
    - the average Zero Crossing Rate (zcr)
    - the average Spectral Centroid (cent)
    - a positive integer number representing each label (e.g., 0 for all instruments X, etc.)

The program should also display (and save to a file) scatter plots with color code entries per instrument, labeled axis and a legend of:
    - Root Mean Square (rms) vs Zero Crossing Rate (zcr)
    - Zero Crossing Rate (zcr) vs Spectral Centroid (cent)
    - Root Mean Square (rms) vs Spectral Centroid (cent)

##### Submissions

    - Submit once immediately after class.
    - Submit one more time the whole code after a few days.
    - Submit the final version after reviewing the reference solution with documented additional changes (if any).


## Alena's reflection

I consider this assignment a good mix of the things we were taught so far. It also offered flexibility regarding the libraries to be used and the programming styles. This is particularly important since all members of our team come from different backgrounds and approached the tasks accordingly.

Leigh’s used with software de development so his code was closer to what I’d call low-level programming - he used lists and did not try to put the CSV file into a DataFrame (such as pandas). It was educational to see how the same things can be done without many external libraries. Choubey is pretty new to programming so his style was more unstructured and repetitive (such as when calling the plots), but it was good to see how he, having a “fresh perspective”, solved the tasks. I sometimes feel like the more one programs the bigger their bias regarding programming styles, libraries, functions and other preferences. Having had some experience before with these libraries, this assignment was an opportunity for me to learn how to use new functions of the aforementioned libraries such as pandas.unique and to learn to think of arrays as audio files.

After reviewing the referenced solution I realised it’s easier to use built-in matplotlib.style for styling the appearance of the plots instead of manually setting up colors, axis styles and markers’ shapes. I wrote my code with functions, so there wasn’t much else to change to make it more efficient.

## Leigh's reflection

Choubey’s programming has more of an unstructured programming style, with less functions overall which results in a bit of repetition of code, for example when multiple plots have to be drawn with different data. Alena’s programming style uses functions and appears to be from an analytical programming background, with more knowledge of the pandas library and plotting functions.  I come from a software development background so I prefer classes and functions, but have not used any analytical or statistical libraries, so my code tends to rely on built-in object types.

After reviewing the example solution and my teammates original submissions I learnt about the usefulness of pandas when working with structured data.  I changed my code to stop using python Lists and instead to use Pandas Data Frames.  Pandas Data Frames have built-in functions for working with tabulate data, which made it relatively easy for me to transfer my knowledge of working with SQL databases to working with Pandas.  I was able to simplify my code for retrieving unique values from a column, filtering or *selecting* specific data, and in turn resulted in a much cleaner process for plotting the individual instruments on the graphs. Originally, there was no way for matplotlib to know which dots related to which instrument, as I passed all the plot coordinates at once and provided another array of colours that associated them with their instrument. This taught me how to create a custom legend but is much less reusable than providing different sets of plot coordinates for each instrument, as I did when using Pandas, and letting matplotlib handle the display itself.

## Choubey's reflection

This was a fun assignment to work upon, perfectly summing up all the things we have learned midway through the course. There were three submissions in total, and my code improved a lot after every submission. After submitting a very abstract Jupyter with tons of things happening in it in the first submission, and putting all of my weekend in it, I felt a sense of fulfilment when the code finally worked. Since I don’t have an adequate programming background, I wanted to have a working program which satisfies all the conditions first not worrying about the efficacy much, and without taking help or inspiration from my teammates or other people's code, therefore I made a choice of not looking at the codes of my teammates until I was able to do so. Which didn't turn out to be a comforting decision, as I had to really work hard to convert my logic or the algorithm that I had in my mind into code. After having made the program to work and seeing how Leigh and Alena approached the assignment, I understood what the code I made needed in the next iteration (the third submission), the areas of improvement rightly noted by both of my teammates - a proper structure and the redundancy fact. I needed functions upon which I effectuated in the last submission. This assignment helped to realize where I am at, things I am good at and areas I need to work upon, also completing it have made me confident and optimistic towards the enchanting world of Scientific Computing.

Talking about the programming style of my teammates, both Leigh & Alena have a similar one in my opinion, whereas Leigh’s approach maintains a low level programming, Alena’s style is more open. I believe I have a lot to learn and my teammates' high level knowledge will help me a lot to become a sound programmer (pun intended).



## Other thoughts

Overall, the content of this course has been well structured to bring newcomers up to speed while still offering challenges and new technologies for experienced software developers.
