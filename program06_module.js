module.exports = function (fileDir, extension, callback) {
  var fs = require('fs')
  fs.readdir(fileDir, function (err, list) {
    if (err) return callback(err)
    var data = []
    list.forEach(file => {
      if (file.includes(`.${extension}`)) {
        data.push(file)
      }
    })
    callback(null, data)
  })
}
