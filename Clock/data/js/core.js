const watchfaceDiv = document.querySelector('.watchface');
let numbers = [12, 3, 6, 9];
for (i = 0; i < 4; i++) {
    let digits = document.createElement('div');
    digits.classList.add('digits', `number${numbers[i]}`);
    digits.textContent = numbers[i];
    watchfaceDiv.appendChild(digits);
}

function moveClockHands(date) {
    date = new Date;
    let hands = [
        {
            hand: 'hours',
            angle: 30 * (date.getHours()%12) + (date.getMinutes()/60)
        },
        {
            hand: 'minutes',
            angle: 6 * date.getMinutes()
        },
        {
            hand: 'seconds',
            angle: s = 6 * date.getSeconds()
        }
    ]
    for (element of hands) {
        let hand = element.hand;
        let handDiv = document.querySelector(`.${hand}`);
        handDiv.style.cssText = `transform:rotate(${element.angle}deg);`;

    }
    setTimeout(moveClockHands, 1000);
}


let date = new Date;
window.addEventListener('load', moveClockHands(date));

//moveClockHands();