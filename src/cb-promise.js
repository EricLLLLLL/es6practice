const fs = require('fs')


// 传统的回调
// fs.readFile('./package.json', {
//   encoding: 'utf-8'
// }, (err, data) => {
//   console.log(err)
//   if (err) {
//     return console.log(err)
//   }
//   data = JSON.parse(data)

//   console.log(data)
// })


function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, {
      encoding: 'utf-8'
    }, (err, data) => {
      // console.log(err)
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

readFileAsync('./package.json')
  .then(data => {
    data = JSON.parse(data)
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })


const util = require('util')


util.promisify(fs.readFile)('./package.json').
then(JSON.parse).
then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})