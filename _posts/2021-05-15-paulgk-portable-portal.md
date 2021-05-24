---
layout: post
title: "The Portable Portal: An Ecological Approach to Technology-Enhanced Learning in Bangladesh"
date: 2021-05-15 15:37:00 +0200
categories: masters-thesis
author: Paul Koenig
image: /assets/image/2021_05_15_paulgk_IntroducingPP.png
keywords:  MCT, Master's thesis, TEL, International aid, Bangladesh, STS, development studies, education studies,
excerpt: "Working toward a cogent ecological framework for technological-aid development, or: We are our technologies, they are Us"
---

<figure align="middle">
<img src="/assets/image/2021_05_15_paulgk_IntroducingPP.png" width="100%"/>
<figcaption><strong></strong></figcaption>
</figure>

## The Portable Portal

The objective of this study was to research and design a distance-teaching system to be used by the girls and young women of [Speak Up For The Poor’s](https://www.speakupforthepoor.org/) Girl’s Education Program (GEP). Speak Up is a nonprofit organization working in Bangladesh, with the primary area of its focus being on the rural Dalit community. As girls in these communities are very vulnerable to child marriage, sex trafficking, and other exploitation and violence, keeping them in school is an essential goal of the GEP as this is the best way to ensure they have a chance of reaching their full potential. Many of the girls in this program have gone on to higher education and professional training, returning to their communities as advocates for and inspiration to future generations of girls. The video below gives a brief introduction to the Portable Portal and Speak Up:


<figure style="float: none">
  <iframe width="800" height="500"
      src="https://youtube.com/embed/c9hERFzqV6o"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer;
      autoplay;
      clipboard-write;
      encrypted-media;
      gyroscope;
      picture-in-picture"
      allowfullscreen>
    </iframe>
  <figcaption><strong>Introduction to the Portable Portal</strong></figcaption>

</figure>

<br>

## Background

Early in 2020 I re-connected with Troy Anderson, an old high-school friend of mine and the founder of Speak Up for the Poor. I was curious to know if there was something I could do for Speak Up that was related to MCT and my not-yet-determined master’s thesis. We talked about a variety of approaches but what really stuck was Troy’s wish for some way to help his students, 1400 girls in 30 different villages, with their English homework. Passing the national English exam is essential to being allowed to progress to higher education, but there is a lack of good English tutors in Bangladesh, particularly in rural areas. Troy wanted to be able to conduct a weekly lecture, based on the current chapter in the national English textbook, from his office in Khulna and broadcast it out to Speak Up’s “learning centers” in all 30 villages.

Some type of videoconferencing solution is perhaps the obvious answer to this problem, but there are many factors inhibiting the success of information and communication technologies (ICT) in rural Bangladesh. Thus, the idea of the Portable Portal (PP) was born. Initial parameters we discussed for the device were as follows:

 - Rugged, durable, and portable construction to be used in rural villages
 - Flexible power options to deal with power grid unreliability
 - Ability to operate satisfactorily on a 3g/4g cellular network
 - Simple to operate for those with low technological competence

As I read further into the literature surrounding technological-aid interventions in the global South, it became obvious that these were not the only barriers to ICT success that I would encounter when designing this intervention. The world is littered with aid projects that have failed their recipients for one reason or another, and I felt I needed to know why. Thus, this thesis became a kind of scoping study, to explore these barriers and try to design the system to mitigate their impacts.

<br>

## Relevance to MCT

In MCT we focus on video-communication technology primarily as it relates to music. However, the applications go well beyond music, as we are all quite aware of from the last year and a half that we’ve spend on Zoom. While the focus of this thesis is not explicitly on telematic music, networked musical collaboration, or music education, the Portable Portal could certainly be used for these ends, particularly in rural and remote areas that suffer from poor power and internet infrastructure. The reason that it is not the focus of this thesis is simply that online musical collaboration is not a major area of concern for Speak Up For The Poor, whereas passing national English language exams is. It’s felt that the importance of this mission overshadows the potential musical uses of the PP, though any musical applications are, of course, a welcome side-effect.

<br>

## Design Features

The initial parameters (listed above) that were discussed for the PP continued to be important in the development. As more was learned about the ecology of its proposed setting, other parameters were added:

**Eco-design:** The problem of e-waste in Bangladesh is growing rapidly, as it is in the world in general. Much of the world’s cast-off electronics come to rest in poor countries, where lax regulations and cheap labor have caused informal recycling and disposal industries to proliferate. This has extremely deleterious effects on the environment and health. The PP has been designed to be as durable, repairable, re-purposeable, and recyclable as possible, with an accessible, simple, and open-source design. Figure 1 illustrates points in the life-cycle of an ICT that can be influenced through careful design.

<figure align="middle">
<img src="/assets/image/2021_05_24_paulgk_LifeCycleofPP.png" width="100%"/>
<figcaption><strong>Figure 1: Life Cycle</strong></figcaption>
</figure>

<br>

**Local construction:** By thoroughly documenting the assembly of the PP with diagrams, parts lists, and assembly videos, it is intended that the device be built in Bangladesh by local technicians. This aids both the local economy and cuts down on environmental impacts from shipping.

**Safety:** Because of its setting, it was important to consider the safety of its users from impacts such as revenge porn, which had already affected several young women in the Speak Up GEP. In some conservative cultures, this can be nothing more than the sharing of a photo of a woman without her head scarf. An act so seemingly harmless to many observers can be quite traumatic for the women targeted, affecting their self-image, social standing, and potentially their physical safety as well. Designing the PP to access only the system website helps to prevent this, but of course only side-steps the issue, passing it on to other ICTs such as smartphones, which these young women will no doubt also encounter in their lives.

<br>

## System Description

The Portable Portal System consists of both a bespoke website containing embedded video conferencing tools, archived lecture videos, a calendar for scheduling sessions, and other necessary information, and a hardware device (the Portable Portal, or “PP”) purpose-built for accessing this website. Together, these elements constitute a system for distance teaching that is accessible to non-technically adept users.

#### Website

The website contains three main pages, as follows:

1. **Landing page:** This page displays the calendar of all upcoming lectures. In addition, a countdown timer displays the time remaining until the next lecture begins. When logging on with the PP, this page will display first, unless a lecture is imminent. If lecture is imminent (within 60 seconds), PP automatically navigates to the Videoconference page.
<br>
2. **Videoconference page:** This page displays the embedded videoconferencing portal.
<br>
3. **Lecture Archive page:** This page contains all past video lectures that have been archived. Lectures are recorded automatically. The instructor can review and edit (if necessary) the lecture after its conclusion, and then fill out a form to categorize the lecture by date, subject, and corresponding textbook chapter before posting it to the web page.

Student users logging on to the website with a PP device will be automatically logged on with access to the basic functions described on the Student workflow diagram (see figure 2).

<figure align="middle">
<img src="/assets/image/2021_05_24_paulgk_UserWorkflow.png" width="80%"/>
<figcaption><strong>Figure 2: Student Workflow</strong></figcaption>
</figure>


Instructors logging on with instructor credentials allow additional functions, mainly the ability to initiate sessions and edit/post video via the instructor dashboard, as shown on the Instructor workflow diagram (see figure 3).

<br>



<figure align="middle">
<img src="/assets/image/2021_05_24_paulgk_InstructorWorkflow.png" width="80%"/>
<figcaption><strong>Figure 3: Instructor Workflow</strong></figcaption>
</figure>

#### Physical Device

The PP consists of a heavy-duty road case containing a monitor screen, webcam, microphones, cellular modem, audio amplifier and speakers, a battery-backup UPS (uninterruptible power supply), and a micro-computer.

<figure align="middle">
<img src="/assets/image/2021_05_15_paulgk_PPFrontFigure.png" width="80%"/>
<figcaption><strong>Figure 4: Front Panel</strong></figcaption>
</figure>

Figure 4 shows the front panel of the PP with the cover removed, revealing the monitor screen (c), webcam (a), mics (b), speakers (f), a volume knob (e) for the audio system, the “raise hand” button (g), and a 5-button keypad (d) for navigating the website. Controls are kept very simple by design, making the PP friendly to users with low technological expertise.


<figure align="middle">
<img src="/assets/image/2021_05_15_paulgk_PPRearFigure copy.png" width="80%"/>
<figcaption><strong>Figure 5: Rear</strong></figcaption>
</figure>

Behind the rear cover of the device (figure 3) is revealed the options for powering the device (i); a standard wall plug for when grid power is available, and a pair of screw terminals for attaching to a 12 volt DC source such as a standard car battery for use when grid power is unavailable or unreliable. The device will prioritize grid power if connected to both. A green led lights to indicate that the unit is properly connected, while red indicates a problem such as insufficient battery power or a reversed polarity connection (not visible in figure 5). Powering the device on is a simple matter of plugging it in or attaching to a battery, switching the unit on, and affirming that the led has lit green. To power down, the user has to simply turn off and unplug the unit. An internal UPS assures that the micro-computer shuts down properly.

All other components of the system are protected by a shroud that attaches via screws to the inside of the case. The shroud can be easily removed for service.

<br>

## Results of study

There are many factors that impact and are impacted by the use of ICT in Bangladesh, and more specifically within the Speak Up GEP. These range from quantifiable impacts such as infrastructure, environment, and economy to less-quantifiable impacts such as cultural values and relational norms.

The main take-away from this study is that our technologies are highly context-dependent. What works in the North does not necessarily work in the South. Because of this, we have to approach technological development as an act of co-creation, involving our users in the process. Furthermore, we are obligated to monitor our creations with a willingness to redesign or even retire them if their negative impacts overwhelm the positive. In this way we ensure that the recipients of our aid remain front-and-center, and that our interventions actually work to provide value in their lives.



<figure style="float: none">
<iframe width="560" height="315" src="https://youtube.com/embed/fpgfBIX_IaQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  <figcaption><strong>Anatomy of the Portable Portal (older version)</strong></figcaption>
</figure>
