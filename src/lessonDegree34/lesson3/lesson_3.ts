console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


// just a plug
export default () => {
};
//  Что такое промис?
//
//  new Promise((res,rej)=>{
//      let a = 10
//      let b = 15
//      res(console.log(a +b ) )   // сначала Сихронно вызовет консоль лог после вернет андефинед
//}).then((r)=> console.log(r)
//  console.log(15)
//   25 15 undefined
//
// Какие бывают состояния у промисов ?  pending => reject  , fulfilled
//   Throw = error (rej), return = res
//
//  Методы прототипа объекта Promise
//  Promise.prototype.catch(onRejected)
//  Promise.prototype.then(onFulfilled, onRejected)
//  Promise.prototype.finally(onFinally)
//
//  Статические методы объекта Promise
//  Вот два метода — Promise.reject(reason)и Promise.resolve(value), которые позволяют создавать, соответственно, отклонённые и разрешённые промисы.
//


// let p1 = new Promise ( (rej,res)=>{
//         res(10)
//         rej(20)
// }).then(
//     (res)=>{
//         console.log(5)
//         console.log(res)
//     },
//     (rej)=>{
//         console.log(15)
//         console.log(rej)
//     })

// 15 10


// let p2 = new Promise ( (res,rej)=>{
//     console.log(5)
//     setTimeout ( ()=>{
//         console.log(10)
//         res(15)
//         console.log(20)
//     },0)
//     rej(console.log(25))
// })
//     .then(
//     //@ts-ignore
//     (res)=> console.log(res),
//     //@ts-ignore
//     (rej) =>console.log(rej))
//     .then(
//     //@ts-ignore
//     (res)=> console.log(res+5),
//     //@ts-ignore
//     (rej) =>console.log(rej+5))

// 5 25 undefined NaN 10 20


// function foo(){
//     return console.log(0)
// }
//
// let p3 = new Promise ( (res,rej)=>{
//     setTimeout(()=>{
//         console.log(5)
//         rej(10)
//     },0)
//     foo()
//     console.log(20)
//     res(15)
// })
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))

// 0 20 15 5


// console.log(0)
// let p4 = new Promise(
//     (res,rej)=>{
//     setInterval(()=>{
//         console.log(5)
//         res(10)
//     },750)
//         console.log(15)
//     setTimeout(()=>{
//         console.log(20)
//         rej(25)
//         }
//         ,500)
// })
//     .then(res=>{console.log(res)})
//     .catch(err=>console.log(err))
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))
// console.log(30)

// 0 15 30 20 25 undefined 555555

// let p1 = new Promise((res, rej) => {
//     console.log(1)
//     res(2)
//     rej(3)
// })
// let p2 = new Promise((res, rej) => {
//     res(4)
//     rej(5)
// })
//
// p1.then(res => {
//     return 6
//     console.log(res)
// })
//     .then(console.log)
//
// p2.then(res => {
//     console.log(res)
//     return 7
// })
//     .then(console.log)

// 1 4 6 7

// function f(){
//     return console.log(7)
// }
// let p1 = new Promise ((res,rej)=>{
//     console.log(1)
//     setTimeout(()=>{
//         console.log(2)
//         rej(3)
//     },0)
//     res(4)
// })
//     .then(res=>{
//         console.log(5)
//        f()
//         console.log(res)
//     })
// console.log(6)

// 1 6 5 7 4 2


// function f1 (n:number){
//     console.log(n)
// }
//
// let p1  = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         console.log(1)
//         rej()
//     },100)
//     console.log(2)
//     res(3)
// })
//     .then(res=>{
//         console.log(res)
//         return 4
//     })
//     .then(console.log)
// console.log(5)
// let p2  = new Promise((res, rej)=> {
//     console.log(6)
//     setTimeout(f1, 0, 10,20,30)
//     rej(7)
// })
//     .then(res=>{
//         console.log(res)
//     })
//     .catch(console.log)

// 1 5 6 3 4 7 10 1




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//