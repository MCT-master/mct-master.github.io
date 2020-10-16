---
layout: post
title: "Team C's reflections on Scientific Computing"
date: 2020-10-15 16:00:00 +0200
categories: scientific-computing
author: Joni Mok, Stephen Gardener, Wenbo Yi, Lindsay Charles
image: 
keywords: python, jupyter notebook, audio-files, numpy, pandas, matplotlib, librosa
excerpt:
---


Despite our diverse professional backgrounds, three of us are pretty much beginner pythonista. 
All of our code seems pretty readable. Joni's code is very clean, possible because she's a designer, with good commenting. Wenbo favoured a single cell for his code. Upon the review on everyone’s submissions, we agreed that our team activity in the future has to increase.
Meister Stephen will have to be more patient with us!


## Wenbo
As a rookie programmer's first practice exercise, the midterm assignment gave Wenbo a great sense of frustration. When he saw the problem, Wenbo thought it was very simple, but as he started to solve the problem, he found that everything was far from the documentation he saw on the website (but he accidentally discovered the magic of stack overflow and google). After spending 4 hours, Wenbo finally accomplished this task using an inefficient method - reading all the files in the folder and reordering the CSV files. After seeing Stefano's solution, Wenbo once again realized how small he was in front of this HUGE mountain of programming. He thought that he needed to make more use of the functions he learned to solve real problems in his later programming studies instead of reading documentation like a novel. 


## Stephen
This was a fun assignment to do. I am an experienced programmer, so it wasn’t a huge struggle for me. The first thing I noticed was grouping the plot data by labels - I wasn’t sure how to approach this at first, but it turns out that DataFrames have a nice groupby method, similar to Ruby, so once I had this sorted, the rest of the assignment came fairly quickly. I tend to favour short and readable code, but I am also aware that I can become so pleased with finding a concise solution to a problem that I fail to see the issues with it - I am hoping that this isn’t the case with this assignment!


## Joni

The very first code I wrote during the class last Friday was originally better, at least I have printed out the csv file and plot in a better way. However, the more time I spent on the assignment, I got lost. Perhaps it was also because of my lack of understanding of the python functions and methods, as well as the lack of regular practice. Instead of continuing modifying the code I already had, I ended up looking everywhere on the internet for more alternatives. I learned a lot by looking into how others are doing and the ways they explained ‘why’ they did in a certain way and not the others, and ‘why’ that didn’t work or what could be better, etc. So, during the process, I also learned about how ‘programmers or engineers’ think. In fact, it is pretty much the same concept like reading different books and write an essay to a particular topic by mixing the knowledge by heart.

In the future, I would love to have more of this type of assignment, because it challenges us to think and practice all at once, by applying all the knowledge and concepts we learned to solve a particular problem with our creative skills. The process of exploration to solve an assignment helps to enhance the learning experience. The challenge per se makes it more appealing and engaging.

Technically, I overcomplicated the code and after reading the suggested solution, I realised that I should simply follow the instructions. As the question began with reading CSV file and asked to create a new one, I should just started with this step and then the next. Therefore, upon reading the suggested solution, I went back to the very first attempt I had already from the Friday class last week. I began reading the original CSV file and classify the labels/instruments from it. The suggestion is very well thought out and structured, with the very clever twists of the methods, I began to understand how one can be creative in programming! Programming approaches the problem in a linear, systematic way, very unlike design process, but both are creative in different perpectives. Interesting.

About the styling, from the suggested solution, I learned that I could directly import that library at the beginning. Quite ridiculous of what I did, I added the sinewaves formula in my previous codes and I wondered what was happening with my head. It was absolutely irrelevant for this task. This mistake taught me that nothing is certain and I should not program my mind before I know the actual problem. And I created 3 scatter plots just to try testing the zcr, rms and cent methods. It was an absolutely silly thing I did!

With the .label.unique() methods to sort out the labels into a different category. I did something really silly before, I even create 5 different CSV file by using another method that I couldn’t remember now. Declaring the functions make everything way more efficient, for both human and computer. Before that, I tried to create empty string added new rows to the list. It didn’t work out, it worked, but it was an unnecessary step, showing I didn’t know what I was doing.

In the plt.scatter, previously I had separately printed out the labels and tried to assigned different colour individually. However, the plot didn't show 5 colours, but it showed only 2. And I have repeated the setting 3 times because I didn't know that there is a plt.savefig I could use to create png files.

While fixing the solutions, I wrote some notes in attempt to explain what I have learned after reading the suggested solution and what I understood from there. I don't think I can come up with better solutions because of my very limited programming knowledge. However, during this process of studying the code of the tutor was trully illuminated and I had an overview of the past 5 sessions.

<i>Ending with stealing a wise man from a wise man's quote: “Looking to the future! I have a lot to learn. The more masterful coders of Team B have identified some resources for me to utilize as I try to catch up. I hope to someday be coding in style and laugh at tasks like this, but, until that day comes, I will remain the most easily confused coder in the room.” (W. Mandeville, 2020)</i>


## Lindsay

As a beginner in learning python and also programming, the task which was assigned to us was from my perspective, was a difficult one, atleast in the starting.
I didn't have a clue in how to start or which logic to use to solve this task. For the first submission, I only had 3 lines of code and I felt it would take me more than a week to get through this.

Going through all the previous notes, I decided to seek some help from my class mates, and find out how they are approaching the problem.

At the end, I could identify the main logic and approach which I found resourceful to me and executed it sooner than I thought. 


