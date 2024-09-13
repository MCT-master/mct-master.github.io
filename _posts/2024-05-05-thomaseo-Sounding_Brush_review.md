---
layout: post
title:  "Review of Sounding Brush: a graphic score IMS?
"
date:   2024-09-12 10:48:00 +0200
categories: interactive-music
author: Tom Oldfield
image: /assets/image/2024_09_12_thomaseo_sounding_brush_1.png
excerpt: "A critical review of a drawing-based interactive music system"
---
### Introduction
Graphic notation/scores have been used in experimental music composition since the 1950s, pioneered by notable composers such as John Cage, Karlheinz Stockhausen, Krzysztof Penderecki and Iannis Xenakis. The graphic score exemplifies a shift away from the rigidity of traditional western classical music towards a more interpretive and experimental style. Here, the doodles and written instructions of a composer become the music when performed by a musician, but what if the score could become the instrument too?
<br>


<figure style="float: none">
  <img src="/assets/image/2024_09_12_thomaseo_sounding_brush_1.png"
  width="80%"
  style="display: block; margin: auto;" />
  <figcaption>An example of a graphic score from John Cage’s book: Notations (1)</figcaption>
</figure>


### Sounding Brush
For this, we must look to a more recent area of music research called Interactive Music Systems (IMS) and specifically, a work called Sounding Brush. The Sounding Brush is, in the words of it’s creators, a “tablet based musical instrument for drawing and mark making” (2). The instrument takes the form of an iOS application designed to be used with an iPad which harnesses the gestures of drawing to generate a variety of synthesised sounds and textures. Sounding Brush was developed by Sourya Sen, Koray Tahiroglu and Julia Lohmann working at Aalto University in Finland and was presented at the New Interfaces for Musical Expression (NIME) conference in 2020.
<br>


<figure style="float: none">
  <img src="/assets/image/2024_09_12_thomaseo_sounding_brush_2.png"
  width="60%"
  style="display: block; margin: auto;" />
  <figcaption>A screenshot of Sounding Brush (3)</figcaption>
</figure>


### But is it an 'instrument'?
But how can drawing on a tablet be considered a musical instrument? Well, according to Atau Tanaka an instrument can be described as an ‘Open-ended system’ made up of different parts; an input device, mapping algorithms, a sound synthesis engine, compositional structure and an output system (4). Sounding Brush definitely ticks these boxes. This diagram of a gestural controller for sound synthesis can help us to examine the Sounding Brush in more detail.
<br>


<figure style="float: none">
  <img src="/assets/image/2024_09_12_thomaseo_sounding_brush_3.png"
  width="80%"
  style="display: block; margin: auto;" />
  <figcaption>A diagram of a gesturally controlled IMS (5)</figcaption>
</figure>

In the top left, we have the incoming gestures. In our case, gestures of drawing/painting being captured by touchscreen of the iPad. The user has the additional control of choosing a particular ‘brush’ which represents a different synthesis technique alongside selections for colour and character. In addition to the capture of drawing/painting gestures, the Sounding Brush also utilises the accelerometer sensors within the iPad to manipulate sound whilst in a specific mode.
<br>


<figure style="float: none">
  <img src="/assets/image/2024_09_12_thomaseo_sounding_brush_4.png"
  width="80%"
  style="display: block; margin: auto;" />
  <figcaption>UI menu of Sounding Brush (3)</figcaption>
</figure>


In this case, the Primary feedback can be considered the visual representation of these gestures as the image on the screen (although some of these also undergo some additional processing to make them more representative of the type of brush used).
<br>


### Mappings
The Sounding Brush most commonly utilises a series explicit mapping strategies in a ‘one-to-one’ relationship (6). In the image below, this is demonstrated by any arrow which begins at one performance action and arrives at one synthesis input without any splitting off or being influenced by another arrow. In our case, the Y coordinate of the pen on the tablet could be mapped to the frequency of a sinusoidal wave, for example.

Generative mappings are employed in the more 'textural' brushes - Particles and Crackling. The gesture of painting with these brushes controls some elements of the sound generation but others are controlled by generating random values which also evolve over time. This can also be considered a 'one-to-many' mapping strategy as one action affects multiple synthesis parameters.
<br>


<figure style="float: none">
  <img src="/assets/image/2024_09_12_thomaseo_sounding_brush_5.png"
  width="60%"
  style="display: block; margin: auto;" />
  <figcaption>A diagram of mapping strategies (6)</figcaption>
</figure>


### That’s enough diagrams. Let’s talk music.
The Sounding Brush makes different sounds depending on the selected mode. These modes are based on various synthesis/sound generation techniques such as: additive, subtractive, granular and proceedural (2). Sounds are both performed as the pen touches the touchscreen, and layered to create an overall soundscape-type composition. Sounds are mostly ‘frozen’ at the last point the pen touched the tablet (for each line) which, like painting on a canvas, encourages the user to draw a soundscape frozen in one particular moment in time.
<br>


### A different interface?
One of the advantages of Sounding Brush is it’s user interface (UI) design which provides an alternative to the vast majority of available mobile music applications. More often than not, these are based on a pre-existing non-mobile instruments or music interfaces such as Digital Audio Workstations (DAWs), sequencers, pianos and analog synthesisers. The authors see this as a  democratisation of mobile music applications by removing labels like frequency or resonance and in fact, any remanence of traditional music interfaces and replacing it with an activity that almost everyone can relate to - drawing. Anyone from young children to adults, from zero musical training to professional musicians, doodlers to painters can generate audio-visual art using this device.
<br>


### Summary
Despite being (relatively) conceptually straightforward, this work occupies an interesting intersection between audio and visual creative practice. The metaphor of a painter with a blank canvas, choosing colours and brush types, encourages the user to approach making music in a novel way and builds on the tradition of graphic scores in contemporary composition.

The developers mention their ideas for improvements in (1) including the ability to save and load compositions and import samples to the granular synth engine. I would like to see further development on the motion control aspect. Currently this generates new sounds but would it be possible to use this as a way of manipulating the entire composition? This would give a greater separation to the functionality of the two different control methods where at the moment they essentially have similar results to using the pen in the granular synthesiser mode. Could global parameters such as dynamics, filtering, reverb/delay and other FX be controlled in this manner?

Accessibility and low entry level aside, I would love to see a scaled up version of this, perhaps as an installation, or live performance piece, with a much larger touchscreen and greater controls over the colour and texture of the image.
<br>


### References
1. ’Notations’ by John Cage. Available [here](https://monoskop.org/File:Cage_John_Notations.pdf).
<br>
2. S. Sen, K. Tahirog, and J. Lohmann, “Sounding Brush: A Tablet based Musical Instrument for Drawing and Mark Making”, Proceedings of the International Conference on New Interfaces for Musical Expression, 2020 DOI: 10.5281/zenodo.4813398  
<br>
3. Presentation video for Sounding Brush. Available [here](https://www.youtube.com/watch?v=7RkGbyGM-Ho).  
<br>
4. A. Tanaka, “Sensor-Based Musical Instruments and Interactive Music”, Oxford University Press, 2011. doi: 10.1093/oxfordhb/9780199792030.013.0012.  
<br>
5. M. M. Wanderley and P. Depalle, "Gestural control of sound synthesis," in Proceedings of the IEEE, vol. 92, no. 4, pp. 632-644, April 2004, doi: 10.1109/JPROC.2004.825882.  
<br>
6. A. Hunt, M. M. Wanderley, and R. Kirk, “Towards a Model for Instrumental Mapping in Expert Musical Interaction”, In ICMC, 2000.  