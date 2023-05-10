---
layout: post
title: "Generating music with an evolutionary algorithm"
date: 2023-04-26 14:00:00 +0200
categories: machine-learning
author: Noor Othmani
image: /assets/image/2023_04_26_noorfo_MusicEvolution.png
keywords: machine-learning, music-generation, evolutionary-algorithm, supervised-learning
excerpt: "Looking at a theoretical and general implementation of an evolutionary algorithm to generate music."
---


Evolutionary algorithm generating music
In this blog post we will be looking at how a theoritcal implementation of an evolutionary algorithm (EA) to generate music would work.
An evolutionary algorithm is a type of optimization algorithm inspired by biological evolution. It works by repeatedly generating and evaluating candidate solutions to a problem, and then applying genetic operators such as mutation and crossover to create new solutions. The fitness of each candidate solution is evaluated using a fitness function, which determines how well it meets the objectives of the problem. Over time, the algorithm converges towards a set of optimal solutions that meet the objectives of the problem. <br>
The first step is to decide on the data representation method. This could for example be MIDI-data, or raw audio data. <br>
Next up is deciding a fitness function. This is one of the biggest challenges in AI generated music, as knowing what is “good” or “bad” music is very subjective, and it’s hard to define rulesets used to evaluate music resulting from our model. Although none of this is perfect, these are some approaches that can be used to define a fitness function. <br>
<ol>
<li>Harmonic complexity: One approach is to evaluate the harmonic complexity of the generated music. This could involve measuring the number and type of chords used in the music, and rewarding solutions that use a diverse range of harmonies.</li>
<li>Melodic interest: Another approach is to evaluate the melodic interest of the generated music. This could involve measuring the variety of melodic contours, rhythm, and intervals used in the music, and rewarding solutions that are more varied and interesting.</li>
<li>Rhythmic stability: A fitness function could also evaluate the rhythmic stability of the generated music. This could involve measuring the consistency and predictability of the rhythm, and rewarding solutions that have a stable, easy-to-follow rhythm.</li>
<li>motional impact: A fitness function could also evaluate the emotional impact of the generated music. This could involve measuring the emotional response of listeners to the music, and rewarding solutions that evoke a strong emotional response.</li>
</ol>
The fitness function will serve as a judge that can evaluate and score the music. <br>
We also need to define some hyperparameters such as population size and mutation rate. <br>
Then we need to generate the initial population, a set of random solutions that are used as the starting point for the evolutionary algorithm. <br><br>
After having done this we can start the training. First, we’ll apply genetic operators to create new solutions from the existing ones. The two main genetic operators used in evolutionary algorithms are mutation and crossover. Mutation involves making small random changes to a solution, while crossover involves combining two or more solutions to create a new one. In the case of generating music, mutation might involve changing a few notes in a melody or rhythm, while crossover might involve combining the melody from one solution with the chords from another. <br>
Then the model will evaluate the fitness for each generation’s solutions, using the selected fitness function. <br>
Finally, the model selects parents through a choice of selection techniques, such as fitness proportionate selection, tournament selection, or rank-based selection. It's important to choose an appropriate selection technique, as they vary in how much they will explore or exploit the results. The parents are then used to generate new children with our genetic operators. This whole process is then repeated until the model reaches a certain fitness threshold or enough time has passed, and we have our result.
