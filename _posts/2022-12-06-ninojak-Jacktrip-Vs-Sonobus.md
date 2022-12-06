---
layout: post
title: "JackTrip Vs Sonobus" - Review and Comparison"
date: 2022-12-04 05:00:00 +0200
categories: portal
author: Nino Jakeli
image: /assets/image/2022_12_04_ahmetem_mid_semester_concert.jpg
excerpt: "Low-latency online music performance platforms"
keywords: telematic music tools, JackTrip, Sonobus, Low-latency network performance
---
#JackTrip Vs Sonobus
#

<figure style="float: none">
   <img 
   src="/assets/image/2022_12_06_ninojak_Telematic_Performance.jpg"
   /> 
   <figcaption>Source:npr</figcaption>
</figure>



#

You probably know that it takes time for audio data to travel from person to person. This slight delay, A.K.A. latency, is a "good old friend" of any online music collaboration. If otherwise intended, you will end up looking for tools to eliminate it.

This blog post is a quick review and comparison of two platforms dedicated to low-latency audio network performances over the Internet.





# Audio Quality

Both provide all the details that audio nerds want to see. JackTrip uses uncompressed, 48 kHz, P.C.M. 16-bit audio and ensures the best latency. In Sonobus, audio quality can be instantly adjusted from fully uncompressed P.C.M. (16, 24, or 32 bit) or with various compressed bitrates (16-256 kbps per channel) using the low-latency Opus codec.


## Configuration

Sonobus is primarily targeted at non-technical musicians and has a relatively easy user interface while setting up JackTrip requires some I.T. experience. Also, Sonobus comes with various features. If you want to incorporate audio streaming in D.A.W. It is available as a V.S.T. plugin. Unlike JackTrip, users can use Sonobus as a Mobile app which can be quite handy. 


## Architecture

JackTrip and Sonobus are based on P2P architecture, meaning sharing all kinds of computing resources, such as processing power, network bandwidth, or disk storage space between peers. JackTrip also has Client/Server model where all parties are differentiated and respond to clients' requests. Luckily, we can use both between any combination of machines, e.g., one end using Linux can connect to another using macOS. ‍If all the musicians have a fiber ethernet connection both enable up to 800 kilometres away or more coverage.


## Conclusion

JackTrip and Sonobus are audio-only streaming services for network music performances. Both are used to achieve low-latency(25-30milliseconds) uncompressed audio connection. Compared to JackTrip, Sonobus is available as a V.S.T. plugin and mobile application. The easy-to-use interface can also be another advantage of it because JackTrip requires being comfortable with running command-line programs.





# Links for Downloading JackTrip and Sonobus

- [JackTrip](https://ccrma.stanford.edu/software/jacktrip/)

- [Sonobus](https://sonobus.net/)
