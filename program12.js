var http = require('http')
var port = process.argv[2]

http.createServer(function (req, res) {
  if (req.method == 'POST') {
    var rawData = ''
    req.on('data', chunk => rawData += chunk)
    req.on('end', () => {
      res.write(rawData.toUpperCase())
      res.end()
    })
  }
  else {
    res.end()
  }
}).listen(port)