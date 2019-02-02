const tileContainer = document.querySelector('.tile-container');
let startingX;;
let mouseDown;
let scrollLeft;

function debounce(func, wait=30, immediate=true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

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
    // tiles = tilesArr;
}

function randomIntGenerator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleMouseDown(e) {
    mouseDown = true;
    tileContainer.classList.add('active');

    // initial position before scroll
    startingX = e.pageX - tileContainer.offsetLeft;

    // scrollLeft is 0 when the scrollbar is at its rightmost position 
    // (at the start of the scrolled content), 
    // and then increasingly negative as you scroll towards the end of the content.
    scrollLeft =  tileContainer.scrollLeft;
}

function handleMouseUp() {
    mouseDown = false;
    tileContainer.classList.remove('active');
}

function dragToScroll(e) {
    if (!mouseDown) return;
    // const x = e.pageX - tileContainer.offsetLeft;
    // const x = e.pageX;
    const distance = (e.pageX - startingX) * 2;
    tileContainer.scrollLeft = scrollLeft - distance;
    console.log(`clickPosition: ${e.pageX}, distance: ${distance}px`);
}

tileContainer.addEventListener('mousedown', handleMouseDown);
tileContainer.addEventListener('mouseup', handleMouseUp);
tileContainer.addEventListener('mouseleave', handleMouseUp);
tileContainer.addEventListener('mousemove', debounce(dragToScroll));

populateContainer(25);

