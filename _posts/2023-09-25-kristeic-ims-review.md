---
layout: post
title:  "The Daïs: Critical Review of a Haptically Enabled NIME"
date:   2023-09-25 12:10:42 +0200
categories: interactive-music
author: Kristian Eicke
image: /assets/image/2023_09_25_kristeic_dais_thumbnail.jpeg
excerpt: "Is this a violin?"
keywords: interactive music systems, DMI, physical modeling, review, design
---

[The Daïs](https://github.com/PelleJuul/dais) is an interesting approach to designing an instrument that does not look like a string instrument, but sounds like one. Let's look at it together from two perspectives: design principles and expressive capability. Check out the full paper on the instrument [here](https://www.nime.org/proceedings/2020/nime2020_paper119.pdf).

<figure style="float: none">
   <img
      src="/assets/image/2023_09_25_kristeic_dais.jpeg" width="100%" />
   <figcaption>Ask yourself: What kind of sound does this instrument make/ how is it played?</figcaption>
</figure>

## The Da ̈ıs -Technicalities and Mapping Movement to Sound

Apart from its somewhat cryptic name ("da ̈ıs" refers to a platform in a room where royalty or other dignified individuals would be seated), the system is relatively simple in design. The instrument's creator, Pelle J. Christensen, used iterative design and made the project open source by sharing code, CAD models, and build instructions. He also made an interface that can be used to control [physical modeling synthesis](https://en.wikipedia.org/wiki/Physical_modelling_synthesis) algorithms. We like that! First, let's look at the technical setup and design process. Next, we'll see how these goals show up in the finished instrument.

The Da ̈ıs [1] is made of [MDF](https://en.wikipedia.org/wiki/Medium-density_fibreboard) and has an elastic string that holds up a plate. There is an [infrared proximity sensor](https://microdigisoft.com/irinfrared-proximity-sensor/) in the body that checks how far away the plate is from the sensor. To find out how tilted the plate is, an [inertial measurement unit](http://www.starlino.com/imu_guide.html) is used. A [haptic actuator](https://en.wikipedia.org/wiki/Haptic_technology) gives vibrotactile feedback. So far, so good, but how does it keep the algorithm under control?

When you press down on the plate, the distance between it and the sensor gets shorter. This is mapped to the algorithmic expression of pressing the bow onto the string. Tilting the disc is equivalent to a bowing stroke. Moving the disc to the other side doesn't change the direction of the stroke because the tilt input doesn't work both ways. Instead, it stops the sound completely. If you're wondering why there's a MIDI keyboard in the setup, it's because the frequency is mapped to [MIDI](https://de.wikipedia.org/wiki/MIDI) note inputs - a simple but questionable choice for a bowed string simulation. The frequency is also linked to the disk's side-to-side tilt, which lets you change the pitch and vibrato. Now you are familiar with the mechanisms of the Da ̈ıs and we will have a deeper look into the design next. But before that, check out the creator of the instrument explaining and playing it down below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Zl-xNjUgyLA?si=f3Gec6-PaSjqqfBp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Reflections on the Design Approach 

Perry Cook is an icon within the digital musical instrument design scene and established many [design principles](https://www.researchgate.net/profile/Perry-Cook/publication/254200029_Re-Designing_Principles_for_Computer_Music_Controllers_a_Case_Study_of_SqueezeVox_Maggie/links/5d8f98dd92851c33e9462a27/Re-Designing-Principles-for-Computer-Music-Controllers-a-Case-Study-of-SqueezeVox-Maggie.pdf) over the years. **"Build a (new) copy, don’t trash the original"** is one of those principles, and the Da ̈ıs is a good example of this.The first cardboard iteration was used to test sensors and the overall effectiveness of the design. Instead of designing it entirely on paper, this method makes it simple and quick to validate or discard sensors and features. And if something goes horribly wrong, you can always start over with an earlier version.
Joseph Malloch and other authors give further advice on how to be effective when [designing a digital musical instrument](https://www.researchgate.net/publication/320841639_A_Design_Workbench_for_Interactive_Music_Systems). They state, for example, that amplitude requires energy. Simply put, you need to constantly do something in order for the instrument to make sound. Think of all traditional instruments. There isn't one that keeps making noise even after you stop putting energy into it. In that case, the Da ̈ıs is good because you have to press down on the plate a certain distance to hear it. Then, Malloch says that two hands are better. This is kind of true for our plate-based string instrument, but only because it takes pitch input from a MIDI keyboard. It's not really a win. Lastly, you should use complex mappings. When you change one parameter, it should affect other parameters. Again, this is largely untrue for the Da ̈ıs, since almost all mappings are one-to-one. This has an effect on expressivity, as we will see. 


## How expressive is the Da ̈ıs?

Christensen says that his instrument is "designed to provide intuitive control of multiple simultaneous parameters." Does performing with it live up to these design promise? 
You can find the papers I used to find out how to make a digital musical instrument more expressive [here](https://www.researchgate.net/publication/320841639_A_Design_Workbench_for_Interactive_Music_Systems) and [here](https://escholarship.org/uc/item/8v0022bd). There are several factors to consider that influence an instrument's expressive capability.
The ability to accurately capture input gestures, which includes finding an appropriate combination of sensors, musical functions, and feedback, is one factor and minimal requirement. Although the Da ̈ıs includes tactile feedback, which is useful in theory because it allows you to 'feel' where you are musically, its benefit is difficult to quantify here. This is due to the fact that it is not stated whether the tilt or depression of the disc is mapped to the intensity of the feedback or if it is simply "press-to-vibrate".


Another critical factor is the right mapping formula. At the appropriate level of structural detail, input and sonic output should be mapped to one another, which needs a complex enough mapping strategy. The concept of controlling algorithmic expressions with gestural input leaves plenty of room for structural detail, but it is also where the Da ̈ıs falls short. Except for the frequency, almost all parameters are mapped one-to-one. Because the disc does not need to be moved continuously, simply mapping the angle of the disc to the speed of the bow does not account for a continuous bowing gesture. The fact that negative angles do not correspond to a change in bowing direction but rather to an overall stop of the note does not let you replicate a real bi-directional bowing gesture. A complex mapping is recommended to have second- and third-order analyses of the input data. Christensen even suggests mapping the angular velocity of the disk to the speed of the bow, but neither the paper nor the video show this being done. Increasing the tilting angle and including input data derivatives can easily improve an expressive playstyle.

## Summing up

In the long run, I believe that the Da s, because it is all open source, provides a great opportunity to explore and understand how to translate sensor data into control gestures for manipulating a sound algorithm. It also exemplifies common pitfalls when trying to connect the physical and digital worlds. The approach to the design schedule and the idea of controlling a physical modeling algorithm are where it shines.