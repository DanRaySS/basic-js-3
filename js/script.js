'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [

    ],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', '');
    let filmScore = +prompt('На сколько оцените его?', '');
    personalMovieDB.movies[lastWatchedFilm] = filmScore;
}

console.log(personalMovieDB);
