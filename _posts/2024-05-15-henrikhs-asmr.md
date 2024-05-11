---
layout: post
title: "Cyclic Patterns and Spatial Orientations in Artificial Impulsive ASMR Sounds"
date: 2024-05-11 13:00:00 +0200
categories: masters-thesis
author: Henrik Sveen
image: /assets/image/2024_05_11_henrikhs_asmr.png
keywords: master thesis, ASMR
excerpt: "An exploratory study on the effects of cyclic patterns and spatial orientations in synthesized impulsive ASMR sounds."
---
## Abstract
This thesis investigates the perception of Autonomous Sensory Meridian Re-
sponse (ASMR) stimuli, focusing on the impact of different cyclic patterns and spatial orientations on inducing ASMR experiences. By employing statistical analysis, significant correlations were revealed between ASMR perception and other factors. The results demonstrate that both the type of cyclic pattern and spatial orientation significantly influence the intensity and nature of ASMR experiences. Furthermore, the study explores the synthesis of ASMR-inducing sounds while preserving key audio characteristics from acoustically recorded ASMR content. Through the analysis of survey data and regression modeling, distinct patterns emerge regarding the relationship between personality traits and ASMR perception. The findings contribute to a deeper understanding of ASMR as a sensory phenomenon and provide insights into the potential applications of artificially generated ASMR stimuli. Additionally, the research sheds light on the role of spatiality in ASMR experiences and the synthesis of ASMR-inducing sounds for future studies and practical applications.

## Primary Contributions
The thesis study of ASMR holds potential therapeutic benefits, particularly regarding mental health, where ASMR could be harnessed as affordable, and easily available, tool for the alleviation of anxiety and insomnia. Thus, by advancing the research on ASMR, this thesis contributes to the academic field and potential practical applications that could help individuals find solace in the simple act of listening to audio-based stimuli. New ways of creating audio-based ASMR is explored through the research's implementation of synthesized ASMR stimuli. This can contribute to the field of ASMR by potentially making it more available to an audience who find the social aspects, introduced through the act of sounds being recorded by another human being, disturbing in the listening situation. The generative aspect of sound production can potentially introduce the use of sensors and data for personalized ASMR content generation.

## Background
ASMR has garnered increasing attention due to its diverse effects on individuals, induced by auditory, visual, and tactile stimuli. This phenomenon is exemplified by the proliferation of ASMR content across various online platforms, where creators manipulate everyday objects to produce soothing sounds aimed at relaxation. At the core of ASMR lies a reaction generally referred to as *tingles*, an electrostatic-like feeling often emerging from the scalp and shooting down through the body (Barratt and Davis, 2015). Tingles play a central role in what usually facilitates the relaxed state of mind among ASMR recipients who may use ASMR to manage anxiety, stress and sleep, as well as for general relaxation.

However, despite its growing popularity, ASMR remains enigmatic and polarizing. While some experience relaxation and comfort, others find the same sounds unsettling or irritating. This variability in responses has led to a social divide regarding the acceptance of ASMR. Consequently, there exists a stigma surrounding ASMR experiences in broader social contexts.

The study explores the intersection of ASMR with personality traits, such as neuroticism and openness, shedding light on potential connections between ASMR experiences and psychological characteristics (Eid, 2022)(Fredborg, 2017). Additionally, it investigates the physiological similarities between ASMR-induced tingles and musical frisson, offering insights into the therapeutic potential of ASMR in promoting comfort and well-being (Lochte, 2018).

Building upon the findings of Fang et.al. stating that artificially produced audio holds the potential of inducing ASMR sensations, the thesis research examines alternative ways of generating ASMR audio as well as investigating the impact of cyclic patterns and spatial orientations (Fang, 2023).

Overall, this research contributes to advancing knowledge in the fields of music psychology and technology, offering new avenues for understanding how sensory experiences impact mood and cognition. It also holds potential for practical applications in mental health, where ASMR could serve as a tool for anxiety and insomnia relief.

## Methods
The methods employed in the thesis research constitute a combination of exploratory and quantitative, with some qualitative elements regarding testing the user survey and the development of sound examples. The combination creates a comprehensive image of how ASMR sounds are perceived. The exploratory part of the thesis emphasizes the inclusion of synthesized ASMR stimuli subject to perceptual survey study. The survey resembles the quantitative part of the research. The qualitative part was focused on the generation of the ASMR stimuli, both through the work on extracting audio features from source material recordings and through applying these in the sonification process while working with the sound engine.

