// Lesson 7

// https://learn.javascript.ru/settimeout-setinterval
// https://developer.mozilla.org/ru/docs/Web/API/WindowTimers/setTimeout
// https://learn.javascript.ru/callbacks
// https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F_%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B3%D0%BE_%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2%D0%B0
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D0%B5-%D1%82%D0%B0%D0%B8%CC%86%D0%BC%D0%B5%D1%80%D0%BE%D0%B2-%D0%B2-javascript-callback-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-settimeout-setinterval-%D0%B8-requestanimationframe-f73c81cfdc9d


//@ts-ignore
console.log('lesson 7');

// Task 01
// Написать функцию которая выводит в консоль фразу "I am a programmer".
// Вызвать эту функцию с задержкой 1с.


// Task 02
// Написать функцию которая в качестве рагумента принимает переменную {name} и выводит в консоль фразу "My name is {name}".
// Вызвать эту функцию с задержкой 1с и передать в качестве аргумента любое имя.


// Task 03
// Написать функцию которая  принимает 3 аргумента (перве 2 - колличество милисекунд, 3й - любое имя) и которая
// интервально вызывает функции из тасок 01 и 02 в соответствии с переданными аргументами

// Task 04
// модернизировать функцию из Task 03 так, что бы можно было остановить вызовы вложенных функций

// Task 05
// Написать функцию (randomNum) которая генерирует целое число от 0 до 20.
// Написать функцию (sumRandomNums) которая принимает 2 аргумента: 1) функция randomNum, 2) число сгенерированное randomNum
// функция sumRandomNums должна вернуть сумму всех сгенерированных randomNum чисел, количество этих чисел определяется
// 2ым аргументом sumRandomNums

// Task 06**
// 1. написать функцию которая принимает число в качестве аргумента и возвращает функцию которая
// в свою очередь возвращает случайное целое число от 0 до числа передонного в  оригиальную функцию включительно.
// 2. спомощью функции из первого условия сделать 2 функции которые гененируют числа до 4 и 8 соответственно.
// 3. Написать функцию которая принимает в качестве аргументов объект functionObj, функции из условия 2 и любое число.
// данная функция должна в произвольном порядке применять функции из объекта к полученному числу столько раз, сколько
// сгенерирует функция с диапазоном до 8.

type FunctionsObjectType = {
    '0': (n: number) => number;
    '1': (n: number) => number;
    '2': (n: number) => number;
    '3': (n: number) => number;
}

const functionObj: FunctionsObjectType = {
    '0': (n) => n + 2,
    '1': (n) => n * n,
    '2': (n) => n - (n * 0.5),
    '3': (n) => n * (n * 0.5),
}

