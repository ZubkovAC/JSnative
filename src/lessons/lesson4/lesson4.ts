// @ts-ignore
console.log('lesson 4');

// https://learn.javascript.ru/destructuring-assignment
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters
// https://learn.javascript.ru/rest-parameters-spread-operator
// https://medium.com/@stasonmars/%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80-spread-%D0%B8-rest-%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B-%D0%B2-javascript-22eb33cb0825

const someArr: Array<number> = [1, 2, 3, 4, 5, 6, 7];

// Task 01
// Дан массив someArr с помощью деструктуризации необходимо:
// 1. создать 2 переменые которые будут содержать значения 1 и 3;
// 2. создать массив содержащий все значения оригинального массива после 3;
// 3. добавить в первоначальный массив значение 0 в начало массива;
// 4. добавить в первоначальный массив значение 8 в конец массива;
// 5. одновременно добавить в первоначальный массив значение -1 в начало и значение 9 в конец массива;

// Task 02
// написать функцию, которая принимает любое количество аргументов (чисел) и возвращает их сумму.

// Task 03
// с помощью функции из Task 02, получить сумму someArr.



type PersonType = {
    name: string;
    age: number;
    hasHighEducation: boolean;
    isHealthy: boolean;
    accountBalance: number;
    isGreedy?: boolean;
};

const man: PersonType = {
    name: 'Victor',
    age: 45,
    hasHighEducation: true,
    isHealthy: true,
    accountBalance: 5000,
}

// Task 04
// Дан объект man с помощью деструктуризации необходимо:
// 1. создать переменые age и name которые будут содержать значения по одноименным ключам объекта
// и получить объект содержащий оставшиеся ключи оригинального объекта;
// 2. добавить в оригинальный объект ключ isGreedy со значением false;
// 3. создать переменную personAge и присвоесть значение по ключу age из объекта man;

// Task 05
// написать функцию, которая принимает объект man в качестве аргумента и с помощью деструктуризации
// получает значение по ключу name. Данная функция должна вывести в консоль фразу "My name is {name}"

