// 8 типов данных
// number, bigInt, string, boolean, undefined, null, symbol


// number
const age = 28;
console.log(age);
console.log(typeof age);

// string
const firstName = 'alex';
console.log(firstName);
console.log(typeof firstName);

// bigint
const bigNumber = 12394523492349234932492394;
console.log(bigNumber);
console.log(typeof bigNumber);

// boolean
const isActive = true;
console.log(isActive);
console.log(typeof isActive);

// undefined
const und = undefined;
console.log(und);
console.log(typeof und);

// null
const nulll = null;
console.log(nulll);
console.log(typeof nulll);

// symbol
const symb = Symbol('123');
console.log(symb);
console.log(typeof symb);

// Ссылочные типы - объект
const person = {
    name: 'John',
    age: 32,
};
console.log(person);
console.log(typeof person);

// Ссылочные типы - массив
const numArr = [1, 2, 3, 4];
console.log(numArr);
console.log(typeof numArr);

// fuction
function isNumber(num) {
    return typeof num === 'number';
}
console.log(isNumber);
console.log(typeof isNumber);