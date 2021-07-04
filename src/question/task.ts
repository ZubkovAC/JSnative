// андрей
// владимир
// if/else switch/case function try/catch {}
// const  let
// var


// const makeCounter = () =>{
//     let count= 0
//     return function counter(){
//         return count++
//     }
// }
// const count = makeCounter()
// const count2 = makeCounter()
// count()
// count2()
// count2()
// count2()
// count()


// const supSum = (n) => {
//     if(n===1)return 1
//     return n + supSum(n-1)
// }

// const supSum2 = (n) =>{
//     let i = 0
//     for (let x = 0 ; x <= n ; x++){
//         i+=x
//     }
//     return i
// }


// setTimout delay
// for ( var i = 0; i < 10; i++){
//     let pr = new Promise((res,rej)=>{
//         let v = i
//         setTimeout(()=>{
//             console.log(v)
//             res()
//         })
//     })
// }


// const arr = [1,234,2,4,3123,5,7,2341,21,221]
// for (let x = 0 ; x < arr.length ; x ++){
//     for (let i = 0 ; i < arr.length ; i ++){
//         if(arr[i] >arr[i+1] ){
//             let max = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = max
//         }
//     }
// }
// console.log(arr)


// imutable
// const object = [
//     {name: 'alex', age: 32},
//     {name: 'igor', age: 3},
//     {name: 'valera', age: 2},
//     {name: 'max', age: 132},
//     {
//         man1: [
//             {
//                 techer: 'vlad', age: 30
//             },
//             {
//                 techer: 'evgen', age: 32
//             }
//             ]
//     }
// ]
// object.map(t=>({...t, man1:[...t.man1]}))

// var man = {
//     name:'vlad'
// }
// function f (a){
//     return{
//         ...a,
//         age:32
//     }
// }

// const pr1 = Promise.reject(12)
// const pr2 = Promise.resolve(12)
//
// pr1.then(res=>console.log(res))
// pr2.then(res=>console.log(res))


// const pr1  = new Promise((res,rej)=>{
//     res(12) // return 12 - false
// })
//     .then(console.log)

// let a = 100
// let say = () => {
//     a =200
// }
// say()
// console.log(a)

// let a = 100
// let say = () => {
//     let a =200
// }
// say()
// console.log(a)

// const User = (props)=>{
//     return <div>ssS</div>    => React.CreateElement(jsx) = > js(bable) - замыкание
// }

// virtual dom - сравнивается со старым виртуал домом, и после отправляет изменения

// import {useEffect} from "react";
//
// function SpanComponent () { - часики
// const [c, setC] = useState<number>(1)
// useEffect(() => {
//     setInterval(() => setC(c => c + 1), 1000)
// }, [])
//     },[])
// }

// массив быстро создать на 100 элементов
// [...new Array(100)].map((_, index)=><div>{index}</div>)

// function SpanComponent () {
//     const state = useSelector(s:any=>s)
//     [...new Array(100)].map((_, index)=><div>{index}</div>)
//     return <div><span>{state.setitng.auth}</span></div>
// }
//
// function SpanComponent2 () {
//     [...new Array(100)].map((_, index)=><div>{index}</div>)
//     return <div> <span>{state.setitng.auth}</span></div>
// }
// let mstp = (state:any) => ({
//     auth = state.setting.auth
// })
// connect(mstp)(SpanComponent2)


// var api : any ={}
//
//
// const numbers = [1,2,3,4,5]
// Promise.all(numbers.map(t=>t))
// console.log('Ready!')
//
// //
// async function f () {
//     let promiseArr = []
//     for ( let i = 0; i < numbers.length; i++){
//        const pr =  api.sendNumber(numbers[i])
//         promiseArr.push(pr)
//     }
//     return Promise.all(promiseArr)
// }
// f().then(res=>console.log("ready"))
//
// function f2 () {
//     return Promise.all(numbers.map(t=>api.sendNumber[t]))
// }

// const arr = [[1,2,3],[4,5,6]]
// arr.reduce((acc,el)=>[...acc,...el],[])

// NEXT lvl flat
// const arr = [1,2,3,[4,5,6,[7,8,9]]]
// arr.reduce((acc,el)=>[...acc,...el],[])

// function factorial(n){
//     if(n===0)return 1
//     return n * factorial(n-1)
// }
// factorial(5)

// function factorial(n){
//     let fuct = 1
//     for ( let x = 1 ; x <= n; x++){
//         fuct *=x
//     }
//     return fuct
// }

// map on Component  - false or render()
// useMemo


// поменять имя юзера
// const users = {
//     1:{id:1, name:'a'},
//     2:{id:2, name:'b'},
//     3:{id:3, name:'v'},
//     4:{id:4, name:'g'},
// }
// const users2 = [
//     {id:1, name:'a'},
//     {id:2, name:'b'},
//     {id:3, name:'v'},
//     {id:4, name:'g'},
// ]
// const usersUp = {
//     ...users,
//     [4]: {...users[4],name:'ggg' }}
//
// const userUp2 = users2.map(t=>t.id===4? {...t,name:'good'}: t)



// ++ каждый элемент уникальный

// let arr = [1,1,2,3,4,4,5,5,5]
//     let obj = {}
//
// for (let a = 0 ; a < arr.length ; a++){
//     if(!obj[arr[a]]) {
//         obj[arr[a]] = 0
//     }
//     obj[arr[a]]++
// }
// arr.reduce((acc, el) => ({...acc, [el]: acc[el] ? acc[el] + 1 : 1}), {})

// flat

// const el = [[1,2,4,54],[4,2,4,65,10]]
// el.reduce((acc,el)=> [...acc, ...el],[])

// const el2 = [1,2,3,4,[5,6,7,[8,9]]]
// const flut = (arr) =>{
//     return arr.reduce((acc,el)=> Array.isArray(el)? acc.concat(flut(el)):acc.concat(el),[])
// }

// async function start(){
//     return 100
//     //return Promise.resolve(100)
// }
//
// console.log(start())
//
// (async function(){
//     const res= await start()
//     console.log(res)
// })()

// обработка ошибки - вывод в консоль
// let pr = Promise.resolve()
//     .then(()=>{
//         //@ts-ignore
//         man.you()
//         console.log(1)
//     },()=>{
//         console.log(2)
//     }).catch(()=>{
//         console.log(3)
//     })

// вывести 2е значение промиса
// const generateNumber =(n)=>{
//     return n
// }
//
// const p1 = generateNumber(10)
// const p2 = generateNumber(2)
//
// Promise.all([p1,p2]).then(res=>console.log(res[1]))


// частичное применение
// function log(userName:string){
//     return function logAc ( action:string) {
//         console.log(`USERNAME : ${userName} , action :${action}  ` )
//     }
//
// }
// const  lo = log('Dymich')
// lo('delete-user')


// summa n recursuos + for
// function sumNumbers(n){
//     if(n===1)return 1
//     return n + sumNumbers(n-1)
// }
// function sumNumbers2(n){
//     let num = n
//     for (let x = 0 ; x < n ; x++ ){
//         num+=x
//     }
//     return num
// }
// function sumNumbers3(n){
//     let num = 0
//     for (let x = 0 ; x <= n ; x++ ){
//         num+=x
//     }
//     return num
// }
// sumNumbers(4)


