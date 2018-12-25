let entriesArray = Array.from(document.querySelectorAll('.item input'));
let container = document.querySelector('.container');
let button = document.querySelector('button');

let first;

container.addEventListener('click', e => {
    let currentCheckbox = e.target;
    let inBetween = false;
    if (currentCheckbox.className === 'checkbox' && currentCheckbox.checked ) {
        if (e.shiftKey) {
            entriesArray.forEach(entry => {
                // the variable inBetween is set to true after the first clicked checkbox till the last checked checkbox is encountered
                if (entry === first || entry === currentCheckbox) {
                    console.log('Checking started');
                    inBetween = !inBetween;
                    console.log(inBetween);
                }
                if (inBetween) {
                    entry.checked = true;
                  }
            })

            // checkboxes.forEach(checkbox => {
            //     console.log(checkbox);
            //     if (checkbox === this || checkbox === lastChecked) {
            //       inBetween = !inBetween;
            //       console.log('Starting to check them in between!');
            //     }
          
            //     if (inBetween) {
            //       checkbox.checked = true;
            //     }
            // });
        }
    }
    first = currentCheckbox;
    // if (checkbox.checked === true) {
    //     first = 
    // }
    // console.log(entriesArray.findIndex(checkbox => checkbox.checked == true));
})

// window.addEventListener('keydown', e => console.log(e.keyCode));

// 16

function clearAll(e) {
    entriesArray.forEach(checkbox => checkbox.checked = false)
}

button.addEventListener('click', clearAll);

document.addEventListener('readystatechange', clearAll);