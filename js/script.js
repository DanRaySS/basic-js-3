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

// 'use strict';

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     console.log(num);
// }

// showFirstMessage("Hello");
// console.log(num);

// //Function Declaration
// function calc(a, b) {
//     return a + b;
// }

// //Function Expression
// const res = function () {
//     ///
// }

// //Arrow Function
// const res2 = (a, b) => console.log(a + b);

// "use strict";

// function first() {
//     //Do smth

//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошёл этот урок!');
// }

// learnJS('JavaScript', done);

// 'use strict';

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },
//     makeTest: function () {
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// "use strict";

// const arr = [1, 20, 3, 40, 5];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr[10] = 0;

// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// })

// arr.pop();
// arr.push(10);

// arr.shift();
// arr.unshift(2);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();

// console.log(products.join('; '));
// console.log(products);


// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// let str = 'some';
// let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));
// // console.log(strObj);

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log('Say Hello');
//     }
// };

// const john = Object.create(soldier);

// // const john = {
// //     health: 100
// // };

// // john.__proto__ = soldier;

// // Object.setPrototypeOf(john, soldier);

// john.sayHello();

// console.log(john);

// "use strict";

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

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

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {

//         const lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', '').trim(),
//               filmScore = prompt('На сколько оцените его?', '');

//         if (numberOfFilms === '' || numberOfFilms === null || numberOfFilms.length > 50) {
//             console.log('error');
//             i--;
//             continue;
//         }
//         personalMovieDB.movies[lastWatchedFilm] = filmScore;
//         console.log('done');
//     }

// }

// function detectPersonalLevel() {
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
// }

// function showMyDB(hidden) {
//     if (hidden) {
//         return;
//     }
//     console.log(personalMovieDB);
// }

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}: `, '');
//     }
// }

// rememberMyFilms();

// detectPersonalLevel();

// writeYourGenres();

// showMyDB(personalMovieDB.privat);

// "use strict";

// const personalMovieDB = {
//     count: 0,
//     movies: {

//     },
//     actors: {

//     },
//     genres: [

//     ],
//     privat: false,

//     start: function () {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },

//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {

//             const lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', '').trim(),
//                 filmScore = prompt('На сколько оцените его?', '');

//             if (personalMovieDB.count === '' || personalMovieDB.count === null || personalMovieDB.count.length > 50) {
//                 console.log('error');
//                 i--;
//                 continue;
//             }
//             personalMovieDB.movies[lastWatchedFilm] = filmScore;
//             console.log('done');
//         }
//     },

//     detectPersonalLevel: function () {
//         if (personalMovieDB.count < 10) {
//             alert(`Просмотрено довольно мало фильмов`);
//         }
//         else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//             alert(`Вы классический зритель`);
//         }
//         else if (personalMovieDB.count > 30) {
//             alert(`Вы киноман`);
//         }
//         else {
//             alert("Произошла ошибка");
//         }
//     },

//     showMyDB: function (hidden) {
//         if (hidden) {
//             return;
//         }
//         console.log(personalMovieDB);
//     },

//     writeYourGenres: function () {
//         start: for (let i = 1; i <= 3; i++) {
//             let favouriteGenre = prompt(`Ваш любимый жанр под номером ${i}: `, '');
//             if (favouriteGenre === '' || favouriteGenre === null) {
//                 i--;
//                 continue start;
//             }
//             personalMovieDB.genres[i - 1] = favouriteGenre;
//         }
//         personalMovieDB.genres.forEach((genre, index) => {
//             console.log(`Любимый жанр #${index + 1} - это ${genre}`);
//         });
//     },

//     toggleVisibleMyDB: function () {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//             return;
//         }
//         personalMovieDB.privat = true;
//     }
// };

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB(personalMovieDB.privat);

// console.log([ ] + false - null + true); = NaN ([ ] = "")

// let y = 1; let x = y = 2; alert(x); 

// console.log([ ] + 1 + 2); //12

// alert( "1"[0] ) //1

// console.log(2 && 1 && null && 0 && undefined );

// !!( a && b ) и (a && b) - est' raznica-

// alert( null || 2 && 3 || 4 ); //3

// console.log([1, 2, 3] == [1, 2, 3]);

// alert( +"Infinity" ); 

// console.log("Ёжик" > "яблоко"); //false

// console.log(0 || "" || 2 || undefined || true || falsе);

