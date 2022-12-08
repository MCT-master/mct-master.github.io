---
layout: post
title: "Cellular Automata - Implementation in Pure Data"
date: 2022-12-08 12:00:00 +0200
categories: audio-programming
author: Kristian Eicke
image: /assets/image/2022_12_07_kristeic_blinker.gif
keywords: pure data, programming
excerpt: "Check out the concept of Cellular Automata and my implementation in Pure Data."

---
> “If you couldn’t predict what it did, then probably that’s because it was capable of doing anything.” 
<br> -- John Conway on his 2-D grid Cellular Automaton called "The Game of Life"

<img align="right" width="100" height="100" src="/assets/image/2022_12_07_kristeic_Figureeight.gif"> 


Years ago I stumbled upon an idea in mathematics which caught my attention: Cellular Automata - simple,
easy to understand systems which are observed to produce complex behavior. I researched on it, had some 
fun with its gamy applications on the web but soon put it in the category ‘filed for memory’. The day came, and
 while I was programming my synthesizer for the course in Pure Data, I remembered. Could this be applied in PD? 
 At the end of this blog you can see my Pure data patch in action. 
 But wait, what are Cellular Automata 
 (CA)?

## Cellular Automata Explained
[Stanisław Ulam](https://de.wikipedia.org/wiki/Stanisław_Marcin_Ulam) and [John Von Neumann](https://de.wikipedia.org/wiki/John_von_Neumann) conceived the idea. In an effort to formulate a theoretical model to describe [self-replicating robots](https://fab.cba.mit.edu/classes/865.18/replication/Sipper.pdf)(!!!), von Neumann looked for a concept that would work. The  model wasn't complete until his colleague Ulam suggested using a cell-based approach - Cellular Automata were born. I'll go over the fundamentals with you in the following.

Consider the idea of a theoretical robot that is a collection of cells on an n-dimensional grid. 
Each cell can be in a finite number of states and has a specific number of neighbours. 
The state of a cell is determined by the state of its neighbours. If we apply discrete-time steps 
(like generations) each cell state will change in relation to its neighbour states. 

Let’s try to imagine the simplest form of a Cellular Automaton. 

A one-dimensional grid with cells 

||||||||

a cell can either be dead (1) or alive (0) 

|1|0|0|1|1|0|1|

each cell’s state depends on its two neighboring cells

<figure style="float: none">
   <img
      src="/assets/image/2022_12_07_kristeic_neighbours.jpg"
      style="max-height:400px; width:auto;" />
   <figcaption></figcaption>
</figure>


Let’s summarize: a CA in its simplest form is a one-dimensional grid of cells that evolves over time.
Each cell has a state, 0 or 1, dead or alive, and a neighborhood consisting of two other cells. 
[Stephen Wolfram](https://de.wikipedia.org/wiki/Stephen_Wolfram) initially described this most simplest of CA’s in his gigantic groundbreaking book [‘A New Kind of Science’](https://www.wolframscience.com/nks/) ,which you can access online for free if you dare. 

But, depending on the neighbour cells, how do we decide a cell’s state? If we look closely, we see that three cells represent a 3-digit number in binary, so 2³ = 8 possible combinations.

<figure style="float: none">
   <img
      src="/assets/image/2022_12_07_kristeic_binary_combinations.jpg"
      style="max-height:400px; width:auto;" />
   <figcaption></figcaption>
</figure>

Now, we need to define a ruleset to determine the middle cell’s state for the next generation. 
We use each combination from above once and determine an 8-bit number. 
<figure style="float: none">
   <img
      src="/assets/image/2022_12_07_kristeic_ElementaryCA30Rules.jpg"
      style="max-height:600px; width:auto;" />
   <figcaption></figcaption>
</figure>

Turns out there are 256 combinations - 2⁸ – and Stephen Wolfram systematized them by their corresponding binary number.

<figure style="float: none">
   <img
      src="/assets/image/2022_12_07_kristeic_ElementaryCARules.jpg"
      style="max-height:600px; width:auto;" />
   <figcaption>Excerpt of the Wolfram Code numbering system</figcaption>
</figure>

If we now add time to the equation and iterate over the grid and change each cell's state with a new generation we get this. The starting condition is a single cell with a 1 - a seed.

<figure>
   <img
      src="/assets/image/2022_12_07_kristeic_rule90_evolving.gif"
      style="max-height:400px; width:auto;" />
   <figcaption>20 generation of Rule 90 in one row</figcaption>
</figure>


We could also add a new row for each new generation and we get the following for rule 90.

<figure>
   <img
      src="/assets/image/2022_12_07_kristeic_rule90.gif"
      style="max-height:400px; width:auto;" />
   <figcaption>40 generations of Rule 90 </figcaption>
</figure>

The grid evolves a pattern over time! It is an example of a set of simple rules that can produce 
complex behavior and I think the idea is beautiful.

<figure>
   <img
      src="/assets/image/2022_12_07_kristeic_Elementary.jpg"
      style="max-height:600px; width:auto;" />
   <figcaption>Excerpt of Wolfram's code over 16 generations</figcaption>
</figure>
 
## Conway’s game of life
<img align="right" width="100" height="100" src="/assets/image/2022_12_07_kristeic_glider.gif"> 

I want to introduce an implementation – certainly the most famous one- of the idea on a 2 -dimensional grid – the Game of Life ([listen to](https://www.youtube.com/watch?v=R9Plq-D1gEk) John Conway's retrospective on his creation.)
It is fun watching it evolve over time, and most importantly,  it is [Turing complete](https://en.wikipedia.org/wikiConway%27s_Game_of_Life) which allows it to do [this](https://www.youtube.com/watch?v=xP5-iIeKXE8). With a balanced but simple set of rules it is capable of universal computation! 

The following table shows Stephen Wolfram's behaviour classification for the elementary rule sets according to their outcome over time. The same classification can be applied to 2-D Cellular Automata. 

|| Class1 : Stable | Class 2: Repetitive or Stable | Class 3: Random | Class 4: Complex |
| :-------------: | :----------------------------:| :-------------: | :--------------: |
| 1 D | Rule 222 ![](/assets/image/2022_12_07_kristeic_rule222.jpg) | Rule 90 ![](/assets/image/2022_12_07_kristeic_rule90.jpg)| Rule 30 ![](/assets/image/2022_12_07_kristeic_rule30.jpg)| Rule 110 ![](/assets/image/2022_12_07_kristeic_rule110.jpg)|
| 2 D | Aircraft Carrier ![](/assets/image/2022_12_07_kristeic_aircraftcarrier.png) | Gosper Glidergun![](/assets/image/2022_12_07_kristeic_Gosperglidergun.gif)|| Switch Engine (initial state)![](/assets/image/2022_12_07_kristeic_Switchengine.png)|


The concept of Cellular Automata has extensive usecases, for example in pattern recognition, 
theoretical modelling, encoding (Rule 30 as a pseudorandom number generator) or – Music.


Cellular Automata represent a type of computational thinking I can really relate to.
My Pure Data patch is a prototype for a final module I like to use for composition. It can only produce rule 90 at the moment, which is a Class 2 CA so it's repetitive, and consists of 16 cells, but I aim at making it generic depending on input and give it more cells. Anyway, the current state is great for defining rhythmic patterns or melody lines without having too much randomness in there. And it blinks quite nice. Give it a listen down below.


<figure>
   <img
      src="/assets/image/2022_12_07_kristeic_CA_module.gif"
      style="max-height:600px; width:auto;" />
   <figcaption>My CA module alone in the wild</figcaption>
</figure>

CA module and parts of other patches play together. 
<figure style="float: none">
  <video width="auto" controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/video/2022_12_07_kristeic_presentation.mp4" type='video/mp4'>
  </video>
</figure>


## References
[https://mathworld.wolfram.com/CellularAutomaton.html](https://mathworld.wolfram.com/CellularAutomaton.html)

[Game of Life online](https://playgameoflife.com)