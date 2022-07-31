'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

const poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    adv = document.querySelector('.promo__adv'),
    film = document.querySelector('.adding__input'),
    check = film.nextElementSibling.nextElementSibling,
    form = document.querySelector('form.add'),
    deleteElements = document.querySelectorAll('.delete');

genre.textContent = 'драма';

adv.querySelectorAll('img').forEach(function (item) {
    item.remove();
});

poster.style.backgroundImage = 'url("img/bg.jpg")';
outputFilmList();

function outputFilmList() {
    movieList.innerHTML = '';
    movieDB.movies.forEach((item, index) => {movieDB.movies[index] = item.toUpperCase()});
    movieDB.movies.sort();

    movieDB.movies.forEach(function (item, index) {
        movieList.insertAdjacentHTML('beforeend', `
        <li class="promo__interactive-item">${index + 1}. ${item}
            <div class="delete"></div>
        </li>`);
    });

    document.querySelectorAll('.delete').forEach((item, index) => {
        item.addEventListener('click', () => {
            item.parentElement.remove();
            movieDB.movies.splice(index, 1);
            outputFilmList();
        });
    });
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (film.value) {
        if (film.value.length < 22) {
            movieDB.movies.push(film.value);
        } else {
            movieDB.movies.push(film.value.slice(0, 21) + '...');
        }
        if (check.checked) {
            console.log('Favorite film was added.')
        }
        outputFilmList();
        event.target.reset();
    }
});




