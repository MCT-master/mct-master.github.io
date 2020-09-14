---
layout: post
title: "Jamulus: Can y-- hear -e now?"
date: 2020-09-06 20:12:57 +0200
categories: portal
author: Alena Clim, Leigh Murray, Abhishek Choubey 
image: /assets/image/2020-09-06-alenacl-team-a.jpg
keywords: jamulus, latency, jamming
excerpt: "During the second session of the Physical-Virtual Communication and Music course from 2020, we had our first experience with telematic music performance. It was not the greatest jam we ever had, but we learned from it. "
---

# Jamulus: Can y-- hear -e now?

During the second session of the Physical-Virtual Communication and Music course from 2020, we had our first experience with telematic music performance. It was not the greatest jam we ever had, but we learned from it.

### The prerequisites

This class required a wired network connection (preferably an Ethernet cable), microphone(s), audio interfaces, and musical instruments. We were supposed to test the [Jamulus software](https://sourceforge.net/projects/llcon/) during class, in a server set up in Trondheim. This software allows musicians to have real-time jam sessions over the internet by collecting audio data from each individual source, mixing the data, and then sending the mix back to each person. During a short meeting on Zoom, our team tried to play the audio of the song “Over the Rainbow” by Israel Kamakawiwoʻole in 1990. After 15 minutes of trying to combine an electric guitar (Leigh), an ukulele (Choubey) and a classical guitar (Alena), we had a decent version of the song and were ready to try to play our technological masterpiece over information highway, the internet.

### What actually happened

The teacher had asked everyone in the class to join the Jamulus server at the same time but the server was not able to handle that many connections, so some of our group members were unable to join. Instead, we all returned to Zoom and entered the Jamulus session team by team. 

Once all the team members managed to join the session, there was significant latency between us (Leigh is in Norway, Alena is in Romania and Abhishek is in India). Jamulus is unable to overcome the physical limitations of latency introduced by such a huge distance (6500 km) so this was one issue - although Leigh had a latency of only 11 ms, Alena had 156 ms and Choubey had 235 ms. The primary issues, however, were that there was not a consistent stream of audio from Alena’s computer and, although Leigh’s audio did work, he had to restart his machine after each session as Jamulus would not release the audio device for other software (primarily Zoom) to use it again.  Since we were the first team in our class to use the system and we were struggling to get it working, we stopped trying to make it work and left the session to let another team have a go at it.


![Difference in locations doesn't help with the latency.](/assets/image/2020-09-06-alenacl-team-a.jpg "Locations vs latency.")


We conducted a trace-route to see how international network traffic reached Trondheim (where the server set up by Anders was) and noticed that it is all routed through Oslo. To slightly reduce the distance all our network traffic needed to travel, we set up our own Jamulus server using [NREC](https://www.nrec.no/) which is based in Oslo. When testing this server we deduced that a wired connection for Alena was necessary to have a consistent audio connection but latency was still a significant issue. We never got to a point where we actually were able to try playing music together.

### Afterthoughts

After the disappointing session, we started seeing the experience from the perspective of the audience while other teams tried testing Jamulus on the (Trondheim) Jamulus server. Listening to them jam along with each other was also not so smooth of an experience, but it was definitely better than what we experienced. Due to the latency and delay, it was hard to follow their jam as they played along with a metronome that one of the team members had on. We were watching them via Zoom, and listening to them play through Jamulus. With this experience it is evident that jamming together is not just about playing musical instruments, but rather about the physical emotion and certain cues that musicians exchange make analog jamming the fun that it is.

Given the simplicity of setting up a Jamulus server (it took us around 30 minutes) and there are only 3 groups in our class we would recommend having a Jamulus server set up for each group in the future so that we can all practice simultaneously.


### Second experience: another chance?

In our second attempt to make music together using Jamulus, we had hoped that we would atleast get connected and be able to play some music, unlike our previous disheartening experience, and our expectations were satisfied to a point. We were all able to connect to Jamulus (albeit Choubey and Leigh’s devices would crash if both Zoom and Jamulus would be connected to audio) and we could listen to each other, but did we make music together? Not so much.

Last time we tried to synchronize an electric guitar, an ukulele and a classical guitar, but this time we decided to only use an acoustic guitar and ukulele together with a shaker that would keep the rhythm. This time around, Alena also had a wired connection, and her latency was reduced to 63 ms. However, when trying to play together, using a metronome for reference, we only managed to be in sync two by two: if two of us appeared to be playing at the same time, the third would be totally off the rhythm. 

![Jamming while referencing a metronome.](/assets/image/2020_09_14_alenacl_metronome_jamming.jpg "Metronome reference.")

Trying to solve the latency problem, we jammed at a very low tempo, around 40bpm. Playing at such low tempo was impractical, from a musical point of view, but it improved our coordination … slightly. With the metronome as our reference we all kept in mind our delay and managed to play in sync for a few seconds. However, the musical output sounded robotic and even nostalgic, as it felt like we were just learning to play the instruments rather than jamming together. 

In conclusion, our second session of using Jamulus came with some improvement. On the technological front, we were able to connect to Jamulus and hear each other play! On  the musical front, we still could not play music together in the wide sense. We played our instruments in sync and created an (interesting) musical output; however, it couldn’t be called jamming by any traditional means.

Based on our experience, Jamulus is an acceptable platform for online jamming - with some restrictions. If the latency between musicians is higher than 20-30 ms and/or there is a substantial physical distance between them, only two people can play together and be in sync. If the latency for all participants is lower than that (or they are all in the same area), then it is most likely possible to have more people jam together. It is very good practice to have wired internet connection (both due to its increased stability and bandwidth), and it’s good to combine different types of instruments. 
