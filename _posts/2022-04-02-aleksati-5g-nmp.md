---
layout: post
title: "5G Networked Music Performances - Will It Work?"
date: 2022-04-11 10:30:00 +0200
categories: portal
author: Aleksander Tidemann, Stefano Fasciani
image: /assets/image/2022_04_01_aleksati_5g_telenor_logo.png
keywords: mct, uio, networked music performances, telematic music, 5g, telenor research, lola, jacktrip, audio latency, video latency
excerpt: "In collaboration with Telenor Research, we explored the prospects of doing networked music performances over 5G. Here are the preliminary results."
---

<!-- Alternative title: "Testing 5G Networked Music Performances" -->

5G is the new paradigm of telecommunication and wireless networking. But what is so great about 5G? For the average user, the biggest difference from 4G to 5G will be a massive increase in speed (bandwidth). In reality, 5G is an entirely new networking infrastructure. This is one reason why there are so many high expectations of 5G. We imagine remote-controlled surgery from afar, distributed sporting events, and even stable networked music performances (NMP).

At [MCT](https://www.uio.no/english/studies/programmes/mct-master/), we have been experimenting with NMPs for several years. One of the biggest challenges with playing music over the network is the exceptionally high demand for low-latency communication <small>[2] [3] [4]</small>. In fact, research tells us that the ideal roundtrip latency (back and forth between two locations) for synchronous music performances is around 25-30ms, with the maximum we can tolerate at around 40-50ms <small>[5]</small>. For some perspective:

**Demo -** `30ms audio delay from left to right ear:`

<div class="waveform" id="thirtymsdemo"></div>

In late 2021, we got in touch with Telenor to explore the feasibility of conducting NMPs over 5G. Telenor is currently involved in multiple EU-funded projects that, in part, explore the application of 5G to music technology, including [Fudge5G](https://fudge-5g.eu/en) and [5GMediaHub](https://www.5gmediahub.eu/). During a two-week period in late March 2022, we did a series of experiments on a commercial and private 5G network in collaboration with Telenor Research. In this post, we present these experiments in detail, explaining the technical setup, methods, and preliminary results.

# Setup

We conducted two experiments in two separate locations on two different 5G networks.

### Commercial 5G Experiment

The first experiment was carried out at the Musicology Department at the University of Oslo, on March 30th 2022, on a first-generation commercial 5G network. Most commercial 5G networks today rely on a so-called Non-Stand-Alone (NSA) core network, the same as 4G. However, Telenor pre-configured our routers to access specific Access-Point-Names (APNs). This configuration enabled Peet To Peer (P2P) connectivity between our machines with faster packet routing.

### Private 5G Experiment

The second experiment was carried out in Elverum, close to Terningmoen Army Base, on April 4th 2022, on a 5G Network-on-Wheels (5GNoW) solution. The 5GNoW is a private 5G network, or Non-Public Network (NPN), that relies on a Stand-Alone (SA) core network. As we understood, these kinds of systems are mostly used for experimental testing of various 5G applications in the field.

<div class="slideshow-container" id="experiment-setup">
  <div class="mySlides fade">
    <figure style="float: none">
        <img
        src="/assets/image/2022_04_01_aleksati_5g_telenor_modems_outside_salen1.jpg"
        alt="5g_telenor_modems_outside_salen2"
        title="5g_telenor_modems_outside_salen2"
         />
        <figcaption>Our 5G Routers in action outside the Musicology Department at UiO, ready to test the commercial NSA 5G network. </figcaption>
    </figure>
  </div>
  <div class="mySlides fade">
      <figure style="float: none">
        <img
          src="/assets/image/2022_04_01_aleksati_5g_telenor_coverage.jpg"
          alt="5g_telenor_coverage"
          title="5g_telenor_coverage"
         />
        <figcaption>Coverage report of the commercial 5G network at our UiO location.</figcaption>
      </figure>
  </div>
  <div class="mySlides fade">
   <figure style="float: none">
        <img
        src="/assets/image/2022_04_01_aleksati_5g_now.jpg"
        alt="5g_now"
        title="5g_now"
       />
        <figcaption>Telenor's 5GNoW van at Terningmoen Army Base, Elverum. Photo by Olai Bendik Erdal.</figcaption>
    </figure>
  </div>
  <div class="mySlides fade">
    <figure style="float: none">
        <img
        src="/assets/image/2022_04_01_aleksati_5g_now_setup.jpg"
        alt="5g_now_setup"
        title="5g_now_setup"
       />
        <figcaption>Our setup, approximately 5 meters away from the 5GNoW.</figcaption>
    </figure>
  </div>
</div>

### Hardware and Software

For both experiments, we used a pair of [Huawei H138-380 CPE Pro 3 5G Routers](https://nettbutikk.emcom.no/h138-380-cpe-pro-3-5g-ruter-4g-5g-ruter-wifi-6-2-x-lan-111560-p0000028124) to connect to the network.

To send audio and video back and forth, we used our own portable and custom-built NMP systems. These racks are essentially bundles of high-end software, audio/video peripherals and networking tools that can provide the lowest possible latency on audio/video transmissions over the network, given that all other the pieces of the puzzle are correct. Full documentation and more detailed info about these systems is available [here](https://github.com/MCT-master/NMP-Portable-Kits/wiki).

<div class="slideshow-container" id="hardware-setup">
    <div class="mySlides fade">
        <figure style="float: none">
            <img
            src="/assets/image/2022_04_01_aleksati_5g_telenor_lolaracks.jpg"
            alt="5g_telenor_lolaracks"
            title="5g_telenor_lolaracks"
            width="auto" />
            <figcaption>MCT's new NMP Portable Kits in action at UiO.</figcaption>
        </figure>
    </div>
    <div class="mySlides fade">
        <figure style="float: none">
            <img
            src="/assets/image/2022_04_01_aleksati_5g_racksontheroad.jpg"
            alt="5g_racksontheroad"
            title="5g_racksontheroad"
            width="auto" />
            <figcaption>Portable NMP kits ready for the road to Terningsmoen Army Base, Elverum.</figcaption>
        </figure>
    </div>
    <div class="mySlides fade">
        <figure style="float: none">
            <img
            src="/assets/image/2022_04_01_aleksati_5g_lolaracks_5gnow.jpg"
            alt="5g_lolaracks_5gnow"
            title="5g_lolaracks_5gnow"
            width="auto" />
            <figcaption>Setting up the NMP kits at Terningsmoen. From left: Stefano Fasciani and Aleksander Tidemann. Photo by Olai Bendik Erdal.</figcaption>
        </figure>
    </div>
</div>

For NMPs, our go-to AV transmission software is [LoLa](https://lola.conts.it) (Low Latency AV STreaming System). This high-end application was developed at the Trieste Conservatory (Italy) in collaboration with GARR, the Italian Research and Academic Network. To provide ultra-low latency, Lola requires high-end GPU-equipped PCs, soundcard with very stable ASIO drivers (that support buffer sizes of 32 and 64 samples), and specialized [Ximea video cameras](https://www.ximea.com/en/products/cameras-filtered-by-sensor-types/mq013mg-e2).

In addition to Lola, we used the JACK2 and [JackTrip](https://www.jacktrip.org) bundle as our secondary software. JackTrip is another popular audio transmission application developed by CCRMA at Stanford University (USA). JackTrip is audio-only and accomodates a wider range of soundcards and buffer sizes. This is "bad" for latency optimization but essential to tolerate more unstable connections and network jitter.

# Experiments

To explore to what extent 5G can accomodate NMPs, we measured the **stability**, **quality**, and **latency** of roundtrip audio and video signals using Lola and JackTrip. In any real NMP scenario, we only care about technical configurations that render stable AV transfer over time with a minimal dropouts and other unwanted artifacts. Therefore, we only measured signal latency when the best possible tradeoff between stability and quality was found. We did three tests in each experiment:

### 1) Measuring the Network Coverage and Bandwidth

By using the [iPerf](https://iperf.fr/) networking utilities, the Huawei routers' own location-optimizing software, Telenor's online [coverage map](https://www.telenor.no/dekning/#dekningskart), and Ookla's [online speedtester](https://www.speedtest.net/), we were able to make network bandwidth and coverage estimates throughout the experiments, ensuring that our load did not exceed the capacity of the network.

### 2) Finding the Sweet-spots

To find the best tradeoff between stability and quality, we sent a constant stream of audio and video over the network and looped the signals back to their source, as depicted in Figure 1. With this, we were able to monitor the AV quality of our connections in real-time.

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_sweetspot_method.jpg" alt="5g_telenor_sweetspot_method" title="5g_telenor_sweetspot_method" width="auto" />
    <figcaption><b>Figure 1.</b> Routing diagram of our method for monitoring the audio and video quality of a NMP system from a single location. Each side of the network represents a unique NMP kit.</figcaption>
</figure>

To fine-tune the audio, we adjusted software and hardware buffer sizes to locate the lowest possible configuration that ensured a stable audio transmission over a significant period (maybe 10minutes total). For the video, we used a similar a approach, only adjusting the framerate, compression (M-JPEG) amount, and video resolution to find the sweet-spot.

### 3) Measuring the Latency

With the software and hardware parameters fine-tuned, we measured the audio and video latency with a similar loopback system:

<figure style="float: none">
    <img src="/assets/image/2022_04_01_aleksati_5g_telenor_latency_method.jpg" alt="5g_telenor_latency_method" title="5g_telenor_latency_method" width="auto" />
    <figcaption><b>Figure 2.</b> Routing diagram of our method for measuring the roundtrip latency of NMP systems from a single location.</figcaption>
</figure>

We measured the audio latency in two steps:

- **Digital roundtrip time (digital RTT)**

With digital RTT, we refer to the measurement of audio latency from software to software (or PC to PC), and back again. With this method, we bypassed the latency induced by our external soundcards and mixers. For the measurements, we used jackTrip in P2P mode. By utilizing the `-x1` argument client-side, we were able to record and monitor the digital RTT in real-time.

- **Analog roundtrip time (analog RTT)**

With analog RTT, we refer to the measurement of audio latency through the entire chain depicted in Figure 2. To make these measurements, we used another laptop with a designated audio interface. From this secondary laptop/soundcard we sent audio impulses from output 2 to the NMP kits and received the signal back again on input 2. For reference, we closed output 1 to input 1 on the soundcard and sent identical audio impulses to output 1. Then, in software, we measured the analog RTT by looking at the temporal offset between inputs 1 and 2.

<figure style="float: none">
<img src="/assets/image/2022_04_01_aleksati_5g_telenor_latency_third_laptop_routing.png"
    alt="5g_telenor_latency_third_laptop_routing"
    title="5g_telenor_latency_third_laptop_routing"
    width="90%" />
    <figcaption>Routing diagram of our secondary system for measuring the analog RTT.</figcaption>
</figure>

For video, we took advantage of the fact that our two NMP kits were in the same room. The measure the latency, we sent a Ximea video feed of me doing some claps 👏 from one NMP kit to the other. While displaying the video feeds in full-screen on both computer monitors, we filmed the monitors with a secondary camera. Then, we used the footage from the secondary camera to determine the video latency by counting the offset in frames between the two monitors.

<figure style="float: none">
     <img src="/assets/image/2022_04_01_aleksati_5g_telenor_video_latency_routing.png"
        alt="5g_telenor_video_latency_routing"
        title="5g_telenor_video_latency_routing"
        width="90%"/>
    <figcaption>Routing diagram of our video latency measurement method.</figcaption>
</figure>

# Results

### Commercial 5G Experiment

Inside the Musicology building at UiO, the 5G reception was poor. After inspecting Telenor's coverage map of our location, we decided to place the routers outside and pre-configured them to be in Bridge mode, hoping it would generate better coverage, create a more stable connection between our routers, and boost overall performance. According to the routers' location-optimizing software, we achieved a stable 75% 5G coverage at [this location](https://goo.gl/maps/VJXb1KhEBAaPhz4x6). From here, we measured a stable 60Mbps bandwidth.

The transmission sweet-spot for audio was achieved using jackTrip with a buffer size of 512. Unfortunately, experimenting with lower buffer sizes only resulted in massive jittery audio and dropouts. We found the optimal stereo audio settings to be the following:

<div class="Rtable Rtable--5cols Rtable--collapse">
  <!-- Column one -->
  <div style="order:1;" class="Rtable-cell"><b>Compression</b></div>
  <div style="order:2;" class="Rtable-cell">0%</div>

  <!-- Column two -->
  <div style="order:1;" class="Rtable-cell"><b>Bit Depth</b></div>
  <div style="order:2;" class="Rtable-cell">16bit</div>

  <!-- Column three -->
  <div style="order:1;" class="Rtable-cell"><b>Sampling Rate</b></div>
  <div style="order:2;" class="Rtable-cell">48Khz</div>

  <!-- Column four -->
  <div style="order:1;" class="Rtable-cell"><b>Buffer Size</b></div>
  <div style="order:2;" class="Rtable-cell">512</div>

  <!-- Column five -->
  <div style="order:1;" class="Rtable-cell"><b>Notes</b></div>
  <div style="order:2;" class="Rtable-cell">Good and stable audio</div>
</div>

Using the above configuration, we measured a 110ms digital RTT and a **165ms** analog RTT of the commercial 5G network at UiO. Considering that buffering 512 samples at 48Khz takes 10ms, and that during our analog RTT measurement audio had to pass through our soundcards a total of 4 times, this kind of delta between digital and analog RTT was expected.

**Demo -** `165ms audio delay from left to right ear:`

<div class="waveform" id="hundredandsixtyfivemsdemo"></div>

For video, we were able to use the Ximea low-latency cameras with Lola as the software utilizes a different buffering strategy for video transfer. After experimenting with various settings and buffering tools, we achieved a stable transmission with some drops (mostly not visible to human eyes) using the following settings:

<div class="Rtable Rtable--5cols Rtable--collapse">
  <!-- Column one -->
  <div style="order:1;" class="Rtable-cell"><b>Compression</b></div>
  <div style="order:2;" class="Rtable-cell">M-JPEG (quality 60%)</div>

  <!-- Column two -->
  <div style="order:1;" class="Rtable-cell"><b>Bit Depth</b></div>
  <div style="order:2;" class="Rtable-cell">RGB24 bit</div>

  <!-- Column three -->
  <div style="order:1;" class="Rtable-cell"><b>Resolution</b></div>
  <div style="order:2;" class="Rtable-cell">1024x576</div>

  <!-- Column four -->
  <div style="order:1;" class="Rtable-cell"><b>FPS</b></div>
  <div style="order:2;" class="Rtable-cell">60</div>

  <!-- Column five -->
  <div style="order:1;" class="Rtable-cell"><b>Notes</b></div>
  <div style="order:2;" class="Rtable-cell">Acceptable video quality</div>
</div>

With this configuration, we measured the one-way video latency between our machines to be approximatley 7 frames. At 60FPS, this is equal to a **116ms** latency one-way, or 232ms RTT.

<figure style="float: none">
  <video width="auto" controls>
    <source src="https://drive.google.com/uc?&id=1sjLjNDm7uXAxQF6vCUWW25EUcB-b9Bwp" type='video/mp4'>
  </video>
  <figcaption>The capture of the video latency between our two NMP kits during experiment nr.1. The playback speed is 50%. Video by Stefano Fasciani.</figcaption>
</figure>

### Private 5GNoW Experiment

At Terningmoen, Elverum, time was of the essence. We only had about 3-4 hours to set up our equipment, configure the network, and do our tests. From the start, we ran into unexpected issues in the 5G modem setup with the 5GNoW van. Also, establishing UDP and TCP/UDP connections over the network was unusually slow, illuminating further network issues. Therefore, we had to settle for limited bandwidth of approximately 13-14Mbps, enough to experiment with audio.

The transmission sweet-spot for audio was achieved using jackTrip with a buffer sizes of 256 and 512. At 256, we got an audibly ok quality audio, but one that was unstable over time with noticeable dropouts. At 512, the audio was clear and stable over a significant period. We found the optimal stereo audio settings to be the following:

<div class="Rtable Rtable--5cols Rtable--collapse">
  <!-- Column one -->
  <div style="order:1;" class="Rtable-cell"><b>Compression</b></div>
  <div style="order:2;" class="Rtable-cell">0%</div>

  <!-- Column two -->
  <div style="order:1;" class="Rtable-cell"><b>Bit Depth</b></div>
  <div style="order:2;" class="Rtable-cell">16bit</div>

  <!-- Column three -->
  <div style="order:1;" class="Rtable-cell"><b>Sampling Rate</b></div>
  <div style="order:2;" class="Rtable-cell">48Khz</div>

  <!-- Column four -->
  <div style="order:1;" class="Rtable-cell"><b>Buffer Size</b></div>
  <div style="order:2;" class="Rtable-cell">256 and 512</div>

  <!-- Column five -->
  <div style="order:1;" class="Rtable-cell"><b>Notes</b></div>
  <div style="order:2;" class="Rtable-cell"> <small>OK but unstable audio with 256. Good and stable audio with 512.</small></div>

</div>

Using the above configurations we measured a 55-60ms digital RTT and an analog RTT at **74ms** when using a buffer size of 256. Although impressive, this configuration rendered borderline audio quality that would be unpleasant in the long run. Using a buffer size of 512, we measured a 90-100ms digital RTT (similar to experiment nr.1, only slightly faster) and thus an analog RTT at about **140ms**.

**Demo -** `74ms audio delay from left to right ear:`

<div class="waveform" id="seventyfourmsdemo"></div>

# Summary and Concluding Thoughts

During a two-week period in late March 2022, we investigated the feasibility of conducting NMPs over commercial and private 5G networks, in collaboration with Telenor Research. On two separate occasions, we measured the stability, quality, and latency of transferring uncompressed audio and compressed video over the networks with high-end hardware and software utilities. When accepting borderline conditions on a private 5G network (5GNoW), we managed to push the audio RTT latency down to 75ms. However, in more realistic conditions on a first-generation commercial 5G, we achieved an analog RTT audio latency of 165ms and 116ms one-way latency for video.

Compared with audio RTT benchmarks mentioned in the introduction (between 25-50ms), our 5G test results were not particularly promising. However, I believe we could conduct successful NMPs over 5G if we could get the audio analog RTT down between 50-70ms. There are many documented strategies for coping with latency-rich environments <small>[1]</small>. In fact, MCT students have recently explored some of these strategies in detail (read more [here](https://mct-master.github.io/portal/)). Also, considering that we had unfortunate testing conditions in Elverum, there is reason to be optimistic about achieving better RTT audio and video scores if we manage to resolve these issues at a later stage.

On the other hand, although we can do more testing, some things we cannot mitigate. For instance, we cannot change how the 5G protocol is written, to some extent how our routers/modems choose to buffer, or the inherent instability of using wireless networks. Because of this, we have to be practical and make the best with what we can get. Moreover, lower latency should be possible when the Ultra-Reliable Low Latency Communications (URLLC) feature of 5G is implemented on future Telenor networks.

<div class="slideshow-container" id="summary">
    <div class="mySlides fade">
      <figure style="float: none">
        <img
          src="/assets/image/2022_04_01_aleksati_5g_team_5gnow.jpg"
          alt="5g_team_5gnow"
          title="5g_team_5gnow"
          width="auto" />
        <figcaption>A big thanks to the Telenor Research team! From front to back: Aleksander Tidemann (Department Engineer UiO), Stefano Fasciani (Professor in Musicology UiO), Kashif Mahmood (Senior Researcher Telenor), Olai Bendik Erdal (Senior Researcher Telenor) and Ole Grøndalen (Senior Researcher Telenor) </figcaption>
      </figure>
    </div>
    <div class="mySlides fade">
      <figure style="float: none">
        <img
          src="/assets/image/2022_04_01_aleksati_5g_uio_stef_henr.jpg"
          alt="5g_uio_stef_henr"
          title="5g_uio_stef_henr"
          width="auto" />
        <figcaption>Also, a big thanks to research assistant Henrik Haraldsveen for helping out with the Oslo-side experiment.</figcaption>
      </figure>
    </div>
</div>

# Going Forward

Our plans are now to do more testing at Telenor's Oslo Hub at Fornebu in the summer of 2022. As discussed, we hope that we can resolve the private 5G networking issues and improve on our results from Elverum. We look forward to doing more tests and will keep you posted on the results.

# References

<small>
[1] Carôt, A., & Werner, C. (2009). Fundamentals and principles of musical telepresence. Journal of Science and Technology of the Arts, 1(1), 26-37. https://doi.org/10.7559/citarj.v1i1.6 <br/> <br/>
[2] Chafe, C., Gurevich, M., Leslie, G., & Tyan, S. (2004). Effect of Time Delay on Ensemble Accuracy. ISMA. Center for Computer Research in Music and Acoustics, Stanford University <br/> <br/>
[3] Rofe, M., & Reuben, F. (2017). Telematic performance and the challenge of latency. Journal of Music, Technology and Education, 10(2–3), 167–183 <br/> <br/>
[4] Rottondi, C., Chafe, C., Allocchio, C, Sarti A. (2016). An overview on networked music performance technologies. IEEE Access 4: 8823-8843. <br/> <br/>
[5] Schuett, N. (2002). The Effect of Latency on Ensemble Performance, Technical Report at CCRMA
Department of Music, Stanford University, Stanford, USA. <br/> <br/>
</small>

<!-- END OF BLOG POST -->

<style>

.btn {
  background-color: #ffffff;
  color: black;
  font-size: 20px;

  border: 1px solid black;
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: .25rem;
  /* transition: box-shadow 0.2s ease-in-out; */
    transition: color .15s ease-in-out,background-color .15s ease-in-out;
}

.btn:hover {
    background-color: black;
    color: white;
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
  /* margin: auto; */
  margin-bottom: 30px !important;
}

</style>

<!-- external lib used to display waveforms -->
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
        color: "#ffa600",
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
