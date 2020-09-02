const fs = require('fs')

console.log(111111)
const readFile = file => {
  return new Promise((resolve, reject) =>  {
    fs.readFile(file, (err, content) => {
      if(!err) {
        resolve(content.toString())
      } else {
        reject(err)
      }
    })
  })
}
readFile('array.html').then(content => {
  console.log(content)
})

const run = async () => {
  const content = readFile('array.html')
  console.log(content)
  return 111
}










console.log( )