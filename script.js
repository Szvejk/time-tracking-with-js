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
