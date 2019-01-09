let container = document.querySelector('.container');
let form = container.querySelector('.add');
let inputText = container.querySelector('.text-input');
let ul = container.querySelector('ul');
let resetButton = container.querySelector('.reset-button');
let arrIndex = 0;

function submitAction(e) {
    let entry = buildEntry()
    e.preventDefault();
    addEntry(entry);
    addToStorage(`li${arrIndex}`, entry);
    addToStorage('arrIndex', arrIndex);
    arrIndex++;
}

function buildEntry() {
    
    let listEl = document.createElement('li');
    let label = document.createElement('label');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('checkbox');

    label.textContent = inputText.value;
    inputText.value = '';
    listEl.innerHTML += checkbox.outerHTML + label.outerHTML;
    return listEl.outerHTML;
}

function addEntry(entry) {
    ul.innerHTML += entry; 
}

function addToStorage(key, value) {
    localStorage.setItem(key, value);
}

function getFromStorage(key) {
    return localStorage.getItem(key);
}

function checkLocalStorage() {
    if (getFromStorage('arrIndex')) {
        arrIndex = getFromStorage('arrIndex');
        for (let i=0; i <= arrIndex; i++) {
            addEntry(getFromStorage(`li${i}`)); 
        }
        arrIndex++;
    }
}

function resetData() {
    if (arrIndex = getFromStorage('arrIndex')) {
        for (let i=arrIndex; i >= 0; i--) {
            localStorage.removeItem(`li${i}`);
        }
    }
    localStorage.removeItem('arrIndex');
    arrIndex = 0;
}

form.addEventListener('submit', submitAction);
resetButton.addEventListener('click', resetData);
checkLocalStorage();

