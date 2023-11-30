---
layout: post
title: "A Critical Look at Cléo Palacio-Quintin’s Hyper-Flute"
date: 2023-11-11 12:00:00 +0200
categories: interactive-music
author: Emin Memis
image: /assets/image/2023_11_11_ahmetem_hyper_flute_review_01.jpg
keywords: ims, hci, interactive music systems
excerpt: "A Boehm flute enhanced with sensors"
---

<figure>
  <img src="/assets/image/2023_11_11_ahmetem_hyper_flute_review_01.jpg"
  height="600"
  width="600">
  <figcaption>
    <span class="caption">The Hyper-Flute - </span>
    <i class="photo-credit">Palacio-Quintin, C. (2008). Eight Years of Practice on the Hyper-Flute : Technological and Musical Perspectives. Proceedings of the International Conference on New Interfaces for Musical Expression, 293–298.</i>
  </figcaption>
</figure>


<span style="font-size:small; font-style: italic;">⏯ A video may be auto-playing down in this page - [jump to video](#video)</span>


Many interactive music systems aim to enhance existing instruments by extending their controls. Cléo Palacio-Quintin’s Hyper-Flute is one of those interesting hyper-instruments that provide more functionalities to extending the creative possibilities. The Hyper-Flute is a standard Boehm flute extended via strategically placed electronic sensors to enable control of digital sound processing parameters in real-time. It opens the door to a highly expressive and enhanced way of interaction with the conventional flute.

Many interactive music systems stay untouched after their implementation. Cléo Palacio-Quintin’s Hyper-Flute is unlike, as she kept playing it for years and after 8 and 15 years, she retrospectively reflected on the time passed, the instrument’s evolution and other things about this interesting instrument. 

## Design of the Hyper-Flute

When designing The Hyper-Flute, she says she wanted to not further complicate the instrument or compromise its existing capability but integrate the electronics efficiently to resonate well with the conventional flute’s nature. She refers to Jonathan Impett’s approach when he was implementing a Meta Trumpet:

<blockquote style="text-align: center; font-style: italic; font-size: 20px; font-family: 'Times New Roman', serif;">
  “As far as possible, this is implemented without compromising the richness of the instrument and its technique, or adding extraneous techniques for the performer – most of the actions already form part of conventional performance.” - Impett, J. 1994
</blockquote>

<br>

In the core of her design, she placed various sensors at strategical positions on the flute to enable the unused bandwidth of the flute and the flute player. This approach, in my opinion, helps effectively achieve her objective of expanding the creative possibilities of the flute without compromising or overcomplicating its inherent nature. In her initial design, magnetic field sensors were placed at the G# and C# keys, which are the only levers providing a bit larger space for such component. The main points of contact on the flute surface were occupied with pressure sensors. Mercury tilt switches were used to detect tilting and rotations of the flute. A light sensor, responsive to ambient light on the flute, and on/off button switches accessible via the thumbs were also integrated. Furthermore, she implemented an ultrasound transducer to precisely track the flute's distance from the computer. To convert sensor signals into MIDI messages, she employed a Microlab interface. This comprehensive sensor arrangement showcases a thoughtful approach to enhancing the flute's capabilities while maintaining its integrity.

Reflecting on the mapping strategy of the instrument and its evolution over time, expressive control mechanisms, such as the Hyper-Flute, demand an integrated approach where all gestures harmoniously contribute to the musical output, as extensively discussed in the literature. It emphasizes the importance of considering the performer's existing instrumental skills and the need for efficient techniques when designing an extended instrument like the Hyper-Flute. Initially, she mostly used one-to-one mapping where each sensor controls one parameter. Later, however, she changed to a complex web of mappings between a variety of sensors and sound processing parameters. By capturing the subtle motions of the flutist's fingers, pressure, and even tilt, the Hyper-Flute translates these actions into a multiparametric control scheme for sound synthesis.

Her approach of establishing such complex mapping aligns very well with Hunt and Kirk’s principle of “*complex tasks may need complex interfaces*”.

<blockquote style="text-align: center; font-style: italic; font-size: 20px; font-family: 'Times New Roman', serif;">
  “Complex mappings cannot be learned instantaneously, but then again, we have never expected this from acoustic instruments. Complex mappings also appear to allow users to develop strategies for controlling complex parameter spaces.” - Hunt A. & Kirk R., 2000
</blockquote>

<br>

## Perry Cook’s Principles and the Hyper-Flute

Perry R. Cook has articulated his opinions and philosophy on designing computer music controllers in multiple NIME papers, drawing from years of experience. His concise set of principles has served as a guiding framework for numerous digital luthiers, offering a valuable perspective on the intricate task of designing computer music controllers. In this section, we will explore two of these principles to critique the Hyper-Flute. We will touch upon two of the principles to criticize the Hyper-Flute.

Similar to other successful computer music controller designs, Cléo's Hyper-Flute clearly falls under Cook's category of "*some players have spare bandwidth.*" Much like its counterparts, in many instances, the flute and its player naturally have some bandwidth to spare during musical performance. Cléo strategically places sensors at points on the flute where the “spare” fingers can actively interact with during play.

<blockquote style="text-align: center; font-style: italic; font-size: 20px; font-family: 'Times New Roman', serif;">
  “I am, above all, an instrumentalist. I wanted to find other possibilities for my instrument, and that opened the door to the world of electronics and the development of my hyper-flute,” Palacio-Quintin C, 2011
</blockquote>

<br>

Perry Cook's idea is quite clear at this point: “*make a piece, not an instrument or controller.*” They stuck to this idea for over nine years, as we find out when they revisited their principles. Their idea clearly emphasizes the importance of letting musical considerations guide the design process. It is worth looking at Cléo’s enhanced flute from this point of view. She says she wanted to enhance the flute to seek novel sonorities, perfectly aligning with Cook’s principle. On the other hand, she also mentions that she used some of the sensors just because of that they were available at that time. While keeping the musical considerations in the center of this design, she was still depending on technical availability. All in all, her approach seems to have proven successful, as she expressed satisfaction with the core design and mapping of the instrument. This not only enabled her but other composers as well, to compose pieces for it and continually master its virtuosity.

<br>

## Years of performing with the Hyper-Flute

As mentioned before, many interactive music systems are left untouched to gather dust after the proof-of-concept stage. One distinguishing factor of this work from others is that she had continuously played the hyper-flute for 15 years. Flash forward to 2017, to the time where Cléo reflects on her musical journey with the Hyper-Flute, she pointed out the same:

<blockquote style="text-align: center; font-style: italic; font-size: 20px; font-family: 'Times New Roman', serif;">
  “Nevertheless, there are very few performers who have played consistently on the same augmented instrument for as many years as I have, and there have been almost no publications concerning performance skills on such new instruments.” Palacio-Quintin, C. 2017
</blockquote>

<br>

Cléo's insightful critique on the Hyper-Flute instrument sheds light on the lasting success and reliability of its design and implementation. Despite technical advancements, such as the integration of enhanced sensors and an accelerometer, the core design remains unchanged. In her retrospective review from 2017, Cléo emphasizes the importance of preserving the original design which has proven to be successful over time. It is remarkable that even after years of immersive practice, Cléo still values the traditional and reliable core of the Hyper-Flute, even in an age of ever-evolving technology. This consistency highlights the continued success and longevity of the core design of the Hyper-Flute.

She obviously managed to achieve a good amount of complexity that leads to a good learning curve for other musicians attempting to learn the instrument. She says other musicians learning the flute would have to spent significant amount of time to learn the instrument. In terms of engagement, the stability and consistency of mappings over the years play a crucial role. Stability in mapping, even as the instrument and software evolve, is vital for developing performance skills in the long term. The paper recognizes the need for adaptability and fine-tuning of mappings for different sound processing methods, reinforcing the notion that effective mappings are context dependent. The fact that other composers compose pieces for the hyper-flute, and she is playing in public, in my opinion, proves the success of the instrument not only in terms of reliability but also from the audience’s perspective.

Cléo's achievement in mastering the complex and unique Hyper-Flute design has resulted in a significant learning curve for other musicians attempting to learn, and also composers to create pieces specifically for the Hyper-Flute. It is noteworthy that Cléo regularly performs with the Hyper-Flute in public, providing further evidence of the instrument's success, not only in terms of reliability but also from the audience's perspective.

<a name="video"></a>
<iframe width="800" height="400" src="https://www.youtube.com/embed/u7Q8hZFk__8?rel=0&autoplay=1&loop=1&controls=0" title="Cléo Palacio-Quintin: Résonance Kandinsky" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<p align="center"><em style="text-align: center; font-style: italic; font-size: 20px;">Cléo Palacio-Quintin performing with the Hyper-Flute.</em></p>


## Conclusion

The Hyper-Flute stands as a successful combination of technology and tradition, showcasing the potential of repurposing the “spare bandwidth” to control interactive systems. It aims for complex interaction, which requires complex mapping design. Cléo not only crafted an engaging complex mapping in the Hyper-Flute, but also managed to create a reliable instrument that remained engaging throughout the years, providing a learning curve toward virtuosity and offering a significant potential for public performances. From Perry Cook’s “make a piece, not an instrument or controller” perspective, although she started implementing the instrument based on the availability of components, she kept the musical considerations in the core of the design. Her own critical reflections on the Hyper-Flute after eight years and one and a half decade serves as a valuable lesson for IMS designers and reviewers, enlightening aspects often not shared in the works of interactive music systems. Finally, I believe the Hyper-Flute’s design and implementation underlines the significance of intuitive mappings, a deep understanding of performers' skills, and the need for continued evolution and refinement to achieve a high-quality interactive music system.

<br>

## References

Palacio-Quintin, C. (2008). Eight Years of Practice on the Hyper-Flute : Technological and Musical Perspectives. Proceedings of the International Conference on New Interfaces for Musical Expression, 293–298. doi:10.5281/zenodo.1179609

Palacio-Quintin, C. (2003). The Hyper-Flute. Proceedings of the International Conference on New Interfaces for Musical Expression, 206–207. doi:10.5281/zenodo.1176549

Palacio-Quintin, C. (2017). 2008: Eight Years of Practice on the Hyper-Flute: Technological and Musical Perspectives. In A. R. Jensenius & M. J. Lyons (Eds.), A NIME Reader: Fifteen Years of New Interfaces for Musical Expression (pp. 335–351). doi:10.1007/978-3-319-47214-0_22

Simas, R. (2011). Cléo Palacio-Quintin: Takes performance to the future on her hyper-flute. Musicworks, https://www.musicworks.ca/featured-article/profile/cl%C3%A9o-palacio-quintin

Cook, P. R. (2001). Principles for Designing Computer Music Controllers. Proceedings of the International Conference on New Interfaces for Musical Expression, 3--6. https://doi.org/10.5281/zenodo.1176358

Cook, P. R. (2009). Re-Designing Principles for Computer Music Controllers : a Case Study of SqueezeVox Maggie. Proceedings of the International Conference on New Interfaces for Musical Expression, 218–221. doi:10.5281/zenodo.1177493

Hunt, A., Wanderley, M. M., & Kirk, R. (2000). Towards a Model for Instrumental Mapping in Expert Musical Interaction. International Conference on Mathematics and Computing. Retrieved from https://api.semanticscholar.org/CorpusID:29778041

Impett, J. (1994, September). A Meta Trumpet (er). In Proceedings of the international computer music conference (pp. 147-147). International Computer Music Accociation.
