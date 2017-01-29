var http = require('http')
var url = require('url')
var port = process.argv[2]

http.createServer(function (req, res) {
  if (req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'application/json'})
    var apiObject = {}
    if (req.url.indexOf('/api/parsetime') === 0) {
      var iso = url.parse(req.url.replace('/api/parsetime', ''), true).query.iso || null
      var date = new Date(iso)
      apiObject.hour = date.getHours()
      apiObject.minute = date.getMinutes()
      apiObject.second = date.getSeconds()
      res.write(JSON.stringify(apiObject))
    }
    if (req.url.indexOf('/api/unixtime') === 0) {
      var iso = url.parse(req.url.replace('/api/unixtime', ''), true).query.iso || null
      var date = new Date(iso)
      apiObject.unixtime = date.getTime()
      res.write(JSON.stringify(apiObject))
    }
  }
  res.end()
}).listen(port)
