---
layout: post
title: "Video latency: definition, key concepts, and examples"
date: 2021-11-15 18:30:00 +0200
categories: networked-music
author: Alena Clim
image: /assets/image/2021_11_15_alena_test_latency.png
keywords: video-latency, streaming, codec, protocol, encoder, decoder
excerpt: "This blogpost is made after the video lecture on the same topic and it includes a definition of video latency and other related key concepts, as well as concrete examples from the MCT portals."
---

### Introducing Video Latency

The aim of this blogpost is to explain and clarify concepts and processes rather than introduce new ideas or recommendations. Audio latency or the problem of audio-video synchronization is not discussed here.

Let’s start with the beginning. __Video Latency__ is the difference between the time of capturing and that of displaying whatever video was captured. 

The total time difference between source and viewer is called __glass-to-glass latency__, or __end-to-end__. Other terms like “capture latency”, “encoding latency” only refer to the lag added at a specific step of the workflow. 

Each user case has its own latency requirements. One-way streams of live events to large audiences can have up to 45 seconds of delay without any bad consequences, whereas in the live stream of a football match, for example, so much delay would be problematic (think about social media spoiling an important goal you haven’t seen yet…) 

It is even more important to have low video latency in a two-way conference, real-time device control, or, of course, _telematics performances_ (think about playing together… and missing all the visual cues and feedback!) 

<figure style="float: auto">
   <img src="/assets/image/2021_11_15_alena_streaming_latency.JPG" alt="" title="Use case based latency" width=auto/> <figcaption>Wowza Media Systems video latencies</figcaption>
</figure>

### Live Streaming
Let’s quickly discuss the most important components of the streaming chain with regards to video latency (aka the ones that usually add the most lag). 

__Video encoding__ is the process of compressing raw video for it to be later transported over the internet. At this step, the encoder needs to compress the content according to the available bandwidth of the network. 

There are two types of video encoding, __file-based__ and __live__. In the first case, encoders are used to compress and reduce the size of video content so that it uses less storage space and is easier to transfer. Since the video files are not live, the latency is rarely a key problem here.

<figure style="float: auto">
   <img src="/assets/image/2021_11_15_alena_video_latency_chain.JPG" alt="" title="Streaming workflow" width=auto/> <figcaption>Haivision representation of the streaming workflow</figcaption>
</figure>

__Live video encoding__ is the process of compressing real-time video and audio content prior to streaming – significantly reducing bandwidth while maintaining picture quality. However, depending on the type of encoder used, compressing live video can add to the glass-to-glass latency, negatively impacting the overall experience quality.

__Video decoding__ is the process opposite of encoding. It can output uncompressed video through SDI for further video processing or over HDMI for displaying directly on a screen. 

To keep latency low in a video streaming workflow, it’s important to work on each step at a time – e.g., if the video encoder is adding latency, there won’t be a way to “catch up” on that delay later in the streaming process.

### CODECs

Another critical step that adds to the glass-to-glass latency is compressing and decompressing data into files or real-time streams. This process is done following video protocols known as the __codecs__. The term codec is a portmanteau of the words _enCOding_ and _DECoding_. 

Most codecs use a __“lossy” compression__ method – some redundant spatial and temporal information is lost. __“Lossless” compression__ is used when the goal is to reduce file and stream sizes by only a slight amount in order to keep picture quality identical to the original source.

Codecs for live video (mainly H.264/AVC or H.265/HEVC) can reduce raw content data by as much as _a thousand times_, saving much needed bandwidth – e.g., a typical uncompressed HD stream is about 1.5 gigabits, but compressed it gets to around 5 megabits for live broadcast television. 

__Network transport protocols__ are also influencing the end-to-end latency. Different protocols will introduce different amounts of latency to the streaming workflow, so, for live applications a transport protocol with as low latency as possible should be chosen. __Encrypting__ data for security purposes is another lag-adding parameter. “Packet loss” and following __error correction__ methods also adds latency.

Depending on each use case, the image quality or the low-latency will be more important. For applications where latency is critical, such as __telematic performances__, picture quality can often be exchanged in favor of minimizing latency. However, if the video quality is of importance one has to accept extra latency. Ultimately, the optimal combination of bitrate, picture quality, and latency settings will result in a great live experience over any network.

### Practical examples from the MCT Portals

__Protocols__

