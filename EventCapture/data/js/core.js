let divs = document.querySelectorAll('div');
// console.log(divs);

function logText(e) {
    console.log(this);
    // e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true

}));


