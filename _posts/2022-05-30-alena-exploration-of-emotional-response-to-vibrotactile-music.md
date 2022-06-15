---
layout: post
title: "Emotional Responses to Vibro-tactile Music"
date: 2022-05-30 10:30:00 +0200
categories: masters-thesis
author: Alena Clim
image: /assets/image/2022_05_30_alena_hap-phones-fingertips.jpeg
keywords: music-cognition, tactile, haptics, emotions, valence, arousal, empathy, emotional-response, tactile-illusions
excerpt: "What happens when music is felt instead of heard? When music is just vibrations... can it still make people feel emotions?"
---

# An Exploratory study of Emotional Responses to Vibro-tactile Music

<figure style="float: none">
   <img src="/assets/image/2022_05_30_alena_word_cloud_thesis.png" alt="Word Cloud" title="Word Cloud" width="auto" />
   <figcaption><i>Thesis Word Cloud</i></figcaption>
</figure>

If I were to ask you what is the first word that comes to mind when I say __MUSIC__ ... what would the answer be? Some might say their favourite genre, band or instrument, others might say _sounds_, or even _feelings_. Most of us would agree that music conveys and makes us feel certain emotions. If music is sound, and sounds are essentially mechanical vibrations, then __would vibrations make us feel something as well__? My thesis project revolved around this question...

