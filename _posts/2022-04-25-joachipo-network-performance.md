---
layout: post
title: "Managing Network Performance"
date: 2022-04-22 14:00:00 +0200
categories: networked-music
author: Jakob Høydal, Joachim Poutaraud
image: /assets/image/2022_04_21_joachipo_throughput.png
excerpt: "Managing Network Performance using Python"
keywords: Portal, Latency, Python
---

### **Introduction**

When working in the digital domain and on the internet, latency is determined by many factors. In this blog-post we will talk about how you can measure your network performances using a simple Python script in order to transfer data over a local network.

<figure style="float: none">
   <img src="/assets/image/2022_04_21_joachipo_cloud.png" alt="Network Performance Word Cloud" title="" width="auto" />
   <figcaption><i>Network Performance Word Cloud</i></figcaption>
</figure>

### **Internet Protocol Suite (TCP/IP)**

Let’s start by introducing what is the [Internet Protocol Suite](https://en.wikipedia.org/wiki/Internet_protocol_suite), also known as TCP/IP. Basically, this represents the set of communications protocols used in the Internet and similar computer networks. The main protocols in the suite are the Internet Protocol (IP), the Transmission Control Protocol (TCP), and the User Datagram Protocol (UDP).

- **IP** is responsible for delivering packets from the source host to the destination host by looking at the IP addresses in the packet headers. IP has 2 versions: IPv4 and IPv6. IPv4 is the one that most of the websites are using currently. But IPv6 is growing as the number of IPv4 addresses are limited in number when compared to the number of users.
- **TCP** is responsible to provide reliable and error-free communication between end systems. It performs sequencing and segmentation of data. It also has acknowledgment features and controls the flow of the data through flow control mechanisms. It is a very effective protocol but has a lot of overhead due to such features. Increased overhead leads to increased cost.
- **UDP** on the other hand does not provide any such features. It is the go-to protocol if your application does not require reliable transport as it is very cost-effective. Unlike TCP, which is a connection-oriented protocol, UDP is connection-less.

Moreover, TCP/IP provides end-to-end data communication specifying how data should be packetized, addressed, transmitted, routed, and received. This functionality is organized into four abstraction layers, which classify all related protocols according to each protocol's scope of networking.

- Application Layer
- Host-to-Host Layer
- Internet Layer
- Network Access Layer

Here, we focused on the *Host-to-Host Layer* (also known as the Transport Layer) as it is mainly responsible for the end-to-end communication and error-free delivery of data. In other words, it helps us to shield the upper-layer applications from the complexities of data. Within this layer, TCP is quite handy when it comes to detect packet loss and perform retransmissions to ensure reliable messaging. Packet loss occurs when one or more packets of data travelling across a computer network fail to reach their destination. This can either be caused by errors in data transmission, typically across wireless networks or network congestion and can be measured as a percentage of packets lost with respect to packets sent.

### **Network performance metrics**

Furthermore, there are different ways to measure the performance of a network, depending upon the nature and design of the network. Here, we needed to assess the factors which were responsible for affecting the delivery of data using most common network performance metrics such as:

- Bandwidth
- Throughput
- Latency

That way, we could design a simple Python script in order to measure the service quality of the network.

### **Measuring Network Performance locally**

To measure the network performance, we choose to focus on latency and bandwidth metrics. For that we started by creating a local http Server, that we connected to another Client device. Then, we measured the `ping` and the `bandwith` between the two machines.

**Ping**

When measuring the `ping`, we basically send a network message with no other purpose than to get an immediate response from the Server device. Here, we used this to measure the Round Trip Time (RTT) that we converted in milliseconds. It could have been also used to verify that another system is able and willing to respond to network messages at all.

**Bandwidth**

When measuring the `bandwidth`, we usually get two numbers related to the `upload` and the `download` bandwidth. The `upload` number is usually smaller than the `download` number. This is mainly due to the fact that we normally download more than we upload. However in AV applications we can stream as much data as we receive so this can considerably change.


<figure style="float: none">
  <video width="auto" controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/video/2022_22_04_jakobhoydal_av-latency_and_network_diagnostics.mp4" type='video/mp4'>
  </video>
  <figcaption> Network Performance Tutorial</figcaption>
</figure>

**Setting up a simple HTTP Server using Python**

To create the Local Server we used Python and the following command line with the open port number `8080`:

`python -m http.server 8080`

Moreover, we had to make sure that both devices (Server and Client) were connected over the same LAN or WLAN network. Also, the Client device needed to known the IP address of the Server device. This was possible using the following command line: `ipconfig` (on Windows)

Then, we could open a web browser on the Client device and type in the IP address of the Server device, along with the open port `8080`: [http://[IP address]:8080]()

Finally, we could measure the `ping` (ms) and the `download` (Bps) checking the local server address with our nice GUI.

<figure style="float: none">
   <img src="/assets/image/2022_04_21_joachipo_GUI.jpg" alt="MCT Network Performance" title="" width="auto" />
   <figcaption><i>MCT Network Performance GUI</i></figcaption>
</figure>

If you want to try it out, note that it is mandatory to install the following packages.

```python
pip install pyspeedtest
pip install tkinter
```

Then you can run the following script.

```python
import pyspeedtest
from tkinter import *

# Get the right byte suffixe
def byte_suffixe(nbytes):
    suffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
    i = 0
    while nbytes >= 1024 and i < len(suffixes)-1:
        nbytes /= 1024.
        i += 1
    f = ('%.2f' % nbytes).rstrip('0').rstrip('.')
    return '%s %s' % (f, suffixes[i])

# Measure ping and download
def speedtest():
    t = pyspeedtest.SpeedTest(e1.get())
    ping.set(str(round(t.ping(),4))+' ms')
    download.set(byte_suffixe(t.download()))

# Create a nice GUI using tkinter library
master = Tk()
ping = StringVar()
download = StringVar()

Label(master, text="MCT Network Performance\n").grid(row=0, sticky=W)  
Label(master, text="Local Server\n").grid(row=1, sticky=W)
Label(master, text="Ping Result:").grid(row=3, sticky=W)
Label(master, text="Download Result:").grid(row=4, sticky=W)

result = Label(master, text="", textvariable=ping).grid(row=3, column=1, sticky=W)
result2 = Label(master, text="", textvariable=download).grid(row=4, column=1, sticky=W)

e1 = Entry(master)
e1.grid(row=1, column=1)
button = Button(master, text="Check", command=speedtest)
button.grid(row=1, column=2, columnspan=2, rowspan=2, padx=5, pady=5)

mainloop()
```

Have fun!


### **Relevant links**

<font size="2"><p><b><a name="link1">[1]</a> </b> `pyspeedtest` Python library <a href="https://github.com/fopina/pyspeedtest">https://github.com/fopina/pyspeedtest</a></p></font>

<font size="2"><p><b><a name="link2">[2]</a> </b> `tkinter` Python interface to Tcl/Tk <a href="https://docs.python.org/3/library/tkinter.html">https://docs.python.org/3/library/tkinter.html</a></p></font>
