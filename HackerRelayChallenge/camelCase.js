
function camelCase(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, ' ').split(" ").map((word,i) => (i == 0 ? word[0].toLowerCase() : word[0].toUpperCase() )+ word.slice(1)).join("")
}
console.log(camelCase('Cats and*Dogs-are cUte'))