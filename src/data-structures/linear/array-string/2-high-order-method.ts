const arr: number[] = [1, 2, 3, 4, 5, 6, 7]

const squared = arr.map(num => num * num) // [1, 4, 9, 16, 25, 36, 49 ]
const evenNumbers = arr.filter(num => num % 2 === 0) // [2, 4, 6]
const sum = arr.reduce((acc, num) => acc + num, 0); // 28

// [ 1, 4, 9, 16, 25, 36, 49 ] [ 2, 4, 6 ] 28
console.log(squared, evenNumbers, sum)
