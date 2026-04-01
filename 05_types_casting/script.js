let value = 10;

// Число в строку
value = value + '';
console.log(value);

// Так тоже можно
value = `${value}`;

// И так
value = value.toString();

// Строка в число
value = Number(value);

// Или с помощью унарного оператора
value = +value;

// Или parseInt (parseFloat)
value = parseInt(value);

// Убираем лишние числа после запятой (до трех включительно)
value = 10.12345.toFixed(3)

// При математическом вычислении под капотом работает приведение типов (кроме плюса - там конкатенация)
// Это плохая практика, но она есть
value = 10 + '10' // 1010
value = 10 - '1' // 9
value = 10 * 10 // 100
