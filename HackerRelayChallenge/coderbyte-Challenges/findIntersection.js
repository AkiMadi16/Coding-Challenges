function FindIntersection(strArr) { 

  const [arr1, arr2] = strArr.map(str => str.split(', '))
  const intersect = arr1.filter(item => arr2.includes(item)) 
  return intersect.length > 0 ? intersect : false
}
   
// keep this function call here 
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]));
console.log(FindIntersection(["1, 2, 3, 4, 5", "6, 7, 8, 9, 10"]));

//  Passed 10 test cases 
// Optimal running time O(n)
// Score - This user scored higher than 56.5% of users who solved this challenge.

// Question 
// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
