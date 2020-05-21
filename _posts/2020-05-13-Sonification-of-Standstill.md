---
layout: post
title: 'Sonification of Standstill Recordings '
date: 2020-05-13 15:00:00 +0200
categories: Masters
author: Ashane Silva
image: 
excerpt: ''
Keywords: Masterthesis, Max, Sonification, Standstill
---

## Introduction

Music and body motion are strongly interconnected.As a drummer, I always feel strongly connected to the music with my motion in a performance and I am fascinated by how a genre or the type of music influences the body movements. During the studies in Music, Communication and Technology study program, I had the opportunity to actively participate in the Norwegian Championship for Standstill competition in 2019 and grasp the methods of the whole process starting from setting up the Motion Capture system to choosing the final winner of the competition. The MoCap system outputs a rich continuous data stream with a larger number of data points and my motivation behind the thesis was to combine this data stream with sound to hear the participants’ movements. Moreover, this implementation can be used as an instrument for a “Standstill performance” and opens a new door for a sonic interaction space with human micromotion.


## Research Questions

The thesis is based on One main research question and two other sub-questions. From the main research question I wanted to broadly addresses on exploring the connection between the music and involuntary motions of the body.

• How can sonification be used as a method to explore music-related micro-motion?

During the Norwegian Championship of Standstill competition, the participants are in a forced condition to not move. And based on past studies, there is statistical evidence that music stimuli have an impact on standing still. Apart from using a visualization method to analyze the micromotion, sonification can be used to listen to the data and find out any audible patterns. The main objective of this question is to find out what kind of difference can be noticed in the motion during the music stimuli is played and whether the sonification can reveal any information that was not visible in statistical studies. 

1. What kind of motion patterns are audible from the standstill competition data?
2.How can spatial audio be used in the sonification of human standstill?


## Building the application for sonification

The sonification is applied for data from the 2012 standstill competition data. Initial idea was to build a prototype using the 2012 standstill data and use it for the exploring rest of the database including yearly data for the competition. According to Jensenius et al. (2017), around 100 participants were joined the study, and the final data set consists of 91 participants. The sessions were held in groups for about 5-17 participants at a time.
For making the sonification, I decided to use the Max/MSP environment. Due to the steeper learning curve, lack of coding experience, and limited time frame, using a programming language such as “supercollider” or “Python” felt like an unrealistic goal for this thesis. Max/MSP provides a great GUI based programming environment that has a much faster learning curve and also a large community of users which is helpful.

### Data Set

From the recorded data, two data sets were available to use for the sonification. The first data set consists of all the x, y, z position data for each participant, which is 273 columns and 35601 rows of data.

pic 1 : 

The second data set is based on the demographic data of each participant and consists of quantitative and qualitative data. I like to mention the data variables that consist of the participant demographic data set. Which are the group each participant belongs( A, B, C, D, E, F, G, H, P), Participant number, Age, Sex, Height, Music listening hours per week, Music performing/production hours per week, Dance hours per week, Exercise hours per week. And some measurements were based on a Likert-Scale: Tiresome experience of the session (1 to 5), Experienced any motion (1 to 5), Experienced any motion during the music segment (1 to 5). Two other variables indicate if the participant had their eyes open/close or had locked knees/or not during the experiment.

### Sonification Strategies

I used parameter mapping sonification with three different approches. which are, 

1. Sonification of individual participant data.
2. Sonification of group average position data.
3. Using spatial sound with individual position data.


In each option, the first half of the data (3 min) represents the participants standing with silence and the second half (3 min) with the music stimuli. In that way, one of the aims was to experiment if the sonification can reveal information on how the music stimuli affect the motion during standing still. Another aspect was to explore how keeping the eyes open/closed or having locked knees can affect the motion. According to Jensenius et al. (2017), there was no statistical evidence that these factors affected the micro-motions. Minimum and maximum position values of each Axis x, y, z was calculated for each participant in Excel and these values were used for scaling the parameter values during the mapping process.In the standstill experiment, data were recorded at a rate of 100hz and each session lasts for 6 minutes. Listening to the sonification faster than real-time can provide better insights on the patterns that occur in the data set and the first step was to implement a strategy to read the data from the CSV file and have the option to change the data reading speed.

### Displacement of Position


