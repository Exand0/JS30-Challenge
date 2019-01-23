let triggers = document.querySelectorAll('.link');
let highlight = document.createElement('span');
let container = document.querySelector('.container');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink() {
    let linkCoords = this.getBoundingClientRect();
    highlight.style.width = `${linkCoords.width}px`;
    highlight.style.height = `${linkCoords.height}px`;
    highlight.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top}px)`;

    // highlight.style.width = `${linkCoords.width}px`;
    // highlight.style.height = `${linkCoords.height}px`;
    // highlight.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top}px)`;
    console.log(linkCoords);
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', highlightLink));