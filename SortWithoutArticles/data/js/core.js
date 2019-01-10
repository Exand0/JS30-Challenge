const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let ul = document.querySelector('ul');
let regEx = new RegExp('(The )|(An? )')

let sortedBands = bands.map(arrEl => {
    return arrEl.replace(regEx, '');
    //console.log(arrEl);
})

console.log(sortedBands);

sortedBands.sort((a,b) => (a[0] - b[0]));
console.log(sortedBands);

