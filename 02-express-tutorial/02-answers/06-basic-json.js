//https://www.digitalocean.com/community/tutorials/an-introduction-to-json
const express = require('express')
const app = express()
const {products} = require ('../data')

app.get('/', (req, res) => {
    //res.json([{name: "John"}, {name: "Mary"}])
    res.json(products)
})

app.listen(5001, () => {
    console.log('Server is listening on port 5001...')
})