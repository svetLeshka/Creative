'use strict'

function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
}
let socials = document.querySelector('.nav-socials');
socials.classList.add((isMobile()) ? 'mobile' : 'desktop');