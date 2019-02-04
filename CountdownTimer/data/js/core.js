const addOneS = document.querySelector('.add-1s');
const addThirtyS = document.querySelector('.add-30s');
const addOneM = document.querySelector('.add-1m');
const addOneH = document.querySelector('.add-1h');
const addCustom = document.querySelector('.add-custom');
const reset = document.querySelector('.reset');

const buttons = document.querySelectorAll('.nav ul li');
const nav = document.querySelector('.nav');

function handleClick(e) {
    e.preventDefault();
    if (liEl = e.target.nodeName === 'LI') {
        switch (e.target.className) {
            case 'add-1s':
                console.log(e.target.className);
                console.log(startCountdown(1));
                break;
            case 'add-30s':
                console.log(e.target.className);
                console.log(startCountdown(30));
                break;
            case 'add-1m':
                console.log(e.target.className);
                break;
            case 'add-1h':
                console.log(e.target.className);
                break;
            case 'add-custom':
                console.log(e.target.className);
                break;
            case 'reset':
                console.log(e.target.className);
                break;
            }
    }
}

function startCountdown(time) {
    let timeObj = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        timeLeft: 0,
        endDate: getStartingTime()
    }

    function getStartingTime() {
        return Date.now() + time * 1000;
    }

    function calc() {

        // console.log((timeObj.endDate - startDate)/1000);

        timeObj.timeLeft = (timeObj.endDate - Date.now())/1000;

        timeObj.hours = parseInt(timeObj.timeLeft/3600);
        timeObj.minutes = parseInt(timeObj.timeLeft/60);
        timeObj.seconds = parseInt(timeObj.timeLeft%60);

        if (timeObj.timeLeft <= 0) clearInterval(interval);
        console.log(timeObj);
    }
    calc();
    let interval = setInterval(calc, 1000);
}

nav.addEventListener('click', handleClick);
// buttons.forEach(button => button.addEventListener('click', handleClick));
