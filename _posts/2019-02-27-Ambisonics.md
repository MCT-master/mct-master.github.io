---
layout: post
title: "Ambisonics!"
date: 2019-02-27 16:40:00 +0200
categories: Portal
author: Mari Lesteberg, Elias Sukken Andersen, Ashane Silva
image: /assets/img/mari/2702scrsh.png
excerpt: "On 27 February 2019, we had a workshop on Ambisonics in the portal course. Anders Tveit gave us a lecture on how to encode and decode sound inputs from Lola, using the AIIRADecoder in Reaper."

---

## Portal workshop on Ambisonics, 27 February 2019

On 27 February 2019, we had a workshop on Ambisonics and the SoundField microphone in the portal course. Anders Tveit gave us a lecture on how to encode and decode sound inputs from Lola, using the AIIRADecoder in Reaper. He talked about different formats, and that we had to convert A format to B format with software. And then convert it to Ambic format.

We made a session in Reaper with bus tracks for the purpose of encoding and decoding the signals.  The inputs from the soundfiled SPS200 microphone was converted from A-format to B-format using the "surroundZone2 plugin" which is completely free to use.  


<img src="assets/img/sourrondzoneB.png" width="50%" height="50%" />


The next was to convert the B-format to B-format (ambix) by using the "soundfield plugin" by "RODE"

<figure align="center">
<img src="assets/img/rode.PNG" width="50%" height="50%" />
</figure>

Later in the chain we used the AIRADecoder to decode the audio in to the speaker setup. 

<img src="/assets/img/mari/2702scrsh.png" />

We learned that you can have as many speakers as you like, but at least 4 speakers. Then we discussed what microphone shape/pattern to use, like omni, heart-shape etc.

### Binaural Decoding.

We managed to tryout the "MultiEncoder" from IEM plugin suite to encode multiple input and also used the "binauraldecoder" to decode and listen to the audio with headohones.

<figure align="center">
<img src="https://github.com/MCT-master/mct-master.github.io/blob/master/multiencoderIEM.PNG" width="50%" height="50%" >
</figure>

<figure align="center">
<img src="https://github.com/MCT-master/mct-master.github.io/blob/master/Binural.PNG" width="50%" height="50%" >
</figure>


This was the chain flow: Midas mixer - > Computer - > mixer - > Lola - > Speakers

After the lecture, we started to set up the portals with eight speakers, that had to be placed with the right angle relative to each other. In Oslo, we chose not to mount the speakers in the sealing, but to set up a non-permanent with speaker stands instead. It is important to set the speakers at the correct spot with right angle and the same distance from where we set the middle point. It is also important to set the same volume for all the speakers. The reason why this is important is that the volume and the distance to the speakers will interfer with Ambisonic, since volume is the main factor to make this immersive space. 

<img src="/assets/img/speakersetup_portalAmbisonic.jpg" width=60% />
<figure align="center">



## Challenges about the set-up:

Next time we should clear the floor completely before setting up all the equipment. As you can see from the picture above there was a lot of cables laying around. It might have been easier if we had a proper speaker setup in the sealing. Since this was a short time solution and was lacking speakers mounts for the sealing, we went for the floor option.

To get the angle and the distance between the speakers was not as easy as we first thought. Since every time you move one speaker, the other once have to be moved to. In case you do not set it at the right position from the start, which we had trouble with. Here a laser meter would have been useful. Since we could then print out a paper which we lay in the middle of the setup. On this paper we could have eight direction, one for each speaker, and then point the laser in the right dirction for each speaker and then the measure the right distance.  



_Trying to measure up the dictance between the speakers in the middle of a cable jungle_

<img src="/assets/img/mari/27feb2.jpg" />
