---
layout: post
title: "An air guitar experiment with OpenCV"
date: 2021-04-17 14:35:00 +0200
categories: motion-tracking
author: Stephen Gardener
image: /assets/image/2021_04_17_stephedg_airguitar.jpg
keywords: motion tracking, opencv, python, guitar
excerpt: "Get to know OpenCV by building an air guitar player. Shaggy perm not required."
---

## Introduction
For my Motion Tracking assignment, I wanted to get to know [OpenCV](https://opencv.org), an open source computer vision library. I had enjoyed going through a few tutorials, and liked the idea of diving a little deeper. Plus it meant I could code in Python, which I am warming to, despite it not being Ruby.

So the next question was - who’s motion am I going to track, and for what purpose? My dog is now too old and sleepy to film her jumping through hoops in the park, and anyway, this is supposed to be a masters in music. A MIDI controller maybe? Could I get my webcam to recognise the sliders I am moving on my MIDI controller and translate them to OSC messages? Then if I am ever at band practice and have forgotten my USB cable, I could just turn on my webcam and use my MIDI controller wirelessly! The only slight hitch in the plan was that I didn’t actually have a MIDI controller.
I did have some guitars on my wall though - maybe I could make an air guitar player? I could stand in front of my webcam, wave my hands about in the air as if I was Brian May at Wembley Stadium and trigger some guitar samples in a (hopefully) semi-realistic way.

## Methodology
My initial panic was triggered by the thought “how on earth am I going to identify my hands waving about in a webcam”. It had me working through lots of tutorials on feature detection, learning about how to spot edges and corners, the panic increasing by the second as I realised how big a task I had taken on. 

Thankfully, I stumbled on [MediaPipe](https://mediapipe.dev), an open source machine learning library for human pose detection and tracking (amongst many other things). I could feed each frame from the webcam into this, and it would spit out a series of landmarks signifying the location of hips, hands, shoulders etc. Sorted! The motion tracking showed my shoulders visibly relaxing.

The second stage of panic was born of the realisation that I still had to do some maths to get this to work. OpenCV makes it easy to step through a camera feed frame by frame, and MediaPipe makes it easy to get a list of landmarks that correspond to points on the body, but what then? 
The landmarks need to be translated into x/y points relative to the frames dimensions. I decided that I only needed to know 4 points on the body - one for each of the hips and hands. The hands are obvious - we need to know if the strumming hand is moving over the strings or not, and where on the neck the fretting hand is. 

The hip points could be used to position the guitar. Talking of the guitar - how are we going to draw it? I had already played around with OpenCVs various drawing features, and so quickly cobbled together an ellipse for the guitar body, and a thickened line for the neck. Realising that I didn’t want to spend the whole assignment using rudimentary drawing tools to create a guitar that would still look terrible, I looked into the other option which was finding an image of a guitar and superimposing that onto the frame. This worked much better, especially once I had figured out the surprisingly complicated process of displaying a PNG with a transparent background. 

At this stage the guitar was the correct size when I was standing in front of my webcam, but turned into a giant guitar as I stepped further back in the frame. Hip points to the rescue! I used the distance between the hip points to scale the guitar image to the appropriate size as I moved forward and backwards in the frame.

<figure style="float: auto">
   <img src="/assets/image/2021_04_17_stephedg_airguitar.jpg" alt="" title="Scaled guitar in place!"/> <figcaption>Scaled guitar image in place!</figcaption>
</figure>

### Strumming
The next step was to identify whether my hands were in the process of strumming or not. I used the hip points again to define a rectangle which would correspond to the strum-zone. If my right hand (I am right handed when I play guitar, and left handed for everything else) was within that rectangle, a guitar strum would be triggered. This isn’t really how guitars work however, and so it was time to apply some of the maths that I had learnt in class. I needed to know if the hand was moving up or down over the strings, which meant that I needed to have a record of the hands position from the previous frame to compare to. Once I had this, I could work out the direction and distance that the hand had travelled. The distance also allowed me to calculate velocity using the derivative. So I set about recording multiple guitar strums - up, down, fast and slow - and used the information I calculated to trigger the correct sample. The right hand was working!

``` python
    # get distance right hand has moved in the y direction by
    # comparing current hand position to previous values
    distance = human.rhand_y - human.prev_rhand_y

    # calculate derviative of distance to get our velocity
    velocity = np.sqrt(distance ** 2) / 1

    # define strum area
    tlx = int(human.center_x - human.hip_width/1.5)
    tly = int(human.center_y - human.hip_width/2)
    brx = int(human.center_x + human.hip_width/1.5)
    bry = int(human.center_y + human.hip_width/2)

    strum = ''

    # if right hand is over the strum area
    if (tly < human.rhand_y < bry) and (tlx < human.rhand_x < brx):
      if distance > 0: # down strum
        if 10 < velocity < 70: # slow strum
          strum = 'down_slow'
        elif velocity > 70: # fast strum
          strum = 'down_fast'
      elif  distance < 0: # up strum
        if 10 < velocity < 70: # slow strum
          strum = 'up_slow'
        elif velocity > 70: # fast strum
          strum = 'up_fast'
```

I had originally thought to use Csound for the audio, but as I was just triggering a sample it seemed a little like overkill. Instead I found a very simple Python library called [Playsound](https://github.com/TaylorSMarks/playsound) which does just one thing - play an audio file you send to it.
Now on to the left hand. Maths wasn’t my strong point the last time I actually did any, which was over 30 years ago at school, but I knew I was going to need it to work out my left hands position on the neck, so I rolled up my sleeves and took some deep breaths. To keep things simple, I decided to split the neck into 3 regions, each one triggering a different chord. The neck is at an angle, so I knew that to calculate the length of the neck, and the position of my hand along it, it was going to involve lots of triangles. Pythons math library has a nice simple `hypot` function, which allows me to throw in a couple of points and find the hypotenuse, so it’s an easy solution for finding the distance between 2 points.

So I had the length of the neck, but how do I find out whether the hand is near it? Numpy came to my rescue. I used Numpys `linspace` function to step along the neck at intervals, checking whether the hands co-ordinates were nearby. If they were, I could do the triangle thing again to calculate how far along the neck it was, and so work out which chord should be triggered.

``` python
    # calculate neck length
    neck_len = hypot(self.neck_start[0] - self.neck_end[0], \
                     self.neck_start[1] - self.neck_end[1])

    # step along the neck at intervals, checking if lhand is near
    for p in np.linspace(self.neck_start, self.neck_end, 20):

      hand_distance_from_neck = hypot(human.lhand_x - p[0], \
                                      human.lhand_y - p[1])

      if hand_distance_from_neck < 40: # hand is touching the neck

        # grab the coordinates of the left hand
        x = int(p[0])
        y = int(p[1])

        # calculate how far along the neck the hand is
        distance_from_end = hypot(x - self.neck_x, y - self.neck_y)
        percent = int((distance_from_end / neck_len) * 100)

        # split neck into 3 in order to grab the correct chord sample
        if 0 < percent < 33:
          note = '1_'
        elif 33 < percent < 66:
          note = '2_'
        elif 66 < percent < 100:
          note = '3_'

        cv2.circle(frame, (x,y), 10, (0,255,0), -1)
        break
```


## Results
The script was working - I could strum with my right hand, and determine the chord that would be played with my left. The guitar sample can be triggered multiple times when holding my hand over the strings, and I played around with various settings to try and alleviate this. I introduced a timestamp that is set once a chord has been played, and prevented any further triggering of samples within 0.2 seconds. This works, but it also slows down the rate at which you can strum. So I tried reducing the minimum distance required to move the strumming hand before a chord is triggered, which seems to be a better solution.

Another issue was that previous samples aren’t cut off when new samples are played, which doesn’t help with the realism! The Playsound library scores highly for simplicity, but this comes at the cost of tweak-ability. So I switched over to a library called [Simpleaudio](https://github.com/hamiltron/py-simple-audio), which also allowed for stopping of audio. Cutting off the audio didn’t sound very natural either, and so I settled on a compromise, and configured things so that the previous audio sample is cut off when changing chords. This helps with the sustain when strumming a single chord, but makes sure that when you change chord, the previous chord doesn’t bleed over the currently sounding one.

The scaling of the superimposed guitar image was a little jumpy, but then the calculation for the scaling was pretty rudimentary and so to be expected. I found that I wasn’t always sure of my left hand placement, and so I added a marker to show the detected position of my hand on the fretboard - this gave useful visual feedback while I was playing. 

Another thing I didn’t take into consideration was that I wrote the code on my 2019 iMac, but it needs to run on my older 2012 laptop for the presentation. I found that the scaling of the guitar image was causing various problems on my laptop that I didn’t come across on my iMac. And during the actual presentation, the scaling issues were exacerbated by the low lighting in the room. That my back jumper didn’t exactly stand out against the black curtains didn’t help either.

## Conclusions
This was a fun project to work on. OpenCV and MediaPipe worked well for the most part, and when you consider this has been running on an old (2012) laptop using just its built in webcam, I think the tracking accuracy is surprisingly good. 

There is lots of room for improvements of course. An improved scaling algorithm for the guitar image, using more landmarks from MediaPipe to get a better/smoother distance estimation. A larger number of guitar samples would be a big improvement - more chords, and more variations of strumming. Using Csound could give more control over the guitar samples as well, including the use of effects, and being able to use gestures to turn effects on and off could be lots of fun.

Ultimately, this project was an experiment to see what can be done with OpenCV. I think I would focus future efforts on building something that use gestures to control MIDI sequencers - this would be something I could see myself using in my own music making.