The selected cyclic patterns resemble different degrees of predictability in the way sound triggering events were organized rhythmically.

#### Selection of Cyclic Patterns and Spatial Orientations

|Cyclic Pattern| Spatial Orientation|
|-|-|
|MIR |  Stereophonic|
|RAN | Monophonic |
|FM | - |

MIR was based on a source material recording of someone tapping long artificial nails on an acrylic board recorded using a stereophonic microphone setup.

RAN and FM were algorithmically generated using Low Frequency Oscillators (LFO) with modulator speeds of 0.62 Hz (generating a new section of rhythms every 1.6 seconds). The RAN cyclic pattern generated a random rhythmical section, whereas the FM cyclic pattern generated a similar rhythmical pattern for every iteration.

The spatial orientations were resembled as monophonic or stereophonic, while including specific motions in the stereophonic binaural field would have introduced implications when comparing the results regarding both cyclic patterns and spatial orientations. This remains a task for future work on the topic. The stereophonic spatial orientation was derived from stereophonic audio feature analysis on the same source material recording that laid the foundation for the MIR cyclic pattern. Utilizing the same spatial orientation data for all cyclic pattern was deemed beneficial for executing meaningful comparisons on the results.


#### Generated Sound Examples

<figure style="float: none">
  <audio controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2024_05_15_henrikhs_mir_m.mp3" type="audio/mpeg">
    Error loading audio content
  </audio>
  <figcaption>MIR Monophonic</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2024_05_15_henrikhs_mir_s.mp3" type="audio/mpeg">
    Error loading audio content
  </audio>
  <figcaption>MIR Stereophonic</figcaption>
</figure>


<figure style="float: none">
  <audio controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2024_05_15_henrikhs_ran_m.mp3" type="audio/mpeg">
    Error loading audio content
  </audio>
  <figcaption>RAN Monophonic</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2024_05_15_henrikhs_ran_s.mp3" type="audio/mpeg">
    Error loading audio content
  </audio>
  <figcaption>RAN Stereophonic</figcaption>
</figure>


<figure style="float: none">
  <audio controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2024_05_15_henrikhs_fm_m.mp3" type="audio/mpeg">
    Error loading audio content
  </audio>
  <figcaption>FM Monophonic</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2024_05_15_henrikhs_fm_s.mp3" type="audio/mpeg">
    Error loading audio content
  </audio>
  <figcaption>FM Stereophonic</figcaption>
</figure>

The online survey, published through gorilla.sc, asked for perceptual ratings of the generated ASMR stimuli, as well as including a shortform Big Five Index (BFI) questionnaire for personality traits mapping. The perceptual questions asked for physical and psychological reaction (Q1), focus during listening (Q2), whether the rhythmical content was perceived as natural or artificial (Q3), and the general experience being relaxing or stressful (Q4). Additionally, demographic questions and questions regarding prior knowledge and experience with ASMR were asked. 67 responses were gathered.

## Discussion
The following research questions were addressed:
**RQ1:** In which ways do different cyclic patterns affect the perception of artificially generated ASMR? How do artificially generated cyclic patterns (generated using algorithms) compare to naturally occurring cyclic patterns (recorded from human interaction with objects) in ASMR stimulus? In which ways does this relate to personality traits?

**RQ2:** How does monophonic and stereophonic binaural spatial orientation impact ASMR stimulus? In which ways does this relate to personality traits?

**RQ3:** How can sound be generated and synthesized while maintaining key audio characteristics in acoustically recorded ASMR sounds to induce ASMR stimuli?


<figure style="float: none">
   <img src="/assets/image/2024_05_11_henrikhs_heatmap.png" alt="mage not showing? Will try to fix it." title="Image Title" width="auto" />
   <figcaption>
   Heatmap of response by cyclic pattern and spatial orientation for
   Q1 reaction strength. The MIR and RAN cyclic patterns are pointed out as the most effective cyclic patterns, and the stereophonic spatial orientation is pointed out as the most effective spatial orientation, regarding reaction strength to all ASMR stimuli in the thesis research.
   </figcaption>
