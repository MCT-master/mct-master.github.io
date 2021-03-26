---
layout: post
title: "Growing Monoliths Discovered On Mars"
date: 2021-03-26 16:00:00 +0200
categories: sonification
author: Henrik Sveen, Stephen Gardener, Pedro Lucas
image: /assets/image/2021_03_25_henrikhs_marsgame.jpg
keywords: sonification, mars, game, unity, python, osc, maxmsp
excerpt: "Mars is a hot topic these days, and weather seems to always be a hot topic too. So how about making a project with both? We ended up gamifying the weather on Mars by discovering the musical potential it may have."
---
<figure style="float: auto">
   <img src="/assets/image/2021_03_25_henrikhs_marsgame.jpg" alt="" title="he really knows how to work that axe" width="auto"/> <figcaption></figcaption>
</figure>

#### The Idea
A lot of things is sonificationable, which maybe is both the beauty and the beast when dealing with sonification. After a brainstorming session our group quickly landed on Mars as a topic for our sonification project. It has this spacious timeless mysteriousness to it and is highly relevant as research is being carried out more than ever before. So what to sonify? Weather of course. We humans love weather, whether it’s bad or good, doesn’t matter. We simply love it. But once we’ve talked about the weather here on earth, what more should we talk about? Yes, exactly, the weather on Mars. Mars has weather too and we were eager to work with the sonification of it.

#### Roles and Contribution
A team benefit we had is our individual strengths in programming. We quickly landed tasks for each member. Pedro has experience with game programming and development, so it made sense assigning that task to him. Stephen was chosen as backend developer due to his strong capabilities in computer programming, whereas Henrik was chosen to do the sound engine working with Max/MSP and sound synthesis. This distribution felt good and we were confident that this would provide us solid ground for executing the project. Finally, we all worked together on the sonification itself, deciding how the martian weather data would be interpreted and how the game mechanics would influence the audio and music.

#### The Process
So the first thing we needed was some weather data. Weather isn’t updated as frequent on Mars, so after going through some datasets we finally found what we were looking for. A daily weather datasheet. The data will always be one week old, as NASA wants to keep that as a secret buffer. So not much to do about that. The dataset has, among other values, temperature, pressure and radiation as some key factors, which we thought could be nice to work with.
So how to work them? With sonification projects we often find that you as a «user» find the sonification and you experience it in a passive setting. We felt like there was some potential here and started to talk about games as sonification tool. Our idea became to sonify the user’s interaction with the dataset via a game, adding another layer of sonification on top of the dataset. The weather on Mars being updated on a daily basis means that there is a limited number of values for each variable. Having the game, we then saw an opportunity in designing the game as changing the weather on Mars in different directions, which again will result in new music coming out of the data. A strange feedback loop with the user at centre.

#### The Data
It made sense to use Python to parse and manage the Martian weather data, as well as to handle communication between the Unity game engine and Max/MSP.
Communication was set up using Open Sound Control (OSC), with the script acting as both a OSC client and server. The script steps through the daily (or sol-y - the Martian day is called a Sol) weather data that has been compiled into a JSON file, adjusts it based on in-game actions, and then sends that data out to Max and Unity. Talking of in-game actions, what is this game actually about?

#### The Game
The game is a driving based game. The scenery is of course Mars. You’re driving the Preservance Rover on the planet, discovering it. Out of the blue monoliths are starting to pop up and you have to drive into them to explore and discover the secrets of the monoliths. Driving into the monolith breaks it, and based on the size it will have an effect on which way (better or worse) the weather is changed towards, the music playing based on weather and impact collision and also some damage to the vehicle. Greater monoliths earn you more damage, but obviously also more points. And don’t worry, as you drive on Mars you will discover health packs. Breaking small monoliths will improve weather while big monoliths make it worse. In nice weather the pressure is higher, so the monoliths will grow slower. This will give you many small slow growing monoliths that don’t give you much points, so it gets harder and harder to avoid them as you wanna keep them growing so you can hit the big ones for real point gathering. The other way around when the monoliths grow big they will become dangerous and you will have to navigate around them so you don’t destroy the vehicle in the chase for discovering smaller monoliths that will make the weather better and the monoliths smaller again. When the monoliths reach maximum height, they become so dangerous that they will knock you out in one hit, so you would want to knock them down before that happens. It’s a game of balancing the climate and not being greedy for points as you at the same time don’t want to go too safe only hitting the small ones. In a way a metaphor to what’s going on with the climate on planet Earth too.

