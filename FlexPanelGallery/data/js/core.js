let galContainer = document.querySelector('.container');

function toggleImageStyle(e) {
    let galElement = e.target;
    if (e.target.tagName === 'P') {
        galElement = e.target.parentNode;
    }
    galElement.classList.toggle('active');
}

function addTextStyle(e) {
    if (e.propertyName.includes('flex')) {
        e.target.classList.toggle('opened');
        addFilter();
    }
}

function addFilter() {
    let images = Array.from(document.querySelectorAll('.panel'));

    let inactiveImages = images.filter(div => {
        if (div.classList.contains('active')) return;
        return div;
    });

    let activeImages = images.filter(div => {
        if (div.classList.contains('active')) return div;
        return;
    });

    inactiveImages.forEach(div => {
        if (activeImages.length === 0) {
            div.classList.remove('overlay');
        } else {
            div.classList.add('overlay');
        }
    })

    activeImages.forEach(div => {
        div.classList.remove('overlay');
    })
}

galContainer.addEventListener('click', toggleImageStyle);
galContainer.addEventListener('transitionend', addTextStyle);

