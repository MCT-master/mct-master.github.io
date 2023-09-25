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



Many DMI's (Digital Musical Instruments) get stuck in the development loop because the nature of such an instrument often offers an infinite number of ways to program or add features. To alleviate frustration and achieve results, keep one thing in mind: "Stop developing, start playing!" I believe the [instrument](https://github.com/PelleJuul/dais) I'm about to describe is a good example of this concept, with several benefits and drawbacks when applying a critical analysis in the context of digital musical instruments. I will evaluate it critically from two perspectives: design principles and expressive capability.

# The Da ̈ıs -Technicalities and Mapping Strategy

<figure style="float: none">
   <img
      src="/assets/image/2023_09_25_kristeic_dais.jpeg" width="100%" />
   <figcaption>Ask yourself: What kind of sound does this instrument make/ how is it played?</figcaption>
</figure>


Apart from its somewhat cryptic name ("da ̈ıs" refers to a platform in a room where royalty or other dignified individuals would be seated), the system is relatively simple in design. Pelle J. Christensen, the instruments's creator, focused on an iterative design approach and making the project open source by providing code, CAD models, and build instructions, in addition to creating an interface suitable for controlling physical modeling sound synthesis algorithms. Nice! Let us first examine the technical setup and design process, and then see how these goals translate to the final instrument.

The Da ̈ıs [1] is made of fiberboard and is composed of a body and a plate suspended by elastic strings. The body contains an infrared proximity sensor that measures the distance between the plate and the sensor. The tilt of the plate is measured by an inertial measurement unit, and vibrotactile feedback is provided by a haptic actuator. So far, so good, but how does it keep the algorithm under control? (Christensen chose a physical model of a bowed string)

Pressing down on the plate shortens the distance between the plate and the sensor, which is in turn exponentially mapped to the algorithmic expression of pressing-the-bow-onto-the-string. The speed of a bowing stroke is equivalent to tilting the disc. Because the tilt input is not bidirectional, moving the disc to the other side does not simulate changing the direction of the stroke but instead stops the sound entirely. If you're wondering why there's a MIDI keyboard in the setup, it's because the frequency is mapped to MIDI note inputs - a simple but questionable choice for a bowed string simulation. Furthermore, the frequency is mapped to the side-to-side tilt of the disk, allowing for vibrato and pitch bends. All in all Christensen states that his instrument is "designed to provide intuitive control of multiple simultaneous parameters." Does performing with it live up to these design promise? 

You can see the creator explain and play the instrument in the following video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Zl-xNjUgyLA?si=f3Gec6-PaSjqqfBp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# Reflections on the Design Approach 

Let's have a look at Perry Cook's revisited design principles for computer music controllers [2] and put them into the context of the instrument in question.

- **"Build a (new) copy, don’t trash the original"**
The first cardboard iteration was used to test sensors and the overall effectiveness of the design. Instead of designing it entirely on paper, this method makes it simple and quick to validate or discard sensors and features. And if something goes horribly wrong, you can always start over with an earlier version.

- **"New algorithms suggest new controllers."**
To be fair, bowed string instrument physical modeling algorithms have been around for a long time. However, the Da ̈ıs' concept suggests that looking at a formula and imagining how to translate a mathematical expression into a physical application can result in the creation of a new instrument. One might think that the algorithm came first, and the instrument came second. 

- **"Copying an instrument is dumb, leveraging expert technique is smart."**
The Da s is clearly not a replica of a violin, but it does allow the user to experience violin sounds via a digital emulation of a violin. The difficult part is in the second statement. What is a suitable combination of hardware and mapping strategies in order for the instrument to afford expression, such as allowing the performer to deploy expert technique and be expressive?

<figure style="float: none">
   <img
      src="/assets/image/2023_09_25_kristeic_instrument_model.jpeg" width="100%" />
   <figcaption>A comprehensive system description of a DMI- the Da ̈ıs ticks all the boxes.  </figcaption>
</figure>

# How expressive is the Da ̈ıs?

Research on enabling DMIs to afford expression is a stable research field in the community that provides useful insight into the subject, as evidenced by these two papers [3, 4]. Several factors influence an instrument's expressive capability.
The ability to accurately capture input gestures, which includes finding an appropriate combination of sensors, musical functions, and feedback, is one factor and minimal requirement. Although the Da ̈ıs includes tactile feedback, which is useful in theory because it allows you to 'feel' where you are musically, the benefit is difficult to quantify here. This is due to the fact that it is not stated whether the tilt or depression of the disc is mapped to the intensity of the feedback or if it is simply "press-to-vibrate".


Another critical factor is the right mapping formula. At the appropriate level of structural detail, input and sonic output should be mapped to one another, which necessitates a complex enough mapping strategy. The concept of controlling algorithmic expressions with gestural input leaves plenty of room for structural detail, but it is also where the Da ̈ıs falls short. Except for the frequency, almost all parameters are mapped one-to-one. Because the disc does not need to be moved continuously, simply mapping the angle of the disc to the speed of the bow does not account for a continuous bowing gesture. The fact that negative angles do not correspond to a change in bowing direction but rather to an overall stop of the note indicates that the expressive capabilities of real bowing gestures cannot be adequately replicated. A complex mapping typically necessitates second- and third-order analyses of the input data. Christensen even suggests mapping the angular velocity of the disk to the speed of the bow, but neither the paper nor the video show this being done. Increasing the tilting angle and including input data derivatives can easily improve an expressive playstyle.

# Conclusion

In the long run, I believe that the Da ̈ıs, because it is all open source, provides a great opportunity to explore and understand how to translate sensor data into control gestures for manipulating a sound algorithm. It also exemplifies common pitfalls in adequately connecting the physical and digital worlds. The approach to the design schedule and the idea of controlling a physical modeling algorithm are where it shines.

### My sources
[1] P. J. Christensen, D. Overholt, and S. Seraﬁn, ‘The Daïs: A Haptically Enabled NIME for Controlling Physical Modeling Sound Synthesis Algorithms’, 2020.
[2] P. R. Cook, ‘Re-Designing Principles for Computer Music Controllers: A Case Study of SqueezeVox Maggie’, 2009.
[3] J. Malloch, J. Garcia, M. M. Wanderley, W. E. Mackay, M. Beaudouin-Lafon, and S. Huot, ‘A Design Workbench for Interactive Music Systems’, in _New Directions in Music and Human-Computer Interaction_, S. Holland, T. Mudd, K. Wilkie-McKenna, A. McPherson, and M. M. Wanderley, Eds., in Springer Series on Cultural Computing. Cham: Springer International Publishing, 2019, pp. 23–40. doi: [10.1007/978-3-319-92069-6_2](https://doi.org/10.1007/978-3-319-92069-6_2).
[4] C. Dobrian and D. Koppelman, ‘The “E” in NIME: Musical Expression with New Computer Interfaces’, 2006, Accessed: Aug. 25, 2023. [Online]. Available: [https://escholarship.org/uc/item/8v0022bd](https://escholarship.org/uc/item/8v0022bd)