function leftpad (input, paddingLength, paddingChar) {
  paddingChar = paddingChar || '0'
  return Array((paddingLength + 1) - input.toString().length)
          .join(paddingChar) + input
}

var net = require('net')
var server = net.createServer(function (socket) {
  var dateString = ''
  var date = new Date()
  dateString += date.getFullYear() + '-'
  dateString += leftpad(date.getMonth() + 1, 2) + '-'
  dateString += leftpad(date.getDate(), 2) + ' '
  dateString += leftpad(date.getHours(), 2) + ':'
  dateString += leftpad(date.getMinutes(), 2)
  socket.end(dateString + '\n')
})
server.listen(process.argv[2])
