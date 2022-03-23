---
layout: post
title: "Latency: To Accept or to Delay Feedback?"
date: 2022-02-21 12:00:00 +0200
categories: portal
author: Arvid Falch, Joseph Clemente, Jakob Høydal, Oliver Getz
image: /assets/image/2022_02_21_josephcl_latency_thumbnail.png
keywords: latency, LOLA, delay, portal
excerpt: "We tested two of the solutions—the Delayed Feedback Approach (DFA) and the Latency Accepting Approach (LAA)—so you don’t have to!"
---

<figure style="float: none">
   <img src="https://drive.google.com/uc?&id=1KtFcmbijV6PaACunG8JMFei29ZKopaEe" alt="Alternate Text" title="Image Title" width="auto" />
</figure>

### **Introduction**

If you’ve ever tried jamming or performing music with your band online, you’ve undoubtedly encountered latency issues. So have we, and while looking for ways to deal with these issues we came across an [academic paper](https://journals.ucp.pt/index.php/jsta/article/view/6956/6689) with a couple of potential solutions. We tested two of the solutions—the Delayed Feedback Approach (DFA) and the Latency Accepting Approach (LAA)—so you don’t have to!

### **Setup and equipment**

In our testing of DFA and LAA, we connected two computers together through [LOLA](https://lola.conts.it/), but you can also use other low latency software like JackTrip. We used the Midas M32 to add latency in _location 1_. The latency was added to the signal going out and the signal coming in, which simulates latency added by distance.

### **Delayed Feedback Approach setup**

The schematics for DFA can be found in _illustration 1_. The concept of this approach is that the _master_ delays its listening to their instrument to compensate for the delay introduced by the system, while the slave plays normally as if there was no latency. The delay added to their own listening (B) should move towards a middle ground between no latency and the actual latency of what the system introduces (A). This approach is typically used for round trip latency times of 25 to 50 ms. For our test, the master was our guitarist and the slave was our drummer.

<figure>
  <img src="/assets/image/2022_02_21_josephcl_Delayed_Feedback_Approach.png" alt="DFA" width = "80%" allign="middle" />
  <figcaption>illustration 1 </figcaption>
</figure>

### **Latency Accepting Approach setup**

The schematics for LAA can be found in _illustration 2_. This is the baseline for telematic communication. It simply means accepting whatever latency the connection causes, and negotiating the latency to achieve some meaningful interplay. For this approach, we tried different amounts of latency ranging from 25 ms to 100 ms to simulate inherent latency. Normally this technique would be used for non-rhythmic musical performances, but for our purposes we attempted to play rhythmically to analyze how this approach holds up under such conditions.

<figure>
  <img src="/assets/image/2022_02_21_josephcl_Latency_Accepting_Approach.png" alt="LAA" width = "80%" allign="middle" />
  <figcaption> illustration 2 </figcaption>
</figure>

### **Measurements**

Measurements were done at roundtrip level. A short 1kHz sine wave was transmitted from location 1 to location 2, where a speaker transmitted the signal into a microphone placed into the speaker’s diaphragm. The signal returned was recorded in a separate timeline in the digital audio workstation [Reaper](https://www.reaper.fm/), which is where the time measurements were done. The inherent system latency was measured to be 19ms roundtrip. The measurements can be seen in _illustration 3_.

<figure>
  <img src="/assets/image/2022_02_21_josephcl_reaper_measurements.png" alt="reaper" width = "80%" allign="middle" />
  <figcaption> illustration 3 </figcaption>
</figure>

### **Testing**

The song we chose to perform was [“Seven Nation Army”](https://www.youtube.com/watch?v=0J2QdDbelmY) by The White Stripes due to its straightforward rhythmic nature, which we hypothesized will accurately tell us if we are playing on beat or not.

The _master_ (guitarist) had to manually add latency to the monitoring of the signal. To do this we used an [Empress Superdelay guitar pedal](https://empresseffects.com/products/superdelay) set to full wet signal (preventing the original non-latency signal to go through), and added latency in a range from 5  ms to 55 ms manually with the pedals potmeter. Adding too much latency resulted in an awkward playing experience, but there was a fine area around 25-35 ms of latency (roundtrip of LOLA signal at this point was 50 ms)  which was acceptable to perform with and made it easier to play in sync with the _slave_ (drummer).  The DFA is definitely a compromise for the _master_, as it does negatively affect the playing experience of the master. However, from the slave’s point of view, he could not feel any of the effects of latency using DFA and was able to play with relative ease. This approach would also not work for an instrument with a loud acoustic output level, as the master needs to only hear their own signal through the delayed monitoring.

The LAA removes the need for delayed monitoring, but showcases the limits of musical interplay when the latencies are too high. Playing in time is impossible and it is more suitable for more ambient music genres with less emphasis on beat, or extremely slow pulses. Instruments suited for the LAA approach would be instruments for example with very slow attack.

For improvements we would suggest a more controlled way of applying monitoring delay in the DFA.

### **What do? (TLDR;)**

So which solution do you choose for an online performance or jam? In our experience, accepting latency is generally not a good idea if the music is rhythmical and reliant on a constant pulse. If you are experiencing relatively high latency issues, introduce some delay to your master’s monitoring of their own signal instead. While it won’t make the problem go away entirely, it makes a world of difference in terms of how comfortable playing over a network feels.

While we relied on an expensive rig to get the job done, there are more available tools out there which can achieve similar results. If you’re looking into low latency solutions for playing music online, check out [JackTrip](https://jacktrip.org/).

### **Sources & Resources**

* [https://journals.ucp.pt/index.php/jsta/article/view/6956/6689](https://journals.ucp.pt/index.php/jsta/article/view/6956/6689)
* [https://ccrma.stanford.edu/software/jacktrip/](https://ccrma.stanford.edu/software/jacktrip/)
