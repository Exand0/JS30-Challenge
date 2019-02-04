let video = document.querySelector('video');
let speedController = document.querySelector('.speed-controller');
let speedFill = document.querySelector('.speed-fill');
let controllerPosition;
let controllerStart = speedController.offsetTop;

speedFill.style.height = '50%';

function setPlaybackSpeed(e) {
    controllerPosition = parseFloat((e.clientY - controllerStart)/speedController.clientHeight).toFixed(2);
    video.playbackRate = controllerPosition*2;
    speedFill.style.height = `${(controllerPosition*100)}%`;
    console.log(`${controllerPosition*100}%`);
    console.log(`${video.playbackRate}`);

}

speedController.addEventListener('mousemove', setPlaybackSpeed);

