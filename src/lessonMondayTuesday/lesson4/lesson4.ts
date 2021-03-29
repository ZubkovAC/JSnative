// @ts-ignore
console.log('lesson 4');

// https://learn.javascript.ru/destructuring-assignment
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters
// https://learn.javascript.ru/rest-parameters-spread-operator
// https://medium.com/@stasonmars/%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80-spread-%D0%B8-rest-%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B-%D0%B2-javascript-22eb33cb0825

// spread
// function foo(...args) {
//     // some code
//     args
// }
//
// const someTempArr = [1, 2, 3];
//
// foo(...someTempArr) => foo(1, 2, 3)
//
// const sumeAny = (...args: Array<number>): number => args.reduce((acc, item) => acc + item, 0);
// console.log(sumeAny(1, 3, 5, 10))
//
// const testArr1 = [1 , 5, 10, 50, 90];
// const testArr5 = [6 , 7, 15, 45, 70];
// console.log(sumeAny(...testArr1));
// console.log(sumeAny(...testArr5));
// console.log(sumeAny(...[...testArr1, ...testArr5]));
// console.log(sumeAny(...testArr1, ...testArr5));
//
// const someObj = {...obj};
// const someArr = [...arr1];
//
// resr
// function Buzz(one, two, ...rest) {
//     // some code
// }
// Buzz(10, 15, 30, 40, 50)
//
// const [first, second, , four, ...rest] = [1, 2, 3, 4, 5, 6, 7];
// console.log('first', first);
// console.log('second', second);
// console.log('four', four);
// console.log('rest', rest);
//
// destructuring
//@ts-ignore
// const {name, age, ...rest} = {name: 'Eugene', age: 32, isHealthy: true, hasHighEducation: true}
// console.log('name', name);
// console.log('age', age);
// console.log('rest', rest);
//
// const testArr5 = [{id: 0, name: 'V'}, {id: 1, name: 'P'}, {id: 2, name: 'H'}];
//
// let userName = '';
// testArr5.forEach(item => {
//     if (item.id === 1) {
//         userName = item.name;
//     }
// })
//
// const [, someObj10] = testArr5;
// //@ts-ignore
// const {name: otherName} = someObj10;
// console.log(otherName)
//
// const testObj100500 = {name: 'Eugene', age: 32, isHealthy: true, hasHighEducation: true};
// function myName( {name} : {name: string} ):void {
//     console.log(`My name is ${name}`);
// }
// myName(testObj100500);

let someArr: Array<number> = [1, 2, 3, 4, 5, 6, 7];

// Task 01
// Дан массив someArr с помощью деструктуризации необходимо:
// 1. создать 2 переменые которые будут содержать значения 1 и 3;
// 2. создать массив содержащий все значения оригинального массива после 3;
// 3. добавить в первоначальный массив значение 0 в начало массива;
// 4. добавить в первоначальный массив значение 8 в конец массива;
// 5. одновременно добавить в первоначальный массив значение -1 в начало и значение 9 в конец массива;

//1
// const [first,,third] = someArr;
// console.log(first);
// console.log(third);

//2
// const [,,,...rest] = someArr
// console.log(rest);

//3
someArr = [0, ...someArr];
// console.log(someArr);

//4
someArr = [...someArr, 8];
// console.log(someArr);
//5
someArr = [-1,...someArr, 9];
// console.log(someArr);


// Task 02
// написать функцию, которая принимает любое количество аргументов (чисел) и возвращает их сумму.
let someAll = (...nums: Array<number>): number => nums.reduce((prev, item) => prev + item, 0);
// console.log(someAll(1, 2, 3, 4));


// Task 03
// с помощью функции из Task 02, получить сумму someArr.
someAll(...someArr);


type PersonType = {
    name: string;
    age: number;
    hasHighEducation: boolean;
    isHealthy: boolean;
    accountBalance: number;
    isGreedy?: boolean;
};

let man: PersonType = {
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

//1
//@ts-ignore
const {name, age} = man;
// ===
//const name = man.name;
//const age = man.age;
//2
man = {...man, isGreedy: false};
//3
const {age: personAge} = man;

// Task 05
// написать функцию, которая принимает объект man в качестве аргумента и с помощью деструктуризации
// получает значение по ключу name. Данная функция должна вывести в консоль фразу "My name is {name}"

const manName = ({name}: {name: string}) => console.log(`My name is ${name}`);
manName(man);