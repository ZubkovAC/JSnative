// let obj = {name:'Alex'}
// function FF () {
//     console.log('function FF',this)
//     return ()=> console.log('arrow function', this)
//     // у function FF  this = window
//     // у ()=> контекст в котором определена - function - window
// }

// obj.ff = FF
// obj.ff()()

// obj.ff = FF()
// console.log(obj.ff)
// obj.ff()

// obj.ff = FF
// let someFunc = obj.ff()
// someFunc();