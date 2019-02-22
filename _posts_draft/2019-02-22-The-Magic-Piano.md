---
layout: post
title: "The Magic Piano"
date: 2019-02-19 13:00:00 +0200
categories: Audio-Programming
author: Jørgen Nygård Varpe, Ashane Silva, Guy Sion
image: /assets/img/magicpiano.PNG   
excerpt: "During our second week learning about Audio programing and web Audio API we were divided into groups and had to come up with an idea for a final project. The main challenges were to find an idea that is doable within 4 days, to code collaboratively and to prepare for the presentation of our project. Guy had an Idea for building a piano keyboard that will help beginners play a simple melody and Ashane and Jørgen agreed to collaborate and join forces in creating ‘The Magic Piano’."
Keywords: Web Audio API, JavaScript, Tone.js, CSS, NexusUI, JSON, Piano, Education
---

# The Magic Piano

During our second week learning about Audio programing and web Audio API we were divided into groups and had to come up with an idea for a final project. The main challenges were to find an idea that is doable within 4 days, to code collaboratively and to prepare for the presentation of our project. Guy had an Idea for building a piano keyboard that will help beginners play a simple melody and Ashane and Jørgen agreed to collaborate and join forces in creating ‘The Magic Piano’.

## The Idea

Guy: I was inspired by my daughter's attraction to music when I came up with the Idea for the magic piano. I remember asking her to play a melody on the piano for a song she knows well and can sing in pitch. My daughter do not know how to play the piano, but when she tried to perform the task she managed to play the right melodic rhythm (but with the wrong notes). That sparked the idea for creating a piano that will play the right notes of the chosen melody regardless if the player hits the right or wrong keynote.

## Why Web Audio API?

Building the Magic Piano in Web Audio API has several advantages that fit our purpose. The application is available for anyone with internet access, there is no need for installation and no dependence on specific operating system. All you need is a web browser, speakers and a midi controller to start playing with it. After a short discussion, we came up with additional features that we would like to implement:
- Choosing a song from a scroll down menu.
- Adding a simple player with Play and Stop buttons to hear the melody.
- Highlighted piano keys showing the next correct note of the song.
- Having the option to scale the app for various screen sizes.

**** Timeline figure (fix and insert here) ****

## Developing The Magic Piano

### Midi Messages 

