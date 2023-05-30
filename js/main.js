const BurgerBtn = document.querySelector('.container-burger')
const Dropdown = document.querySelector('.dropdown')

BurgerBtn.addEventListener('click', () => {
	BurgerBtn.classList.toggle('close')
	Dropdown.classList.toggle('active')
})
