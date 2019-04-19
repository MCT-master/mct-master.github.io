---
layout: post
title: " The Sound of Traffic"
date: 2019-04-19 17:00:00 +0200
categories: Sonification
author: Ashane Silva, Karolina Jawad, Shreejay Shrestha
image: /assets/img/sonification/blog_header.JPG
excerpt: "Is it possible to transmit complex data-sets within an instance of a sound, so the content gets revealed? As communication and dissemination of information in our modern digital world has been highly dominated by visual aspects it led to the fact that the modality of sound got neglected. In order to test the hypothesis, the project presents a model for sonification of temporal-spatial traffic data, based on principle of Parametric Mapping Sonification (PMSon) technique."
Keywords: Sonification

---

<figure>
<img src="/assets/img/sonification/blog_header.JPG" width = "100%" align="center" />
  <figcaption>The Sound of Traffic</figcaption>
</figure>


# The Sound of Traffic - Sonic Vehicle Pathelormeter

During the sonification Lecture series, we were exposed to the fascinating concepts and theories behind sonification, sound design and their applications. Our primary goal was to explore the techniques that we learned and put them into practice in order to understand a real world problem. After searching and referring so much available data we finally decided to work on traffic vehicle data from 3 regions in England measured over 17 years. Is it possible to transmit complex data-sets within an instance of a sound, so the content gets revealed? As communication and dissemination of information in our modern digital world has been highly dominated by visual aspects it led to the fact that the modality of sound got neglected. In order to test the hypothesis, the project presents a model for sonification of temporal-spatial traffic data, based on principle of Parametric Mapping Sonification (PMSon) technique.

## Data set

<figure>
<img src="/assets/img/sonification/post_region.JPG" width = "80%" align="center" />
  <figcaption>The Sound of Traffic</figcaption>
</figure>


The data includes the Annual average daily flow (AADF) data of buses/coaches, cars/taxies and motorbikes for three regions of England (North East, West Midlands & South East) from 2000-2017. ). The primary data was included number of vehicles but they are segregated into numerous divisions of road types for each region. Shreejay made a matlab script to which reads data of each region of choice at a time and writes them into an excel sheet by calculating the total number of vehicles in the region in each year and exported as CSV files. Then CSV files were converted into JSON files, as they are compact and flexible to use with JavaScript. 

### The sound design

#### Prototype 1

We chose to work with JavaScript to prototype our first idea. The number of buses in each particular region was directly mapped into a frequency of an oscillator by using the “map()” method. Since the numbers not inside a possible frequency range the “map() “method helps to scale the range of the numbers into the range of frequency values. As an example, the range 140235 to 183753 was mapped to the frequency range 200Hz -600Hz.

Sound was generated through oscillators and three oscillator types (‘sine’, ‘saw tooth’, ‘triangle’) define a unique sound that correspond with the data for each region. Additionally, three non-overlapping frequency ranges were chosen in the mapping to further differentiate between the three sounds. Moreover, the “settimeout()” method states the durations of a single frequency that corresponds to a certain year. 




#### Prototype 2 with Python and SuperCollider.

Later the First prototype was further developed with Python and SuperCollider. Several synths were created for each vehicle type.
For ‘Bus Coaches’ vehicle type “sawtooth” wave generator is used with the Saw.ar class methods.Lower frequency range (10-100 Hz) and amplitude range (0.2-10) are mapped to the lower and higher number of the vehicles. The change in frequency and amplitude gives the idea of increase or decrease in number of buses in the selected region.


<figure align="middle">
<audio controls>
<source src="/assets/sounds/Bus_NE.wav" type="audio/wav" volume="0.2">
 Your browser does not support the audio element.
</audio>
<figcaption>Sonification of Buses & Coaches in the North East Region in England</figcaption>
</figure>
  
<figure align="middle">
<audio controls>
<source src="/assets/sounds/Bus_SE.wav" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
<figcaption>Sonification of Buses & Coaches in the South East Region in England</figcaption>
 </figure>

<figure>
<img src="/assets/img/Bus_NE_SE.png" width = "100%" align="center" />
  <figcaption>Buses & Coaches in the North East & South East Region</figcaption>
</figure>

For ‘CarTaxies’, an example from ‘LFPulse’ is taken from the SuperCollider where it is used as both oscillator and LFO. The frequency of modulation with range (0.2-15) and amplitude range (2-10) are mapped to the lower and higher number of the vehicles. The speed of oscillation and change of amplitude signify the rise or fall of the number of  CarTaxies in the particular region.


<figure align="middle">
<audio controls>
<source src="/assets/sounds/Car_NE.wav" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
<figcaption>Sonification of Cars & Taxies in the North East Region in England</figcaption>
</figure>
  
<figure align="middle">
<audio controls>
<source src="/assets/sounds/Car_SE.wav" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
<figcaption>Sonification of Cars & Taxies in the South East Region in England</figcaption>
</figure>

<figure>
<img src="/assets/img/Car_NE_SE.png" width = "100%" align="center" />
  <figcaption>Cars & Taxies in the North East & South East Region</figcaption>
</figure>

For ‘MotorBike’, another example  from ‘Synth’ in SuperCollider is taken from the section filtering under undocumented instance methods. Similar to other synths, the frequency range (30-300) and amplitude range (0.2-10) are mapped to the data with lower and higher range. Likewise the change in frequency and amplitude gives the information of change in number of motorbikes in the selected region.


<figure align="middle">
<audio controls>
<source src="/assets/sounds/Bike_NE.wav" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
<figcaption>Sonification of Motorbikes in the North East Region in England</figcaption>
</figure>
  
<figure align="middle">
<audio controls>
<source src="/assets/sounds/Bike_SE.wav" type="audio/wav" volume="0.2">
  Your browser does not support the audio element.
</audio>
<figcaption>Sonification of Motorbikes in the South East Region in England</figcaption>
</figure>

<figure>
<img src="/assets/img/Bike_NE_SE.png" width = "100%" align="center" />
  <figcaption>Motorbikes in the North East & South East Region</figcaption>
</figure>



### Future Work.

At the moment, model covers sonification of data for individual vehicle for the given period of time. Since running the sonification for the three vehicle types can still masks each other and hide potential patterns of data. So , the sound design can be improved to make the sounds distinct as much as possible.

Similarly, additional features can be introduced to the system such as the ability to select a preferred time period, to select certain transportation methods and regions etc. A data visualization tool can also be introduced to support the sonification model with multiple methods of visualizations to choose from.

Another interesting suggestion appeared to build an API for sonification of traffic data of England, or any country with options for selecting different regions and different vehicles. The API could be extensively used for analysis and or for understanding the growth of traffic in the chosen region via  sonification.


We bet, you would like to listen to the most beautiful sonification of all times. Just 
<a href="https://github.com/shreejayshrestha/MCT4046_Sonification_Project" target="_blank">click here</a> and you will get access to all the files used in this project including the awesome sonifications. Enjoy!








