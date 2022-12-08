---
layout: post
title: Clean code
date: 2022-12-08
categories: audio-programming
author: Aysima Karcaaltincaba
image: /assets/image/2022_12_06_aysimab_cleancode_unclebob.jpg
keywords: audio, programming
excerpt: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
---


_"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."_ 
–Martin Fowler-

## What is clean code?


Coding is part of all scientific work nowadays. Sometimes we need to write short scripts, sometimes we end up having a huge application with many files of code. We usually focus on getting the correct result or having the correct logic in our code but what about readability?

We all at least read someone else’s code or shared our code with others before. Especially for developers like us who are developing solutions which can be reused in scientific or artistic contexts, it is even more crucial to share the code we develop or reuse a module someone else developed. 

Do you recall having difficulty while reading someone else's code? Every developer spends way more time reading code then writing the code. It means spending a bit more time to write a more readable code saves a lot of time at the end! It even saves time for the code owner because many of us also struggle reading our own code which we wrote just a while ago! 

So writing understandable and readable code is a very big responsibility for us, maybe as important as writing a working code.

<figure>
   <img
      src="/assets/image/2022_12_06_aysimab_cleancode_unclebob.jpg"
      style="max-height:400px; width:auto;" />
   <figcaption>From a clean code lesson of Uncle Bob, Robert Martin.</figcaption>
</figure>

Then what should we be careful while writing code? Lets talk about some small things that can change a lot!

### Name wisely

How we name our variable, functions and classes are the most important things to pay attention. So you should be understanding a code and what each variable & function does by only reading it. 

We mostly find ourselves adding lots of comments to our code but ideally a code should be self explanatory. If you need to add lots of comments, then probably you have some room for improvement.

_"A name should tell you why it exists, what it does, and how it is used. If a name requires a comment, then the name does not reveal its intent."_          
_–Uncle Bob Lessons-_ 

Most MCT students are using a jupyter notebook to develop. I can imagine most of us running cells in a different order and noticing weird behaviours because of having many variables with the same names in different cells like x or y. However if we give variables very clear names about what they are, why they are different, this wouldn't be an issue. 

### Avoid disinformation

Only use specific words if they apply to your case. For example, only have a variable named _signalArray_ if the variable is an "array" or _signalNp_ if the variable is a "numpy array". If you do otherwise, you will create a wrong impression and it will be harder to follow the code.

### Keep your functions & classes short

Having a very huge class or function will make everyone's life very miserable. Instead, be councious about having functions that only does one single thing. So that you can also reuse them easier and you wouldnt need to read every line of code in order to understand what a class or function do.

_“The first rule of functions is that they should be small. The second rule of functions is that they should be smaller than that.”_ 
_—Uncle Bob, Robert C. Martin-_

Not everything has to be in a class. If a function doesn't need to know anything from a class then keep it outside. Instead of having very big classes, decide the responsibility of each recipe and create multiple. Divide them into files, classes and functions as if you are composing music.

<figure>
   <img
      src="/assets/image/2022_12_06_aysimab_cleancode_book.jpg"
      style="max-height:400px; width:auto;" />
   <figcaption>Clean Code Book of Robert Martin, strongly recommended if you are interested!</figcaption>
</figure>

If you are interested to hear more and like youtube more than reading, then you can also try [Uncle Bob's youtube videos](https://www.youtube.com/watch?v=mA5jCZ6nBW4) about clean code principles.

In summary,
Keep in mind these checkpoints for your code:
- Easy to read
- Easy to change
- Well tested
- Every function does what you expect them to do
- The Boy Scout Rule: Always leave the code better than you found

