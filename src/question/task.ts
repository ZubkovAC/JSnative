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

// Promise - последовательно вывод консоль лога
// const wait = (ms,i)=>{
//     let pr = new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log(ms*i)
//             res()
//         },ms*i)
//     })
// }
// (async function(){
//     for (let i = 1 ; i < 11 ; i++ ){
//         console.log(i)
//         await wait(1000,i)
//     }
// })()
//
// const wait2 = (ms)=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res()
//         },ms)
//     })
// }
// (async function(){
//     for (let i = 1 ; i < 11 ; i++ ){
//         console.log(i)
//         await wait2(1000)
//     }
// })()


// что выведется в консоль
//     const rp = Promise.resolve(1)
//         rp.then(r=>console.log(r+1))
//         rp.then(r=>console.log(r+2))

// const rp = Promise.resolve(1)
// .then(r=>console.log(r+1))
// .then(r=>console.log(r+2))


// Analog useCallback - useMemo

// const onClick =useCallback(()=>{
//     alert('c')
// },[c])
// const onClick2 = useMemo(()=>{
//     onClick
// },[])
// const onClick2 = useMemo(()=>()=>{
//     alert(c)
// },[c])

// castom hook useGeneCallback - useMemo analog useCallback
// const useGeneCallback = (func,c)=>{
//     return useMemo(()=>func,c)
// }

// счетчик
// const makeCounter = (n) => () => n++
// const makeCounter = (n) =>{
//     return function make (){
//         return n++
//     }
// }
// const c1 = makeCounter(0)
// const c2 = makeCounter(100)
// console.log(c1())
// console.log(c1())
// console.log(c1())
// console.log(c2())
// console.log(c2())
// console.log(c1())
//
// // имя
// const setName = (car) =>{
//     return function speed (speed){
//         let spd = speed
//         return function up (n) {
//             return `My ${car} flay in ${spd*n} km/h!`
//         }
//     }
// }
//
// const set = setName('Bernuni')
// const gogo = set(100)
// console.log(gogo(2))
// console.log(gogo(3))

// const obj = {}
// let p1 = 'Dimych'
// let p2 = 'Sasha'
//
// obj[p1]= 33
// obj[p2]= 30
// obj[obj]= 100
// console.log(obj)


// function makeCounter(n){
//     return function mnojetel(a){
//         return function counter(){
//             n *= a
//             return n
//         }
//     }
// }
//
// const mn = makeCounter (10)
// const count = mn(3)
// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())


// context
// function hello () {
//     alert (this.name)
// }
// let man = {name:"Dimych"}
// hello.bind(man)()


// console.log
// let a = 10   // var a
// function yo () {
//     let a = 20  // a
// }
// yo()
// console.log(a)


// console.log
// let a = { name:'Dimych'}
// a[0] = 'hey'
// a[1]= 'yo'
// a[2]= 'blabla'
// console.log(a)

// let hello = new Promise(()=>{})
// let result = hello.then(()=>6)
// console.log(result)


// let man = { lastName:'kuzyberdin'}
// function hello(firstName){
//     console.log(firstName + this.lastName)
// }
// let hello2 = hello.bind(man)
// hello2('Dmitry') //1
// hello.bind(man)('Dmitry') //2

// let hello2 = hello.bind(man)('Dmitry')
// hello2 // 3

// let a = 10
// function yo(a){
//     a = 100
//     return a
// }
// yo(30)
// console.log(a)


// let hello = new Promise(()=>{})
// let result = hello.catch(()=>15)
// console.log(result)

// async function yo(){
//     return 16
// }
// let result = yo()
// console.log(result)

// let shit = () => () => () => () => 10
// let result = shit()()()()
// console.log(result)

// let man = {
//     name:'Dimych',
//     hello:()=>console.log(this.name)
// }
// man.hello()

// let man = {
//     name:'Dimych',
//     hello:function (){console.log(this.name)}
// }
// man.hello()


// const  a = 10
// function yo(){
//     a = 100
// }
// yo()
// console.log(a)


// (async () => {
//     let hello = new Promise((res, rej) => {
//         rej(10)
//     })
//     let result = await hello
//     console.log(result)
// })()

// let man = {
//     name:'Dimych',
//     age:33
// }
// let man2 = {
//     age:12
// }
// let dimych = {...man, ...man2}

// function makeCounter(){
//     let value = 0
//     return function(){
//         return value++
//     }
// }
// let counter = makeCounter()
// console.log(counter())
// console.log(counter())
// console.log(counter())


// setTimeout(()=>console.log(1),1)
// setTimeout(()=>console.log(2),0)

// let a = {name:'Dimych'}
// let names = ['tanya', 'ignat', 'dima']
// names.forEach(n => a[n]= 'hey')
// console.log(a)

// task   a= {'tanya':'hey', 'ignat':'hey', 'dima':'hey'}
// let a = {}
// let names = ['tanya', 'ignat', 'dima']
// names.reduce((total, el) => {
//     total[el] = 'hey'
//     return total
// }, {})
// names.forEach(el => {
//     a[el] = 'hey'
// })

// let users = [{name:'dima' , age:18},{name:'ignat' , age:21}]
// let users2 = users.map(u=> u.age<=18 && {...u,passed:true}).filter(t=>t!==false)
// let users2 = users.filter(t => t.age === 18).map(u => {...u, passed:true})
// console.log(users2)
// let users2 = [{name:'dima' , age:18,passed:true}]

// console.log('a'>'z')
// console.log('a'>'1')
// console.log('abcdz'>'abcd')
// console.log('abcdz'>'abcd1')

// let names = ['ignat', 'ignat-z' , 'dimych' ,'007', 'viktor']
// let result = names.sort()
// names === result

// let state = {
//     address: {
//         streets: [{name: 'shabany'}, {name: 'surganova'}]
//     },
//     age: 10
// }
// let state2 = {
//     ...state,
//     address: {
//         ...state.address,
//         streets: state.address.streets.map(s => s.name === 'shabany' ? {...s, name: 'shabanovich'} : s)
//     }
// }
// console.log(state)
// console.log(state2)

// let man = {
//     get name() {
//         return 'dymich'
//     }
// }
// man.name

// let a = {}
// let names = ['tanya', 'ignat', 'dima']
// let result = names.some(t => t === 'tanya')
// let result2 = names.every(t => t === 'tanya')

// let result = 'abcdefg dimych yo'.indexOf('dimych')
// ' lba yo '.trim() === 'lba yo'

// new Promise((res,rej)=>{
//     setTimeout(()=>rej(1),0)
//     res(2)
// })
//     .then(value => console.log(value))
//     .catch(value => console.log(value))

// async function yo(){
//
// }
// let result = yo()
// result.then(r=>console.log(r))

// [512,1231,52343]
// let arr = [
//     [1, 22, 512],
//     [35, 234, 1231],
//     [52343, 1123, 3232]
// ]
//
// function arrSort(arr) {
//     return arr.map(t => filterArr(t))
// }
//
// function filterArr(arr) {
//     let arrF = arr.sort((a, b) => b - a)
//     return arrF[0]
// }


//flat - reduce + concat
// let arr =  [1,2,3,[4,5,6,[7,8,9,]]]
// function parseArr ( arr){
//    return arr.reduce((acc,el)=> Array.isArray(el)
//         ? acc.concat(parseArr(el))
//         : acc.concat(el),[]
//     )
// }
// console.log(parseArr(arr))
















