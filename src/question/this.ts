
//
// function hey (){
//     console.log(this)
// }
//
// hey()
// var man = {
//     name:'Alex',
//     age:31,
//     f(){
//         console.log(this)
//     },
//     ff:()=>{
//     console.log('Hello '+  this.name)
//     }
// }
// man.f()
// var glonalHey = man.f
// glonalHey()
// console.log(glonalHey)

// var man = {
//     name:'Alex',
//     age:31,
//     tymba(){
//         console.log(this)
//     },
//     ymba:()=>{
//         console.log(this)
//     }
// }
// man.tymba()
// man.ymba()

// var man = {
//     name:'Alex',
//     age:31,
//     tymba(){
//         //this
//         const ymba = () => {
//             console.log(this)
//         }
//         ymba()
//     }
//
// }
// man.tymba()

// var man = {
//     name:'Alex',
//     age:31,
//     tymba(){
//         //this
//         const ymba = () => {
//             console.log(this)
//         }
//         return ymba
//     }
//
// }
// let superMan = man.tymba()
// superMan()

// var man = {
//     name:'Alex',
//     age:31,
//     tymba(){
//         //this
//           function ymba (){
//             console.log(this)
//         }
//         return ymba
//     }
//
// }
// let superMan = man.tymba()
// superMan()

//button
// var man = {
//     name:'Alex',
//     age:31,
//     tymba(){
//        document
//            .getElementById('ok')
//            .addEventListener('click',this)
//     },
//     ymba(){
//         console.log(this)
//     }
//
// }
//button = man.tymba()



// const React = () => {
//      setState:{
//          name:'Alex'
//          }
//     function Hello2 (){
//         console.log(this) // Допустим изменяет setState как поведет себя?
//     }
//     const Hello =()=>{
//             console.log(this) // Допустим изменяет setState как поведет себя?
//     }
//     return(
// <button onclick ={Hello2()}>a</button>
// )
// }
// button.Hello button.Hello2


//button
// var man = {
//     name:'Alex',
//     age:31,
//     tymba(){
//         // this
//         document
//             .getElementById('ok')
//             .addEventListener('click',function () {
//                 console.log(this)
//             })
//     }
// }
// button man.tymba()



//button
// var man = {
//     name:'Alex',
//     age:31,
//     tymba(){
//         // this
//         document
//             .getElementById('ok')
//             .addEventListener('click', ()=> {
//                 console.log(this)
//             })
//     }
// }
// button man.tymba()


// var man = {
//     name:'Alex',
//     age:31,
//     tymba(){
//         setTimeout(()=>{console.log(this)},1000)
//     }
// }
// man.tymba()



// var man = {
//     name:'Alex',
//     age:31,
//     tymba(){
//         setTimeout(function(){console.log(this)},1000)
//     }
// }
// man.tymba()



// var man = {
//     name:'Alex',
//     age:31,
//     tymba(){
//         setTimeout(()=>{console.log(this)},1000)
//     }
// }
// const superMan = man.tymba
// const superMan = man.tymba()
// superMan()


// var man = {
//     name:'Alex',
//     age:31,
//     tymba(){
//         setTimeout(function(){console.log(this)},1000)
//     }
// }
// const superMan = man.tymba
// const superMan = man.tymba()
// superMan()
// function User(props){
//     props.tymba()
// }
// User({hip:man.tymba})


// var man = {
//     name:'Alex',
//     age:31,
//     tymba(){
//         setTimeout(()=>{console.log(this)},1000)
//     }
// }
// function User(props){
//     props.tymba()
// }
// User({hip:man.tymba})



// var man = {
//     name:'Alex',
//     age:31,
//     tymba(){
//          let  that = this
//          console.log(this)
//          setTimeout(function(){
//               console.log(this)
//               console.log(that)
//           },1000)
//     }
// }
// function User(props){
//     props.tymba()
// }
// User({hip:man.tymba})

// class Work{
//     name:'Alex'
//     say(){
//         console.log(this.name)
//     }
//     work = () => {
//         console.log(this.name)
//     }
//      render(){
//          button.onclick = this.hip
// }
// Work.say()
// Work.work()

// let w1 = new Work()
// button.click(w1.say)
// button.click(w1.work)

