let link = 'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json'
let cities = [];

fetch(link)
    .then(response => response.json())
    .then(json => console.log(json[0]))
    .catch(err => console.log('There was an error', err.message));