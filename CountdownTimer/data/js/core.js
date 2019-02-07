const nav = document.querySelector('.nav');
const buttons = nav.querySelectorAll('.nav ul li');
const container = document.querySelector('.container');
// const countdownH1 = container.querySelector('.countdown');
const inputCustomTime = nav.querySelector('input[type=number]');

class CountdownTimer {
    constructor(attachTo) {
        this.attachTo = attachTo;
        this.displayEl, this.displayEndEl;
        // this.displayEl = this.createDisplay();
        // this.displayEndEl = this.createDisplay(secondary)
        this._isRunning = false;
        this.updateRepeater = null;
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
        if (!(this.displayEl || this.displayEndEl)) this.createDisplay();

        if (this._isRunning == false) {
            this.timeObj.startDate = Date.now();

        }
        this.setEndDate();
        if (this._isRunning == false) {
            this.updateDisplay();
            this._isRunning = true;
        }
    }

    toggleTimer() {
        if (this._isRunning) {
            clearInterval(this.updateRepeater);
            this._isRunning = false;
            console.log('test');
        } else if (!this._isRunning){
            this.timeObj.startDate = Date.now(); 
            this.setDuration(this.timeObj.timeLeft);
            this.setEndDate();
            this.updateDisplay();
            this._isRunning = true;
            console.log('test2');
        }
        console.log(this.timeObj);
    }
    
    setEndDate() {
        this.timeObj.endDate = this.timeObj.startDate + this.timeObj.duration * 1000;
    }

    setDuration(seconds, add) {
        add ? this.timeObj.duration += seconds : this.timeObj.duration = seconds;
    }

    padNumbers(number) {
        return number.toString(10).padStart(2, 0);
    }

    calcTimeLeft() {
        this.timeObj.timeLeft = Math.ceil((this.timeObj.endDate - Date.now())/1000);

        let time = this.convFromSec(this.timeObj.timeLeft);

        this.timeObj.hours = time.hours;
        this.timeObj.minutes = time.minutes;
        this.timeObj.seconds = time.seconds;
    }

    convFromSec(sec) {
        let time = {
            hours: '',
            minutes: '',
            seconds: ''
        }
        time.hours = parseInt(sec/3600);
        time.minutes = parseInt((sec - time.hours*3600)/60);
        time.seconds = parseInt(sec%60);
        return time;
    }

    createDisplay() {
        this.displayEl = document.createElement('h1');
        this.displayEndEl = document.createElement('p');

        this.displayEl.classList.add('countdown');
        this.displayEndEl.classList.add('countdown-end');

        this.attachTo.appendChild(this.displayEl);
        this.attachTo.appendChild(this.displayEndEl);

        this.displayEl.addEventListener('click', () => this.toggleTimer());
    }

    display() {
        let hours = this.timeObj.hours;
        let minutes = this.timeObj.minutes;
        let seconds = this.timeObj.seconds;
        this.displayEl.textContent = `
            ${hours != '' ? this.padNumbers(hours) + (this.padNumbers(minutes) != 0 ? ' : ': '') : ''}
            ${minutes != '' ? this.padNumbers(minutes) + (this.padNumbers(seconds) != 0 ? ' : ' : '' ) : ''}
            ${seconds != '' ? this.padNumbers(seconds) : ''}`; 
            
            console.log(`${hours} : ${minutes} : ${seconds}`);

        // let endTime = this.convFromSec(this.timeObj.endDate - this.timeObj.startDate);
        // this.displayEndEl.textContent = `${endTime.hours} : ${endTime.minutes}`     
    }  

    updateDisplay(frequency=1000) {
        this.calcTimeLeft();
        this.display();
        this.updateRepeater = setInterval(() => {
            this.calcTimeLeft();
            this.display()
            if (this.timeObj.timeLeft < 1) this.resetClock();
        }, frequency);
    }

    resetClock() {
        clearInterval(this.updateRepeater);
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
        // countdownClock.setDisplay(); 
        switch (e.target.className) {
            case 'pause':
                countdownClock.toggleTimer()
                break;
            case 'add-1s':
                countdownClock.setDuration(1, true);
                countdownClock.startTimer();
                break;
            case 'add-30s':
                countdownClock.setDuration(30, true);
                countdownClock.startTimer();
                break;
            case 'add-1m':
                countdownClock.setDuration(60, true);
                countdownClock.startTimer();
                break;
            case 'add-1h':
                countdownClock.setDuration(3600, true);
                countdownClock.startTimer();
                break;
            case 'add-custom':
                countdownClock.setDuration(inputCustomTime.valueAsNumber, true);
                inputCustomTime.value = '';
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
let countdownClock = new CountdownTimer(container);

