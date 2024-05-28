const lights = [
  [1, 1, 5],
  [1, 2, 4],
  [2, 2, 4],
  [3, 2, 4],
];
function whiteLightsLength(n, m, lights) {
  // creating a new array `colors` by mapping over the 'lights' array and returning the color value (the first element) of each light. result array will be an color array [1,1,2,3]
  const colors = lights.map((light) => light[0]);

  // if color array includes all three possible colors red, blue, green (represented by 1, 2, 3) if not returns zero for error handle as it is not a valid entry
  if (![1, 2, 3].every((l) => colors.includes(l))) {
    return 0;
  }
  //  Here we are creating an object to store or keep track of 
  // which positions on the light strip are occupied by each color of light 
  const positions = new Map();

  // light in the lights array iterates through and each position on the light strip between start and end position of a light. 
  // for each position, It retried a value stored in the object and if no lights there empty set will create
  //add the color value current light to set and then stored and updates set in that position.

  for (let i = 0; i < lights.length; i++) {
    for (let j = lights[i][1]; j <= lights[i][2]; j++) {
      const val = positions.get(j) || new Set();
      positions.set(j, val.add(lights[i][0]));
    }
  }
// returns the length of an array filtering the entries in the object include only three positions are present.
// used spread operator to convert object to an array of entries which is keys and values
// finally length property used to get the number of entries in the filtered array
  // console.log(...positions);
  return [...positions].filter(([k, v]) => v.size === 3).length;
}

console.log(whiteLightsLength(1, 2, lights));

// result is 3 when log the console because there is three position where all there colors of lights are present
// i.e in position 4

// positions = Map(5) {
//   1 => Set(1) { 1 },
//   2 => Set(3) { 1, 2, 3 },
//   3 => Set(3) { 1, 2, 3 },
//   4 => Set(3) { 1, 2, 3 },
//   5 => Set(1) { 1 }
// }