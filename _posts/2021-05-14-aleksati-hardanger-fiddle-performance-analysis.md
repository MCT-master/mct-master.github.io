---
layout: post
title: "Exploring Hardanger Fiddle Performance Patterns Through Interactive Computational Tools"
date: 2021-05-14 12:10:00 +0200
categories: masters-thesis
author: Aleksander Tidemann
image: https://drive.google.com/uc?export=view&amp;id=1chRYzWPplCWthdpzvY1AgIRPmHMPE-qD
keywords:  MCT, Master's thesis, Audio programming, HCI, CMA, MIR, Scandinavian folk music studies
excerpt: "This thesis presents the development and evaluation of two software applications that integrate contemporary research perspectives on the complex rhythmical structuring of Hardanger fiddle springar performances, in collaboration with the MIRAGE research project."
---

# Problem Space & Contribution
Analyzing musical performances is a challenging and emergent field of computational music research, aiming to reveal performance patterns and link them to musical contexts. The [MIRAGE research project](https://www.uio.no/ritmo/english/projects/mirage/) is contributing to this scientific body, currently addressing the modest amount of computational research on traditional Scandinavian folk music, utilizing a transdisciplinary approach that builds on contemporary musicological perspectives. However, collaborating across disciplines can introduce a number of challenges on its own. One way to mitigate challenges inherent in transdisciplinary research approaches is to develop tailored technologies that seek to increase the availability of expertise and knowledge across disciplines. Recent studies have also shown that most tailored technologies for music performance assessment are unreliable in educational settings, suggesting that further research is needed to evaluate the usability of computational tools that explore musical performances. Inspired by these contemporary conundrums, and my ability to acquire detailed Hardanger fiddle performance data from MIRAGE, my research question became:

* **How can we design interactive computational tools to explore performance patterns in Hardanger fiddle music?**

Therefore, the aim of the thesis was to increase the availability of computational music research in the field of musicology, offering small contributions to HCI (human-computer interaction) and CMA (computational music analysis), and to the preservation and modernization of valuable cultural heritage.

# Approach
The thesis presents the development and evaluation of two software prototypes that integrate contemporary research perspectives on the complex rhythmical structuring of traditional Hardanger fiddle *springar* performances. The goal was that this procedure would pinpoint important design-related concepts and generate an evidence-based discussion that would ultimately address the research question. 

### System Description 
The toolkit I developed consisted of three modules, implemented in [MaxMSP](https://cycling74.com/) using the [Bach library](https://www.bachproject.net/) with additional JavaScript code, all designed based on detailed Hardanger fiddle performance data acquired from the MIRAGE. Although these tools harbored an array of interactive and analytical features, with several import and export options, each module had a primary functionality inspired by contemporary research on Hardanger fiddle performance patterns. The first module featured an interactive score representation that enabled users to manipulate the beat-level rhythmical structuring of a performance. Modules 2 and 3 were more analytical in nature, featuring custom-built plotting interfaces (created with [jsui] objects in Max). The second module enabled users to explore how timing patterns are related to motivic structuring while module 3 harbored the ability to investigate if regions with similar rhythmical properties share other musical parameters, such as pitch, velocity and metric position, incorporating a basic pattern-finding mechanism. To learn more about the core functionalities of these tools, see the video demonstration below:

<figure style="float: none">
  <iframe width="800" height="500"
      src="https://www.youtube.com/embed/uupoLUOgVAE"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer;
      100%play;
      clipboard-write;
      encrypted-media;
      gyroscope;
      picture-in-picture"
      allowfullscreen>
    </iframe>
  <figcaption>This brief video demonstration goes through the very basic functionalities of the proposed toolkit.
</figcaption>
</figure>

#### Evaluation
The evaluation featured both qualitative and quantitative methods. First, two operational tests were designed to assess the technical accuracy and general usability of modules 2 and 3, in particular, measuring whether the module results were consistent with contemporary performance studies and symbolic representations of the music (musical notation). Second, a questionnaire was administered directly following an online presentation, held on March 4th, 2021. The questionnaire featured fourteen questions designed to collect systematic feedback on more aesthetic and conceptual aspects of the prototypes.

# Findings & Future Work
When reflecting on the evaluation results in the context of the primary thesis objective, a number of key findings were identified. Perhaps the most essential finding was that there is a demand for more tailored technologies in the field of traditional Scandinavian folk music studies, and that the proposed toolkit can accommodate some of these demands. More specifically, the response showed a preference for tools capable of revealing the complex relationships between musical dimensions through interactive and visual means, much like module 3. However, module 3 was only partly successful in this regard as most of the feedback advocated for more advanced features, such as the ability to investigate how musical practices (such as bowing patterns or foot-stomping) are related to structural components (such as motifs) and other musical parameters. The results also revealed that it would be worthwhile to integrate existing computational analysis frameworks and retrieval systems into the toolkit implimentation. This upgrade would improve the compatibility of the software and increase the overall prospects of the technologies becoming research instruments that can contribute to our contemporary understanding of Hardanger fiddle performance patterns. 

<figure>
  <div style="display:flex;">
    <div style="display:flex; padding:5px;">
      <img src="/assets/image/2021_05_19_aleksati_metricposition.jpg" width="100%"/>
    </div>
    <div style="display:flex; padding:5px;">
      <img src="/assets/image/2021_05_19_aleksati_midivelocity.jpg" width="100%"/>
    </div>
    <div style="display:flex; padding:5px;">
      <img src="/assets/image/2021_05_19_aleksati_pitch.jpg" width="100%"/>
    </div>
  </div>
  <figcaption> These images show the current multi-dimensional analysis capabilities of module 3. Displayed is the metric position (left), velocity (middle) and pitch (right) of two three-note regions in one Hardanger fiddle performance that share similar timing patterns.</figcaption>
</figure>

Additional findings illuminated other design considerations for tools aiming to increase the availability of computational music research in the field of musicology, such as integrated features that actively facilitate nuanced interpretation processes. When linking performance parameters to various structural and symbolic layers, the number of variables in our analysis increases, rendering it more complex to make precise interpretations. Therefore, in order to tailor to an audience with varying degrees of musical or technical expertise, tools with the proposed levels of complexity should, ideally, include features that can guide the interpretation process. 


### Future Work
Optimally, future development should see a software migration from Max to a web application. A web application is easier to use, more maintainable, has better support for interactive and UI design elements, and facilitates more complex functionalities. More importantly, a web solution would render the application to be more compatible with other software. Finally, having more carefully designed features in a web-based solution could also enable a better evaluation procedure with the ability to collect more varied data and reach more people in shorter periods of time.