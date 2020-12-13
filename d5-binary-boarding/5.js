//Binary boarding

const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().split('\n')

// we interpret the pass as a binary number
// i.e.('BFFFBBFRRR' would be 1000110111)
// start with 64 for rows (7 digit binary goes up to 64)
// start with 4 for cols (3 digit binary goes up to 4)

const find_seat = function (pass) {
  let row = 0
  let col = 0
  let rp = 64
  let cp = 4

  for (let i = 0; i < pass.length; i++) {
    if (pass[i] === 'F') {
      rp = rp / 2
    } else if (pass[i] === 'B') {
      row += rp
      rp = rp / 2
    } else if (pass[i] === 'L') {
      cp = cp / 2
    } else {
      col += cp
      cp /= 2
    }
  }
  return row * 8 + col
}

let ids = []
for (pass of input) {
  let id = find_seat(pass)
  ids.push(id)
}

let p1 = Math.max(...ids) // answer part 1

// ------- part 2 ------
//  Our seat is missing but neighboring seats are taken, so we first sort ids and then check for neighbour sets

// sort array
ids.sort((a, b) => a - b)
let p2 = null

// check for neighbour seats
for (let i = 1; i < ids.length; i++) {
  if (!ids.includes(ids[i] + 1) && ids.includes(ids[i] + 2)) {
    p2 = ids[i] + 1
  }
}

console.log('asnwer p1: ', p1)
console.log('asnwer p2: ', p2)

//answer p1: 855
//answer p2: 552
