---
layout: post
title: "Sound at the Speed of Light: Follow Up"
date: 2020-01-10 16:30:00 +0200
categories: HCI
author: Jackson, Jarle, Simon
image: /assets/img/b-team/bela.jpg
excerpt: "A much more extensive blog regarding our Physical Computing/HCI project in the past fall semester"
Keywords: HCI, Reflections, Physical Computing
---
# Sound at the Speed of Light

For MCT4000's Physical Computing Hack-a-thon, our Trondheim/Oslo team developed an interactive sound instrument where light was both its impetus and the medium of transference between the instruments of each performer. Our instrument, “Sound at the Speed of Light”, was composed of a Bela-device, running a PureData-patch, to which was wired six simple controls, an LED, and an optical light sensor (see Figure 1). The light emittance and sensor-retrieval, in turn, allowing an interactive performance by way of video-conference-call, captured and streamed through our smartphones. The inherent complexities and limitations of our design and process afforded us some insights into the workings of musical interface development - and some regarding the pedagogical value in persistence despite initial embarrassment.

<img src="/assets/img/b-team/2020_01_10_jackson_schema_bb.jpg" width="75%" height="75%" align="center"/>
_Bela and breadboard_

## Introduction

The group approached the "Recycling" theme of this year’s Hack-a-thon quite liberally. Considering our experience within the "Portal", MCT's dual classroom setup, with video and audio streaming between Trondheim and Oslo, in both directions simultaneously - we initially discussed the idea of audio stream feedback over the internet. Since our group consists of two of us in Trondheim and two in Oslo, this way we would be able to have some direct contact with each other, regardless of physical location, and allow a “direct” interaction during our performance. Through our discussion we proposed incorporating light sensors and LEDs to serve as the utilities of communication. Under the theme of “Recycling”, we thought of this experiment as recycling sound through light (over IP).

<img src="/assets/img/b-team/2020_01_10_jackson_bteam_mindmap.jpg" width="75%" height="75%" align="center"/>
_Our mind map_

The mind map offers an impression of the directions and opportunities we were considering when we began to discuss our plan.

The simplistic three-button / three-knob interface, (anyone can play it), and the requirement for interaction for the instrument to work at all (...but only by communicating) seem solid echoes of the mentioned emerging approaches to HCI. We wanted a simple and easy to preform interface so to make it accessible to anyone. It was our attempt at creating an instrument with high performative availability.

## Background

As technology moves ever forward, music-technologists are tasked with shaping new devices and experiences that make use of novel applications of this technology. Our quick development of this fairly complex musical device highlights the pace of technology and its accessibility for novices entering the field of HCI.

The instrument can be classified from its inherent features as an instrument specifically designed for networked music performance (NMP). Our instrument is reactive. The output from one performer is directly related to the output of the second, and in this regard alleviates some of the loss of communication between performers and the musical interaction when performing over network. Bound within a virtual space, our device relies heavily on the dialogue created between the participants as light and sound provides this sense of coherence necessary to make the performer’s manipulations of the sound meaningful.

In our hurry to make sure the peripheral devices would perform their functions, we hardly considered that if we were not able to complete everything we would have nothing to present. In hindsight, we should have thought about building our device around sound we could easily produce, if all else failed, and not having each component function contingent upon one another. If it wasn’t for ubiquity of smartphones, we might not have been able to practically send or receive light remotely without many additional devices and additional programming.

## The System

The Sound at the Speed of Light instrument-system is composed of four intrinsic components, where each sub-system was partially developed by each team member:

<img src="/assets/img/b-team/bela.jpg" width="75%" height="75%" align="center"/>
_A prototype of the instrument_

* An additive synthesizer, with several 
configurable parameters, built in PureData
* A blue LED that, using pulse width modulation, glows brighter or duller in response to the synthesizer’s audio-amplitude
* A light sensor that responds to luminance intensity by sending a scaled value to modulate the volume of the recipient’s synthesizer
* A smartphone, positioned between the LED and light sensor, that sends and receives video of the LED’s varying glow

<img src="/assets/img/b-team/2020_01_10_jackson_bteam_flowchart.jpg" width="75%" height="75%" align="center"/>
_Signal flowchart_

The labyrinthine signal-path that affords the instrument it’s interactivity is perhaps easiest explained by the signal flowchart. Where performer A’s audio signal swells up, so does the corresponding device’s LED – this: captured and transmitted through video-call-connectivity – in turn: interpreted by the receiver B’s light sensor – which again causes B’s audio volume and LED to swell – instigating another cycle of information. When performer A again receives a swelling light, the circle is complete and a true feedback-loop set in motion.

Considering the instantaneous quality of information transmission by cell phone today we implemented a safe-guarding delay between audio-actuation and LED-swell. This, simply to prevent an incessant feedback-loop setting all performer’s sound-levels at a constant maximum.
Through modern smart-phone connectivity, the system’s light-and-light-sensor mechanism - where one performer’s sound actively triggers another’s - knows no geographical boundaries, making a true interactive musicking possible, back and forth between Trondheim and Oslo, or indeed, anywhere in the world.

### PureData Patch (Jarle)

The additive synthesizer was built in PureData. Initially the synth consists of 9 sine-oscillators, sounding at the harmonic series just-tone 1st-7th partials, with the 9th and 11th partials added for sonic interest. By dialing knob-A, the fundamental for the series can be changed. The partials can also be spread or condensed using knob-B. Factors that shift the frequency of the highest four harmonic partials can be randomized with a button click. Another button randomizes the overall "color" of the sound - the basic principle of additive synthesis being the potential to hypothetically reproduce "any" sound by manipulating the amplitude of the fundamental frequency's partials. In short, there were three knobs, adjusting, volume (although, hypothetically redundant, this was added for safety), fundamental frequency, and width of the partials - as well as three buttons that acted to initialize, and/or randomize, the partials spread and amplitude.

