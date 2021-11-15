---
layout: post
title: " Audio Latency in the Telematic Setting"
date: 2021-11-15 08:00:00 +0100
categories: portal
author: Abhishek Choubey
image: /assets/image/2021_11_15_abhishec_audio_latency.jpg
keywords: portal, Latency, telematic, performances, telepresence, audio, lag, delay
excerpt: "Latency and its fundamentals in the telematic performance context. "
---

To begin with, it makes sense to define what is a telematic performance and what do we mean by latency especially in the context of telematic performances. So,

### What is a Telematic Performance and what is latency?

**Telematic performance** is live performance via high-bandwidth internet by performers in different geographic locations


<figure style="float: none">
   <img src="/assets/image/2021_11_15_abhishec_telematic_performance.jpg" alt="Conducting Patterns" title="" width="auto" />
   <figcaption>Telematic performance between UiO and NTNU</figcaption>
</figure>

**Latency**: Broadly defined, latency is the time delay between the input and output of a system.



<figure style="float: none">
   <img src="/assets/image/2021_11_15_abhishec_lag.gif" alt="lag" title="" width="auto" />
   <figcaption></figcaption>
</figure>



BUT, how does this translates into the context of telematic performances?

In the context of **telematic music-making**, this can be understood as the delay between the moment a musician in one location makes a sound and the moment a second musician in a different location hears that sound.

<figure style="float: none">
   <img src="/assets/image/2021_11_15_abhishec_telematic.gif" alt="lag" title="" width="auto" />
   <figcaption></figcaption>
</figure>

### When does the latency becomes a problem?

To understand this, I have considered two situations:
1.	Traditional Performances
2.	Telematic Performances

**Traditional performances**: The traditional performances are the ones in which the performers are present in the same physical space along with the listener. In this kind of performance, the latency comes into effect when there is a considerable distance between the performers themselves and the listener as well, for example in a big concert hall. Some technical aspects like the distance between loudspeakers and the performer and also listener can also add to the latency in this case. On the other, if the performers are playing a score and are following the conductor, they follow the cue of the conductor and if that cue is misjudged the performer starts going out of time because of the delay.

**Telematic Performances**: Telematic performances as explained above are the ones in which the performers are in two different physical locations. Any attempt to perform music over a network requires a confrontation with the issue of latency. The latency becomes a major source of frustration while performing if it’s too much. Many technical aspects add to the latency as well, which are explained later below.

Therefore, either latency needs to be reduced to the point where it is no longer noticeable or creative alternatives to working with latency need to be developed.

#### Threshold of latency

But at what point does the latency becomes perceivably disturbing. Extensive research done by (Braasch - The Telematic Circle – a University-Based Collabor.Pdf, n.d.) shows that if the latency is somewhere between 25ms and 30ms, and above 30ms the delay between the signals produced at both the ends is so much that the latency takes over the synchronized playing.


### Major Factors contributing to Latency:
The factors can be broadly classified into two elements: Transmission delay & Signal processing delay, and are listed below:
  1.	Distance
  2.	Network Framework
  3.	Bandwidth
  4.	Network Traffic
  5.	Data Size
  6.	System latency
  7.	Computer Processing power

  <figure style="float: none">
     <img src="/assets/image/2021_11_15_abhishec_telematic_loop.png" alt="telematic loop" title="" width="auto" />
     <figcaption></figcaption>
  </figure>


**Distance:** Distance is an inevitable cause of delay, considering the data is sent over an optical fibre network and it travels at the speed of light, there will be a delay in transmission, for instance, Trondheim to Oslo distance is ~400 km, so at the speed of light, the transmission time for a data packet to be sent between the two locations will be ~13ms.

**Network Framework:** Data is not transmitted entirely on Fibre optics, at both ends some part of the transmission will be on copper cables/Wi-Fi/ mobile network, etc, also routers/firewalls add to latency.

**Bandwidth:** The speed of the internet - how much data can be transferred from one point in a network to another within a specific amount of time?

**Network Traffic:** The number of users on the network at the given time.

**Data Size:** The size of data being sent affects the time taken for the transmission, large packets are broken into smaller packets - transmitted - and then recombined which adds to latency.

**System Latency:** This consists of all the signal processing being done at both the ends before the transmission and after the transmission. So, capturing of sound – Mixing – AtoD conversion – transmission – DtoA conversion – decompression – output to the speakers, all these processes add to latency.

**Computer Processing Power:** This is very obvious that higher speed computers will process the data quickly resulting in low latency values.

### Optimizing Latency in Telematic performances
So how can we optimize latency to be as minimum as possible? The first obvious choice is to optimize the system and the network connection we are using, by that I mean optimizing the determinant factors described above. The other option is to use an advanced system like LoLa, Jacktrip or similar, but we have to keep in mind that they have their requirements and are not easy to fulfil. Then comes the choice of embracing latency, by that I mean using latency in our favour, in the sense that performing music that does not require perfect time synchronization or learning to play with latency. We can also adjust some technical parameters like sampling rate, buffer size to achieve lower latencies. But even though we optimize all these values to their potentials, in principle, there will still be some latency that will be hard to eliminate.
### Testing and experiments
We in the portals at UiO and NTNU tried to do some experiments by changing the sampling rate on the Midas M32 mixer present at both sides and also changing the host system by which we are sending the audio back and forth to check the effect of it on audio latency. During the workshop in the portal lecture, we also measured latency between the portals, in three scenarios, sending the signal back to Oslo as we received it through the mixer, putting the microphone adjacent to the loudspeaker as shown in the image below and then placing the microphone where we normally sit in the Trondheim portal so that it also adds the latency due to the distance. I also did a test in audacity at my home, in which I created a loopback system, and then recorded the signal generated in another track. You can find all the results below.

<figure style="float: none">
   <img src="/assets/image/2021_11_15_abhishec_setup_oslo.jpg" alt="telematic loop" title="" width="auto" />
   <figcaption>Setup Oslo</figcaption>
</figure>


<figure style="float: none">
   <img src="/assets/image/2021_11_15_abhishec_ntnu_setup.jpg" alt="telematic loop" title="" width="auto" />
   <figcaption>ntnu setup without the mic hooked, I did hook it later. </figcaption>
</figure>



<figure style="float: none">
   <img src="/assets/image/2021_11_15_abhishec_uio_ntnu_sr.png" alt="telematic loop" title="" width="auto" />
   <figcaption>UiO-NTNU test with different sampling rate on mixer</figcaption>
</figure>


<figure style="float: none">
   <img src="/assets/image/2021_11_15_abhishec_workshop_test.png" alt="telematic loop" title="" width="auto" />
   <figcaption>Worskhop test between the portals</figcaption>
</figure>

<figure style="float: none">
   <img src="/assets/image/2021_11_15_abhishec_home_test.png" alt="telematic loop" title="" width="auto" />
   <figcaption>Home audacity test</figcaption>
</figure>




### Video Presentation and Slides
If you wish to hear about the topic in more detail you can watch the below video lecture and the presentation slides.

<figure style="float: none">
  <video width="auto" controls>
    <source src="https://drive.google.com/uc?&id=15sFp67U2DFlQ1HOn2ypFjQ2HYa9jWyH2" type='video/mp4'>
    Telematic Conducting Lecture
  </video>
  <figcaption>Audio latency lecture</figcaption>
</figure>
