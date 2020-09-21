---
layout: post
title: "Postcard from The Valley of Despair"
date: 2020-09-21 21:41:01 +0100
categories: machine-learning
author: Gaute Wardenær
image: https://images.app.goo.gl/NjPaMWQomtvkq9rr6
keywords: machine, learning, ritalin, frustration
excerpt: "Intuition tells me that a larger network should be better. More is more, as Yngwie says, but that is definitely not the case."
---

## 10th of September

When starting this course i decided on giving it my best, following 100% and trying to learn as much as possible. I knew that it would be hard, but I also knew that I would be very satisfied when completing it and handing in something i was proud of. 

Since the first step after having decided on what to do in my project is to gather a dataset, I did this. I also have to cut the dataset into 

## 11th of september

I have finally gotten an algorithm to run on my own dataset! 
I have hesitated quite a bit to actually go ahead and try because I wanted to understand EVERY aspect of the code before I do so. Not that I understand nearly every aspect of it, but I feel a bit more confident now. 

I really wish that I had more knowledge of Python before starting this, right now I feel like I am trying to write map directions or a cookbook in German (I don't speak German).

The algorithm that I fanally got tu run was the one from "Workshop 2a". 
The first time around I got the astounding result of 29% accuracy! Meaning that it is just slightly better than random guessing... 

What should I do to improve this? 

Allright! 

It's getting pretty late here and I have had a few beers, but things are starting to look better! 

I managed to get the "workshop 4a" -patch to work after just a few modifications. I don'† know why, but I get this weird error when trying to write to anything other than a .CSV file (like in "workshop3b").

`ValueError: could not broadcast input array from shape (13545) into shape (1)`

It obviously has something to do with the formatting of the array that i am storing to, but I cannot manage to figure out what it is. 
	

One very strange observation is what the "random starte" value does to the result of the algorithm. I changed it from the initial 50 -something to 3, then the accuracy dropped from 50% to arround 30% after that, I started with 200 and it raised up to over 60%. How could the seed for a random number have so much to say for the outcome of this?!?


## 12th of September

I wondered if why I got such bad results from my algorithm was because I had been sloppy with processing of my training data. So today I took the time to go through every single file, cutting them to the same length and normalize them all. Now, inconcistensies in the samples should not be a problem. Still I have very bad results! This is getting ridiculous. 

I now feel very stuck on this.
Mostly because my knowledge of Python is so limited that I don't have the ability to see where the mistake is made in the first place. What to do now? Learn Python! Where to start? I have no idea. 
Maybe the best thing to do is to run through all the code in the notebooks and stop if there is anything that is unclear, learn it and go further. This way I will know where the problem is. 

### Six hours later

Well, have I learned Python yet? 
No. 

But I have come a whole lot closer! 
There is still so much to learn before I feel comfortable with understanding what I am doing with these notebooks, so better keep at it. 

## 14th of September
I have fiddeled around a bit with different features and structures of the algorithm and it struck me that the MLPclassifier in "tanh" -mode is SO much slower than the others. Being that much slower, one would guess that it is much better as well? Not the case. 
After leaving it for about 10 minutes it produced results that were slightly worse than those of the default "relu" -setting. Why? 


Number of mislabeled samples 10 out of 21
Accuracy: 0.5238095238095238
              precision    recall  f1-score   support

         0.0       0.00      0.00      0.00         2
         1.0       1.00      0.75      0.86         4
         2.0       0.50      1.00      0.67         2
         3.0       0.50      0.67      0.57         3
         4.0       0.75      0.60      0.67         5
         5.0       0.50      0.33      0.40         3
         6.0       0.00      0.00      0.00         2

    accuracy                           0.52        21
   macro avg       0.46      0.48      0.45        21
weighted avg       0.56      0.52      0.52        21

confusion matrix
[[0 0 0 0 1 0 1]
 [0 3 1 0 0 0 0]
 [0 0 2 0 0 0 0]
 [0 0 0 2 0 1 0]
 [0 0 0 0 3 0 2]
 [1 0 0 1 0 1 0]
 [0 0 1 1 0 0 0]]
 
 300,3000,3000,10000,2000,200), max_iter=2000, activation='tanh'
 
