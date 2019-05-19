---
layout: post
title: "The Sound of Traffic - Sonic Vehicle Pathelormeter"
date: 2019-04-19 17:00:00 +0200
categories: Sonification
author: Ashane Silva, Karolina Jawad, Shreejay Shrestha
image: /assets/img/sonification/blog_header.JPG
excerpt: "Is it possible to transmit complex data-sets within an instance of a sound, so the content gets revealed? As communication and dissemination of information in our modern digital world has been highly dominated by visual aspects it led to the fact that the modality of sound got neglected. In order to test the hypothesis, the project presents a model for sonification of temporal-spatial traffic data, based on principle of Parametric Mapping Sonification (PMSon) technique."
Keywords: Sonification

---

<figure>
<img src="/assets/img/sonification/blog_header.JPG" width = "100%" align="center" />
  <figcaption>Figure1: The Sound of Traffic</figcaption>
</figure>

During the sonification Lecture series, we were exposed to fascinating concepts and theories behind sonification, sound design and their applications. Our primary goal was to explore the techniques that we learned and put them into practice in order to understand a real world problem. After searching and referring so much available data we finally decided to work on traffic vehicle data from 3 regions in England measured over 17 years. Is it possible to transmit complex data-sets within an instance of a sound, so the content gets revealed? As communication and dissemination of information in our modern digital world has been highly dominated by visual aspects it led to the fact that the modality of sound got neglected. In order to test the hypothesis, the project presents two prototypes for the sonification of temporal-spatial traffic data. 

As stated earlier, we had been introduced with various facets of sonification from atristic and or qualitative approach like Øyvind Brandtsegg's <a href="https://www.ntnu.no/flyndresang" target="_blank">**Flyndre Project**</a> or Daniel Formo's <a href="https://orchestraofspeech.com/results/software-instrument-system/" target="_blank">**Orchestra of Speech**</a> to a combination of both artistic and quantitative approach like <a href="https://sonification.de/handbook/chapters/chapter15/#S15.3" target="_blank">**sound example by T. Hermann, A. Hunt and J.G. Neuhoff**</a> taken from https://sonification.de/handbook/chapters/chapter15/#S15.3 and so on. Our idea was quite similar to the latter approach. Hence, we decided to go for **Parametric Mapping Sonification (PMSon)** technique. Besides, the nature of our data was also suitable for this kind of analysis through PMSon.

## Data set

<figure>
<img src="/assets/img/sonification/map_region.JPG" width = "90%" align="center" />
  <figcaption>Figure 2: Method for Selecting Data</figcaption>
</figure>

The data has been collected from <a href="https://www.dft.gov.uk/traffic-counts/download" target="_blank">**The Department of Transport, U.K.**</a> It includes **Annual Average daily Flow (AADF)** of buses/coaches, cars/taxies and motorbikes for three regions of England from 2000 to 2017. The three regions include the North East, the West Midlands & the South East which have been chosen based upon their population as shown in Figure 2. The primary data includes number of vehicles but they are segregated into numerous divisions of road types for each region. Shreejay made a <a href="https://github.com/shreejayshrestha/MCT4046_Sonification_Project/blob/master/matlab%20script/read_data.m">matlab script</a> to refine the data as per our requirement. The script reads the raw data of each region of choice at a time and writes them into an excel sheet by calculating the total number of vehicles in the region in each year and exports them as in CSV file format. 

## Sonification & Sound design

### Prototype 1 with Javascript and P5.js

<figure align="middle">
<audio controls>
<source src="/assets/sounds/prototype1.wav" type="audio/wav" volume="0.2">
 Your browser does not support the audio element.
</audio>
<figcaption>Audio 1: Prototype-1, Sonification of Buses & Coaches in the three regions</figcaption>
</figure>

We chose to work with JavaScript to create our first prototype. The number of buses in each particular region was directly mapped into a frequency of an oscillator by using the “map()” method in P5.js. Figure 3 below gives an overview of the mapping method. 

<figure>
<img src="/assets/img/cj/mapping_prototype_1.JPG" width = "100%" align="center" />
<figcaption>Figure 3: Mapping method in Prototype 1</figcaption>
</figure>

Sound was generated through three unique oscillators that correspond with the data for each region. Additionally, three non-overlapping frequency ranges were chosen in the mapping to further differentiate between the three sounds. Moreover, the “settimeout()” method states the durations of a single frequency that corresponds to a certain year. 

#### Code Snippet
The following code snippet shows how the three oscilators are defined and highlights the mapping method and settimeout() method applied in the prototype 1. 

