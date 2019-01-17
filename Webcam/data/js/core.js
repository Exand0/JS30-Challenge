let photoboothDiv = document.querySelector('.photobooth');
let photoButton = photoboothDiv.querySelector('.take-photo');
let cameraStreamDiv = photoboothDiv.querySelector('.camera-stream');
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

    // function snap() {
    //     // Define the size of the rectangle that will be filled (basically the entire element)
    //     context.fillRect(0, 0, w, h);
    //     // Grab the image from the video
    //     context.drawImage(video, 0, 0, w, h);
    // }


    // video.addEventListener('loadedmetadata', function() {
    //     // Calculate the ratio of the video's width to height
    //     ratio = video.videoWidth / video.videoHeight;
    //     // Define the required width as 100 pixels smaller than the actual video's width
    //     w = video.videoWidth - 100;
    //     // Calculate the height based on the video's width and the ratio
    //     h = parseInt(w / ratio, 10);
    //     // Set the canvas width and height to the values just calculated
    //     canvas.width = w;
    //     canvas.height = h;			
    // }, false);

function takeAndAddScreenshot() {
    addScreenshotToHtml(takeScreenshot(video));
}

// function createCanvas() {
    
// }

function takeScreenshot(videoEl) {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    // canvas.width = canvas.width*ratio;
    // canvas.height = canvas.width/ratio;
    ctx.fillRect(0,0, w/3, h/3);
    ctx.drawImage(videoEl, 0,0, w/3, h/3);
    // console.log((ratio));
    return canvas;
}

function getVideoRatio(e) {
    let videoEl =  e.target;
    w = videoEl.videoWidth;
    ratio = w/videoEl.videoHeight;
    h = parseInt(w/ratio);
    // console.log(e.target); 
    // console.log(w,h);
    // console.log(ratio);
}

function addScreenshotToHtml(screenshot) {
    let div = photoboothDiv.querySelector('.screenshot-container');
    if (!div) {
        div = document.createElement('div');
        div.classList.add('screenshot-container');
    }
    photoboothDiv.appendChild(div);
    div.appendChild(screenshot);  
}

photoButton.addEventListener('click', takeAndAddScreenshot);
video.addEventListener('loadedmetadata', getVideoRatio);
