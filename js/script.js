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

// const box = document.getElementById('box'),
//     btns = document.getElementsByTagName('button'),
//     circles = document.getElementsByClassName('circle'),
//     wrapper = document.querySelector('.wrapper'),
//     hearts = wrapper.querySelectorAll('.heart'),
//     oneHeart = wrapper.querySelector('.heart');


// console.dir(oneHeart);
// console.log(oneHeart);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';


// box.style.cssText = `background-color: blue; width: 500px`;

// btns[1].style.borderRadius = '100%';

// circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'blue';
// });

// const div = document.createElement('div');
// // const text = document.createTextNode('Тут был я');

// div.classList.add('black');

// wrapper.append(div);
// wrapper.appendChild(div); //Устаревшая версия

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[0]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]); //Устаревшая версия

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = "<h1>Hello World</h1>";

// // div.textContent = "<h1>Hello World</h1>";

// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');

// const btns = document.querySelectorAll('button'),
//     btn = document.querySelector('button'),
//     overlay = document.querySelector('.overlay');

// btns.forEach(item => {
//     item.onclick = () => {
//         alert('hi');
//     }
// })

// btn.onclick = () => {
//     alert('second click');
// }

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('mouseenter', (event) => {
//     // console.log(event.target);
//     event.target.remove();
//     // console.log('Hover');
// });

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     console.log(e.type);
//     // i++;
//     // if (i === 1) {
//     //     btn.removeEventListener('click', deleteElement);
//     // }
// };

// btn.addEventListener('click', deleteElement, {once: true});
// overlay.addEventListener('click', deleteElement);


// btn.addEventListener('click', () => {
//     alert('second click');
// });

// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode);

// console.log(document.querySelector('[data-current="3"]').nextSibling.nextSibling);

// console.log(document.querySelector('[data-current="3"]').previousSibling);

// console.log(document.querySelector('[data-current="3"]').parentElement);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }


//     console.log(node);
// }

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// pow(2, 0); //1
// pow(2, 1); //2
// pow(2, 2); //4
// pow(2, 3); //8
// pow(2, 4); //16


/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */



/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению addInput - обращаемся к нему как addInput.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики


// 'use strict';

// document.addEventListener('DOMContentLoaded', () => {

//     const adv = document.querySelectorAll('img'),
//         poster = document.querySelector('.promo__bg'),
//         genre = poster.querySelector('.promo__genre'),
//         movieList = document.querySelector('.promo__interactive-list'),
//         addForm = document.querySelector('form.add'),
//         addInput = document.querySelector('.adding__input'),
//         checkbox = document.querySelector('[type="checkbox"]'),
//         dltBtn = document.querySelector('.delete');


//     const movieDB = {
//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };

//     addForm.addEventListener('submit', handleFormSubmit);

//     function handleFormSubmit(event) {
//         event.preventDefault();
//         let film = addInput.value.trim();
//         if (!film) {
//             return;
//         }
//         const lengthLimit = 21;
//         if (film.length > lengthLimit) {
//             film = film.substring(0, lengthLimit) + "...";
//         }
//         if (checkbox.checked) {
//             console.log('Добавляем любимый фильм');
//         }
//         movieDB.movies.push(film);
//         sortArr(movieDB.movies);
//         createMovieList(movieDB.movies, movieList);
//         event.target.reset();
//     }

//     const deleteAdv = (arr) => {
//         arr.forEach(img => {
//             img.remove();
//         });
//     };

//     const makeChanges = () => {
//         genre.textContent = "драма";

//         poster.style.backgroundImage = "url(../img/bg.jpg)";
//     };

//     const sortArr = (arr) => {
//         arr.sort();
//     };

//     function createMovieList(films, parent) {

//         parent.innerHTML = "";

//         sortArr(films);

//         films.forEach((item, i) => {

//             parent.innerHTML += `                        
//             <li class="promo__interactive-item">${i + 1}) ${item}
//                 <div class="delete"></div>
//             </li>`;
//         });

//         document.querySelectorAll('.delete').forEach((btn, i) => {
//             btn.addEventListener('click', () => {
//                 btn.parentElement.remove();
//                 movieDB.movies.splice(i, 1);

//                 createMovieList(films, parent);
//             });
//         });
//     }

//     deleteAdv(adv);
//     makeChanges();
//     createMovieList(movieDB.movies, movieList);

// });


//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

// window.addEventListener('DOMContentLoaded', () => {
//     const header = document.querySelector('.header');

//     header.addEventListener('touchstart', (e) => {
//         e.preventDefault();
//         console.log('Start');
//         // console.log(e.touches);
//         console.log(e.targetTouches);
//     });

//     header.addEventListener('touchmove', (e) => {
//         e.preventDefault();

//         console.log('Move');
//         console.log(e.targetTouches[0].pageX);
//     });

//     // header.addEventListener('touchend', (e) => {
//     //     e.preventDefault();
//     //     console.log('End');
//     // });
// });

// //touches
// //targetTouches
// //changedTouches


//