let supported = document.createElement('video').canPlayType;
if (supported) {
    console.log('test');
    let player = document.querySelector('.player');
    let video = document.querySelector('video');
    let mediaControl = document.querySelector('.media-control');

    video.controls = false;
    mediaControl.style.display = 'block';

    let playPause = document.querySelector('#toggle');
    let mute = document.querySelector('#mute');
    let forward = document.querySelector('#forward');
    let backward = document.querySelector('#backward');
    let progress = document.querySelector('#progress');
    let progressBar = document.querySelector('#progress-bar');
    let vol = document.querySelector('#vol');
    let full = document.querySelector('#full');

    playPause.addEventListener('click', e => {
        if (video.paused || video.ended) {
            video.play();
            playPause.classList.add('fa-stop');
            playPause.classList.remove('fa-play');
        } else {
            video.pause();
            playPause.classList.add('fa-play');
            playPause.classList.remove('fa-stop');
            
        }
    })

    mute.addEventListener('click', e => {
        video.muted = !video.muted;
        if (video.muted) {
            mute.classList.remove('fa-volume-up');
            mute.classList.add('fa-volume-mute');
        } else {
            mute.classList.remove('fa-volume-mute');
            mute.classList.add('fa-volume-up');  
        }
    });

    vol.addEventListener('input', e => {
        //vol.value = video.volume;
        console.log(vol.value);
        video.volume = vol.value/100;
    });

    video.addEventListener('timeupdate', () => {
        // progress.value = video.currentTime;
        // progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
        progress.value = video.currentTime;
        // progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';     
    })
}


