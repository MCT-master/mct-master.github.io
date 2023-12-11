---
layout: post
title: "Audio-Video Synchronization for Streaming"
date: 2021-11-15 03:00:00 +0100
categories: networked-music
author: Pedro Lucas
image: /assets/image/2021_11_15_pedropl_avsync_obsall.jpg
keywords: streaming, YouTube, AV-Sync, multi-source, latency
excerpt: "This approach considers a streaming solution from multiple sources and different locations (Salen, Video Room, Portal)"
---

In order to provide the best perceptual quality in a multimedia transmission, the synchronization between audio and video (AV-Sync) has to be preserved. If that does not happen, theses inaccuracies can be perceived, affecting the visual and auditory experience (Yang et. al. 2007).

There is research that suggests that errors in Audio and Video synchronization can be identified in around 185 ms with a variance of approximately 42 ms (Younkin and Corrieau 2008). Additionally, we have other studies in which errors can be perceived near to 200 ms for audio ahead of video and 320 ms for audio delayed with respect to video (Staelens et. al. 2012). The goal is to reduce these inaccuracies as much as possible to improve the multimedia experience.

## Streaming Scenarios

In the case of Audio and Video synchronization, I considered three of the main locations that we usually use on the MCT Program: Salen, the Video Room, and the Portal. The objectives are:

-	Measure Audio and Video synchronization errors for these three places.
-	Fix the errors by introducing latency, which will happen mostly regarding the audio.
-	Stream on YouTube sources from these three places at the same time.

The idea is to setup a streaming system within the Portal and receive the audio and video from a source placed on each location. These sources will be received via internet from Salen and the video room to the streaming system in the portal, and the local signals in the portal itself will be sent to this system. Finally, all these sources are streamed to a service, that in this case, will be YouTube. The picture below illustrates this setup.


<figure style="float: none">
   <img src="/assets/image/2021_11_15_pedropl_avsync_complete.jpg" alt="Complete Streaming Scenario." title="Complete Streaming Scenario." width="100%" />
   <figcaption><i>Complete Streaming Scenario.</i></figcaption>
</figure>


Next you will find a description for every location.

### Salen

In Salen, we have a source which is an Audio and Video synchronization test that is used on every location. The audio is capture by a microphone connected to a MIDAS mixer which sends a stereo analog signal to a PC in which we have OBS ninja running. We create in this PC an instance of OBS ninja for sending audio and video. For video, we point a camera to the source, which is connected to a video mixer. The video feed is sent to the PC through a capture card, and finally this video feeds the OBS ninja instance which is transmitted to the internet considering both, audio and video.

<figure style="float: none">
   <img src="/assets/image/2021_11_15_pedropl_avsync_salen.jpg" alt="Salen Diagram" title="Salen Diagram." width="100%" />
   <figcaption><i>Salen Diagram.</i></figcaption>
</figure>

### Video Room

In the video room we have a similar source. We capture the audio through a microphone connected to the analog mixer and we sent this signal to the LOLA PC and then to internet. We have a camera that is connected directly to the Zoom PC through USB. In this PC we are running an instance of OBS ninja, but in this case, we are just sending the video. As you can notice, we have two different sources for audio and video going to the network.

<figure style="float: none">
   <img src="/assets/image/2021_11_15_pedropl_avsync_dungeon.jpg" alt="Video Room Diagram" title="Video Room Diagram." width="100%" />
   <figcaption><i>Video Room Diagram.</i></figcaption>
</figure>

### Portal

In the portal we use the same video source. The audio is capture by a microphone that goes to the MIDAS mixer. The video is capture through a camera. Both, audio and video are sent to the ATEM mini. It allows to feed the Streaming PC as one source that represents the local setup. The Streaming PC collects all the source in OBS Studio, in which the synchronization corrections happen.
The audio from the Video room is received through the LOLA PC which sends the signal to the MIDAS mixer. The audio signal is capture by the streaming PC through the sound card from the mixer so that we can have a separated source.
The video feed from the video room is received from OBS ninja. We get both, audio and video from Salen through a different OBS ninja source. Once we have the three sources in terms of audio and video we can perform measurements and corrections regarding AV-Sync and stream to YouTube.

<figure style="float: none">
   <img src="/assets/image/2021_11_15_pedropl_avsync_portal.jpg" alt="Portal Diagram." title="Portal Diagram." width="100%" />
   <figcaption><i>Portal Diagram.</i></figcaption>
