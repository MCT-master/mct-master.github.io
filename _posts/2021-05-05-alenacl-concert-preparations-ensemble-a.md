---
layout: post
title: "Concert preparations: exploring the Portal"
date: 2021-05-05 12:10:00 +0200
categories: portal
author: Alena Clim, Leigh Murray, Abhishek Choubey
image: /assets/image/2021_05_04_alenacl_team_a_concert.JPG
keywords:  portal, telematic-music, telematic-communications, LoLa, TICO, midas-m32
excerpt: "What we learned about the Portal and telematic performances in general while preparing our musical pieces for the end of semester concert. Details about our instrumentation and effects."
---

# Concert preparations: expanding our knowledge of the portal

As a group of three people with considerably different musical backgrounds, one thing we struggled with was finding musical pieces that aligned with our instrumentation.

Our possible choices were:
    Leigh: Drums, bass, basic piano or guitar
    Alena: Drums or piano
    Choubey: Guitar or Midi Instruments

With these options in mind, we chose one slightly more precise indie/pop song and one more alternative/indie ambiental song. For each piece we had different challenges to overcome and we explored a different aspect of the MCT Portal.

## Adding Effects

While practicing the song [‘Intro’ by ‘The xx’](https://www.youtube.com/watch?v=xMV6l2y67rk) we realised it sounded quite plain when we performed without the backing track, and the main thing that added atmosphere to the original track was some _reverb_ on the guitar.

### On the Midas

Our first attempt was to take the guitar signal from NTNU and apply the in-built reverb effects provided by the Midas M32 mixer. Again, this was not very intuitive and it was more luck in the end that made it work rather than understanding what we were doing initially. As shown in the screenshot below, the effects are usually applied to buses.  Instead of this setup, we applied the effect directly to the NTNU track. The problem with this implementation was that Choubey at NTNU couldn’t hear the guitar with the reverb since it was only applied at UiO after we received his signal. At the NTNU side we only had a bit of EQ and a soft compression on the output signal.

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/file/d/1WygL4RXUQRMX8vrRscRuApqjzPxUcRxv" type="audio/mpeg">
    Intro by The xx with mixer reverb
  </audio>
  <figcaption>Intro with mixer reverb</figcaption>
</figure>

<figure style="float: auto">
   <img src="/assets/image/2021_05_04_leigh_midas_hall_effect.jpg" alt="" title="Midas hall effect" width=auto/> <figcaption>Midas mixer hall effect</figcaption>
</figure>

<figure style="float: auto">
   <img src="/assets/image/2021_05_04_leigh_midas_hall_effect_controls.jpg" alt="" title="Midas hall effect controls" width=auto/> <figcaption>Midas mixer hall effect controls</figcaption>
</figure>

### Using an Amplifier

During our first few sessions Choubey was micing up the Guitar amplifier using AKG C214, then routing it through the mixer, and sending that channel to UiO portal via LoLa. This setup worked fine but was slightly rigid in terms of removing feedback or adding audio effects to the dry sound. He had to place soundproofing walls around the amplifier so that it doesn't feed back into the other mics we were using to communicate with each other or pick up unwanted noise. To remove this obstacle and make it more dynamic we then directly routed the amplifier output via a line out and connected it to the mixer, and then sent it to UiO side for their reverb processing. Directly sending the output from the amplifier gave us the flexibility of muting all the mics during performance, mitigating any feedback issues we had and the unwanted noise.

We also thought of routing the guitar signal through Ableton and then send it to UiO, but since reverb was added directly on the signal at the UiO side, and there was basic EQing and compression at the NTNU side, we didn't implement this approach, as it felt redundant. But it could have made the setup even more flexible"


## Instrumentation

After using the instrumentation of drums, piano and guitar for our first song we wanted to try something different with the second. We decided to play [“Near Light” by Ólafur Arnalds](https://www.youtube.com/watch?v=0kYc55bXJFI). We had discussed the possibility of Choubey using ableton to integrate some kind of percussion or mixing which resulted in the choice to go with a drum kit.

We also wanted to integrate the lead synthesiser sound using Ableton from a laptop on the UiO side but due to the latency we couldn’t think of a good way of implementing it.  There needs to be some concession for elasticity in the tempo when the performers play together since the latency is not always predictable, so trying to trigger an instrument to begin at a specified tempo in the middle of the performance, and continue at that tempo until the end was problematic.  By the time we trigger the Ableton track we could be at a completely different tempo, and the synthesiser does not provide enough of a steady tempo or sound for us to follow it as the lead.  We could have implemented a click track that Alena could play along to from the start of the song, but since the song starts with a rubato feel it would have ruined the expressiveness. This is not a problem that’s caused by the telematic performance but it is exacerbated by it, since it may have been possible to synchronise with the instrument to a certain degree if it was in one location but also synchronising over a delayed connection was too difficult.

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/file/d/1TF_MoxlXqGGHxfLSXX6dB_KDbRyTUjge" type="audio/mpeg">
    Near Light with two pianos and midi drums
  </audio>
  <figcaption>Near light with two pianos and midi drums</figcaption>
</figure>

We tried to play the violins part on the piano (you can listen to an exerpt of this version from practice above), but it was harder to distinguish the melody later in the piece. In the end, we settled on having Alena play the piano part and Leigh the parts for the first and second violin on a Midi keyboard at UiO, together with Choubey playing some ambient drums on a Midi at NTNU. Even not playing the cello, viola or the lead synthesiser, the song still had a nice and sweet flow, so that was enough. Watch the video below for the final performance of this piece.

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1RU601pP6nqIOl6Fhil7RAEzUDACw_qLz/preview" width="600" height="400" frameborder="0" allowfullscreen></iframe>
   <figcaption>Ensemble A(wesome): "Near Light" by Ólafur Arnalds</figcaption>
</figure>

## Lovely Latency

For the first song we had Choubey leading at NTNU and Alena and Leigh played along to what they heard as the signal arrived.  This is fine for the live-stream as we are sending it from UiO so everything is synchronised but at NTNU the performance sounded out of sync.  For the second song, it was decided Choubey would be playing Midi drums but they do not start for several bars into the song, so it was necessary for UiO to lead the performance.  This was the first time Alena and Leigh at UiO got a taste of what it was like being on the receiving end of the latency.  They would be playing together and the beat provided by Choubey at NTNU was always behind the beat so we would always be slowing down.  This resulted in the use of “ambient” drum beats for our final performance rather than a steady rock beat.

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1PFUTTneyel37_DM7LM9JD3CkTUBjFnS3/preview" width="600" height="400" frameborder="0" allowfullscreen></iframe>
   <figcaption>Ensemble A(wesome) rehearsal: Choubey's drums</figcaption>
</figure>


## Here you can watch our final performance of this song:

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1t33Is8iGUGwXFFU4iuzdcxa193P-LGUe/preview" width="600" height="400" frameborder="0" allowfullscreen></iframe>
   <figcaption>Ensemble A(wesome): "Intro" by The XX </figcaption>
</figure>

## Final thoughts

Having a concert to prepare for gave us some proper incentive and motivated us to practice and experiment with effects and different instrumentations to get the best sound possible under the circumstances. Although we experienced some frustrating moments, in the end our work was repaid during the concert. It was a great and new experience!
