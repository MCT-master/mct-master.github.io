---
layout: post
title: "Designing a hybrid conference"
date: 2021-05-11 10:00:00 +0200
categories: applied-project
author: Joni Mok, Pedro Lucas, Rayam Luna, Stephen Gardener
image: /assets/image/2021_05_11_stephedg_ritmo_website.png
keywords: conference, concert, zoom, streaming
excerpt: "How do you design conference that brings together both virtual and physical participants? This was the problem we explored for our Applied Project."
---

Rhythm Production and Perception Workshop (RPPW) is a biannual international event that brings researchers from a range of disciplines together to engage in discussions about the scientific study of rhythm. Our MCT4031 project was to design and develop a hybrid conference solution for the RITMO/RPPW conference scheduled for 22nd-25th June 2021.

Online conferences have been becoming more and more popular, allowing people from all over the world to attend events that might not have previously been possible due to time and cost restraints. Then COVID hit, and suddenly they were the only way to hold a conference. This means that there is now a lot of technology out there to support virtual conferences. What has been less explored however is the concept of the hybrid conference. As COVID (hopefully!) starts to recede, conferences will once again start to open up physically, but the demand for online access to these conferences is likely to remain high. So we need to find new solutions that can combine the online and offline elements of a conference into an engaging, unified whole.

## Research 

We started off by exploring virtual socialisation tools such as Attendify, High Fidelity and Gathertown. This is because we saw solving the hybrid social situation as the trickiest part of the problem. Upon further discussion with the RITMO team and interviews with participants from other online conferences, we learned that such high-tech tools would not make sense - the age group of the conference participants will range from 18 up to 80, and such solutions might prove too complex for our less tech savvy participants. Our interviews showed a general preference for tried and tested tools, and so our suggestions for the conference include Zoom, YouTube streaming and Slack. It could be that Slack doesn’t comply fully with the GDPR, and if this is the case, then we propose the open source Rocket Chat as a replacement.

## The virtual conference

<figure style="float: none">
   <img src="/assets/image/2021_05_11_stephedg_conceptual_comms_model.jpg"  width="auto" />
</figure>

For the online participants, the “Zoom Webinar” option can be used for keynotes, paper presentations, poster blitz, concerts, and symposiums. It also offers functionality for Q&A sessions. Additionally, using the university’s Wowza server, these sessions can be streamed through YouTube as a secondary medium which would also mean that the talk would be available after it finishes. 

The social chat tool Slack/Rocket Chat would be organised by pre-defined conference topics (Entrainment, Music Performance, SMS, Medical Intervention, and Speech), and each paper would be a thread inside it’s topic.

## The physical conference

The conference will take place physically in two locations: RITMO and ZEB building. Most of the conference will happen at RITMO, while concerts in the ZEB building.

Forsamlingssalen at RITMO will be the main room for talks and presentations, and it is already set up and configured for streaming. 

For poster sessions, corridors at RITMO building would be used to place printed posters. Each poster would have QR codes, giving the physical attendants access to digital resources such as pre-recorded video, downloadable documents and links to Zoom & chat channels.
For this conference all presenters will be virtual, but such a setup would allow a physical presenter to show their work to both online and in-person attendees at the same time using Zoom.

Finally, concerts will be held in  Salen in the ZEB building. This room has now been configured for streaming with a similar setup to Forsamlingssalen. As the quality is slighter better than Zoom, YouTube would be the suggested primary platform for streaming.

## Socialising

<figure style="float: none">
   <img src="/assets/image/2021_05_11_stephedg_social_zoom_room.jpg"  width="auto" />
</figure>


Attendants will have the opportunity to socialise through several Zoom rooms and Rocket Chat channels organised by topic. To give virtual attendees the feeling of being in a shared physical place, we suggest introducing an audio/video setup into the RITMO cafe. This can be one of the social Zoom rooms available to participants, offering an opportunity for people to meet up in a more casual way. 

## Backup plan

Even though we have chosen fairly tried and tested solutions, when relying on complex combinations of technology, things can go wrong. And so a backup plan is needed. Here is ours:

<figure style="float: none">
   <img src="/assets/image/2021_05_11_stephedg_backup_plan.png"  width="auto" />
</figure>


## Socialising - alternative solutions

We explored several alternatives for socialising between physical and virtual attendees, some of them more complex than others. As we mentioned at the beginning of this post, due to the wide range of people expected to attend this conference, the above recommendation uses the simplest and most familiar solutions. This section will briefly discuss some of the alternatives we explored, for those looking for more adventurous solutions. 

**Gather Town** allows the building of maps in a 2D world in which people can connect. It uses spatial audio to great effect, and the cartoony, 2D space keeps things approachable and friendly. Several spaces can be created for supporting a conference which include parallel rooms and individual presentations, which could be useful for concurrent talks and poster sessions. **Mozilla Hubs** has a similar approach using an impressive 3D world. In addition, is also open source and self-host-able. While it offers a lot of power, our experience was that the controls felt a little awkward at times, and it might not be so intuitive for the less tech-savvy among us. 

In the context of a hybrid environment, we need to merge physical and virtual participants in a single place. The solutions mentioned above work well in situations where everyone is online (or at least on a computer). At our conference however, we will have physical _and_ virtual attendees moving between different interest points (talks, posters, social spaces etc.), so the question became: how can we bring the virtual world into the physical space, and the physical space into the virtual world? So we started looking at non-intrusive solutions using mobile phones or detection systems in the physical space. The following is a diagram of one possible solution.

<figure style="float: none">
   <img src="/assets/image/2021_05_11_stephedg_mocap.png"  width="auto" />
</figure>

In the image above we have a physical and a virtual space. In the case of the physical space, the participant is tracked through an “Indoor Positioning System (IPS)”. Attendees in the virtual space can move with an avatar using a web application that maps the physical space. The participants can interact with each other or with pre-configured “interest points”, for example a poster or social area. When either participant approaches an interest point, it could trigger a set of actions depending on the type of interest point - for example, offering links to download information or join a Zoom room.

## The hub

Back to our proposal. We now have lots of Zoom rooms, information and chat channels, but how are we going to organise all of this? How is the attendee going to find their way around?

After lots of user testing, we developed a website to help with this. A website that can be used by both physical and virtual participants to help them attend the talks they are interested in, find the information they need and meet up and socialise with others at the conference. 

<figure style="float: none">
   <img src="/assets/image/2021_05_11_stephedg_ritmo_website.png"  width="auto" />
</figure>

## Conclusion

This was an interesting project with lots of moving parts, and there were many different directions in which we could have gone. Hopefully we have met the brief while at the same time provided some food for thought for further explorations into hybrid events.
See you at the conference!
