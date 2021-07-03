const { readFileSync, writeFileSync } = require('fs')
const { syncBuiltinESMExports } = require('module')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)
// this creates or overwrites files || add third parameter ${flag:a} to append to existing file
writeFileSync(
  './content/result-sync.txt',
  `Here is the result ${first}. ${second}`
)
console.log('done with this task')
console.log('starting the next one')
