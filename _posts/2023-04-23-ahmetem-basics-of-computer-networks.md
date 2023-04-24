---
layout: post
title: "Basics of Computer Networks in NMPs"
date: 2023-04-23 23:00:00 +0200
categories: portal
author: Emin Memis
image: /assets/image/2023_04_23_ahmetem_computer_networks_city.png
keywords: nmp, network, telematic, latency, tutorial
excerpt: "Crash course on computer network used in Network Music Performances."
---

Are you curious about the magic that happens behind the scenes of network music performances? This blogpost briefly covers the fundamentals of computer networks in NMPs in extremely simple terms! It all starts with a network, which is like a city where computers are the houses and communication is like sending parcels between houses.

<figure style="float: none">
   <img
      src="/assets/image/2023_04_23_ahmetem_computer_networks_citywide.png" width="80%" />
   <figcaption>A city or a network.</figcaption>
</figure>

## IP Address and Port
Each computer in a network has an identification number called an IP address, which is like the physical address of your house in a city.

<figure style="float: none">
   <img
      src="/assets/image/2023_04_23_ahmetem_computer_networks_addr.png" width="80%" />
   <figcaption></figcaption>
</figure>

<figure style="float: none">
   <img
      src="/assets/image/2023_04_23_ahmetem_computer_networks_ip.png" width="80%" />
   <figcaption></figcaption>
</figure>

## Servers
Servers are dedicated devices that manage and provide services to other devices in the network, like central offices in a city that serve the residents.

## Ping
When you connect to a network, you can test your connection by sending a tiny package to a remote host and receiving it back.

## Packetization
Packetization is a process of breaking up large blocks of data into smaller, more manageable chunks called packets. Think of packetization like in a trip, rather than trying to stuff all your belongings into one giant bag, it's easier to organize your items into smaller, more manageable packages. Similarly, packetization allows data to be sent more efficiently over a network, reducing the chances of errors.

<figure style="float: none">
   <img
      src="/assets/image/2023_04_23_ahmetem_computer_networks_pack.png" width="80%" />
   <figcaption></figcaption>
</figure>

## Jitter and Jitter Buffer
Normally in networks, packages are sent regularly. But sometimes, there may be variation in the delay between package deliveries, which is called jitter. We solve this with a technique called jitter buffering which is temporarily storing incoming packages and releasing them at a steady rate. However, packing up enough amount of packages introduces latency. It is essential to find the balance between the latency and jitter in that case!

<figure style="float: none">
   <img
      src="/assets/image/2023_04_23_ahmetem_computer_networks_buff.png" width="95%" />
   <figcaption></figcaption>
</figure>

## Compression
Another technique to increase efficiency is compression, which reduces the data size while still retaining the essential information. Good, but this can also introduce latency as the compression algorithms take some time for theirselves.

## Network Capacity
Most of the time, network's capacity is measured by the amount of data that can be sent in a given amount of time, called bandwidth. Think of it like the width of roads in a city that determines how much traffic can flow through at once. Bandwidth is a theoretical measurement. When it comes to practice, the actual amount of data that is transmitted over a network is called the Throughput. Bandwidht is a measure of capacity, while throughput is a measure of performance.

<figure style="float: none">
   <img
      src="/assets/image/2023_04_23_ahmetem_computer_networks_bw.png" width="90%" />
   <figcaption></figcaption>
</figure>

## Firewall
Just like a security guards standing at the entrance of your garden, firewalls are intelligent barriers that protect networks and computers by controlling incoming and outgoing traffic. However, it can be a nightmare when trying to establish a custom connection. So, it's very common to bypass firewall when connecting for NMP.

<figure style="float: none">
   <img
      src="/assets/image/2023_04_23_ahmetem_computer_networks_fw.png" width="90%" />
   <figcaption></figcaption>
</figure>

## TCP/UDP
When it comes to transmitting data, the two most common protocols in computer networks are TCP and UDP. TCP ensures that data is transmitted accurately by verifying that all packages have been received. UDP, on the other hand, sends data without confirming receipt or checking errors, making it faster but less reliable. Depending on the application, you may use one or the other. For example, UDP is more reliable for real-time, while TCP is preferred for critical applications.

## Connection Typologies
To set up a connection for a network music performance, there are different typologies to choose from, like hub-server and peer-to-peer setups. In a peer-to-peer setup, each participant is connected directly to each other, which is useful for smaller performances. In a hub-server setup, a central server controls the flow of data between participants, which is useful for larger performances with more participants. As always, there are trade-offs to consider when choosing the best setup for your needs.

There are various software available today, you can go ahead and check their websites or documentation to see which typology they use. Here are the common software and their type of connection.

<figure style="float: none">
   <img
      src="/assets/image/2023_04_23_ahmetem_computer_networks_sw.png" width="75%" />
   <figcaption></figcaption>
</figure>

## Video
All these gathered in a 7-minute-long video lecture. Enjoy!

<iframe width="956" height="538" src="https://www.youtube.com/embed/-JCK-ccHSXU" title="Computer Network Basics in Network Music Performances" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Illustration elements: [Freepik](https://www.freepik.com/)