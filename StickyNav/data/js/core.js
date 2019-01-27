let navbar = document.querySelector('.nav');
let content = document.querySelector('.content')
const navTop = navbar.offsetTop;
const contentMarginTop = getComputedStyle(content).getPropertyValue('margin-top');
console.log(navbar.offsetHeight);

function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function fixNav(e) {
    // console.log(e.pageY);
    if (e.pageY >= navTop) {
        navbar.classList.add('nav-fixed');
        document.body.style.paddingTop = `${navbar.offsetHeight}px`;
    } else if (e.pageY <= (navTop + navbar.offsetHeight)) {
        navbar.classList.remove('nav-fixed');
        document.body.style.paddingTop = "";
    }
}

window.addEventListener('scroll', fixNav);