const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let ul = document.querySelector('ul');
let regEx = new RegExp('(the )|(an? )', 'i');


function strip(element, regEx) {
    return element.replace(regEx, '');
}

// console.log(stri)

function nonArticleSort(array, regEx) {
    return array.sort((a,b) => strip(a, regEx) < strip(b, regEx) ? -1 : 1 );
}

function buildList(array) {
    array.forEach(band => {
        let bandLi = document.createElement('li');
        bandLi.innerText = band;
        ul.appendChild(bandLi);
    });
}

let sortedBands = nonArticleSort(bands, regEx);
buildList(sortedBands);


