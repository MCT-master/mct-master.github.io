---
layout: post
title: "Emulating analog guitar pedals with Recurrent Neural Networks"
date: 2022-05-20 00:30:00 +0200
categories: machine-learning
author: Arvid Falch
image: /assets/image/2022_05_19_arvidf_pedals.png
keywords: mct, machine learning, scientific computing, analog effects
excerpt: "Using LSTM recurrent neural networks to model two analog guitar pedals."
---



# **Using a Recurrent Neural Network to model two analog guitar effects**

As a music producer and guitarist, I love distortion. It's a bit like champagne, it goes with everything. So for my Machine Learning (ML) project I chose to emulate two analog guitar effects using Recurrent Neural Networks (RNNs).    
An analog effect is a non-linear system which changes some of the sonic characteristics of an audio source. The *dry* sound is input into the unit, and the resulting output is the *wet* audio. My chosen effects where the **Boss SD-1** distortion pedal and the **Wampler Black '65** tube saturator.



<figure style="float: none">
   <img src="/assets/image/2022_05_19_arvidf_pedals.png" alt="Pedals" title="" width="auto" />
   <figcaption><i>The Boss Sd-1 and Wampler Black 65'</i></figcaption>
</figure>

Audio examples of a dry sound and how it sounds after being processed through the effects:

**Dry Sound**

<div class="waveform" id="Dry_1"></div>

**SD-1**

<div class="waveform" id="SD1_1"></div>

**Black 65'**

<div class="waveform" id="B65_1"></div>

<br>

Using ML techniques, we are able to emulate an effect without having any prior knowledge of the effect we emulate. This is called black-box modeling. By feeding raw dry audio to a neural network, we can train it to predict the wet audio. More specific; we feed it a segment of dry audio and the model predict the value of the target sample of wet audio.
<br>
<figure style="float: none">
   <img src="/assets/image/2022_05_19_arvidf_feature_input.png" alt="Input" title="" width="auto" />
   <figcaption><i>Frame of samples as input and one sample of wet audio as target output</i></figcaption>
</figure>


