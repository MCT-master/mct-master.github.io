---
layout: post
title: "Networked Music Performances over 5G - Will It Work? (part 1)"
date: 2022-04-02 12:00:00 +0200
categories: portal
author: Aleksander Tidemann
image: /assets/image/2022_04_01_aleksati_5g_telenor_logo.png
keywords: mct, uio, networked music performances, telematic music, 5g, Telenor Research, Lola, Jacktrip, audio latency, video latency
excerpt: "In collaboration with Telenor Research, we have begun to test the feasibility of using 5G for networked music performances. Here are the preliminary results."
---

5G is the new paradigm of telecommunication and wireless networking. But what is so great about 5G? For most users, the biggest difference from 4G to 5G will be a massive increase in network bandwidth. Norwegian telecommunication companies like [Telenor](https://www.telenor.no/5g/) and [Telia](https://www.telia.no/nett/5g/) frequently advertise the anticipated speed of 5G, promising a mobile network that can accommodate activities such as remote-controlled surgery from afar, distributed sporting events and even networked music performances (NMP).

<!-- <figure style="float: none">
   <img src="/assets/image/2022_04_01_aleksati_5g_telenor_logo.png"
   alt="logo"
   title="logo"
   width="80%" />
   <figcaption>replace with Telenor commercial</figcaption>
</figure> -->

At [MCT](https://www.uio.no/english/studies/programmes/mct-master/), we are naturally skeptical to promises of stable musicking over any sort of network. The most important reason for this is that NMPs have exceptionally high demands for low-latency communication (**SOURCE**). Research tells us that the minimum roundtrip latency (back and forth) needed to conduct meaningful NMPs is around 25-30ms for audio and 125-200ms for video (**SOURCE**). For some perspective, this is what a 30ms delay sounds like (from left to right ear):

<div class="waveform" id="thirtymsdemo"></div>

<br/>

Fortunately, Telenor Research was interested in collaborating with us to explore the possibility of doing NMPs on 5G. Telenor is currently involved in multiple EU-funded projects that, in part, explore the application of 5G on NMPs, including [Fudge5G](https://fudge-5g.eu/en) and [5GMediaHub](https://www.5gmediahub.eu/). To start, Telenor sent us a couple of routers to use on their first-generation 5G network (more on this in a bit). In this post, we present the results from our first experiments, including the **speed**, **stability**, and **latency** of audio/video transmission over a 5G network.

# Experiment Setup

It's important to clarify that our experiments were conducted on a first-generation 5G network, or what is also called a _non-standalone core network_ (NSA). To oversimplify things, we can think about NSA as 5G bandwidth on a 4G infrastructure. This means that our results are not representative of a fully-fledged 5G network. However, Telenor configured our routers to access specific _access point names_ (APNs). This configuration enabled p2p connectivity between our machines with faster packet routing. For the experiment, we used two Huawei MBB Pilot 5G Routers.

<figure style="float: none">
   <img src="/assets/image/2022_04_01_aleksati_5g_telenor_modems_outside_salen1.jpg" alt="5g_telenor_modems_outside_salen2" title="5g_telenor_modems_outside_salen2" width="80%" />
   <figcaption>Two Huawei MBB Pilot 5G Routers, and a technician, in action outside the Department of Musicology, UiO.</figcaption>
</figure>

## Time, Place and Coverage

The experiments were carried out on March 30th, 2022, between 10am-3pm, at the Department of Musicology, University of Oslo. We got good estimates of the network reception using the routers' own location-optimizing software, and Telenor's [online coverage map](https://www.telenor.no/dekning/#dekningskart). Since the 5G reception inside our department was quite poor, we placed the routers outside and further south of our department. Here, we managed to get a pretty stable 75% coverage rate with the devices placed approximately at 1.5 meters distance from each other.

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

## Hardware and Software

Besides the Huawei routers, we used a pair of custom built NMP rack systems, namely our _Lola racks_. These hardware modules are essentially bundles of high-end software, audio/video peripherals and networking tools which can provide the lowest possible latency on audio/video transmissions over the network, given that all other the pieces of the puzzle are correct.

Full documentation and more detailed info about these kits can (or will) be found on our GitHub:

- [https://github.com/MCT-master/NMP-Portable-Kits](https://github.com/MCT-master/NMP-Portable-Kits)

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_lolaracks.jpg" alt="5g_telenor_lolaracks" title="5g_telenor_lolaracks" width="80%" />
    <figcaption>A pair of Lola racks in action, custom designed to provide ultra low-latency for NMPs.</figcaption>
</figure>

The _Lola racks_ get their name from the [Lola software](https://lola.conts.it), a high-end licenced AV transmission software developed by the GARR consortium in Italy. The software requires premium GPUs, soundcards with very stable ASIO drivers (such as RME that buffer as low as 32 samples), and specialized XIMEA video cameras that send uncompressed video via USB 3 to provide ultra-low latency audio and video transmission.

In addition to Lola, we used [JackTrip](https://www.jacktrip.org), another top-grade AV transmission software developed by CCRMA at Stanford University. JackTrip is audio-only but enables us to use more "normal" equiptment and paramteres to transmit uncompressed audio. Therefore, jackTrip enables us to tolerate more network jitter than Lola.

# Method

To test the feasibility of using 5G networks for live NMPs, we need to locate the best tradeoff between technical stability, quality and latency. Having low latency does not mean the quality of the AV signal is usable, and vice versa. We did three principal experiments to investigate this.

## 1. Measuring the Bandwidth

By using an [online network speed testing](https://www.speedtest.net/), we were able to quickly make bandwidth estimates throughout the experiment, ensuring that our load did not exceed the capacity of the network.

## 2. Finding the Sweet Spot

To find the best tradeoff between technical stability and quality, we configured a loopback between our two _Lola racks_ and sent constant streams of audio and video over the network. With this, we were able to monitor the AV quality of our transmission in real-time and fine-tune parameters to acheive a glitch-free and stable state.

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_sweetspot_method.jpg" alt="5g_telenor_sweetspot_method" title="5g_telenor_sweetspot_method" width="auto" />
    <figcaption>Routing diagram for our sweet spot test. Each side of the network represents a Lola rack. By creating a loopback system, we could monitor the entire chain for jitter, noise and other unwanted artifacts.</figcaption>
</figure>

For the audio, we sent 2 channels of 16bit 48kHZ uncompressed audio and mostly adjusted the internal buffer/sample size to find the lowest possible number that ensured stable audio transmission over a significant period (maybe 10minutes total). For video, we used a similar a approach, only adjusting the framerate, compression amount, and video resolution to find the sweet spot.

## 3. Measuring the Latency

With the software and hardware parameters fine-tuned, we could now measure the audio and video latency with a similar loopback system routing:

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_latency_method.jpg" alt="5g_telenor_latency_method" title="5g_telenor_latency_method" width="auto" />
    <figcaption>Routing diagram for measuring the audio latency. By using a loopback approach, we can measure the round-trip latency of NMP systems from a single location.</figcaption>
</figure>

### Audio Latency

For measuring the audio latency, we conducted two test using both JackTrip and Lola:

- **Digital round-trip time (digital RTT)**

For digital RTT we measured the audio latency when sending an impulse from one Pc to the other, and back again. With this method, we effectively bypass the external soundcards and mixers. This gives us a good understanding of the RTT for uncompressed audio just over the network. We used jackTrip to establish a client-server connection between the two machines. Then, by using the `-x1` argument client-side, we were able to record the latency.

- **Analog round-trip time (analog RTT)**

For analog RTT we measured the latency for audio to travel back and forth through the entire system. We used another laptop with a designated audio interface to make these measurements. From this secondary soundcard, we sent audio impulses to the _Lola racks_ from output 1 and received the signal back again on input 1. For reference points, we closed output 2 to input 2 on the soundcard and sent identical audio impulses to outputs 1 and 2. Then, in software, we measured the analog RTT by looking at the temporal offset between inputs 1 and 2.

<figure style="float: none">
<img src="/assets/image/2022_04_01_aleksati_5g_telenor_latency_third_laptop_routing.png" 
    alt="5g_telenor_latency_third_laptop_routing" 
    title="5g_telenor_latency_third_laptop_routing" 
    width="90%" />
    <figcaption>Routing diagram of our secondary system for measuring the analog RTT. The laptop sends a short impulse to both outputs on the audio interface and records both inputs. The time difference between input 1 and 2 is the RTT.</figcaption>
</figure>

### Video Latency

For video, we took advantage of the fact that our two _Lola racks_ were in the same room. We sent a video feed from the Ximea camera through Lola over the network and displayed both images in full-screen on the computer monitors. We filmed the two monitors with a secondary camera before doing some simple claps 👏 in front of the Ximea camera feed. Then, we used the footage from the secondary camera to reveal the video latency by counting the number of frames of delay between the two monitors.

<figure style="float: none">
     <img src="/assets/image/2022_04_01_aleksati_5g_telenor_video_latency_routing.png" 
        alt="5g_telenor_video_latency_routing" 
        title="5g_telenor_video_latency_routing" 
        width="90%"/>
    <figcaption>Routing diagram of our video latency measurement.</figcaption>
</figure>

# Results

## Bandwidth

At our position, the network speed results averaged at around 400Mbps for download and 60Mbps for upload. This indicates that transmitting 16bit uncompressed audio at 48Khz, which requires 1.5Mbps of bandwidth, was no problem. However, adding video would render us closer to the 100Mpbs/1GB range where things could get interesting.

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_speedtest.png" alt="5g_telenor_speedtest" title="5g_telenor_speedtest" width="80%" />
    <figcaption>Representative speed test between two machines at UiO, connected to a first-generation 5G network through two Huawei MBB Pilot 5G Routers.</figcaption>
</figure>

## Sweet Spot

## Audio Latency

**JackTrip**

| Sampling Rate | Buffersize | Digital RTT | Analog RTT |
| ------------- | ---------- | ----------- | ---------- |
| 48Khz         | 512        | 95-100ms    | **165ms**  |

<div class="waveform" id="hundredandsixtyfivemsdemo"></div>

<br/>

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
