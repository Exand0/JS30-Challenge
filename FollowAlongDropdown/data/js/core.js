const navEntries = document.querySelectorAll('ul.nav-ul > li');
const dropdownHighlighter = document.querySelector('.dropdown-highlighter');
const navBar = document.querySelector('.nav');

function handleEnter(e) {
    this.classList.add('active');
    setTimeout(() => this.classList.add('active-visible'), 20);
    
    const dropdown = this.querySelector('.dropdown');
    let dropdownCoords = dropdown.getBoundingClientRect();
    let navCoords = navBar.getBoundingClientRect();

    dropdownHighlighter.classList.add('open');

    dropdownHighlighter.style.width = `${dropdownCoords.width}px`; 
    dropdownHighlighter.style.height = `${dropdownCoords.height}px`; 
    dropdownHighlighter.style.transform = `translate(${dropdownCoords.x}px, ${dropdownCoords.y+navCoords.y}px)`;
    updateCss(dropdownCoords.width);
}

function handleLeave(e) {
    this.classList.remove('active', 'active-visible');
    dropdownHighlighter.classList.remove('open');
}

function updateCss(width) {
    document.documentElement.style.setProperty('--after-width', `${width}px`)
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