```javascript
function preload(){
  loadJSON("Buses.json", dataReady1);
}

function dataReady1(data1){
  osc1 = new p5.Oscillator();
  osc2 = new p5.Oscillator();
  osc3 = new p5.Oscillator();
  
  osc1.setType('sine');
  osc1.freq(0);
  osc1.amp(0.4);
  osc1.start();

  osc2.setType('triangle');
  osc2.freq(0);
  osc2.amp(0.5);
  osc2.start();

  osc3.setType('sawtooth');
  osc3.freq(0);
  osc3.amp(0.2);
  osc3.start();

  figures1 = data1.figures;
  for (var i = 0; i < figures1.length; i++) {
    append(arrayBus, [figures1[i].AADF,figures1[i].NE,figures1[i].SE,figures1[i].WM]);
};

  // for three cities 
  for (var i = 0; i < arrayBus.length;  i++) {
  setTimeout(function(y) {
    
    freq1 = map(arrayBus[y][1],140235, 183753, 200, 600);
    freq2 = map(arrayBus[y][2],227700, 377048, 700, 1000);
    freq3 = map(arrayBus[y][3],328924, 490877, 1100, 2000);

    //console.log(freq);
    
    osc1.freq(freq1);
    osc2.freq(freq2);
    osc3.freq(freq3);
    
    }, i * 500, i);
     // we're passing i  
    };
  }
  ```
### Prototype 2 with Python and SuperCollider.

The first prototype was further developed with Python and SuperCollider. It is inspired by **Thomas Hermann's** lecture on topics of Sonification and hands on exercise on **Parameter Mapping Sonification** during a series of talks in the MCT4046 Sonification and Sound Design course in this spring semester. The python code for this prototype is based upon two examples; Example-1: the code of the hands on exercise provided by Thomas and <a href="https://github.com/thomas-hermann/sc3nb/blob/master/examples/sc3nb-examples.ipynb">Example-2:</a> the code shared by Thomas through his github repository. The code for the prototype has been further developed to adapt a different structre of data, create different synth definitions and apply different forms of mapping by exploring various example of synths in Supercollider. For instance, Example-1 and Example-2 have used synth definitions like SinOsc.ar, DynKlank.ar, Dust.ar etc while prototype 2 applies Saw.ar, LFPulse.ar and RLPF.ar along with combination of SinOsc.ar and so on. 

Figure 4 below highlights the mapping of different parameters for the prototype 2. For buses, the change in frequency and amplitude gives the idea of increase or decrease in number of buses in the selected region. Likewise, the speed of oscillation and change of amplitude signify the rise or fall of number of car/taxies in the region of choice. Similarly, for the motorbikes, the change in frequency and amplitude gives the information of change in number of motorbikes in the selected region.

<figure>
<img src="/assets/img/cj/mapping_prototype_2.JPG" width = "100%" align="center" />
 <figcaption>Figure 4: Mapping method in Prototype 2</figcaption>
</figure>

#### Code Snippet

```python
import pandas as pd from matplotlib import pyplot as plt
```

```python
d = pd.read_csv("Data_WM.csv")
```

```python
import time, random, os
import sc3nb as scn
```


```python
sc = scn.startup()  # optionally use argument sclangpath="/path/to/your/sclang"
```

```python
%%sc 
SynthDef ("bus", {arg out=0, freqb= 50, mul=0.7, ampb = 0.2;
    var f;
    f = Saw.ar(freqb,mul,0);
    Out.ar(out,f*ampb);
}).add;
```
The code snippet above imports various python modules in the jupyter notebook, required to make the sonification. Besides, it reads the data, boots supercollider using the sc3nb module and creates synth definition for buses and coaches usiing the Saw.ar synth in supercollider.

The code snippet below sets TimedQueue function, which is required for creating sonifications with precise timing. Synths are then initiated with a delay of 0.2 seconds and praparation are made for recording. Similarly, with iteration of the data, the algorithm maps the minimum and maximum number of the data to certain specified range of frequency and amplitude of the corresponding synth as explained in Figure 4. Finally the sonification of each set of vehicle for each region is generated one at a time in wav file format.

