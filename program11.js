var http = require('http')
var fs = require('fs')
var port = process.argv[2]
var textFile = process.argv[3]

http.createServer(function (req, res) {
  res.write(fs.readFileSync(textFile).toString())
  res.end()
}).listen(port)
