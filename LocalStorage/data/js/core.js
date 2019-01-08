let container = document.querySelector('.container');
let form = container.querySelector('.add');
let inputText = container.querySelector('.text-input');
let ul = container.querySelector('ul');
let resetButton = container.querySelector('.reset-button');
let data = [];
let arrIndex = 0;

function buildEntry(e) {
    console.log(arrIndex);
    e.preventDefault();
    let listEl = document.createElement('li');
    let label = document.createElement('label');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('checkbox');

    label.textContent = inputText.value;
    inputText.value = '';
    listEl.innerHTML += checkbox.outerHTML + label.outerHTML;
    // listEl.dataset.seq = i;
    // local storage is constantly overwritten
    data[0] = listEl.outerHTML;
    addEntry();

}

function addEntry() {
    // Separate/optimize this function for usage for both initial addition of entries
    // end for checLocalStorage
    data.forEach(li => {
        // console.log(JSON.parse(li));
        ul.innerHTML += li; 
        addToStorage(`li${arrIndex}`, li);
        // console.log(getFromStorage(`li${arrIndex}`)); 
        // console.log(getFromStorage(`arrIndex`)); 

        addToStorage('arrIndex', arrIndex);
        arrIndex++;
    })
    // addToStorage('ulData', data);
    data = [];
    // console.log(localStorage.getItem('ulData'));
}

function addToStorage(key, value) {
    localStorage.setItem(key, value);
}

function getFromStorage(key) {
    return localStorage.getItem(key);
}

function checkLocalStorage() {
    if (getFromStorage('arrIndex')) {
        for (let i=(getFromStorage('arrIndex')); i >= 0; i--) {
            data[i] = getFromStorage(`li${i}`);  
            // console.log(data[i]);
        }
        addEntry(data);
    }
}

function resetData() {
    data = [];
    if (arrIndex = getFromStorage('arrIndex')) {
        for (let i=arrIndex; i >= 0; i--) {
            // console.log(getFromStorage(`li${i}`));
            localStorage.removeItem(`li${i}`);
        }
    }
    localStorage.removeItem('ulData');
    localStorage.removeItem('arrIndex');
    arrIndex = 0;
}

form.addEventListener('submit', buildEntry);
resetButton.addEventListener('click', resetData);
checkLocalStorage();

