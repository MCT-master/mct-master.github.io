---
layout: post
title: "Exploration of 5G networks for Networked Musical Performances"
date: 2022-11-27 08:00:00 +0200
categories: applied-project
author: Arvid Falch, Jakob Høydal, Joachim Poutaraud, Kristian Wentzel, Sofía González
image: /assets/image/2022_11_27_joachipo_p2p.jpg
excerpt: "A latency optimization methodology for NMP."
keywords: Telenor, Network, 5G
---

## Introduction
The objective we had when carrying out this Network Music Performance (NMP) was to test the latency of Telenor’s 5G network so as to find out whether currently musicians could use 5G to execute this type of performance. In order to do that, we first needed to optimize the latency with the factors under our control: finding the best configuration that would lower or just not add latency. We tested different networks, settings and distances to prepare. Finally, we travelled to Telenor Fornebu and, more specifically, to their magnificent villa, did the final tests and experimented with our music performance.

<figure style="float: none">
   <img src="/assets/image/2022_11_27_joachipo_harelokken.jpg" alt="Telenor Villa Hareløkken" title="" width="auto" />
   <figcaption><i>Telenor Villa Hareløkken</i></figcaption>
</figure>


## Telenor 5G Experimental
As a concluding part of our test phase, we spent the two days at the Telenor Testbed doing measurements on the experimental 5G network as well as preparing for the final NMP. We were eager to test the possibilities (and limits) of a closed-off version of the 5G network, in which you have all the network bandwidth you could ever wish for available for yourself. Sadly, the experimental network was not yet stable enough for a NMP, as the connection lasted about 40 seconds before disappearing for 20 seconds. We hope to be invited back when it’s up and running!

<figure style="float: none">
   <img src="/assets/image/2022_11_27_joachipo_villa.jpg" alt="Testing Telenor 5G Experimental network" title="" width="auto" />
   <figcaption><i>Testing Telenor 5G Experimental network</i></figcaption>
</figure>




## Latency

We conducted a total 144 audio test over different network configurations. The main network configurations were:
* Ethernet
* WiFi (LAN)
* Commercial 5G
* Telenor 5G experimental

For each network configuration we tested three different sample rates (44kHz, 48kHz and 96kHz), with different buffer sizes (64, 128, 256, 512, 1024). The latency was measured in RoundTrip Time (RTT).   
The values obtained from testing with ethernet was considered as our baseline, which enables us to show just how much latency each different network configuration and setup adds. 

<figure style="float: none">
   <img src="/assets/image/2022_11_27_arvidf_added_latency.jpg" alt="Added latency compared to ethernet baseline" title="" width="auto" />
   <figcaption><i>Added latency compared to ethernet baseline</i></figcaption>
</figure>

The commercial 5G causes latency way above what is considered acceptable for a NMP, while the Telenor 5G Experimental delivers promising results in terms of latency.

## Example audio quality with packet loss

Besides of latency, the quality of the audio can be affected by the network transmission. The following examples are taken from 5G commercial network tests between Oslo and Svalbard. When packet loss affects the audio quality to this extent latency itself is not the only problem. Notice how it improves as the buffer size increases.

**Buffer size 64**

<div class="waveform" id="buffer64"></div>

**Buffer size 128**

<div class="waveform" id="buffer128"></div>

**Buffer size 256**

<div class="waveform" id="buffer256"></div>

## Network Music Performance over 5G


On basis of the test results with the Telenor’s commercial and experimental 5G, the commercial network was chosen for the Networked Music Performance (NMP) even though latency was significantly higher, due to dropout problems with the experimental network.

We used a Master Slave Approach (MSA) since the latency was greater than 25ms. This approach is a compromise for conventional rhythmical music, where one performer (Master) ignores the return signal from the other performer (Slave), as illustrated in the figure below. It can be hard for for the master and slave to be in musical sync, since the master has such a high latency back to them. It is also important that the master can perform independent form the slave.



<figure style="float: none">
   <img src="/assets/image/2022_11_28_jakobhoydal_master-slave_approach.png
" alt="Telenor Villa Hareløkken" title="" width="auto" />
   <figcaption><i>Master-Slave approach</i></figcaption>
</figure>

Clicks and pops were audible but can be acceptable when practicing or doing a small showcase. It is not pleasant to listen to a concert with constant popping. This ocurred due to the low buffersize in JackTrip. A higher buffersize will increase latency, but improve quality. Nonetheless, latency could have been further lowered on the experimental network at 48kHz sample rate, 128 bffer size. 


<figure style="float: none">
  <video width="auto" controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/video/2022_11_27_jakobhoydal_5Gnmp-Song1.mp4" type='video/mp4'>
  </video>
</figure>

<figure style="float: none">
  <video width="auto" controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/video/2022_11_27_jakobhoydal_5gnmp-song2.mp4" type='video/mp4'>
  </video>
</figure>

## Conclusion

The next generation of mobile communication - 5G can be used for network music performances. But the commercial standard today lacks the required low latency needed for communication without applying Master Slave Approaches or Latency Accepting Approaches. Telenor’s experimental 5G network performs much better than the commercial network in terms of latency and jitter, but it is too unstable to be used for an extended time.

It is clear that the experimental network has advantages in comparison to the commercial network. A comparison between Oslo-Oslo vs. Oslo-Svalbard shows that it is the RANs contributes the most to the latency in the total system, and not the transport layer of the 5G network.

<figure style="float: none">
   <img src="/assets/image/2022_11_28_jakobhoydal_Telenor5GTeams.jpg" alt="Telenor Villa Hareløkken" title="" width="auto" />
   <figcaption><i>The team. From left to right: Kristian Wentzel, Joachim Poutaraud, Jakob Høydal, Arvid Falch,  Sofía González</i></figcaption>
</figure>


## Additional ressources
Source code for streaming audio over UDP and monitoring latency is available here: [https://github.com/joachimpoutaraud/udp-audio-stream-latency](https://github.com/joachimpoutaraud/udp-audio-stream-latency).



<!-- END OF BLOG POST -->

<script src="https://unpkg.com/wavesurfer.js@5.0.1/dist/wavesurfer.js"></script>

<script>

const myAudio = [
    {
        path: "/assets/audio/2022_11_27_arvidf_64buffer.mp3",
        anchor: "buffer64",
        color: "#ffa600",
        alert: false,
    },
    {
        path: "/assets/audio/2022_11_27_arvidf_128buffer.mp3",
        anchor: "buffer128",
        color: "#ffa600",
        alert: false,
    },
    {
        path: "/assets/audio/2022_11_27_arvidf_256buffer.mp3",
        anchor: "buffer256",
        color: "#ffa600",
        alert: false,
    }
];

const addPlayText = (sample) => "Play" + (sample.alert ? "  ⚠️" : "");

myAudio.forEach((sample) => {
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






