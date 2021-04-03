let array = [0, 34, 23, 231, 123, 36, 412, 12, 999, 774]

// sort only one item  1, 123, 23, 251, 31...
// array = array.sort()

//bubble sort
let newArray = 0
while (array.length >newArray){
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            let temp = array[i + 1]
            array[i + 1] = array[i]
            array[i] = temp
        }
    }
    newArray++
}

let one = 0
let two = 0
while (array.length >one){
    while (array.length >two) {
        if (array[two] > array[two + 1]) {
            let temp = array[two + 1]
            array[two + 1] = array[two]
            array[two] = temp
        }
        two+=1
    }
    one+=1
}

for (let q = 0; q < array.length - 1; q++){
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            let temp = array[i + 1]
            array[i + 1] = array[i]
            array[i] = temp
        }
    }
}


// v2
for (let q = 0; q < array.length - 1; q++){
    for (let i = 0; i <array.length-1-q; i++) {
        if (array[i] > array[i + 1]) {
            let temp = array[i + 1]
            array[i + 1] = array[i]
            array[i] = temp
        }
    }
}

// v3
for (let q = 0; q < array.length - 1; q++){
    let isSort = true
    for (let i = 0; i <array.length-1-q; i++) {
        if (array[i] > array[i + 1]) {
            isSort = false
            let temp = array[i + 1]
            array[i + 1] = array[i]
            array[i] = temp
        }
    }
    if (isSort){
        break
    }
}

//sort
let students = ['Donald','Bob','Nick','Alex','!','Игорь','john','10']

console.log(students.sort())
console.log(students.sort().reverse())

// положительное число, есди надо поменять
// отрицательное число или 0 , если Не надо поменять эл-ты местами

// v1
function sortByIncrease (a,b){
    if(a<=b){
        return -1 // не меняем местами
    }else{
        return 1  //    меняем местами
    }
}

//  v2
// function sortByIncrease2 (a,b){
//     return a-b
// }

// v3
// function sortByIncrease3 ( (a,b) => a - b)


let bestStudents = [
    {
        name:'Alex',
        age:22,
        isMarried:true,
        scores:85
    },
    {
        name:'Bob',
        age:21,
        isMarried:true,
        scores:93
    },
    {
        name:'John',
        age:23,
        isMarried:false,
        scores:81
    },
    {
        name:'Donald',
        age:24,
        isMarried:false,
        scores:101
    },

]
bestStudents.sort((a,b)=> a.age - b.age)
bestStudents.sort((a,b)=> a.scores - b.scores)

bestStudents.sort((a,b)=> b.scores - a.scores)

let bestName=bestStudents.map(s=>s.name)
bestName.sort()
