// const data = [
// 	{
// 		title: 'Work',
// 		timeframes: {
// 			daily: {
// 				current: 5,
// 				previous: 7,
// 			},
// 			weekly: {
// 				current: 32,
// 				previous: 36,
// 			},
// 			monthly: {
// 				current: 103,
// 				previous: 128,
// 			},
// 		},
// 	},
// 	{
// 		title: 'Play',
// 		timeframes: {
// 			daily: {
// 				current: 1,
// 				previous: 2,
// 			},
// 			weekly: {
// 				current: 10,
// 				previous: 8,
// 			},
// 			monthly: {
// 				current: 23,
// 				previous: 29,
// 			},
// 		},
// 	},
// 	{
// 		title: 'Study',
// 		timeframes: {
// 			daily: {
// 				current: 0,
// 				previous: 1,
// 			},
// 			weekly: {
// 				current: 4,
// 				previous: 7,
// 			},
// 			monthly: {
// 				current: 13,
// 				previous: 19,
// 			},
// 		},
// 	},
// 	{
// 		title: 'Exercise',
// 		timeframes: {
// 			daily: {
// 				current: 1,
// 				previous: 1,
// 			},
// 			weekly: {
// 				current: 4,
// 				previous: 5,
// 			},
// 			monthly: {
// 				current: 11,
// 				previous: 18,
// 			},
// 		},
// 	},
// 	{
// 		title: 'Social',
// 		timeframes: {
// 			daily: {
// 				current: 1,
// 				previous: 3,
// 			},
// 			weekly: {
// 				current: 5,
// 				previous: 10,
// 			},
// 			monthly: {
// 				current: 21,
// 				previous: 23,
// 			},
// 		},
// 	},
// 	{
// 		title: 'Self Care',
// 		timeframes: {
// 			daily: {
// 				current: 0,
// 				previous: 1,
// 			},
// 			weekly: {
// 				current: 2,
// 				previous: 2,
// 			},
// 			monthly: {
// 				current: 7,
// 				previous: 11,
// 			},
// 		},
// 	},
// ];

// data.forEach((el)=>{
// 	const section=document.createElement("section")
// 	section.style="color: black;"
// 	const h2=document.createElement("h2")
// 	h2.textContent=el.title;
// 	section.appendChild(h2)

// 	Object.entries(el.timeframes).forEach((el)=>{
// 		const h3=document.createElement("h3")
// 		h3.textContent=el[0];
// 		section.appendChild(h3)
// 		const p=document.createElement("p")
// 		p.textContent=el[1].current
// 		section.appendChild(p)
// 		const p2=document.createElement("p")
// 		p2.textContent=`Prev ${el[1].previous}`
// 		section.appendChild(p2)
// 	})
// 	document.querySelector(".container").appendChild(section);
// })

const dayButton = document.querySelector('.day');
const weekButton = document.querySelector('.week');
const monthButton = document.querySelector('.month');
const weekDay = Array.from(document.querySelectorAll('.weeklyhours'));
const mothDay = Array.from(document.querySelectorAll('.monthlyhours'));
const days = Array.from(document.querySelectorAll('.dailyhours'));

const showOn = (elements) => {
	elements.forEach((e) => {
		e.style = 'display: block;';
	});
};
const hideOn = (elements) => {
	elements.forEach((e) => {
		e.style = 'display: none;';
	});
};

dayButton.addEventListener('click', () => {
	showOn(days);
	hideOn(mothDay);
	hideOn(weekDay);
});

weekButton.addEventListener('click', () => {
	showOn(weekDay);
	hideOn(mothDay);
	hideOn(days);
});

monthButton.addEventListener('click', () => {
	hideOn(days);
	showOn(mothDay);
	hideOn(weekDay);
});


// async function getData(apiLink){
// 	const response=await fetch(apiLink);
// 	const data=await response.json()
// 	return data;
// }

// async function getMoreData(){
// 	const countries=await getData("https://restcountries.com/v3.1/all")
// 	const cats=await getData("https://api.thecatapi.com/v1/breeds")
// 	return [countries,cats]
// }
// getMoreData().then(data=>{
// 	console.log(data)
// })