As this project was to be developed using web technologies, we wanted to use some libraries to make the build process easier and faster. We decided to use NexusUI’s (https://nexus-js.github.io/ui/api/#Piano) piano keyboard interface, and the framework Tone.js to generate sound. We knew we wanted to trigger sound using a MIDI-keyboard, and luckily for us, our teacher Anna Xambó had already provided us with a javaScript code snippet which accepts MIDI-data. We could then create a function which handled this data, to be used for triggering a note of a melody. (remove? I will come back to this functionality later in the blog.)

***ENTER ANNA'S CODE SNIPPET HERE***

### The Melody Player

Before adding a function which would play through a melody with each piano keystrokes, we branched out from the main idea, to start developing the functionality of playing through a melody using a start and stop buttons. Adding the player function would give the user the possibility to listen to the song before playing it by themselfs. This feature would be very helpfull for beginners who are not familier with the song or would just like to refreash their memory.

### From Midi To JSON

As we were going to use the same melody for playback as well as for the user interaction, we first came up with an idea to play through a MIDI-file. It ended up being challenging getting javaScript to handle MIDI-data. We tried to implement a library called MidiPlayerJS to get it to work, but the library itself seemed to have some fault, preventing it from working. 

As JSON (JavaScript Object Notation) is a file format used for storing and transporting text data (https://www.w3schools.com/whatis/whatis_json.asp), and we knew it was easy to handle for javaScript, we started looking for ways to convert MIDI-files to JSON-files. It didn’t take long before we found an easy way to convert, using a website called https://www.visipiano.com/midi-to-json-converter/. Using Ableton, Guy created the midi files for the two songs we were about to use (ABCD and Allefugler). The only thing we had to do, was to drag it into this website, and then download it as a JSON-file, ready for implementation.

### Extracting JSON Data

The code below shows 32 of 321 lines of the JSON-file containing all the data needed for playing the ABCD-song. The syntax is identical to javaScript code for creating objects, which makes it easy for javaScript to work with. The file is constructed in an object, with more nested objects, where every object has key-value pairs. From line 18 you can see the key called “notes”, which has an array of all the note information of the melody as its value.

    //{
    "header": {
      "PPQ": 96,
      "timeSignature": [
        4,
        4
      ],
      "bpm": 120,
      "name": "ABCD"
    },
    "startTime": 0,
    "duration": 24,
    "tracks": [
      {
        "startTime": 0,
        "duration": 24,
        "length": 42,
        "notes": [
          {
            "name": "C5",
            "midi": 72,
            "time": 0,
            "velocity": 0.7952755905511811,
            "duration": 0.5
          },
          {
            "name": "C5",
            "midi": 72,
            "time": 0.5,
            "velocity": 0.7952755905511811,
            "duration": 0.5
          },

The code below shows how the JSON-files are retrieved with an XMLHttpRequest, and parsed into a javaScript object. We’ve chosen to loop through the notes, and put the MIDI-values, note names, note durations and start time of each note to arrays. We did this to make the workflow later in the process “easier”. On the first line, you can see that we build the url based on “songSelect.value”, and this value is chosen by the user with a dropdown-menu.

    // url = "sounds/AlleFugler.json";
      var ourRequest = new XMLHttpRequest();
      ourRequest.open('GET', url);
      ourRequest.onload = function(){
      var songChoice = JSON.parse(ourRequest.responseText);          
      for(var i = 0; i < songChoice.tracks[0].notes.length; i++){    midiNotes[i] =  songChoice.tracks[0].notes[i].midi;            noteNames[i] =  songChoice.tracks[0].notes[i].name;
      noteDurations[i] =  songChoice.tracks[0].notes[i].duration;
      noteStart[i] =  songChoice.tracks[0].notes[i].time;
      }
      piano.toggleKey(midiNotes[currentNoteIndex], 0); //Toggling color of first key to be pressed, to show user where to begin
      };
      ourRequest.send();

### The Dropdown Menu and the Melody Player

The dropdown-menu was made by using the NexusUI library with this function:

    //var songSelect = new Nexus.Select('song',{  
    'size': [200,30],
    'options': ['AlleFugler','ABCD'] //List of sounds to chose from
    });

    songSelect.size = [200,30];
    songSelect.colorize("accent","#ffd106");
    songSelect.colorize("fill","#ffd106");

The code below shows the function for playing back the melody to the user when the user press the play-button. We receive the arrays made from the chosen JSON-file and loop through them, making several instances of  “synth.triggerAttackRelease”, which is a method from the Tone.js library, to trigger a synth.

    //function PlayMelody(midiNotes, noteNames, noteDurations, noteStart){              
    var currentNoteIndex2 = 0;  // Start from 0 each time PlayMelody is called

The synth which is triggered is defined as you can see in the picture below.

    //synth = new Tone.Synth({
            oscillator: {
              type: 'sine',
            },
            envelope: {
              attack: 0.001,
              decay: 0.8,
              sustain: 0.2,
              release: 0.1
            }

Having the function this way caused a problem with the melody not starting at the beginning every time we pressed the play-button. This is because the audio context clock starts when the page loads, and when we say with our “noteStart” array that the first note should start at 0 time, 0 has already past. We made an attempt to offset the melody with “now = context.currentTime”, but this did not work. (We will come back to how we fixed this, later.)

### Melody Triggering With MIDI Input

Triggering the melody with each MIDI keypress was a bit easier than playing it back, since we did not have to account for the clock. As you can see in the code below, it is done in a similar fashion, but here it was important to make it loop. That is why you can see that the “(currentNoteIndex + 1) % noteNames.length”. Using modulo (%), it will go back to index 0 when it has counted to the length of the array (ex 42%42 = 0). One more addition, is the “piano.toggleKey” which lights up the next key to be played on the piano.

    //function onMIDIMessage(message) {
    data = message.data; // this gives us our [command/channel, note, velocity] data.
    if(data[0] != 254){
        //console.log('MIDI data', data); // MIDI data [144, 63, 73]
        if(data[0] === 144 && weLikeItMono == true){    //Preventing multiple key presses with weLikeItMono
            TriggerMelody(midiNotes, noteNames, noteDurations);
            weLikeItMono = false;
        }
        if(data[0] == 128){
            weLikeItMono = true;
            removeColor(midiNotes); //Remove color of keyboard when note off message comes
        }
      }
    }

Here you can also see how we are running the TriggerMelody-function on each piano keypress (144 means “on”, 128 means “off”), and running removeColor on key release, which is a function we made to toggle the color off. We had a problem with our TriggerMelody-function being triggered by multiple simultaneous key presses, but we later removed this by adding a boolean called “weLikeItMono”. Then a note-off message have to come before another note-on comes.

### Bug fixes

As you can see below, there had to be done some changes to make the playback-function better. We chose to use a scheduler method from the Tone.js library, called “Transport”. This abstracts away audio context time, and makes it possible for us to always start at 0. “Tone.Transport.scheduleOnce(play, noteStart[i])” triggers the function “play” on each value of “noteStart[i]”. This made the melodies playback nicely...most of the time. There is a bug somewhere, sometimes making the notes play in the wrong order. If you refresh the website and try again, it is gone. We don’t know why, but that will be continued research. It at least works most of the time!

This solution makes it possible to start the song again when it is finished, without having to press the stop-button first. The code for the start - and stop buttons are at the end of the “app.js” script in the repository. Please have a look at the code if you want to see how it all fits together. We’ve commented most parts of the code to make it more understandable.

    // function PlayMelody(midiNotes, noteNames, noteDurations, noteStart){              
    var currentNoteIndex2 = 0;  // Start from 0 each time PlayMelody is called

    for(var i = 0; i < noteNames.length; i++){
        Tone.Transport.scheduleOnce(play, noteStart[i]);    //Using Tone scheduler to trigger the function "play" on the times from chosen song
    }
    Tone.Transport.start();                                 //Abstracting away audioContext time, and always playing from when Tone Transport is played
    Tone.Transport.bpm.value = 120;

    function play(time){
        synth.triggerAttackRelease(noteNames[currentNoteIndex2], noteDurations[currentNoteIndex2], time); 
        currentNoteIndex2 = (currentNoteIndex2 + 1) % noteNames.length;
        if(currentNoteIndex2 == 0){                                         //This is for making it possible to press play after song is finished, not having to press "stop" first
            Tone.Transport.stop();
            Tone.Transport.cancel();
            connect = false;
            playing = false;
        }
      }
    }

## Future Development

- Fix the bug that sometimes causes the melody to not play in correct sequence.
- Fix the bug that causes clicks on “Alle Fugler”.
- Improve web usability:
  1. Add option for changing between different languages.
  2. Make it more intuitive to use.
  3. Improve scalability to different devices/screen sizes.
- Add possibility to play on the graphical piano by click or touch (as suggested to us during the Q&A session Alexander Refsum Jensenius).
- Add additional songs to the library.
- Add functionality for the user (or parent/teacher of the user) to upload own JSON-file with a melody. (Thanks to Anna Xambó for the suggestion). Since there are more websites with MIDI-files, like https://bitmidi.com/, we should let the user upload a MIDI-file. This will requair adding a script that converts Midi files to JSON.
- Add different instrument sounds (currently just a sine wave oscillator).
- Add function where user gets notified if they press the wrong note (as suggested by Anna Xambó)
- Add notification popups if user presses correct notes many times in a row, to giving support and motivation.
- Optional scoring system, where the user gets a score overview when done playing ( example: 30 of 42 notes correct).

## The Workflow

We worked in a collaborative way where we share screens with each other and work on the same document and files. We set up the VS Live Share to view the same code in real time and to discuss the code. We used Github for sharing the code among us when we worked offline. We used zoom to communicate and share screen.

Jørgen Nygård Varpe - Collaborative Coding, UI Design, Troubleshooting.<br/>
Ashane Silva - Collaborative  Coding, UI Design, Troubleshooting.<br/>
Guy Sion - Collaborative  Coding, Max/MSP Demo, Midi Files, Troubleshooting.



## User Demonstarion Of The Magic Piano

<iframe width="560" height="315" src="https://www.youtube.com/embed/PxpBCNSr_Tg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>




