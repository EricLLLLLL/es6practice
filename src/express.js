const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hi express')
})

app.listen(2334)