This blogpost presents the motivation behind the study, as well as the aim, and main findings of the pilot study and the main experiment. For more detailed information about the study, please read the manuscript ([available on GitHub](https://github.com/alenaclim/mct-thesis-tactile-music)). Additional materials such as the datasets and the R-scripts can be found in the same repository.

## Motivation

### The sense of touch

As humans, we perceive the world around us through our senses. I like to imagine that, if they would be a group of friends, the visual and auditive senses would be the extroverts who are always in the middle of the action and who need constant (new) stimulation, while the sense of touch would be the quiet introvert who notices everything and who is the glue that holds the group together - just because it is not always central it does not mean it is any less important. If you make an effort, you will realise that you associate certain actions, people, objects with how they feel – if I ask you to imagine that you are in a truck speeding on the highway, the first thing to come to mind might be the roaring noise of the engine and the passing of fields on the window, but close behind will be the feeling of being jilted from one side to the other or up and down (awful suspensions!), perhaps the constant vibration of movement and the heat of the cab (no air conditioning, of course...). 

### Deaf and hard of hearing individuals

For each person, the sensory focus is different. For deaf or hard of hearing people, touch becomes an even more important sense that helps them navigate the world around them. It substantially shapes their perception of music, compared to people with unaffected hearing who are used to associating music with sound first. Many studies have used tactile feedback in combination with the auditive to enhance their musical experiences. It is still unclear whether it is a viable solution. Firstly, to hear anything, most deaf or hard of hearing individuals wear hearing aids or cochlear implants to amplify the volume of the auditive stimuli reaching their ears - which distort the sounds to some extent. These also do not help with sound localization, so using them in an installation together with vibro-tactile stimuli might not be a very pleasurable experience for people wearing them. Secondly, an important consideration is whether it is fair to even ask them to wear aids in the first place, to fit into our idea of society – where the lack of auditive feedback can be a major drawback. It might be egotistical to deny them the pleasure of experiencing music, or to expect them to find ways around sound in order to perceive it.

### Music for touch and tactile illusions

That is why the idea of music designed only for the sense of touch holds a lot of appeal. In order for it to be comparable with music meant for ears in terms of complexity and capabilities to evoke or convey emotions, it would need to use more than just the vibrational feedback that accompanies sounds anyways (since all sound is after all vibration). A distinction is made in this project between the emotions recognized in a musical piece and those emotions evoked in the listener. For example, you might intellectually recognize that a piece of music is sad, but that doesn't mean that it actually makes you _feel sad_ (for an interesting paper about whether sad music can really make us feel sad [see this paper](https://www.researchgate.net/publication/222711262_Can_Sad_Music_Really_Make_You_Sad_Indirect_Measures_of_Affective_States_Induced_by_Music_and_Autobiographical_Memories)).

A novel approach to music for touch with a lot of potential is the idea of using __tactile illusions__ (i.e., a surprising illusory sensation resulting from the mismatch between actual stimulation and what is perceived) to enhance the vibro-tactile feedback based on an audio signal. By having more than one stimulation point (which is required for an illusion to work), _dimensionality_ is added to the perception of the vibration. Dynamics that are often used in music (tempo, rhythm, melody) can be preserved or translated through a sensation close to panning – when wearing headphones, a stereo signal uses panning to give someone the feeling of the sound travelling from one side to the other; similarly, with two points of tactile stimulation, vibro-tactile feedback can evoke a similar sensation.

This figure is a visual representation of the tactile illusions known as __funneling__ (retrieved from [this paper](https://www.researchgate.net/publication/276102035_Brain_Process_for_Perception_of_the_Out_of_the_Body_Tactile_Illusion_for_Virtual_Object_Interaction)). When the arm is stimulated in two places under specific circumstances, _another, apparent stimulation point_ is sensed. In this thesis, the actual stimulation points were across the body - one point in each hand - and the apparent stimulation point was in the air, between the two hands (as presented below in the pilot study section).

<figure style="float: none">
   <img src="/assets/image/2022_05_30_alena_funneling.jpg" alt="Funneling" title="Funneling" width="auto" />
   <figcaption><i>On the body funneling</i></figcaption>
</figure>

Although it is somewhat intuitive in which ways tactile illusions can enhance dynamicity, it is still unclear how they influence the perception of emotions, or even if they can carry emotional information at all. Thus, this project explored vibro-tactile music in form of tactile illusions and how individuals responded to it from an emotional point of view. 

Ultimately, this type of music is intended for people suffering from hearing loss, but it is not an exclusive experience reserved to them. If their auditory sense is muffled to aid concentration on the sense of touch, it was considered that individuals with unaffected hearing would respond in a fairly similar manner. Although considered sufficient for this novel exploratory thesis, later studies should focus on learning more about the emotional responses of people suffering from hearing loss in particular.

## Aim 

The main goal of this study was to explore the emotional content conveyed by vibro-tactile music rendered from musical excerpts used in previous research ([Vieillard et al., 2008](https://www.researchgate.net/publication/247496910_Happy_sad_scary_and_peaceful_musical_excerpts_for_research_on_emotions)) to tactile illusions. Empathy, musicianship level and level of hearing loss were considered as individual characteristics which might have an influence on the perception of vibro-tactile (musical) emotions.

Moreover, the best apparatus for relaying clear tactile illusions was tested from a choice of three pairs of actuators (two commercially available and one purpose-built based on literature indications).

## Findings

In this study, three tatile illusions were used when rendering musical excerpts: __Phantom Motion__ or apparent movement (a continuous movement reminiscent of an apparent sweeping motion), __Cutaneous Rabbit__ or saltation (an impulsive movement of short impulses from one side to the other reminiscent of hopping), and __Funneling__ (an error of localization, the illusory feeling of an apparent actuator).

### Pilot Study 

The first experiment was a pilot study with the goal of determining which pair of actuators conveyed the clearest tactile illusions and which were most comfortable to hold. For this purpose, 10 experts in relevant fields (such as music technology and music cognition) tested three tactile illusions with a pair of [commercially available piezoelectric actuators](https://www.ti.com/tool/DRV2667EVM-CT), a pair of commercially available voice-coil actuators named [__Basslets__](https://www.kickstarter.com/projects/basslet/the-basslet-a-wearable-subwoofer-for-your-body), and a pair of purpose-built actuators named __Hap-phones__ (see the picture below).

<figure style="float: none">
   <img src="/assets/image/2022_05_30_alenacl_hap-phones.jpeg" alt="Hap-phones" title="Hap-phones" width="50%" />
   <figcaption><i>Hap-phones</i></figcaption>
</figure>

The majority of the experts decided that the __hap-phones__ were the actuators that conveyed the clearest illusions. Therefore, for the main experiment, this was the pair that was used. Participants tested them both strapped around their wrists and held between their fingertips, and found that holding the actuators between fingertips as seen in the image below was best.

<figure style="float: none">
   <img src="/assets/image/2022_05_30_alena_hap-phones-fingertips.jpeg" alt="Hap-phones between fingertips" title="Hap-phones between fingertips" width="50%" />
   <figcaption><i>Hap-phones held between fingertips</i></figcaption>
</figure>

### Main Experiment

The goal of the main experiment was to determine the emotional responses that individuals have to vibro-tactile music. Eight excerpts were rendered to tactile illusions from [Vieillard et al., 2008](https://www.researchgate.net/publication/247496910_Happy_sad_scary_and_peaceful_musical_excerpts_for_research_on_emotions) (2 happy, 2 sad, 2 scary and 2 peaceful), and were presented in a random order. Following each excerpt, participants answered questions about the emotions they recognized in theexcerpt and the emotions they felt. This was all structured as a questionnaire, and at the end they answered 14 questions as part of the Interpersonal Reactivity Index - used to measure their empathy level (specifically, their fantasy and empathic concern). After completing the questionnaire, they were asked if they experienced any sort of associations during the vibro-tactile music.

In total, 55 individuals participanted. Only 5 suffered from different levels of hearing loss - and 52% of all were musicians. 

Of all participants, 75% experienced musical associations (e.g., EDM, musique concrete, soundtracks), imaginative associations (e.g., memories or life situations like dancing in a night club, skipping down the road, being at the sea side), or both. With one exception, all deaf or hard of hearing participants experienced both types of associations. Musicians experienced more musical associations than non-musicians. Interestingly, music-loving non-musicians experienced more associations overall.

The most important finding is that __yes, music as tactile illusions can make people feel emotions__. In almost all cases, the excerpts were considered happy or peaceful, and participants rarely felt sadness or scariness. This suggests that the experience of feeling vibro-tactile music is pleasant overall, which is in line with participants' feedback. Some even said that it feels like a "massage for the fingertips". Another interesting finding is that, instead of fine grained emotions, participants felt broaded emotions such as “liveliness”, “mellowness”, “startlement” or “unease”, which suggests that the lack of melodic information has quite a big impact on conveying emotions. 

## Future work

The most obvious suggestion for future studies is to focus on a deaf or hard of hearing population, and even comparing them to individuals with normal hearing. If we want to create technology for them, we need to know more about the way they perceive the world aroud us. It is also important to have bigger or at least more equal samples, to have reliable results of statistical analysis. 

The findings of this study seem to indicate that __music as tactile illusions__ indeed makes people experience emotions, more research is needed to find a consistent correlation between (type of) illusion and emotion. So far, sweeping, continuous tactile illusions seem to be associated with peacefulness, and impulsive, highly dynamic illusions with liveliness. Looking more into this and designing better experiments will also help and provide support for composing vibro-tactile music from scratch - it would then be easier for composers to know which illusions to use to convey certain emotions. 

Regarding individual characteristics that might influence the perception and recognition of emotions in vibro-tactile music, empahty did not seem to be extremely relevant. Other characteristics should be considered in order to discover more about why and how certain people feel emotions. 

This thesis could be considered as a stepping stone towards more research combining the fields of musical haptics (music technology) and music cognition, specifically regarding the study of emotions in vibro-tactile music.

#### Contact me for any questions and suggestions! 
