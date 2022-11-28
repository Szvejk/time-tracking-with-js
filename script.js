const firstButton = document.querySelectorAll('.day');
const secondButton = document.querySelectorAll('.week');
const thirdButton = document.querySelectorAll('.month');
const weekDay = document.querySelectorAll('.weekday');
const mothDay = document.querySelectorAll('.mothday');
const days = document.querySelectorAll('.days');


Array.from(document.querySelectorAll(day))
Array.from(document.querySelectorAll(week))
Array.from(document.querySelectorAll(month))
Array.from(document.querySelectorAll(weekday))
Array.from(document.querySelectorAll(mothday))
Array.from(document.querySelectorAll(days))


firstButton.addEventListener('click', () => {
	days.forEach(e => {
		days.classList.remove('hidden')
	})
});

secondButton.addEventListener ('click', () => {
weekDay.forEach(e => {
	weekDay.classList.remove('hidden')
})
});

thirdButton.addEventListener ('click', () => {
mothDay.forEach(e => {
mothDay.classList.remove('hidden')

})
})