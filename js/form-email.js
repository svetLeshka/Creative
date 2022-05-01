$(document).ready(function () {
	$('[class *= "__input"]').focus(function (event) {
		let elem = event.target.closest('form');
		elem.classList.toggle('updates-input__focused');
		elem.classList.toggle('updates-input__blured');
	});
	$('[class *= "__input"]').blur(function (event) {
		let elem = event.target.closest('form');
		elem.classList.toggle('updates-input__focused');
		elem.classList.toggle('updates-input__blured');
	});
});