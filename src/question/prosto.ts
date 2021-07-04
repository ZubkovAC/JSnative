import React from "react";
// counter = makeCounter()
// counter()
// counter()
// counter2 = makeCounter()
// counter2()
// counter()
// counter()

// function makeCounter(n){
//     let num = n                      // =0
//     return function counter(){
//         return num++
//     }
// }
// counter = makeCounter(0)                 // ()
// console.log(counter())
// console.log(counter())
// console.log(counter())
// counter2 = makeCounter(4)                // 0
// console.log(counter2())
// console.log(counter())

// function sumT(n){
//     let num = n
//     return {
//         increase(){
//             return ++num
//         },
//         decrease(){
//             return --num
//         },
//         reset(){
//             return num=0
//         },
//         set(n){
//             return num = n
//         }
//     }
// }
// let sum = sumT(10)
// console.log( sum.increase())
// console.log( sum.increase())
// console.log( sum.increase())
// console.log( sum.decrease())
// console.log( sum.reset())
// console.log( sum.set(100))

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// function superSum(n:number):any{
//     if (n===0)return 0
//     if (n === 1)return (num:number)=>num
//
//     let _argument:number[] = []
//
//     function helper(...args: number[]){
//         _argument = [..._argument,...args]
//         if (_argument.length >= n){
//             _argument.length = n
//             return _argument.reduce((a,b)=> a+b,0)
//         }else{
//             return helper
//         }
//     }
//     return helper
// }
// superSum(0)
// console.log(superSum(3)(2)(5)(3))

// function sumTo(n:number):any{
//     if(n===1)return n
//     return n + sumTo(n-1)
// }
//
// console.log(sumTo(10))