</figure>

Based on the results, a suggestion in this thesis is that the immersive properties in sound may be an important factor in inducing ASMR reactions. Immersiveness relates to the stereophonic spatial orientation's impact on ASMR perception, eliciting the ability to navigate in sound and perceive different sound events at different levels of proximity.

Increased immersiveness in sound could occupy more of the listener's attention resources, explaining why some can find this relaxing and comforting while others find the same sound stressful and aversive.

Concerning cyclic patterns, immersiveness could relate to rhythmic unpredictability, which was identified as yielding stronger reactions. A cyclic pattern with this character might require more reactive listening, taking up more of the listener's attention resources. This relates to the sensation of occupancy of attention resources being highly subjective.

Immersiveness could also contribute to explaining how people with high levels of neuroticism often are recipients of ASMR. As ASMR has gained a reputation for being an aid in managing anxiety and stress, it can by itself recruit people who struggle with these things as they might be likely to seek tools to help with their struggles. This could prime people characterized by high levels of neuroticism, such as in anchoring, biasing their introduction to the phenomenon and eliciting more ASMR recipient individuals among the high neuroticism population.

## Conclusion
The investigation into the impact of different cyclic patterns, spatial orientations, and the synthesis of ASMR sounds sheds light on several aspects influencing the perception of ASMR stimuli.

#### Cyclic Patterns
The findings suggest a significant correlation between the predictability of cyclic patterns and the strength of ASMR reactions. Specifically, the more unpredictable cyclic patterns, such as MIR and RAN, were found to induce stronger ASMR responses compared to more predictable patterns like FM. This aligns with previous research suggesting that unpredictability plays a role in triggering ASMR and related sensory experiences. Additionally, the correlation between cyclic patterns and personality traits, such as extraversion and openness, offers insights into individual differences in ASMR responsiveness.

#### Spatial Orientation
The study highlights the importance of spatial orientation, particularly stereophonic audio, in enhancing the immersive quality of ASMR content. Stereophonic spatial orientation was found to positively correlate with the strength of ASMR reactions, indicating its role in creating a more immersive auditory experience. This finding resonates with existing literature on the significance of spatial audio cues in eliciting emotional and sensory responses in listeners. Furthermore, the correlation between spatial orientation and personality traits underscores the interplay between auditory stimuli and individual predispositions.

#### Synthesis of ASMR Sounds
The results suggest that synthesized ASMR sounds, generated to replicate key audio characteristics present in acoustically recorded ASMR content, can effectively induce ASMR responses. This opens up possibilities for creative exploration in ASMR content creation, offering avenues for the development of novel stimuli and experiences. However, further research is needed to explore how different characteristics in synthesis affect ASMR perception and to compare synthesized artificial ASMR with conventionally recorded content.



This study's findings contribute to our understanding of the perceptual mechanisms underlying ASMR experiences and offer insights into the role of cyclic patterns, spatial orientation, and sound synthesis in shaping ASMR stimuli. By elucidating these factors, future research can advance our knowledge of ASMR and inform the development of tailored stimuli for therapeutic and recreational purposes.

#### References
- Barratt, E. and Davis, N. (2015). Autonomous Sensory Meridian Response (ASMR): A flow-like mental state. PeerJ, 3:e851.
- Eid, C. M., Hamilton, C., and Greer, J. M. H. (2022). Untangling the tingle: Investigating the association between the Autonomous Sensory Meridian Response (ASMR), neuroticism, and trait & state anxiety. PLOS ONE, 17(2):e0262668. Publisher: Public Library of Science.
- Fang, Z., Han, B., Cao, C. C., and Schotten, H. D. (2023). Artificial ASMR: A Cyber-Psychological Approach. arXiv:2210.14321 [cs, eess].
- Fredborg, B., Clark, J., and Smith, S. (2017). An Examination of Personality Traits Associated with Autonomous Sensory Meridian Response (ASMR). Frontiers in Psychology, 8:247.
- Lochte, B. C., Guillory, S. A., Richard, C. A. H., and Kelley, W. M. (2018). An fMRI investigation of the neural correlates underlying the autonomous sensory meridian response (ASMR). BioImpacts : BI, 8(4):295–304.
