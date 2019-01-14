let liEl = Array.from(document.querySelectorAll('[data-time]'));
// console.log(liEl);
let totalTime = liEl.reduce((total, li) => {
    let timeArr = li.dataset.time.split(':');
    let timeInMins = (parseFloat(timeArr[0]))+(parseFloat(timeArr[1])/60);
    return total+timeInMins;
}, 0);
let mins = parseInt(totalTime%60);
let hours = parseInt(totalTime/60);
console.log(`Total length of the videos: ${hours}:${mins}`);


// liEl.forEach(li => {
//     let timeArr = li.dataset.time.split(':');
//     let timeInMins = (parseFloat(timeArr[0])*60)+(parseFloat(timeArr[1]));
//     console.log(timeInMins);
// }); 