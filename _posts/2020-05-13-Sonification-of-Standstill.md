---
layout: post
title: 'Sonification of Standstill Recordings '
date: 2020-05-13 15:00:00 +0200
categories: Masters
author: Ashane Silva
image: 
excerpt: 'The goal of this thesis was to develop and experiment with a set of sonification tools to explore participant data from standstill competitions. Using data from the 2012 Norwegian Championship of Standstill, three sonification models were developed using the Max/MSP programming environment. The first section of the thesis introduces sonification as a method for data exploration and discusses different sonification strategies. Momentary Displacement of the position was derived from the position data and parameter mapping methods were used to map the data features with sound parameters. The displacement of position in the XY plane or the position changes along the Z-Axis can be mapped either to white-noise or to a sine tone. The data variables control the amplitude and a filter cut-off frequency of the white noise or the amplitude and frequency of the sine tone. Moreover, using sound spatialization together with sonification was explored by mapping position coordinates to spatial parameters of a sine tone. A “falling” effect of the standing posture was identified through the sonification. Also audible were the participants’ breathing patterns and postural adjustments. All in all, the implemented sonification methods can be effectively used to get an overview of the standstill dataset.'
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

Instead of directly mapping the x, y, position data, a new variable is defined which is the displacement of the position. However, I’m not dividing the displacement of the position by the time factor to calculate the rate of change of the QoM since the rate of the displacement also depends on the chosen sample rate in the patch.

Figure 3.3 shows a part of the patch which calculates the change of the position (displacement). First, the displacement of position is calculated for each axis of data. In each moment, the previous position value is subtracted from the current position value and the absolute value is calculated. By using this value, the displacement can be derived for each plane (XY, YZ, XZ) by pairing the sums of individual position displacements for each x, y and z Axes. According to the results of the study by Jensenius et al. (2017), most motion is happening in the XY plane, and in the sonification, primarily the displacement of the XY plane is considered.

Figure 3.3


# 1 . Sonification of Individual Participant Data

As presented in Figure 3.4, displacement position values in the XY plane or position values of the Z-Axis can be selected for the sonification. For mapping in the noise section, the total displacement of position in the XY plane or the position values from the Z-Axis can be mapped to the amplitude of the noise and to the cut-off frequency.

# 2. Sonification of Group Average Position Data

Figure 3.4 is an extract from the max patch that calculates average displacement values for each x, y, z Axes for two participant groups. However, this patch is only compatible with the 2012 standstill data and since the average values depend on the number of participants in the group, further customizations are necessary to use it with other standstill competition data sets. In the mapping, a similar approach to the individual participant mapping has being followed. The average position values are used to calculate the average displacement position values in the XY plane and mapped to control the noise amplitude and cut-off frequency or the Sine tone frequency and amplitude. Also, the average Z-axis values can be used to control the parameters of the noise section or the sine tone.

# 3. Using Spatial Sound with Individual Position Data.

The third approach of the sonification is to apply spatialization for the position data. The position values of x, y, z Axes represent a location in the three-dimensional space and these values are used to “sonify” the motion using spatial attributes of a sound. The spatialization approach is developed by using the ICTS10 ambisonics module for Max/MSP. It allows to simply input cartesian coordinates (X, Y, Z) or spherical coordinates (Azimuth, Elevation, and Distance) and render the sound output for a speaker system or headphones. In this patch, the position data is only controlling spatial parameters of a sine tone.

# Results

## Mapping a whote noise with data variables.

First, I would mention the results for the mapping of white noise with data variables. The mapping of white noise to displacement position variable with a 100 Hz sample rate of data playback, produced a sound of rising and falling of the frequency filtering and the amplitude. These fluctuations were present for all three participants. These up and down movements of the sound can be distinguishable in three levels. First, a darker sound can be noticed with less volume which stays much stable with fewer fluctuations. These low fluctuations of the noise can probably explain by the stability of the standing still. Secondly, a much sharper rising and falling of the noise is noticeable for 5-15 seconds periods of time. The periodicity of these sounds is not sharply consistent. These sounds are shorter rises that last for about 2 seconds but clearly stands out from the much stable darker noise. These rising and falling of the noise can be related to the breathing patterns of the participants. Statistical evidence was found in previous standstill studies regarding similar periodic movements (Jensenius & Bjerkestrand, 2011). Thirdly, sudden quick bursts of the noise can be noticed, and they occur less frequently and not in any noticeable cycle. This type of sound may be occurring due to postural adjustments of the participants. As described in a study by Jensenius and Bjerkestrand (2011), some “spikes” that appear every 2-3 minutes were noticed in the analysis and these were assumed as postural re-adjustments.


