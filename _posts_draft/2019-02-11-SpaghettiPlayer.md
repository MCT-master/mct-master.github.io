---

layout: post
title: "The Spaghetti Code Music Player"
date: 2019-02-11 17:00:00 +0100
categories: Audio-Programming
author: Mari Lesteberg
image: /assets/img/mari/Spaghetti1.jpg
excerpt:

---

## The Spaghetti Code Music Player 2.2

This has been an intense week with a steep learning curve for me, but I have enjoyed it so much. HTML and web design was a huge hobby for me, back in the 90's when I was little, and this week I have been reminded of how fun it is. To try and fail, google for solutions when nothing works, trobleshoot for hours and hours, and so on. And the rush you get when it finally works! 

*Take a look at the evolution of the Spaghetti Player:*
![alt text](https://github.com/MCT-master/mct-master.github.io/blob/master/assets/img/mari/collage.jpg "Evolution of the player")
***Research Journal, Mini Project, day 1***

I started by googling "Web Audio API" to get some inspiration for my project. I found the <a href="https://webaudioapi.com/samples/">Web Audio API samples page</a> with a collection of examples of Web Audio API applications. 

Just to get started, I quickly chose the <a href="https://webaudioapi.com/samples/filter/">filter sample</a> and figured out that I could use this as a base for my own project. To gather the necessary files, I went into the sources of the web page and found the repository there. The repository contained a lot of different files, both js-files, an html index file, and a css file. I copyed everything into my Visual Studio Code workspace and started on studying the files - to see what I could get out of it.

The code was rather complex, andthe most of it was way beyond my level of javascript knowledge. But I started with the easier stuff that I could understand, like editing the colours in the css-file and some of the text in the html-file, and also I also replace the sound file from the original js-code with one of my own sound files. 
Then I figured out that I wanted to add another parameter in addition to the original filter parameter. I thought that adding a volume control would be an easy task to do. I copied the slider in the HTML-file, and then I was going to edit the js-code to make it actually work. For the same Web audio API samples page, I found a <a href="https://webaudioapi.com/samples/volume/">volume control</a>. 

One of the js-files was the same for these two applications ("shared.js"). I later figured out that this is the file where the the web audio object is applied. To make it work the way that I wanted, was not an easy thing; I used several hours after I got home that evening to actually get it work. But I also learned a lot during this process. When I included the gain-variable in the code, I think I from the beginning understood where to copy-paste it in the code, but some of the brackets were implemented the wrong way. The volume control did _something_ with the sound, but it wasn't really controlling the volume. Later that day, after a lot of trying and failing, I figured out that it was the routing on connecting the volume to the destination I had done wrong:   


I had just connected both filter and gainNode to destination, and that wasn't working. But this way around worked: 
```
  source.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(context.destination);
```

It might look like basics if you know Web Audio API from before, but for me, dealing with a _lot_ of Spaghetti code, it was not that obvious before I actually noticed it.

By the end of this day there were still some issues with my code: 

 - when I turn off and on the filter toggle, also the volume control is effected. I only want the filter effect to be effectd by this toggle.
 -when i turn off and on the filter toggle, the volume control stops working.

For the next couple of days, I also wanted to try to add more parameters to my player, and also include more of what I had learned in this course so far.

 ***Research Journal, Mini Project, day 2***

 I quickly found out what was the problem with the volume control from yesterday. I used "in" and "else" to fix this problem:
 
```
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
```

I find that I'm learning new things all the time. Along the way, I am also taking an introductory course to JavaScript in a mobile app, that helps me a lot to learn the basics.

This day i used _hours_ and _hours_ on trying to implement a visualizer in music player; the intention was to make it look like something like this:

<img src="/assets/img/mari/Visualizer.jpg" alt="Player with visualizer" width="60%" />

The visualizer code was also taken from the <a href="https://webaudioapi.com/samples/visualizer/">Web Audio Samples Page</a>, and this screen shot is taking during the endless trying and failing sessions when I tried to merge the visualizer code into my code. From the screen shot, it looks like it's working, but when the visualizer was working, my effects didn't work and vice verca. I couldn't succeed with implementing the visualizer into my player, unfortunately, because coders also need to sleep. I did several attempts during the week and weekend, but it seemed unpossible. 


***Research Journa, Mini Project, day 3***

My mission for this thay has been:
-try to clean up my code, build it from the beginning.
-implement some things i've learn through the week

Today I felt that I learned a lot about from the tutorial lecture about the nodes that I’d already been using. To enhance my understanding I aimed to build a new player with the same effects that I’d been using before. I started by adding the mouse move effect from the first day tutorial to be able to control the filter node with the mouse. This was working perfectly!

```
        window.onload = function() {
          this.addEventListener('mousemove', function(e) {
          var x = e.clientX;
          var y = e.clientY;
          var width = window.innerWidth;
          //adding height
          var height = window.innerHeight;
          //console.log(width);
          var widthnor = (x/width); // 0-1 range
          var heightnor = (y/height);
          // console.log(widthnor*1500);
          // console.log(heightnor*50);
          //console.log(x, y);
          if (playing == 1) {
            //oscillator.frequency.value = x;
            filter.frequency.value = widthnor*1500;
            filter.Q.value = heightnor*50; 
          }
          });
        }
```


So from this day my project developed in a new direction, but it was definitely related to my previous player. The difference between the two players was that the previous one used sliders to control filter, the new one used the mouse. The new player also had a delay effect, controlled by on and off buttons.

One can say that I've almost started on building my code up from the beginning, but not entirely. I think I've learned a lot today, crossed a threshold perhaps. While yesterday I understood the if/else statement and was able to implement it in my own code, today I understood how to assign different buttons to differnt effects and make it work.

I used a lot of time to try to make a volume knob to my "new" project. By this point, I still hadn't figured out how, and I was wondering if I had to give it up and start on merging my two projects together to one project. I also had to find time to prepare the presentation slides for my project presentation for tomorrow. 

