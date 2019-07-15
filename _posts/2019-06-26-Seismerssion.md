---
layout: post
title: 'Seismerssion: Retrospectives on a Audio-visual installations'
date: 2019-07-20 14:42:00 +0200
categories: Projects
author: Karolina Jawad, Espen Wik, Sepehr Haighi Shreejay Shrestha and Jørgen Nygard Varpe
image: /assets/img/Oceans/installation_picture4.png
excerpt: 'Seismerssion is the title we gave our Applied Project in the context of the MCT spring semester 2019. This audio-visual installation is dedicated to the widely unknown issue of sound pollution in the ocean. In collaboration with NTNU Oceans, an intership was established to develop and implement a public installation concept for 2 different venues.'
Keywords: Art and Science, NTNU Ocean Week 2019, The Big Challenge Festival 2019, NTNU Oceans, Sound Pollution, sonic arts, multi-modality, human computer interaction, marine life, Posyx
---

<figure align="middle">
        <video height="100%" width="100%" controls>
        <source src="/assets/video/" type="video/mp4">
        <figcaption><strong></strong></figcaption>        
        Your browser does not support the video tag.
        </video>
</figure>


In the context of the MCT Applied Project 1 our group collaborated with NTNU Oceans to design an Ocean Sensory Room within an internship project. Maria Azucena Gutierrez, our external supervisor tasked us to create an aesthetic environment that optimizes the perception of scientific content. The only requirement we got was to create an immersive space that would result in a public installation for the NTNU Ocean week in May 2019 and for “The Big Challenge” Science Festival in June 2019. We dedicated the Ocean Sensory Room to noise pollution in Norwegian waters, backed up by a scientific report from the Marine Research Institute. There was no explicit mentioning of Acoustic Pollution during the 'Breakfast Ocean Meeting” in January, therefore we decided to raise awareness about the important issue.

## Planning period Seismerssion

Our project, called 'Seismerssion' is an audio-visual installation that enables participants to explore the issue of noise pollution through an interactive soundscape. The title of our installation, 'Seismerssion' is a word-game and derives from the term reflection seismology and immersion.

Inspired by Bruno Latour's lecture at HKW Berlin, where he talks about the blue planet satellite perspective that is taken by the media when talking about anthropocentric issues, enhances the personal feeling of being tiny and too distant from the anthropocentric issues. We were keen to avoid a “global and general perspective” but rather to approach empathy through a local attachment, so that the participants are able to relate more to their immediate environment. In other words, we were lucky to find new research about the topic in a report from January 2019, specifically addressed to Norwegian endeavours in the ocean. The HFI report called 'Advice form the Institute of Marine Research of anthropocentric noise in the sea: seismic,electromagnetic surveys and underwater explosions' advices industries and other institutions operating in the ocean in how to avoid harm to marine life by noise. We extracted especially the information on reflection seismology for our project.

In brief, one of the main acoustic polluters in the ocean are seismic airguns explosions that are being deployed in search for gas and oil. These explosions are reflecting back from geological layers in the bedrock while releasing almost uninterrupted short and powerful low frequency sound waves. As sound travels 4 times faster in the water, it is especially for creatures who process their environment mainly with their acoustic organs an harmful event with vast impacts (Clark). The report, as many other sources affirm that acoustic pollution has not yet been fully explored.

It was clear that we would need an artistic approach to achieve our vision of an immersive, experience based perception of a scientifically proven topic. Other than plastic pollution of the ocean, sound is neither visible nor tangible, we had to find adequate means to communicate this quite complex topic. By aestheticizing the experience of the seismic air guns explosion we could make it comprehensible and expand the sonic event to other media. As many resources went in the beginning to think and concept visual narration, we soon realized our restrictions in time and decided to work only with audio to communicate the issue. From there we gradually added visual elements to it. At the end we were able to engage all possible sensations like touch (the rumbler), sound, vision to navigate in a darkened room. The spatial framework was quite important in order to engage the participant as best as possible and absorb them from any distraction.

## Technicalities

The participant tracking and soundscape automation feature was the main engine to realize many aspects of the installation concept. The soundscape, dramatised with suspense and surprising elements would change according to the position of the participants in the room.
We intended to “submerge” the participants into the ocean with sound. Equipped with wireless headphones, participants would be able to walk freely around the room, where an “underwater” ambience would always be heard. The room would then be divided “sonically” into different zones, with varying soundscapes ( marine mammals and sonars, fish and whales, ships and a vibrating platform with a seismic boom) depending on their position. The elements would consist of recordings of ocean life and noise pollution sources, with each zone having its own topic. In the centre of the room we would have a vibrating platform, with the intention to communicate the impact of seismic activity.

Originally it was meant to be used for both head orientation and participant localisation, but because of limitations in hardware and time for implementation, we only chose localisation. <a href="https://www.pozyx.io/" target="_blank">Pozyx</a> turned out to be the tracking system alternative for our purpose. For running Pozyx we used a Python script, which enabled tracking of multiple participants. All data was then sent to Max for Live, programmed for controlling the automation of soudscapes in Ableton Live.

The overall process of creating the Max for Live device can be summed up in these points:

- Retrieval of OSC messages over UDP (Figure 2).
- Extraction of x and y coordinates from tag 1 (Figure 2).
- Defining grids for zone 1 (Figure3).
- Using the Live API (https://help.ableton.com/hc/en-us/articles/209071389-Controlling-Live-using-Max-for-Live-Tutorial-) and the Live Object Model (LOM) for controlling Ableton Live parameters. (Figure3).
- Copying zone 1 and using the logic for making the rest of the zones.
- Copying the sub-program called “zones” to work for all 4 tags (Figure 2).
- Adding video playback for two projectors, and making videos turn red when “stage rumbler platform” is activated, using Jitter (Figure2).

In Ableton Live every zone is organized in session view, each on its own track (Figure4). Audio is sent to the different participants on the return tracks, with an aggregate device (Figure 5) as output, where all Bluetooth headphones has its own stereo channel. The Max for Live device controls the sends on each track/zone, where “send A”is participant A, “send B” is participant B and so on. Whether the sends are “on” or “off” depends on where the participants are in the room. The device also triggers the “entering” sound and the “seismic boom”. The seismic boom is not only sent to the participants, but also to the “stage rumbler platform”

## Evaluation

During the Ocean Week we handed out questionnaires to the participants, asking them questions about the experience regarding immersion, noise pollution, audio and visuals. We got 28 participants to answer, and the response suggested that it was well received in all aspects. We forgot to hand out questionnaires for the “Big Challenge” science festival,but were always in dialogue with the visitors and got overly positive feedback as well.

## Acknowledgements

Beside the scientific facts on reflection seismology provided by the HFI and the Marine Research Defence Institute (FFI) who are collaborating on this particular issue, they generously shared various recordings from marine life with us. The sound files from their (Lise Doksætter Silve, Petter H. Kvadsheim) excursions were extensively used in our installation. From Robin Støckert, not only a technical wizard and great consulter during our planning period, we could borrow equipment. We were also able to borrow a Pozyx system from Øystein Kjørstad Fjeldbo,which we used for learning how to place the system in a room and making tracking work with one person. We are also very grateful to Maria Azucena Gutierrez who was supporting us in every possible way and Daniel Formo, our internal supervisor who would always be around if we needed advice.

As a group we have managed to combine our different knowledge and skills, combining visuals, audio and technology to create an installation that communicated the real-world issue of noise pollution in a new and interesting way. We have worked well together as a team and have divided roles to be able to get the installation finished in time.

<figure>
<img src="/assets/img/Oceans/group_1.jpg" width = "100%" align="center" />
</figure>
