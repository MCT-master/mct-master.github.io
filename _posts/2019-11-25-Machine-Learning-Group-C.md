---
layout: post
title: Take this Algorithm and Scikit in your Wekinator!
date: 2019-11-25 17:00:00 +0200
categories: Music-and-Machine-Learning
author: Paul Koenig, Aleksander Tidemann, Tom Ignatius, Thomas Anda
image: /assets/img/group-c/horse.png
excerpt: "Heading into the final module of the semester, Group C sighed deeply, gave itself a collective slap on the arse and heaved its sixteen-limbed carcass into class for more good learnin’." 
---

## Group C reports in from the bleeding edge

Heading into the final module of the semester, Group C sighed deeply, gave itself a collective slap on the arse and heaved its sixteen-limbed carcass into class for more good learnin’. Sucking down snus and coffee like Johnny Cash gobbling pills and booze in some piss-stained 70s honky-tonk, we shook off the ashes of burnout and slumped dutifully into our seats, awaiting the arrival of The Next Thing We Didn’t Know Anything About Before.  

Little did we realize at the time the rebirth of joy that awaited us behind the closed and auto-locked, key-card protected doors of Das Portal. 

It has been an eventful first semester for this motley crew of first-year MCT students. We’ve held together pretty well, actually, only losing a few members that wisely decided to run away and join the circus (we love and miss you, Jingles and Bim-Bam!). Together, we’ve laughed, we’ve cried, and we’ve learned. Not once have we even considered rolling around on the floor, choking each other and attempting to gouge each other’s eyes out. 

Well, except that one time. Fortunately, however, it has been thus far impossible to choke, blind, pass fresh coffee to, or smell anyone through the Portal. These problems will be resolved in MCT 2.1, the Singularity. For now, we have to rely on the simple use of hand-gesture, eye rolls, and muttering of threats to express ourselves ‘dans le portail’. Just like in real life!

Anyway, I digress. Module #9 of MCT4000 is, was, and will be known in the future as Machine Learning. What is Maching Lorking, you ask? Fool! Machine Learning is very easy. It is a sub-discipline of Artificial Intelligence, along with its brain-inspired offspring, Neural Networks, Deep Learning, and Kanye West (see fig. 1).

![image](/assets/img/group-c/AIAndKids.jpg)

ML can be described this way: 

“*A computer program is said to learn from experience E with respect to some task T and some performance measure P, if its performance on T, as measured by P, improves with experience E.*”  - Tom Mitchell (who knows what he’s talking about). 

There were several ways we explored this formula. The first was via a program designed by Rebecca Fiebrink called the Wekinator. More on this later, but basically, the Wek is a supervised machine learning program (obviously, they didn’t trust us to let a bunch of unsupervised programs run amok on school property). It uses a polynomial regression algorithm (among others) to train itself to infer outputs from unknown data inputs, by using explicitly-mapped examples as training data. 

Did I say that right? For those that didn’t understand what I said just now, just know that not since Charlie the Unicorn visited Candy Mountain (and had his kidney removed) has there been such wonder to behold. In the famous words of Arthur C. Clarke, “Any sufficiently advanced technology is indistinguishable from magic”. 

Also, you might want to skip the math-y bits, it gets complicated. 

Next up in our magic toolbox is Scikit Learn. With this program, we were able to implement a neural network to train a ML algorithm to classify data into four sets, or classes. Or labels. One thing we definitely learned is that there is a lot of jargon in ML, much of it confusing. Like the term “epoch”, typically used to define a period of geologic time lasting more than three million years, but In ML defined as “one complete presentation of the training set to the ML algorithm”.  This process generally takes only a few nanoseconds, unless your computer crashes. 

Which it will. 

Anyway, I digress yet again. On to the meat of the matter!


## Machine Learning with Wekinator

On the last day of the ML workshop, we had to perform with our Wekinator programs. We’ve all decided to use the same input and output to compare how different each of our programs work after we did some recordings with Wekinator. We decided as a group that all of us will use the XY cursor input into an FM synthesizer through Wekinator.

One of the observations we noticed is that despite the XY value being linear, the machine learning done would be far from it. As we were using basically a two dimensional, two axis graph, we were using the regression method. In the picture below, we see that after plotting just three initial points that the graph starts to non-linearly flatten out at the end without any recorded points.

![image](/assets/img/group-c/wek.png)

Which leads on to our next observation of the training of the program. Our team member, Tom (Iggy), tried plotting three points with the left and right of the bottom of the Y axis changing pitch and the top right changing the filter. However the machine couldn’t logically presume that he wanted the top left hand corner of the screen to filter the lowest pitch from the initial plots.

After plotting more points, we could use the XY plot to have linear and nonlinear curves to adjust our different parameters to allow for more expression.  

Overall its been a great learning experience understand how regression works with Wekinator

## Training a classifier with Sci-kit learn

On day 3 of our ML workshop, we got introduced to a python library called Sci-kit learn. Our task was to collect and use a set of labeled data with a specific program in Sci-kit learn to train two classifiers with supervised techniques. The goal was to build highly accurate classifiers and reflect on why certain configurations generated these levels of accuracy.

The data sets consisted of 4 classes with a total of 200 audio files. Our first training set had examples of cats, guns, birds, and handclaps, while the other featured modular synth-shots, orchestral, nature, and bird sounds. As shown in images below, the complete training procedure resulted in two models with an average classifier accuracy of eighty percent. 

![teamC](/assets/img/group-c/teamcaccuracy.jpg) ![teamA](/assets/img/group-c/teamaaccuracy.jpg)

Much to our surprise, it was much harder to achieve higher accuracy with the first training set then with the second. It seems that audio with similar frequency density and sonic characteristics are more demanding to classify. The findings, therefore, indicate that a diversity of labeled data can be beneficial when using these techniques and tools. This provided insight into the possible structural limitations of our program as well as knowledge about the connection between accurate machine learning classifiers and training procedures. 

