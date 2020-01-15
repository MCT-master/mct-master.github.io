---
layout: post
title:  "The B Team: Mini-Hackathon"
date:   2019-10-24 12:00:00 +0200
categories: Physical-Computing
author: Jackson, Magda, Simon, and Jarle
image: /assets/img/b-team/bela_device.jpg
excerpt: "For the MCT 4000 mini-hackathon in the physical computing module we tried to send sound at the speed of light."
---
## Sound at the Speed of Light

For the final workshop in the Physical Computing workshop of MCT 4000, we were tasked with developing a performance that utilized the [Bela](https://bela.io/) device for a brief ["Hackathon"](https://en.m.wikipedia.org/wiki/Hackathon). The theme of the performance this year was "Recycling", a broad and flexible term, our group interpreted it quite liberally as you will see.

## Our original idea

We discussed the idea of feedback as a signal over the net, since our group consists of two of us in Trondheim and two in Oslo. This way we would be able to have some direct contact with each other, regardless of physical location, and, in theory, be able to interact through our performance. Though this list was expanded a bit after our initial ~15 minute meeting, these were the core features:

1. We have an initial trigger to increase the volume of a synthesizer on the first group member's Bela
2. The amplitude of the sound will be sent to an led, causing it to swell brighter according to the volume of the sound (no sound → LED is dark, peak amplitude → bright LED)
3. The light from the LED is then streamed through a smartphone camera over Zoom to the second team member
4. The second member of the group will have a light sensor aimed at the screen of their smartphone that is receiving this video feed of the glowing LED
5. The light sensor will then send a signal corresponding to the intensity of the brightness of the screen and trigger the activation of the synthesizer on that member’s Bela device
6. This would propagate forward to the devices of the remaining two members until it reaches the first team member’s device
7. A delay between the light sensor sending its signal to initiate the synth would allow for each of our devices to take turns in speaking
8. We would also have parameters that would be able to tune and shift the texture of the synth
Under the theme of “Recycling” we thought of this experiment as recycling sound through light (over IP)

For some reason we thought this would be a simple and possible to finish within 3 hours.

## Four major components

* An overly complicated instrument built in [PureData](https://puredata.info/) on hosted on a Bela device
* A blue LED
* A light sensor
* A smartphone to send and receive video of the LED

## Our Process

We thought that since the additive synthesis was largely complete (we were wrong), we could manage the few additional pieces we would have to configure for the transmission and reception of light in response to the instruments’ swells of sound. By the end, I think we learned that in unfamiliar territories, it is quite difficult to consider the difficulty and timeframe of a project when unsure of the details of each component from the outset.

The synthesizer was built using an additive synthesis using the harmonic series. The partials can be spread or condensed using a knob as well as the fundamental for the series. Four of harmonics were considered partials that had unique factors that were able to be manipulated. Factors that shift the frequency of these partials can be randomized with a click as well as the overall "color" of the sound - the basic principle of additive synthesis being the potential to reproduce "any" sound by manipulating the amplitude of a fundamental frequency's partials. In short, there were three knobs, adjusting, volume, fundamental frequency, and width of partials as well as three buttons that acted to initialize, as well as randomize some features.

![Pd patch](/assets/img/b-team/jarle_patch.png)

The light sensor configuration was being worked on in Trondheim, which would be able to scale the light being received from the phone screen into values that would be able to increase and decrease the volume of the synth. This was being worked on by Simon and Magda to fit the scaling of the sensor to the max/min brightness of the LED. Trondheim was also mirroring the setup we had built in Oslo. Coordination was a huge obsticle when it came to setting up four devices in parallel over two campuses.

Here is a picture of the light sensor clamped by two alligator cables.

<img src="/assets/img/b-team/light_sensor.jpg" width="50%" height="50%" align="center"/>

In Oslo, we were working on mapping the knobs and buttons to work with the Pd patch as well as figuring out how to make an LED's brightness reflect the amplitude of the sound that we were outputting from the bela through our synth. We discovered that since LED's only have two states (on/off) we had to instead modify the frequency of the LED's pulses so that it was perceived as being more or less bright (see [pulse width modulation](https://en.wikipedia.org/wiki/Pulse-width_modulation)).

Here's a photo of the config (minus the LED and light sensor)

<img src="/assets/img/b-team/bela.jpg" width="50%" height="50%" align="center"/>

## Running out of time :(

We really made an attempt, that much can be said. And, in fact, most of the components made their way into completion. The LED was responding to the audio signal in a dynamic way, the knobs and buttons were configured to interact with the patch (for a brief moment) and the light sensor was scaled to recieved light. All that was needed was to put it all together and throw in a phone. Yet, knowing how long this process itself took, one can be sure those final tasks alone would have taken a considerable amount of time. And we were out of time.

So, we resorted to playing with the synth through PureData from our laptops and sending the audio signal from our headphone jack to a speaker locally. It was quite a nice performance in itself and we were able to listen and respond to the subtle changes in texture and pitch that each of us were making through our patch. In reflection, there was a massive gap in our sense of how long this project would take and the computation details we hadn't had experience with yet. I think we made a great attempt and learned quite a lot about working with the Bela devices, audio routing, electrical engineering, and coding in PureData. It was overwhelming and perhaps we hit it _too_ head on, but oh well! 

### In Oslo

![Oslo](/assets/img/b-team/oslo_physcomp.jpg)

### In Trondheim

![Trondheim](/assets/img/b-team/trond_physcomp.jpg)

And here is a recording from our performance in Oslo.

<audio controls>
  <source src="/assets/audio/b-team/oslo_performance.mp3" type="audio/mp3">
</audio>

## Update: And yet!

We came back, to step up to bat with one final swing at the nefarious machine we had drawn blueprints for. And we did it - from one device to the other.

<iframe align="center" width="560" height="315" src="https://www.youtube.com/embed/uSiLH6WJ6Io" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

What you're seeing here is Jarle sending the sound of a synth (through a simple volume knob), that sound being converted to light based on amplitude and then the light being sent, via Zoom, through the camera from his phone and streamed to my phone screen. Trapped between the screen and a black box is a light sensor that captures the light from my screen that then modulates the volume control on my synth (with a 6s delay). You can see the Zoom session on our laptops as well.

Jarle is thereby controlling the activation of my synth through light. Afterwards, Jarle and I perform through tuning various parameters within the synth like the width of the partials, the fundamental frequency, and other spontaneous shifts achieved through randomization mapped to two of the buttons.
