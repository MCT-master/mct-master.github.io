---
layout: post
title: MoCap Recap - Two weeks recap of a Motion Tracking workshop
date: 2019-04-01 21:45:00 +0200
categories: Motion-Tracking
author: Guy Sion, Sam Roman, Elias Anderson
image: \assets\img\guysion\ashane-mocap.jpg  
excerpt: "During weeks 10-11 we attended the Music related motion tracking course (MCT4043) as part of the MCT program.
The week started with the installation of the OptiTrack system in Oslo, placement of cameras, connecting wires to
hubs and software installation and setup. we got familiar with the Motive:Body software and was able to run
calibrations, set and label markers, record motion data, export it in a correct way and experiment with sonifying
the results with both recorded and streamed motion capture data."
Keywords: Motion Caption, Movment, MoCap, Gestures, Virtual DJ, OptiTrack
---

<figure>
<img src="\assets\img\guysion\ashane-mocap.jpg" width = "100%" align="center" />
</figure>

<p>During weeks 10-11 Sam & Guy attended the Music related motion tracking course (MCT4043) as part of the MCT program.
The week started with the installation of the OptiTrack system in Oslo, placement of cameras, connecting wires to
hubs and software installation and setup. We got familiar with the Motive:Body software and was able to run
calibrations, set and label markers, record motion data, export it in a correct way and experiment with sonifying
the results with both recorded and streamed motion capture data.</p>

### Week 1

<p>The first week was building up towards the <a href="https://www.hf.uio.no/ritmo/english/projects/flagship-projects/micro/events/standstill/2019/index.html" target="_blank">Nordic Championship of Standstill</a>. This gave us a good overview on all aspects of a thorough research, both in terms of preparation (calibration, paperwork, division of labor, attracting participants, testing etc.), conducting the experiment and data analysis. The MCT students have been rotating
between the different responsibilities and between us have managed to take part and be involved with all tasks during the
week. We also have attended the lectures of the NordicSMC Winter School at RITMO, and was presented with several
tutorials (mocap toolbox, Musical Gesture Toolbox) on research and project presentations concerning motion and
music. The experience was a bit overwhelming at times because this subject and the level of the material seemed
to be more advanced for our level, but we are glad to be exposed to the tools and the work whithin the motion capture field.</p>


<p><center><iframe width="560" height="315" src="https://www.youtube.com/embed/LhiSDOpMbPI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
<center>Elias is getting the maximum best score for using the calibration wand</center></p>


### Week 2

<p>In the second week we were divided into groups and focused on a project to be presented on the last day of the
course. The group (including Elias and Sam) developed a Virtual DJ that utilizes traditional and nontraditional
movements of a DJ, for manipulating parameters a musical track. Our objective was capturing DJ body movements
(recorded and streamed) into motion capture data and to sonify these movements.</p>


<p><figure>
<img src="\assets\img\guysion\all-panorama-mocap.jpg" width = "100%" align="center" />
</figure></p>


<p>Our method was to use the OptiTrack/Motive system to record the motion tracking data of a DJ standing by a table
imitating a controller deck. We exported the mocap data to a text file that can be read by a Max/MSP patch that
was developed initially by <a href="http://www.arj.no/" target="_blank">Alexander Refsum Jensenius</a> (in PD), converted to Max (by Anders Tveit) and further developed by Georgios Sioros. We mapped several markers from the mocap data (hand, head, sliders) via the Max4Live patch to different parameters in the Ableton music project. We scaled (in Max) the row mocap data to
the exact range of our Ableton musical parameters and were successfully controlling the chosen mapped
parameters. We used our recorded mocap data to produce video clip using the <a href="http://biomechanical-toolkit.github.io/mokka/" target="_blank">Mokka toolkit</a>. We then synchronized the video to the music we created and manipulated.</p>


<p><center><iframe width="560" height="315" src="https://www.youtube.com/embed/Hc5fiZRiAbU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
<center>Music by DJ Dr. Roman</center></p>


<p>During the last day we mostly concentrated on creating a live performance of our project as well as presenting the
project in its entirety. With the help of Victor and Georgios we managed to live stream the mocap data to our max
patch (OSCNatNetClient) and were able to run several tests before reaching the desired result. Although our live
presentation was not functioning properly (presenting as the second group in Oslo without re-calibration), I feel
that our objectives were met and that we successfully managed at the end to sonify mocap data in a convincing
way.</p>


<p><center><iframe width="560" height="315" src="https://www.youtube.com/embed/FVG0eXRqKlg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
<center>Music by DJ Dr. Roman</center></p>


The limitations and problems we faced were mainly regarding the lack of knowledge in Max/MSP and with getting
familiar with the systems that were introduced to us. But being aware of our group limitations and getting the
needed support from both teachers and classmates, we overcame all difficulties.

If we had more time to work on the project, we would of liked to explore more expressive forms of modulation. The medium allows for unique relationships between movement to create and morph sound. Another parameter that could of been harnessed was acceleration data, similar to the process used for the standstill research event done on the first week. It could be used as another unique factor to map.