### Light Sensor (Simon)

The light sensor configuration was being worked on in Trondheim, which would be able to scale the light being received from the phone screen into values that would be able to increase and decrease the volume of the synth. This was being worked on by Simon and Magda to fit the scaling of the sensor to the max/min brightness of the LED. Trondheim was also mirroring the setup we had built in Oslo. Coordination was a huge obstacle when it came to setting up four devices in parallel over two campuses. However, they were able to find the Pd mechanism to properly scale the light that’s being received.

### LED Light (Jackson)

In Oslo, we were working on mapping the knobs and buttons to work with the Pd patch as well as figuring out how to make an LED's brightness reflect the amplitude of the sound that we were outputting from the Bela through our synth. We discovered that since LED's only have two states (on/off) we had to instead modify the frequency of the LED's pulses so that it was perceived as being more or less bright (that or modulate the voltage, which was a bit more dangerous). Debugging this sub-system took some time, as it was also tricky to scale the output of synth in a way that corresponded to an LED signal that would visibly diminish over time.

### Phone Transmission

Finally, a phone was added so that the camera faced the LED and screen faced the optical light sensor. This addition did not make it to our performance blueprint but was added afterwards and was the simplest component to install. We created a video conference through the mobile application Zoom and then positioned the phones in a way to capture the LED within the camera stream and provide light from the phone screen to the light sensor. To assist with the diffusion of light, two small boxes were placed against the phone surface such that the LED and light sensor were contained against the phone. This allowed us to prevent exterior light from interfering with our performance.

## The Performance

Since Jarle had worked on the additive synthesis patch in PureData we estimated that much of additional integration would be straight forward; the largest piece of the project would be configuring the transmission and reception of light in response to the instruments’ swells of sound. This proved an eager and naïve assumption and it did take a considerable amount of time. Time, it proved, we did not have enough of in our short workshop as stated before in our ![past blog](https://mct-master.github.io/physical-computing/2019/10/24/b-team-sound-light.html)

We made a strong attempt to reach our project goal within the given timeframe. And most of the components made their way into completion. The LED was responding to the audio signal in a dynamic way, the knobs and buttons were configured to interact with the patch (for a brief moment) and the light sensor was scaled to received light. All that was needed was to put it all together and throw in a phone. Yet, knowing how long this process itself took, one can be sure those final tasks alone would have taken a considerable amount of time. And we were out of time.

So, we resorted to playing with the synth through PureData from our laptops and sending the audio signal from our headphone jack to a speaker locally. And it was quite a nice performance in itself. We were able to listen and respond to the subtle changes in texture and pitch that each of us were making through our patch, at moments producing something quite beautiful (in our own minds at least).

Too proud to just let it go, the Oslo side returned for another stab at the application. In no less than a six-hour session (doubling the time originally allotted) the patching and wiring finally seemed to come together. Fully apparent now was the complexity of scaling knob values within PureData, not to speak of scaling LED pulse-width modulation, or light-sensor sensitivity. With time-pressure looming yet again, one LED seemed to operate in perfect accord with the audio-amplitude before refusing resolutely the next moment. With just minutes to spare we finally captured the intended interaction, albeit, only from one Bela to the other. None the less, our instrument works – fleetingly – but long enough to allow us a brief video-recording (linked below) of our distance-wise, rather modest performance.

## Reflections

This project began with a limited time frame of discussion, around 15-20 minutes, which I think did set constraints on the general ability for us as a group to think of a project that would engage each side equally, allow for further insights and discussion, or launch from earlier literature. Thus, writing a reflection like this will likely contain a hindsight bias in the evaluation and interpretation of our work. Building the initial system was a bit chaotic since much of the work was configuring the hardware appropriately as well as creating PureData patches that would allow us to then evaluate our hardware’s configuration. The idea to stretch the sound across multiple systems was a fantastic idea conceptually, but unfortunately, the individual complexity of each component created a barrier from more global communication regarding our final performance. It was obvious too, towards the end, that we had taken on a project outline that would not enable us to perform even if we weren’t able to finish completely; it was all or nothing. Thus, the actual time that was available to us was likely our biggest constraint since the pressure created by this infected our ability to communicate during the course of the workshop.

Given that this instrument lends does lend itself towards a particular artistic experience and not an invitation to master its use, having a diverse group of participants would inform what experience this instrument curates within a variety of groups. Once Jarle and I were able to get the instrument working (after spending an additional day working on it), we realized that this sort of experience of allowing the sound pass between the instrument was an unusual method of manipulating sound since there was so way to begin or end the sound, it would do so naturally with each musician borrowing the sound and light for a moment.

## Conclusion

In our performance Sound at the Speed of Light, we attempted to fabricate a device that would allow us to generate sound from the presence of light and recycle that light as a messenger of communication between each of our devices. As described in our mind map, we believe our project expands the conventional use-cases of light within a performative space as an instrument and aesthetic element. Our setup allows for theoretically limitless numbers of musicians that would be able to enter the video conference and thus “energize” their synths through light.

By the end, I think we learned that in unfamiliar territories, it is quite difficult to consider the difficulty and timeframe of a project when unsure of the details of each component from the outset. In the rush of our allotted time, we were not able to reach a point in development to perform. However, later we were able to construct a prototype that revealed insights into how our devices might enable new ways of sound production and remote collaboration through the transference of light.

### Sound at the Speed of Light (Short Video)

<iframe width="560" height="315" src="https://www.youtube.com/embed/uSiLH6WJ6Io" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
