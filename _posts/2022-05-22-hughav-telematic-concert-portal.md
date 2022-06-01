---
layout: post
title: "Spring Telematic Concert 2022: Portal Perspectives"
date: 2022-05-26 08:00:00 +0200
categories: portal
author: Oliver Getz, Sofía González, Arvid Falch, Hugh Alexander von Arnim
image: /assets/image/2022_06_01_jakobhoydal_thumbnail2.jpg
excerpt: "Guitar and MoCap in the Portal + behind the scenes documentary!"
keywords: Telematic, Machine Learning, Network, Motion Capture
---

To cap off a long semester of machine learning and Motion Capture (MC) we held our final Portal course telematic concert, this time between the Portal and the Science Library at UIO. For this concert we decided to add in a little complexity; not only would we be employing interactive music systems based around machine learning and motion capture with visual components, but we would also allow the audience to participate in one section of the concert. Integrating all of these components proved a challenge, but one that we were happy to take on.

<figure style="float: none">
   <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/oQZnOlRMfy0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
   </iframe>
  <figcaption>Take a look behind the scenes!</figcaption>
</figure>

## **Performances**

The concert was split into two halves, comprising two performances. The first performance was an improvisation between Arvid on electric guitar in the Portal, and Kristian on keys and Joseph on percussion at the Science Library. Kristian also added effects and looped the guitar sound from the portal using a MYO armband and a Zoia synthesizer (more on this system [here](https://mct-master.github.io/portal/2022/05/20/kriswent-extending-the-keyboard-through-motion-capture-and-modular-synthesis.html)).

The piece started out minimalistic and quiet, and slowly grew in intensity. The mix between the raw guitar sound coming from the amplifier and the treated audio signal from the Science library created an interesting listening experience in the portal. Some interesting timbral textures and motifs were created during the piece, and after slowly reaching a climax the improvisation found its end in a slow, drifting fade out of reverb and delay. The performers in the Science Library were visible on two monitors in the Portal, enabling visual contact and helping the single performer in the Portal to feel as part of an ensemble.

<figure style="float: none">
   <img src="/assets/image/2022_05_26_hughav_arvid_guitar.png" alt="" title="" width="100%" />
   <figcaption><i>Arvid performing</i></figcaption>
</figure>

The second performance involved integrated two motion controlled systems. In the Portal, Hugh set up the optical MC marker reconfiguration and sonification system (more on this system [here](https://mct-master.github.io/motion-tracking/2022/05/20/hughav-mo-cap-reconfigurations.html)), with the resulting audio being sent over LOLA to the Science Library for manipulation and effects added by Joachim’s machine learning based, gesture parameter controller. This performance was carried out by audience members briefed on the systems’ operation and asked to interact with each other. This led to some interesting results with the interactions providing musical ideas novel to both Hugh and Joachim.

However, there were several difficulties in this setup. Firstly, due to the LOLA camera and microphone setups there were no methods through which the audience members using the system on each side could communicate with each other. Secondly, due to both sides' musical output being gesture controlled and involving synthesized sound, there was some confusion on the portal side of what exactly the motion was controlling. One audience member even started moving their rigid body according to the pitch modulation effect being applied in the Science Library. Nonetheless, reports from the Portal side indicated that the audience members had fun and enjoyed both the motion controlled systems and the interaction over the LOLA network.

<figure style="float: none">
   <img src="/assets/image/2022_05_26_hughav_mo_cap_performers.png" alt="" title="" width="100%" />
   <figcaption><i>The motion capture performers</i></figcaption>
</figure>

## **Technical Setup**

<!-- <figure style="float: none">
   <img src="/assets/image/2022_05_26_hughav_arvid_tech.png" alt="" title="" width="100%" />
   <figcaption><i>Arvid monitoring LOLA</i></figcaption>
</figure> -->

The portal technical setup was centred on the LOLA rack, used for sending both audio and video to the Science Library. For the first performance, the guitar’s output setup was sent directly for Kristian to manipulate. The MC system was a little more complex, as this involved using four computers communicating via OSC. The audio output of the system was sent directly over LOLA.

Additionally, the MC system also involved a visual component, showing the rigid bodies’ position which needed to be displayed in the Science Library. However, sending two video feeds (the performers’ camera and the visuals for the MC system) caused some display problems.

The solution we found was to simply place a monitor showing the MC output directly in front of the camera. This worked to an extent, however this obscured the performers and could be difficult to make out on the screen sometimes. Moreover, it was difficult to draw the audience’s attention to it in the Science Library. Jakob (Science Library) suggested streaming the visual output over Zoom, as this allowed picture in picture placement on the Science Library’s side. Despite adding a large amount of latency between the Science Library’s view of the Portal performers and the visualizations, we decided that this would be the best option to clearly display them both.

<figure style="float: none">
   <img src="/assets/image/2022_05_26_hughav_portal_concert_routing.jpg" alt="" title="" width="100%" />
   <figcaption><i>Routing in the Portal</i></figcaption>
</figure>

## **Production**

In order to promote our concert, we contacted the people responsible for the IMV’s and the Science Library’s social media accounts. We created a Facebook event for the concert that we sent to the social media representatives to share and that we also shared on the IMV Facebook group. Additionally, the Science Library representative permitted us to take over the official Instagram account on both the day before and the day of the concert to upload promotional stories. Finally, we put up posters around campus, and we were covered and ready to concert!

## **Behind the Scenes Documentation**

Oliver documented the process and music systems by making a behind-the-scenes video, to showcase what can be done for telematic music concerts. A video also makes it easier to explain these complex processes in a relatively short amount of time. We used the only equipment available to us, a camcorder. As a result, some footage had to be thrown out due to clipping audio, as audio monitoring is limited on these devices. In retrospect, we should have narrated the video a bit more to make the timeline clearer and ensure the viewers know what’s happening and why. Some background music might help fill empty space in the video as well, but we managed to reduce this emptiness by overlapping dialogue between clips.

## **Conclusions**

As a final Portal concert, this felt like a culmination of the skills learnt over our first year in MCT. Our comfort with the Portal equipment, LOLA connections, and telematic performance made the process smooth and simple, allowing us to expand to include other techniques that we’ve acquired, such as using machine learning and the Portal’s motion capture system. Now we’re looking forward to taking the role of the audience, and seeing how next year’s MCT intake surprises us in their concerts!
