// Your flight departs in a few days from the coastal airport; the easiest way down to the coast from here is via toboggan.

// The shopkeeper at the North Pole Toboggan Rental Shop is having a bad day. "Something's wrong with our computers; we can't log in!" You ask if you can take a look.

// Their password database seems to be a little corrupted: some of the passwords wouldn't have been allowed by the Official Toboggan Corporate Policy that was in effect when they were chosen.

// To try to debug the problem, they have created a list (your puzzle input) of passwords (according to the corrupted database) and the corporate policy when that password was set.

// For example, suppose you have the following list:

// 1-3 a: abcde
// 1-3 b: cdefg
// 2-9 c: ccccccccc
// Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

// In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

// How many passwords are valid according to their policies?

// --- Part Two ---
// While it appears you validated the passwords correctly, they don't seem to be what the Official Toboggan Corporate Authentication System is expecting.

// The shopkeeper suddenly realizes that he just accidentally explained the password policy rules from his old job at the sled rental place down the street! The Official Toboggan Corporate Policy actually works a little differently.

// Each policy actually describes two positions in the password, where 1 means the first character, 2 means the second character, and so on. (Be careful; Toboggan Corporate Policies have no concept of "index zero"!) Exactly one of these positions must contain the given letter. Other occurrences of the letter are irrelevant for the purposes of policy enforcement.

// Given the same example list from above:

// 1-3 a: abcde is valid: position 1 contains a and position 3 does not.
// 1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
// 2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.
// How many passwords are valid according to the new interpretation of the policies?

const fs = require('fs')
const lines = fs.readFileSync('input.txt').toString().split('\r\n')

let validPasswords = 0
let validPasswords2 = 0

for (let line of lines) {
  let password = line.split(':')[1].trim()
  let min = line.split(':')[0].split('-')[0]
  let max = line.split(':')[0].trim().split('-')[1].split(' ')[0]
  let letter = line.split(':')[0].trim().split('-')[1].split(' ')[1]

  let counts = {}

  for (ch of password) {
    if (counts[ch]) {
      counts[ch] = counts[ch] + 1
    } else {
      counts[ch] = 1
    }
  }

  if (counts[letter] >= min && counts[letter] <= max) {
    validPasswords += 1
  }
  if ((password[min - 1] === letter) ^ (password[max - 1] === letter)) {
    validPasswords2 += 1
  }
}
console.log(validPasswords) // answer 1
console.log(validPasswords2) // answer 2
