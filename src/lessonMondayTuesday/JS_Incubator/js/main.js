//1. Примитивы:
// числа, строки, булевы, Null, undefined, NaN,  Symbol
//2. Обьекты:
//обьекты, массивы, функции

// - имеют свойств и методы
// - ссылочный тип данных
// - сложная структура


//https://lodash.com/
//https://learn.javascript.ru/



const student = {
	name: "Alex",
	age: 23,
	friends: ["Bob", "Jhon", "Mike"],
	salary: 0
}

const student2 = student
student2.name = "Smith"
student.salary = student.salary + 100
student2.salary = student2.salary + 200



//console.log(student2)
console.log(student)
console.log(student2 === student) //true


const student3 = { ...student }
console.log(student3)
student3.name = 'Donald'
student3.salary = 1000
console.log(student3)
console.log(student)
student3.friends.push('Melany')
console.log(student)

const studentFullcopy = { ...student, friends: [...student.friends] }


function myFunc(a) {
	const b = () => console.log(a)
	return [a, b]
}


const result = myFunc(22)
console.log(result)

//let a = result[0]
//let b = result[1]
let [a, b] = myFunc(22)

console.log(a, b)
b()

//3 .map

const students = [
	{
		name: 'Bob',
		age: 25,
		isMarried: false,
		scores: 74
	},
	{
		name: 'Alex',
		age: 21,
		isMarried: false,
		scores: 89
	},
	{
		name: 'Nick',
		age: 20,
		isMarried: false,
		scores: 120
	},
	{
		name: "John",
		age: 374,
		isMarried: false,
		scores: 100
	}
];


const newArr = students.map(s => ({ ...s.name })) //возьми из обьекта "...s" и выгреби его сюда
console.log(newArr)

const trueStudents = students.map(s => {
	return {
		...s,
		isStudent: true
	}
}
)
console.log(trueStudents === students)

//const allStudents = trueStudents.map(s => ({ ...s, scores: s.scores + 10 })) //взять из старого обьекта scores и увеличу его на 10

const allStudents = trueStudents.map(s => {
	if (s.name === "Bob") {
		return { ...s, scores: s.scores + 10 }
	} else {
		return { ...s }
	}
}) //преобразование одного обьекта массива



























