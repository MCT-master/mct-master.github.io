---
layout: post
title: "Kodaly EarTrainer-App"
date: 2021-04-18 15:50:00 +0200
categories: motion-tracking
author: Thomas Anda
image: /assets/image/2021_04_08_thomasanda_fingersOverlay.jpeg
keywords: motion tracking, iOS, swift, cv
excerpt: "App for training your ears based on old Hungarian methodolgy"
---


Introduction
============

For the final project in MCT4043 I decided to work on an iOS-application
where i utilised computer vision and machine learning to extract hand
poses from a live camera feed and map Kodaly hand signs to the different
scale degrees of the C-major scale. The purpose of this project was to
create a prototype of a possible ear training app which teaches the
ability to recognize each natural scale degree of a major scale and tie
each degree of the scale to a specific hand sign. Although I didn’t
manage to complete the task, I have made the framework for the app
readily available once I have gathered enough data to train a usable
model. The bulk of my time was spent getting the app up and running,
something which turned out to be a quite intricate process. At least
considering that I don’t have a background in Computer Science and have
done little programming previously. But thanks to the internet and good
documentation I was able to get a bare bones prototype up and running.
Even though I have not thought about or seen anyone combine ear training
with hand signs before I discovered the Kodaly method, I think it is an
interesting concept. For me as a guitar player my approach to ear
training is quite visual. Since I imagine how the intervals looks on the
guitar and I associate the different scale degrees and intervals with
how I would play them on my instrument. It makes the process of ear
training a bit less abstract. Mapping the different intervals to these
hand signs can potentially be useful as a pedagogical tool.

Methodology
===========

As I see the use of motion capture devices in musical applications, the
most important part is the mapping. Making meaningful connections
between the musical output and the movement of the body. In my case, I
had to figure out how I could connect the different scale degrees to a
specific movement. In my first prototype I have drawn one point on each
of the finger tips, as you can see in the illustration below.
<figure style="float: auto">
   <img src="/assets/image/2021_04_08_thomasanda_fingersOverlay.jpeg" alt="" title="Fingers Overlay" width="auto"/> <figcaption>Overlay on the TIP of each finger</figcaption>
</figure>

When you hit the “Play Sound”-button a random note gets produced in the
range of 1-7. The application counts the number of fingers it detects,
and if the fingers are the same as the number of the scale degree an
image appears with the correct number displayed on the screen.

``` {.swift}
struct FingersOverlay: Shape {
    let points: [CGPoint]
    private let pointsPath = UIBezierPath()
    
    init(with points: [CGPoint]) {
        self.points = points
    }
    
    func path(in rect: CGRect) -> Path {
        for point in points {
            pointsPath.move(to: point)
            pointsPath.addArc(withCenter: point, radius: 5, startAngle: 0, endAngle: 2 * .pi, clockwise: true)
        }
        
        return Path(pointsPath.cgPath)
    }
}
```

In the code snippet above you can see how each point has been drawn on
the fingertips of every finger recognized. The recognized finger tips
comes from another part of the project where I have used the Vision
framework from Apple by using the function VNRecognizedPoints to detect
only the fingertips of the hand. Each point of the fingertips are stored
in an array.

``` {.swift}
if  overlayPoints.count == audioPlayer.soundPlayed {
                Image(systemName: "\(audioPlayer.soundPlayed!).circle.fill")
                    .resizable()
                    .imageScale(.large)
                    .foregroundColor(.white)
                    .frame(width: 200, height: 200)
                    .shadow(radius: 5)
                    .animation(
                        Animation.easeInOut(duration: 5)
                            .delay(3))
            } else {
                EmptyView()
            }
```

In the ContentView.swift-file, which is the View that displays
everything you can see on the iPhone-screen, I just count the number of
arrays that are being displayed and compare them to a number I get from
a seperate class I have defined in AudioPlayer.swift. If the number of
fingerpoint arrays are the same as the number of the note that was
played, an image appears on the screen. The content of AudioPlayer.swift
looks like this:

``` {.swift}
import AVFoundation

class AudioPlayer: ObservableObject {

    var player: AVAudioPlayer?
    var soundPlayed: Int?

    func playSound() {
            let sounds = ["1","2","3","4","5","6","7"]
            guard let sound = sounds.randomElement() else { return }
            let url = Bundle.main.url(forResource: sound, withExtension: "wav")
            
            self.soundPlayed = Int(sound)
            print(soundPlayed!)
        
            guard url != nil else {
                return
            }
            do {
                player = try AVAudioPlayer(contentsOf: url!)
                player?.play()
            } catch {
                print("Could not find file")
            }
        }
}
```

