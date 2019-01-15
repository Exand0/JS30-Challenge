let photoboothDiv = document.querySelector('.photobooth');
let photoButton = photoboothDiv.querySelector('.take-photo');
let cameraStreamDiv = photoboothDiv.querySelector('.camera-stream');
let video = document.createElement('video');

navigator.mediaDevices.getUserMedia({video: {width: 1920, height: 1080}})
    .then(mediaStream =>
        {
            video.srcObject = mediaStream;
            cameraStreamDiv.appendChild(video);
            video.addEventListener('loadedmetadata', () => video.play());
        })
    .catch(err => console.log(`${err.name}: ${err.message}`));