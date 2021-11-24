---
layout: post
title: "Mixing a multitrack project in Python"
date: 2021-11-24 19:24:00 +0200
categories: scientific-computing
author: Joachim Poutaraud, Kristian Wentzel, Sofía González, Arvid Falch
image: /assets/image/2021_11_23_arvidf_crazyrig.jpg
excerpt: "Attempting to mix a multitrack song with homemade FX in our very own mini PythonDAW'"

keywords: Music Production, Mixing, Python, Plugins

---

# **Introduction**

Being students at the MCT program is now a condition we've gotten accustomed to as our first term is gradually coming to an end. Usually we get some sort of assignments to solve every week, and most likely we will spend way too much time solving it. So when the last assignment was announced we decided to get extra ambitious and spend even more time on it, making sure our personal lives and sanity would be completely ruined come Christmas.

We decided to use our recently aquired Python skills to build a program that could mix a multitrack recording. With homebrew FX and everything you'd need, basically making a tiny Python-DAW except for a nice GUI. That would have made it too slick, we wanted this to be pure code.



# **The Music**

In order to mix anything, we needed some music. And as our sanity was already slipping, we skipped this part until we had a program up and running. When time came to create the music our minds was so entrenched in lines of code that we almost had to write a Python program which could write music for us.

The solution was to pick some files from an old unreleased project of Arvids band Misha Non Penguin, and then take away all processing and writing them out as mono files.

We ended up with five tracks:

- two drum tracks
- one bass synth
- one synth brass stabs
- one plucked lead synth.

On purpose we chose poorly sounding synth patches, completely unprocessed. We also had a midifile containing all the midi. The challenge was on.

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1DKxUBmOM-4pleIVld6yRwJ1geDv2_NIl" type="audio/mpeg">
    Mixed
  </audio>
  <figcaption>The original unprocessed music</figcaption>
</figure>



# **The Program**

Segmenting and rejoining segments of audio has somehow become the bread and butter of the MCT program, so the assignment required us to do this. But this was also going to enable us to apply different processing on each segment of any track, which turned out to be an interesting option in the end result.

The basic thing needed whenever things are sliced up and pasted back together are some short overlap and fading functions, in order to avoid clicks and artifacts in the sound. Our approach to achieve this was the following:



1. Creating an empty array of zeros called results, with the same size as the audio we'd segment.

2. Running the audio file in a for loop

3. Based on MIDI which gave us the downbeat of every measure, we would slice out one measure of the audio.

4. The segment would be given a short fade in and fade out (equal to the length of our overlap, see further down)

5. This segment would then be processed with whatever effects we wanted.

6. The segment would be zero padded (adding zeros) in the front of the segment and in the back, making the segment the same size as the original audio and our result array.

7. Finally the segment would be cut in the beginning by an amount equalling to our overlap (set to 1024 samples in this project) and zeros were added in the end to make up for the samples removed in the beginning.

8. The overlap value would then be updated for the next loop, in which it had to be equal to it's former value + itself in order to work.

9. Eventually we would sum the result with the segment, and repeating this process until the whole track had been mixed.

We'll come back to this gloriously inefficient way of processing audio later, but whenever we refer to our for loop from now on, this is what we are talking about. As an example it could look something like this:

<figure style="float: auto">
   <img src="/assets/image/2021_11_23_arvidf_forloop.png" alt="" title="" width="auto"/> <figcaption>

   This is the processing of the main drum track.</figcaption>

</figure>

### **Our Processing Tools**

Our tiny Python-DAW needed processing tools, and we set about to program the usual suspects in a DAW. We would need compressors, reverb, delay, saturation and filters for EQ-ing. Easy! One week until deadline? No stress.

<figure style="float: middle">
   <img src="/assets/image/2021_11_23_arvidf_stupid.png" alt="" title="" height="75%"/> <figcaption>

   Challenge accepted.</figcaption>

</figure>

### **Compressors**

How does a compressor really work? Not like our first attempt. Our first compressor went through every sample checking if it's absolute value was above a set threshold. Then it would check how much the sample amplitude exceeded the threshold, and finally multiplying it with a hardcoded value below 1. This was done in a for loop which could be ran multiple times depending on an argument in the function. After the for loop it eventually multiplied the whole signal with a makeup gain, enabling us to first compress the peaks, then turning the whole signal up a bit. In theory this little thingy did everything a compressor should do, but it did it in it's own very time consuming way.

So it had to be improved, and that's when we made our framecompressor. It uses a hanning window turned upside down as it's compression envelope and analyses and compresses frames of the audio instead of sample by sample. We used a window of 2048 samples for our frames and then jumped back 1024 samples before analysing the next frame in order to have some overlap and avoid pumping in the compression. It's not too slow and did the job when we needed compression.

