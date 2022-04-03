---
layout: post
title: "Networked Music Performances over 5G - Will It Actually Work? (part 1)"
date: 2022-04-02 12:00:00 +0200
categories: portal
author: Aleksander Tidemann
image: /assets/image/2022_04_01_aleksati_5g_telenor_logo.png
keywords: networked music performances, telematic music, 5g network, Telenor Research, Lola, Jacktrip, audio and video latency
excerpt: "We did a small experiment to test the feasibility of using 5G networks for live networked music performances. Here are the preliminary results."
---

5G is the new paradigm of telecommunication and wireless networking. But what is so great about 5G? For most users, the biggest difference from 4G to 5G will be a massive increase in network bandwidth, or sheer internett speed. Norwegian telecommunication companies like [Telenor](https://www.telenor.no/5g/) and [Telia](https://www.telia.no/nett/5g/) frequently advertise the anticipated speed of 5G, promising a mobile network that can accommodate activities such as remote-controlled surgery from afar, distributed sporting events and even networked music performances (NMP).

<figure style="float: none">
   <img src="/assets/image/2022_04_01_aleksati_5g_telenor_logo.png" 
   alt="logo" 
   title="logo"
   width="80%" />
   <figcaption>replace with Telenor commercial</figcaption>
</figure>

Based on years of experience, we at [MCT](https://www.uio.no/english/studies/programmes/mct-master/) are naturally skeptical to promises of stable musicking over any sort of network. The most important reason for this is that NMPs have exceptionally high demands for low-latency communication (**SOURCE**). Usually, we don't pay much attention to the latency we experience online in everyday life. However, doing synchronous and more interactive activities over the network requires sensitivity and precision that only specialized systems can provide. The research tells us that the minimum roundtrip latency (back and forth) to conduct meaningful NMPs is 25-30ms for audio and 125-200ms for video (**SOURCE**). For perspective, this is how 25 and 30ms of audio delay sounds like:

`25ms delay:`

<div class="waveform" id="source"></div>

<br>

`30ms delay:`

<div class="waveform" id="target"></div>

<br>

Fortunately, in late 2019, Telenor Research reached out to collaborate with us and to see if their network could accommodate our demands, further exploring NMP applications of their 5G network. For the experiment, they sent a couple of custom-configured routers to use on a limited 5G network (more on this in a bit). In this post, we present our first technical experiments/experiences with the network, testing the feasibility of using 5G for live NMPs.

# Experiment Setup

It's important to clarify that the mobile network we investigated in this experiment was not the "real" 5G network. But what do I mean by this? Well, the 5G infrastructure has yet to be properly rolled out for commercial use in most of Norway. Therefore, to do our experiment, we had to make use of specially configured routers, essentially testing 5G broadband technology on a 4G system. So when we refer to the _5G network_ in this article, we really mean a limited network that is maybe representative of about 1/3 or 2/3 of 5G's true capacity.

Telenor sent us two Huawei MBB Pilot 5G Routers that were configured to give us access to specific nearby packet-routing servers that, in theory, should have allowed for faster communication between our machines.

<figure style="float: none">
   <img src="/assets/image/2022_04_01_aleksati_5g_telenor_modems_outside_salen1.jpg" alt="5g_telenor_modems_outside_salen2" title="5g_telenor_modems_outside_salen2" width="80%" />
   <figcaption>Two Huawei MBB Pilot 5G Routers and a technician in action outside the Department of Musicology at UiO.</figcaption>
</figure>

## Time, Place and Coverage

The experiments were carried out on March 30th, 2022, between 10am-3pm, at the Department of Musicology, University of Oslo. We got good estimates of the network reception using the routers' own location-optimizing software, and Telenor's [online coverage map](https://www.telenor.no/dekning/#dekningskart). Since the 5G reception inside our department was quite poor, we placed the routers outside further south of our department, closer to the NRK building. Here, we managed to get a pretty stable 75% coverage rate with the devices placed at 1.5 meters distance from each other.

<figure style="float: left">
    <div style="display:flex;">
        <div>
            <img src="/assets/image/2022_04_01_aleksati_5g_telenor_modem_coverage.png" alt="5g_telenor_modems_outside" title="5g_telenor_modems_outside" width="96%" />
        </div>
        <div>
            <img src="/assets/image/2022_04_01_aleksati_5g_telenor_coverage.jpg" alt="5g_telenor_coverage" title="5g_telenor_coverage" width="auto"/>
        </div>
    </div>
    <figcaption> Coverage report from our location outside IMV at UiO. Screenshot from the routers location-optimizing software to the left, and the Telenor coverage map of the Musicology department to the right. With borderline 5G coverage at our department, putting the routers outside helped boost the reception. Visit our exact router coordinates <a href="https://goo.gl/maps/VJXb1KhEBAaPhz4x6">here</a>.</figcaption>
</figure>

## Hardware and Software

Besides the Huawei routers, we used our own pair of custom built systems for NPMs, namely our _Lola racks_. These hardware racks are essentially bundles of high-end software, audio/video peripherals and networking tools which can provide the lowest possible latency on audio/video transmissions over the network, given that all other the pieces of the puzzle are correct.

Full documentation and more detailed info about these _Lola racks_ will be avaliable at our GitHub soon:

- [https://github.com/MCT-master/NMP-Portable-Kits](https://github.com/MCT-master/NMP-Portable-Kits)

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_lolaracks.jpg" alt="5g_telenor_lolaracks" title="5g_telenor_lolaracks" width="80%" />
    <figcaption>A pair of Lola racks in action, custom designed to provide ultra low-latency for NMPs.</figcaption>
</figure>

The _Lola racks_ get their name from the [Lola software](https://lola.conts.it), a high-end licenced AV transmission software developed by the GARR consortium in Italy. The software requires premium GPUs, soundcards with very stable ASIO drivers (such as RME that buffer as low as 32 samples), and specialized XIMEA video cameras that send uncompressed video via USB 3 to provide ultra-low latency audio and video transmission.

In addition to Lola, we used [JackTrip](https://www.jacktrip.org), another top-grade AV transmission software developed by CCRMA at Stanford University. JackTrip is audio-only and enables us to use more "normal" equiptment and paramteres to transmit uncompressed audio over the network, which in turn enables us to tolerate more jitter in the network.

# Method

To test the feasibility of using 5G networks for live NMPs, we need to find the best tradeoff between technical stability, quality and latency. Having low latency does not mean the quality of the AV signal is usable, and vice versa. Therefore, to do this, we did three principal investigations.

## 1. Measuring the Bandwidth

By using network utility Ping and [online network speed testing](https://www.speedtest.net/) we were able to make bandwidth measurements and ping time estimates throughout the experiment to ensure that our load did not exceed the capacity of the network.

## 2. Finding the Sweet Spot

Finding the "sweet-spot" refers to finding the right software and hardware parameters such that we guarantee stable and glitch-free transmission of audio and video over the network. We fine-tuned our system by sending a constant stream of audio and video back and forth between the _Lola racks_ on the 5G network. With this, we were able to monitor the AV quality in real-time and fine-tune our parameter to acheive a glitch-free and stable transmission.

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_sweetspot_method.jpg" alt="5g_telenor_sweetspot_method" title="5g_telenor_sweetspot_method" width="auto" />
    <figcaption>Routing diagram for finding AV sweet spots. By looping back the signal to its source, we could monitor the entire system chain for jitter, noise and other unwanted artifacts.</figcaption>
</figure>

For the audio, we sent 2 channels of 16bit 48kHZ uncompressed audio over the network and adjusted the internal buffer/sample size to find the lowest possible number that ensured stable audio transmission over a significant period (maybe 10minutes total). For video, we used a similar a approach; adjusting the framerate, compression amount, and video resolution to find the sweet spot.

## 3. Measuring the Latency

With the software and hardware parameters fine-tuned, we could now measure the audio and video latency with a similar system routing.

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_latency_method.jpg" alt="5g_telenor_latency_method" title="5g_telenor_latency_method" width="auto" />
    <figcaption>Routing diagram for measuring the audio latency. By using a similar loopback approach, we are able to send and receive audio impulses over the network and measure the roundtrip time.</figcaption>
</figure>

To make the audio latency measurements, we used a third system (laptop with a designated audio interface) that sent and received audio from the one of the _Lola racks_. To avoid dealing with any unwanted internal system latency, we closed output 2 to input 1 on the laptop soundcard. Identical audio signals were then sent to outputs 1 and 2 so we could measure the latency of our external system by looking at the temporal offset between input 1 and 2. In addition, by using the `-x1` argument in jackTrip we were able to measure only the audio latency over the network, bypassing the latency cause by introducing a third system.

<figure style="float: left">
    <div style="display:flex;">
        <div>
            <img src="/assets/image/2022_04_01_aleksati_5g_telenor_latency_third_laptop_routing.png" 
            alt="5g_telenor_latency_third_laptop_routing" 
            title="5g_telenor_latency_third_laptop_routing" 
            width="auto%" />
        </div>
        <div>
            <img src="/assets/image/2022_04_01_aleksati_5g_telenor_video_latency_routing.png" 
            alt="5g_telenor_video_latency_routing" 
            title="5g_telenor_video_latency_routing" 
            width="95%"/>
        </div>
    </div>
    <figcaption>Additional routing diagrams of our latency measurement setup. On the left, the third system for measuring the audio latency. On the right, the general idea behind the video latency measurement.</figcaption>
</figure>

For video, we took advantage of the fact that our two Lola racks were in the same room. We sent a XIMEA video feed from one computer to the other (over the 5G network) and displayed both images in full-screen on the two PC monitors. Then, we filmed the two screens with a secondary camera and produced an appropriate excitation (a clap) in front of the XIMEA camera. The footage from the secondary camera was used to reveal the video latency by counting the number of frames of delay between the two monitors.

# Results

## Bandwidth

Our speed testing results varied throughout the experiment, but multiple tests on two different servers showed an average of around 400Mbps download speed, 60Mbps upload speed, and a ping time of about 30-40ms (between one machine and the server). This indicates that transmitting, for instance, 16bit uncompressed audio at 48Khz, which requires 1.5Mbps bandwidth per channel, should be no problem. However, adding video would render us closer to the 100Mpbs/1GB range where things could get interesting. The latency results revealed an average network utility ping time of 130-200ms between our two machines, which is was more concerning.

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_speedtest.png" alt="5g_telenor_speedtest" title="5g_telenor_speedtest" width="80%" />
    <figcaption>Representative speed test between the Department of Musciology, UiO and a server in Oslo through a Huawei MBB Pilot 5G Router on a limited 5G network.</figcaption>
</figure>

## Sweet Spot

## Latency

With NMPs, its
Important to explore the best tradeoff between stability/quality and latency

We only got decent result using 512 buffer size. That was the lowest buffersize we could used that sufficiently tolerated the network jitter. Otherwise, the system would be completely unusable due to massive dropouts. Again, we are only intereted in what actually works, practically.

Tuning buffers in Lola helped, but did not work ..

audio roundtrip was 165ms. very stable. one-way latency
the network roundtrip was 95-100ms.

Give an audio example of 165 ms of audio (just use Max)

Video was better. we got a decent result using ..
adjust video buffer
Latency of 116ms for video.
Show the video

# In Summary

With the ultimate goal being if 5G one day can fully support a wide variety of NMPs over their mobile network.

The bare minimum technical necessity of doing a NMP is to have stable AV connection between two locations.
Meaning a pleasent and contonous stream of audio and video.

Important to stress the fact that without a rock solid network connection with ultra-low latency, live networked music rehersals/performances/events are unlikely to have any serious commercial application.

In terms of the strategies? Could it work? Maybe..

Lots of restrictions..

However, we only tested a fake version.

The idea now is to test on an actual 5g network. In theory, it should produce better results. utilizing the power of the entire 5g System Architecture.

Going forward, this needs to be examined.

In my personal option; a stable and high-bandwidt system with a roundtrip latency less than 50ms would be measure of a success.

Considering the limitations of wireless telecommunication systems.

# Going Forward

# References

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

const audioSamples = [
    {
        path: "/assets/audio/2022_04_01_aleksati_25ms_delay_demo.mp3",
        anchor: "source",
        color: "#ffa600",
        alert: false,
    },
     {
         path: "/assets/audio/2022_04_01_aleksati_30ms_delay_demo.mp3",
         anchor: "target",
         color: "#328d78",
         alert: false,
     }
];

const addPlayText = (sample) => "Play" + (sample.alert ? "  ⚠️" : "");

audioSamples.forEach((sample) => {
    const id = sample.anchor;
    const waveformDiv = document.querySelector("#" + id);

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
