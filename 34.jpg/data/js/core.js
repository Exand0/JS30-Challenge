let keys = [];
let combination = 'hello';
let toTest;
let counter = 0;

function checkSequence(arr, checkString) {
    let regEx = new RegExp(`${checkString}`, 'gi');
    // console.log(arr.match(regEx));
    if (arr.search(regEx) != -1) {
        return true;
    }
    return false;
}

function addKeysToArray(e) {
    keys.push(e.key);
    // console.log(keys);
    toTest = keys.join('');
    // console.log(toTest);
    if (checkSequence(toTest, combination)) {
        createElement();
        counter++;
        keys = [];
    }
}

function createElement() {
    let p;
    let text = '';
    if (counter > 0) {
        p = document.querySelector('p');
        text = ` x${counter}`;
    } else {
        p = document.createElement('p');
        document.body.appendChild(p);
    }
    p.textContent = `Correct!${text}`;
}

window.addEventListener('keydown', addKeysToArray);



// let test = ['a', 's', 's', 'd'];
// console.log(checkSequence(toTest, combination));