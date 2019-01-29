const navEntries = document.querySelectorAll('.nav-ul li');
const dropdownHighlighter = document.querySelector('.dropdown-highlighter');
const navBar = document.querySelector('.nav');



function handleEnter(e) {
    this.classList.add('active');
    // let highlighterCoords = this.getBoundingClientRect();
    const dropdown = this.querySelector('.dropdown');
    let dropdownCoords = dropdown.getBoundingClientRect();
    let navCoords = navBar.getBoundingClientRect();
    console.log(dropdownCoords);
    // console.log(highlighterCoords);
    dropdownHighlighter.style.width = `${dropdownCoords.width}px`; 
    dropdownHighlighter.style.height = `${dropdownCoords.height}px`; 
    dropdownHighlighter.style.transform = `translate(${dropdownCoords.x}px, ${dropdownCoords.y+navCoords.y}px)`;
}

function handleLeave(e) {
    this.classList.remove('active');
}

function moveHighlighter(e) {
//    let highlighterCoords = this.getBoundingClientRect();
//    console.log(highlighterCoords);
//    dropdownHighlighter.style.width = `${highlighterCoords.width}`; 
//    dropdownHighlighter.style.height = `${highlighterCoords.height}`; 
//    dropdownHighlighter.style.transform = `translate(${highlighterCoords.x}px, ${highlighterCoords.y}px)`;
}

navEntries.forEach(li => li.addEventListener('mouseenter', handleEnter));
navEntries.forEach(li => li.addEventListener('mouseleave', handleLeave));
