---
layout: post
title: "Shaaape"
date: 2020-11-02 16:00:00 +0200
categories: digital-audio
author: Henrik Sveen
image: /assets/image/2020_11_02_henrikhs_shaaapefront.png
keywords: digital-audio, csound, am, distortion, phasing, dsp, cabbage
excerpt: "Distorting signals with ghost signals."
---
<figure style="float: auto">
   <img src="/assets/image/2020_11_02_henrikhs_shaaapefront.png" alt="Should show picture..." title="" width="auto"/> <figcaption></figcaption>
</figure>

Introducing *shaaape*, a tanh distortion effect unit based on an idea of driving a signal with an added "ghost signal". The inspiration is based on how loud low frequencies effect higher frequencies in speakers. How a loud sub bass can cause fluttering in the treble (trouble in the treble). So I went about trying to recreate the effect as a plugin so it could be used musically.

#### Processing
The input signal is being distorted summed with a "ghost signal" (in this case a sine wave and a filtered random oscillator. Hereby reffered to as GS.) which is being phased out of the output signal. The benefit of dealing with digital distortion is that a signal can be distorted identically in two places. So the GS is not only being distorted in the main distortion, it is also being distorted equally much in it's own distortion channel. The purpose of this is to create a distorted GS that is equal to the GS distorted in the main distortion so that it can be phased out after the main distortion. It's a tounge-twister, so hopefully this illustration will help understanding what's going on.

<figure style="float: auto">
   <img src="/assets/image/2020_11_01_henrikhs_shape of shaaape.png" alt="Should show picture..." title="great job, you understand it now!" width="auto"/> <figcaption>Illustrating the shape of shaaape we see that it is an quite easy way of processing</figcaption>
</figure>

Input and mod have individual amps before they are being summed for the main distortion channel. Also mind that the signal chain is stereo for both carrier and modulation. I chose the tanh type distortion due to it's "analog roundness" compared to the hard clipping of a clip type distortion. Future possibilities in trying different distortion types - even *difference* in distortion types between the two channels (+left/right). I have dont some testing of this, but without any convincing results. Usually, due to the phasing towards the end, the result is an audible sine wave playing at the given frequency. Presumably this phenomenon occurs because it isn't getting phased out properly.
Before outputting I included a Low Pass Filter for the purpose of cleaning up heavily distorted signals. It's controlled by the distortion amount to keep things simple. At the end, and beginning, there's a gain balance which let's you tilt the gain-staging between input and output. Kind of controlling how hot the signal chain is. This gives more flexibility in how hard you want to go with the distortion and filter, and will also affect how the mod-amount is behaving.

#### Demos
Video showing what *shaaape* does, from subtle to extreme and some tweaking. Sound source is a stereo drum loop.
<figure style="float: none">
  <video width="600" controls>
    <source src="https://drive.google.com/uc?&id=1ya5T2CTRzg1G61BRVPeJN7QVGN1ryJ8w" type='video/mp4'>
    Should show a video...
  </video>
  <figcaption></figcaption>
</figure>

White noise through shaaape to give an impression of how it flutters audio:
<figure style="float: auto">
   <img src="/assets/image/2020_11_02_henrikhs_whitenoise.png" alt="Should show picture..." title="you can follow the automation lane while you listen to the sound example" width="400"/> <figcaption></figcaption>
</figure>
<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1k89XTKlSTNHFvvRBtjT6Wty21ZXiInY8" type="audio/mpeg">
    Alternate Text
  </audio>
  <figcaption></figcaption>
</figure>

Used as bass synth on guitar sample:
<figure style="float: auto">
   <img src="/assets/image/2020_11_02_henrikhs_guitarexample.png" alt="Should show picture..." title="showing the structure of the sound example" width="400"/> <figcaption></figcaption>
</figure>
<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1AaEGVAXABslSyQyq9tvLFsfcnML4SjVQ" type="audio/mpeg">
    Alternate Text
  </audio>
  <figcaption></figcaption>
</figure>

Short example of stereofication. Mono drum sample going "stereo" halfway through:
<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=14CKszUS7FfxAHL7mlZDKMc-jtVVaA7Ig" type="audio/mpeg">
    Alternate Text
  </audio>
  <figcaption></figcaption>
</figure>


#### Shaaape, shaaape - what is it good for?
/-hopefully not nothing-/

Why not just use a regular ringmod, amp it and then add a distortion? Great question. It would do for the same purpose, though I found there are interesting random glitching happening when turning the knobs and trying different levels. Also putting everything together in one package like this opens for mappings and also a different approach for working with the parameters.

I have been using the Max/MSP prototype for a while. This new version is more aggressive, but also has more interaction between parameters. That being different knobs adjusting the intensity of others and control mappings.

Personally I like to use it on drums and bass, and as a stereofication tool. The stereo modulation is quite transparent on low amounts and with random mod-source, adding width to a track. Somewhat inspired by the brainworx channel strip plugins, where they use TMT (Tolerance Modeling Technology) to mimic the marginal differences between the 72 tracks on a mixing console. Applying two different analog channel strips to a mono sound source will spread it out slightly, due to the different wear on analog components, especially in old mixers. Sort of spreading to stereo due to differences in dynamic information.

#### Final thoughts
The plugin is in my opinion a fun little tool to use. Distortion and filtering sounds quite nice and the modulations open for weird, glitchy sounding stuff. *Shaaape* does a good job of making sounds more unpredictable and to some degree more "organic". Like all distortion and overdrive it sounds good on drums, but I've been getting interesting results on synths as well as vocals.

There is some interesting potential in looking into playing *shaaape* as a keyboard instrument on an audio input carrier, like the guitar sample example. Though this is a slightly different instrument/effect than this intends to be. So it would be for another project.

I have done my best to set proper gain-staging for the signal path, though I experience that there are still improvements to be done here. For now I have gained/lowered signals outside the plugin. Took a stance at not having both input and output knobs to keep number of dials down, but maybe some refinement can be done to the "in out" dial to make it more effective. Kind of curious about AI, or even just simple algorithms, for things like this in plugins. Could be cool.

If you want to try it, please do so. Below are the vst/vst3/au files to download. Mind that if you're an AU user, you should also include the "shaaape_01.csd" in your Components folder. Else it won't work. It's a Cabbage thing. Have fun.

# [Downlaod *shaaape* for free!](https://drive.google.com/file/d/1U6R0T-2-sQSocErvTCZ4g-ePTNFC590P/view?usp=sharing)
