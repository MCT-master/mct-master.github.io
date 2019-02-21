---
layout: post
title: "Convolverizer"
date: 2019-02-19 03:59:00 +0200
categories: Audio-Programming
author: Eirik Dahl, Karolina Jawad, Shreejay Sheresta, Sepehr Haghighi
image: /assets/img/freakshow.jpg
excerpt: ""
---

## Starting Point

```javascript
// Eventlistener for click on Canvas
    function togglebutton() {
      if (playing == 0) {
        // start getting live audio input
        mic = new p5.AudioIn(); // this function is setting mic as mic input
        mic.start(); // mic input can now play sounds 
        cVerb = createConvolver("recorded/drumsolo.mp3"); // This function takes the Impulse Response
        // from the soundfile and uses it to recreate sound of that space. The sound is convolved
        // with different impulse response every time the start/stop button is pressed.
        
        mic.connect(cVerb);
        mic.disconnect();
        cVerb.process(mic);
        playing = 1; // stating that its now playing

        // Following 3 lines are for visualization
        // Fast Fourier Transform (fft) function to analyze individual audio frequency in a waveform
        fft = new p5.FFT(0.9, 1024); // 0.9 refers to smoothing & 1024 refers to bin array length.
        w = width / 350; // w = width of each rectangle in the visualization
        fft.setInput(cVerb.process(mic)); // cVerb.process(mic) is being used for visualization
        
      } 
      else if (playing == 1) {
        // stop playing sounds
        mic.stop();
        cVerb.disconnect();
        playing = 0;
        start = 1;
      }
    }
```
