// let auto = {
//     auto:'kamaz',
//     autobus:'craz'
// }
//
// let car1 = 'audi'
// let car2 = 'volvo'
//
// auto[car1] = 'vw'
// auto[car2] = 'bmv'
//
// console.log(auto[car1])
// console.log(auto[car2])
// console.log(auto)
// console.log(auto.prototype ===??)
// console.log(auto.__proto__ ===??)


// function f(){
//     let count= 0
//     return function plus() {
//         return count++
//     }
// }
// let count= f()
// count


// function fo(){
//     let weigth = 20
//     return{
//         eat:()=>{
//             return ++weigth
//         },
//         sleep:()=>{
//             return --weigth
//         },
//         bio:()=>{
//             return weigth-=5
//         }
//     }
// }
//
// let animal = fo()
// animal.eat()
// animal.eat()
// animal.eat()
// animal.sleep()
// animal.bio()

// function sum(n){
//     let a = n
//     console.log(n)
//     return function (b){
//         return a + b
//     }
// }
// sum(5)(8)


//
// Promise.race([
//     new Promise((res, rej) => {
//         setTimeout(() => {
//             rej('ypa')
//         }, 3)
//         setTimeout(() => {
//             res()
//         }, 4)
//     }),
//     new Promise((res, rej) => {
//         setTimeout(() => {
//             rej('ypa')
//         }, 2)
//         setTimeout(() => {
//             res()
//         }, 5)
//     })]).then(console.log)

// myMap

// if (true){
//     var a = 2
// }
// function vodka (){
//     console.log(a)
//     a = 4
// }
// vodka()
// console.log(a)


// let a = 1
// console.log(a)
// console.log(b)
// var b = 2
// console.log(b)
// console.log(c)
// let c = 10
// var d
// console.log(d)
// d = 10
// console.log(d)
// console.log(e)
// console.log(c)
// var e = 100



// console.log(a)
// var a = 10
// console.log(a)
// function a (){
//     console.log('hello')
// }
// console.log(a)


// function f(){
//     var a = 100
// }
// if(true){
//     let c = 200
//     var d = 300
//     const e = 400
// }

// console.log(a)
// console.log(c)
// console.log(d)
// console.log(e)


// const man = {
//     fname:'petr'
// }
// console.log(man[fname])

// const man = {
//     fname: '09'
// }
//
// const obj1 = {}
// const obj2 = {}
// man[obj1] = 123
// man[obj2] = 456
//
// console.log(man[obj1])