let video = document.querySelector('video');
let speedController = document.querySelector('.speed-controller');
let speedFill = document.querySelector('.speed-fill');

let controllerPosition;
// let controllerStart = speedController.offsetTop + speedController.clientHeight;
let controllerStart = speedController.offsetTop;
speedFill.style.height = '50%';

function setPlaybackSpeed(e) {
    // controllerPosition = parseFloat((e.clientY - e.target.offsetTop)/e.target.clientHeight).toFixed(2);
    controllerPosition = parseFloat((controllerStart+e.clientY)/(speedController.clientHeight)).toFixed(2);
    video.playbackRate = controllerPosition;
    speedFill.style.height = `${(controllerPosition/speedController.clientHeight)*100}%`;
    console.log(`${(controllerPosition)*100}%`);
}

speedController.addEventListener('mousemove', setPlaybackSpeed);

