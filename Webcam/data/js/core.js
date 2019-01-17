let photoboothDiv = document.querySelector('.photobooth');
let photoButton = photoboothDiv.querySelector('.take-photo');
let cameraStreamDiv = photoboothDiv.querySelector('.camera-stream');
let body = document.querySelector('body');
let video = document.createElement('video');
let w, h, ratio;

navigator.mediaDevices.getUserMedia({video: {width: 1920, height: 1080}})
    .then(mediaStream =>
        {
            video.srcObject = mediaStream;
            cameraStreamDiv.appendChild(video);
            video.addEventListener('loadedmetadata', () => video.play());
        })
    .catch(err => console.log(`${err.name}: ${err.message}`));

function takeAndAddScreenshot() {
    addScreenshotToHtml(takeScreenshot(video));
}

// function createCanvas() {
    
// }

function takeScreenshot(videoEl) {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = w/4;
    canvas.height = h/4;
    ctx.fillRect(0,0, w/4, h/4);
    ctx.drawImage(videoEl, 0,0, w/4, h/4);
    return canvas;
}

function getVideoRatio(e) {
    let videoEl =  e.target;
    w = videoEl.videoWidth;
    ratio = w/videoEl.videoHeight;
    h = parseInt(w/ratio);
}

function addScreenshotToHtml(canvasScreenshot) {
    let div = photoboothDiv.querySelector('.screenshot-container');
    if (!div) {
        div = document.createElement('div');
        div.classList.add('screenshot-container');
    }
    // document.documentElement.style.setProperty('--degree', `${randomDegrees()}deg`);
    // canvasScreenshot.style.setProperty('--degree', `${randomDegrees()}deg`);
    canvasScreenshot.style.setProperty('transform', `rotate(${randomDegrees()}deg)`);
    photoboothDiv.appendChild(div);
    div.appendChild(canvasScreenshot);  
}

function randomDegrees() {
    let deg = Math.floor(Math.random()*31);
    let prefix = (Math.floor(Math.random() * 3) === 1) ? '' : '-' ;
    console.log(prefix+deg)
    return (prefix + deg);
}

console.log(randomDegrees());



photoButton.addEventListener('click', takeAndAddScreenshot);
video.addEventListener('loadedmetadata', getVideoRatio);
// body.addEventListener('change', () => {
//     body.style.backgroundSize = cover;
// });
// body.addEventListener('scroll', () => {
//     body.style.backgroundSize = cover;
// });

