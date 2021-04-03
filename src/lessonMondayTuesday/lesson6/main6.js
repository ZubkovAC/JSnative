let students = [
    {
        name: 'Alex',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: 'Bob',
        age: 21,
        isMarried: true,
        scores: 93
    },
    {
        name: 'John',
        age: 23,
        isMarried: false,
        scores: 81
    },
    {
        name: 'Donald',
        age: 24,
        isMarried: false,
        scores: 107
    },
    {
        name: 'Nick',
        age: 23,
        isMarried: false,
        scores: 81
    },
    {
        name: 'Ann',
        age: 26,
        isMarried: true,
        scores: 105
    },

]

const user = {
    name: 'Bob',
    age: 23,
    friends: ['Alex', 'Nick', 'John']
}
// 1. создайте поверхностную копию
let copyUser = {...user}
console.log(copyUser === user)


// 2. глубокое копирование user
let deepCopyUser = {...user, friends: [...user.friends]}
console.log(deepCopyUser.friends === user.friends)

// 3. поверхностная копия массива students
let copyStudents = [...students]
console.log(copyStudents === students)

// 4. Полная (глубокая) копия массива students
let deepCopyStudents = students.map(t => ({...t}))
console.log(deepCopyStudents[0] === students[0])

// проверка
// console.log()
// console.log()


// 5. Отсортируйте  deepCopyStudents по алфавиту (sort)
deepCopyStudents.sort()
console.log(deepCopyStudents)


// 5a Отсортируйте deepCopyStudents по успеваемости (лучший идет первым) (sort)
deepCopyStudents.sort((a, b) => b.scores - a.scores)
console.log(deepCopyStudents)


// 6 Отсортируйте массив студентов , у которых 100 и более баллов (filter)
let deepCopyStudents2 = deepCopyStudents.filter((t => t.scores >= 100))
console.log(deepCopyStudents2)


// 6a. Вырежьте трех лучший студентов из массива deepCopyStudent (splice)
let topStudents = deepCopyStudents.sort((a, b) => b.scores - a.scores).splice(0, 3)
console.log(topStudents)


// 6b Объедините массмвы deepCopyStudents , topStudents так , чтобы сохранился порядок соптировка (spread-оператор)
let newDeepCopyStudents = topStudents.concat(deepCopyStudents)
let newDeepCopyStudents2 = [...topStudents,...deepCopyStudents]
console.log(newDeepCopyStudents)
console.log(newDeepCopyStudents2)


// 7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter(t =>!t.isMarried )    //(t =>t.isMarried ===false )
console.log(notMarriedStudents)

// 8. Сформируйте массив имен студентов (map)
let studentsNames = notMarriedStudents.map(t => t.name)
console.log(studentsNames)

// 8a. Сформируйте строку из имен студентов , разделенных
// запятой
// пробелом
let nameWithSpace1 = studentsNames.join(' - ')
console.log(nameWithSpace1)
let nameWithSpace2 = studentsNames.join(', ')
console.log(nameWithSpace2)


// 9. Добавьте всем студентам свойство itStudent со значение true (map)
let studentsWithMarried = newDeepCopyStudents.map(t=>({...t,itStudent:true}))
console.log(studentsWithMarried)


// 10. Nick женился. Выполните соответствующие преобразования массива students (map)
let studentsWithMarriedNick=studentsWithMarried.map(t=> t.name === 'Nick' ? {...t,isMarried: true} : t)
console.log(studentsWithMarriedNick)

// 11. Найтиде студента по имени Ann (find)
let ann = students.find(t=>t.name === "Ann")
console.log(ann)

// 12. Найдите студента с самым высоким баллом (reduce)
let bestStudent = students.reduce((a,b)=> a.scores > b.scores ? a : b)
console.log(bestStudent)



// 13. Найдите сумме баллов всех студентов ( reduce )

let allScores = students.reduce((a,b)=> a + b.scores,students[0].scores)
console.log(allScores)


// 14.Напишите функцию addFriends , которая принимает параметром массив students  и добовляет каждому студенту
// свойство friends значением которого является массив имен всех остальныъ студентов из массива,
// за исключинием собственного имени студента

let newFriendsStudents = students.map( s=> ({...s,friends: students.map(n=>n.name ).filter(n=>n !== s.name )}))
console.log(newFriendsStudents)
let newFriendsStudents2 = students.map( s=> ({...s,friends: students.map(n=>n.name!== s.name?n.name : '' )}))
console.log(newFriendsStudents2)

























