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

In late 2021, we got in touch with [Telenor Research](https://www.telenor.com/innovation/research/) to explore the feasibility of conducting NMPs over 5G. Telenor is currently involved in multiple EU-funded projects that, in part, explore the application of 5G to music technology, including [Fudge5G](https://fudge-5g.eu/en) and [5GMediaHub](https://www.5gmediahub.eu/). During two weeks in late March 2022, we did a series of experiments on a commercial and private 5G network in collaboration with Telenor. In this post, we present these experiments in detail, explaining the technical setup, methods, and preliminary results.

# Setup

We conducted two experiments in two seperate locations at two seperate times on two different 5G networks.

1. The first experiment was carried out at the Musicology Department at the University of Oslo, on March 30th, 2022, on a **commercial 5G network**. Most commercial 5G networks today rely on a so-called Non-Stand-Alone (NSA) core network, the same as 4G. However, Telenor pre-configured our routers to access specific Access-Point-Names (APNs). This configuration enabled peer-2-peer connectivity between our machines with faster packet routing.

2. The second experiment was carried out in Elverum, close to Terningmoen Army Base, on April 4th, 2022, on a 5GNoW (Network on Wheels) solution. The 5GNoW is a **private 5G network**, Non-Public Network (NPN) that relies on a Stand-Alone (SA) core network. As we understood, the system is mostly used for experimental testing of various 5G applications.

<div class="slideshow-container" id="experiment-setup">
  <div class="mySlides fade">
    <figure style="float: none">
        <img
        src="/assets/image/2022_04_01_aleksati_5g_telenor_modems_outside_salen1.jpg"
        alt="5g_telenor_modems_outside_salen2"
        title="5g_telenor_modems_outside_salen2"
        width="auto" />
        <figcaption>Two 5G Routers and a technician in action outside the Musicology Department at UiO, ready to test the commercial NSA 5G network. </figcaption>
    </figure>
  </div>
  <div class="mySlides fade">
      <figure style="float: none">
        <img
          src="/assets/image/2022_04_01_aleksati_5g_telenor_coverage.jpg"
          alt="5g_telenor_coverage"
          title="5g_telenor_coverage"
          width="auto" />
        <figcaption>A coverage report of the commercial 5G network at our UiO location.</figcaption>
      </figure> 
  </div>
  <div class="mySlides fade">
   <figure style="float: none">
        <img
        src="/assets/image/2022_04_01_aleksati_5g_now.jpg"
        alt="5g_now"
        title="5g_now"
        width="auto" />
        <figcaption>Telenor's 5GNoW van at Terningmoen Army Base, Elverum. Photo by Olai Bendik Erdal.</figcaption>
    </figure>
  </div>
  <div class="mySlides fade">
    <figure style="float: none">
        <img
        src="/assets/image/2022_04_01_aleksati_5g_now_setup.jpg"
        alt="5g_now_setup"
        title="5g_now_setup"
        width="auto" />
        <figcaption>Our setup, approxiamtley 5 meters away from the 5GNoW antenna.</figcaption>
    </figure>
  </div>
</div>

## Hardware and Software

For both experiments, we used a pair of [Huawei H138-380 CPE Pro 3 5G Routers](https://nettbutikk.emcom.no/h138-380-cpe-pro-3-5g-ruter-4g-5g-ruter-wifi-6-2-x-lan-111560-p0000028124) to connect to the network.

To send audio and video to each other, we used MCT's own portable and custom-built NMP kits. These systems are essentially bundles of high-end software, audio/video peripherals and networking tools which can provide the lowest possible latency on audio/video transmissions over the network, given that all other the pieces of the puzzle are correct. Full documentation and more detailed info about these kits can be found on our [GitHub](https://github.com/MCT-master).

<!-- Slideshow container -->
<!-- Insert more pictures of the lola racks in action setup -->
<div class="slideshow-container" id="hardware-setup">
    <div class="mySlides fade">
        <figure style="float: none">
            <img 
            src="/assets/image/2022_04_01_aleksati_5g_telenor_lolaracks.jpg" 
            alt="5g_telenor_lolaracks" 
            title="5g_telenor_lolaracks" 
            width="auto" />
            <figcaption>Our NMP portable kits in action, custom designed to provide ultra low-latency for NMPs.</figcaption>
        </figure>
    </div>
    <div class="mySlides fade">
        <figure style="float: none">
            <img 
            src="/assets/image/2022_04_01_aleksati_5g_racksontheroad.jpg" 
            alt="5g_racksontheroad" 
            title="5g_racksontheroad" 
            width="auto" />
            <figcaption>Portable NMP kits ready for the road to Elverum.</figcaption>
        </figure>
    </div>
    <div class="mySlides fade">
        <figure style="float: none">
            <img 
            src="/assets/image/2022_04_01_5g_aleksati_lolaracks_5gnow.jpg" 
            alt="lolaracks_5gnow" 
            title="lolaracks_5gnow" 
            width="auto" />
            <figcaption>Two music technologists eager to test the 5GNoW at Terningsmoen Army Base.</figcaption>
        </figure>
    </div>
</div>

For the NMP kits, our go-to for AV transmission is the high-end software called [LOw-LAtency](https://lola.conts.it), or Lola for short. The software was developed at the Trieste Conservatory (Italy) in collaboration with GARR, the Italian Research and Academic Network. To provide ultra-low latency, Lola requires premium GPUs, soundcards with very stable ASIO drivers (that support buffersizes of 32 and 64 samples), and specialized [Ximea video cameras](https://www.ximea.com/en/products/cameras-filtered-by-sensor-types/mq013mg-e2) that send uncompressed video via USB-3.

In addition to Lola, we use the Jack and [JackTrip](https://www.jacktrip.org) software bundle as our secondary choice, another great audio transmission software developed by CCRMA at Stanford University (USA). JackTrip is audio-only but gives us the ability to use more normal audio gear with higher buffersizes, helping us tolerate more unstable connections and network jitter.

# Method

To determine to what degree NMPs would be possible over 5G networks, we measured the **stability**, **quality**, and **latency** of audio and video signals through Lola and JackTrip. In any real NMP scenario, we only care about technical configurations that render a stable AV transmission over time, with a minimal amount of audio dropouts and other unwanted artifacts. Therefore, we only measured signal latency when the best possible tradeoff between stability and quality was found.

## 1. Measuring the Network Coverage and Bandwidth

By using the iPerf networking utilities, the Huawei routers' own location-optimizing software, Telenor's [online coverage map](https://www.telenor.no/dekning/#dekningskart), and [Ookla's online speedtester](https://www.speedtest.net/), we were able to make network bandwidth and coverage estimates throughout the experiments, ensuring that our load did not exceed the capacity of the network.

## 2. Finding the Sweet-spots

To find the best tradeoff between stability and quality, we sent a constant stream of audio and video over the network and looped the signal back to its source. With this, we were able to monitor the AV quality of our connection in real-time.

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_sweetspot_method.jpg" alt="5g_telenor_sweetspot_method" title="5g_telenor_sweetspot_method" width="auto" />
    <figcaption>Routing diagram for method of monitoring an entire NMP AV-chain for jitter, noise and other unwanted artifacts, from a single location. Each side of the network represents a unique NMP kit.</figcaption>
</figure>

To fine-tune the audio, we adjusted the software and hardware buffersizes to find the lowest possible configuration that ensured stable audio transmission over a significant period (maybe 10minutes total). For video, we used a similar a approach, only adjusting the framerate, compression amount, and video resolution to find the sweet-spot.

## 3. Measuring the Latency

With the software and hardware parameters fine-tuned, we measured the audio and video latency with a similar loopback system:

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_latency_method.jpg" alt="5g_telenor_latency_method" title="5g_telenor_latency_method" width="auto" />
    <figcaption><b>Figure 1.</b> Routing diagram for our method of measuring the round-trip latency of NMP systems from a single location.</figcaption>
</figure>

### Audio Latency

We measured the audio latency in two steps:

- **Digital roundtrip time (digital RTT)**

With digital RTT, we refer to the measurement of audio latency from software to software (or PC to PC), and back again. With this method, we bypassed the latency induced by our external soundcards and mixers. For the measurements, we used a jackTrip p2p connection with additional arguments that enable the recording of RTT latency over a significant period. Specifically, we used the `-x1` argument avaliable in client-side jacktrip connections.

- **Analog roundtrip time (analog RTT)**

With analog RTT, we refer to the measurement of audio latency through the entire chain depicted in Figure 1. We used another laptop with a designated audio interface to make these measurements. From this secondary laptop/soundcard, we sent audio impulses to the NMP kits from output 1 and received the signal back again on input 1. For reference, we closed output 2 to input 2 on the soundcard and sent identical audio impulses to output 2. Then, in software, we measured the analog RTT by looking at the temporal offset between inputs 1 and 2.

<figure style="float: none">
<img src="/assets/image/2022_04_01_aleksati_5g_telenor_latency_third_laptop_routing.png" 
    alt="5g_telenor_latency_third_laptop_routing" 
    title="5g_telenor_latency_third_laptop_routing" 
    width="90%" />
    <figcaption>Routing diagram of our secondary system for measuring the analog RTT. The laptop sends a short impulse to both outputs on the audio interface and records both inputs. The time difference between input 1 and 2 is the analog RTT.</figcaption>
</figure>

### Video Latency

For video, we took advantage of the fact that our two NMP kits were in the same room. We used Lola to send video of me doing some simple claps 👏 to the other machine using the Ximea camera. While displaying the video feeds in full-screen on both computer monitors, we filmed the monitors with a secondary camera. Then, we used the footage from the secondary camera to determine the video latency by counting the number of frames of delay between the two monitors.

<figure style="float: none">
     <img src="/assets/image/2022_04_01_aleksati_5g_telenor_video_latency_routing.png" 
        alt="5g_telenor_video_latency_routing" 
        title="5g_telenor_video_latency_routing" 
        width="90%"/>
    <figcaption>Routing diagram of our video latency measurement method.</figcaption>
</figure>

# Results

## Experiment nr.1 - Commercial 5G

At the Musicology department at UiO, the reception inside was poor. After inspecting Telenor's coverage map of our location, we decided to place the routers outside and pre-configured them to be in Bridge mode, hoping it would generate better coverage, create a more stable connection between our routers, and boost overall performance. According to the routers' location-optimizing software, we achieved a stable 75% 5G coverage at this location. Here, we measured the bandwidth to be a stable 400Mbps of download with 60Mbps upload speed.

<!-- <div class="slideshow-container" id="results-exp1">
    <div class="mySlides fade">
      <figure style="float: none">
        <img
          src="/assets/image/2022_04_01_aleksati_5g_telenor_modem_coverage.png"
          alt="5g_telenor_modems_coverage"
          title="5g_telenor_modems_coverage"
          width="80%" />
        <figcaption>Coverage report from our Huawei routers' internal software.</figcaption>
      </figure>
    </div>
    <div class="mySlides fade">
      <figure style="float: none">
        <img
          src="/assets/image/2022_04_01_aleksati_5g_telenor_coverage.jpg"
          alt="5g_telenor_coverage"
          title="5g_telenor_coverage"
          width="80%" />
        <figcaption>Telenor 5G coverage map of our UiO location. With borderline coverage at our department, putting the routers outside helped boost the reception. </figcaption>
      </figure>
    </div>
    <div class="mySlides fade">
      <figure style="float: none">
        <img
          src="/assets/image/2022_04_01_aleksati_5g_telenor_speedtest.png"
          alt="5g_telenor_speedtest.png"
          title="5g_telenor_speedtest.png"
          width="80%" />
        <figcaption>Representative speedtest results.</figcaption>
      </figure>
    </div>
</div> -->

The transmission sweet-spot for audio was achieved using jackTrip with a buffersize of 512. Unfortunatley, experimenting with lower buffersizes only resulted in massive jitter, noise, and audio dropouts. We found the optimal uncompressed audio settings to be the following:

| Channels | Bit Depth | Sampling Rate | Buffersize | Notes      |
| -------- | --------- | ------------- | ---------- | ---------- |
| Stereo   | 16bit     | 48Khz         | 512        | Good audio |

Using the above configuration, we measured a 110ms digital RTT and a **165ms** analog RTT of the commercial 5G network at UiO. These results were consistent because a soundcard spends about 10ms buffering 512 samples at 48Khz. During an analog RTT measurement, the audio has to pass through our RME soundcards a total of 4 times, adding about 40ms of latency. If we add in the mixers and all the other factors involved, the 60-70ms difference between digital and analog RTT seems plausible.

**Demo:** `165ms audio delay (from left to right ear)`

<div class="waveform" id="hundredandsixtyfivemsdemo"></div>

<br/>

For video, we were able to use the Ximea low-latency cameras through Lola as the software uses a seperate buffering system for video transfer. After experimenting with various settings and buffering tools, we achieved a stable transmission with minimal framedrops using the following settings:

| Resolution         | FPS | Compression                      | Estimated Bandwidth |
| ------------------ | --- | -------------------------------- | ------------------- |
| 1024x576 RGB24 bit | 60  | M-JPEG compression (quality 60%) | 25.75 Mbit          |

With this configuration, we measured the one-way video latency between our machines to be approximatley 7 frames. At 60FPS, this is equal to a **116ms** latency one-way, or 232ms RTT.

<figure style="float: none">
  <video width="auto" controls>
    <source src="https://drive.google.com/uc?&id=1sjLjNDm7uXAxQF6vCUWW25EUcB-b9Bwp" type='video/mp4'>
  </video>
  <figcaption>The capture of the video latency between our two NMP kits. The playback speed is 50%, so you notice double the latency than the measured one.</figcaption>
</figure>

## Experiment nr.2 - Private 5GNoW

At Terningmoen, Elverum, time was of the essence. We only had about 3-4 hours to set up our equiptment, make sure the network worked the way we wanted to, and then do our tests. From the start, we struggled to get good bandwidth with the 5GNoW system. Also, the handshaking procedure when establishing a UDP and TCP/UDP connection over the network was unusually slow, illuminating further network config issues. In the end, we settled for bandwidth with 100Mbps download with approximately a 13-14Mbps upload speed, enough to experiment with audio.

The transmission sweet-spot for audio was achieved using jackTrip with a buffersizes of 256 and 512. At 256, we got an audibly clear audio transmission, but one that was quite unstable over time with noticeable dropouts. At 512, the audio was clear and stable over a significant period. We found the optimal uncompressed audio settings to be the following:

| Channels | Bit Depth | Sampling Rate | Buffersize | Notes                    |
| -------- | --------- | ------------- | ---------- | ------------------------ |
| Stereo   | 16bit     | 48Khz         | 256        | Good, but unstable audio |
| Stereo   | 16Bit     | 48Khz         | 512        | Good audio               |

Using the above configurations we measured a 55-60ms digital RTT and an analog RTT at **74ms** when using a buffersize of 256. Although impressive, this configuration rendered borderline audio quality that would be unpleasant in the long run. Using a buffersize of 512, we measured a 90-100ms digital RTT (similar to experiment nr.1, only slightly faster) and an analog RTT at **140ms**.

**Demo:** `74ms audio delay (from left to right ear)`

<div class="waveform" id="seventyfourmsdemo"></div>

<br/>

# In Summary

During two weeks in late March 2022, we investigated the feasibility of conducting NMPs over commercial and private 5G networks, in collaboration with Telenor Research. On both networks, we measured the **stability**, **quality**, and **latency** of audio and video signals with high-end hardware and software utilities. When accepting borderline conditions on a private 5G network (5GNoW), we managed to push the audio RTT latency down to 75ms. However, in more realistic conditions on a first-generation commercial 5G, we achieved an analog RTT audio latency of 165ms and 116ms one-way latency for video.

IF WE GET BELOW 70-50ms, there are documented strategies that can work (SOURCE).

MCT students have even recently explored some of these latency-coping strategies.

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
        color: "#1869ca",
        alert: false,
    },
    {
        path: "/assets/audio/2022_04_01_aleksati_30ms_delay_demo.mp3",
        anchor: "thirtymsdemo",
        color: "#D93821",
        alert: false,
    }, 
    {
        path: "/assets/audio/2022_04_01_aleksati_74ms_delay_demo.mp3",
        anchor: "seventyfourmsdemo",
        color: "#328d78", 
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
