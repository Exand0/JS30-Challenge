const images = document.querySelectorAll('img');

// limits the rate at which a given function is executed
function debounce(func, wait, immediate) {
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

function checkPosition(e) {
    console.log(window.scrollY + window.innerHeight);
    // console.log(e.pageY);
}

window.addEventListener('scroll', debounce(checkPosition));