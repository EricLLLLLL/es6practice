const co = require('co')
const fetch = require('node-fetch')


// function run(grenerator) {
//   const iterator = grenerator()
//   const it = iterator.next()
// }


function* gernerator() {
  const res = yield fetch('http://api.douban.com/v2/movie/1291843')
  const movie = yield res.json()
  const summary = movie.summary
}

const iterator = gernerator()

console.log('iterator', iterator)

const it = iterator.next()
console.log('it', it)

it.value.then(data => {
  console.log('data---first', data)
  const it2 = iterator.next(data)
  console.log(it2)
  it2.value.then(data2 => {
    console.log('data-two', data2)
    const it3 = iterator.next(data2)
    console.log('it3', it3)
  })
})