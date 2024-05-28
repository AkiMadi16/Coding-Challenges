function multiplier(arr) {
const DoubleOfTotal = arr.reduce((prev,cur) => prev + cur, 0)

// assumption - Largest is arr first element
const Largest = arr[0]

return arr.filter((num, i) => Largest > num[i] && num[i] * num[i+1] > DoubleOfTotal) ? true : false 
}
console.log(multiplier([2,2,2,2,4,1]))