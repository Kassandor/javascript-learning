// Functions - callbacks, iife, arrow functions

const log = console.log;

function one() {
    log('one');
}

function two() {
    log('two');
}

function three() {
    log('three');
}

// Колбек - это функция, передаваемая в качестве аргумента в другую функцию
function show_greeting(callback: () => void) {
    callback();
    return 'some';
}

show_greeting(two);

function getInfo(name, age) {
    return `Name: ${name} Age: ${age}`;
}

function getInfoWithCurrentDate(callback: (name: string, age: number) => string) {
    const now = new Date();
    log(`Today: ${now.toISOString()};\n${callback('Alex', 33)}`);
}

getInfoWithCurrentDate(getInfo);

function survey(question, agreedFn, disagreeFn) {
    if (confirm(question)) {
        agreedFn();
    } else {
        disagreeFn();
    }
}

// Пример говна конечно, но смысл в том, что confirm выдаст в браузере окошко, если нажмем ОК - будет ветка if
survey('you are my friend?', function () {
    log('Yes');
}, function () {
    log('No');
});

// Стрелочные функции
// если нет блока {} - выражение после стрелки автоматически становится return.
// Логика инициализации такая же, что и при Func Expressions, они инициализируются на втором этапе при интерпретации
const sum = (a, b) => a + b;

log(sum(10, 20));

// IIFE - Imediatly-infoked function expressions (немедленно вызываемые функции)

// Ошибка - декларировать функцию без имени нельзя.
// function () {
//     log('hello IIFE');
// }

// Суть такая, когда интерпретатор на второй фазе (Execution) дойдет до сюда - функция сразу же выполнится.
// Это старая история, сейчас в ней нет смысла, можно юзать {} и получать тот же результат. Либо ES modules.
// Это так же Function Expression
(function () {
    log('hello IIFE');
}());