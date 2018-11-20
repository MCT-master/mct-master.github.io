<Cabbage>
form size(500, 300), caption("ContraInstrument"), pluginID("Instrument2")

rslider channel("Vibrato2"), bounds(30, 10, 90, 90), text("Vibrato2"), range(0, 1, 0)
rslider channel("Filter2"), bounds(130, 10, 90, 90), text("Filter2"), range(0, 1, 0)
rslider channel("Reverb2"), bounds(230, 10, 90, 90), text("Reverb2"), range(0, 1, 0)
rslider channel("Drive2"), bounds(330, 10, 90, 90), text("Drive2"), range(0, 1, 0)


</Cabbage>
<CsoundSynthesizer>
<CsOptions>
-n -d -+rtmidi=NULL -M0
</CsOptions>
<CsInstruments>

ksmps = 1
nchnls = 2
0dbfs = 1

;massign 1,1 

/*
Things to add:

ADSR (especially a release tail after letting go of MIDI-notes.
Make sure that chords don't get too loud i.e. balance the polyphony to (somewhat) match the monophonic signal.

*/

instr 1

; audio input
a1 inch 1

/*

;Sliders/knobs used on the Novation Bass Station controller:

;Slider name:	Attack		Decay		Sustain		Release		Distorition	Osc Filter Mod
;MIDI channel:	90		91		92		93		94		115

;Control faders/knobs:
kControl_Mod ctrl7 1, 1, 0, 1	;Modweel	- vibrato

kControl_1 ctrl7 1, 90, 0, 1	;Attack slider	- filter
kControl_2 ctrl7 1, 91, 0, 1	;Decay slider	- reverb
kControl_3 ctrl7 1, 92, 0, 1
kControl_4 ctrl7 1, 93, 0, 1

kControl1_5 ctrl7 1, 94, 0, 1
kControl1_6 ctrl7 1, 115, 0, 1

*/


;Get parameter value from GUI;
kControl_Mod chnget "Vibrato2"
kControl_1 chnget "Filter2"
kControl_2 chnget "Reverb2"
kDrive chnget "Drive2"

kcps cpsmidib

;Envelope:
;		A	D	S	R
kEnv	madsr	0.01,	0,	1,	1.5

; Vibrato:

kVibAmp = kControl_Mod * 0.05
kVibFreq = kControl_Mod * 8

aVib poscil kVibAmp, kVibFreq
aVibAdj = aVib + 1

;Waveguide string:
ifeed = 0.995
;a1, a2 ins
apick = a1 ;+a2
afeed init 0
ain = apick+afeed
adel vdelayx ain, (1/(kcps)) * aVibAdj, 1, 4

; insert other filters in the feedbackloop here

kcutoff tonek (kControl_1*kControl_1*12000)+80, 20

afilt butterlp adel, kcutoff

; saturation

afilt = tanh(afilt*(kDrive *5))

; restore gain after filtering
krms rms afilt0
krmsfilt rms afilt
kautogain divz krms, krmsfilt, 1
afilt = afilt*kautogain

afeed = afilt*ifeed

; reverb
kreverbfeed = 0.7
kreverbfilt = 10000
kreverbmix tonek kControl_2, 20
arevb, a0 reverbsc adel, adel, kreverbfeed, kreverbfilt
arevb butterhp arevb, 40


;Reverb/clean mix:
arevb = (arevb*kreverbmix)+(adel*(1-kreverbmix))

aMaster = arevb * kEnv

outs aMaster, aMaster

endin

</CsInstruments>
<CsScore>

</CsScore>
</CsoundSynthesizer>

