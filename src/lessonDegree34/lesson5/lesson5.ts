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


// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

type someObjType = {
    name: string;
    age: number;
}

let someObj:someObjType = {
    name: 'Eugene',
    age: 32
}

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

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
function sumTwoNumbers(a:number,b:number):number {return a + b};

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two

// Реализовать задачи 2-4 из Bind с помощью Call



// just a plug
export default () => {};

// function f () {
//     console.log('funciton', this)
// }
// f()

// let obj = {name:'Alex'}
//
// obj.f = f
// obj.f()
// obj={
//     name:'Alex'
//     f:function f (){console.log('function',this)}
// }
// console.log(obj)

// obj.k = function(){
//     console.log('obj.k',this)
//     f()     // window.f()
//     this.f()// obj.f()
// }


// obj.k = function(){
//     console.log('obj.k',this)
//     f()     // window.f()
//     setTimeout(function(){console.log('function setTimeout',this)},0) // window.console.log(function) u33a setTimeout
// }
// obj.k()

// let arrow = ()=>{
//     console.log('arrrow function ', this)
//     // у устрелочных функций нету this . они ее берут ее в контексте в котором определена
// }
// arrow()

// function FF () {
//     console.log('function FF',this)
//     return ()=> console.log('arrow function', this)
//     // у function FF  this = window
//     // у ()=> контекст в котором определена - function - window
// }
// FF()()

// obj.ff=FF
// obj.ff()();
// у function -> this -> obj , у стрелочной function -> obj .

// obj.ff=FF()
// obj.ff()
//window x2 получается что до вызова нету стрелочной функции и только после вызова она ссылается на контекст
// а в момент вызова ее this - window

// obj.ff = FF
// let someFunc = obj.ff()
// someFunc();
// объект так как obj => ff()

// let arrow = ()=>{
//     console.log('arrrow function ', this)
//     setTimeout(function(){console.log('funciton SeT',this)},0)
//     setTimeout(()=>console.log('arrow set',this), 0 )
// }
// arrow()
// 3 window

// let obj = {
//     name:'Alex',
//     arrow:()=>{
//         console.log('arrow function',this);
//         setTimeout(function(){console.log('function set',this)},0)
//         setTimeout(()=>console.log('arrow setTimeout',this),0)
//     }
// }
// obj.arrow()
// 3 window  - 1 так как у объекта нету области видимости ,
// 2-3 function сслается на область видимости - window,

// let obj = {
//     name:'Alex',
//     arrow:()=>{
//         console.log('arrow function',this);
//         setTimeout(function(){console.log('function set',this)},0)
//         setTimeout(()=>console.log('arrow setTimeout',this),0)
//     },
//     dec(){
//         console.log('arrow function',this);
//         setTimeout(function(){console.log('function set',this)},0)
//         setTimeout(()=>console.log('arrow setTimeout',this),0)
//     }
//     dec:function(){} аналог
// }
// obj.dec()
//  object так как ссылается на объект
//  window так как браузерная АПИ
//  object так как стрелка сслается на момент определения  => object


// let obj = {
//     name:'Alex',
//     arrow:()=>{
//         return ()=> console.log(this)
//     },
//     arrow2:()=>{
//         return function (){console.log(this)}
//     },
//     dec(){
//         return function (){console.log(this)}
//     },
//     dec2(){
//         return ()=> console.log(this)
//     }
// }
//
// let obj2={name:'Pomudor'}
// obj2.arrow=obj.arrow
// obj2.arrow()()
// window так как нету контекста

// obj2.arrow=obj.arrow()
// obj2.arrow()
// 2 стрелки поэтому window

// obj2.arrow2=obj.arrow2
// obj2.arrow2()()
// window так как нету контекста

// obj2.arrow2=obj.arrow2()
// obj2.arrow2()
// {name:'Pomudor'}  так как функция не имееет зыс и ссылает на то место где она определена

// obj2.dec=obj.dec
// obj2.dec()()
// window this не передается через замыкание (тоесть теряет this)

// obj2.dec=obj.dec()
// obj2.dec()
// {name:'Pomudor'}  так как функция не имееет зыс и ссылает на то место где она определена

// obj2.dec2=obj.dec2
// obj2.dec2()()
// {name:'Pomudor'}  так как функция не имееет зыс и ссылает на то место где она определена

// obj2.dec2=obj.dec2()
// obj2.dec2()
// name:'Alex',