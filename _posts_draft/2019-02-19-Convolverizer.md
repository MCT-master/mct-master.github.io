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
        // Fast Fourier Transform (fft) function analyses individual audio frequency in a waveform
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
    } i
```

```javascript
// Drawing Canvas & Creating Visualization    
function draw() {
  
    if (playing == 0 && start == 1) {
    //show the image when stop button is pressed
    drawimage(); // it is a function defined in other part of the code which simply shows the image on canvas
   
    } else if (playing == 1) {
    //stop showing the image and start the visualization
    createCanvas(1275, 350); // created fo the panasonic monitor in the group room at Trondheim campus
    background(255); // white background
    
    var val = slider.value();
    valnorm = val / 100; // defining intensity of the slider
    cVerb.drywet(valnorm); // setting the slider as the drywet gain controller
    
    noStroke(); // setting lines of each rectangles as normal
    var spectrum = fft.analyze(); // define spectrum as array of amplitude values across the frequency spectrum
    //console.log(spectrum.length);

    for (var i = 0; i < spectrum.length; i++) { // loops for i = 1 to spectrum length
      var amp = spectrum[i]; // gets amplitude of each spectrum
      var y = map(amp, 0, 255, height, 0);// defining value of y-coordinate as amplitudes
      rect(i * w  , y, w - 2, height); // rect(x-coordinate, y-coordinate, width, height)
      fill(255, i, 180); // filling each rectangle with color

      // x-axis refers frequency from low in the left to high to the right
      //y - axis refers to the aplitude
    }
      }
  endShape();
}
```
