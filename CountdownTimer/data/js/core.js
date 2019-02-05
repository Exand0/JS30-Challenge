// const addOneS = document.querySelector('.add-1s');
// const addThirtyS = document.querySelector('.add-30s');
// const addOneM = document.querySelector('.add-1m');
// const addOneH = document.querySelector('.add-1h');
// const addCustom = document.querySelector('.add-custom');
// const reset = document.querySelector('.reset');

const buttons = document.querySelectorAll('.nav ul li');
const nav = document.querySelector('.nav');
const container = document.querySelector('.container');
const countdownH1 = document.querySelector('.countdown');

class CountdownTimer {
    constructor(durationInSeconds, attachTo, displayEl) {
        this.attachTo = attachTo;
        // this.displayEl = displayEl || this.createDisplay();
        this.displayEl = displayEl;
        this.timeObj = {
            hours: '',
            minutes: '',
            seconds: '',
            duration: durationInSeconds,
            // endDate: this.getStartingTime(),
            // timeLeft: this.calcTimeLeft()
            startDate: '',
            endDate: '',
            timeLeft: ''
        }
    }

    startTimer() {
        this.timeObj.startDate = Date.now();
        this.setEndDate();
        this.updateDisplay();
    }
    
    setEndDate() {
        this.timeObj.endDate = this.timeObj.startDate + this.timeObj.duration * 1000;
    }

    calcTimeLeft() {
        this.timeObj.timeLeft = (this.timeObj.endDate - Date.now())/1000;

        this.timeObj.hours = parseInt(this.timeObj.timeLeft/3600);
        this.timeObj.minutes = parseInt(this.timeObj.timeLeft/60);
        this.timeObj.seconds = parseInt(this.timeObj.timeLeft%60);
        return this.timeObj.timeLeft;
    }

    setDisplay() {
        if (!this.displayEl) this.createDisplay();
    }

    createDisplay() {
        let displayEl = document.createElement('h1');
        displayEl.classList.add('countdown');
        this.attachTo.appendChild(displayEl);
        return displayEl;
    }

    updateDisplay() {
        let updateInterval = setInterval(() => {
            this.calcTimeLeft();
            this.displayEl.textContent = `
            ${this.timeObj.hours != '' ? this.timeObj.hours + ':' : ''}
            ${this.timeObj.minutes != '' ? this.timeObj.minutes + ':' : ''}
            ${this.timeObj.seconds != '' ? this.timeObj.seconds : ''}`;
            console.log(this.timeObj);
            if (this.timeObj.timeLeft <= 0) clearInterval(updateInterval);
        }, 1000);

        // 
            
    }
}

function handleClick(e) {
    e.preventDefault();
    if (liEl = e.target.nodeName === 'LI') {
        switch (e.target.className) {
            case 'add-1s':
                console.log(e.target.className);
                break;
            case 'add-30s':
                console.log(e.target.className);
                // debugger;
                let countdownClock = new CountdownTimer(30, container, countdownH1);
                countdownClock.setDisplay(); 
                countdownClock.startTimer();
                countdownClock.updateDisplay();              
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

// function startCountdown(time) {
//     let timeObj = {
//         hours: '',
//         minutes: '',
//         seconds: '',
//         timeLeft: 0,
//         endDate: getStartingTime()
//     }

//     function getStartingTime() {
//         return Date.now() + time * 1000;
//     }

//     function calc() {

//         timeObj.timeLeft = (timeObj.endDate - Date.now())/1000;

//         timeObj.hours = parseInt(timeObj.timeLeft/3600);
//         timeObj.minutes = parseInt(timeObj.timeLeft/60);
//         timeObj.seconds = parseInt(timeObj.timeLeft%60);

//         if (timeObj.timeLeft <= 0) clearInterval(interval);
//         console.log(timeObj);
//     }
//     calc();
//     let interval = setInterval(calc, 1000);
//     return timeObj;
// }

// function displayCountdown(timeObj) {
//     let countDown;

//     if (countDown = document.querySelector('.countdown')) {
//         console.log('test');
//         console.log(countDown);
//     } else {
//         countDown = document.createElement('h1');
//         countDown.classList.add('countdown');
//         container.appendChild(countDown);
//     }

//     countDown.textContent = `
//         ${timeObj.hours != '' ? timeObj.hours + ':' : ''}
//         ${timeObj.minutes != '' ? timeObj.minutes + ':' : ''}
//         ${timeObj.seconds != '' ? timeObj.seconds : ''}`;
// }

nav.addEventListener('click', handleClick);

