console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/
//Лексическое окружение — это определенная структура, которая используется для определения связи Идентификаторов
// (имен) с конкретными переменными и функциями на основе вложенности (цепочки) лексических областей видимости.


//// Closure
// https://learn.javascript.ru/closure
//Замыкание – это функция, которая запоминает свои внешние переменные и может получить к ним доступ.
//Замыкание это способ получения доступа и управления внешними переменными из функции
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA


//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


//Область видимости
// {}- anonimous code , if/else , switch/case, function(){} , loops ( for, while, do while), try/catch
// при этом объект не имеет области видимости

// пример
// let a = 10
// function f(){
//     // let a = 100
//     function f1(){
//         console.log(a)   // if a == 100 : undefined => a ==10 : undefined
//     }
//     f1()
// }
// f()


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// function d(a:number){
//     return function d1(b:number){
//         return a + b
//     }
// }
//
// const promt = d(3)(6)
// console.log(promt)


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// function makeCounter() {
//     let count = 0
//     return {
//          counter (){
//            return ++count
//         }
//     }
// }
// const counter = makeCounter();
// const counter2 = makeCounter();
// console.log(counter.counter())
// console.log(counter.counter())
// console.log(counter2.counter())
// console.log(counter.counter())


// function makeCounter() {
//     let count = 0
//     return function counter() {
//         return ++count
//     }
// }
//
// const counter = makeCounter();
// const counter2 = makeCounter();
// console.log(counter())
// console.log(counter())
// console.log(counter2())
// console.log(counter())


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;


// function makeCounter2(n:number) {
//     let counter = n
//     return {
//         increase() {
//             return ++counter
//         },
//         decrease() {
//             return --counter
//         },
//         reset() {
//             return counter = 0
//         },
//         set(a: number) {
//             return counter = a
//         }
//     }
// }
// let cout = makeCounter2(10)
// console.log(cout.increase())
// console.log(cout.increase())
// console.log(cout.increase())
// console.log(cout.decrease())
// console.log(cout.reset())
// console.log(cout.set(10))


// function makeCounter2(num:number) {
//     return {
//         increase:()=> ++num,
//         decrease:()=> --num,         // decrease:function () { return --num }
//         reset() {
//             return num = 0
//         },
//         set(a: number) {
//             return num = a
//         },
//         getCount:()=> num
//     }
// }
// let cout = makeCounter2(10)
// console.log(cout.increase())
// console.log(cout.increase())
// console.log(cout.increase())
// console.log(cout.decrease())
// console.log(cout.reset())
// console.log(cout.getCount())
// console.log(cout.set(10))


// Recursion
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// function sumT (n:number) {
//     let sum = 0
//     for ( let x = 0 ; x < n; x){
//         sum +=n
//         n -=1
//     }
//     return sum
// }
// console.log(sumT(55))


// let sum = 0
// function sumTo (n:number) {
//     sum+= n
//     if (n === 0) return console.log(n+sum)
//      sumTo(  n -1 )
// }
// sumTo(55)

// function sumTo1(n:number):number {
//     if(n===1)return n
//     return n + sumTo1(n-1)
// }
//
// console.log(sumTo1(55))


// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

// function factorial (n:number):number{
//     if (n===1)return n
//     return n * factorial(n-1)
// }
// console.log(factorial(5))

// let a = 0
// function superSum1(n:number):any{
//     return function b (b:number){
//         return b + n
//     }
// }
// function superSum(n:number):any{
//     return function b (b:number){
//         return function c (c:number){
//             return n + b + c
//         }
//     }
// }
//
// console.log(superSum1(3)(2))
// console.log(superSum(3)(2)(5))


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// function superSum (n:number):any{
//     if (n===0)return n
//     if (n===1)return (num:number)=>num
//
//     let _arguments:number[] = []
//
//     function inner (...args: number[]){
//         _arguments = [..._arguments,...args]
//         if (_arguments.length >=n){
//             _arguments.length = n
//             return _arguments.reduce((acc,number)=>acc+number)
//         }else{
//             return inner
//         }
//     }
//     return inner
// }
//
//
// console.log(superSum(3)(2)(3)(5))
// console.log(superSum(0))
// console.log(superSum(3)(2)(5,3))
// console.log(superSum(3)(2,5,3))
// console.log(superSum(3)(2,5)(3))
// console.log(superSum(3)(2,5)(3,9))

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Сделайте набор «готовых к употреблению» фильтров:
//
//     inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
//     Они должны использоваться таким образом:
//
//     arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
/* .. ваш код для inBetween и inArray */

