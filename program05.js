var fs = require('fs')
var fileDir = process.argv[2]
var extension = process.argv[3]

fs.readdir(fileDir, function (errors, list) {
  list.forEach(file => {
    if (file.includes(`.${extension}`)) {
      console.log(file)
    }
  })
})
