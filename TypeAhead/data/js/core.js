const link = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
//const link = 'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json';
let cities = [];

function fetchData(link) {
        fetch(link)
        .then(response => response.json())
        .then(json => cities.push(...json))
        .catch(err => console.log('There was an error', err.message));      
}

function matchString(arr, toMatch) {
    let regEx = new RegExp(toMatch, 'gi');
    return arr.filter(place => {
        return place.city.match(regEx) || place.state.match(regEx);
    })
}

function displayResult() {
    const matched = matchString(cities, this.value);
    const html = matched.map(place => {
        const regEx = new RegExp(this.value, 'gi');
        let searchedCity = place.city.replace(regEx, `<span class="highlighted">${this.value}</span>`);
        let searchedState = place.state.replace(regEx, `<span class="highlighted">${this.value}</span>`);
        
        return `
            <li>
                <span class="name">${searchedCity}, ${searchedState}</span>
                <span class="population">${place.population}</span>
            </li>
        `
    }).join(' ');
    suggestions.innerHTML = html;
}

let searchField = document.querySelector('.searchfield');
let suggestions = document.querySelector('.suggestions');

searchField.addEventListener('change', displayResult);
searchField.addEventListener('keyup', displayResult);

fetchData(link);

// // function checkArray(arr) {
// //     new Promise((resolve, reject) => {
// //         while(true) {
// //             if (arr.length != 0) {
// //                 resolve(arr);
// //             }
// //         }
// //     });
// // }

// setTimeout("console.log('test')", 10000);

// checkArray(cities).then((citiesChecked => {
//     console.log(matchString(citiesChecked, 'Moscow'));
// }))
//console.log(matchString(cities, 'Moscow'));
// console.log(cities.length);


