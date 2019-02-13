// let moleImgPath = "..img/employee.png";
/* <div class="playing-area"></div> */

let playingArea = document.querySelector('.playing-area');
let startButton = document.querySelector('.start');
let scoreEl = document.querySelector('.score');
let menu = document.querySelector('.menu');
let durationInput = document.querySelector('.duration-input');
let durationLabel = document.querySelector('.duration-label');
let difficultyInput = document.querySelector('.difficulty-input');
let difficultyLabel = document.querySelector('.difficulty-label');

let startCountdown;
let spawnIntervalTimer;
let holes = [];
let moles = [];
let rows = [];
let lastOut;
let score = 0;
let timeIsOut = true;
let duration;
let difficulty = {
    spawnFrequency: '',
    UpTimeRange: ''
}

function handleDurationInput(e) {
    duration = e.target.value*1000;
    durationLabel.textContent = `Game duration: ${duration/1000}s`;
}

function handleDifficultyInput(e) {
    let option = e.target.options.selectedIndex;
    if (option === 0) {
        difficulty.spawnFrequency = 500;
        difficulty.UpTimeRange = [1000, 1500];
    } else if (option === 1) {
        difficulty.spawnFrequency = 300;
        difficulty.UpTimeRange = [500, 1000];
    } else if (option === 2) {
        difficulty.spawnFrequency = 200;
        difficulty.UpTimeRange = [200, 500];
    }
}

function setDefaultSettings() {
    difficultyInput.options.selectedIndex = 1;
    difficulty.spawnFrequency = 300,
    difficulty.UpTimeRange = [500, 1000];

    durationInput.value = 10;
    duration = durationInput.value*1000;
    durationLabel.textContent = `Game duration: ${duration/1000}s`;
}

function buildField(rowCount, colCount) {
    for (let i = 0; i < rowCount; i++) {
        let rowEl = document.createElement('div');
        rowEl.classList.add('row');
        for (let j = 0; j < colCount; j++) { 
            let moleHoleDiv = document.createElement('div');
            moleHoleDiv.classList.add('mole-hole');
            rowEl.appendChild(moleHoleDiv);
            holes.push(moleHoleDiv);
        } 
        rows.push(rowEl); 
    }
    return rows;
}

function drawField(rows) {
    rows.forEach(row => playingArea.appendChild(row));
}

function chooseRandom(array) {
    let randomPos = Math.floor(Math.random()*array.length);
    let arrayEl = array[randomPos];

    if (arrayEl === lastOut) {
        return chooseRandom(array);
    }
    lastOut = arrayEl;
    return arrayEl;
}

function spawnMoles() {
    holes.forEach((hole, index) => {
        let mole = document.createElement('div');
        mole.classList.add('mole');
        hole.appendChild(mole);
        moles[index] = mole;
    });
}

function getRandomTime(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moleUp(mole) {
    let time = getRandomTime(...difficulty.UpTimeRange)
    mole.addEventListener('click', moleClick, { once: true });
    mole.classList.add('up');
    setTimeout(() => {
        mole.classList.remove('up');
        mole.removeEventListener('click', moleClick, { once: true });
    }, time);

}

function moleClick(e) {
    increaseScore();
}

function increaseScore() {
    score++;
    displayScore();
}

function displayScore() {
    scoreEl.textContent = `Score: ${score}`;
}

function setInterfaceStyle() {
    let buttonText;
    if (timeIsOut === false) {
        buttonText = 'Stop';
        menu.classList.add('hidden');
        scoreEl.classList.add('in-game');
    } else {
        buttonText = 'Start';
        menu.classList.remove('hidden');
        scoreEl.classList.remove('in-game');
    }
    startButton.textContent = `${buttonText}`;
    startButton.classList.toggle('stop');  
}

function toggleGame() {
    if (timeIsOut === true) {
        timeIsOut = false;
        score = 0;   
        displayScore();   
        // startCountdown = setTimeout(toggleGame, 1000);

        setTimeout(() => {
            toggleGame();
        }, duration);
        drawField(buildField(2,3));
        spawnMoles();

        spawnIntervalTimer = setInterval(() => {
            if(!timeIsOut) moleUp(chooseRandom(moles));
        }, difficulty.spawnFrequency); 

    } else {
        timeIsOut = true;
        clearInterval(spawnIntervalTimer); 
        moles.forEach(mole => mole.remove());
        holes.forEach(hole => hole.remove());
        rows.forEach(hole => hole.remove());
    }
    setInterfaceStyle();
}

startButton.addEventListener('click', toggleGame);
durationInput.addEventListener('input', handleDurationInput);
difficultyInput.addEventListener('change', handleDifficultyInput);

setDefaultSettings();




