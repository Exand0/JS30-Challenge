const tileContainer = document.querySelector('.tile-container');

function populateContainer(tileCount) {
    let tilesArr = [];
    for (let i = 0; i < tileCount; i++) {
        let tile = document.createElement('div');
        tile.classList.add('tile');
        tile.style.background = `rgb(${randomIntGenerator(0, 255)}, ${randomIntGenerator(0, 255)}, ${randomIntGenerator(0, 255)})`;
        tilesArr[i] = tile;
        // console.log(i);
    }
    tilesArr.forEach(el => tileContainer.appendChild(el));
}

function randomIntGenerator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

populateContainer(10);