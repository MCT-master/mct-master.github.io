---
layout: post
title: "5G Networked Performance at Telenor headquarter"
date: 2022-06-24 08:00:00 +0200
categories: portal
author: Joachim Poutaraud, Kristian Wentzel, Leigh Murray, Lindsay Charles
image: /assets/image/2022_06_21_joachipo_modem.jpg
excerpt: "Does it helps to perform music over 5G Network?"
keywords: Telematic, Network, NMP, Jazz
---

## 5G Network Music Performance with Telenor
In order to showcase the improved performance of their new 5G network, Telenor engaged UiO students from the Master’s of Music, Communication and Technology (MCT) to facilitate a Network Music Performance (NMP) over their 5G network at Telenor’s headquarter in Fornebu.  The students had extensive experience with network music performances over wired networks but this was their first foray into performing over a 5G cellular network.

<figure style="float: none">
   <img src="/assets/image/2022_06_24_joachipo_telenor.jpg" alt="Telenor Festivalen 2022" title="" width="auto" />
   <figcaption><i>Network Musical Performance in Telenor Festivalen 2O22</i></figcaption>
</figure>

## Network Music Performance Requirements
When it comes to playing over wide area networks such as the internet, the main problem is trying to keep a common rhythm between remote musicians. Maintaining a shared beat or sense of pulse is difficult if it takes too long for one musician's sound to reach another's ears. There can be drastic consequences. Well, here at [MCT](https://www.uio.no/english/studies/programmes/mct-master/) we try different solutions to avoid this the best we can. This time we set up a Network Musical Performance (NMP) over 5G Network at the headquarters of [Telenor](https://www.telenor.no/privat/).

## 5G Network Music Performance System Setup
Telenor 5G enabled a “[Network On Wheels (NOW)](https://www.telenor.com/media/press-release/telenor-teams-with-aws-to-accelerate-modernisation-of-telecommunications/)” prototype powered by AWS. Here, we used the NOW to set up an autonomous private 5G network for the NMP. The NOW prototype is currently being used by the Norwegian defence materiel agency and the Norwegian Public Service broadcaster Norsk Rikskringkasting (NRK) for critical communication and remote production use cases, respectively. 

To make it possible, we used a pair of [Huawei H138-380 CPE Pro 3 5G](https://nettbutikk.emcom.no/) Routers.

<figure style="float: none">
   <img src="/assets/image/2022_06_24_joachipo_huawei.jpg" alt="Huawei H138-380 CPE Pro 3 5G" title="" width="auto" />
   <figcaption><i>Huawei H138-380 CPE Pro 3 5G</i></figcaption>
</figure>

With audio and video sent back and forth, using the [NMP Portable Kits](https://github.com/MCT-master/NMP-Portable-Kits/wiki) to facilitate ultra-low-latency music performances between two remote locations. These racks are essentially bundles of high-end software, audio/video peripherals and networking tools that can provide the lowest possible latency on audio/video transmissions over the network, given that all other pieces of the puzzle are correct.
 
For the audio transmission, we used [JackTrip](https://www.jacktrip.org/) a popular audio transmission application developed by CCRMA at Stanford University (USA). We tested different parameters for the buffer and queue sizes and ended up with the following parameters.
 
- **Buffer Size**: 512
- **Queue Buffer**: 5

This relatively large buffer size and buffer queue resulted in 53 milliseconds of latency being added at the receiving end as the audio is buffered before playback, resulting in a Round Trip Time (RTT) of 132 milliseconds.

## Setup locations : Mainstage and Villa Haraløkka

<figure style="float: none">
   <img src="/assets/image/2022_06_24_joachipo_villa.jpg" alt="Kristian performaing at Villa Haraløkka" title="" width="auto" />
   <figcaption><i>Kristian performaing at Villa Haraløkka</i></figcaption>
</figure>
 
#### Setup at the Mainstage
The mainstage was at the Telenor HQ itself, a tent was set up next to the 5G on wheels trailer. [Picture] 
 
- [NMP Portable Kit](https://github.com/MCT-master/NMP-Portable-Kits/wiki)
- A condenser mic for the saxophone (played by Joachim)
- An SM58 mic to communicate and for announcements
- A Pair of Genelec 8030a speakers as PA system
- A Large screen for showing the video received from ‘Villa Haraløkka’
 
#### Setup at the Villa Haraløkka
The Villa is located around 300 metres from the Mainstage.

- NMP Portable Kit
- Two lines in from the Keyboard. (played by Kristian)
- Two SM58 microphones for communication
- A pair of Genelec 8020a speakers for monitoring

## **Performance Reflections**
 
When performing NMP, the problem is trying to keep a common rhythm between musicians in different locations. Maintaining a shared beat is difficult if it takes too long for one musician’s sound to reach another’s ears, and if this time (called latency) is too long (around 25ms **[1]**), it can make playing music together almost impossible. However, some techniques can be employed to work with latency, and not against it.
 
Here, Kristian and Joachim decided to play two jazz standards with medium tempo as it can tolerate slight deviations in the playing of the melody and can leave some place for the development of the melody between the chords. The following standards were chosen.
 
- **A Child Is Born** written by Thad Jones in 1969
- **A Night in Tunisia** written by Dizzy Gillespie around 1940–42
 
For Kristian, the tempo and style of song had a direct influence on how much latency could be tolerated. Consequently, difficulties in synchronising timing for up tempo standards were experienced. This have already been studied in a previous blogpost on [Mastering Latency](https://mct-master.github.io/portal/2022/02/21/joachipo-measuring-latency.html), where Kristian could experience difficulties to synchronise at higher latencies for up tempo songs. In medium tempo, this didn’t feel unnatural until the latency was set to the upper limit of 50ms one-way.
 
Furthermore, playing over 5G Network didn't really make a difference as the same observation as when playing over 4G Network was experienced by the musicians. However, the upload speed, or how fast you can send information from your computer to another device or server on the internet, was significantly improved (127.44 Mbps on site). While downloading information is more common, NMP requires data to travel in the opposite direction as well. Playing live music on the network needs fast upload speeds in order to send data to the other musician's server.
 
 ### **References**
 
**[1]** Carôt, A., & Werner, C. (2009). *Fundamentals and principles of musical telepresence*. Journal of Science and Technology of the Arts, 1(1), 26-37. https://doi.org/10.7559/citarj.v1i1.6
