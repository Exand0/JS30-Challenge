let keys = [];
let combination = 'hello';
let toTest;

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
    if (checkSequence(toTest, combination)) console.log('Correct!');
}

window.addEventListener('keydown', addKeysToArray);



// let test = ['a', 's', 's', 'd'];
// console.log(checkSequence(toTest, combination));