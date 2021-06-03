const express = require('express')
const products = require('./data/products')

const app = express()
app.listen(5000, console.log('server running on port 5000'))

app.get('/', (req, res) => {
  res.send('Api is running...')
})
app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})
