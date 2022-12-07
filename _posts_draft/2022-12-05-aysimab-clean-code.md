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


_"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."_                                       – Martin Fowler

## What is clean code?


Coding is part of all scientific work nowadays. Sometimes we need to write short scripts and sometimes we end up having a huge application with many files of code. We usually focus on getting the correct result or having the correct logic in our code but what about readability?

Probably we all at least read someone else’s code or shared our code with others before. Especially for developers like us who are developing solutions which can be reused in scientific or artistic contexts, it is even more crucial to share the code we develop or reuse a module someone else developed. 

Do you recall having difficulty while reading someone else's code? Every developer spends way more time reading code then writing the code. It means spending a bit more time to write a more readable code saves a lot of time at the end! It even saves time for the code owner because many of us also struggle reading our own code which we wrote just a while ago! 

So writing understandable and readable code is a very big responsibility for us, maybe as important as writing a working code.

Then what should we be careful while writing code?


<figure>
   <img
      src="/assets/image/2022_12_06_aysimab_cleancode_unclebob.jpg"
      style="max-height:400px; width:auto;" />
   <figcaption>Performing music in an online meting, photo by Omar Prestwich</figcaption>
</figure>

### NAMINGS

How we name our variable, functions and classes are the most important things to pay attention. So you should be understanding a code and what each variable & function does by only reading it. 

We mostly find ourselves adding lots of comments to our code but ideally a code should be self explanatory. If you need to dd lots of comments, then probably you have some room for improvement.

Most MCT students are using a jupyter notebook, I can imagine most of us running cells in a different order and noticing weird behaviours because of having many variables with the same names in different cells like x or y. However if we give variables very clear names about what they are, why they are different, this wouldn't be an issue. 

_"A name should tell you why it exists, what it does, and how it is used. If a name requires a comment, then the name does not reveal its intent."_          
– Clean Code - 

It is also important to follow a naming standard over the whole code of yours. I mean if you are using underscore in order to separate words, then be consistent and always use underscore. Or if you are using “lowerCamelCase” in order to separate words then always use that one. 

### AVOID DISINFORMATION

Only use specific words if they apply to your case. For example, only have a variable named signalArray if the variable is an array or signalNp if the variable is a numpy array. If you do otherwise, you will create a wrong impression and it will be harder to follow the code.

<figure>
   <img
      src="/assets/image/2022_12_06_aysimab_cleancode_book.jpg"
      style="max-height:400px; width:auto;" />
   <figcaption>Performing music in an online meting, photo by Omar Prestwich</figcaption>
</figure>

### CLEAN CODE IS:
Easy to read
Easy to change
Well tested
Every function does what you expect them to do
The Boy Scout Rule: Always leave the code better than you found

