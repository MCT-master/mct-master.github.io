---
layout: post
title: ""
date: 2022-11-22 10:00:00 +0200
categories: applied-project
author: Joseph Clemente, Hugh Alexander von Arnim, Oliver Getz, Henrik Sveen, Iosif Aragiannis
image: https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_pic3.jpg
keywords: applied project, sequencer, interactive music, Popsenteret
excerpt: ""
---

<figure style="float: none">
   <img src="/assets/image/2022_11_23_josephcl_pic1.jpg" alt="Alternate Text" title="Image Title" width="auto" />
   <figcaption>Music producers, old and new</figcaption>
</figure>

# Introduction

The term “music production” means many different things to different people. For some, it conjures an image of a person talking a band through the process of the album they’re recording. Others might imagine a teenager hunched over a computer working on an electronic track. But what are the commonalities that unite these figures and how can this be present interactively to the public? This is the question we were tasked with answering by [Popsenteret](https://www.popsenteret.no/), the museum for Norwegian popular music. 

# FUZZ

One of the museum’s interactive experiences is the FUZZ exhibit. This presents various musical instruments to visitors, offering an overview of how they function and showcasing how to recreate several sounds. Currently there are four different stations which present the guitar, bass, drum-kit, and synthesiser. 

<figure style="float: none">
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_pic2.jpg"  width="auto" />
   <figcaption>Popsenteret's FUZZ exhibition</figcaption>
</figure>

Our job was to create a fifth station: music production. Since there aren’t instrument commonly associated with music production, we instead explored creative nature of music production.  

# Our Station

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_pic3.jpg"  width="70%" height="70%" />
   <figcaption>Our final solution for the FUZZ music producer station</figcaption>
</figure>

Our station is intended to be a collaborative experience, operated by four visitors simultaneously. Each visitor controls a separate section, and together they produce music. 

## Station Sections

### Sequencer

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_pic4.jpg"  width="70%" height="70%" />
   <figcaption>The station's sequencer section, which uses computer vision to detect if a hole is covered</figcaption>
</figure>

A sequencer allows users to create a musical pattern, typically rhythmic or melodic. While sequencers are usually presented on a computer screen or small electronic device, we decided to go big. 

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_pic5.jpg"  width="auto" />
   <figcaption>Other common sequencers available on the market</figcaption>
</figure>

Each of the rows represents a separate instrument, and each column represents a step in time. The sequencer loops through the steps and plays back a sound if the instrument is active.

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_gif1.gif"  width="auto" />
   <figcaption>The sequencer in action!</figcaption>
</figure>

But the sequencer needs some sounds to play, and this is where the next two stations come into play. 

### Drum Pad

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_pic6.jpg"  width="70%" height="70%" />
   <figcaption>The drum pad section of the station</figcaption>
</figure>

Each drum pad represents a different drum sound, which are played back by the bottom four rows of the sequencer. When a drum pad is hit, its sound changes. A hard hit makes it sound louder and reverberant, a soft hit makes it quiet and clean. 

<figure style="float: none">
  <audio controls>
    <source src="/assets/audio/2022_11_23_josephcl_sound1.wav" type="audio/wav">
  </audio>
  <figcaption>An example of an unprocessed drum sound, played when the drum pad is hit softly</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="/assets/audio/2022_11_23_josephcl_sound2.wav" type="audio/wav">
  </audio>
  <figcaption>An example of a processed and reverberated drum sound, played when the drum pad is hit hard</figcaption>
</figure>

The visitor can also play along to the rhythmic sequence in real time. 

### Deconstructed Guitar

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_pic7.jpg"  width="auto" />
   <figcaption>The deconstructed guitar section of the station</figcaption>
</figure>

The noises from the guitar are sampled played back by the fifth row of the sequencer. We decided to present the guitar slightly differently by deconstructing it into three separate components: the neck, strings, and body. 

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_pic8.jpg"  width="auto" />
   <figcaption>The guitar neck with the drum stick used to scrape along the neck</figcaption>
</figure>

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_pic9.jpg"  width="auto" />
   <figcaption>The guitar strings, which consist of a bass string and electric guitar string, both sharing the same input, on a custom built body</figcaption>
</figure>

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_pic10.jpg"  width="auto" />
   <figcaption>The guitar body with a kick pedal next to it to encourage users to hit it</figcaption>
</figure>

Instead of playing the guitar as normal, the user can interact with these components by scraping along the neck, plucking a string, hitting the body with a kick drum pedal, or any other way that they can imagine! 

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_gif2.gif"  width="35%" height="35%" />
   <figcaption>Interaction with the guitar neck</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="/assets/audio/2022_11_23_josephcl_sound3.wav" type="audio/wav">
  </audio>
  <figcaption>Sound of the guitar neck</figcaption>
</figure>

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_gif3.gif"  width="auto" />
   <figcaption>Interaction with the guitar strings</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2022_11_23_josephcl_sound4.wav" type="audio/wav">
  </audio>
  <figcaption>Sound of the guitar strings</figcaption>
</figure>

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_gif4.gif"  width="35%" height="35%" />
   <figcaption>Interaction with the guitar body</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="/assets/audio/2022_11_23_josephcl_sound5.wav" type="audio/wav">
  </audio>
  <figcaption>Sound of the guitar body</figcaption>
</figure>

### MIDI Keyboard

<figure style="float: none">
   <img src="/assets/image/2022_11_23_josephcl_pic11.jpg"  width="auto" />
   <figcaption>The MIDI keyboard section of the station</figcaption>
</figure>

The visitor at the keyboard section does something a little different. On top of the rhythmic sequencer the station also has a melodic sequencer. This is represented by a row of eight blocks on the screen. 

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_pic12.png"  width="70%" height="70%" />
   <figcaption>The interactive melodic sequence view, which is featured on the station's center touch screen in front of the MIDI keyboard section</figcaption>
</figure>

Each block represents the same step in time as the rhythmic sequencer, and the position of the block determines the pitch of the note in the melody. The keyboard player creates this sequence on the touchscreen. Then then can press a keyboard key and play back the sequence in the specified key. 

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_gif5.gif"  width="auto" />
   <figcaption>Interaction with the MIDI keyboard</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2022_11_23_josephcl_sound6.wav" type="audio/wav">
  </audio>
  <figcaption>Sound of the MIDI keyboard</figcaption>
</figure>

## Genres

Before they start using the station, the visitors pick a genre that they want to recreate. The selected genre determines the sound of the drums and the synthesizer controlled by the two sequencers. It also turns several lights above holes on the rhythmic sequencer red. These holes represent a common rhythmic pattern for the genre. 

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_pic13.png"  width="70%" height="70%" />
   <figcaption>The genre selection screen, which is featured on the station's center touch screen facing the deconstructed guitar section</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2022_11_23_josephcl_sound7.wav" type="audio/wav">
  </audio>
  <figcaption>Sound of the "Pop" genre snare</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2022_11_23_josephcl_sound8.wav" type="audio/wav">
  </audio>
  <figcaption>Sound of the "House" genre snare</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2022_11_23_josephcl_sound9.wav" type="audio/wav">
  </audio>
  <figcaption>Sound of the "Pop" genre synth</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2022_11_23_josephcl_sound10.wav" type="audio/wav">
  </audio>
  <figcaption>Sound of the "House" genre synth</figcaption>
</figure>

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_gif6.gif"  width="auto" />
   <figcaption>An example of the genre sequence being filled in</figcaption>
</figure>

## Effects

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_pic14.png"  width="70%" height="70%" />
   <figcaption>The effects grid view, which is featured on the station's center touch screen facing the drum pad section</figcaption>
</figure>

By moving the Popsenteret logo around the above grid, the visitors can control two effects. The X-axis controls the pitch of the drums, and the Y-axis controls an echo effect. 

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2022_11_23_josephcl_gif7.gif"  width="auto" />
   <figcaption>An example of the effects grid being used</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2022_11_23_josephcl_sound11.wav" type="audio/wav">
  </audio>
  <figcaption>Sound of the effects being used</figcaption>
</figure>

# Video Demonstration

<figure style="float: none">
  <video width="auto" controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/video/2022_11_23_josephcl_video_demo.mp4" type='video/mp4'>
  </video>
</figure>

# Files

If you want to build your own interactive museum exhibit, our design documents and code can be found [here.](tbd)
