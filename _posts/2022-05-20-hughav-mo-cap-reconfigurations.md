---
layout: post
title: "Reconfigurations: Reconfiguring the Captured Body in Dance"
date: 2022-05-20 09:00:00 +0200
categories: motion-tracking
author: Hugh Alexander von Arnim
image: /assets/image/2022_05_20_hughav_created_body.png
excerpt: "Building cooperative visual, kinaesthetic, and sonic bodies"
keywords: Motion Capture, Optical, Dance, Motion, Sonification
---

## **Introduction**

Optical motion tracking systems allow the body's motion to be captured in precise detail in 3 dimensional space. These capture systems are used in many contexts, from analytical tools to performance capture for films and games and use a marker based approach, with individual markers placed on the body forming the basis out of which skeletons or rigid bodies are constructed. The assumption is also that these markers remain in a fixed position on the body. However, there's an interesting idea in this: when we capture the motion of a body with such a system we aren't actually capturing the full body, just the points we decide to. In a live performance capture context, this means that a performer need only reveal as much of their body as they wish. They have control over the representation of their body and in addition, the capture anonymises them to an extent. The flip side of this, however, is that just looking at the points from a capture, the audience tends to assume that anything vaguely resembling a part of a human body <i>is</i> just a part of a body, and, at that, a body which tends towards the idealised body. If a capture is purely the upper body, for example, we assume that the rest of the body is still there.
<br>
<figure style="float: none">
   <img src="/assets/image/2022_05_20_hughav_markers.png" alt="" title="" width="auto" />
   <figcaption><i>Markers on a human body in OptiTrak Motive (from https://v22.wiki.optitrack.com/index.php?title=Skeleton_Tracking) </i></figcaption>
</figure>
<br>
<i>Reconfigurations</i> is an attempt to work with this idea and encourage performers to cooperate to build bodies together bigger than their own. Two performers perform motions in a performance space setting markers on their bodies where they wish and moving them around at will. A third performer configures and links these markers on a visual display to form shapes and bodies that are beyond what is possible to make with as a single person. Each body is also sonified with a different timbre. The position of the markers on the horizontal plane determines pitch and on the vertical axis amplitude.
<br>
<br>
The system is designed to work for two use cases; choreographed dance performance, in which the dancers plan out specific shapes, bodies, and sounds and transition between these with purpose, and an interactive installation to allow non-trained members of the public to explore the visual, kinaesthetic, and sonic space offered by the system.

## **System Design**

<br>
<figure style="float: none">
   <img src="/assets/image/2022_05_20_hughav_displays.jpg" alt="" title="" width="auto" />
   <figcaption><i>Left: Control Display, Centre: Performance Display, Right: Performers in Performance Space</i></figcaption>
</figure>
<br>


The entire performance system is run over four components; the optical motion capture system that tracks the markers and passes on their position data, a control display that enables the third player to link the markers and assign them to shapes and bodies, and which passes this data onwards to the further two components, a performance display that visualises the results for the performers and audience, and a sonification patch. Data is passed between these components over [OSC](https://en.wikipedia.org/wiki/Open_Sound_Control). A prototype system implemented these specifically to fit the specific space of the portal.

<br>
<figure style="float: none">
   <img src="/assets/image/2022_05_20_hughav_performance_space.jpg" alt="" title="" width="auto" />
   <figcaption><i>Performance space in the portal</i></figcaption>
</figure>
<br>

<br>
<figure style="float: none">
   <img src="/assets/image/2202_05_20_hughav_reconfig_system_design.jpg" alt="" title="" width="auto" />
   <figcaption><i>System Data Flow</i></figcaption>
</figure>
<br>

### **Optical Motion Capture System**

The optical motion capture system used in the prototype system was [OptiTrak Motive](https://optitrack.com/software/motive/). Motive enables the live broadcast of position data, so fits the needs of the <i>Reconfigurations</i> system. In addition, instead of using basic markers, rigid bodies are employed in their place. This means that each broadcast position has a unique identifier, which helps in regards to marker dropout and occlusions.

<br>
<figure style="float: none">
   <img src="/assets/image/2022_05_20_hughav_rigid_bodies.jpg" alt="" title="" width="auto" />
   <figcaption><i>The 30 rigid bodies used as markers in performance</i></figcaption>
</figure>
<br>

### **Control Display and Performance Display**

The control display and performance display show the positions of each rigid body as a single marker. The control display is interactive and used by the third performer in order to assign markers to bodies and shapes, enable and disable individual markers, and link the markers together visually. The performance display mirrors the control display without any of the visual information required for interaction. This is displayed on a screen visible both to the audience and the performers.

### **Sonification**

There are five bodies available to the performers, each with their own timbre and characteristic. Each enabled marker in the body drives a sound generator with the pitch determined by the position of the marker on the horizontal plane and the amplitude determined by the position on the vertical axis. However, there are two different pitch mappings, one for the choreographed dance use case and one for the interactive installation use case.

The first case maps several bodies markers to a continuous frequency range, enabling microtonal playing, and several to the 12-tone equal temperament chromatic scale. This is to ensure that the majority of spatial configurations result in dissonance, allowing the choreography to shift into consonances with purpose.

The second case maps the markers for every body to the minor pentatonic scale. This is to enable the untrained users of the interactive music system to work purely in consonances so that no choreography has to be planned.

Audio examples of the five timbres coming soon…

### **Performance with the Prototype System**

<br>
<figure style="float: none">
   <img src="/assets/image/2022_05_20_hughav_guitarist.jpg" alt="" title="" width="auto" />
   <figcaption><i>The performers forming and moving as a 'guitarist'</i></figcaption>
</figure>
<br>

A test performance with the prototype is soon to take place. Video and reflections coming soon…
