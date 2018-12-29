var sounds = {
    65: './data/sounds/boom.wav',
    83: './data/sounds/hihat.wav',
    68: './data/sounds/openhat.wav',
    70: './data/sounds/snare.wav',
    71: './data/sounds/tom.wav',
    75: './data/sounds/clap.wav',
    72:  './data/sounds/kick.wav',
    74:  './data/sounds/ride.wav',
    76: './data/sounds/tink.wav'
}

var handlers = {
    removeTransition: function (e) {
        if (e.propertyName !== 'transform');
        this.classList.remove('playing');
    },
    playSound: function (event) {
        if (sounds[event.keyCode]) {
            let audio = new Audio(sounds[event.keyCode]);
            audio.play();
            let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
            key.classList.add('playing');
        }  
    },
    setupEventListeners: function() {
        const keys = document.querySelectorAll('.key');
        keys.forEach(a => a.addEventListener('transitionend', handlers.removeTransition));
        window.addEventListener('keydown', handlers.playSound);
    }
    
}

handlers.setupEventListeners();







