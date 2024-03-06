---
layout: post
title: "Satellite Sessions - Connecting DAWs"
date: 2021-11-03 14:28:00 +0200
categories: networked-music
author: Jakob Høydal, Kristian Wentzel
image: /assets/image/2021_11_03_jakobhoy_SatelliteSessionsSmallImage.png
excerpt: "A review of Satellite Sessions, a plugin that connects digital audio workstations and creators."

keywords: Music Production, Logic Pro, Ableton Live, Communication, collaboration, MIDI, Audiofiles, audiomovers, Digital Audio Workstation, Satellite Sessions, Mixed in Key, Mixedinkey, Yuri Gagarin,

---


<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2021_11_03_jakobhoy_satellitesessions_header.jpg" alt="Yuri Gagarin was the first man in space (Sattelite Sessions)" width="100%" align="middle"/>
</figure>

```
  { What?
A plug-in that lets you collaborate over different
digital audio workstations. It works as a Google
Drive, or dropbox companion that skips importing
and exporting audio from your DAW.
}

  { Support?
Official support for Ableton Live 10/11,
Logic Pro, FL Studio, Cubase, Studio One,
Reason, Reaper, Bitwig, Digital Performer,
GarageBand and Pro Tools.
}

  { Price?
As of now, Free! They may release a pro
version in addition to the free version.
}
```



<br>

