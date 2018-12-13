const clock_div = document.querySelector('.clock');
let numbers = [12, 3, 6, 9];
for (i = 0; i < 4; i++) {
    let digits = document.createElement('div');
    digits.classList.add('digits', `number${numbers[i]}`);
    digits.textContent = numbers[i];
    clock_div.appendChild(digits);
}

function moveClockHands() {
    let currentDate = new Date;
    let h = 30 * (currentDate.getHours()%12) + (currentDate.getMinutes()/60);
    let m = 6 * currentDate.getMinutes();
    let s = 6 * currentDate.getSeconds();

    let hourHand = document.querySelector('.hours');
    let minuteHand = document.querySelector('.minutes');
    let secondHand = document.querySelector('.seconds');

    hourHand.style.cssText = `transform:rotate(${h}deg);`;
    minuteHand.style.cssText = `transform:rotate(${m}deg);`;
    secondHand.style.cssText = `transform:rotate(${s}deg);`;

    setTimeout(moveClockHands, 1000);
}

window.addEventListener('load', moveClockHands);

//moveClockHands();