Normal fully connected feed forward neural networks aren't very good at this, because they are not able to keep any memory of former events. Even though my chosen effects had very short time-variances, they still affect the audio source in ways that needs to be understood in the time domain. RNNs are able to keep some memory of former events in their cell state which makes them quite good at learning how a non-linear system like an analog distortion effect works.  
RNNs come in many forms, from the simple recurrent unit to the Gated Recurrent Unit (GRU). But the most popular and successful when it comes to audio effect modeling is the [Long Short Term Memory unit](https://colah.github.io/posts/2015-08-Understanding-LSTMs/) (LSTM).  

During my preliminary tests I quickly realized that the LSTM networks performed much better than the other RNNs. I also found that LSTMs had some peculiar challenges with audio prediction which I decided to explore. The result of this exploration was a comparative study of different LSTM architectures and different hyperparameters and how they performed modeling my chosen effects.

## **Dataset**

I created an 8 minute audio file consisting of different audio material. This audio was then recorded both dry and wet through my two effects. 20% of the recorded audio were set aside to be used for evaluation (The test set). The remaining 80% were the foundation for the dataset used for training the models.

<figure style="float: none">
   <img src="/assets/image/2022_05_19_arvidf_DatasetDryNotated.png" alt="Dataset" title="" width="auto" />
   <figcaption><i>The full dataset used in the project</i></figcaption>
</figure>

## **Training the models**

I made five different model structures, which has either one or two LSTM layers, 16 or 32 hidden units (inside the LSTM), and accepts as input either a frame of 32 samples or 64 samples. These different structures were then trained on different dataset sizes and different number of epochs, and compared to see who performed the best.

<figure style="float: none">
   <img src="/assets/image/2022_05_19_arvidf_models.png" alt="Models" title="" height="auto" width="70%" />
   <figcaption><i>The five model structures.</i></figcaption>
</figure>


Using [Tensorflow](https://www.tensorflow.org/) with the [Keras API](https://keras.io/), I trained hundred of models, and collected evaluation metrics from all of them which I used for analysis.   
It took quite some time.  
And every week or so I would come up with a tiny improvement and as a result I had to redo everything from scratch.

## **Results**

To put it simple, the results can be explained this way:

1. The models performed better on the SD-1 than the Black 65' when we look at the evaluation metrics. But when you audition the predicted audio and the target output it's hard to tell which effect is most similar.  
(*The following examples are one layer, 32 hidden units trained on 40k frames of audio.*)

**SD-1 True output**

<div class="waveform" id="SD1_True"></div>

**SD-1 Predicted Output**

<div class="waveform" id="SD1_Predicted"></div>

**Black 65' True Output**

<div class="waveform" id="B65_True"></div>


**Black 65' Predicted Output**

<div class="waveform" id="B65_Predicted"></div>


2. The bigger the model structure, the better the evaluation metric scores. Evaluation metrics are the Mean Absolute Error (Mae), Coefficient of Determination (R2) and Error to Signal Ratio (ESR).
3. The bigger the dataset, the better the evaluation metric scores gets.
All the best performing models were trained on 500k frames of either 32 or 64 samples.

<figure style="float: none">
   <img src="/assets/image/2022_05_19_arvidf_SD1_perf.png" alt="SD1 Performance" title="" height="auto"  width="65%" />
   <figcaption><i>Evaluation metrics for the best performing models on the SD-1.</i></figcaption>
</figure>

<figure style="float: none">
   <img src="/assets/image/2022_05_19_arvidf_B65_perf.png" alt="B65 Performance" title="" height="auto" width="65%" />
   <figcaption><i>Evaluation metrics for the best performing models on the B 65'.</i></figcaption>
</figure>

4. The evaluation metric scores do not necessarily correspond to my subjective perception of the similarity of the predicted versus the target output.
5. The longer the models train, evaluation metric scores improves, but the more they added unwanted high frequency material (noise and aliasing).
6. Visually inspecting spectrograms and waveforms often tells a different story than the evaluation metrics.    


<figure style="float: none">
   <img src="/assets/image/2022_05_19_arvidf_waveformcompare 2.png" alt="Waveforms" title="" width="auto" />
   <figcaption><i>Waveforms of dry audio, target output and predicted output.</i></figcaption>
</figure>

### **Noise and aliasing**

In ML, an epoch is one training iteration through the whole training set. The number of epochs then determines for how long the model is allowed to train. Training for too many epochs can result in overfitting, or in the case of this project; noise and aliasing.
Here you can see how the models first learn to emulate the low frequency content, then slowly learn to add the high frequency content. After 50+ epochs they start to add erroneous high frequent noise and aliasing artifacts.
These examples were made with a dataset of 116 seconds of dry audio, rather small compared to the biggest datasets used for my experiments. However bigger datasets would cause the same behaviour:  


<figure style="float: none">
   <img src="/assets/image/2022_05_19_arvidf_target_output.png" alt="Target" title="" width="auto" />
   <figcaption><i>Spectrogram of Target Output.</i></figcaption>
</figure>

### **True output**
<div class="waveform" id="Target_output"></div>

<figure style="float: none">
   <img src="/assets/image/2022_05_19_arvidf_20epochs.png" alt="20epochs" title="" width="auto" />
   <figcaption><i>Spectrogram of prediction after 20 epochs.</i></figcaption>
</figure>

### **Predicted output after 20 epochs**

<div class="waveform" id="a20_epochs"></div>

<figure style="float: none">
   <img src="/assets/image/2022_05_19_arvidf_35epochs.png" alt="35epochs" title="" width="auto" />
   <figcaption><i>Spectrogram of prediction after 35 epochs.</i></figcaption>
</figure>

### **Predicted output after 35 epochs**
<div class="waveform" id="a35_epochs"></div>

<figure style="float: none">
   <img src="/assets/image/2022_05_19_arvidf_50epochs.png" alt="50epochs" title="" width="auto" />
   <figcaption><i>Spectrogram of prediction after 50 epochs.</i></figcaption>
</figure>

### **Predicted output after 50 epochs**
<div class="waveform" id="a50_epochs"></div>

<figure style="float: none">
   <img src="/assets/image/2022_05_19_arvidf_80epochs.png" alt="80epochs" title="" width="auto" />
   <figcaption><i>Spectrogram of prediction after 80 epochs.</i></figcaption>
</figure>

### **Predicted output after 80 epochs**
<div class="waveform" id="a80_epochs"></div>
<br>
<figure style="float: none">
   <img src="/assets/image/2022_05_19_arvidf_200epochs.png" alt="200epochs" title="" width="auto" />
   <figcaption><i>Spectrogram of prediction after 200 epochs.</i></figcaption>
</figure>


### **Predicted output after 200 epochs**
<div class="waveform" id="a200_epochs"></div>
<br>



This could however be because the LSTMs are doing a great job emulating the analog effects. All analog effects are non-linear, and non-linear systems will always produce content above the [Nyquist Frequency](https://en.wikipedia.org/wiki/Nyquist_frequency), called the intermodulation product. Whenever audio goes through the process of Analog-to-Digital conversion, this is handled by a low pass filter filtering out the information around and above the Nyquist frequency. However because the high frequency content predicted by the models happens inside the digital domain, no such filtering is possible.  

## **Takeaways**

1. LSTM networks are pretty good at modeling analog effects with short time-variances. However they don't work that well if the effect has longer time-variances (phasers, chorus) or memory (delay, reverb).
2. It's hard to evaluate how similar a predicted audio signal is to its target audio signal. Evaluation metrics underestimate low energy high frequency information, in other words they don't "hear" the noisy stuff.
3. Smaller and less computationally expensive models can produce pretty good results. The performance gain achieved by adding layers or more hidden units to a LSTM network are not necessarily worth it compared to the added computational cost and increased inference time.


The code for this project is available at [Github](https://github.com/arvidfalch/blackboxRNNmodeling).







<!-- END OF BLOG POST -->

<style>

.btn {
  color: #fff;
  background-color: #2c3e50;
  border-color: #2c3e50;

  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;

}

button:not(:disabled) {
  cursor: pointer;
}

code {
  color: #e83e8c;
  /* word-wrap: break-word; */
}

.waveform {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
}

</style>

<!-- external lib used to display waveforms -->
<!-- <script src="https://unpkg.com/wavesurfer.js"></script> -->
<script src="https://unpkg.com/wavesurfer.js@5.0.1/dist/wavesurfer.js"></script>

<script>

const audioSamples = [

    {
        path: "/assets/audio/2022_05_19_arvidf_Dry_ex.mp3",
        anchor: "Dry_1",
        color: "#ffa600",
        alert: false,
    },
    {
        path: "/assets/audio/2022_05_19_arvidf_SD1_ex.mp3",
        anchor: "SD1_1",
        color: "#328d78",
        alert: false,
    },

    {
        path: "/assets/audio/2022_05_19_arvidf_B65_ex.mp3",
        anchor: "B65_1",
        color: "#D93821",
        alert: false,
    },
    {
        path: "/assets/audio/2022_05_19_arvidf_SD1_true.mp3",
        anchor: "SD1_True",
        color: "#1869ca",
        alert: false,
    },

    {
       path: "/assets/audio/2022_05_19_arvidf_predictedSD1.mp3",
       anchor: "SD1_Predicted",
       color: "blue",
       alert: false,
     },
     {
         path: "/assets/audio/2022_05_19_arvidf_true_B65.mp3",
         anchor: "B65_True",
         color: "#ffa600",
         alert: false,
     },
     {
         path: "/assets/audio/2022_05_19_arvidf_predictedB65.mp3",
         anchor: "B65_Predicted",
         color: "#328d78",
         alert: false,
     },

     {
         path: "/assets/audio/2022_05_19_arvidf_original_wet_epochs.mp3",
         anchor: "Target_output",
         color: "#D93821",
         alert: false,
     },

     {
         path: "/assets/audio/2022_05_19_arvidf_20epochs.mp3",
         anchor: "a20_epochs",
         color: "#1869ca",
         alert: false,
     },

     {
        path: "/assets/audio/2022_05_19_arvidf_35epochs.mp3",
        anchor: "a35_epochs",
        color: "blue",
        alert: false,
      },
      {
         path: "/assets/audio/2022_05_19_arvidf_50epochs.mp3",
         anchor: "a50_epochs",
         color: "blue",
         alert: false,
       },
       {
           path: "/assets/audio/2022_05_19_arvidf_80epochs.mp3",
           anchor: "a80_epochs",
           color: "#ffa600",
           alert: false,
       },
       {
           path: "/assets/audio/2022_05_19_arvidf_200epochs.mp3",
           anchor: "a200_epochs",
           color: "#328d78",
           alert: false,
       },


];

const addPlayText = (sample) => "Play" + (sample.alert ? "  ⚠️" : "");

audioSamples.forEach((sample) => {
    const id = sample.anchor;
    const waveformDiv = document.querySelector("#" + id);

    const playButton = document.createElement("button");
    playButton.id = "button-" + id;
    playButton.style.margin = "auto";
    playButton.classList = "btn btn-primary";
    playButton.innerText = "Play";

    const wavesurfer = WaveSurfer.create({
        container: "#" + id,
        mediaControls: true,
        height: 64,
        waveColor: sample.color,
    });
    wavesurfer.load(sample.path);
    wavesurfer.once("ready", () => {
        waveformDiv.appendChild(playButton);
        playButton.onclick = () => {
            wavesurfer.playPause();
            if (playButton.innerText.startsWith("Pause")) {
                playButton.innerText = "Play";
            } else if (playButton.innerText.startsWith("Play")) {
                playButton.innerText = "Pause";
            }
        };
    });
    wavesurfer.once("finish", () => {
        playButton.innerText = "Play";
    });
});

</script>
