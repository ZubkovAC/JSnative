// 1. Функция принимает параметром целые положительные числа и возвращает их сумму

export const sumReduce = (...args: Array<number>) => {
    return args.reduce((acc, item) => acc + item)
}

export const checkType = (...args: Array<number>) => {
    return Array.isArray(args)
}


export const checkLength = (a: any, b: any, ...item: Array<number>) => {
    return item.length
}


//2. Функция  getTriangleType принимает три параметра
//  длины сторон треугольника
// Функция должна возвращатьЖ
// 01 , если треугольник равнобедренный
// 10 , если треульгольник равносторонний
// 11, если треугольник обычный
// 00 если такого тругольника не существует

export const getTriangleType = (a: number, b: number, c: number): string => {
    if (a == b && b == c) {
        return '10'
    } else if (a == b || b == c || a == c) {
        return '01'
    } else if (a + b > c && a + c > b && c + b > a) {
        return '11'
    }
    return '00'
}


//3. Функция isEvenSumGreater принимает параметром массив чисел.
// Если сумма элементов массива с четный индексом больше суммы элементов массива с нечетными индексами
// то функция возвращает true в противном случае false

export const isEvenSumGreater = (numbers: Array<number>):boolean => {
    let even = 0
    let notEven = 0
    for (let x = 0; x < numbers.length; x += 2) {
        even += numbers[x]
    }
    for (let x = 1; x < numbers.length; x += 2) {
        notEven += numbers[x]
    }
    return even > notEven
}

export const isEvenSumGreater2 = (numbers: Array<number>):boolean => {
    let even = numbers.reduce((a, b, i) => i % 2 === 0 ? a + b : b, 0)
    let notEven = numbers.reduce((a, b, i) => i % 2 !== 0 ? a + b : b, 0)
    return even > notEven
}

// forever
export const isEvenSumGreater3 = (numbers: Array<number>):boolean => {
    let even = numbers.reduce((a, b, i) => i % 2 === 0 ? a + b : a- b, 0)
    return ( even > 0)
}


export const getSum =(num:number ):number=>{
   return  num.toString().split('').map(t=>+t).reduce((a,b)=> a + b)
}


/*
// 5. Функция банкомат принимает параметром целое натурьльное число (сумму)
// Возвращает массив с наименьшим количеством купюр ,которыми можно выдать эту сумму .
// Доступны банкоты следующий номиналов
// const banknotes = [1000,500,100,50,20,10,5,2,1]

export const getBanknoteList = (num:number):Array<number> =>{

}*/
