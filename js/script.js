'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');;

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {

//     },
//     actors: {

//     },
//     genres: [

//     ],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     let lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', '');
//     let filmScore = +prompt('На сколько оцените его?', '');
//     personalMovieDB.movies[lastWatchedFilm] = filmScore;
// }

// console.log(personalMovieDB);


// const hamburger = 2;
// const fries = 1;

// if (hamburger === 3 && fries) {
//     console.log('NICE');
// }

// let a, b, c, d, e = 'lox';

// console.log(a || b || c || d || e);

// *
// **
// ***
// ****
// *****

// for (let i = 0; i < 5; i++) {
//     if (i === 0) {
//         console.log('*');
//     }
//     else if (i === 1) {
//         console.log('**');
//     }
//     else if (i === 2) {
//         console.log('***');
//     }
//     else if (i === 3) {
//         console.log('****');
//     }
//     else if (i === 4) {
//         console.log('*****');
//     }
// }


// let result = '';

// const length = 7;

// for (let i = 0; i < length; i++) {
    
//     for (let j = 0; j < i; j ++) {

//         result += '*';

//     }

//     result += "\n";
// }

// console.log(result);



// start: while (true) {

//     let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

//     if (numberOfFilms === '' || numberOfFilms === null || numberOfFilms.length > 50) {
//         continue start;ё
//     }

//     numberOfFilms = +numberOfFilms;

//     const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {
    
//         },
//         actors: {
    
//         },
//         genres: [
    
//         ],
//         privat: false
//     };
    
//     for (let i = 0; i < 2; i++) {
//         let lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', '');
//         let filmScore = +prompt('На сколько оцените его?', '');
//         personalMovieDB.movies[lastWatchedFilm] = filmScore;
//     }
    
//     if (personalMovieDB.count < 10) {
//         alert(`Просмотрено довольно мало фильмов`);
//     }
//     else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         alert(`Вы классический зритель`);
//     }
//     else if (personalMovieDB.count > 30) {
//         alert(`Вы киноман`);
//     }
//     else {
//         alert("Произошла ошибка");
//     }

//     console.log(personalMovieDB);

// }

function showFirstMessage() {
    
}
