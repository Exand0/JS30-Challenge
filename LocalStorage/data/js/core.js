let container = document.querySelector('.container');
let form = container.querySelector('.add');
let inputText = container.querySelector('.text-input');


function addEntry(e) {
    e.preventDefault();
    console.log(e);
}

form.addEventListener('submit', addEntry);
