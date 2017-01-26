require('./program06_module.js')(process.argv[2], process.argv[3], function (err, data) {
  if (err) return err
  data.forEach(data => console.log(data))
})