```python
queue = scn.TimedQueue()
```
```python
t0 = time.time()
delay = 0.2

# instantiate synths
#queue.put(t0+delay, sc.msg, ("/s_new", ["bus", 1234, 1, 1]))
#queue.put(t0+delay, sc.msg, ("/s_new", ["car", 1235, 1, 1]))
queue.put(t0+delay, sc.msg, ("/s_new", ["motorbike", 1236, 1, 1]))

sc.prepare_for_record(0, "my_recording.wav", 99, 2, "wav", "int16")  # buffer 99 will be used
sc.record(t0+0.1, 2001)  # recording starts in 200 ms
#sc.bundle(0.2, "/s_new", ["car", 1234, 1, 1]) 
sc.stop_recording(t0+10) # and stops in 1 seconds

# modulate with data while playing through time
for i in range (len(d)):
    onset = scn.linlin(i, 0, 18, 0, 9)
    #b_freq= scn.linlin((d.iloc[i][4]), min(d.BusCoaches),max(d.BusCoaches), 10, 100)
    #print(b_freq)
    #b_amp = scn.linlin((d.iloc[i][4]), min(d.BusCoaches),max(d.BusCoaches), 0.2, 10)
    #print(b_amp)
    #c_freq= scn.linlin((d.iloc[i][3]), min(d.CarTaxies),max(d.CarTaxies), 0.2,15)
    #c_amp= scn.linlin((d.iloc[i][3]), min(d.CarTaxies),max(d.CarTaxies), 0.2,10)
    m_freq = scn.linlin((d.iloc[i][2]), min(d.MotorCycle),max(d.MotorCycle), 30,300)
    m_amp = scn.linlin((d.iloc[i][2]), min(d.MotorCycle),max(d.MotorCycle), 0.2,10)
    #queue.put(t0 + delay + onset, sc.msg, ("/n_set",
        #[1234,'freqb', b_freq,'ampb',b_amp]))
    #queue.put(t0 + delay + onset, sc.msg, ("/n_set", 
     #   [1235, 'freqc', c_freq,'ampc',c_amp]))    
    queue.put(t0 + delay + onset, sc.msg, ("/n_set", 
        [1236, 'freqm',m_freq,'ampm', m_amp]))
        
  
# shut down synth when finished
#queue.put(t0 + delay + onset, sc.msg, ("/n_free", 1234))
#queue.put(t0 + delay + onset, sc.msg, ("/n_free", 1235))
queue.put(t0 + delay + onset, sc.msg, ("/n_free", 1236))
```
<figure align="middle">
<audio controls>
<source src="/assets/sounds/Bus_NE.wav" type="audio/wav" volume="0.2">
 Your browser does not support the audio element.
</audio>
<figcaption>Audio2: Prototype-2, Sonification of Buses & Coaches in the North East Region in England</figcaption>
</figure>
  
<figure align="middle">
<audio controls>
<source src="/assets/sounds/Bus_SE.wav" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
<figcaption>Audio3: Prototype-2, Sonification of Buses & Coaches in the South East Region in England</figcaption>
 </figure>

<figure>
<img src="/assets/img/Bus_NE_SE.png" width = "75%" align="center" />
  <figcaption>Figure 5: Prototype-2, Buses & Coaches in the North East & South East Region</figcaption>
</figure>

<figure align="middle">
<audio controls>
<source src="/assets/sounds/Car_NE.wav" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
<figcaption>Audio 4: Prototype-2, Sonification of Cars & Taxies in the North East Region in England</figcaption>
</figure>
  
<figure align="middle">
<audio controls>
<source src="/assets/sounds/Car_SE.wav" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
<figcaption>Audio 5, Prototype-2, Sonification of Cars & Taxies in the South East Region in England</figcaption>
</figure>

<figure>
<img src="/assets/img/Car_NE_SE.png" width = "75%" align="center" />
  <figcaption>Figure 6: Prototype-2, Cars & Taxies in the North East & South East Region</figcaption>
</figure>

<figure align="middle">
<audio controls>
<source src="/assets/sounds/Bike_NE.wav" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
<figcaption>Audio 6: Prototype-2, Sonification of Motorbikes in the North East Region in England</figcaption>
</figure>
  
<figure align="middle">
<audio controls>
<source src="/assets/sounds/Bike_SE.wav" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
<figcaption>Audio 7: Prototype-2, Sonification of Motorbikes in the South East Region in England</figcaption>
</figure>

<figure>
<img src="/assets/img/Bike_NE_SE.png" width = "75%" align="center" />
  <figcaption>Figure 7: Prototype-2, Motorbikes in the North East & South East Region</figcaption>
</figure>

## Future Work.

At the moment, the model covers sonification of data for individual vehicle for the given period of time. Since running the sonification for the three vehicle types can still masks each other and hide potential patterns of data. So, the sound design can be improved to make the sounds distinct as much as possible.

Similarly, additional features can be introduced to the system such as the ability to select a preferred time period, to select certain transportation methods and regions etc. A data visualization tool can also be introduced to support the sonification model with multiple methods of visualizations to choose from.

Another interesting suggestion appeared to build an API for sonification of traffic data of England, or any country with options for selecting different regions and different vehicles. The API could be extensively used for analysis and or for understanding the growth of traffic in the chosen region via  sonification.

We bet, you would like to listen to the most beautiful sonification of all times. Just follow the
<a href="https://github.com/shreejayshrestha/MCT4046_Sonification_Project" target="_blank">**github repository**</a> and you will get access to all the scripts, data files and all the sounds created in this project.

## Acknowledgement
We are very grateful to Anna Xambo, our teacher for the MCT4046 Sonification and Sound Design course for exposing us to many experts and professionals working in the areas of sonification and sound design through this course. We would also like to thank her for guiding us in dveloping prototype 1. Similarly, we would like to extend our heartfelt gratitude to Thomas Hermann for sharing his plethora of knowledge on sonification and also for providing us with his slides and python script which helped us practice, learn and expand our knowledge on sonification. Likeise, we would also like to credit Thomas for allowing us to borrow his code and own it while developing it in the project as prototype 2.

# Thank you.






