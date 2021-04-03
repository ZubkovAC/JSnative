import {
    sumReduce,
    checkType,
    checkLength,
    getTriangleType,
    isEvenSumGreater,
    isEvenSumGreater2,
    getSum
} from "./tasks";


test('sum of args', () => {
    expect(sumReduce(1, 2, 3, 4, 5)).toBe(15)
    expect(sumReduce(1, 2, 3, 4, 5, 6)).toBe(21)
    expect(sumReduce(1, 2, 3, 4, 5, 6, 7)).toBe(28)
})


test('typeOf of args', () => {
    expect(checkType(1, 2, 3, 4, 5)).toBe(true)
})

test('checkLength of args', () => {
    expect(checkLength(1, 2, 3, 4, 5)).toBe(3)
    expect(checkLength(1, 2, )).toBe(0)
})

test('getTriangleType ', () => {
    expect(getTriangleType(3,3,3,)).toBe('10')
    expect(getTriangleType(3,2,3,)).toBe('01')
    expect(getTriangleType(3,4,5,)).toBe('11')
    expect(getTriangleType(10,4,5,)).toBe('00')
})

test('isEvenSumGreater ', () => {

    expect(isEvenSumGreater([7,3,3,2,5,4,7,8,8])).toBe(true)
    expect(isEvenSumGreater([100,3,300,4,500,8,1])).toBe(true)

    expect(isEvenSumGreater([10,300,30,40,50,80])).toBe(false)

})

test('isEvenSumGreater2 ', () => {

    expect(isEvenSumGreater2([7,3,3,2,5,4,7,8,8])).toBe(true)
    expect(isEvenSumGreater2([100,3,300,4,500,8,1])).toBe(true)

    expect(isEvenSumGreater2([10,300,30,40,50,80])).toBe(false)

})

test('get sum ' , ()=>{
    expect(getSum(2000)).toBe(2)
    expect(getSum(9999)).toBe(36)
    expect(getSum(1212)).toBe(6)
})


/*
test('getBanknoteList ' , ()=>{
    const result1500 = getBanknoteList(1500)
    const result23 = getBanknoteList(23)
    expect(result1500[0]).toBe(1000)
    expect(result1500[1]).toBe(500)
    expect(result23[0]).toBe(20)
    expect(result23[1]).toBe(2)
    expect(result23[2]).toBe(1)
})*/
