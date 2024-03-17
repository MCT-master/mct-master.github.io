---
layout: post
title:  "Introduction to Open Sound Control (OSC)"
date:   2023-11-30 10:48:00 +0200
categories: networked-music
author: Tom Oldfield
image: /assets/image/2023_11_30_thomaseo_sonobus-sync6.jpg
excerpt: "This post contains a brief overview of OSC and a tutorial on how to make a connection and send data between devices."
---
### Introduction
OSC - Open Sound Control. Like MIDI, but better. Below you will find some key knowledge to get started working with OSC and a build along in Max to make the start of a gyroscope_powered wireless musical controller.

<img src="/assets/image/2024_03_17_thomaseo_osc_1.jpg" width="60%" style="display: block; margin: auto;" />


### So what is OSC?
OSC is a protocol used for sending data between devices over a network. It was developed by Matthew Wright and Adrian Freed at CNMAT (Center for New Music and Audio Technologies) at Berkeley, California, in 1997. They describe OSC as “efficient, transport-independent, message-based protocol developed for communication among computers, sound synthesizers, and other multimedia devices.” **(1)**

Like it’s older brother - MIDI, OSC was designed for use in music performance contexts but has become popular among a wide range of disciplines. Just a few examples of softwares with OSC capability include Ableton Live, Reaper, Max, Pure Data, QLab and Unreal Engine.

One clear advantage of OSC over MIDI is that it sends data over network so we can make wireless controllers and that’s what we’re going to do today but first we need to look a little deeper at the types of data messages OSC can handle.


### The data

“The arguments to OSC messages can be strings, 32-bit floating point or integer numbers, arbitrary ‘blobs’ of binary data, or any of a dozen optional data types.” **(2)**

This is much more variety of data than is sent via MIDI. A 32-bit float for example is a 7 digit number with a decimal place, allowing us to create much smoother transitions when we turn a dial. In comparison, MIDI sends integers (whole numbers) on a range between 0 and 127. For many uses, the degree of control that MIDI gives us works fine, but in some cases, we may need a higher resolution of control. The YouTube channel ‘ZEAL CO - Creative Research Operation’ demonstrates this very will in their video titled ‘Introduction to Open Sound Control (OSC)’ by changing colour hue using dials representing the accuracy of MIDI and OSC messages **(3)**.

<img src="/assets/image/2024_03_17_thomaseo_osc_2.jpg" width="40%" style="display: block; margin: auto;" />


Another advantage of OSC is being able to label our incoming messages however we like. In MIDI, CC (control change) messages are given a number as an ID but this number doesn’t mean a lot to us, especially when we start to create more complex mapping of our controls. OSC allows us to instead give a parameter a text name so we can more easily identify it later on. “… a message to set the frequency of the fourteenth oscillator in the third additive synthesis voice might be named ‘/voices/3/osc/ 14/freq’.” (2.)

OSC messages are made up of two parts, the Address Pattern and the Arguments. The address pattern can be thought of as the ID of the parameter and the argument is the value or message it sends. This knowledge will be important later on when we start to route messages for mapping to different parameters. Here we can see an example of the address pattern argument.

<img src="/assets/image/2024_03_17_thomaseo_osc_3.jpg" width="40%" style="display: block; margin: auto;" />


### Building a wireless controller

The following guide is based on an example of a motion-controlled musical instrument. An iPhone app called GyrOSC sends out motion data from the gyroscope via OSC messages which are received by Max - an OSC capable visual programming language. Although you may not have access to these exact tools, most of the terminology and processes will be very similar across platforms. Check the documentation of your software for more information about how to implement OSC.

### Step 1 - Making a connection

Open up the app on the device you want to send from. It requires two bits of information - a target IP (can be called host IP) and a port number.

The target IP is simply the IP address of device you want to send the message to. On my MacBook, I can go to settings, network, click on the network you are connected to and click details to see your IP address.

<img src="/assets/image/2024_03_17_thomaseo_osc_4.jpg" width="40%" style="display: block; margin: auto;" />

If the IP address is like a street address (42 Main Road, Townsville etc) then port number is essentially the apartment number within the building you are trying to send the message to.

Some applications have specific port numbers which are usually predefined, but we can often specify our own port number. Computers are often already using some port numbers, so it’s best to aim above about 5000.

If you are using a public WiFi network, such as ‘eduroam’, these sometimes have restrictions on lower port numbers but it can work to set the port number to a value above 31000.


### Step 2 - Receiving messages

Now we can open Max and create the [ udpreceive ] object. This is the object that will receive the message but it need to know which port number to listen too. To this by banging the message ‘port’ followed by your port number into the [ udpreceive ]. Connect a message box or [ print ] below the [ udpreceive ] to check message are coming in. It can be helpful to connect a button which gets banged every time a message is received.

<img src="/assets/image/2024_03_17_thomaseo_osc_5.jpg" width="40%" style="display: block; margin: auto;" />


### Step 3 - Handling the data

Now you have data coming in but everything is traveling down the same channel. We first need to separate messages with different address patterns so messages go to the correct parameter and secondly we need to separate the address patterns from the arguments themselves. The [route] object luckily does both of these tasks.

<img src="/assets/image/2024_03_17_thomaseo_osc_6.jpg" width="40%" style="display: block; margin: auto;" />


In my case, both gyroscope and accelerometer have 3 arguments (one for X, Y and Z) as a list which can be separated using the [ unpack ] object.

Now you can begin to process these arguments and map them to whatever parameters you like.


### Step 4 - Improving your device

Depending on network conditions, there can be significant jitter in the data stream received in Max. Below are results from testing GyrOSC at different sampling rates on my home network compared to a clock pulse. To mitigate the jitter, you can explore using a buffer to store samples and request them at a regular time interval or limit the speed of data coming through the chain. You may also want to consider smoothing the data using a [line] or similar object if argument values jerk around.

<img src="/assets/image/2024_03_17_thomaseo_osc_7.jpg" width="60%" style="display: block; margin: auto;" />

<img src="/assets/image/2024_03_17_thomaseo_osc_8.jpg" width="60%" style="display: block; margin: auto;" />

Check out [this accompanying video](https://youtu.be/Rp9wJkhAFfs) for a build-along in Max!


### Sources

1 - Wright, M., & Freed, A. (1997, September). Open soundcontrol: A new protocol for communicating with sound synthesizers. In ICMC.

2 - Wright, M. (2005). Open Sound Control: an enabling technology for musical networking. Organised Sound, 10(3), 193-200.

3 - ZEAL CO - Creative Research Operation - [Introduction to Open Sound Control (OSC)](https://www.youtube.com/watch?v=bupVHvMEAz0&t=271s)