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
	images.forEach(image => {
		let slideInAt = (window.scrollY + window.innerHeight) - (image.height/2);
		let imageBottom = image.offsetTop + image.height;
		let halfShown = slideInAt > image.offsetTop;
		let notScrolledPassed = window.scrollY < imageBottom;
		if (halfShown && notScrolledPassed) {
			image.classList.add('active');
		} else {
			image.classList.remove('active');
		}
		console.log(halfShown);
	})
		// let slideInAt = (window.scrollY + window.innerHeight) - (images[1].height/2);
		// let imageBottom = images[1].offsetTop + images[1].height;
		// let halfShown = slideInAt > images[1].offsetTop;
		// console.log(slideInAt);
		// console.log(images[1].offsetTop);
		// console.log(halfShown);
    
    // console.log(e.pageY);
}

window.addEventListener('scroll', debounce(checkPosition));