// || == ИЛИ
// || Возвращает первое true значение либо последнее значение (в любом случае)
// || Можно применять для короткого замыкания, когда если true - выполнить что-то слева,
// если false - обязательно выполнить правое выражение
// user.isAdmin || redirect();

let a;

a = 1 || 2; // 1
a = 0 || 2; // 2, потому что Boolean(0) === false

const age = 25;

if (age > 20 || age < 25){
    console.log('Welcome!');
}

// && == И
// Возвращает true, только если все переданные аргументы true, иначе возвращает первый встреченный false-аргумент
// Так же можно применять для короткого замыкания
// true && doSomething()

let b;

if (false && 5) {
    console.log('nothing');
}

b = 0 && 5; // 0
b = true && '100%' // 100
// {isLoading && <p>100%</p>}

const check = 10 && 0 && 20 && 'hello' // 0

// ! == Логическое отрицание
// Так же меняет значение на противоположное: !true == false, !!true = true
// !!value == Boolean(value), вкусовщина

const false_variable = false;
console.log('nothing') ? false_variable : console.log('always false');

// ?? Возвращает правый операнд, если левый равен null или undefined, иначе возвращает левый операнд

const d = null
console.log(d ?? 'd is null')