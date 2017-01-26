var https = require('https')
var argument = process.argv.reduce(function (str, val, index) {
  if (index === 0 || index === 1) return str
  if (index !== 2) str += ' '
  return str + val
}, '')

var url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&exsentences=1&titles=${argument}&redirects=1`
var wikiJson = {}
https.get(url, function (res) {
  var rawdata = ''
  res.setEncoding('utf8')
  res.on('data', chunk => {
    rawdata += chunk
  })
  res.on('end', function () {
    wikiJson = JSON.parse(rawdata).query.pages
    wikiJson = wikiJson[Object.keys(wikiJson)[0]]
    console.log(wikiJson.extract.replace('\n', ' '))
  })
})
