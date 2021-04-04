console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290

//
// //console.log(this);
//
// function f() {
//     console.log('function f', this);
// }
//
// //f();
//
// let obj = { name: 'Eugene'};
// obj.f = f;
// //obj.f();
// obj.k = function () {
//     console.log('obj.k', this);
//     f();
//     setTimeout(function() {console.log('function setTimeout', this)}, 0);
// }
//
// //obj.k();
//
// let arrow = () =>  console.log('arrow function', this);
// function FF() {
//     console.log('function f', this);
//     return () =>  console.log('arrow function', this);
// }
// //arrow();
// //FF()();
//
// //obj.ff = FF;
// //obj.ff()();
//
// //obj.ff = FF();
// //obj.ff();
//
// //obj.ff = FF;
// //let someFunc = obj.ff();
// //someFunc();
//
// /*
// arrow = () => {
//     console.log('arrow function', this);
//     setTimeout(function() {console.log('function setTimeout', this)}, 0);
//     setTimeout(() => console.log('arrow setTimeout', this), 0);
// }
//
// arrow();
// */
//
// obj = {
//     name: 'Eugene',
//     arrow: () => {
//         console.log('arrow function', this);
//         setTimeout(function() {console.log('function setTimeout', this)}, 0);
//         setTimeout(() => console.log('arrow setTimeout', this), 0);
//     },
//     dec() {
//         console.log('arrow function', this);
//         setTimeout(function() {console.log('function setTimeout', this)}, 0);
//         setTimeout(() => console.log('arrow setTimeout', this), 0);
//     }
// };
//
// //obj.arrow();
// //obj.dec();
//
// obj = {
//     name: 'Eugene',
//     arrow: () => {
//         return () => console.log(this);
//     },
//     arrow2: () => {
//         return function () {console.log(this)};
//     },
//     dec() {
//         return function () {console.log(this)};
//     },
//     dec2() {
//         return () => console.log(this);
//     },
// };
//
// let obj2 = {name: 'Vlad'};
//
// //obj2.arrow = obj.arrow;
// //obj2.arrow()();
//
// //obj2.arrow = obj.arrow();
// //obj2.arrow();
//
// //obj2.arrow2 = obj.arrow2;
// //obj2.arrow2()();
//
// //obj2.arrow2 = obj.arrow2();
// //obj2.arrow2();
//
// //obj2.dec = obj.dec;
// //obj2.dec()();
//
// //obj2.dec = obj.dec();
// //obj2.dec();
//
// //obj2.dec2 = obj.dec2;
// //obj2.dec2()();
//
// //obj2.dec2 = obj.dec2();
// //obj2.dec2();
//




// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

type someObjType = {
    name: string;
    age: number;
    greeting?: Function;
}

let someObj:someObjType = {
    name: 'Eugene',
    age: 32
}

function greeting() {
    //@ts-ignore
    return `My name is ${this.name}. I am ${this.age}`;
}

someObj.greeting = greeting;
//console.log(someObj.greeting());

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

type CounterType = {
    count: number;
    getCurrentCount: () => number;
    increment: () => void;
    decrement: () => void;
    setCurrentCount: (c: number) => void;
    restCurrentCount: () => void;
};

let counterObj: CounterType = {
    count: 0,
    getCurrentCount() {
        return this.count;
    },
    increment() {
        this.count += 1;
    },
    decrement() {
        this.count -= 1;
    },
    setCurrentCount(n) {
        this.count = n;
    },
    restCurrentCount() {
        this.count = 0;
    },
};
// counterObj.increment();
// counterObj.increment();
// counterObj.increment();
// console.log(counterObj.getCurrentCount());
// counterObj.decrement();
// console.log(counterObj.getCurrentCount());
// counterObj.restCurrentCount();
// console.log(counterObj.getCurrentCount());
// counterObj.setCurrentCount(100);
// console.log(counterObj.getCurrentCount());


// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

type CounterType2 = {
    count: number;
    getCurrentCount: () => number;
    increment: () => CounterType2;
    decrement: () => CounterType2;
    setCurrentCount: (c: number) => CounterType2;
    restCurrentCount: () => CounterType2;
};

let counterObj2: CounterType2 = {
    count: 0,
    getCurrentCount() {
        return this.count;
    },
    increment() {
        this.count += 1;
        return this;
    },
    decrement() {
        this.count -= 1;
        return this;
    },
    setCurrentCount(n) {
        this.count = n;
        return this;
    },
    restCurrentCount() {
        this.count = 0;
        return this;
    },
};

//console.log(counterObj2.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount());


// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

// function myFirstConstructorFunc(name: string, age: number) {
//     //@ts-ignore
//     this.name = name;
//     //@ts-ignore
//     this.age = age;
//     //@ts-ignore
//     this.greeting = function () {
//         return `My name is ${this.name}. I am ${this.age}`;
//     }
// }
//
// //@ts-ignore
// let testObj = new myFirstConstructorFunc('Eugene', 20);
// console.log(testObj);
// console.log(testObj.greeting());

// type TaskType = {
//     name: string;
//     age: number;
//     greeting?: Function;
// }
//
// function myFirstConstructorFunc(this:TaskType, name: string, age: number) {
//     this.name = name;
//     this.age = age;
//     this.greeting = function () {
//         return `My name is ${this.name}. I am ${this.age}`;
//     }
// }
//
// let testObj = new (myFirstConstructorFunc as any)('Eugene', 20);
// console.log(testObj);
// console.log(testObj.greeting());

// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = {name: 'One'};
let Two = {name: 'Two', sayHello: function() {console.log(`Hello, my name is ${this.name}`)}};

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя

function sumTwoNumbers(a:number,b:number):number {return a + b}

function bindNum(f: Function, n: number) {
    return f.bind(null, n);
}

let bindTen = bindNum(sumTwoNumbers, 10);

console.log(bindTen(50))

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two

// Реализовать задачи 2-4 из Bind с помощью Call

let obj = {
    name: 'Eugen',
    getName(arg:string, arg2:string) {
        return `${this.name}, ${arg}, ${arg2}`;
    }
}

let obj2 = {
    name: 'Vlad',
}

//@ts-ignore
obj2.getName = obj.getName;
//@ts-ignore
//console.log(obj2.getName.bind(obj, 'bla bla')('Lo lo'));
//console.log(obj2.getName.call(obj, 'bla bla', 'Lo lo'));
console.log(obj2.getName.apply(obj, ['bla bla']));


// just a plug
export default () => {};