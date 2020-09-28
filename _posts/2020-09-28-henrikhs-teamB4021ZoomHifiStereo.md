---
layout: post
title: "Zoom - High Fidelity and Stereo"
date: 2020-09-28 15:00:00 +0200
categories: portal
author: Pedro Lucas, Willie Mandeville, Henrik Sveen, Anders Lidal
image: /assets/image/2020_09_28_henrikhs_zoomImage.png
keywords: zoom, music, high-fidelity-mode, stereo, hi-fi, lo-fi
excerpt: "For the members of Team B, Zoom meetings are an everyday occurrence. Like most people during the covid era, we spend much of our professional time communicating from the comfort of our living rooms. These days, using Zoom feels akin to wearing clothes; we’re almost always doing it (sometimes even at the same time)."
---

### Will it hi-fi? Will it stereo? Let’s find out.

For the members of Team B, Zoom meetings are an everyday occurrence. Like most people during the covid era, we spend much of our professional time communicating from the comfort of our living rooms. These days, using Zoom feels akin to wearing clothes; we’re almost always doing it (sometimes even at the same time).

However, this week we took the ‘Zooming’ one step further and checked out two features we’d been neglecting: ‘high fidelity music mode’ and ‘stereo audio.’ These are two features that, as music technologists, we should have great use for and were eager to test. We were sitting on both macs running Catalina, and computer running Windows 10, when doing these tests.

We were all pretty excited for these features, as working with sound via Zoom has been a tedious process for us all. For testing we went with some good old hard panned Black Sabbath, and for clean audio testing we listened to <i>Gaslighting Abbie</i> by Steely Dan. Probably as clean as it gets within music. The method for this was that Henrik shared sound from his computer while we all muted our microphones. We agreed on visual signals for when he was switching modes, so that we would all know what to listen for in the beginning. But before testing could start at all we needed to get the stereo mode going in Zoom. Turns out we had to manually download version 5.3.0 from their website, and after that you, as a host, have to enter settings via the browser to enable the stereo mode switch. Why does it have to be like that? We wouldn’t know, but we definitely think this was an unnecessary step in the process. Now, let’s talk testing.

### High Fidelity
The first thing we found quite disappointing was of course the fact that the high fidelity mode wasn’t the John Cusack face-filter-effect we expected it to be. Pun intended, you’re welcome.
The second most disappointing thing was the effect it had on audio - almost none. At least with stereo mode enabled at the same time. When playing mono, Willie was able to get some degree of effect from the high fidelity mode on his budget earbuds. The rest of us were listening through studio headphones and speakers.

### Stereo
The stereo thing is pretty nice though. The one thing Team B all agreed on was that applying these two new settings really forced Zoom to work a bit harder. Some glitchy and laggy audio issues (things that rarely happen in our simple four member group meetings) were experienced by all of us, raising the question of whether the enhanced settings were worth the loss of smooth Zoom usage. Some group members also experienced fairly continuous clicking and clipping sounds in their right headphones. Why this would be we have no idea, but it clearly isn’t ideal. Obviously more experimentation will follow as we continue to experiment with the audio settings.

We recorded the zoom session explained previously, unfortunately, we realized that the recording Zoom feature does not take the signal as stereo. So another take was made using the built-in recording app in Windows intended mainly for games’ screen capture.

This time the recording worked and the changes between mono and stereo were noticeable. However, the Hi-fi feature was still in doubt because of a similar perception when it is activated or not. Therefore, an excerpt of the song was taken from the recording file made in Windows and we plotted the spectrum for when the Hi-fi feature was enabled and when it was not. The following graphs depict the results:

<figure style="float: auto">
   <img src="/assets/image/2020_09_27_henrikhs_non-hifi.png" alt="Alternate Text" title="Let's lo-fi" width="300" /> <figcaption>Let's lo-fi</figcaption>
</figure>
<figure style="float: auto">
   <img src="/assets/image/2020_09_27_henrikhs_hifi.png" alt="Let's hi-fi" title="Let's hi-fi" width="300" /> <figcaption>Let's hi-fi</figcaption>
</figure>


Note the differences in frequency peaks. Especially between 300 Hz and 600 Hz. Here we see two peaks in the lo-fi, whereas the hi-fi mode shows a smooth descend as we move along the frequency axis. We can assume that this may be caused by a higher number of FFT windows in the hi-fi mode, and that what we see in the lo-fi is actually the hamming windows. But we wouldn't know for sure, as we haven't seen the algorithm that actually performs the high fidelity mode.
