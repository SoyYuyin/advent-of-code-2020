// --- Part Two ---
// The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.

// Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

// In your expense report, what is the product of the three entries that sum to 2020?
const fs = require('fs').promises

const parseLines = async () => {
  const data = await fs.readFile('./input.txt', { encoding: 'utf-8' })
  return data.split('\n')
}

const solve = async () => {
  const lines = await parseLines()
  const numbers = lines.map(Number)

  const pairs = {}
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j]
      pairs[sum] = [numbers[i], numbers[j]]
    }
  }
  for (let num of numbers) {
    let difference = 2020 - num
    if (pairs[difference]) {
      return pairs[difference][0] * pairs[difference][1] * num
    }
  }
}

solve().then(console.log)
