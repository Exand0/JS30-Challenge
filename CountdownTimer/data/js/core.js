const nav = document.querySelector('.nav');
const buttons = nav.querySelectorAll('.nav ul li');
const container = document.querySelector('.container');
const countdownH1 = container.querySelector('.countdown');
const inputCustomTime = nav.querySelector('input[type=number]');

class CountdownTimer {
    constructor(attachTo, displayEl) {
        this.attachTo = attachTo;
        // this.displayEl = displayEl || this.createDisplay();
        this._isRunning = false;
        this.updateRepeater = null;
        this.displayEl = displayEl;
        this.timeObj = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            duration: 0,
            startDate: 0,
            endDate: 0,
            timeLeft: 0
        }
    }

    startTimer() {
        console.log(this._isRunning);
        if (this._isRunning == false) {
            this.timeObj.startDate = Date.now();

        }
        this.setEndDate();
        if (this._isRunning == false) {
            this.updateDisplay();
            this._isRunning = true;
        }
    }
    
    setEndDate() {
        this.timeObj.endDate = this.timeObj.startDate + this.timeObj.duration * 1000;
    }

    setDuration(seconds) {
        this.timeObj.duration += seconds;
    }

    calcTimeLeft() {
        this.timeObj.timeLeft = Math.ceil((this.timeObj.endDate - Date.now())/1000);

        this.timeObj.hours = parseInt(this.timeObj.timeLeft/3600);
        this.timeObj.minutes = parseInt((this.timeObj.timeLeft - (this.timeObj.hours*3600))/60);
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

    display() {
        let hours = this.timeObj.hours;
        let minutes = this.timeObj.minutes;
        let seconds = this.timeObj.seconds;
        this.displayEl.textContent = `
            ${hours != '' ? hours + (minutes != '' ? ' : ': '') : ''}
            ${minutes != '' ? minutes + (seconds != '' ? ' : ' : '' ) : ''}
            ${seconds != '' ? seconds : ''}`;       
    
    }  

    updateDisplay(frequency=1000) {
        this.calcTimeLeft();
        this.display();
        this.updateRepeater = setInterval(() => {
            this.calcTimeLeft();
            this.display()
            if (this.timeObj.timeLeft < 1) clearInterval(this.updateRepeater);
        }, frequency);
        console.log(this.timeObj);
    }

    resetClock() {
        clearInterval(this.updateRepeater);
        console.log(this.timeObj);
        for (let key in this.timeObj) {
            this.timeObj[key] = 0;
        }
        this._isRunning = false;
        this.display();
    }
}

function handleClick(e) {
    e.preventDefault();
    if (liEl = e.target.nodeName === 'LI') {
        countdownClock.setDisplay(); 
        switch (e.target.className) {
            case 'add-1s':
                countdownClock.setDuration(1);
                countdownClock.startTimer();
                break;
            case 'add-30s':
                countdownClock.setDuration(30);
                countdownClock.startTimer();
                break;
            case 'add-1m':
                countdownClock.setDuration(60);
                countdownClock.startTimer();
                break;
            case 'add-1h':
                countdownClock.setDuration(3600);
                countdownClock.startTimer();
                break;
            case 'add-custom':
                countdownClock.setDuration(30);
                countdownClock.startTimer();
                break;
            case 'reset':
                if (countdownClock) {
                    countdownClock.resetClock()
                    console.log(countdownClock);
                }
                break;
            }
    }
}

nav.addEventListener('click', handleClick);
let countdownClock = new CountdownTimer(container, countdownH1);

