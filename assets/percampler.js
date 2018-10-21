// Original code supplied by Anna Xambó

// Digital sampler of the Percampler of Group B. Load your own sounds!


var sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8;
var isLooping;
var isRev;
var bgvalue = 0;
var toggle_idx;
var pitch = [131, 139, 147, 156, 165, 175, 185, 196, 208, 220, 233, 247, 262];
// var pitch = [65, 69, 73, 78, 82, 87, 92, 98, 104, 110, 117, 123, 131];
var drone_idx = 0;

function preload(){
  // load sound here
  //sound1 = loadSound("sounds/Drop Coin.ogg", loaded);
  //sound2 = loadSound("sounds/psi_35.ogg", loaded);
  //sound3 = loadSound("sounds/SFX_Jump_10.ogg", loaded);
  //sound4 = loadSound("sounds/Synth Bass 016.ogg", loaded);
  sound1 = loadSound("sounds/copymachine.mp3", loaded);
  sound2 = loadSound("sounds/pianobody.mp3", loaded);
  sound3 = loadSound("sounds/pianoextra.mp3", loaded);
  sound4 = loadSound("sounds/pianolow.mp3", loaded);
  
  sound5 = loadSound("sounds/Headphone howl.wav", loaded);
  sound6 = loadSound("sounds/Jack noise from imac.wav", loaded);
  sound7 = loadSound("sounds/Piezo tapping.wav", loaded);
  sound8 = loadSound("sounds/Voice grinder.wav", loaded);
  sounds = [sound1, sound2, sound3, sound4, sound5, sound6, sound7,sound8]; 
  drones = [sound5, sound6, sound1, sound8];
}
function setup(){
  createCanvas(400, 400);
}
function draw(){
  background(bgvalue);
}
// FX
function setup() {
    // Reverb:
reverb = new p5.Reverb();
// Reverb time in second,  decayRate in percentage
RT = 4; decay = 2;     
    // Delay:
delay = new p5.Delay();
// delay.process() accepts 4 parameters:
// source, delayTime, feedback, filter frequency
delay_time = 0; feedback = 0.7; filter_freq = 3300;
}
function loaded() {
  console.log("loaded");
  sound7.playMode('restart');
  sound2.playMode('restart');
  sound3.playMode('restart');
  sound4.playMode('restart');

  sound1.playMode('sustain');
  sound5.playMode('sustain');
  sound6.playMode('sustain');
  sound8.playMode('sustain');
  isLooping = 0;
  isRev = 0;
  isSustain = 0;
  toggle_idx = 0;
}
function keyPressed() {
// Adjustable FX:
    if (keyCode == 90) { 
        delay_time = delay_time - 0.2;
        if (delay_time < 0){
            delay_time = 0;
        }
        console.log("Delay time ", delay_time);
    } else if (keyCode == 88){
        delay_time = delay_time + 0.2;
        if (delay_time > 0.99){
            delay_time = 0.99;
        }
        console.log("Delay time ", delay_time);
// Loop sounds:
    } else if (keyCode == 76){ // l
        if (isLooping == 0){
            for (var I = 0; I<8; I++){
                var s_loop = sounds[I];
                s_loop.setLoop(true);
            }
            console.log("loop on");
            isLooping = 1;
        } else if (isLooping == 1) {
            for (var I = 0; I<8; I++){
                var s_loop = sounds[I];
                s_loop.setLoop(false);
            }
            console.log("loop off");
            isLooping = 0;
    }
// Reverse play
    } else if (keyCode == 82) { // r
        if (isRev == 0){
            for (var J = 0; J<4; J++){
                var s_rev = sounds[J];
                s_rev.rate(-1);
            }
            console.log("Reverse On");
            isRev = 1;
    } else if (isRev == 1){
        for (var J = 0; J<4; J++){
            var s_rev = sounds[J];
            s_rev.rate(+1);
        }
        console.log("Reverse Off");
        isRev = 0;
    }
// Keyboard:
    } else if (keyCode == 65){ // a
        drones[drone_idx].rate(pitch[0]/104);
        drones[drone_idx].play();
    } else if (keyCode == 87){ // w
        drones[drone_idx].rate(pitch[1]/104);
        drones[drone_idx].play();
    } else if (keyCode == 83){ // s
        drones[drone_idx].rate(pitch[2]/104);
        drones[drone_idx].play();
    } else if (keyCode == 69){ // e
        drones[drone_idx].rate(pitch[3]/104);
        drones[drone_idx].play();            
    } else if (keyCode == 68){ // d
        drones[drone_idx].rate(pitch[4]/104);
        drones[drone_idx].play();
    } else if (keyCode == 70){ // f
        drones[drone_idx].rate(pitch[5]/104);
        drones[drone_idx].play();        
    } else if (keyCode == 84){ // t
        drones[drone_idx].rate(pitch[6]/104);
        drones[drone_idx].play();     
    } else if (keyCode == 71){ // g
        drones[drone_idx].rate(pitch[7]/104);
        drones[drone_idx].play();  
    } else if (keyCode == 89){ // y
        drones[drone_idx].rate(pitch[8]/104);
        drones[drone_idx].play();  
    } else if (keyCode == 72){ // h
        drones[drone_idx].rate(pitch[9]/104);
        drones[drone_idx].play();  
    } else if (keyCode == 85){ // u
        drones[drone_idx].rate(pitch[10]/104);
        drones[drone_idx].play();
    } else if (keyCode == 74){ // j
        drones[drone_idx].rate(pitch[11]/104);
        drones[drone_idx].play();
    } else if (keyCode == 75){ // k
        drones[drone_idx].rate(pitch[12]/104);
        drones[drone_idx].play();
// PERCUSSIVE SOUNDS
    } else if (keyCode == 49) {
        console.log("1");
        delay.process(sound7, delay_time, feedback, filter_freq);
        sound7.play();
        bgvalue = random(1, 255);
    } else if (keyCode == 50) {
        console.log("2");
        delay.process(sound2, delay_time, feedback, filter_freq);
        sound2.play();
        bgvalue = random(1, 255);
    } else if (keyCode == 51) {
        console.log("3");
        // reverb.process(sound3, 2, 2);
        delay.process(sound3, delay_time, feedback, filter_freq);
        sound3.play();
        bgvalue = random(1, 255);
    } else if (keyCode == 52) {
        console.log("4");
        delay.process(sound4, delay_time, feedback, filter_freq);
        sound4.play();
        bgvalue = random(1, 255);                
// DRONE SOUNDS
    } else if (keyCode === UP_ARROW) {
        console.log("UP arrow");
        reverb.process(sound5, RT, decay);
        drone_idx = 0;
        bgvalue = [random(1, 255), random(1,255), random(1,255)];
  } else if (keyCode === DOWN_ARROW) {
        console.log("DOWN arrow");
        reverb.process(sound6, RT, decay);
        drone_idx = 1;
        bgvalue = [random(1, 255), random(1,255), random(1,255)];
  } else if (keyCode == LEFT_ARROW) {
        console.log("LEFT arrow");
        sound1.disconnect();
        reverb.process(sound1, RT, decay);
        drone_idx = 2;
        bgvalue = [random(1, 255), random(1,255), random(1,255)];
  } else if (keyCode == RIGHT_ARROW) {
        console.log("RIGHT arrow");
        reverb.process(sound8, RT, decay);
        drone_idx = 3;
        bgvalue = [random(1, 255), random(1,255), random(1,255)];
  }
}