# What is Satellite Sessions?
[Satellite Sessions](https://mixedinkey.com/satellite/) plugin-bundle by [Mixed In Key](https://mixedinkey.com/) is a free collaboration tool used between digital audio workstations. It works similarly to dropbox and other file-sharing platforms, but specialises it’s workflow to a DAW. Satellite Sessions opens as a plugin in your DAW, where you can share audio and MIDI files with other collaborators. You can easily set project attributes, to make sure you work in the same key and tempo so there will be no conflicts when working with the same project. We chose this as our tool for asynchronous music collaboration as we thought this could have real practical value. You won’t need to learn a new DAW in a browser or app, as you can stick to your own preferred DAW and workflow in music-making.

The plugin-bundle comes in three parts; Satellite Session, Satellite Audio and Satellite MIDI. Satellite Session works as the portal to transfer and receive files, added to an empty MIDI track. Satellite Audio and MIDI lets you transfer your audio or MIDI files respectively into your Satellite Session. Satellite Audio can either be added to an audio or MIDI track, to send audio files. Insert the plugin first in the insert chain to just send the dry signal, or place it later to capture any plugin up to the point that Satellite Audio is located. Satellite MIDI can be added to MIDI tracks to share MIDI files. When adding these plugins to your tracks, new tracks will automatically appear in your Satellite session. The plugin can also preview shared MIDI files by pressing the keyboard icon. This is a nifty feature for quick pre-listening before importing MIDI to your DAW and choosing a softsynth for MIDI playback. You arm the ‘upload cloud’  in the plugin of the tracks you want to share, press play in your DAW, and the Satellite Session will record and upload the armed tracks. The timeline and bars in the Satellite Session correspond to that of the DAW. Uploaded tracks will instantly show up in the other collaborators corresponding Satellite Session.


<br>
<figure>
  <img src="/assets/image/2021_11_03_jakobhoy_SatelliteSessionsHeader.jpg" alt="Yuri Gagarin was the first man in space (Sattelite Sessions)" width="100%" align="middle"/>

<figcaption align="center"><i>Satellite Sessions </i>plugin window</figcaption>

</figure>
<br>
<br>




To invite a collaborator to your Satellite Session, just add their email in the ‘Invite’ menu and they will get an email with a Session Invitation Code. You can easily sign up and log in with your Google account or preferred email. You can also choose to make your session public, and anyone with your Invite ID can view the project. With ‘Chaos Mode’ enabled, everyone can also contribute with Audio/MIDI tracks.

Installation is quite simple. As mentioned previously; it works just like any other plugin. On Mac/OS X you will need to be running 10.13.0 or higher. On Windows you need Win8 or higher. It’s compatible with most modern DAW’s that support plugins and timeline workflow.


<br>
<br>
# In practical use
To collaborate with Satellite Session is a breeze compared to sharing files over Dropbox or Google Drive. Since both participants already are synced to the same time-measure, tempo and key, the sharing of tracks straight to the timeline could not be easier. The plugin already has a built in file-system that follows the DAW’s session. This makes it effortless to import audio to and from Satellite. But if you want to extract the tracks as audio files to your hard-drive, you have to import and bounce them through your DAW first. It would have been nice to have a root folder visible in the plugin, which makes it easier to extract without bouncing.

We tried out the software by creating a song together, in which Jacob was using Logic Pro X and Kristian was using Ableton Live 11 Suite. This worked surprisingly smoothly, and we uploaded both recorded instruments and MIDI-instruments as well as FX busses. The upload of the collaborators files seemed to happen instantaneously, with the quality set to ‘Ultimate’. What the difference between ‘Ultimate’ and ‘Fastest’ in Satellite Sessions actually means, and if it compresses the audio somehow, still remains a mystery to us. We found no documentation or mention of this topic on their website, but audio uploaded appeared as .wav-files with bit depth and sample rate similar to the project settings when imported into our collaborators DAW.

As an experiment, we also tried to join our Satellite session through BeSpoke, a new modular DAW freed from the traditional timeline layout. This was not a great success, as BeSpoke would fast-forward the Satellite plugins timeline by a ratio of about 100 bars per one beat. We managed to extract tracks from Satellite to a “sampleplayer” module in BeSpoke for playback, though.

<br>
<br>
<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2021_11_03_jakobhoy_abletonlivesession.png" alt="Yuri Gagarin was the first man in space (Sattelite Sessions)" width="100%" align="middle"/>
<figcaption align="center">Can you spot Yuri?</figcaption>
</figure>
<br>
<br>
<p style="text-align: center;">
  <audio title="Segment 1" controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2021_11_03_jakobhoy_yurissnippet.mp3" type="audio/mpeg">

  </audio>
</p>  
<center>The result: "Yuris Satellite", a tribute to Yuri Gagarin.</center>

<br>
<br>








One of the few downsides we found was the email notification system, which seems not to be responding very rapidly. Kristian got an email at 19:29 saying Jakob had made three updates, with a “screenshot” of a generic session. This was actually 3 updates made at 13:23 when we tested the plugin together at MCT. This could lead to minor confusion, but is no big deal if you’re aware of it.
Another minor issue would happen when you upload tracks with Audio/MIDI Satellite plugins to your session, but forget to save the project locally in your DAW. Those tracks in the Satellite can not be re-assigned to your local tracks anymore, even if you give tracks similar names in a new project. No biggie, but you’ll lose the flexibility to replace/update the content of those specific tracks, which you’re able to do when opening a saved project with your Satellite session.

In addition to sharing individual tracks, there is nothing stopping you from adding Satellite Audio plugins to buses (drum bus, reverb bus, etc.) or even the master track as well. This makes the plugin really flexible, and it’s easy to share stems from your projects. When mixing the song, we used a reverb from Jakobs plugins and a delay from Kristian.

Automatic naming of tracks added to Satellite Session, a live audio feed between the DAW’s, as well as a proper file-system with dedicated folders for each session would have been nice to see added. When mixing, or talking about details in the song over video calls, we missed having a live audio feed like [audiomovers](https://audiomovers.com/) built into the software. The files could not be transferred without bouncing the audio as well. A professional always wants to know where the files are located, so they can be sure everything works when reopening the session on a different computer.

All in all this is a great tool for audio file sharing on-the-go. It skips the tedious process of   bouncing stems, uploading to a file-sharer, downloading the files on your companions computer and importing them to your DAW. This enhances the creative process, and gives more freedom to its users.

<br>

If you want to listen to the full song, you can download it [here](https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2021_11_03_jakobhoy_yurifull.mp3).
