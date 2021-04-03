import {addFriends, copyStudent, deepCopyStudent, multi, Student, substraction, sum} from "./tests";

let numOne: number
let numTwo: number
let student:Student = {
    name:'Bob',
    age:33,
    score:109,
    isStudent:true,
    friends:[ 'Alex', 'Donald', 'Helen' ]
}

let stGroup :Array<Student> = [
    {
        name:'Bob',
        age:33,
        score:77,
        isStudent:true,
        friends:[]
    },
    {
        name:'Tifanu',
        age:24,
        score:71,
        isStudent:true,
        friends:[]
    },
    {
        name:'Donald',
        age:27,
        score:109,
        isStudent:true,
        friends:[]
    },
    {
        name:'Alex',
        age:31,
        score:86,
        isStudent:true,
        friends:[]
    }
]

beforeEach(() => {
    numOne = 8
    numTwo = 8
})


test('sum of two number', () => {
    // let numOne = 8
    // let numTwo = 8
    let score = sum(numOne, numTwo)
    expect(score).toBe(16)
})


test('multi of two number', () => {
    // let numOne = 8
    // let numTwo = 8
    let scoreM = multi(numOne, numTwo)
    expect(scoreM).toBe(64)

    /* let num1One = 8
     let num1Two = 8
     let scoreM2 =

     expect(multi(numOne,numTwo)).toBe(64)
     expect(multi(8,8)).toBe(64)
     */
})


test('substraction of two number', () => {
    let score = substraction(numOne, numTwo)
    expect(score).toBe(0)
    // expect(substraction(numOne, numTwo)).toBe(0)
})

test ('get copy Student ', ()=>{
    let studentNew = copyStudent(student)
    expect(studentNew.friends===student.friends).toBe(true)
    expect(studentNew===student).toEqual(false)
})

test ('get Deep Copy Student ', ()=>{
    let studentNew = deepCopyStudent(student)

    expect(deepCopyStudent(student)===student).toBe(false)
    expect(deepCopyStudent(student).friends===student.friends).toBe(false)
    expect(deepCopyStudent(student).friends[0]===student.friends[0]).toBe(true)
})

test ('Add friends Student ', ()=>{
    let studentNew = addFriends(stGroup)

    expect(studentNew === stGroup).toBe(false)
    expect(studentNew.length===stGroup.length).toBe(true)
    expect(studentNew[0].friends.length===stGroup[0].friends.length).toBe(false)
    expect(studentNew[0].friends.length).toBe(3)
    expect(stGroup[0].friends.length).toBe(0)


    expect(studentNew[0].friends[0]).toBe('Tifanu')
    expect(studentNew[0].friends.includes('Bob')).toBe(false)
    expect(studentNew[2].friends.includes('Donald')).toBe(false)
    expect(studentNew[3].friends.includes('Donald')).toBe(true)
})