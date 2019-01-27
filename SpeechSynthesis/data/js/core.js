//Experimental feature

let text = document.querySelector('.text');
let voiceSelector = document.querySelector('.toggle');
let voices = [];



let synth = window.speechSynthesis;

function populateVoiceList() {
    voices = speechSynthesis.getVoices();
    console.log(voices);
    console.log(synth);
}

populateVoiceList();