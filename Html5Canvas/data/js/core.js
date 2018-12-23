const canvas = document.querySelector('.board');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let ctx = canvas.getContext('2d');
ctx.strokeStyle = '#BADA55';
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = '2em';

let lastX = 0;
let lastY = 0;
let isDrawing = false;

function draw(e) {
    if(!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    [lastX, lastY] = [e.clientX, e.clientY];
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.clientX, e.clientY];
});

canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mousemove', draw);




// if (canvas.getContext) {


// } else {
//     canvas.innerHTML = '<p>canvas are not supported</p>'
// }









