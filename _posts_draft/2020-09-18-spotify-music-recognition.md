---
layout: post
title: "Exploring Music Preference Recognition Using Spotify's Web API"
date: 2020-09-18 06:30:20 +0200
categories: machine-learning
author: Aleksander Tidemann
image: /assets/image/2020_09_18_aleksati_ml_main_image.jpg
keywords: machne learning, spotify API, sci-kit learn
excerpt: ""
---

Over these last couple of weeks I ventured to design a system that seeks to recognize individual preferences in music using [Spotify's web API](https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/). The model tries to predict the degree to which the author will enjoy specific tracks by Johann Sebastian Bach based on a subjective rating given to every example in the dataset. The dataset ended up consisting of a mear 100 Johann Sebastian Bach tracks collected from Spotify playlists (who knew it would take so long to collect music I actually liked!?). The particular use of Bach's works was not coincidental as it presented an opportunity to collect a relatively consistant body of examples in one particular genre (baroque) that I was familiar with.

The project was first and foremost aimed at exploring how a relatively new and accessible online resource of high-level musical data could be used for machine learning purposes but also to examine whether machine learning in this sense can be used as creative tools to gain new interesting knowledge about our personal music preferences and/or biases.

<figure style="float: none">
   <img src="https://drive.google.com/uc?&id=1vo2M1v9JXMd6fXKv_DGDzMwHannFbGIP" 
   alt="Alternate Text" title="Image Title" width="640" />
   <figcaption></figcaption>
</figure>


# Data Collection

Collecting audio feature-data from Spotify was quite manageable due to their [well-documented API](https://spotipy.readthedocs.io/en/2.16.0/). I decided to collect a variety of features for experimentation, including a few high-level features native to Spotify's ecosystem;  duration, energy, tempo, time signature, loudness, ***pitches***, ***valence***, ***danceability***, ***timbres***, key and mode.

- Pitches
    * The pitch feature returns a normalized vector per segment (a consistent subdivision of a track based on a consistent amount of sound) with 12 values representing the degree of occurrence for each note. I collected every pitch vector of a given track and averaged corresponding indexes. What remained was one list per track with the average occurrence of each note in the track.
- Timbre
    * Similar to pitches, the timbre feature returns a vector per segment with 12 elements. The specifics on what this timbre feature is based remains ambiguous, but it refers to the quality of the notes in the segment. The API also presses that these timbre values are best compared to each other. The gathering process here was the as with the pitch features. 
- Danceability
    * This measure refers to how suitable a track is for dancing based on a combination of tempo, rhythm, stability, beat strength etc. Returns a scalar value per track.
- Valence
    * A normalized scalar of the "positiveness" conveyed by a track. The higher this value, the more happy, cheerful and euphoric the track is. The lower the value, the more sad, depressing and angry the track is.

An interesting observation was that these high-level Spotify features did not immediately correlate with other suspected feature data. For instance, valence did not correlate particularly well with the mode average (minor og major) of the tracks, something I would have anticipated.


<figure style="float: none">
   <img src="/assets/image/2020_09_18_aleksati_ml_valence_mode.png" 
   alt="Alternate Text" title="Image Title" width="620" />
   <figcaption>Valence in relation to average mode (major or minor) of the tracks in the dataset</figcaption>
</figure>

For each track collected, a personal rating from 1-10 was given representing target values for the supervised regressor algorithm intend.