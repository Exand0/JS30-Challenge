let coordsObj = {
    long: '',
    lat: '',
    speed: '',
    alt: '',
    timestamp: ''
}

function displayLocation(coordsObj) {
    let h1El = document.querySelector('.navigation');
    // console.log(h1El);
    for (let key in coordsObj) {
        if (coordsObj.hasOwnProperty(key)) {
            if (coordsObj[key]) {
                let val = coordsObj[key];
                if (coordsObj[key]  = document.querySelector(`.${key}`)) {
                } else {
                    coordsObj[key] = document.createElement('span');
                }
                coordsObj[key].classList.add(`${key}`);
                coordsObj[key].textContent = val;
                h1El.appendChild(coordsObj[key]);
                // console.log(val);
            }
        }
    }
}
function getLocation(pos) {
    let coords = pos.coords;
    coordsObj = {
        long: `${coords.longitude}°`,
        lat: `${coords.latitude}°`,
        speed: `${coords.speed}km/h`,
        alt: `${coords.altitude}m°`,
        timestamp: `${pos.timestamp}`
    }
    console.log(coordsObj);
    // console.log(coordsObj.longitude);
    displayLocation(coordsObj);
}

let navOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

// navigator.geolocation.getCurrentPosition(getLocation, err => `Error: ${err.code}: ${err.message}`, navOptions);
navigator.geolocation.watchPosition(getLocation, err => `Error: ${err.code}: ${err.message}`, navOptions);