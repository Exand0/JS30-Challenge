//Generating and appending watchface indications
const watchfaceDiv = document.querySelector('.watchface');
let numbers = [12, 3, 6, 9];
for (i = 0; i < 4; i++) {
    let digits = document.createElement('div');
    digits.classList.add('digits', `number${numbers[i]}`);
    digits.textContent = numbers[i];
    watchfaceDiv.appendChild(digits);
}
function moveClockHands() {
    date = new Date;
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let seconds = date.getSeconds();
    let hands = [
        {
            hand: 'hours',
            // 12h = 360°, 1h = 30°, multiplied by current hour count + hour fraction converted from minutes
            angle: 30 * (hours%12) + (minutes/60)
        },
        {
            // 1m = 6°
            hand: 'minutes',
            angle: 6 * minutes + seconds/60
        },
        {
            // 1m = 6°
            hand: 'seconds',
            angle: s = 6 * seconds
        }
    ]
    for (element of hands) {
        let hand = element.hand;

        // selecting one hand
        let handDiv = document.querySelector(`.${hand}`);
        
        // and rotating it
        handDiv.style.cssText = `transform:rotate(${element.angle}deg);`;

        // prevents hand's transition from 360° to 0° by removing transition property
        handDiv.style.transition = `${hands[2].angle === 0 ? 'none' : ''}`
    }
}
setInterval(moveClockHands, 1000);