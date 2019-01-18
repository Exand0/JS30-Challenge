//doesn't work on firefox
//on chrome the code needs to be presented through a web server


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechrecognition;

let recognition = new SpeechRecognition();
// results on the go
recognition.interimResults = true;
let p = document.createElement('p');
let divEl = document.querySelector('.words');
divEl.appendChild(p);

recognition.addEventListener('result', e => {
    console.log(e);
})