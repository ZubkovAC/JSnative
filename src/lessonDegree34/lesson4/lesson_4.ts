console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// let Task1 = new Promise ((res,rej)=>{
//  console.log('Promise is created')
// })
// console.log(Task1)

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// let Task2 = new Promise ((res,rej)=>{
//     res('Promise Data')
// })
//     .then(res=>console.log(res))

// Promise.resolve('Promise Data2').then(console.log)

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// let Task3 = new Promise((res,rej)=>{
//     rej('Promise Error')
// })
//     .catch(err=>console.log(err))
//
//
// Promise.reject('Promise Error2').catch(console.log)
// Promise.reject('Promise Error2').then(console.log,console.log)

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// let Task4 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         let a = 'Promise Data'
//         res(a)
//     },3000)
// }).then(console.log)

// let Task41 = new Promise((res,rej)=>{
//     setTimeout(res,3000,'Promise Data N')
// }).then(console.log)


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.


// function onSuccess(N: any) {
//     return `${N} - Aleksander`
// }
// function print(d: any) {
//     console.log(d)
// }

// let Task6 = new Promise((res, rej) => {
//     setTimeout(res, 1000, 'My name is')
// })
// .then(res => {
//     onSuccess(res)
// })
// .then(res => print(res))
// v2
//     .then(onSuccess).then(print)
//


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}



// let Name = new Promise((resolve, reject) => {
//     let name = {name: 'Anna'}
//     setTimeout(resolve, 2000, name)
// })
// let Age = new Promise((resolve, reject) => {
//     let age = {age: 16}
//     setTimeout(resolve, 3000, age)
// })
// let City = new Promise((resolve, reject) => {
//     let city = {city: ''}
//     setTimeout(resolve, 4000, city)
// })
// let abc = Promise.all([Name, Age, City])
//  // .then((res) => (res)).then(console.log)
//  .then(([a, b, c]: any[]) => ({...a, ...b, ...c})).then(console.log)


// let Name: Promise<Object> = new Promise((resolve, reject) => {
//     let name = {name: 'Anna'}
//     setTimeout(resolve, 2000, name)
// })
// let Age: Promise<Object> = new Promise((resolve, reject) => {
//     let age = {age: 16}
//     setTimeout(resolve, 3000, age)
// })
// let City: Promise<Object> = new Promise((resolve, reject) => {
//     let city = {city: ''}
//     setTimeout(resolve, 4000, city)
// })
// let abc: Promise<Array<Object>> = Promise.all([Name, Age, City])
//
// abc.then(([a, b, c]: Array<Object>) => ({...a, ...b, ...c})).then(console.log)


// just a plug
export default () => {
};

//
// for (var x = 0 ; x < 10 ; x++){
//     setTimeout ( ()=> {
//         console.log(x)
//     },1000)
// }
// for (let x = 0 ; x < 10 ; x++){
//     setTimeout ( ()=> {
//         console.log(x)
//     },1000)
// }
//
// как сделать чтобы последовательно выводились значения x?
// for (var x = 0 ; x < 10 ; x++){
//     function foo(i) {
//         setTimeout(() => {
//             console.log(x)
//         },1000)
//     }
//     foo(x)
// }





// bubble sort

//
// for ( let a = 0 ; a < arr.length; a++){
//     let first = a
//     for (  let b = 0 ; b < arr.length; b++){
//         if( arr[a] < arr[first] ){
//             first = b
//
//         }
//
//     }
//
// }
//        [1,2,3,54,71,8,654,2343,2345]
//        [1,2,3,54,71,8,654,2345,2343]
//        [1,2,3,54,71,654,8,2345,2343]


// let arr = [1,2,3,54,654,71,8,2345,2345]
//
//
//
// for (let i = 0; i < arr.length; i++) {
//
//     for (let j = 0; j < arr.length-i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let swap = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = swap;
//         }
//     }
// }
//
//
//
// let i = 0
// while(i<arr.length){
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let swap = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = swap;
//         }
//     }
// }
//
// console.log(arr)

