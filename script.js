const firstButton = document.querySelector('.day');
const secondButton = document.querySelector('.week');
const thirdButton = document.querySelector('.month');
const weekDay = document.querySelector('.weekday');
const mothDay = document.querySelector('.mothday');
const days = document.querySelector('.days');

firstButton.addEventListener('click', () => {
	days.classList.remove('hidden');
	mothDay.style.display = 'none';
	weekDay.style.display = 'none';
});

secondButton.addEventListener = document.querySelector('click', () => {
	weekDay.classList.remove('hidden');
	mothDay.style.display = 'none';
	days.style.display = 'none'
});
thirdButton.addEventListener = document.querySelector('click', () => {
	mothDay.classList.remove('hidden')
	days.style.display = 'none';
	weekDay.style.display = 'none'
})