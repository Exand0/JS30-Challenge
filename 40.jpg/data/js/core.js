let supported = document.createElement('video').canPlayType;

if (supported) {
    
    let player = document.querySelector('.player');
    let video = player.querySelector('video');
    let mediaControl = player.querySelector('.media-control');

    video.controls = false;
    mediaControl.style.display = 'block';

    let playPause = player.querySelector('#toggle');
    let muteButton = player.querySelector('#mute');
    let skipButtons = player.querySelectorAll('[data-skip]');
    let progress = player.querySelector('#progress');
    let progressBar = player.querySelector('#progress-bar');
    let vol = player.querySelector('#vol');
    // let full = document.querySelector('#full');

    function toggleVideo() {
        let method = (video.paused || video.ended) ? 'play' : 'pause';
        video[method]();
        playPause.classList.toggle('fa-stop');
        playPause.classList.toggle('fa-play');

    }

    function mute() {
        video.muted = !video.muted;
        muteButton.classList.toggle('fa-volume-up');
        muteButton.classList.toggle('fa-volume-mute');
    }

    function setVol() {
        video.volume = vol.value/100;
        if (video.muted && video.volume > 0) mute();
    }

    function updateTimeBar() {
        progress.max = video.duration;
        progress.value = video.currentTime;
        // fallback option
        progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
    }

    function setTime(e) {
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }

    function skipTime() {
        video.currentTime += parseInt(this.dataset.skip);
    }

    playPause.addEventListener('click', toggleVideo);
    muteButton.addEventListener('click', mute);
    vol.addEventListener('input', setVol);
    video.addEventListener('timeupdate', updateTimeBar);
    progress.addEventListener('click', setTime);
    skipButtons.forEach(button => button.addEventListener('click', skipTime));
 
    // fullscreen support
    // var fullScreenSupported = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);

}


