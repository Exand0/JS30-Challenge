let div = document.querySelector('div');
let body = document.querySelector('body');
let p = div.querySelector('p');
let walk = 100;

function moveShadow(e) {
    // let height = div.offsetHeight;
    // let width = div.offsetWidth;
    let { offsetHeight: height, offsetWidth: width} = body;
    let {offsetX: x, offsetY: y} = e;
    // console.log(x,y);
    // console.log(this, e.target);
    // this === body
    // e.target === where the event is triggered
    // console.log(e.target.offsetLeft);
    if (this != e.target) {
        // offset in the target (p) + offset of the target(p)
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x/width*walk) - (walk/2));
    const yWalk = Math.round((y/height*walk) - (walk/2));
    
    p.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.6),
        ${xWalk *-1}px ${yWalk}px 0 rgba(0,255,255,0.6),
        ${yWalk}px ${xWalk *-1}px 0 rgba(0,0,255,0.6),
        ${yWalk *-1}px ${xWalk}px 0 rgba(255,0,255,0.6)
    
    `;
}

body.addEventListener('mousemove', moveShadow);