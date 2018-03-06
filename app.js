const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>It\'s raining cats and dogs!</h1>')
})

app.get('/puppies', (req, res) => {
  res.send('<h2>Puppies!</h2>')
})

app.get('/kittens', (req, res) => {
  res.send('<h2>Kittens!</h2>')
})

app.listen(1337, (err) => console.log('server listening'))
