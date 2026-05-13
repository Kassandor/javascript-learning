// Скоуп, дефолт значения, declaration vs expression

// Declaration

hello(); // Функция hello задекларирована и она всплывет вверх скрипта, так работает под капотом в Javascript

// Все, что объявлено через ключевое слово function - является задекларированной функцией
// и всплывает наверх при инициализации скрипта (Creation Phase - 1й этап)
function hello() {
    console.log('Hello');
}

hello();

// Expression

greetingFn(); // Ошибка доступа, поскольку greetingFn еще не инициализирована

// Функциональное выражение
// В переменную при function expression сохраняется сам объект функции.
// Результат выполнения появляется только при вызове функции и попадает туда,
// где этот вызов используется (в переменную, аргумент или просто теряется).
// Инициализируется во время Execution Phase (второй этап),
// пока интерпретатор не дойдет до этой строки, метод не инициализирован.
const greetingFn = function greetingFn() {
    console.log('Hello');
};

greetingFn(); // hello

// Scope
// 

const num_example = 10;

// Local Scope
// var игнорирует {} (блок) структуру
// var всегда всплывает в ближайший function scope или в глобальный скоуп - особенность JS
{
    var var_example = 20;
}

function showScopeExample() {
    const num4 = 1000;
    log('showScopeExample', num_example, var_example);
}