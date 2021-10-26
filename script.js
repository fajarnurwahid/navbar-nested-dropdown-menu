const allDropdown = document.querySelectorAll('.dropdown');
const firstDropdown = document.querySelector('.dropdown.first');

allDropdown.forEach(item=> {
	if(firstDropdown.parentElement.offsetLeft < window.innerWidth / 2) {
		item.classList.add('right');
	} else {
		item.classList.add('left');
	}
})