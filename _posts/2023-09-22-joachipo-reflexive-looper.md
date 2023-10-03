---
layout: post
title: 'How to break out of the "comping" loop?'
date: 2023-09-22 08:00:00 +0200
categories: interactive-music
author: Joachim Poutaraud
image: /assets/image/2023_09_22_joachipo_loop.png
keywords: jazz, loop, interactive music systems
excerpt: "A critical review of the Reflexive Looper."
---

"[Comping](https://en.wikipedia.org/wiki/Comping_(jazz))" is a term coined by jazz musicians, meaning accompaniment. Traditionally, this term is associated with musicians in the rhythm section, such as the pianist, bassist, guitarist or drummer, whose role is to accompany the soloist when the latter plays the theme of a jazz composition or standard, or improvises a solo. It is therefore necessary for jazz musicians to develop skills in different formations (duo, trio, quartet, etc.) in order to improve their ability to accompany a solo musician or to interact with the musicians of the rhythm section. This defines the very essence of jazz improvisation, which consists in spontaneously inventing solo melodic lines, or accompaniment parts, as part of a jazz performance.

<figure style="float: none">
   <img src="/assets/image/2023_09_22_joachipo_canned.png" alt="Canned Music" title="" height="auto" />
   <figcaption><i>A robot making canned music with musical instruments (November 3, 1930 Syracuse Herald)</i></figcaption>
</figure>

Generally speaking, it's not always possible for jazz musicians to rehearse as a group (i.e. difficulty in finding a rehearsal venue, difficulty in finding a schedule that suits everyone) and often means having to resort to alternative means of rehearsing alone. Loop pedals can be used to record a riff or chord sequence to create a "loop". This enables musicians to play several tracks of music simultaneously. Nevertheless, this type of practice has the disadvantage of always playing the same content and generating the so-called "*canned* (boringly repetitive and unresponsive) *music effect*", due to the systematic repetition of the recorded loop without any variation ([Pachet et al., 2013](https://dl.acm.org/doi/10.1145/2470654.2481303)). 