On a daily basis we use __Zoom__ to communicate between Trondheim and Oslo, at least visually. For a better performance, this technology combines the two codecs:
-	The __Advanced Video Coding (AVC)__ codec has a fast encoding speed and is very efficient for HD videos. However, as the demand for 4K continues, it is slowly being replaced with the __High Efficiency Video Coding (HEVC)__ protocol, which can deliver the same quality at half the bitrate (while using significant processing power).
-	__FFMPEG (Fast Forward MPEG)__ is an open source, command-line based, multimedia project for encoding and decoding a variety of media formats (both audio and video) – essentially an upgrade of the grandpa __MPEG__. 

Both the Trondheim and the UiO portal are equipped with two very good cameras: the _Logitech Pro_ and _Minrray PTZ_, both supporting AVC. The Minrray PTZ camera even supports the better HEVC (too bad Zoom doesn’t support it). 

Once a semester or so, for our awesome telematic performances, we need to set up a stream that feeds several camera perspectives (and audio!) to the Internet, mostly to Youtube. For this we use __OBS Studio__ – which also uses AVC. For a transport protocol, it uses __SRT (Secure Reliable Transport)__ – open source streaming protocol that enables encryption and utilizes packet recovery to maintain high quality over unreliable networks without compromising latency. 

__Video Latency in the MCT Portals__

<figure style="float: auto">
   <img src="/assets/image/2021_11_15_alena_2_way_latency_zoom.jpg" alt="" title="Testing 2 way connection latency" width=auto/> <figcaption>Testing 2-way connection over zoom</figcaption>
</figure>
<figure style="float: auto">
   <img src="/assets/image/2021_11_15_alena_3_way_latency_google_meet.jpg" alt="" title="Testing 3 way connection latency" width=auto/> <figcaption>Testing 3-way connection over Google Meet</figcaption>
</figure>

Using a fun method of filming a web clock from more locations and then calculating the time difference, we tested some actual latencies:

<figure style="float: auto">
   <img src="/assets/image/2021_11_15_alena_mct_portals_video_latencies.JPG" alt="" title="Video latencies tested in the MCT portals" width=auto/> <figcaption>Video latencies tested in the UiO and NTNU portal</figcaption>
</figure>
 
What is this telling us? Firstly, __the latency between Trondheim and Oslo is not _that_ terrible!__ And secondly, even in the same room there’s latency to consider. 

### Closing remarks

Remember, when working with video latency, to:
-	 choose hardware that is engineered to keep latency as low as possible even when using a standard internet connection;
-	choose equipment that supports high efficiency video codecs;
-	make sure the transport protocols are suitable for your task;
-	find the balance between latency, picture quality and bandwidth depending on the use case.

If you’re searching for __inspiration for another latency test__ consider this use cases: during one of our MCT courses you need to use several camera perspectives: one for the lecturer, one for the class, one for the mixer view. Calculate the video latencies (and perhaps also video quality) between all cameras and compare them. Based on your findings decide which cameras should be placed where. Hint: perhaps it is more important to have a high quality stream of the mixer view rather than the other angles… 

As a last thought… have you considered that __latency can be a good thing__? For example to prevent obscenities from airing, for live subtitling, or closed captioning. 

Congratulations to all MCT students and teacher that set up our portals – despite our constant complaining the “worst” latency was still _under 50 ms_! Great job!

#### References and further reading
Eberlein, P. (n.d.). Understanding Video Latency. U.S. Tech. http://www.us-tech.com/RelId/1490479/ISvars/default/Understanding_Video_Latency.htm
Haivision. (n.d.). The Essential Guide to Video Encoding: From Video Compression and Codecs, to Latency and Transport Protocols. Retrieved November 1, 2021 from https://www.haivision.com/resources/white-paper/the-essential-guide-to-low-latency-video-streaming/
Nikols, L. (2021). Video Encoding Basics: What is Latency and Why Does it Matter? Haivision. https://www.haivision.com/blog/all/video-encoding-basics-video-latency/
Ubik, S, & Pospíšilík, J. (2021). Video Camera Latency Analysis and Measurement. IEEE Transactions on Circuits and Systems for Video Technology, vol. 31, no. 1, pp. 140-147, doi: 10.1109/TCSVT.2020.2978057.
Wowza Media Systems. (2021). What Is Low Latency and Who Needs It? (Update). https://www.wowza.com/blog/what-is-low-latency-and-who-needs-it
