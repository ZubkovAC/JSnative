//Область видимости
// {}- anonimous code , if/else , switch/case, function(){} , loops ( for, while, do while), try/catch
// при этом объект не имеет области видимости

// -0-
// let a = 10
// function f(){
//     // let a = 100
//     function f1(){
//         console.log(a)   // if a == 100 : undefined => a ==10 : undefined
//     }
//     f1()
// }
// f()

// -1-
// {
//     var a = 2
// }
// function vodka (){
//     console.log(a)
//     a = 4
// }
// console.log(a)
// vodka()
// console.log(a)
//


// -2-
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


// -3-
// console.log(a)
// var a = 10
// console.log(a)
// function a (){
//     console.log('hello')
// }
// console.log(a)


// -4-5-
// var a = 50
// function f(){
//     a = 100
//     let b= 150
// }
// if(true){
//     a= 175
//     let c = 200
//     var d = 300
//     const e = 400
// }
// f()
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

//да нет

// -6-
// const man1 = {
//     fname1:'petr'
// }
// const man2 = {
//     fname2:'Cemen'
// }
// let fname1 = 'Egorich'
// let fname2 = 'Petrovich'
//
// console.log(man1[fname1]='Petrysha')
// console.log(man2[fname2]='Xpenova')


// -7-
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


//-8-
// console.log(a)
// console.log(b)
// {
//     let a = 1
//     var b = 2
// }
// console.log(a)
// console.log(b)
//
// const firstName = {
//     a:3
// }
// console.log(a)
// console.log(b)
// {
//     a = 4
//     b = 5
// }
// console.log(a)
// console.log(b)
// function f2(){
//     var c = 6
//     let c = 7
// }
// console.log(a)
// console.log(b)


// -9-
// for (let x = 0 ; x < 10; x++){
//     setTimeout(()=>console.log(x),1000)
// }
// for (var x = 0 ; x < 10; x++){
//     setTimeout(()=>console.log(x),1000)
// }

// -10-
// for (var a =0 ; a < 10 ; a++ ){
//     setTimeout(()=>console.log(a))
// }
// a = 0
// setTimeout(()=>console.log(a),10)

// -11-
// let a = 5
// {
//      a = 10
// }
// console.log(a)
// function f2() {
//     console.log (a)
//     var b = 20
// }
// console.log(b)
// f2()

// -12-
// {
//     let c = 100
//     var family = 'it-incubator'
//     function f(){
//         console.log(c)
//     }
// }
// let doc = false
// if (!doc){
//     function c(){
//         console.log(family)
//     }
// }
// f()
// c()
//console.log(family)
//console.log(c)

