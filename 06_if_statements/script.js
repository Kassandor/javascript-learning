// If statements - Условные ветвления

const age = 18;

if (age >= 18) {
    console.log('Welcome!');
} else {
    console.log('Your age less then 18');
}

if (age !== 18) {
    console.log('Your age not 18');
}

// Примеры с приведением к bool-типу
if (0) {
} // false
if (1) {
} // true
if ('0') {
} // true
if ('') {
} // false
if (' ') {
} // true

// Пример с пользовательским вводом
// const res = prompt('What is your name?', 'default_name');
// console.log(res);
//
// if (res === 'Alex') {
//     alert('Welcome, Alex');
// } else {
//     alert(`Welcome, stranger ${res}`);
// }

// Тернарный оператор

const myAge = 20;

// Через if-statement
// if (myAge >= 18) {
//     // ...
// } else {
//     // ...
// }

// Через Тернарный оператор
// ? == if, : == else
myAge > 18 ? console.log('Welcome!') : console.log('Your age');
