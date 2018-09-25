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

// const iterator = gernerator()

// console.log('iterator', iterator)

// const it = iterator.next()
// console.log('it', it)

// it.value.then(data => {
//   console.log('data---first', data)
//   const it2 = iterator.next(data)
//   console.log(it2)
//   it2.value.then(data2 => {
//     console.log('data-two', data2)
//     const it3 = iterator.next(data2)
//     console.log('it3', it3)
//   })
// })


function* gen() {
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
}

function F() {
  return gen.call(gen.prototype);
}

var f = new F();

f.next();  // Object {value: 2, done: false}
f.next();  // Object {value: 3, done: false}
f.next();  // Object {value: undefined, done: true}

f.a // 1
f.b // 2
f.c // 3


// 下面是二叉树的构造函数，
// 三个参数分别是左树、当前节点和右树
function Tree(left, label, right) {
  this.left = left;
  this.label = label;
  this.right = right;
}

// 下面是中序（inorder）遍历函数。
// 由于返回的是一个遍历器，所以要用generator函数。
// 函数体内采用递归算法，所以左树和右树要用yield*遍历
function* inorder(t) {
  if (t) {
    yield* inorder(t.left);
    yield t.label;
    yield* inorder(t.right);
  }
}

// 下面生成二叉树
function make(array) {
  // 判断是否为叶节点
  if (array.length == 1) return new Tree(null, array[0], null);
  return new Tree(make(array[0]), array[1], make(array[2]));
}
let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

// 遍历二叉树
var result = [];
for (let node of inorder(tree)) {
  result.push(node);
}

console.log(result)