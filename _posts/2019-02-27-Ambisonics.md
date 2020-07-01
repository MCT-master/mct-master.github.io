---
layout: post
title: "Ambisonics!"
date: 2019-02-27 16:40:00 +0200
categories: portal
author: Mari Lesteberg, Elias Sukken Andersen, Ashane Silva
image: /assets/image/mari/2702scrsh.png
excerpt: "On 27 February 2019, we had a workshop on Ambisonics in the portal course. Anders Tveit gave us a lecture on how to encode and decode sound inputs from Lola, using the AIIRADecoder in Reaper."

---

## Portal workshop on Ambisonics, 27 February 2019

On 27 February 2019, we had a workshop on Ambisonics and the SoundField microphone in the portal course. Anders Tveit gave us a lecture on how to encode and decode sound inputs from Lola, using the AIIRADecoder in Reaper. He talked about different formats, and that we had to convert A format to B format with software. And then convert it to Ambic format.

We made a session in Reaper with bus tracks for the purpose of encoding and decoding the signals.  The inputs from the soundfiled SPS200 microphone was converted from A-format to B-format using the "surroundZone2 plugin" which is completely free to use.  


<img src="/assets/image/sourrondzoneB.png" width="80%" height="80%"/>


The next was to convert the B-format to B-format (ambix) by using the "soundfield plugin" by "RODE"

<img src="/assets/image/rode.PNG" width="80%" height="80%" />

Later in the chain we used the AIRADecoder to decode the audio in to the speaker setup.

<img src="/assets/image/mari/2702scrsh.png" width="80%" height="80%" />

We learned that you can have as many speakers as you like, but at least 4 speakers. Then we discussed what microphone shape/pattern to use, like omni, heart-shape etc.

### Binaural Decoding.

We managed to tryout the "MultiEncoder" from IEM plugin suite to encode multiple input and also used the "binauraldecoder" to decode and listen to the audio with headohones.

<img src="/assets/image/multiencoderIEM.PNG" width="40%" height="40%"   />


<img src="/assets/image/2019_02_27_stefanof_Binural.PNG" />

This was the chain flow: Midas mixer - > Computer - > mixer - > Lola - > Speakers

After the lecture, we started to set up the portals with eight speakers, that had to be placed with the right angle relative to each other. In Oslo, we chose not to mount the speakers in the sealing, but to set up a non-permanent with speaker stands instead. It is important to set the speakers at the correct spot with right angle and the same distance from where we set the middle point. It is also important to set the same volume for all the speakers. The reason why this is important is that the volume and the distance to the speakers will interfer with Ambisonic, since volume is the main factor to make this immersive space. 

<img src="/assets/image/speakersetup_portalAmbisonic.jpg" width="80%" height="80%" />


## Experimenting with E4L Reverb

In Oslo we tried out using some of the binaural effects included with the E4L plugin suite. One of the more striking effects we tried was the E4L B-format convolution reverb. This reverb used to the extreme, when paired with the binaural setup had a strong, alien washed out effect on the voices spoken into the microphone. This by itself ws pretty spooky, and falls into the catagory of augmented reality. (no natural reverb can ever last that long!)The settings on the reverb size was a massive 300% and higher!

## Challenges about the set-up:

Next time we should clear the floor completely before setting up all the equipment. As you can see from the picture above there was a lot of cables laying around. It might have been easier if we had a proper speaker setup in the sealing. Since this was a short time solution and was lacking speakers mounts for the sealing, we went for the floor option.

To get the angle and the distance between the speakers was not as easy as we first thought. Since every time you move one speaker, the other once have to be moved to. In case you do not set it at the right position from the start, which we had trouble with. Here a laser meter would have been useful. Since we could then print out a paper which we lay in the middle of the setup. On this paper we could have eight direction, one for each speaker, and then point the laser in the right dirction for each speaker and then the measure the right distance.  



_Trying to measure up the dictance between the speakers in the middle of a cable jungle_

<img src="/assets/image/mari/27feb2.jpg" />