Another possibility is to use "minus-one" recordings (i.e. [Jamey Aebersold Play-A-Longs](https://www.jazz-play-a-longs.com/)) to play a piece with a recorded professional rhythm section. However, this does not take into account the style of the soloist, which may differ considerably from that of the recorded musicians, and this does not allow for interaction as the recording is totally unresponsive.

<figure style="float: none">
  <audio controls>
    <source src="https://content.alfred.com/catmp3/24-V94DS_!~01.mp3" type="audio/mpeg">
    Alternate Text
  </audio>
  <figcaption>Jamey Aebersold Jazz® Play-A-Longs</figcaption>
</figure>

# The Reflexive Looper
<br>
Based on these observations, Pachet et al. ([2013](https://dl.acm.org/doi/10.1145/2470654.2481303)) proposed the concept of "*reflexive interactions*" in a system called the Reflexive Looper (RLR). This aims to create "*copies of musical performances*" in order to tackle the limitations of traditional musical systems, such as generating stylistically consistent material or enabling Human-Computer Interaction (HCI). RLR consists of a system for playing "*copies of past musical performances*" of oneself ([Pachet et al., 2013a](https://dl.acm.org/doi/10.1145/2470654.2481303)). In particular, this allows the system to develop a semblance of creative sense in order to generate an interaction between the musician and the system, based on the material produced by the musician. The aim here is to create enough of a transformation not to resemble direct imitation ([Gifford et al., 2018](https://www.tandfonline.com/doi/abs/10.1080/14626268.2018.1426613)).

<figure style="float: none">
   <iframe
      height="400"
      width="100%"
      src="https://www.youtube.com/embed/8YzPaCzDDzg"
      title='Reflexive Looper: François Pachet plays "All the Things You Are"'
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
  <figcaption></figcaption>
</figure>


## Mapping
<br>
In order to allow the correspondence between parameter control and sound synthesis parameters, several types of mapping can be used ([Hunt et al. 2000](http://recherche.ircam.fr/anasyn/wanderle/Gestes/Externe/Hunt_Towards.pdf)). On the one hand, the use of systems producing a mapping strategy through internal adaptations of the system thanks to prior training, and on the other, the use of mapping strategies defining relationships explicitly. In the case of the RLR, the mapping strategy is based on the supervised learning of a multi-modal classification model (i.e. [Support Vector Machine](https://en.wikipedia.org/wiki/Support_vector_machine)). Here, the model is trained on MIDI signals produced by a "*guitarist improvising with a Godin MIDI guitar on eight jazz standards with different tempos and rhythmical feels (Bluesette, Lady Bird, Nardis, Ornithology, Solar, Summer Samba, The Days of Wine and Roses, and Tune up)*". 

<figure style="float: none">
   <img src="/assets/image/2023_09_22_joachipo_mapping.png" alt="Mapping of performer actions to synthesis parameters" title="" height="auto" />
   <figcaption><i>Mapping of performer actions to synthesis parameters (Hunt et al. 2000)</i></figcaption>
</figure>

Thus, from the system's internal adaptations, it is possible to generate two principles: 
1. the principle of interaction based on feature extraction
2. the principle of "*other members*" 

In the first case, the system can extract audio features specific to the musician (i.e. RMS, peaks count, and spectral centroid) and re-use them to generate an accompaniment according to the style of the musician's playing. In the second case, the system can differentiate the musician's playing mode and interact accordingly. For example, if the musician improvises a solo, the RLR interacts by playing the rhythm section (bass and chords). And conversely, if the musician plays chords, the RLR interacts by playing a solo with a bass line.

## Score Following
<br>
The RLR is based on embedded knowledge of the tempo and overall structure of the jazz standards chord grid. This requires the system to interact with the musician while taking into account the correct chord of the grid. This functionality refers to the concept of score following ([Dannenberg 1984](https://www.cs.cmu.edu/afs/cs.cmu.edu/Web/People/rbd/papers/icmc84accomp.pdf); [Vercoe 1984](https://web.media.mit.edu/~bv/papers/synthetic%20performer.pdf)), in which a system follows the progress of a live musician through a predetermined score, and “reacts'' accordingly. According to Drummond ([2009](https://www.cambridge.org/core/journals/organised-sound/article/abs/understanding-interactive-systems/BF81A560B5C9D96355BC400065C7A1DF)), this has the disadvantage of making the system more reactive than interactive, given that the system is initially programmed to follow the musician in all circumstances. So, although RLR can extract the features of the musician in real-time while applying an algorithmic transformation to generate "interactive" content, score following systems have been criticized as being "*a perfect example for intelligent but zero interactive music systems*" ([Jordà 2005: 85](http://mtg.upf.edu/node/449)).

## Control and Expression
<br>
Finally, previous work has suggested that "*the expressivity of an instrument is dependent on the transparency of the mapping for both the player and the audience*" ([Fels et al., 2002](https://www.cambridge.org/core/journals/organised-sound/article/abs/mapping-transparency-through-metaphor-towards-more-expressive-musical-instruments/6A0DCDB0E31E7C01AEEA29427EA7F42A)). The RLR has the advantage of being fully automatic and having no physical controllers (e.g. pedals). This eliminates the need for additional mental attention on the part of the musician, and allows greater availability for the expression necessary for jazz improvisation. Although the addition of physical controllers could eventually give more control over the audio generated by the RLR ([Pachet et al., 2013](https://dl.acm.org/doi/10.1145/2470654.2481303)), the intelligent and automatic interpretation of the material produced by the musician nevertheless enhances its expressiveness by ensuring that the mapping between input and audio generation is located at the appropriate level of structural detail ([Dobrian et al., 2006](https://escholarship.org/uc/item/8v0022bd)).


**References**
<br>
<ul>
<li><font size="3"><p>Pachet, F., Roy, P., Moreira, J., & d'Inverno, M. (2013, April). Reflexive loopers for solo musical improvisation. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (pp. 2205-2208).</p></font></li>

<li><font size="3"><p>Gifford, T., Knotts, S., McCormack, J., Kalonaris, S., Yee-King, M., & d’Inverno, M. (2018). Computational systems for music improvisation. Digital Creativity, 29(1), 19-36.</p></font></li>

<li><font size="3"><p>Hunt, A., Wanderley, M. M., & Kirk, R. (2000, September). Towards a model for instrumental mapping in expert musical interaction. In ICMC.</p></font></li>

<li><font size="3"><p>Dannenberg, R. B. (1984, October). An on-line algorithm for real-time accompaniment. In ICMC (Vol. 84, pp. 193-198).</p></font></li>

<li><font size="3"><p>Vercoe, B. 1984. The Synthetic Performer in the Context of Live Performance. Proceedings of the 1984 International Computer Music Conference (ICMC84). Paris, France: International Computer Music Association, 199–200.</p></font></li>

<li><font size="3"><p>Drummond, J. (2009). Understanding interactive systems. Organised Sound, 14(2), 124-133.</p></font></li>

<li><font size="3"><p>Jordà, S. 2005. Digital Lutherie: Crafting Musical Computers for New Musics’ Performance and Improvisation</p></font></li>

<li><font size="3"><p>Fels, S., Gadd, A., & Mulder, A. (2002). Mapping transparency through metaphor: towards more expressive musical instruments. Organised Sound, 7(2), 109-126.</p></font></li>

<li><font size="3"><p>Dobrian, C., & Koppelman, D. (2006). The ‘E’in NIME: musical expression with new computer interfaces.</p></font></li>
</ul>


