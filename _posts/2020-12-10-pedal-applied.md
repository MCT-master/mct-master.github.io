---
layout: post
title: "Expanding Collaboration in Pedál"
date: 2020-12-10 12:00:00 +0200
categories: applied-project
author: Ulrik Halmøy, Paul Koenig, Tom Ignatius, Jackson Goode
image: https://miidbaby.com/pedal.png
excerpt: "For our external partner, Pedál, we wanted to document and expand how multi-user interactions took place.  "
Keywords: pedal, ui, ux, webrtc, documentation, collaboration, utility
---

# A Plan for Pedál

<div style="text-align: center;">
    <figure style="display:inline-block; min-width: 40%;">
        <img class="no-shadow" src="/assets/image/2020_12_10_jacksong_pedal_1.png" width="300">
    </figure>
    <figure style="display:inline-block; min-width: 40%">
        <img class="no-shadow" src="/assets/image/2020_12_10_jacksong_pedal_2.png" width="300">
    </figure>
</div>

## Table of contents

-   [A Plan for Pedál](#a-plan-for-pedál)
    -   [What is Pedál?](#what-is-pedál)
    -   [Initial Proposals](#initial-proposals)
-   [How would it work? - User evaluation](#how-would-it-work---user-evaluation)
    -   [Initial Study](#initial-study)
    -   [Case Study 1](#case-study-1)
    -   [Case Study 2](#case-study-2)
    -   [Case Study 3](#case-study-3)
    -   [Reflections from the case studies](#reflections-from-the-case-studies)
-   [How would it function? Experiments with WebRTC](#how-would-it-function---experiments-with-webrtc)
    -   [WebRTC](#webrtc)
    -   [Development and evaluation of <em>naive</em> multi-user P2P](#development-and-evaluation-of-naive-multi-user-p2p)
    -   [Possible system architecture for multi-user in Pedál](#possible-system-architecture-for-multi-user-in-pedál)
-   [How would it look? - Prototype of UI/UX](#how-would-it-look---prototype-of-uiux)
    -   [A new concept for a listener gallery](#a-new-concept-for-a-listener-gallery)
    -   [What's new?](#whats-new)
    -   [More users, more problems](#more-users-more-problems)
-   [Conclusion](#conclusion)

## What is Pedál?

Pedál is a software that enables musicians to remotely collaborate in real time. Some of its main features are the ability to stream both voice and system audio (from a DAW) between two collaborators. There is also the ability to drag and drop audio and MIDI clips to send from one collaborator to another, as well as a recording functionality to record directly into Pedál. Pedál is minimal and has a design reminiscent of analog guitar Pedáls. It’s not intended for live rehearsal (like JamKazam, JackTrip, etc), but instead is optimized for collaborative beat-making, songwriting, and recording sessions.

A platform for musicians to collaborate:

-   Audio stream from mic & session
-   Drag and drop file sharing
-   Recording audio and MIDI clips
-   Contacts for friends
-   Minimal, unobtrusive

## Initial Proposals

From the initial proposals we received from the Pedál team we selected two concepts we wanted to pursue, one to document the workflow of Pedál and suggest improvements, and the other, to draw from this experience and propose a prototype that would allow more than 2 users to collaborate.

-   Research the workflow of Pedál by doing a collaborative project, document the process and suggest improvements for the partner
-   Research and describe, and possibly prototype a multi-user (2+) functionality for Pedál

We further refined these proposals after discussing it with the Pedál team and decided to take a three tiered approach, where each layer would provide insights unto the next. Each of us tackled an angle of this project that we each had experience in and met throughout to discuss our findings and developments. Our research question was:

### How can Pedál develop towards a 2+ user functionality from the perspectives of workflow evaluation, user design, and implementation?

The B-team approached Pedál from the viewpoint of researching and identifying areas for
improvement to its functionality, workflow, and user interface. This involved multiple sessions
using the app both with each other and with musicians outside the MCT program. Multi-user
implementation was explored, as well as UI/UX design of the GUI itself. We divided the tasks among us like so:

### Breakdown of work

**Workflow - Iggy, Paul**

Evaluation and improvements through collaborative musical project

**UI/UX Design - Jackson**

Evaluation of current design and development mock faceplate for multi-user interface

**Implementation - Ulrik**

Working with WebRTC to develop and evaluate P2P functionality with multiple users

This translated into three broad questions that we attempted to answer through our solution and will be the order in which we layout this blog as well.

1. How would it work in practice? _(User evaluation)_

1. How would it function? _(Experiments with WebRTC)_

1. How would it look? _(UI/UX prototyping)_

# How would it work? - User evaluation

### Initial Study:

In our initial study of Pedál we set out to examine the app as it exists, using a couple of different
scenarios so that we could properly evaluate its pros and cons.

These different scenarios - we call them case studies here - were

1. Producer to Musician with technological competency
2. Producer to Musician with low technological competency
3. Multi user experience

The issues we experienced were pretty similar across the board in each of the use-cases. Here’s a
quick summary:

### Case Study 1:

This was a one-on-one session with Iggy as producer (session host) and Paul as session guitarist. Iggy played tracks from his DAW and Paul recorded guitar parts in both Pedál directly and in his own DAW that Iggy could then add to his production.

What we found were two main problems. When recording directly into Pedál, Paul could not use any effect on his signal, which ruled out the use of an electric guitar. (Un-amped electric guitar = uninspiring.) Of course, he could use external effects or even mic up an amp, but this both wakes the neighbors and severely limits the producer’s ability to re-amp, effect, or otherwise manipulate the track.

Another problem is there was no easy way for Iggy to time-align what Paul had recorded within his own DAW. Basically, he had to use his ear and hope it was what was intended. This works ok if what is recorded is very rhythmic and on the beat, but in the case of improvised or syncopated material it’s anyone’s guess where to place the track.

### Case Study 2:

Since Pedál is designed for simplicity and ease-of-use, we felt it was important to attempt a session with a musician outside of our group, someone with minimal technological expertise, and see how they did with it.

This session was between Paul and a mysterious, unnamed collaborator who is both a classically- trained violinist and also a self-described technophobe.

After everything was properly set up, the non-technological violinist had no problem with the workflow, although she had to press the record button well in advance of where she wanted to play in order to give herself time to get ready. Paul felt that it would be great to have the ability to press the record button for the musician, so all they would have to do is listen and play.

Otherwise, the findings were very much the same as the first study. The violinist didn’t like her sound in the headphones, and it was very difficult to align her tracks. Several things were tried to help with this, such as having the violinist count in or tap the top of the instrument for 8 beats before her entrance, but this was still quite inaccurate.

### Case Study 3:

Using the information we had from the first three studies, it was Tom’s job to create a scenario where Pedál would be magically transformed into a multi-user experience using a three program solution.

1. Pedál - Used as the main seat to exchange files and conversations.
2. Listento -Used to broadcast the signal from the DAW.
3. Discord - Used for group conversations. Very flexible

This would allow the group to create the necessary environment to give the multi-user experience of what we presume Pedál with multi-user capabilities would be like. The results were ideal for this particular use case. However the user in the main seat had to ensure they turned off their output in Pedál and use Listento and Discord as the main source of receiving the broadcast and talking on discord.

## Reflections from the case studies

-   Point of Connections
    -   No Processing Flexibilities
    -   No fold-back listening for the producer while musician is recording
    -   Pedál lacks effects
    -   Lack of Plugin format - The flexibility of a transmission and receiving plugin node would allow for easier integration of SMPTE and file sharing.
-   Transmission and receiving points
    -   Lack of transmission to multiple listeners
    -   Multiple participants means multiple licenses
-   Lack of MIDI control or SMPTE integration
    -   Recording artists needing to press record adds an extra step.
    -   SMPTE integration would allow for the recording to be snapped into place in the DAW
-   UI/UX
    -   Very compact, consolidated
        -   Not much room to expand
    -   Simplicity, few labels
        -   Balance between function and simplicity

# How would it function? Experiments with WebRTC

In the experiments with [WebRTC](https://webrtc.org/), our goal was to find out how the WebRTC underpinnings of Pedál possibly could be extended to work for multiple users.

## WebRTC

WebRTC is an web API for streaming multi-media content (text, audio, video). It wraps around multiple standards, protocols and other API’s.

WebRTC works peer-to-peer (P2P). P2P networks require all peers to create independent connections to all other peers. This means that the total amount of data that each peer has to send and receive increase with the size of the network, and many of the streams will be duplicates. Also, the latencies depend on the respective network connections which result in larger synchronization problems.

The most common workaround for larger P2P networks is to have a set of specialized relay servers that has the role of receiving and forwarding data from and to peers. This takes the load of the peers, but in turn centralizes the transmission. It is also costly to maintain these servers as you have to have many of them.

## Development and evaluation of _naive_ multi-user P2P

We developed a functioning P2P video and audio streaming application that handles multiple users. It’s a rudimentary implementation of a WebRTC service that just connects all the people who joins the session. It can be tested by going to [https://handshakers.herokuapp.com/](https://handshakers.herokuapp.com/). The code can be found here: [https://github.com/ulrikah](https://github.com/ulrikah)

The purpose was to learn more about WebRTC, but also to be able to evaluate between us how P2P networks scale with more than two participants. The screenshot that you can see is from an evaluation session we did a couple of weeks ago.

<figure>
    <img src="/assets/image/2020_12_11_ulrikah_peers_demo.jpg" width="60%">
    <figcaption>Screenshot from an evaluation session of our developed multi-user P2P application</figcaption>
</figure>

When there were only two of us connected, the service worked exactly how we hoped it to work. The latency was approximately as good as it is when using Zoom or Discord. When we were three in the session together, it become noticeably more difficult to communicate with each other. When all four were connected, it was practically not possible to maintain a conversation. This evaluation only reinforced the theory that naive P2P networks don’t scale very well.

## Possible system architecture for multi-user in Pedál

By using some of the results from the case studies as well as examining the properties of Pedál a bit more in detail, we sketched out a theoretical suggestion of a possible multi-user system architecture for Pedál. Below is a diagram showing how we envisioned this system architecture.

<figure>
    <img src="/assets/image/2020_12_11_ulrikah_proposed_arch.png" width="60%">
    <figcaption>Possible system architecture for multi-user in Pedál</figcaption>
</figure>

The core idea behind this architecture is that the host controls which participant to collaborate with inside the GUI of the Pedál. Only the collaborator and the host are connected through a P2P connection since this connection is the most critical one in terms of latency.

The host and the musician send two duplex audio streams, one for the actual music and another for talkback. All of these channels are aggregated within the host’s Pedál and sent as one mono stream to the relay server. This stream contains the music and the talkback channels from both the host and the collaborator, and is forwarded from the relay server to the listeners. In return, the listeners send their talkback channels to the relay server. The server aggregates these channels and sends it as one mono stream to the host.

In this way, all the peers are able to hear each other. The P2P connection between host and the musician can be prioritized, and can be of high audio quality.

# How would it look? - Prototype of UI/UX

<figure>
    <img src="https://drive.google.com/uc?&id=1eiSpntx1U_UjdvnpA8iD0LQRV_-24uyV" width="200px">
    <figcaption>Pedál</figcaption>
</figure>

## A new concept for a listener gallery

Consistency with Pedál UI
- Minimalism, essentialism
- Conserve space maintain functionality
Collaborator/listener user state 
- Promotion function by host 
- Follows Ulrik’s work
A collapsible audience 
- Thin, unobtrusive
- Listeners cannot add files or share 
- Can be muted, kicked

As mentioned before, our varied angles were able to inform and benefit each of our tasks. For UI this brought to mind a concept of separating collaborators and listeners, where collaborators are still two users (host and another person) and listeners could be additional guests that have access to the audio streams of the collaborators but cannot share files or record. This attempts to simplify a complex problem, both from a technical perspective and design perspective and builds off of the suggestions and potential optimizations that Ulrik mentioned in his architecture.

## What's new?

- A new “Invite” button appears to add new guests to the session. It switches between feature sets when 2+ users are present and keeps unused elements hidden
- An audience gallery row is filled with listener dots. The luminance of dot as VU meter (speaker volume)
- A new “End” button appears that allows a host to close the session for everyone

## More users, more problems

There was a major difficulty that came along with more users, how would a host go about managing them?. The solution was a modal menu for each user that was activated upon click.

- Host has control of management
- Individually mute, add friend for all listeners
- Only host can kick (don’t be rowdy!)
- Promoting is how listeners can become collaborators, able to share files, send tracks to the host, as usual

This is a basic prototype of bringing this idea into fruition without rearranging the entire UI or making dramatic changes.

# Conclusion

Our research, both in the workflow and the technical implementation and design of Pedál. In our experience and documentation with Pedál, we proposed a number of improvements regarding the design and future mechanics, like native DAW integration, that would make using Pedál a more fluid experience for the end-user.

Moving on to the experiments pursued by Ulrik with WebRTC, we can conclude that while WebRTC is an incredible technology for serverless, low-latency communication across two peers, as the number of the users increase, the technology is unable to cope with the network demand. Pedál will need to answer the questions, “Who needs to hear what? At which quality and at which latency?”, define clear use cases, and finding methods to optimize network capacity thereafter.

As for the UI, Jackson's work suggests a prototype design that accommodates Pedál's design language, but there will still be challenges in unifying this experience across all participants (collaborators and listeners).

Pedál fulfills a sweet spot for many musicians and beat-makers and we're excited to see the company develop.