Number of mislabeled samples 8 out of 21
Accuracy: 0.6190476190476191
              precision    recall  f1-score   support

         0.0       0.00      0.00      0.00         2
         1.0       0.60      0.75      0.67         4
         2.0       0.67      1.00      0.80         2
         3.0       0.50      0.67      0.57         3
         4.0       1.00      1.00      1.00         5
         5.0       0.50      0.33      0.40         3
         6.0       0.00      0.00      0.00         2

    accuracy                           0.62        21
   macro avg       0.47      0.54      0.49        21
weighted avg       0.56      0.62      0.58        21

confusion matrix
[[0 2 0 0 0 0 0]
 [0 3 1 0 0 0 0]
 [0 0 2 0 0 0 0]
 [1 0 0 2 0 0 0]
 [0 0 0 0 5 0 0]
 [1 0 0 1 0 1 0]
 [0 0 0 1 0 1 0]]
 
 ## Tuesday 15th of September
 Dang it! 
 I had let the system sit on my computer overnight with these settings: 
 #Import the classifier

> mlp = MLPClassifier(hidden_layer_sizes=(300,10000,10000,10000,10000,2000), max_iter=2000, activation='tanh', verbose=True)

It took forever to go through just one cycle and I was really excited to check with it in the morning to see how it had done, but when I did it said that "the Kernel has stopped"

Today I realized that I have to expand my dataset to include more samples. So I have gathered a lot more samples on some of the instruments and am very eager to see if it makes a difference! 
Since I eave downloaded more samples in only two categories, I predict that the results that I get from those categories will be much better than those from the others, it's time to find out. 

Success! 
It really got better for most of the samples. 
Which kind of is to be expected since when more samples get classified correctly, that leaves less to chance. 

## Wednesday 16th of September
Sooo
I have been very intreagued with the question of why an ANN does what it does. I have tried many different setups in the structure of the network and found some very interresting results. 

Intuition tells me that a larger network should be better, "more is more" as Yngwie says, but that is definitely not the case. Some of the best results that I have gotten has come from fairly simple networks of 20,300,300,300,20. This configuration has given me up to 80% success rates, which I think is pretty good for my case. 

### Much, much later the same day
Allright! 
Finally I feel that I have some kind of grip on what all the aspects of the algorithms do. I have this thing where I can't really settle for working with something that I don't know exactly how works down to every little detail. This is a great ability when learning something that builds "on top of" prior knowledge on a subject, but in this project? Well... 
I don't know Python™ that well, so stopping and looking up what a line of code does every two minutes is very tiresome. What is even more tiresome is looking up what an MCFF, spectral centroid or spectral rollof is/does and reading about it untill I have no more questions and can explain this to anyone if they ask. It takes so much time away from coding, it's ridiculous. 

It is very hard to try to conceptualize where the values are stored, how the arrays look, what the sequence of precesses are and so on before one has a good understanding of the language used. I now feel that I have the basic knowledge of Python™ that is needed to get someting useful out of this project, which is so frustrating! I really wish that I had this knowledge when starting the course, then I wouldn't have to both understand how machine learning works and the language, I could have focused only on machine learning, making the learning outcome much greater. 

Found out that the "adam" -solver works much better than the "lbfgs" -solver. Which is weird, since the litterature states that lbfgs should be better for smaller datasets, which I judge my dataset to be. 

## Thursday the 17th of September 
Interesting. 
When I was thinking of what to do for my project I had the idea of making the algorithm recognize feedback to be an automatic feedback spupressor that will not effect the audio signal the way conventional feedback supressors do. After tweeking and training my algorithm a few times, I noticed that it almost always recognized feedback correctly. Maybe this would be the best application for what I have made here. A machine that shouts "FEEDBACK!!!" and the name of the channel that it feeds back on is a thing that would be really helpfull in a live audio setting. 

### Deep into the night
Well, I have done what I can on this project and will hope for the best. 
One very interesting discovery was how much better I work and how much better I feel when I am on cmapus! Today I went to the portal to ask Stefano some questions and ended up sitting there with my fellow students for a little while. The feeling I had afterwards was so much better than the one I have had the last two weeks! It must be seing people. Yes, I do like working from home from time to time, but being in the physical presence of others really help me get better work done by putting me in a better mood. 