<figure style="float: auto">
   <img src="/assets/image/2021_11_23_arvidf_hanning.png" alt="" width="auto" align="middle"/> <figcaption>

   Upside down Hanning window with ratio set to -0.4, resulting in 0.4 compression at the most.</figcaption>

</figure>    

### **Reverbs and Delay**

We made an IIR filter on the basis of Schroeders very first algorithm for creating an artificial reverberator.

[Read more about the Schroeder reverb here](https://medium.com/the-seekers-project/coding-a-basic-reverb-algorithm-part-2-an-introduction-to-audio-programming-4db79dd4e325)

It uses a set up of four parallell comb filters which then runs into two cascading allpass filters. Setting the parameters takes a little guessing and praying to the binary gods, and it's not a reverb you would recommend to your favourite pop star, but it's an actual reverb and we proudly used it in our mix.

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1EmmJLHZjUg0wfPX7EYwxKBuVXyX58PmI" type="audio/mpeg">
    Unprocessed sine tone
  </audio>
  <figcaption>Dry sound</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1u4BDg6H8nYsuQvoxskekuOxeCCsp3qaK" type="audio/mpeg">
    Sine tone with our IIR Reverb
  </audio>
  <figcaption>Wet sound</figcaption>
</figure>


Our delay was a FIR filter impulse response generating function, which does the processing in the frequency domain and therefore is much quicker to use. By choosing a number of impulses the audio signal would then be repeated as many times as the number of impulses, with a decreasing gain. It is definitely not an all purpose delay, as it works best on small segments of audio.

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1-vjA5jJk5AToPTWh1uCYy47J36KtqKbe" type="audio/mpeg">
    Brass stabs
  </audio>
  <figcaption>Brass stabs with our FIR Delay</figcaption>
</figure>

### **Filters and saturation**

For filters we chose to make a function that created a FIR filter which could be either `lowpass` or `highpass`, and which did the short time fourier transform (STFT) of the signal and applied it's filtering in the frequency domain. This ensured it would be quick, and you could set parameters for passband, stopband and order of the filter in the arguments.

The saturation function (aptly named softClipper) uses `numpy.arctan` and some creative math to apply saturation (or distortion if turned up):
```python
def softClipper(audio, drive, output=0.8):

    """audio = Source to be SoftClipped
    drive = Amount of SoftClipping (Try between 10-40)
    output = Output volume

    The signal is normalized before output attenuation for better control.
    """

    # Drive can not be set to 0
    if drive == 0:
        drive = 1

    piDivisor = 2 / np.pi
    driver = np.arctan(audio * drive)

    softclip = piDivisor * driver

    normalized = softclip/np.max(softclip)
    softClipped = softclip * output

    return softClipped
```


As the last of our fx we made a small function to reverse an audio segment. This maybe the only function that Python would do quicker and easier than it's more user friendly counterparts. Just `numpy.flip(audio)` and the Beatles would have been sold.

### **Instruments**

Our program also needed some instruments, or rather functions that could create sound. Why? Because DAWs have that. And we wanted to make a DAW in Python. Did we use any of them? Hardly. Just one of them. But it's there and maybe someone else would one day feel the need to enter the abyss of doom and attempt to use our program to mix some music.

We made sine, square, sawtooth and triangle oscillators, and even a pulsewidth modulated oscillator with it's own LFO. There's also an ADS amplitude envelope.  

# **Mixing the music**

With our Python DAW up and running, we set about to actually process the audio files. At this point of time our deadline was a point in the distant past and sleep deprivation had kicked in, but the joy of mixing in Python kept us going through the night for a couple of days in a row.

The process would be something like this:

1. Load one track using `librosa`.
2. Applying some filtering, reverb and saturation in the for loop. Maybe set up some conditional processing or change parameters in a FX every time the for loop iterated.
3. Hit the run cell command in Jupyter notebook and wait for a couple of minutes before finally hearing the result.
4. Changing some parameters in the FX.
5. Repeat process from 3.

It might sound like a walk in the park but don't be fooled. The computation would be deadly slow for some of our FX, and it could take hours of testing until we would achieve anything close to a pleasing result. Sometimes we'd get lucky and find some nice settings for our FX early on, while most of the time it would sound disastrously bad and require endless fiddling with the parameters and waiting for the code to run.

But at last you could end up with something interesting, and then say some prayers hoping it would work in the final mix.

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1QXRUwerRbDsHmIf8RCD5pGigu7ZdQtar" type="audio/mpeg">
    Unprocessed
  </audio>
  <figcaption>Pluck synth unprocessed</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1fpwqIIGzpPOTmty0uZ5h7p8oQxSsAIO0" type="audio/mpeg">
    Mixed
  </audio>
  <figcaption>Pluck Synth processed by our tiny Python DAW</figcaption>
</figure>

### **Music visualization**

Finally, all we needed was a nice visualization of our waveforms freshly processed... Based on the most popular DAWs GUI, we could generate two waveforms style:

- one similar to *Audacity* (with RMS & waveform overlapped)
- one similar to *Traktor/Serato* DJ software (with vertical lines of the waveform color-coded by spectral centroid)

To acheive this, we first had to design spectral features functions based on mathematical formulas in order to extract the features we were interested in.

**Root mean square**, defined as the square root of the mean square (the arithmetic mean of the squares of a set of numbers) **[1]**.

<br><img src="https://render.githubusercontent.com/render/math?math={\huge%20RMS=\sqrt{\frac{1}{n}\sum_{i}{x_{i}^2}}}" style="border: None; box-shadow: None;"><br>

<img src="https://render.githubusercontent.com/render/math?math={n=\text{frame length in samples}}" style="border: None; box-shadow: None;">

<img src="https://render.githubusercontent.com/render/math?math={x_{i}=\text{each frame}}" style="border: None; box-shadow: None;"><br>

**Spectral Centroid**, as the name suggests, a spectral centroid is the location of the centre of mass of the spectrum. Since the audio files were digital signals and the spectral centroid is a measure, this appears useful in the characterization of the spectrum of our processed audio file signal.

<br><img src="https://render.githubusercontent.com/render/math?math={\huge%20Centroid=\frac{\sum_{n=0}^{N-1}f(n)x(n)}{\sum_{n=0}^{N-1}x(n)}}" style="border: None; box-shadow: None;"><br>

<img src="https://render.githubusercontent.com/render/math?math={x(n)=\text{the weighted frequency value, or magnitude}}" style="border: None; box-shadow: None;">

<img src="https://render.githubusercontent.com/render/math?math={f(n)=\text{the center frequency of the frequency bin}}" style="border: None; box-shadow: None;">

<img src="https://render.githubusercontent.com/render/math?math={n=\text{the bin number}}" style="border: None; box-shadow: None;"><br>

Furthermore, coloring a waveform with spectral centroid required that we

- Detect peaks with a `onset_detection` function to get the position of note onsets. Which we did by simply using the `onset_detect` function of `librosa`, allowing us to locate note onset events by picking peaks.

- Compute the spectral centroid over all the time segments delimited by the detected onsets. For that part, we had to pad (again!) the time segments with zeros just before the onset and to the next onset.

- Finally, using non-linear map to get gradient-effect was harder than expected. Therefore, we simply color-coded each segment based on five different centroid frequency ranges.

```python
if centroid <= 59: # Sub Low
    plt.plot(x, color='#113450')

elif 60 <= centroid <= 249: # Low
    plt.plot(x, color='#4978c0')

elif 250 <= centroid <= 799: # Low Mid
    plt.plot(x, color='#8a61d3')        

elif 800 <= centroid <= 2999: # Mid
    plt.plot(x, color='#199eb0')

elif 3000 <= centroid <= 5999: # High Mid
    plt.plot(x, color='#ffc0cb')

elif 6000 <= centroid: # High
    plt.plot(x, color='#68e17f')
```
At last we could end up with something quite nice and informative.

<figure>
  <img src="/assets/image/2021_11_23_joachipo_vizserato.png" alt="the misty jungle" width="100%" align="middle"/>

<figcaption align="center">Coloring a waveform with spectral centroid</figcaption>

</figure>

After a few nights of this ordeal we then had six tracks we could sum together. (We resynthesised the lead synth with pretty midi's built in `synthesize()` function, and applied our usual processing to the track in order to have two different lead synths which we could pan). We set different amplitude values for two tracks, the `mixL` and `mixR`, and then merged them together to form a `stereo_file`. And closed our eyes and felt asleep over our computers to the sound of our very own and very first Python DAW mix.

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1a9_qXW7AXRnBgyhZpk9OBcA1a7qj3Ruo" type="audio/mpeg">
    Mixed
  </audio>
  <figcaption>Our final mix</figcaption>
</figure>

The code for this project is available [here.](https://github.com/wnetzel/MCT-teamA-2021/tree/main/Python%20Assignment%205/Part%202)




### **References**

<font size="2"><p><b>[1]</b> "Root-mean-square value". A Dictionary of Physics (6 ed.). Oxford University Press. 2009. ISBN 9780199233991</p></font>

<script type="text/x-mathjax-config">
MathJax.Hub.Config({
tex2jax: {
inlineMath: [['$','$'], ['\\(','\\)']],
processEscapes: true},
jax: ["input/TeX","input/MathML","input/AsciiMath","output/CommonHTML"],
extensions: ["tex2jax.js","mml2jax.js","asciimath2jax.js","MathMenu.js","MathZoom.js","AssistiveMML.js", "[Contrib]/a11y/accessibility-menu.js"],
TeX: {
extensions: ["AMSmath.js","AMSsymbols.js","noErrors.js","noUndefined.js"],
equationNumbers: {
autoNumber: "AMS"
}
}
});
</script>
