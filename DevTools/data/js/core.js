const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello, I am a %s string!', 'AAAA');

// Styled
// console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow:10px 10px 0 blue');

// warning!
console.warn('OH NO');

// Error :|
console.error('OH NO');

// Info
console.info('OH NO');

// Testing
console.assert( 1 === 2, 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.dir(p);
console.clear();

// Grouping together
dogs.forEach(dog => {
    //console.groupCollapsed(`${dog.name}`);
    console.group(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('test');
console.count('test');
console.count('test');
console.count('test');
console.count('test');

//  stopping time
console.time('fetching data');
fetch('https://api.github.com/users/Exand0')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

// logging table
console.table(dogs);