// function inBetween(a:number , b :number){
//     //@ts-ignore
//     return (t => t >= a && t <= b )
// }
// let arr = [1, 2, 3, 4, 5, 6, 7,8,9];
//
// console.log(arr.filter(inBetween(3, 6))) // 3,4,5,6

// function inArray(c:number[]){
//     return function (x:number){
//         return c.includes(x)
//     }
// }
// let arr = [1, 2, 3, 4, 5, 6, 7,8,9];
// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2


// У нас есть массив объектов, который нужно отсортировать:

// let users = [
//     {name: "John", age: 20, surname: "Johnson"},
//     {name: "Pete", age: 18, surname: "Peterson"},
//     {name: "Ann", age: 19, surname: "Hathaway"}
// ];
// // Обычный способ был бы таким:
// // по имени (Ann, John, Pete)
//     users.sort((a, b) => a.name > b.name ? 1 : -1);
// // по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
//
// function byField(str:string){
//         return (a:any, b:any) => a[str] > b[str] ? 1 : -1;
// }
// console.log(users.sort(byField('name')))
// console.log(users.sort(byField('age')))


//                          Test for video -- It-KAMASUTRA - __proto__ - prototype

//https://www.youtube.com/watch?v=b55hiUlhAzI
// 1)console.log(({}).proptotype === ({}).__proto__)                     // false
// function ITKamasutra(){}
// 2)console.log(ITKamasutra.prototype === ITKamasutra.__proto__)     // false
//
// function ITIncubator1(){}
// function ITKamasutra1(){}
// 3)console.log(ITIncubator1.__proto__ === ITKamasutra1.__proto__) //true
// 4)console.log(ITIncubator1.prototype === ITKamasutra1.prototype)  //true        //false(2)
//
// let Component = ()=>{
//     return `<div> I don't</div>`
// }
// 5)console.log(Component.prototype === Object.prototype) // false
//
// let age = 18
// 6)console.log(age.prototype === Number.prototype) //true            //false(2)
// 7)console.log(age.__proto__ === Number.prototype)    //true
//
// class Hacker{}
// 8)console.log(Hacker.__proto__ === Function.prototype) //false      //true(2)
//
// function ITIncubator2(){}
// 9)console.log(Hacker.__proto__ === Function.prototype) // true
//
// const count = 12
// 10)console.log(count.__proto__ === Number.prototype) // true
//
//
// class Samurai {
//     constructor(name) {
//         this.name = name
//     }
//     hello(){alert(this.name)}
// }
// let shogun = new Samurai('Dimych')
// console.log(shogun.__proto__.__proto__ === Object.prototype)
// console.log(shogun.__proto__.constructor.__proto__ ===??)
// console.log(shogun.__proto__.__proto__.__proto__ ===Object.prototype.__proto__)


// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// function sumTo(n: number): number {
//     if (n === 1) return n
//     return n + sumTo(n - 1)
// }
//
// console.log(sumTo(3))
//
// function sumToF(n: number): number {
//     if (n === 1) return n
//     return n * sumToF(n - 1)
// }
//
// console.log(sumToF(5))


// 1+1 1+1 2+1 3+2 5+3 8+5 13+8
// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

// function sumToFub(n: number): number {
//     return n <= 1 ? n : sumToFub(n - 1) + sumToFub(n - 2);
// }
// console.log(sumToFub(7))
//
// function sumToFub2(n: number): number {
//     if (n<=1)return n
//     return  sumToFub2(n - 1) + sumToFub2(n - 2);
// }
// console.log(sumToFub2(8))


// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};