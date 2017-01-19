var fs = require('fs')
var input = fs.readFileSync(process.argv[2])

console.log(input.toString().split('\n').length - 1)
