---
layout: post
title: "Networked Music Performances over 5G - Will It Work?"
date: 2022-04-02 12:00:00 +0200
categories: portal
author: Aleksander Tidemann
image: /assets/image/2022_04_01_aleksati_5g_telenor_logo.png
keywords: mct, uio, networked music performances, telematic music, 5g, telenor research, lola, jacktrip, audio latency, video latency
excerpt: "In collaboration with Telenor Research, we tested the feasibility of using 5G for networked music performances. Here are the preliminary results."
---

5G is the new paradigm of telecommunication and wireless networking. But what is so great about 5G? For the average user, the biggest difference from 4G to 5G will be a massive increase in speed (bandwidth). In reality, 5G is an entirely new networking infrastructure. This is one reason why there are so many high expectations of 5G. We imagine remote-controlled surgery from afar, distributed sporting events, and even stable networked music performances (NMP).

At [MCT](https://www.uio.no/english/studies/programmes/mct-master/), we have years of experience with conducting and experimenting with NMPs. One of the biggest challenges with playing music over the network is the exceptionally high demand for low-latency communication <small>[1] [2] [3]</small>. In fact, research tells us that the minimum roundtrip latency (back and forth between two locations) needed to conduct meaningful NMPs is around 25-30ms for audio and 125-200ms for video <small>[4]</small>. For some perspective, this is what a 30ms delay sounds like (from left to right ear):

<div class="waveform" id="thirtymsdemo"></div>

<br/>

In late 2021, we got in touch with [Telenor Research](https://www.telenor.com/innovation/research/) to explore the feasibility of conducting NMPs over 5G. Telenor is currently involved in multiple EU-funded projects that, in part, explore the application of 5G with NMPs, including [Fudge5G](https://fudge-5g.eu/en) and [5GMediaHub](https://www.5gmediahub.eu/).

<!-- Add that we did it in two locations -->

To start, Telenor sent us a couple of routers to use on their first-generation 5G network. In this post, we present the results from our first experiment, including the **speed**, **stability**, and **latency** of audio/video transmission over a 5G network.

# Experiment Setup

<!-- We did two experiments at two different locations.. remove the time, place and coverage heading -->

It's important to clarify that these experiments were conducted on a first-generation 5G network, also called a _non-standalone_ (NSA) core network. To oversimplify things, we can think about NSA as 5G bandwidth on a 4G infrastructure. This means that our results are not representative of a fully-fledged 5G network, or a _standalone_ (SA) core network. However, Telenor was nice enough to configure our routers to access specific _access point names_ (APNs). This configuration enabled peer-2-peer connectivity between our machines with faster packet routing. For the experiment, we used two Huawei MBB Pilot 5G Routers.

<figure style="float: none">
   <img src="/assets/image/2022_04_01_aleksati_5g_telenor_modems_outside_salen1.jpg" alt="5g_telenor_modems_outside_salen2" title="5g_telenor_modems_outside_salen2" width="80%" />
   <figcaption>Two Huawei MBB Pilot 5G Routers, and a technician, in action outside the Department of Musicology, UiO.</figcaption>
</figure>

<!-- Insert picture of the van and setup -->

## Time, Place and Coverage

The experiments were carried out on March 30th, 2022, at the Department of Musicology, University of Oslo. We got good estimates of the network reception using the routers' own location-optimizing software, and Telenor's [online coverage map](https://www.telenor.no/dekning/#dekningskart). Since the 5G reception inside our department was quite poor, we placed the routers outside and further south of our department. Here, we managed to get a pretty stable 75% coverage rate with the devices placed approximately at 1.5 meters distance from each other.

<figure style="float: left">
    <div style="display:flex;">
        <div>
            <img src="/assets/image/2022_04_01_aleksati_5g_telenor_modem_coverage.png" alt="5g_telenor_modems_outside" title="5g_telenor_modems_outside" width="96%" />
        </div>
        <div>
            <img src="/assets/image/2022_04_01_aleksati_5g_telenor_coverage.jpg" alt="5g_telenor_coverage" title="5g_telenor_coverage" width="auto"/>
        </div>
    </div>
    <figcaption> Coverage report from our location at UiO. Screenshot from the routers location-optimizing software to the left, and the Telenor coverage map of the Musicology department to the right. With borderline 5G coverage at our department, putting the routers outside helped boost the reception.</figcaption>
</figure>

<!-- Second experiment -->

## Hardware and Software

Besides the Huawei routers, we used a pair of custom-built NMP rack systems, namely our _Lola racks_. These systems are essentially bundles of high-end software, audio/video peripherals and networking tools which can provide the lowest possible latency on audio/video transmissions over the network, given that all other the pieces of the puzzle are correct.

Full documentation and more detailed info about these kits can (or will) be found on our GitHub:

- [https://github.com/MCT-master/NMP-Portable-Kits](https://github.com/MCT-master/NMP-Portable-Kits)

<!-- Insert picture of us in ARmy base -->

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_lolaracks.jpg" alt="5g_telenor_lolaracks" title="5g_telenor_lolaracks" width="80%" />
    <figcaption>A pair of Lola racks in action, custom designed to provide ultra low-latency for NMPs.</figcaption>
</figure>

The _Lola racks_ get their name from the [Lola software](https://lola.conts.it), a high-end licenced AV transmission software developed at the Trieste Conservatory (Italy) in collaboration with GARR, the Italian Research and Academic Network. The software requires premium GPUs, soundcards with very stable ASIO drivers (such as RME that buffer as low as 32 samples), and specialized [Ximea video cameras](https://www.ximea.com/en/products/cameras-filtered-by-sensor-types/mq013mg-e2) that send uncompressed video via USB-3 to provide ultra-low latency audio and video transmission.

In addition to Lola, we used [JackTrip](https://www.jacktrip.org), another top-grade AV transmission software developed by CCRMA at Stanford University (USA). JackTrip is audio-only but enables us to use more "normal" equiptment and paramteres to transmit uncompressed audio. Therefore, jackTrip enables us to tolerate more network jitter than Lola.

# Method

<!-- And using iPerf! -->

Having low latency does not mean the quality of the AV signal is usable in a practical sense, and vice versa. Therefore, to test the feasibility of using 5G networks for NMPs, we sought to find the best tradeoff between technical stability, quality and latency in AV transmissions.

## 1. Measuring the Bandwidth

By using an [online network speed testing](https://www.speedtest.net/), we were able to make network bandwidth estimates throughout the experiment, ensuring that our load did not exceed the capacity of the network.

## 2. Finding the Sweet Spots

To find the best tradeoff between technical stability and quality, we sent a constant stream of audio and video over the network and looped the signal back to its source. With this, we were able to monitor the AV quality of our connection in real-time.

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_sweetspot_method.jpg" alt="5g_telenor_sweetspot_method" title="5g_telenor_sweetspot_method" width="auto" />
    <figcaption>Routing diagram for method of monitoring an entire NMP AV-chain for jitter, noise and other unwanted artifacts from a single location. Each side of the network represents a Lola rack.</figcaption>
</figure>

To fine-tune the audio, we adjusted the software and hardware buffersizes to find the lowest possible configuration that ensured stable audio transmission over a significant period (maybe 10minutes total). For video, we used a similar a approach, only adjusting the framerate, compression amount, and video resolution to find the sweet spot.

## 3. Measuring the Latency

With the software and hardware parameters fine-tuned, we could now measure the audio and video latency with a similar loopback system:

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_latency_method.jpg" alt="5g_telenor_latency_method" title="5g_telenor_latency_method" width="auto" />
    <figcaption>Routing diagram for our method of measuring the round-trip latency of NMP systems from a single location.</figcaption>
</figure>

### Audio Latency

For measuring the audio latency:

- **Digital roundtrip time (digital RTT)**

With digital RTT, we refer to the measurement of audio latency from one PC to another PC, and back again, just using software. With this method, we bypass the latency induced by our external soundcards and mixers. We used jackTrip to measure the digital RTT, using the `-x1` argument avaliable in client-side jacktrip connections to record the latency over a significant period.

- **Analog roundtrip time (analog RTT)**

With analog RTT, we refer to the measurement of audio latency through the entire chain. We used another laptop with a designated audio interface to make these measurements. From this secondary laptop/soundcard, we sent audio impulses to the _Lola racks_ from output 1 and received the signal back again on input 1. For reference, we closed output 2 to input 2 on the soundcard and sent identical audio impulses to output 2. Then, in software, we measured the analog RTT by looking at the temporal offset between inputs 1 and 2.

<figure style="float: none">
<img src="/assets/image/2022_04_01_aleksati_5g_telenor_latency_third_laptop_routing.png" 
    alt="5g_telenor_latency_third_laptop_routing" 
    title="5g_telenor_latency_third_laptop_routing" 
    width="90%" />
    <figcaption>Routing diagram of our secondary system for measuring the analog RTT. The laptop sends a short impulse to both outputs on the audio interface and records both inputs. The time difference between input 1 and 2 is the analog RTT.</figcaption>
</figure>

### Video Latency

For video, we took advantage of the fact that our two _Lola racks_ were in the same room. We used Lola to send video of me doing some simple claps 👏 to the other machine using the Ximea camera. While displaying the video feeds in full-screen on both computer monitors, we filmed the monitors with a secondary camera. Then, we used the footage from the secondary camera to determine the video latency by counting the number of frames of delay between the two monitors.

<figure style="float: none">
     <img src="/assets/image/2022_04_01_aleksati_5g_telenor_video_latency_routing.png" 
        alt="5g_telenor_video_latency_routing" 
        title="5g_telenor_video_latency_routing" 
        width="90%"/>
    <figcaption>Routing diagram of our video latency measurement method.</figcaption>
</figure>

# Results

## UiO on NSA

At our UiO location, the NSA network speed results averaged at around 400Mbps for download and 60Mbps for upload. This indicates that our transmission of 16bit uncompressed audio at 48Khz should have been no issue for the network, requiring about 1.5Mbps of bandwidth. However, adding video would render us closer to the 100Mpbs-1GB range where things could get interesting.

The transmission sweet spot for audio was achieved using buffersize of 512. Experimenting with lower buffersizes resulted in massive jitter, noise, and audio dropouts. Unfortunately, the Lola software only supports buffersizes of either 64 or 32 samples. Therefore, we used jackTrip as our main audio transmission software. The optimal audio settings were following:

| Channels | Bit Depth | Sampling Rate | Buffersize | Estimated Bandwidth |
| -------- | --------- | ------------- | ---------- | ------------------- |
| 2        | 16bit     | 48Khz         | 512        | 1.57 Mbit           |

Using the above settings, we measured a 95-100ms digital RTT and a **165ms** analog RTT. Each time the audio travels through the soundcard, it has to buffer 512 samples at 48Khz, which takes about 10ms. Doing an analog RTT measurement with our current method requires the audio to travel through the soundcard and mixers a total of 4 times. With this, we see that our two audio RRT measurements are quite consistent.

For some perspective, here is what 165ms of delay sounds like (from left to right ear):

<div class="waveform" id="hundredandsixtyfivemsdemo"></div>

<br/>

For video, we were able to use the Lola software with the Ximea low-latency cameras. After experimenting with various video settings and buffering tools, we achieve a stable transmission with minimal framedrops using the following settings:

| Resolution         | FPS | Compression                      | Estimated Bandwidth |
| ------------------ | --- | -------------------------------- | ------------------- |
| 1024x576 RGB24 bit | 60  | M-JPEG compression (quality 60%) | 25.75 Mbit          |

Using the

for video:

7 frames of latency one-way = 116ms

With NMPs, its
Important to explore the best tradeoff between stability/quality and latency

We only got decent result using 512 buffer size. That was the lowest buffersize we could used that sufficiently tolerated the network jitter. Otherwise, the system would be completely unusable due to massive dropouts. Again, we are only intereted in what actually works, practically.

Tuning buffers in Lola helped, but did not work ..

audio roundtrip was 165ms. very stable. one-way latency
the network roundtrip was 95-100ms.

Video was better. we got a decent result using ..
adjust video buffer
Latency of 116ms for video.
Show the video

## Elverum on 5G NOW

<!-- Second experiment results -->

Struggled with bandwidth and very high handshake time.
However, the latency was much better

did not have time to test video

# In Summary

**Although we are able to use video with Lola, the result was probably equally bad, we just dont see it. The threshold for acceptable video feed in NMP is much higher than audio.**

We suspect the routers.. that they buffer internally..

Also, the 5G protocol probably buffers

With the ultimate goal being if 5G one day can fully support a wide variety of NMPs over their mobile network.

The bare minimum technical necessity of doing a NMP is to have stable AV connection between two locations.
Meaning a pleasent and contonous stream of audio and video.

Important to stress the fact that without a rock solid network connection with ultra-low latency, live networked music rehersals/performances/events are unlikely to have any serious commercial application.

In terms of the strategies? Could it work? Maybe..

Lots of restrictions..

However, we only tested a fake version.

In my personal option; a stable and high-bandwidt system with a roundtrip latency less than 50ms would be measure of a success.

Considering the limitations of wireless telecommunication systems.

# Going Forward

Testing the full 5G at Fornebu.
Going forward, this needs to be examined.

# References

<small>
[1] Chafe, C., Gurevich, M., Leslie, G., & Tyan, S. (2004). Effect of Time Delay on Ensemble Accuracy. ISMA. Center for Computer Research in Music and Acoustics, Stanford University <br/> <br/>
[2] Rofe, M., & Reuben, F. (2017). Telematic performance and the challenge of latency. Journal of Music, Technology and Education, 10(2–3), 167–183 <br/> <br/>
[3] Rottondi, C., Chafe, C., Allocchio, C, Sarti A. (2016). An overview on networked music performance technologies. IEEE Access 4: 8823-8843. <br/> <br/>
[4] Younkin, A. C., & Corriveau, P. J. (2008). Determining the Amount of Audio-Video Synchronization Errors Perceptible to the Average End-User. IEEE Transactions on Broadcasting, 54(3), 623–627
</small>

<!-- END OF BLOG POST -->

<style>

.btn {
  color: #fff;
  background-color: #2c3e50;
  border-color: #2c3e50;

  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}

button:not(:disabled) {
  cursor: pointer;
}

code {
  color: #e83e8c;
  /* word-wrap: break-word; */
}

.waveform {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
}

</style>

<!-- external lib used to display waveforms -->
<!-- <script src="https://unpkg.com/wavesurfer.js"></script> -->
<script src="https://unpkg.com/wavesurfer.js@5.0.1/dist/wavesurfer.js"></script>

<script>

const myAudio = [
     {
         path: "/assets/audio/2022_04_01_aleksati_165ms_delay_demo.mp3",
         anchor: "hundredandsixtyfivemsdemo",
         color: "#ffa600",
         alert: false,
     },
    {
        path: "/assets/audio/2022_04_01_aleksati_30ms_delay_demo.mp3",
        anchor: "thirtymsdemo",
        color: "#328d78",
        alert: false,
    }
];

const addPlayText = (sample) => "Play" + (sample.alert ? "  ⚠️" : "");

myAudio.forEach((sample) => {
    const id = sample.anchor;
    const waveformDiv = document.querySelector("#" + id);

    console.log(sample);


    const playButton = document.createElement("button");
    playButton.id = "button-" + id;
    playButton.style.margin = "auto";
    playButton.classList = "btn btn-primary";
    playButton.innerText = "Play";

    const wavesurfer = WaveSurfer.create({
        container: "#" + id,
        mediaControls: true,
        height: 64,
        waveColor: sample.color,
        splitChannels: true,
    });
    wavesurfer.load(sample.path);
    wavesurfer.once("ready", () => {
        waveformDiv.appendChild(playButton);
        playButton.onclick = () => {
            wavesurfer.playPause();
            if (playButton.innerText.startsWith("Pause")) {
                playButton.innerText = "Play";
            } else if (playButton.innerText.startsWith("Play")) {
                playButton.innerText = "Pause";
            }
        };
    });
    wavesurfer.once("finish", () => {
        playButton.innerText = "Play";
    });
});

</script>
