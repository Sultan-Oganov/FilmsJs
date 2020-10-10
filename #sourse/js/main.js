'use strict';

document.addEventListener('DOMContentLoaded', () => {
	
	const movieDB = {
		movies: [
			'Логан',
			'Лига справедливости',
			'Ла-ла ленд',
			'Одержимость',
			'Скот Пилигрим против...',
		],
	};

	const advertising = document.querySelectorAll('.advertising__item'),
			poster = document.querySelector('.poster__bg'),
			genre = poster.querySelector('.poster__label_genre'),
			filmName = poster.querySelector('.poster__label_name'),
			filmDescription = poster.querySelector('.poster__label_description'),
			movieList = document.querySelector('.user__column_list'),
			addForm = document.querySelector('.form'),
			addInput = addForm.querySelector('.form__input_f'),
			checkbox = addForm.querySelector('[type="checkbox"]');

	addForm.addEventListener('submit', (event) => {
		event.preventDefault();

		let newFilm = addInput.value;
		const favorite = checkbox.checked;

		if (newFilm) {

			if (newFilm.length > 21) {
				newFilm = `${newFilm.substring(0, 22)}...`;
			}

			if (favorite) {
				console.log('Добавляем любимый фильм');
			}

			movieDB.movies.push(newFilm);
			sortArr(movieDB.movies);

			createMovieList(movieDB.movies, movieList);
		}

		event.target.reset();
	});

	const deleteAdv = (arr) => {
		arr.forEach(item => item.remove());
	};

	const makeChanges = () => {
		genre.textContent = 'драма';
		filmName.textContent = 'sky дети света';
		filmDescription.textContent = 'Sky: Children of the Light — приключенческая компьютерная инди-игра';

		poster.style.background = 'url("../../img/bg.jpg") 0 0/ cover no-repeat';
	};

	const sortArr = (arr) => {
		arr.sort();
	};

	function createMovieList(films, parent) {
		parent.innerHTML = '';
		sortArr(films);

		films.forEach((film, index) => {
			parent.innerHTML += `
				<li class="user__column_item">${index + 1} ${film}<div class="delete"></div></li>
			`;
		});

		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);

				createMovieList(films, parent);
			});
		});
	}

	deleteAdv(advertising);
	makeChanges();
	createMovieList(movieDB.movies, movieList);
});