</figure>


## Measurement Technique

For performing the measurements, we record the multiple video feed in OBS Studio but we mute all the sources except the one that we are interested in, so that we can measure the difference between audio and video in a video editing software. OBS looks like the next image when all sources are integrated.

<figure style="float: none">
   <img src="/assets/image/2021_11_15_pedropl_avsync_obsall.jpg" alt="All sources in OBS Studio" title="All sources in OBS Studio." width="75%" />
   <figcaption><i>All sources in OBS Studio.</i></figcaption>
</figure>

Once we have the recording, we identify the closest frame to the sound, and we check the approximate number that is given in the video test as it is shown in the picture below. We do that with all the three sources several times and we average the value.

<figure style="float: none">
   <img src="/assets/image/2021_11_15_pedropl_avsync_measure.jpg" alt="Measuring in video editor" title="Measuring in video editor." width="75%" />
   <figcaption><i>Measuring in video editor.</i></figcaption>
</figure>

## Results

The results are individual per each location. For Salen we have 250 ms, for the video room 200 ms, and for the portal 50 ms. Note that in the Portal, according to previous research we can say that the synchronization error will not be perceived. But for the other ones is necessary to do a correction.

<figure style="float: none">
   <img src="/assets/image/2021_11_15_pedropl_avsync_results.jpg" alt="AV-Sync errors per location" title="AV-Sync errors per location." width="100%" />
   <figcaption><i>AV-Sync errors per location.</i></figcaption>
</figure>

## Correction

OBS Studio allows us to introduce latency for the audio sources through a parameter called “Sync offset”. We just have to write the measured numbers and we will get every individual source synchronized in terms of audio and video. The interface that OBS offers is shown in the next picture.

<figure style="float: none">
   <img src="/assets/image/2021_11_15_pedropl_avsync_obscorrection.jpg" alt="OBS audio correction." title="OBS audio correction." width="100%" />
   <figcaption><i>OBS audio correction.</i></figcaption>
</figure>

## Comparisons between before and after correction.

In the following video you will find the presentation of this topic. From minute 5:30 there is a set of videos showing the test source and the comparisons when the audio latency is introduced for synchronization.

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1k8VaNCcxEGmd_FKNanGbpjuBqsoaE54f/preview" width="1024" height="576" frameborder="0" allowfullscreen></iframe>
   <figcaption>Presentation</figcaption>
</figure>

## Conclusions

Values can be affected regarding AV-Sync errors by changing quality settings. It can be focused on audio and/or video in terms of resolution, bitrate, sample rate, network and others. In that case is recommendable to measure every time we need to assemble this kind of application.
Errors can be introduced locally. It means that we can have local latency and we could fix locally and then send, but still, we probably will need to fix in the other end. In that sense, we must preserve the solution we choose, that is, fixing synchronization errors locally and in the streaming system or just in the streaming system. The goal is to reduce these errors in the final end.
A Correction is not needed if the latency is not perceived. In this case we could skip the correction for the portal because it was within an acceptable value for human perception.

Measurement and fixing techniques can be extended outside MCT, as well as external sources. For example, Salen can be considered an external source in the MCT portals, so we can add as many sources as we want by using, for example, OBS ninja to transmit audio and video and apply the same techniques.

Finally, future work considers synchronization of the sources after the individual correction of each one. It can be managed by having a way to centralize a source or deal with an actual telematic performance in real time so that we can try to run events synchronized among all the sources.

## References

* Yang, M., Bourbakis, N., Chen, Z., & Trifas, M. (2007). An efficient audio-video synchronization methodology. Proceedings of the 2007 IEEE International Conference on Multimedia and Expo, ICME 2007, 767–770. https://doi.org/10.1109/icme.2007.4284763

* Younkin, A. C., & Corriveau, P. J. (2008). Determining the amount of audio-video synchronization errors perceptible to the average end-user. IEEE Transactions on Broadcasting, 54(3), 623–627. https://doi.org/10.1109/TBC.2008.2002102

* Staelens, N., De Meulenaere, J., Bleumers, L., Van Wallendael, G., De Cock, J., Geeraert, K., … Demeester, P. (2012). Assessing the importance of audio/video synchronization for simultaneous translation of video sequences. Multimedia Systems, 18(6), 445–457. https://doi.org/10.1007/s00530-012-0262-4
