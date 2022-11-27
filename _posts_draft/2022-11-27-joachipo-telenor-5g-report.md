---
layout: post
title: "5G networks for Networked Musical Performances (NMP)"
date: 2022-11-27 08:00:00 +0200
categories: portal
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


<figure style="float: none">
  <video width="auto" controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/video/2022_11_27_jakobhoydal_5Gnmp-Song1.mp4" type='video/mp4'>
  </video>
</figure>

<figure style="float: none">
  <video width="auto" controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/video/2022_11_27_jakobhoydal_5Gnmp-Song2.mp4" type='video/mp4'>
  </video>
</figure>

## Example audio quality with packet loss

The following examples are taken from 5G commercial network tests between Oslo and Svalbard.

**Buffer size 64**

<div class="waveform" id="64_buffer"></div>

**Buffer size 128**

<div class="waveform" id="128_buffer"></div>

**Buffer size 256**

<div class="waveform" id="256_buffer"></div>


## Additional ressources
Source code for streaming audio over UDP and monitoring latency is available here: [https://github.com/joachimpoutaraud/udp-audio-stream-latency](https://github.com/joachimpoutaraud/udp-audio-stream-latency).

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
        path: "/assets/audio/2022_05_19_arvidf_256buffer.mp3",
        anchor: "256_buffer",
        color: "#ffa600",
        alert: false,
    },
    {
        path: "/assets/audio/2022_11_27_arvidf_128buffer.mp3",
        anchor: "128_buffer",
        color: "#328d78",
        alert: false,
    },

    {
        path: "/assets/audio/2022_11_27_arvidf_64buffer.mp3",
        anchor: "64_buffer",
        color: "#D93821",
        alert: false,
    },



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
