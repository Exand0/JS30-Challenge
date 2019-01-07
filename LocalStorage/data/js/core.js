let container = document.querySelector('.container');
let form = container.querySelector('.add');
let inputText = container.querySelector('.text-input');
let ul = container.querySelector('ul');
let resetButton = container.querySelector('.reset-button');
let data = [];

function buildEntry(e) {
    e.preventDefault();
    let listEl = document.createElement('li');
    let label = document.createElement('label');
    let checkbox = document.createElement('input');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('checkbox');

    label.textContent = inputText.value;
    inputText.value = '';
    listEl.innerHTML += checkbox.outerHTML + label.outerHTML;
    // local storage is constantly overwritten
    data.push(JSON.stringify(listEl.outerHTML));
    addEntry();

}

function addEntry() {
    data.forEach(li => {
        // console.log(JSON.parse(li));
        ul.innerHTML += (JSON.parse(li)); 
    })
    addToStorage('ulData', data);
    data = [];
    // console.log(localStorage.getItem('ulData'));
}

function addToStorage(key, value) {
    localStorage.setItem(key, value);
}

function getFromStorage(key) {
    console.log(localStorage.getItem(key))
    return localStorage.getItem(key);
}

function checkLocalStorage() {
    if (getFromStorage('ulData')) {
        data = localStorage.getItem('ulData');
        console.log(data.length);
        // Data is not an array anymore
        addEntry(data);
        data = [];
    }
}

function resetData() {
    data = [];
    localStorage.removeItem('ulData');
}

form.addEventListener('submit', buildEntry);
resetButton.addEventListener('click', resetData);
checkLocalStorage();

