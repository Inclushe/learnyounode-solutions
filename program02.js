var numbers = []
var output = 0

process.argv.forEach(function (a, b) {
  if (b > 1 && Number(a)) {
    numbers.push(Number(a))
  }
})

numbers.forEach(function (a) {
  output += a
})

console.log(output)
