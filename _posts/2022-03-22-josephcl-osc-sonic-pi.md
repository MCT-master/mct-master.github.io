---
layout: post
title: "Using Live OSC Data From Smartphones To Make Music With Sonic Pi"
date: 2022-03-23 10:00:00 +0200
categories: portal
author: Joseph Clemente, Kristian Wentzel
image: /assets/image/2022_03_20_josephcl_sonic_pi_thumbnail.png
keywords: portal
excerpt: "Easy as pi!"
---

<figure style="float: none">
   <img src="/assets/image/2022_03_20_josephcl_sonic_pi_header.png" alt="Alternate Text" width="auto" />
</figure>

# Introduction

Let's be honest, networking isn't exactly the most intuitive topic to grasp, especially in relation to machine learning. However, in this article we will explain the basics of using OSC for music creation that couldn't be simpler to follow! Using the [oscHook](https://oschook.soft112.com/) smartphone application, the [Sonic Pi](https://sonic-pi.net/) music creation tool, and a basic [machine learning regressor](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPRegressor.html), we can easily create and customize a tool using smartphones to make music over WiFi.

# Creating the Data Set

Our first step in this process is to create a data set to train our machine learning regressor later on. We achieved this by using oscHook to send accelerometer data to our Phython file, and saving the x/y/z coordinates that the application outputs. For our application, we decided to use 4 different phone positions at face level: facing the user, facing the left side, facing upwards, and facing downwards. Once the data set is created, we must partition the data set manually based on each position to maximize the results of our regressor and to avoid outliers. In the end, I had around a little less than 1000 samples for each position, which produced farily high R2 scores.

# Sending to Sonic Pi

After our machine learning model has been trained, we must again create an OSC connection from our smartphone to Python yet again to receive live data from oscHook. However, this time our data will be used to output numbers that will correspond to parameters we will use to shape our sounds with Sonic Pi. This was not as straight-forward as first anticipated, since it involved using [AsyncIO](https://docs.python.org/3/library/asyncio.html) in combination with the [Python-OSC library](https://pypi.org/project/python-osc/) to make an async server for handling OSC inputs and ouputs concurrently. This asynchronous design uses a main loop to send OSC messages to Sonic Pi, while our OSC server receives accelerometer data from our phone through an event loop. A "side effect" of this design is that we had to run our application as a .py-script instead of using a Jupyter notebook.

# Using Sonic Pi

Sonic Pi is a music creation and performance tool based on live coding. This makes our whole experiment kind of meta, as we're training a small machine learning model and coding an OSC server in Python so we're able to make use of our accelerometer sensor creatively when we're further live-coding in Sonic Pi. For our Sonic Pi project, we decided to change the parameters of a rather simple loop mainly consisting of the [Amen break](https://en.wikipedia.org/wiki/Amen_break). Our regressor's output was scaled to control the cutoff filter and playback rate of the sample. This project could be considered a proof-of-concept, showing us that there is a lot of possibilites to make more advanced and creative use of this techonology.

# Video Demo

<iframe src="https://drive.google.com/file/d/1FJJFYK3K052NsskuUDCboQvvTRdLcoeW/preview" width="640" height="480" allow="autoplay"></iframe>

# Files

You can view the GitHub repository with all of our files for this project [here](https://github.com/jpclemente97/SonicPiOscDemo).
