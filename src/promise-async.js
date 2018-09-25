const fs = require('fs')
const util = require('util')

const readAsync = util.promisify(fs.readFile)

async function read() {
  try {
    const data = await readAsync('./package.json')
    console.log(data, JSON.parse(data))
  } catch (err) {
    console.log(err)
  }
}

read()