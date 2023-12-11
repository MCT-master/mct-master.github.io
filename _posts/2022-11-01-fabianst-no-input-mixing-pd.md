---
layout: post
title:  "How to do No-Input Mixing in Pure Data"
date:   2022-10-01 13:54:42 +0200
categories: sound-programming
author: Fabian Stordalen
image: /assets/image/2022_11_01_fabianst_toshimaru.jpg
excerpt: "No-Input Mixing in Pure Data"
keywords: Pure data, No-input Mixing, programming 
---

# What is No-Input Mixing?

No-Input Mixing is a way of using a traditional mixing board as an instrument which you can play. The technique was developed by japanese experimental composer [Toshimaru Nakamura](http://www.toshimarunakamura.com/bio) who started experimenting with plugging mixing board outputs into inputs which would then create feedback-loops. These highly unpredictable feedback-loops could then be controlled using the various knobs on the mixer. By using this technique you can easily create quite interesting noises and soundscapes. Take a listen to one of Nakamura's pieces [here](https://www.youtube.com/watch?v=nN3WqRs60BY).

## No-Input Mixing in Pure Data
So what if you wanted to recreate the sound of a no-input mixer by using Pure Data? This can be done by creating an artificial feedback-loop using delays. Here is a simple patch showing how it can be done using white noise as the sound source for the feedback-loop. I am using a wrapper for Pure Data called [Plug Data](https://puredata.info/downloads/PlugData), but everything shown can be recreated in vanilla PD. You can also download the patch [here] If the "Feedback Volume" exceeds 1 then the delay will start creating a feedback-loop and if you change the "Delay Time" then the sound of the feedback will drastically change, especially if the delay time is short. <figure style="float: none">
   <img src="/assets/image/2022_11_01_fabianst_feedbackloop.png"  title="Feedback Loop" width="auto" max-height="600px" />
</figure>
By experimenting with different input sources you can easily create different textures. You can for example use an oscilator by using "osc~" or perhaps your computers microphone by using "adc~" You can also combine multiple feedback-loops which I have done in this patch. 
<figure style="float: none">
   <img src="/assets/image/2022_11_01_fabianst_bigfeedbackloop.png"  title="Feedback Loop" width="auto" max-height="600px" />
</figure>

Here I've combined two different oscilators and some white noise which are controlled by separate sliders. Then the signals are mixed together and sent to a reverb. Each feedback-loop has it's own volume slider so you can adjust the volume of each element. The number box above each oscilator changes the frequency produced which can lead to interesting results. If you're using frequencies which are close to each other it will create a pulsating effect like in the image above.

Experimenting with different effects and where they're placed in the signal chain can lead to interesting results. You can for example add a chorus effect on one of the oscilators and a phaser to the other one. Or maybe you can replace the oscliators with more advanced forms of synthesizers like an FM or a Granluar synth. Plug Data can also work as a VST which means you can use the patch inside of your DAW, record everything and then further process it.

## Finished 
Finally I made a nicer looking GUI for the patch.

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_09_12_fabianst_mixerdone.png"  title="GUI done" width="auto" max-height="600px" />
</figure>

## Files

Download the Pure Data patch [here](https://github.com/FabianStord/PD_noinputmixer)