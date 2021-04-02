

let arr = [5,6,7]
arr[8]=8
console.log(arr.length)

let arr2 = [0,1,2,3,4,5,6,7,8,9]
arr2.length = 5
console.log(arr[7])
console.log(arr.length)

let arr3 = [1,2,3,4,5,6,7,8,9,10]
arr3.splice(1,2,3,4)

let arr4 = [1,2,3,4,5,6,7,8,9,10]
arr4.splice(-2,-2,3,4)

let arr5 = [1,2,3,4,5,6,7,8,9,10]
arr5.splice(-2,2,3,4)


let arr6 = [1,2,3,4,5,6,7,8,9,10]
arr6.slice(-2,4)

let arr7 = [1,2,3,4,5,6,7,8,9,10]
arr7plus =arr7.slice(-2,-2)