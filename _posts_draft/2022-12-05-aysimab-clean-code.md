---
layout: post
title: Clean code
date: 2022-12-05
categories: audio-programming
author: Aysima Karcaaltincaba
image: 
keywords: audio, programming
excerpt: "Clean code"
---


"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."                                       – Martin Fowler

## What is clean code?

Coding is part of what all of us do nowadays. Sometimes we need to write short scripts and sometimes we end up having a huge application with many files of code. We usually focus on getting the correct result or having the correct logic in our code but what about readability?

I am sure we all read someone else’s code or shared our code with people. Especially for developers like us who are developing solutions which can be reused in scientific or artistic contexts, it is even more crucial to share the code we develop or reuse a module someone else developed. 

Do you recall having difficulty when you had difficulty while reading someone else's code? Every developer spends way more time reading code then writing the code. It means spending a bit more time to write a more readable code saves a lot of time from many others, including ourselves because many of us also find ourselves having difficulty even reading a code which we wrote a while ago! 

So writing understandable and readable code is a very big responsibility for us, maybe as important as writing a working code.

Then what should we be careful of while writing code?


### NAMINGS

How we name our variable, functions and classes are the most important things when we write code. The most important thing is that you should be understanding a code and what each variable & function does by only reading it. 

We mostly find ourselves adding lots of comments to our code but ideally a code should be self explanatory. Most MCT students are using a jupyter notebook, I can imagine most of us running cells in a different order and not noticing some problems because of having many variables with the same names in different cells. However if we give variables very clear names about what they are, why they are different, this wouldn't be an issue. 

"A name should tell you why it exists, what it does, and how it is used. If a name requires a comment, then the name does not reveal its intent."                
 – Clean Code - 

It is also important to follow the same naming standard over the whole code of yours. I mean if you are using underscore in order to separate words, then be consistent and always use underscore. Or if you are using “lowerCamelCase” in order to separate words then always use it. 

### AVOID DISINFORMATION

Only use specific words if they apply to your case. For example, only have a variable named signalArray or signalNp if the variable is an array or numpy array for NP. If you do otherwise, you will create a wrong impression and it will be harder to follow the code.


### CLEAN CODE IS:
Easy to read
Easy to change
Well tested
Every function does what you expect them to do
The Boy Scout Rule: Always leave the code better than you found

