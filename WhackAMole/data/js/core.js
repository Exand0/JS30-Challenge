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
// let isRunning = true;

let spawnFrequency = 300;
let duration = 10000;

let diffuculty = {
    easy: {
        spawnFrequency: 500,
        UpTimeRange: [1000, 1500]
    },
    medium: {
        spawnFrequency: 300,
        UpTimeRange: [500, 1000]
    },
    hard: {
        spawnFrequency: 200,
        UpTimeRange: [200, 500]
    }
}

function handleDurationInput(e) {
    duration = e.target.value*1000;
}

function handleDifficultyInput(e) {
    // console.log(e.target);
    if (e.target.options.selectedIndex === 0) {
        console.log(e.target.selectedOptions[0].text);
    // } else if ()
}

function updateDisplayedSettings() {
    durationLabel.textContent = `Game duration: ${duration/1000}s`
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
        console.log('nope');
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

    // return moles;
}

function toggleDisplayScore() {
    if (timeIsOut === true) {
        scoreEl.classList.add('in-game');
    } else {
        scoreEl.classList.remove('in-game');
    }
}

function getRandomTime(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moleUp(mole) {
    let time = getRandomTime(1000, 1500)
    mole.addEventListener('click', moleClick, { once: true });
    mole.classList.add('up');
    setTimeout(() => {
        mole.classList.remove('up');
        mole.removeEventListener('click', moleClick, { once: true });
    }, time);

}

function moleClick(e) {
    increaseScore();
    console.log(e.target);
}

function increaseScore() {
    score++;
    displayScore();
}

function displayScore() {
    scoreEl.textContent = `Score: ${score}`;
}

function toggleMenu() {
    if (timeIsOut === false) menu.classList.add('hidden');
    else menu.classList.remove('hidden');
}

function toggleStartButton() {
    let buttonText;
    toggleGame();
    toggleMenu();
    if (timeIsOut === false) {
        buttonText = 'Stop';
    } else {
        buttonText = 'Start';
    }
    startButton.textContent = `${buttonText}`;
    startButton.classList.toggle('stop');   
}

function toggleGame() {
    toggleDisplayScore();
    if (timeIsOut === true) {
        timeIsOut = false;
        score = 0;   
        displayScore();     

        // startCountdown = setTimeout(toggleGame, 1000);

        setTimeout(() => {
            toggleGame();
            toggleMenu();
        }, duration);
        drawField(buildField(2,3));
        spawnMoles();
    
        spawnIntervalTimer = setInterval(() => {
            if(!timeIsOut) moleUp(chooseRandom(moles));
        }, 300); 

    } else {
        timeIsOut = true;
        clearInterval(spawnIntervalTimer); 
        moles.forEach(mole => mole.remove());
        holes.forEach(hole => hole.remove());
        rows.forEach(hole => hole.remove());
    }
}

startButton.addEventListener('click', toggleStartButton);
durationInput.addEventListener('input', handleDurationInput);
difficultyInput.addEventListener('change', handleDifficultyInput);



