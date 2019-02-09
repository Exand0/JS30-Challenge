// let moleImgPath = "..img/employee.png";

let playingArea = document.querySelector('.playing-area');
let startButton = document.querySelector('.start');
let scoreEl = document.querySelector('.score');
let lastHole;
let score;

function buildField(rowCount, colCount) {
    let rows = [];
    for (let i = 0; i < rowCount; i++) {
        let rowEl = document.createElement('div');
        rowEl.classList.add('row');
        for (let j = 0; j < colCount; j++) { 
            let moleHoleDiv = document.createElement('div');
            moleHoleDiv.classList.add('mole-hole');
            rowEl.appendChild(moleHoleDiv);
        } 
        rows.push(rowEl); 
    }
    return rows;
}

function drawField(rows) {
    rows.forEach(row => playingArea.appendChild(row));
}

function addMole() {
    let holes = Array.from(document.querySelectorAll('.mole-hole'));

    holes.forEach(hole => {
        let mole = document.createElement('div');
        mole.classList.add('mole');
        mole.classList.add('up');

        hole.appendChild(mole);
        console.log(hole);
    })
}

function chooseRandomHole() {
    let holes = Array.from(document.querySelectorAll('.mole-hole'));
    let randomPosition = Math.floor(Math.random()*holes.length);
    let hole = holes[randomPosition];

    if (hole === lastHole) {
        console.log('nope');
        return chooseRandomHole();
    }
    console.log(lastHole === hole);
    lastHole = hole;
    return hole;
}

// function spawnMoles(count, frequency=1000) {
//     let holes = Array.from(document.querySelectorAll('.mole-hole'));

//     for (let i = 0; i < count; i++) {
//         let mole = document.createElement('div');
//         let randomPosition = Math.floor(Math.random()*holes.length);
//         holes[randomPosition].appendChild(mole);
//         mole.classList.add('mole');

//         setInterval(() => {
//             setTimeout(() => mole.classList.add('up'), 300);
//             // setTimeout(() => mole.classList.remove('up'), 300);
//         }, frequency);
//     }
// }

function spawnMole(holeEl, time=1000) {
    let mole = document.createElement('div');

    mole.classList.add('mole');
    holeEl.appendChild(mole);

    mole.addEventListener('click', increaseScore);

    setTimeout(() => mole.classList.add('up'), 100);
    setTimeout(() => mole.classList.remove('up'), time);
    let removeAfter = 1100 + time;
    setTimeout(() => mole.remove(), removeAfter);
}

function increaseScore() {
    score++;
    scoreEl.textContent = `Score: ${score}`;
}

function play(playtime = 10000) {
    let timeOut = false;
    score = 0;
    setTimeout(() => timeOut = true, playtime);
    
    drawField(buildField(3,3));

    setInterval(() => {
        spawnMole(chooseRandomHole());
    }, 300); 
}



startButton.addEventListener('click', play);

// drawField(buildField(3,3));
// addMole();
// spawnMoles(10);
// spawnMole(chooseRandomHole());



