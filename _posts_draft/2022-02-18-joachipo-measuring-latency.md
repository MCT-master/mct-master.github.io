---
layout: post
title: "How to measure latency for Network Musical Performance (NMP)?"
date: 2022-02-21 22:00:00 +0200
categories: portal
author: Hugh Alexander von Arnim, Kristian Wentzel, Sofía González, Joachim Poutaraud
image: /assets/image/2021_09_20_joachimpoutaraud_networkdelay.jpg
excerpt: "A report on latency measurements between the UiO portals"

keywords: Portal, Latency, NMP, LoLa
---

## **Introduction**

### **How to measure latency for Network Musical Performance (NMP)?**

The Internet is widely used for audio communications. Numerous collaboration applications exist that make it trivial to carry on a conversation with almost anyone, worldwide. So, why is performing music any different? The answer lies in the problem of trying to keep a common rhythm going between remote musicians. Maintaining a shared beat or sense of pulse is difficult if it takes too long for one musician's sound to reach another's ears. There can be drastic consequences.

### **Goals/Plans**

Based on the Network Musical Performance (NMP) strategies discussed by Alexander Carôt and Christian Werner in their paper **[1]**, we decided to test two of their NMP strategies:

- Master Slave Approach (MSA)
- Laid Back Approach (LBA)

That way, we could report on the feasibility of conducting networked music performances under various latency conditions between the UiO portals. 

### **Technical specs**

When performing music over the Internet, the sound sended to another performer has to pass through several stages which inevitably add latency **[2]**. 

- Geographical latency and Internet backbone
- Internet service latency
- Home network latency
- ADC and DAC latency in computers
- Acoustical latency

We started our analysis by measuring the network trace route between the two UiO portals computers (Windows) using their respective IP addresses. 

- **Video Portal:** 129.240.238.20
- **MCT Portal:** 129.240.238.21

`Test-NetConnection -RemoteAddress 129.240.238.20 -TraceRoute`

This measured the amount of time it takes to a [network packet](https://en.wikipedia.org/wiki/Network_packet) to get from the client to the server and back (also known as the **Round Trip Time (RTT)**). Another approach could have been to use the **Time to First Byte (TTFB)** which measure the amount of time it takes for the server to receive the first byte of data when the client sends a request. Finally, we could see that the network latency was really low.

<figure style="float: none">
   <img src="/assets/image/2022_02_18_joachipo_latency.png" alt="Network Latency" title="" width="auto" />
   <figcaption>Network Latency</figcaption>
</figure>








### **Relevant papers and links**

<font size="2"><p><b>[1] </b> Carôt, A., & Werner, C. (2009). Fundamentals and principles of musical telepresence. Journal of Science and Technology of the Arts, 1(1), 26-37. <a href="https://doi.org/10.7559/citarj.v1i1.6">https://doi.org/10.7559/citarj.v1i1.6</a></p></font>

<font size="2"><p><b>[2] </b> JackTrip. (2022). Technology. <a href="https://jacktrip.org/technology.html">https://jacktrip.org/technology.html</a></p></font>


