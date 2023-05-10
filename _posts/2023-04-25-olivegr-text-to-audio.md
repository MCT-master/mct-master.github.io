---
layout: post
title: "Generating Video Game SFX with AI"
date: 2023-04-25 20:12:00 +0200
categories: machine-learning
author: Oliver Getz
image: /assets/image/2023_04_25_olivegr_audioldm_tta.jpg
excerpt: "A first look at text-to-audio sound effect generation for video games."
keywords: video games, text-to-audio, ai, generation, sound design, sound effects, sfx, game audio
---

Early 2023, Hugging Face released a pipeline for [AudioLDM](https://github.com/haoheliu/AudioLDM). What this means is that audio generation with AI became readily accessible to everyone, with low setup times. Text-to-audio is, at this very moment, right at our fingertips! Curious about its usage in game audio, I set out to explore its current capabilities and limitations.

# AI SFX Generation Setup Guide
Getting up and running took a bit more effort than I anticipated due to Python packaging conflicts and GPU issues. If you are having trouble with pytorch and GPUs, you can follow my [setup guide](http://https://mct-master.github.io/machine-learning/2023/04/25/olivegr-pytorch-gpu.html). If you still have issues using CUDA, do like me and switch from full precision (torch.float32) to half precision (torch.float16) like so:

<pre>
  <code>
    from diffusers import AudioLDMPipeline
    pipe = AudioLDMPipeline.from_pretrained("cvssp/audioldm", torch_dtype=torch.float16)
    device = "cuda:0" if torch.cuda.is_available() else "cpu"
    pipe = pipe.to(device)
  </code>
</pre>

If you’re wondering: yes, this can negatively influence your results, but not enough for it to be a real issue.

# Generating SFX With AI
The prompts used were widely different for the sake of exploring the versatility of the AI. The authors suggest sticking to sounds from real life, but—lazy as I am—I asked directly for video game sounds as well. 20 sounds were generated for my first experiment, and here are the parameters I used:

<pre>
  <code>
  audio = pipe(prompt,
               num_inference_steps=15,      # This is the amount of denoising steps. Higher is cleaner, but makes generating take longer.
               audio_length_in_s=4.0        # The length of the generated audio. Default is 5, but for a one-shot sfx, you don’t need more than 3-4 seconds. This will also speed up generation on CPUs.
               num_waveforms_per_prompt=1,  # How many files to generate.
               guidance_scale = 3,          # How much to conform to your prompt. Higher is more accurate, but introduces more noise.
               #negative_prompt="music"     # Elements you want to avoid in the resulting sound.
              ).audios[0]
  </code>
</pre>

Results were mixed. For a sound to be usable as is in a video game, it will more often than not need to be isolated, meaning no background noise or overlapping sounds. Some prompts gave me multiple sounds of the same type layered on top of each other:

<figure>
  <audio controls>
    <source src="	https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2023_04_25_olivegr_ai_sfx_hammer_2.mp3" type="audio/mpeg">
    Alternate Text
  </audio>
  <figcaption>Prompt: "hammering a nail into wood"</figcaption>
</figure>

Others contained nothing but noise:

<figure>
  <audio controls>
    <source src="	https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2023_04_25_olivegr_ai_sfx_construction.mp3" type="audio/mpeg">
    Alternate Text
  </audio>
  <figcaption>Prompt: "high quality construction site sfx, slight compression"</figcaption>
</figure>

This was mostly the case for “imaginary” sounds with no real-world references, like a dragon. I can imagine the data set for dragon sounds is comparatively quite small.

<figure>
  <audio controls>
    <source src="	https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2023_04_25_olivegr_ai_sfx_dragon.mp3" type="audio/mpeg">
    Alternate Text
  </audio>
  <figcaption>Prompt: "a big dragon's roar"</figcaption>
</figure>

On the other hand, many of the foley-like sounds were as clean as I could ever have hoped for. Each sound took 3-4 minutes to generate on the CPU, and mere seconds on my GPU after additional testing.

<figure>
  <audio controls>
    <source src="	https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2023_04_25_olivegr_ai_sfx_hammer_cinematic.mp3" type="audio/mpeg">
    Alternate Text
  </audio>
  <figcaption>Prompt: "a nail being hammered into wood"</figcaption>
</figure>

Adding the word "cinematic" to the prompt generated similar sounds, but with more bass.

<figure>
  <audio controls>
    <source src="	https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2023_04_25_olivegr_ai_sfx_hammer.mp3" type="audio/mpeg">
    Alternate Text
  </audio>
  <figcaption>Prompt: "cinematic hammering a nail into wood"</figcaption>
</figure>

The model seems either somewhat biased toward music, or infer some musical meaning from certain adjectives. By this I mean that no prompts for music generated sound effects, but 2-3% of prompts for non-musical sounds generated synthesized chords, even with a negative “music” prompt.

<figure>
  <audio controls>
    <source src="	https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2023_04_25_olivegr_ai_sfx_footstep.mp3" type="audio/mpeg">
    Alternate Text
  </audio>
  <figcaption>Prompt: "footstep in wet sand"</figcaption>
</figure>

More can probably be done to avoid generating music-like content, but I figured it wasn’t worth spending time on. I simply discarded any files with musical content, but who knows, maybe you discover some new sounds you like.

Asking for 90s video game sounds provided some interesting results. I specified 90s, because the style at the time was limited by hardware but a lot of pre-processing could be done to make sounds more expressive, like crazy pitch envelopes. AudioLDM is capable of making abstract sound effects equally expressive.

<figure>
  <audio controls>
    <source src="	https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2023_04_25_olivegr_ai_sfx_vgs.mp3" type="audio/mpeg">
    Alternate Text
  </audio>
  <figcaption>Prompt: "90s video game sound effect"</figcaption>
</figure>

# Sacred Gems
One of my current projects is designing sound and music for a 2D bullet hell game called Sacred Gems. Aesthetically, it takes a lot of inspiration from 80’s anime and we wanted similar elements to be featured in the soundscape. Since some of the sounds can be a bit noisy, and as far as I can tell the pipeline is fixed to a sample rate of 16kHz, it is likely that many sounds generated using this technique can be used as source material for the game.

To speed up the process, I generated 50 text prompts with ChatGPT which were in turn used to generate audio. The prompts followed our internal sound direction guidelines. This process took about 5 minutes on a GPU, saving a lot of time I would otherwise have to spend getting source material.

2 of the files contained musical elements and were discarded. 3 files contained excessive noise and were also discarded.

<figure style="float: none">
  <audio controls>
    <source src="	https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2023_04_25_olivegr_ai_sfx_water_1.mp3" type="audio/mpeg">
    Alternate Text
  </audio>
  <audio controls>
    <source src="	https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2023_04_25_olivegr_ai_sfx_water_2.mp3" type="audio/mpeg">
    Alternate Text
  </audio>
  <audio controls>
    <source src="	https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2023_04_25_olivegr_ai_sfx_water_3.mp3" type="audio/mpeg">
    Alternate Text
  </audio>
  <figcaption>AI Generated Water Effects</figcaption>
</figure>

To hear the final results of this process, follow the development of Sacred Gems on the official development [Discord](discord.gg/hGx6qxKMD3) server and wishlist the game on [Steam](https://store.steampowered.com/app/1739260/Sacred_Gems/)!

<figure style="float: none">
   <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_04_25_olivegr_sg.gif"  width="auto" />
</figure>

# Will AI Take Your Sound Design Gig?
As it stands, I will occasionally be using AudioLDM to generate source material for designs. While text-to-audio is not quite ready to replace current workflows, it is only a matter of time. That said, these tools can still save you time. If you know what kind of frequency content you need for a design, but are not picky about what the sound containing those frequencies actually is, then this is a solid method to get what you need quickly.

The implication of being able to generate sounds quickly is that your soundscapes will never become repetitive. New files could be generated upon loading the game, or even a new level. While this thought is currently a novel one, it is the direction we are heading in. As audio directors, composers, and sound designers, we should prepare to work with emerging tools and find ways to control them to provide better services for our clients faster.

# Video Exploration

<iframe width="560" height="315" src="https://www.youtube.com/embed/cgowAgbLTfk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

If you want to see more exploration of the model in real time, check out the video above or follow [this link](https://youtu.be/cgowAgbLTfk)!
