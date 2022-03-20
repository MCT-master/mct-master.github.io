---
layout: post
title: "Using Live OSC Data From Smartphones To Make Music With Sonic Pi"
date: 2022-03-22 10:00:00 +0200
categories: portal
author: Joseph Clemente, Kristian Wentzel
image: /assets/image/2022_03_20_josephcl_sonic_pi_thumbnail.png
keywords: portal
excerpt: "Easy as pi!"
---

<figure style="float: none">
   <img src="/assets/image/2022_03_20_josephcl_sonic_pi_header.png" alt="Alternate Text" title="Image Title" width="auto" />
</figure>

# Introduction

Let's be honest, networking isn't exactly the most intuitive topic to grasp, especially in relation to machine learning. However, in this article we will explain the basics of using OSC for music creation that couldn't be simpler to follow! Using the [oscHook](https://oschook.soft112.com/) smartphone application, the [Sonic Pi](https://sonic-pi.net/) music creation tool, and a basic [machine learning regressor](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPRegressor.html), we can easily create and customize a tool using smartphones to make music over WiFi.

# Creating the Data Set

Our first step in this process is to create a data set to train our machine learning regressor later on. We achieved this by using oscHook to send accelerometer data to our phython file, and saving the x/y/z coordinates that the application outputs. For our application, I decided to use 4 different phone positions at face level: facing the user, facing the left side, facing upwards, and facing downwards. Once the data set is created, we must partition the data set manually based on each position to maximize the results of our regressor and to avoid outliers. In the end, I had around a little less than 1000 samples for each position, which produced farily high R2 scores.

# Sending to Sonic Pi

After our machine learning model has been trained, we must again create an OSC connection from our smartphone to our jupyter notebook yet again to receive live data from oscHook. However, this time our data will be used to output numbers that will correspond to parameters we will use to shape our sounds with Sonic Pi.

# Using Sonic Pi


# Files

You can view the jupyter notebook we used to create out data set, train our regressor, and send OSC data to Sonic Pi [here]().  Our Sonic Pi file that was used to generate sound can be found [here](). Finally, our data set can be found [here]().
