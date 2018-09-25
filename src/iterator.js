// function makeIterator(arr) {
//   let nextIndex = 0
//   return {
//     next: () => {
//       if (nextIndex < arr.length) {
//         return {
//           value: arr[nextIndex++],
//           done: false
//         }
//       } else {
//         return {
//           done: true
//         }
//       }
//     }
//   }
// }


// const it = makeIterator(['斯尧', '狗毛', '高曼'])

// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().done)


function* makeIterator(arr) {
  for (let i of arr) {
    yield i
  }
}

const it = makeIterator(['斯尧', '狗毛', '高曼'])

console.log(it.next())
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().done)