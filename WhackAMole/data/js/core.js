// let moleImgPath = "..img/employee.png";
/* <div class="playing-area"></div> */

let playingArea = document.querySelector('.playing-area');
let startButton = document.querySelector('.start');
let scoreEl = document.querySelector('.score');
let spawnInterval;
let holes = [];
let moles = [];
let rows = [];
let lastOut;
let score;
let timeIsOut = true;

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
    // console.log(holes);
    holes.forEach((hole, index) => {
        let mole = document.createElement('div');
        mole.classList.add('mole');

        hole.appendChild(mole);
        mole.addEventListener('click', increaseScore);

        moles[index] = mole;
    });
    console.log(moles);
    // return moles;
}

function getRandomTime(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moleUp(mole) {
    let time = getRandomTime(200, 1000)
    mole.classList.add('up');
    setTimeout(() => mole.classList.remove('up'), time);
}

function increaseScore() {
    score++;
    scoreEl.textContent = `Score: ${score}`;
}

function initialize() {
    // let playingArea = document.createElement('div');
    // playingArea.classList.add('playing-area');

    let menu = document.querySelector('.menu');
    menu.classList.add('hidden');

    
}

function toggleStartButton() {
    let buttonText;
    if (timeIsOut === true) {
        play();
        buttonText = 'Finish';
    } else if (timeIsOut === false) {
        stop();
        buttonText = 'Start';
    }
    startButton.textContent = `${buttonText}`;
    startButton.classList.toggle('finish');   
}

function stop() {
    timeIsOut = true;
    clearInterval(spawnInterval); 
    moles.forEach(mole => mole.remove());
    holes.forEach(hole => hole.remove());
    rows.forEach(hole => hole.remove());
}

function play(playtime = 10000) {
    score = 0;
    timeIsOut = false;

    initialize();

    setTimeout(() => {
        timeIsOut = true;
    }, playtime);
    drawField(buildField(3,3));
    spawnMoles();

    spawnInterval = setInterval(() => {
        if(!timeIsOut) moleUp(chooseRandom(moles));;
    }, 300); 
}

startButton.addEventListener('click', toggleStartButton);

// drawField(buildField(3,3));
// addMole();
// spawnMoles(10);
// spawnMole(chooseRandomHole());



