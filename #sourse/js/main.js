'use strict';

const movieDB = {
	movies: [
		'Логан',
		'Лига справедливости',
		'Ла-ла ленд',
		'Одержимость',
		'Скот Пилигрим против...',
	],
};

//1 
advertising.forEach(item => item.remove());

//2 
genre.textContent = 'драма';
filmName.textContent = 'sky дети света';

//3
poster.style.background = 'url("../../img/bg.jpg")';

//4
movieList.innerHTML = '';
movieDB.movies.sort();

//5
movieDB.movies.forEach((film, index) => {
	movieList.innerHTML += `
		<li class="user__column_item">${index + 1} ${film}</li>
	`;
});