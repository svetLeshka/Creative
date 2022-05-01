'use strict'

let options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.0
}
var callback = function (entries, observer) {
	let nav = document.querySelector('.nav-socials'),
		classList = nav.classList;
	if (!(classList.contains('freeze') || classList.contains('abs'))) {
		classList.add('freeze');
		return;
	}
	let main = document.querySelector('main');
	if (classList.contains('freeze')) {
		console.log(main.clientHeight, nav.getBoundingClientRect().bottom);
		nav.style.top = main.clientHeight - nav.getBoundingClientRect().bottom - nav.clientHeight + 'px';
		nav.style.bottom = nav.getBoundingClientRect().bottom + 'px';
		nav.style.left = -main.getBoundingClientRect().left + 'px';
		nav.style.position = 'absolute';
		classList.toggle('freeze');
		classList.toggle('abs');
	} else {
		nav.style.position = 'fixed';
		nav.style.top = (classList.contains('mobile')) ? 100 + 'px' : 200 + 'px';
		nav.style.bottom = document.clientHeight - nav.getBoundingClientRect().top - nav.offsetHeight + 'px';
		nav.style.left = '0';
		classList.toggle('freeze');
		classList.toggle('abs');
	}

};
var observer = new IntersectionObserver(callback, options);

let target = document.querySelector('footer');
observer.observe(target);