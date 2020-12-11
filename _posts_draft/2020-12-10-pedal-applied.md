---
layout: post
title: "Expanding Collaboration in Pedál"
date: 2020-12-10 12:00:00 +0200
categories: applied-projects
author: Ulrik Halmøy, Paul Koenig, Tom Ignatius, Jackson Goode
image: https://miidbaby.com/pedal.png
excerpt: "For our external partner, Pedál, we wanted to document and expand how multi-user interactions took place.  "
Keywords: VR, Unity, Game-Development, SteamAudio, FMOD, Sound-Design
---
# A Plan for Pedal

<div style="text-align: center;">
    <figure style="display:inline-block; min-width: 40%;">
        <img class="no-shadow" src="/assets/image/2020_12_10_jacksong_pedal_1.png" width="300">
    </figure>
    <figure style="display:inline-block; min-width: 40%">
        <img class="no-shadow" src="/assets/image/2020_12_10_jacksong_pedal_2.png" width="300">
    </figure>
</div>

## What is Pedal?

Pedal is a software that enables musicians to remotely collaborate in real time. Some of its main features are the ability to stream both voice and system audio (from a DAW) between two collaborators. There is also the ability to drag and drop audio and MIDI clips to send from one collaborator to another, as well as a recording functionality to record directly into Pedal. Pedal is minimal and has a design reminiscent of analog guitar pedals. It’s not intended for live rehearsal (like JamKazam, JackTrip, etc), but instead is optimized for collaborative beat-making, songwriting, and recording sessions.

A platform for musicians to collaborate:
- Audio stream from mic & session
- Drag and drop file sharing
- Recording audio and MIDI clips
- Contacts for friends
- Minimal, unobtrusive

## Initial Proposals

From the initial proposals we received from the Pedal team we selected two concepts we wanted to pursue, one to document the workflow of Pedal and suggest improvements, and the other, to draw from this experience and propose a prototype that would allow more than 2 users to collaborate. 

* Research the workflow of Pedál by doing a collaborative project, document the process and suggest improvements for the partner
* Research and describe, and possibly prototype a multi-user (2+) functionality for Pedál

We further refined these proposals after discussing it with the Pedal team and decided to take a three tiered approach, where each layer would provide insights unto the next. Each of us tackled an angle of this project that we each had experience in and met throughout to discuss our findings and developments. Our research question was:

### How can Pedál develop towards a 2+ user functionality from the perspectives of workflow evaluation, user design, and implementation?

The B-team approached Pedál from the viewpoint of researching and identifying areas for
improvement to its functionality, workflow, and user interface. This involved multiple sessions
using the app both with each other and with musicians outside the MCT program. Multi-user
implementation was explored, as well as UI/UX design of the GUI itself. We divided the tasks among us like so:

### Breakdown of work

__Workflow - Iggy, Paul__

Evaluation and improvements through collaborative musical project

__UI/UX Design - Jackson__

Evaluation of current design and development mock faceplate for multi-user interface

__Implementation - Ulrik__

Working with WebRTC to develop and evaluate P2P functionality with multiple users

This translated into three broad questions that we attempted to answer through our solution and will be the order in which we layout this blog as well.

1. How would it work in practice? _(User evaluation)_

1. How would it function? _(Experiments with WebRTC)_

1. How would it look? _(UI/UX prototyping)_

# How would it work? - User evaluation

### Initial Study:

In our initial study of pedal we set out to examine the app as it exists, using a couple of different
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

Using the information we had from the first three studies, it was Tom’s job to create a scenario where Pedal would be magically transformed into a multi-user experience using a three program solution.

1. Pedal - Used as the main seat to exchange files and conversations.
2. Listento -Used to broadcast the signal from the DAW.
3. Discord - Used for group conversations. Very flexible

This would allow the group to create the necessary environment to give the multi-user experience of what we presume Pedal with multi-user capabilities would be like. The results were ideal for this particular use case. However the user in the main seat had to ensure they turned off their output in Pedal and use Listento and Discord as the main source of receiving the broadcast and talking on discord.

## Reflections from the case studies

- Point of Connections
    - No Processing Flexibilities
    - No fold-back listening for the producer while musician is recording
    - Pedál lacks effects
    - Lack of Plugin format - The flexibility of a transmission and receiving plugin node would allow for easier integration of SMPTE and file sharing.
- Transmission and receiving points
    - Lack of transmission to multiple listeners
    - Multiple participants means multiple licenses
- Lack of MIDI control or SMPTE integration
    - Recording artists needing to press record adds an extra step.
    - SMPTE integration would allow for the recording to be snapped into place in the DAW
- UI/UX
    - Very compact, consolidated
        - Not much room to expand
    - Simplicity, few labels
        - Balance between function and simplicity

# How would it function? - Experiments with WebRTC

Ulrik's section here

# How would it look? - Prototype of UI/UX

<figure>
    <img src="/assets/image/2020_12_10_jacksong_pedal_ui.gif" width="200px">
    <figcaption>Pedal</figcaption>
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

* A new “Invite” button appears to add new guests to the session. It switches between feature sets when 2+ users are present and keeps unused elements hidden

* An audience gallery row is filled with listener dots. The luminance of dot as VU meter (speaker volume)

* A new “End” button appears that allows a host to close the session for everyone

## More users, more problems

There was a major difficulty that came along with more users, how would a host go about managing them?. The solution was a modal menu for each user that was activated upon click.
* Host has control of management
* Individually mute, add friend for all listeners
* Only host can kick (don’t be rowdy!)
* Promoting is how listeners can become collaborators, able to share files, send tracks to the host, as usual

This is a basic prototype of bringing this idea into fruition without rearranging the entire UI or making dramatic changes.

# Conclusion

Our research, both in the workflow and the technical implementation and design of Pedal. In our experience and documentation with Pedal, we proposed a number of improvements regarding the design and future mechanics, like native DAW integration, that would make using Pedal a more fluid experience for the end-user.

Moving on to the experiments pursued by Ulrik with WebRTC, we can conclude that while WebRTC is an incredible technology for serverless, low-latency communication across two peers, as the number of the users increase, the technology is unable to cope with the network demand. Pedal will need to answer the questions, “Who needs to hear what? At which quality and at which latency?”, define clear use cases, and finding methods to optimize network capacity thereafter.

As for the UI, Jackson's work suggests a prototype design that accommodates Pedal's design language, but there will still be challenges in unifying this experience across all participants (collaborators and listeners).

Pedal fulfills a sweet spot for many musicians and beat-makers and we're excited to see the company develop.
