const fs = require('fs')
const groups = fs.readFileSync('input.txt', 'utf-8').split('\r\n\r\n')

let part1 = 0 //total
let part2 = 0

for (const groupString of groups) {
  // remove \r\n from group string to concatenate each new line within the group, into a single string.
  // then spread each string into the Set operator to get a set of unique values, giving us the number of questions to which anyone answered "yes"

  const uniques = new Set([...groupString.replace(/\r\n/g, '')])

  // Set uses size instead of length
  part1 += uniques.size

  group = groupString.split('\r\n').filter((x) => x) // split group into person and remove empty lines

  part2 += [...uniques].filter(
    (char) => group.every((form) => form.includes(char)) //checks if character is included in every form of the group
  ).length
}

console.log(part1) //answer: 6878
console.log(part2) //answer: 3464
