---
layout: post
title: "Reflections on Scientific Computing (The B Team Bares All)"
date: 2020-10-15 16:00:00 +0200
categories: scientific-computing
author: Pedro Lucas, Willie Mandeville, Henrik Sveen, Anders Lidal
image: /assets/image/2020_08_21_anderlid_B_Team_2020.jpg
keywords: python, jupyter notebook, audio-files, numpy, pandas, matplotlib, librosa
excerpt: "Team B reflects on a week of coding ups and downs."
---


# A Midterm Reflection

The B team is a professionally diverse group of individuals. Even by the standards of the MCT program, we have unusually eclectic skill sets. Often this variety is a strength, but for this assignment that may not have really been the case. Read on for four **very** different perspectives on a brief adventure in problem solving.

A bit of background. The task: creating a new csv file containing data from an original csv file and defining specific attributes of 60 individual wav files. Some of the knowledge needed for the task is easy if you have programming experience. It's a matter of knowing what functions to use, and what functionality already exists.

The task wasn't too clear on that we shouldn't be aware what's in the csv-file. We couldn't see the file, so we went for retrieving the header data rather than printing it to tell us what the headers are, requiring a level of human interpretation.

#### Henrik's reflection
At first I thought the assignment was pretty overwhelming and I didn't think I was ever going to be able to finish it. But after some lines of code I began to understand how this program should work, and then it was quite easy and fun from there. I got a little tangled up in the thought of modifying the existing csv-file rather than reading the old one and making a new one, which was a way easier approach. We had a quick chat after Friday's class and Pedro showed how we write csv-files. Had a lot of fun thinking about solutions for this program and then testing them. Especially for plotting the data. Overall my thoughts are that this was a good task and that it's a nice way to learn how to apply the concepts from class. I find working with tasks like this is motivating.

### Pedro's reflection
As an experienced programmer, I found this assignment reasonable within the development process of the solution and the suggested time to complete it. However, I realized that it was something complex for some classmates, not only for team B members. It made think about why it could be, and in my opinion, people that have little practice, or is just starting, do not have some patterns that are common when producing algorithms and they would take more time to solve them. For instance, for this assignment I used a dictionary, which was my immediate way to solve the problem because I have used it in similar situations many times, in fact, in programming classes you learn about HashMaps and Dictionaries (depending on the programming language that is used), and a typical problem to show how it could be useful is when you have to list and count the number of words in a text. At the end it could be a matter of practicing by solving algorithmic exercises.

Regarding Stefano's solution, it has what I was looking for, which was a way to search in the data collection without the manual intervention as in my solution, I mean, I kind of 'query' for grouping (like SQL or LinQ in C#). I am not fluent in python but I am always surprised about how things can be very compact compared to other static languages like the one I use the most, which is C#. I think Python is very useful as a data processing tool, however, I doubt if it can manage efficient solutions for critical real-time problems, like static language such us C and C++ do, but I am aware that it depends also on the programmer's expertise in those languages to actually take advantage of their benefits.

#### Willie's reflection (aka in which I gently imploded)
As a complete newcomer to python and almost complete newcomer to the greater world of coding, this assignment felt a bit like my Everest. Before this, I’d successfully completed small tasks, but this was of a different scale. It did not go well.

My initial attempts to create useful code made it as far as seeing the csv file data before the train began to derail. Accessing the wav files was a significant roadblock for me, as was then calculating values via the data contained within them. Unfortunately, even though I had a vague sense of how to create the scatterplots that the assignment called for, that knowledge was useless without the data to fill the plots. Having spent far more time than was wise trying to complete this task, I turned to my fellow B-teamers for assistance and was very interested to see how different each person’s code was. I see that there are many ‘right’ ways to complete tasks like this. However, I can personally attest after much experience that there are also many, many wrong ways.

Looking to the future! I have a lot to learn. The more masterful coders of Team B have identified some resources for me to utilize as I try to catch up. I hope to someday be coding in style and laugh at tasks like this, but, until that day comes, I will remain the most easily confused coder in the room.

#### Then Anders enters …
… giving Willie a real competition on being the most confused coder in the room.
Given the task, and starting to code the last hour of the class, wasn't the best way to start the weekend, I'll admit. What I achieved in 45 minutes, was mostly a pseudo-code, just to wrap my head around what should be done. But the next 6-7 hours was mostly googling my error-messages and reading things i didn't understand on interwebz like geeksforgeeks, stackoverflow and a ton of other places. I also went through everything we had done in previous sessions, without getting far.
I also understood the task as not looking into the csv-file, to write a program that would do what it should do, without me knowing anything about the contents of the original file. So when I quite quickly manage to read and display the csv-file, I felt like cheating.
Looking at others solutions feels rewarding, especially when I understand what's going on … I even feel like it might be something I can do in the future, but I still need a lot of practice. In good coding-practice I'll steal a wise man's words to end with:

  <i>"Looking to the future! I have a lot to learn. The more masterful coders of Team B have identified some resources for me to utilize as I try to catch up. I hope to someday be coding in style and laugh at tasks like this, but, until that day comes, I will remain the most easily confused coder in the room."</i>
  (W. Mandeville, 2020)
  <figure style="float: auto">
     <img src="/assets/image/2020_10_15_anderlid_coding.png" alt="Alternate Text" title="Oh no!" width="auto"/>
  </figure>
