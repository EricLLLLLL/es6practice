const fs = require('fs')
const path = require('path')
const co = require('co')
const util = require('util')

// //第一阶段回调函数
// function readFile(cb) {
//   fs.readFile(path.resolve(__dirname, '../package.json'), {
//     encoding: 'utf-8'
//   }, (err, data) => {
//     if (err) return cb(err) // 这里的return只是 终止函数的进行 直接返回
//     data = JSON.parse(data)
//     cb(err, data)
//   })
// }

// readFile((err, data) => {
//   if (!err) {
//     console.log(data)
//   } else {
//     console.log(err)
//   }
// })

// // 第二阶段  Promise
// function readFileSync(path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, {
//       encoding: 'utf-8'
//     }, (err, data) => {
//       if (err) reject(err) // 这里的return只是 终止函数的进行 直接返回
//       data = JSON.parse(data)
//       resolve(data)
//     })
//   })
// }

// readFileSync(path.resolve(__dirname, '../package.json')).then(data => {
//   console.log(data)
// }).catch(err => {
//   console.log(err)
// })

// 第三阶段  generator yield  co
// co模块就是可以无限地自动执行模块里的promise
co(function* () {
  let data = yield util.promisify(fs.readFile)('./package.json')
  console.log(data)
  data = JSON.parse(data)
  console.log(data)
})

util.promisify(fs.readFile)('./package.json').then(data => {
  console.log(data)
})

// 第四阶段 Async 统一世界
// const readAsync = util

async function f() {
  await Promise.reject('出错了');
}

f()
  .then(v => console.log('then', v))
  .catch(e => console.log('catch', e))