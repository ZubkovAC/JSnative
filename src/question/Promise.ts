// 1)
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

// for (var x = 0 ; x < 10; x++){
//     ((a)=>{
//         setTimeout(()=>console.log(a),1000)})
//     (x)
// }


// 2)
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


// 3)
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


// 4)
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


// 5)
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


// 6)
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


// 7)
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

// -8-
// let p = new Promise((res,rej)=>{
//     res(5)
// })
// console.log(p.then((res)=>console.log(res)))

// -9-

// let p = new Promise((res,rej)=>{
//     res(5)
// })
//     .then(res=>{
//         console.log(res)
//         throw new Error('way way')
//         return 10
//     })
//     .then(console.log)
//     .catch(console.log)

// -10-
// Паралельно 3 запроса и возврат 1-массив, 2-объект

// v1
// let p = Promise.all( [
//     new Promise((res,rej)=>{
//         res({name:'Alex'})
//     }),
//     new Promise((res,rej)=>{
//         res({age:99})
//     }),
//     new Promise((res,rej)=>{
//         res({city:'Bobryisk'})
//     })
// ]).then(res=> console.log (res.reduce((acc:any,el:any)=>({...acc,...el}))))


// v2
// function Proomise (n:any) {
//      return Promise.resolve(n)
// }
// var c = {}
// let p = Promise.all([
//     Proomise({name:'stepa'}),
//     Proomise({age:'22'}),
//     Proomise({city:'cherepovec'})
// ])
//     .then(res=>{
//     res.forEach((a:any)=>{
//        return c = {...c,...a}
//     })
//     console.log(c)
// })


//v3 parse
// .then(res=>{console.log(...res)})

// Race
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

// -11-
// const pr = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log(1)
//         res(10)
//     },100)
//     setInterval(()=>{
//         console.log(2)
//         rej(15)
//     },75)
// })
// .then(res=>console.lg(res))
// .catch(res=>console.log(res))

//-12-
// const pr = new Promise((res,rej)=>{
//     return 10
//     setTimeout(()=>res(10))
//     setTimeout(()=>rej(20),0)
// })
//     .then((res)=>{
//         return 20
//         console.log(res)
//     })
//     .catch(console.log)

// const arr = [1,2,3,4,5]
// Promise.all(arr.map(u=>u)).then(res=>console.log(...res))

// const arr = [1,2,3,4,5]
// let pr = []
// for ( var x = 0 ; x < arr.length ; x ++ ){
//     let a = new Promise((res,rej)=>{
//         res(arr[x])
//     })
//     pr.push(a)
// }
// Promise.all(pr)

// вложенность данных then
// function helper
// let pr = new Promise((res, rej) => {
//     let man = {
//         name: 'dimych'
//     }
//     res(man)
// })
//     .then(res => {
//         res.age = 32
//         let man2 = res
//         console.log(man2)
//         return new Promise((res, rej) => {
//             res(man2)
//         })
//             .then(res => {
//                 res.work = 'it'
//                 console.log(res)
//             })
//     })

// через return
// let pr = new Promise((res, rej) => {
//     let man = {
//         name: 'dimych'
//     }
//     res(man)
// })
//     .then(res => {
//         res.age = 32
//         let man2 = res
//         console.log(man2)
//         return man2
//     })
//     .then(res => {
//         res.work = 'it'
//         console.log(res)
//     })

// вложенность данных async

// async function f() {
//     await new Promise((res, rej) => {
//         const arr = {
//             age: 32
//         }
//         console.log(arr)
//         res(arr)
//         return new Promise((res, rej) => {
//             arr.man = 32
//             console.log(arr)
//             res(arr)
//             return new Promise((res, rej) => {
//                 arr.work = 'it'
//                 console.log(arr)
//                 res(arr)
//             })
//         })
//     })
// }
