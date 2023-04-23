---
layout: post
title: "Spatial Audio with Max-Msp and Sonobus"
date: 2023-04-23 14:00:00 +0200
categories: spatial-audio
author: Masoud Niknafs
image: /assets/image/featured_image.jpg 
keywords: Spatial Audio, Networking
excerpt: "This post's video tutorial aims to introduce readers to the many uses for which the Sonobus can be implemented as a VST in Max-Msp."
---




# Multi-channel Audio Over the Network
This post's video tutorial aims to introduce readers to the many uses for which the Sonobus can be implemented as a VST in Max-Msp. Thanks to Max by Cyclying74's modular and object-based design, we can easily incorporate over-the-network multichannel solutions like Sonobus as a VST into a variety of spatial audio scenarios. Hope you Enjoy!


<iframe width="560" height="315" src="https://youtu.be/8fKQJUkxrJM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# Approch:
We used the [ICST](https://ambisonics.ch) Ambisonics package for this video tutorial. The package is cost-free and is easily installable using the Max-Msp package manager. The approach in this experiment is to encode a single mono file source to higher order ambisonics and then decode the audio back into separate 8 decoded channels since it is assumed that we are not playing back audio in ambisonic format, so that we send the decoded audio over the network by Sonobus.

As the heart of the audio chain we have the mc.ambiencode~ and, mc.ambidecode~:


<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_04_23_masoudn_encod_decode.png" width="60%" />
   <figcaption>Encoder and Decoder</figcaption>
</figure>

The encoder is given the [spherical coordinates](https://en.wikipedia.org/wiki/Spherical_coordinate_system) as the position of the sounding source in space. This is accomplished by initializing and utilizing the object's costume attributes to provide us with the features we require for control:


<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_04_23_masoudn_source_locations.png?alt=original" width="60%" />
   <figcaption>Ambimonitor object</figcaption>
</figure>


Also the same approach applies for the speakers relative position where it can easily be given to the decoder:

<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_04_23_masoudn_s_locations.png" width="60%" />
   <figcaption>Ambimonitor object</figcaption>
</figure>


Simply you can bring the Sonobus in the game by loading the VST3 version in the VST~ object and give it proper number of inputs you need to be sent to the network!

<figure style="float: none">
   <img
      src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_04_23_masoudn_overal.png" width="60%" />
   <figcaption></figcaption>
</figure>

# Takeaways:

- For fine-tuning the latency, the buffer size or signal vector size in Max should be set within the audio status. Max controls the Sonobus as the VST inside the patcher.
- To send multiple channels while you are actively positioning the sound source in space, you require a noticeably strong lan internet connection.
- You can further investigate the documentation and develope rather sopisticated setups to be sent over the network!