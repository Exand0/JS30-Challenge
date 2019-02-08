// let moleImgPath = "..img/employee.png";

let playingArea = document.querySelector('.playing-area');

function buildField(rowCount, colCount) {
    let rows = [];
    let holes = 0;
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

drawField(buildField(3,3));
addMole();


