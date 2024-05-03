'use strict';
const form = document.getElementById('myForm');

form.addEventListener('submit', event => {
	const formInput = document.getElementById('formEmail');
	if (!formInput.validity.valid) {
		event.preventDefault();
		form.classList.add('logic-error');
	} else {
		form.classList.remove('logic-error');
		sessionStorage.setItem('email', formInput.value);
	}
});
