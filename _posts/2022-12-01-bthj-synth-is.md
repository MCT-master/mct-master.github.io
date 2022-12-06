---
layout: post
title: "In search of sounds"
date: 2022-12-01 08:00:00 +0200
categories: other
author: Björn Þór Jónsson
image: /assets/image/2022_12_01_bthj_synth_is.jpg
excerpt: "Are you looking for sounds to inspire your next project? At synth.is you can discover new sounds by evolving their genes, either interactively or automatically."
keywords: sound-synthesis, evolutionary-computation
---

In search of sounds
===================

Are you looking for sounds to inspire your next project? There are many ways. Trying new physical instruments or new configurations of familiar ones, finding or recording samples and [making them into something new](https://youtu.be/5QwOpRh-IfI). At [synth.is](https://synth.is) you can discover new sounds by evolving their genes, either interactively or automatically.

When evolving sound genes interactively, you’re presented with generations of individual sounds, where you can preview, or -listen, each individual and choose the ones most suitable as parents for the next generation. This type of [Interactive Evolutionary Computation](https://en.wikipedia.org/wiki/Interactive_evolutionary_computation) has been employed before in different scenarios, such as for evolving [2D images](https://nbenko1.github.io), [3D objects](https://www.shapeways.com/blog/archives/972-interview-with-jeff-clune-on-endlessforms-the-evolution-of-objects-for-3d-printing.html) and in an [interactive media installation](https://www.karlsims.com/galapagos/). The evolution can be approached from two different angles, either starting from scratch where the first generations contain primitive individuals, or continuing evolution from published sounds. The latter approach is intended to allow evolvers to build upon the progress made by others, with fresh ears - in a way [standing on the shoulders of giants](https://en.wikipedia.org/wiki/Standing_on_the_shoulders_of_giants) - instead of starting from scratch. Either approach can be interesting, paving an evolutionary path from genesis of exploring in what sonic directions already published sounds can be taken.

![Interactive evolution of sounds](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_synth_is_image5.png)

Automatic evolution of sounds employs search algorithms to allow the computer to discover novelty. The current implementation of automated search for sounds is supervised by pre-trained classifiers, so the discovered novelty is somewhat recognisable. Elite sounds for each class can be listened to and liked, in a similar way as can be during interactive evolution, adding those found interesting and useful to a catalogue of favourite sounds. Favourite sounds can also be published, for others to use and continue evolving.

![Automatic sound quality diversity search](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_synth_is_image1.png)

The main source of sounds comes from pattern producing networks. Those audio sources are routed through audio signal networks, which can be considered as synthesiser patches. Those patches can be configured manually or they can also be evolved alongside the pattern producing networks.

![Audio signal patching interface](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_synth_is_image6.png)

Favourite and published sounds can be rendered as sample based instruments in the [SFZ](https://sfzformat.com) format. That format can be [directly used by DAWs](https://sfzformat.com/software/players/%23import-from-sfz) such as [Bitwig Studio](https://www.bitwig.com) and the [Renoise tracker](https://www.renoise.com), or with [specialised plugins](https://sfzformat.com/software/players/%23players) like [sforzando](https://plogue.com/products/sforzando.html) and [sfizz](https://sfz.tools/sfizz/).

Various settings can be chosen for the rendering, such as the duration of each sample, number octaves and velocity layers, and sample rate. Rendered sample instruments can be previewed in the web browser interface with an on-screen keyboard, which also supports Web MIDI, so you can try them out with your favourite hardware controller or DAW. Along with the SFZ instrument definition, a Sonic Pi live coding template can be downloaded with the rendered sample instrument.

![Sample based virtual instrument rendering dialog](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_synth_is_image2.png)

![Sample based virtual instrument on-screen keyboard](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_synth_is_image7.png)

![Sonic Pi live coding rendering template](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_synth_is_image4.png)

A recent addition to this sound evolution web interface is the integration of a live coding environment based on the [Glicol engine](https://glicol.js.org). Underlying [genes of favourite and published sounds can be copied to the clipboard (as a JSON text string) and pasted onto the live coding screen](https://youtu.be/snvrDq1dduM), where they can be rendered with the desired configuration and used directly in the accompanying live coding text area. Furthermore, [code modification steps can be recorded during a live coding session](https://youtu.be/Dj_X5sV_zD0), so they can be played back. This is a form of musical recording, but not where the audio signal is inscribed but rather the symbols from the live coding, along with their temporal placement, resulting in a JSON structure containing both the audio gene descriptors and their compositional arrangement, clocking in at a few kilobytes. That can be viewed as outperforming any audio compression.

![Published sounds and integrated live coding environment](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022-12-01_bthj_synth_is_image3.png)

The project itself has evolved from the [application of those pattern producing networks for single cycle oscillator waveform descriptions](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=v3xOrZsAAAAJ&citation_for_view=v3xOrZsAAAAJ:fPk4N6BV_jEC), to the rendering of sounds that develop over time, of any desired length. Recent explorations into automated evolution of sounds will be investigated further, possibly utilising custom reference sounds and audio features of preferred sounds for navigating the sound space. New neighbourhoods in the sound space may be defined with unsupervised classification. Extraction of the core functionality behind synth.is into a reusable (NPM) library is underway. A command line interface (CLI) will demonstrate one possible use case. Stay tuned at [https://twitter.com/wavekilde](https://twitter.com/wavekilde) (Mastadon / [ActivityPub](https://activitypub.rocks) presence is under consideration : )