As you can see in the code snippet above, I have made a function called
playSound(). This function gets triggered by the “Play Sound”-button you
can see at the bottom of Figure 1. It picks a random sound from the
array called “sounds” and stores the name of the file as an optional Int
in the soundPlayed variable. The sounds I created myself in Ableton
Live.

However, even though this works perfectly fine, the mapping is not that
interesting or meaningful. It is not completely arbitrary as it
corresponds to the actual scale degree and the concept of thinking of
notes as numbers in relation to the tonic of the scale is a really
powerful tool if you want to develop your ears. To take this project a
step further I therefore decided to implement the Kodaly hand signs in
my app.

The Kodaly Method
-----------------

The Kodaly Method is an approach to music education developed in Hungary
by the Hungarian ethnomusicologist, composer, pedagogue, linguist and
philosopher Zoltan Kodaly. His method was developed as a result of his
view that the current music education system in the Hungarian school
system was of poor quality. Among all of the methods he developed was
the method for solfege hand signs. The idea was borrowed from an English
educator called John Curwen and the technique assigns to each scale
degree a hand sign that shows its particular tonal function.

<figure style="float: auto">
   <img src="/assets/image/2021_04_18_thomasanda_kodaly.jpeg" alt="" title="Kodaly Hand Signs" width="auto"/> <figcaption>Kodaly Hand Signs</figcaption>
</figure>

Implementing the hand signs
---------------------------

This approach seemed like a good fit for my project. And was helpful in
creating a meaningful connection between sound and action. To implement
the hand signs I chose to train a ML-model using CreateML, which is
Apple´s own plug-and-play software for creating custom machine learning
models. The software is quiet straight forward to use. You just
drag-and-drop your dataset divided into predefined folders (classes),
the application automatically splits your data and starts the training.
You have some options for cropping, blurring, rotation etc, and you can
choose the maximum number of iterations. But apart from that there is no
real options for tweaking. The feature extractions are pre-defined and
you can´t really fine tune your model as you my like if the results you
get are not up to the standards you would like. For some strange reason
the training always stopped after 10 iterations, and I was not able to
troubleshoot this issue. We have a saying in Norwegian that goes like
this “Det enkle er ofte det beste”. I don´t know if that was true in
this particular case. The good thing about this application is that the
output you get is a class object. Which makes it really easy to
implement into your application. I tried to collect as much data as I
could, but it turned out to not be sufficient for my purpose. I would
guess that the hand signs might be to similar and it would require much
more data than I was able to assemble in the short time I had available.
A better approach to this would probably be to drop the machine learning
and take a more heuristic approach and just hard code in the values of
the different hand signs. I could f.ex measure the values of the
overlaypoints when my hand makes the fist sign and map it to the
“Do”-value. This would probably be sufficient, but I was not completely
sure how to accomplish this, but for later development this can be an
approach to explore.

Results and conclusion
======================

I was able to make a prototype of an app which plays a randomly selected
note and compares the scale degree of the note with the amount of
fingers displayed on the screen. Even though this implementation was not
my final goal it was quite satisfying and fun to play around with.
However, for a final product where all of the possible intervals would
have been implemented this would not suffice. Unless you are one of the
lucky persons born with 11 fingers. Therefore, the Kodaly-approach is
much more suitable for this particular task.

<figure style="float: auto">
   <img src="/assets/image/2021_04_18_thomasanda_kodalyChromatic.jpeg" alt="" title="Kodaly Hand Signs" width="auto"/> <figcaption>Kodaly Hand Signs Chromatic</figcaption>
</figure>


Because as you can see in figure 3 the whole chromatic scale has been
implemented and the system is usable in a context where all of the 11
scale degrees are being used. Even though I did not fully complete the
challenges I had set up for myself, I think the idea and concept is
quite interesting, and should be explored further.

As a final conclusion I would say that the course in itself has been a
great learning experience. Although the course was more generic in its
approach to motion capture and not particularly focused on the musical
applications of motion capture, it was fascinating to see each students
different approach to the task we were given. An although I did not
manage to complete my project I got an opportunity to explore the world
of computer vision, which I had not been exposed to earlier. The
application of computer vision in musical contexts are endless, and will
be explored further. I also find it more rewarding exploring easily
available tools. Rather than having to rely upon expensive closed off
systems, I find the cheap and open resources much more attractive.

<figure style="float: none">
  <app>
    <source src="https://drive.google.com/uc?&id=1dEGuaeAYb7n5pUj6ffcwBWmoit9yBpYr" type="video/mp4">
    Should show a media player
  </audio>
  <figcaption>Demonstration of basic prototype</figcaption>
</figure>

Resources used in this project:

https://www.raywenderlich.com/19454476-vision-tutorial-for-ios-detect-body-and-hand-pose

https://developer.apple.com/documentation/vision/detecting_hand_poses_with_vision

https://developer.apple.com/videos/play/wwdc2020/10043
