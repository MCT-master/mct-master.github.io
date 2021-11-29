---
layout: post
title: "Telematic Reality Check: An Evaluation of Design Principles for Telematic Music Applications in VR Environments"
date: 2021-09-22 21:30:00 +0200
categories: portal
author: Oliver Getz
image: /assets/image/2021_09_22_olivergr_telematic_reality_check_thumb.jpg
excerpt: "7 steps for better virtual reality music applications!"
keywords: virtual reality, virtual reality musical instrument, vrmi, design, telematic music application
---
<figure>
    <img src="/assets/image/2021_09_22_olivergr_telematic_reality_check_world.jpg" align="center" />
</figure>
# Introduction
In *The Telematic Music System: Affordances for a New Instrument to Shape the Music of Tomorrow*, Braasch proposes a pragmatic way of thinking about designing telematic music applications for VR, and by extension Virtual Reality Musical Instruments (VRMIs). Here I will present this perspective along with another, discuss their usefulness, and highlight the most important principles. As you will learn, some of the design principles presented are outdated given the current pace of innovations in the field. To conclude this evaluation, I present an alternative design solution based on these two papers and my own experience in virtual reality. I am proposing a modern set of actionable design choices for creating VRMIs that appeal to the average user and invites experienced musicians to innovate musically in a novel environment.

# The Affordances of VR
When designing a virtual reality telematic application, the only way to make it useful is to focus on the affordances of the virtual environment, the properties that determine how it most intuitively should be used (Braasch, 2009). This applies whether or not there are similarities between the telematic environment and the physical world. The current standard to which we measure the quality of a virtual reality project is most often how closely it mimics the real world, which does not translate well to musical instruments for two main reasons: signal degradation and latency. VRMIs, and virtual telematic environments, will for these reasons not be able to compete with a traditional venue. It is therefore proposed that the design process starts by answering the following questions:
1. What does a telematic environment provide that traditional onsite music venues cannot offer?
2. What can be communicated in a co-located (distributed) music performance that other forms of telecommunication, such as speech, cannot provide at the same level?

This perspective is difficult to argue against. Designing anything by utilising the weaknesses of its environment is swimming against the current. It’s difficult to do, takes much longer, and rarely produces a desired result. One thing this paper lacks, however, is specific design principles that can be measured and tested. This is where our next paper provides some insight.

# Virtual Reality Musical Instruments
As opposed to the former perspective, *Virtual Reality Musical Instruments: State of the Art, Design Principles, and Future Directions* (Serafin, 2016) outlines 9 actionable design principles that can be used for developing telematic music applications in virtual reality. Some of these are based on avoiding common technological obstacles rather than making decisions from the affordances of the system. Paraphrased for clarity, the complete list of design principles are:
1. Design for all types of feedback: auditory, visual, touch, and motion, as this helps the user learn how to use the VRMI.
2. Prevent latency.
3. Prevent cybersickness.
4. Extend physical instruments to translate skillsets.
5. Do not dismiss non-realistic interactions.
6. Prevent strain and discomfort caused by hardware.
7. Create a feeling of presence.
8. Represent the player’s body.
9. Include social interactions.

<figure>
    <img src="/assets/image/2021_09_22_olivergr_telematic_reality_check_eval.jpg" align="center" />
</figure>

# Evaluation
Since the writing of Telematic Music System Affordances we are seeing more projects that play on the strengths of VR to great success, albeit perhaps not within the field of telematic music. Projects that come to mind are *Job Simulator* by Owlchemy Labs (2016) and *Beat Saber* by Beat Games (2018), both in which the user is statically positioned, relying on turning as a means for orientation and using virtual tools and objects to interact with other objects out of arm's reach. Additionally, there have been developments in tracking movement as with redirected walking (RDW), which applies gains when the user’s path is curved (Langbehn et al. 2017). This allows for great flexibility when developing large virtual environments.

## Hardware Limitations
While preventing latency, cybersickness, and discomfort are important, I am unsure if they hold up as design principles specifically for telematic music applications and VRMIs as they are necessary considerations for any virtual reality application. Furthermore, with the release of Oculus Quest and other wireless HMDs we have greater freedom today with regards to how we design for movement without causing discomfort, and latency will always be an issue when more than one person is contributing in a virtual environment due to constraints in the physical world.

Few instruments in the physical world are designed with ergonomics in focus, at least in regards to extended use. Musicians experience work related injuries every day. This is not to say preventing discomfort should be dismissed as a design principle, but rather that many instruments have had success regardless of the discomfort they provide. The question is, for how long can an instrument be played before causing discomfort, and is this timeframe acceptable for learning to play the instrument?

## Interaction
With regards to interaction, it is not recommended to represent any part of the user’s body that is not directly needed for running the application—the physical-virtual points—as this is where the user’s attention lies.

On the point of social interaction and collaborative performances, while growing, the VR audience is still comparatively small. If the instrument is too complicated, few artists would want to spend hours or days learning it to perform for a niche and select group of people with the exception of an occasional marketing stunt. I propose making VRMIs that are accessible to the average person as well as musicians, if the social aspect should truly be a principle of design. This would further allow integration with popular contemporary social VR environments without alienating their user base.

## Design Principles
With these considerations in mind, along with the desire to provide actionable points, these are the design principles I propose for the development of telematic music applications in VR:
1. Design for all types of feedback.
2. Extend physical instruments to translate skillsets.
3. Do not dismiss non-realistic interactions and movement if they feel natural in the virtual environment and do not cause discomfort.
4. Do not disrupt the feeling of presence, necessary for accurate orientation and feedback.
5. Represent the user’s virtual-physical interaction points (eg. hands or feet).
6. Keep the system accessible, do not overcomplicate user input.
7. Constantly evaluate. Does user interaction feel natural or forced?

# Summary
While both papers presented here have valuable and insightful perspectives, some of them are outdated. A handful of design principles covered here can and should be adjusted to better facilitate the affordances of VR and current developments. I have attempted to make such adjustments while maintaining the integrity of the ideas presented.

# References
- S. Serafin, C. Erkut, J. Kojs, N. C. Nilsson and R. Nordahl, "Virtual Reality Musical Instruments: State of the Art, Design Principles, and Future Directions," in Computer Music Journal, vol. 40, no. 3, pp. 22-40, Sept. 2016, doi: 10.1162/COMJ_a_00372.
- J. Braasch (2009), “The Telematic Music System: Affordances for a New Instrument to Shape the Music of Tomorrow”, Contemporary Music Review, 28:4-5, 421-432, DOI: 10.1080/07494460903422404
- E. Langbehn, P. Lubos, G. Bruder and F. Steinicke, "Bending the Curve: Sensitivity to Bending of Curved Paths and Application in Room-Scale VR," in IEEE Transactions on Visualization and Computer Graphics, vol. 23, no. 4, pp. 1389-1398, April 2017, doi: 10.1109/TVCG.2017.2657220.
