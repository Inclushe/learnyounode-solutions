var http = require('http')
var url = process.argv[2]

http.get(url, r => r.on('data', data => console.log(data.toString())))