#### Game Development

The game was developed in the **Unity** game engine and uses a portion of code from the game [Shrinking Planet](https://ldjam.com/events/ludum-dare/38/shrinking-planet), which was implemented in the *Ludum Dare* game jam. The referenced code is intended to move an object around an sphere. From that base, we implemented the mechanics related to the gameplay described before involving the interaction between the Python and the Max/MSP modules through OSC messages (an open source library for OSC in Unity can be found [here](https://thomasfredericks.github.io/UnityOSC/)). Besides these interactions, the game reacts visually to the influence of the weather by using three parameters: *Weather*, *Pressure*, and *Radiation*. The *weather* parameter allows to set the environment to a hot, moderate, or cold state, which changes the color for the space background and the planet surface; the *pressure* modify a 'dizziness' visual effect in the whole rendering; and the *radiation* changes the intensity of three directional lights that points towards the planet.

The game goal was set to earn score points and try to avoid losing life amount. This data is shown in an interface on top of the screen. When the player dies, an interface covering the whole screen is presented to inform the user that he or she has lost and require to start a new game. Also, the current weather state is shown all the time in the top-center of the screen.

In the next section we will explain the work behind the audio, which is partially reproduced in Unity for specific sound effects such as a monolith hit, health pack, game status (new game or game over) and the car engine. Some little audio manipulation and triggering logic was develop in this case. For the car engine, the sample is looped infinitely and changed in pitch when the player increases or decreases the speed, also the panning changes when the car turns left or right. The monolith hit is played according to the height of the object that is hit and the sample to play is chosen randomly from a pool of similar sounds with little variations in order to avoid a monotonous sound landscape. In a similar way, the health pack sound is slightly changed in pitch and volume for give variation to the gameplay.

We used third-party elements to enrich the visuals of the game which can be found in the following list:

* [Shrinking Planet: Source Code](https://ldjam.com/events/ludum-dare/38/shrinking-planet)
* [UnityOSC](https://thomasfredericks.github.io/UnityOSC/)
* [Mars Perseverance Rover, 3D Model](https://mars.nasa.gov/resources/25042/mars-perseverance-rover-3d-model/)
* [Mars Planet, 3D Model](https://sketchfab.com/3d-models/mars-7b14d8d8a5b94626a4b2a8a4455297d6)
* [Monolith, 3D Model](https://sketchfab.com/3d-models/monolith-2-go-c461bc7581064db597e8988829c2f5b4)
* [Unity Skyboxes](https://assetstore.unity.com/packages/2d/textures-materials/sky/skybox-series-free-103633)

#### The Music
Almost all audio is synthesized using Max/MSP. Before making the actual music we started with synthesizing the sound of Mars. The week before we started working on the project NASA released the first recordings of sound on Mars. This «noise» was something that could be synthesized. The benefit of synthesizing it rather than using the recording is the general feeling over time, as the synthesized noise will never repeat itself like a looped noise recording. It’s also easier to synthesize it in stereo rather than using the mono recording from Mars, so in general it feels a little more immersive and nice.
The music is generated from weather data. There are three different modes for weather - cold, moderate and hot. This acts as a quantification controlling the range of different parameters in the patcher where sound is being generated. Cold weather has a +1 octave more «ice-bell-ish» sound to it and the reverb is also more lush and with higher frequencies. For moderate the synth sound is warmer as well as original octave and the reverb moves into hybrid delay fields while also getting lower damping. For the hot mode the synth sound is very warm, -1 octave and the reverb is more in a delay state with low dampening. For the modes vibrato is also affected, cold mode has a fast and firm vibrato, moderate slightly looser and warm mode has a slower and wobbly vibrato. There are different musical scales for the modes as well. Cold has a minor scale, moderate is pentatonic while warm goes to major scale. All of these variable changes for the modes are based on knowledge we’ve gotten through the studies of metaphors, entrainment and verticality during MCT. We wanted to solve the musical mapping in such a way to make it feel natural and intuitive to the user, so music makes sense and the sonification has a communicative purpose.
When you discover a monolith there is a nudge happening in the delay time based on the size of the monolith. Bigger monoliths make a bigger impact than the smaller ones, and this is to create some direct interaction, with the impact of hitting something, within the music. It also creates some lucky musical accidents and makes the music less static.
All sounds in the game are synthesized, except the sound of the vehicle engine which is sampled from a recording of the real Preservance driving on Mars. We thought it was cool to include an actual recording from Mars in the game, and surprisingly the tone of the engine fits with the harmonic content in the music. The recording was released the same week as we were doing the project, so it felt like it was meant to be. Sound FX are synthesized so everything lives within the same soundscape. Synthesizing the monolith-impact we took inspiration from the introduction lecture in the coarse where when students were to describe a sound. We had to think of what an impact would sound like and how we could synthesize the smashed rocks falling from being smashed in the impact. The method we used was applying a lot of overdrive, amplitude modulation in stereo phase and filtering in different stages, all triggered by the same signal.

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1vmyyG7EgzgDUkez065bWCvcGMj31gBsU" type="audio/mpeg">
    Should show a media player
  </audio>
  <figcaption>7 levels of monolith smashing</figcaption>
</figure>

The sound for collecting health pack is inspired by classic retro games - a short very positive melody giving you a positive shot of energy when collecting something.

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1V9rWKE8IChIymt7WN5kOTB0gFHAW-x9c" type="audio/mpeg">
    Should show a media player
  </audio>
  <figcaption>Health Pack</figcaption>
</figure>

The «start game» and «game over» over melody lines are referring to ***2001: A Space Odyssey*** by using ***An der schönen, blauen Donau*** by J. Strauss as the base for the melody. The whole game itself kind of refers to that movie with the mystical space thematics and the monoliths, or should we say monoliths, occurring on an undiscovered planet. When you start the game it has a major scale snippet playing, and a classic minor scale variation in a slower tempo for the game over version. The fast major one is used at the start to motivate you, and the slow minor one at the end shows compassion with the user loosing the game. They are all based on a simple sine wave synth to fit well with the music playing in the game.

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1NvAdejyepvAuEp6Dm5z77RyBiQrBYjtj" type="audio/mpeg">
    Should show a media player
  </audio>
  <figcaption>New Game</figcaption>
</figure>

<figure style="float: none">
  <audio controls>
    <source src="https://drive.google.com/uc?&id=1K_-pLMFmKWmj1LLBzcxa2Fwz28pCmrBr" type="audio/mpeg">
    Should show a media player
  </audio>
  <figcaption>Game Over</figcaption>
</figure>

#### Demonstration Video

<figure style="float: none">
   <iframe src="https://drive.google.com/file/d/1ESr6EUC88-UNGb7XdT8s-tu6AKuyoP2s/preview" width="1024" height="576" frameborder="0" allowfullscreen></iframe>
   <figcaption>Gameplay Demonstration</figcaption>
</figure>

#### End Note
Working on a project like this has been slightly different than other technical tasks we’ve done in MCT. We ended up using a lot of time actually figuring out what the game should be like to make the most sense, and the same thing goes for figuring out what the audio was going to be like. These parts took a while probably because there are so many possibilities and going through many revisions of ideas and evaluating them is a tedious process. But we feel like we got there in the end. We were all able to use our own skills in the project. Pedro did some excellent game programming and sew it all together, Stephen treated datasets crushed the numbers and Henrik got to play around with synthesis and build a sound engine. Small details ended up being the hardest part, but in retrospect we’re happy we took time to fix them.
ABOUT PLAYING THE GAME
IMPROVEMENTS FOR FUTURE
