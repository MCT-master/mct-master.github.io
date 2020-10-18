---
layout: post
title: "Plunged Into Chaos"
date: 2020-10-18 22:50:01 +0200
categories: interactive-music-systems
author: Paul Koenig
image: /assets/image/2020_10_18_paulgk_plunger.png
keywords: oompa-doompa, plungers, NIME, God, Whitesnake, Plato
excerpt: "Wherein the lowly Oompa-Doompa assumes its ultimate form."
---

## Plunged Into Chaos

Beloved by plumbers, sexual deviants and trombonists, the venerable toilet plunger (or ‘force cup’) was invented in 1874 by a New York confectioner named John Savage Hawley. Hawley was a man of many talents, holding patents for, among other things, an improved type of corn-cob pipe and a method for the manufacture of chocolate cigars.

Whether or not the consumption of too many chocolate cigars is what led to the invention of the force cup is question lost to history, but it’s easy to imagine a rough sort of timeline. As the Greek philosopher Plato was fond of saying, “necessity is the mother of invention”.

Indeed. I already had in my mind a hazy idea for the type of instrument I’d like to invent for MCT4045 (Interactive Music Systems), and rest assured, dear reader, it wasn’t a musical toilet plunger. What I had was a roll of Nichrome resistance wire which I intended to wrap around a dowel of some sort and thereby create a crude sort of variable resistor, which would form the basis for varying the pitch of the instrument. But I had no dowel, so after moping about the house for a bit, I decided I’d better get a move on and make a run to Clas Ohlson for some crafting materials.

It was then that serendipity struck. As I reached into the closet for my jacket, my gaze fell upon the utilitarian form of our lowly toilet plunger, purchased new and hence abandoned, unused, at the back of the closet. Apparently, they put some mighty strong-flushing crappers in SiO housing, because I’d forgotten it was there. Jackpot! Not only was its handle a perfect sort of dowel for wrapping the wire around, I could stick it to the table and use it as a sort of joystick. All I needed was a way to read the x/y axis . . .

Now, the prudes among you may be asking just what sort of antisocial misanthrope must I be to bring an oompa-doompa to a master’s-level university course of a serious nature, but I do think Hawley would approve, and he was a religious man. In his landmark work, the catchily-titled *Job, His Old Friend and His New Friend; also A Study of What the Book of Job Means Spiritually, to All Mankind, by a Plain Man, Who Has about Finished With What is Called Business, and Writes from Experiences, Not Entirely Unlike Those of Job* (Hawley, 1912), the author describes the many labors of the biblical Job, who was forsaken by the almighty God while he was on the toilet. Therefore, the musical device which I have developed could be considered to have a long and religious pedigree, and might very well be used for the playing of devotional music in serious churches and cathedrals.

I myself used it to play Sunshine Of Your Love by Cream, as well as the riff from Slow And Easy by Whitesnake. It’s my religion, ok?

Ok, let us fast forward a bit, and get to how the damn thing works. The components of the system as I imagined it are as follows:

### Physical Interface:

1. A Plunger, Plumber’s Friend, or Oompa-Doompa. An unused one is preferred but hey, it’s your funeral, weirdo.
2. A wire-wrapped homemade variable resistor (see fig. 1)
3. Force sensitive resistor
4. X/Y accelerometer

### Sound Generation:

1. Three simple oscillator engines
2. Bandpass filters
3. Whatever madness lies in your heart

### Mapping:

1. Pitch: variable resistor
2. Volume: force-sensitive resistor
3. Accelerometer: y-axis, bandpass. X-axis, volume of secondary voice

<figure align="middle">
<img src="/assets/image/2020_10_18_paulgk_Homemade_Variable_Resistor.jpg" width="80%"/>
<figcaption><strong>figure 1: Slow And Easy</strong></figcaption>
</figure>

Fig. 1 shows the aforementioned homemade variable resistor. The ‘wiper’ is a brass pinky slide ring made for guitarists. The ‘wiper’ is drawn along the resistance wire’s length, thereby changing the wire’s effective length, and therefore its resistance. Just trust me. Because the overall resistance of my makeshift potentiometer was very low (between 1-50 ohms), I utilized an LM317 voltage regulator circuit to read these values without shorting out the system. Blah blah blah, electrical engineering, blah. I don’t expect you to care but it’s rather quite interesting, really.

Fig. 2 shows the rather quite interesting circuit I used to measure values from the low impedance resistor, for those that do care.

<figure align="middle">
<img src="/assets/image/2020_10_18_paulgk_Measuring_Low_Resistance.png" width="80%"/>
<figcaption><strong>figure 2: Blah Blah Blah, Science</strong></figcaption>
</figure>

Fig. 3 shows the mounting of the volume sensor. It’s a very sensitive little beast, but with practice the player can control onsets, volume swells and tremolo-like effects, at least until it breaks, which it most likely will. To avoid this, I strapped it down with zip-ties with the zeal of a cartoon villain tying a damsel to the railway tracks. Done.

<figure align="middle">
<img src="/assets/image/2020_10_18_paulgk_Mounting_A_FSR.jpeg" width="80%"/>
<figcaption><strong>figure 3: A Little Villany</strong></figcaption>
</figure>

The x/y accelerometer was mounted to the top of the handle. Do you want to see it? Ok, fig. 4.

<figure align="middle">
<img src="/assets/image/2020_10_18_paulgk_Mounting_An_Acceleromenter.jpg" width="80%"/>
<figcaption><strong>figure 1: Just So</strong></figcaption>
</figure>

I ran the wires very neatly down the back of the handle, secured with double-sided tape, and soldered and shrink-tube wrapped my wiring pigtails for a professional look. That is, if a musical plunger can be considered professional. But anyway, have you seen some of the things people bring to the NIME conference? Ridiculous. I rest my case.

And, lastly. How does it sound? Well here’s the video:

And for those that are still interested, my (slightly more serious) slide presentation on the interface:
