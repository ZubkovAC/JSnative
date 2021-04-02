// Файл не подключен - проверяйте в браузере / подключайте самостоятельно
// Разкоменитировать код нельзя только после решения - записи ниже-рядом / на листке


//№1
// Перечислите типи данных javascript?


//№2
// Разделите типы  данных в javascript (на категории)


//№3
//  что за тип данных будет после
//  function javascript(){ return console.log('hello')}
// console.log (typeof javascript())


//№4
//  назовите способы объявления функций и в двух словах объясните разницу между ними


//№5
// какой будет вывод из функций ? ниже

// sayHi1()
// function sayHi1() {
//   alert( "Привет 1" );
// }

// sayHi2()
// let sayHi2 = function() {
//     alert( "Привет 2" );
// };

// sayHi3()
// let sayHi2 function() {
//     alert( "Привет 3" );
// };

// sayHi4()
// let sayHi =()=> {
//     alert( "Привет 4" );
// };



//№6
/*const student = {
    name: "Alex",
    age: 23,
    friends: ["Bob", "Jhon", "Mike"],
    salary: 0
}*/

// что выведется на экран?

// NewStudent1 = ...student
// console.log(NewStudent1)

// NewStudent2 = {...student}
// console.log(NewStudent2)

// NewStudent3 = student.map((s)=>s)
// console.log(NewStudent3)

// NewStudent4 = {student.map(s=>s)}
// console.log(NewStudent4)


//№7
// Сделайте глубокую копию  - student -
// запишите код по за коментированым строкам (hard LVL!)
//
//  const SuperStudent = student
//
//
//
//
//
//
// либо по классике )

const SuperStudent = student




// проверка

console.log('student 0',student.friends[0])
console.log('SuperStudent 0',SuperStudent.friends[0])
console.log('проверка',student.friends[0]===SuperStudent.friends[0])

// Лишь истинный Samurai Поймет где он ошибается !