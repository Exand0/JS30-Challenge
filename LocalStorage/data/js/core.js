let container = document.querySelector('.container');
let form = container.querySelector('.add');
let inputText = container.querySelector('.text-input');
let ul = container.querySelector('ul');

function addEntry(e) {
    e.preventDefault();
    let listEl = document.createElement('li');
    let label = document.createElement('label');
    let checkbox = document.createElement('input');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('checkbox');

    label.textContent = inputText.value;
    inputText.value = '';

    listEl.innerHTML += checkbox.outerHTML + label.outerHTML;
    ul.appendChild(listEl); 

    addToStorage('ul', ul.outerHTML);
    console.log(localStorage.getItem('ul'));
}

function addToStorage(key, value) {
    localStorage.setItem(key, value);
}

function getFromStorage(key) {
    // console.log(localStorage.getItem(key))
    return localStorage.getItem(key);
}

function checkData() {
    if (getFromStorage) {
        ul = getFromStorage('ul');
        // console.log('ul');
    }
}

form.addEventListener('submit', addEntry);
// checkData()
