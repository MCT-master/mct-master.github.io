---

layout: post
title: "The Spaghetti Code Music Player"
date: 2019-02-11 17:00:00 +0100
categories: Audio-Programming
author: Mari Lesteberg
image: /assets/img/mari/Spaghetti1.jpg
excerpt:

---

*The Spaghetti Code Music Player 2.2*

This has been an intense week with a steep learning curve for me, but I have enjoyed it so much. HTML and web design was a huge hobby for me, back in the 90's when I was little, and this week I have been reminded of how fun it really is. To try and fail, google for solutions when nothing works, trobleshoot for hours and hours, and so on. And the rush you get when it finally works! 



***Research Journal, Mini Project, day 1***

I started by googling "Web Audio API" to get some inspiration for my project. I found a web page with a collection of samples: https://webaudioapi.com/samples/ 
I chose the filter sample and figured out that I could use this as a base for my own project. To gather the necessary files, I went into the sources of the web page and found the repository there. The repository contained a lot of different files, both js-files, an html index file, and a css file. I copyed everything into my Visual Studio Code workspace and started on studying the files - to see what I could get out of it.
The code was rather complex, and way beyond my level of javascript knowledge, but I started with the easier stuff that I could understand, like editing the colours in the css-file and some of the text in the html-file, and also replace the sound file from the original js-code with one of my own sound files. 
Then I figured out that I wanted to add another parameter in addition to the original filter parameter. I thought that adding a volume control would be an easy task to do. 
I copied the slider in the HTML-file, and then I was going to edit the js-code to make it actually work. For the same Web audio API samples page, I found a volume control. 
one of the js-files was the same for these two applications ("shared.js"). I later figured out that this is the file where the the web audio object is applied.
To make it work the way that I wanted, was not an easy thing, I used several hours after I got home that evening to actually get it work. But I also learned a lot of things in this process.
When I included the gain-variable in the code, I think I from the beginning understood where to copy-paste it in the code, but some of the brackets were implemented the wrong way. The volume control did _something_ with the sound, but it wasn't really controlling the volume.
Later that day, after a lot of trying and failing, I figured out that it was the routing on connecting the volume to the destination I had done wrong:   


I had just connected both filter and gainNode to destination, and that wasn't working. But this way around worked: 
// Connect source to filter, filter to destination.
  source.connect(filter);
  filter.connect(gainNode);
// Connect gain node to destination
gainNode.connect(context.destination);

At this point there is still some issues with my volume control:
 - when I turn off and on the filter toggle, also the volume control is effected. I only want the filter effect to be effectd by this toggle.
 -when i turn off and on the filter toggle, the volume control stops working.

 I also want to try to add more parameters to my player, perhaps also include some more of what I have learned in this course so far.

 ***Research Journal, day 2***

 I quickly found out what was the problem with the volume control from yesterday. I used "in" and "else" to fix this problem:

  };
FilterSample.prototype.toggleFilter = function(element) {
  this.source.disconnect(0);
  this.filter.disconnect(0);
  this.gainNode.disconnect(0);
  // Check if we want to enable the filter.
  if (element.checked) {
    // Connect through the filter.
    this.source.connect(this.gainNode);
    this.gainNode.connect(this.filter);
    this.filter.connect(context.destination);
  } else {
    // Otherwise, connect directly.
    this.source.connect(this.gainNode);
    this.gainNode.connect(context.destination);
  }
};
I find that I'm learning new things all the time. Along the way, I am also taking an introductory course to JavaScript in a mobile app, that helps me a lot to learn the basics.

I have started on trying to include a visualizer to my player.
*** day 3 ***
My mission for this thay has been:
-try to clean up my code, build it from the beginning.
-implement some things i've learn through the week

Today I haven't actually done so much on my initial project. Instead I've used what I've learned through today's Audio Programming tutorials to improve my understanding of the code. The Routing Audio Nodes-tutorial was especially helpful for what I've been trying to do in my project. Instead of packing even more copied code into my inital project, I started from the beginning with the delay-node-code. 
One can say that I've almost started on building my code up from the beginning, but not entirely. 
I think I've learned a lot today, crossed a threshold perhaps. While yesterday I understood the if/else statement and was able to implement it in my own code, today I understood how to assign different buttons to differnt effects and make it work.
I used a lot of time to try to make a volume knob to my second project. I still haven't figured out, and I wonder if I have to give it up and start on merging my two projects together to one project. I guess I will add the Delay effect to the initial project and maybe also finish the visualizer I started on yesterday. I also have to find time to prepare the presentation slides for my project presentation for tomorrow. 
