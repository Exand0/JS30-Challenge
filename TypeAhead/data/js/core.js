const link = 'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json';
let cities = [];

function fetchData(link) {
    new Promise((resolve, reject) => {
        fetch(link)
        .then(response => response.json())
        .then(json => cities.push(...json))
        .then(promise => {
            console.log(matchString(cities, 'Moscow'));
            console.log(cities.length);
        })
        .catch(err => console.log('There was an error', err.message));
    })

            
}

function matchString(arr, toMatch) {
    let regEx = new RegExp(toMatch, 'gi');
    return arr.filter(place => {
        return place.name.match(regEx);
    })
}

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


