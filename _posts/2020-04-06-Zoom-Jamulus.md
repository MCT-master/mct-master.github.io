---
layout: post
title: "Zoom and other streaming services for jamming"
date: 2020-04-06 11:10:20 +0200
categories: Portal
author: Gaute Wardenær
image: /assets/image/gaute/zoom.jpg
excerpt: "One thing you can do is to enable the option of 'preserve original audio' in Zoom."
Keywords: Zoom, Jamming, Jamulus, MCT, Internet, Cake
---

## Zoom as a tool for jamming online

Should you use Zoom as a tool for jamming together online while in quarantine? 

Short answer: Don't. 

Long answer: Keep reading. 

Using services like Zoom, Skype, Whereby, FaceTime etc. might seem like a good idea in the first place, but after looking into it, I have concluded that they are far from optimal for this use and there are functioning, easy to use services out there that does this job a million times better. 

### Latency

First there is the issue of latency; how much latency does these systems have inherently? Yes. Yes is as accurate of an answer as any number, in this case. Why? Because the latency can jump around so wildly that you can't really put a single number on it. 

If you have a stable connection and the traffic on their servers are low you can achieve a fairly decent number of between 40 and 80ms. While being in the higher range of what is acceptable for playing music together, it is doable. The problem is that this number can jump up to as high as 200ms when the traffic on their servers are high or you have a bad connection. 200ms is truly un-acceptable if you want to play anything other than palestrina. 

### Processing

All of these services has a lot of internal processing to make the experience as good as possible for the participants in the conversation. These algorithms work wonders in making sure you are heard when you speak and muted when other people speak. The echo-cancellation is essential in order to not have constant feedback and the compressors and EQ make you sound a lot more intelligible, even with a bad microphone. In short, we would be lost without this processing if attempt to  conduct meetings online. But we are not conducting meetings online, we are playing rock 'n roll, and this is where the problems start to arise. 

One thing you can do is to enable the option og "preserve original audio" in Zoom. This bypasses the processing done by the software on your computer, but you are still left to the mercy of the algorithms when it comes to the auto-mixing that happens in the cloud. 

I surfed the waves of the inter-webs with the compass set towards a software that would make it easy for us to connect people together online, while still providing: 

1: Low latency. 

2: Ease of use.

3: Some sort of ability to mix your monitoring. 

4: Low price-point. 

## Enter Jamulus

After sifting through DIY hack-ish forums, I struck gold in a software Called Jamulus. 

Developed by a guy with a funny accent and a love for old Dream Theater merch, Jamulus is open source and very well documented.

<iframe width="560" height="315"
src="http://llcon.sourceforge.net/"
frameborder="0" allowfullscreen></iframe>


It works by installing a client on your computer and connecting to an external server, were all the clients that are connected to that server can hear share audio. The latency is very low (some reports say below 15ms) and equally important; you are able to mix all the sources to your liking, for a good monitoring experience. 

The software is very easy to install and use, is lightweight enough to be installed on a Raspberry PI and sound totally decent. What is not to love about this? 

I did not have the time to set up a server here in Oslo and try this out with others, so I only ran tests by myself through a server in the Netherlands, but were able to achieve a stable sub-60ms roundtrip latency from in to out in my soundcard. I am impressed. 

## Mothers and cakes

My mother has this thing going with her group of friends; they are a bunch of 60-ish year women who love to drink wine, chat and occasionally sing together, healthy behavior for close to retired ladies to do. 

She called me up earlier this week and asked me for advise on how they could sing the birthday song for one of them who had just turned 60. I was thrilled! I told her that I was working on a project specifically about this and started ranting about all the possibilities software like Jamulus opened for this kind of interaction. My mother's reaction was a bit more chilled and she quickly asked "do we have to install anything?" I replied: "well, yes. You will have to install this one software, which has a tutorial on YouTube and click on a setting or two, but it is really easy and I can guide you through the process" - "yeah, well, some of us are not that technically minded". 

And that comment hit the nail straight on the head. 

The fact that you have to install a software that is not on the app store and connect to a server puts a lot of people of, since they immediately picture some sort of hacking-montage from an 80's movie. 



<figure text-align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/KEkrWRHCDQU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

What they ended up doing was using Facetime on their phones/macs. When I asked how it worked she reported "we ended up singing one line each, since whenever we tried to sing in unison, all our voices would be cut out. Also, I was the only one not able to get my microphone to work, so I ended up just miming and waving while the others watched in silence".

I think that quote sums up the user-experience in a nutshell.

For technically literate people like you and I, installing software and adjusting a few settings is a breeze, but for the vast majority of the population the word "server" is like saying Voldemort in the Harry Potter universe, everyone becomes afraid. Who wants to be the brave little toaster who explains auto-mix, echo-cancellation and network latency to a crowd of impatient mothers? Not me.

## The restriction of five people in a room

Together with a couple of other companies and individuals, EKKO has started a streaming-studio to handle the increased demand for online live performances. The reason being that all live performances in it´s conventional form has been banned due to the Corona situation. We thought we had it all covered when we had a venue, cameras, sound equipment and crew in place, but it turned out to be harder than expected to get bands that are more than five people to perform together, due to the "five people in a room together" max-limit. 

Our proposed solution has now been to split the stage in two, separating for instance the drummer, bassist and keyboardist in one room from the vocals, guitar and tuba in the other. Since all our equipment runs on sound over ethernet, we can easily connect the two rooms together for bi-directional sound. In this case, Zoom is a perfect solution for having visual communication between the rooms as well. Because of it´s ease of use and the fact that it can be installed on almost any device, Zoom seems to be perfect for this, as a side-car to a hard-wired audio over IP network that provides audio communication with under 2ms of latency. 

The only problem with doing this is that by separating musicians who are used to playing together in a room, they will not have the same "feeling" as playing together on the same stage. Zoom can provide a decent video-feed to be used here, but the auditory experience will be very different. I have therefore proposed that we will need a substantial amount of power for the monitoring, having a decent concert PA as monitors, to play back drums, bass and other powerful instruments as well as providing spatial separation of the instruments. 

## Conclusion

The properties that makes services like Zoom, Skype, Facetime and others such great products are also their biggest pitfalls. In order to make their services user friendly and sexy, the companies that makes them has to hide most of the techy, nerdy -stuff that lets you tweak them to fit other use cases. When Steve Jobs wanted to make the user-experience of the operating system "insanely great" he did so by removing almost all the customization options, leaving the user with an experience that might be restrictive, but one they will actually use. Apple fans has taken a lot of shit from techies that prefers Linux bash over macOS, but you can't argue with the fact that Apple became the highest valued company in the world while you still have to actively seek out the terminal if you want to get freaky with it. 

I can imagine a product that really delivers the streamlined user experience that is required to be appealing to the public and still allows for playing music together online with decent quality, but alas, the search for such a product will have to continue. 

Will the situation caused by quarantine now result in a push towards innovation in this field? Certainly. 

Will we see a product that delivers what I now have described in the near future? 

Doubtfully, but I am hopeful.