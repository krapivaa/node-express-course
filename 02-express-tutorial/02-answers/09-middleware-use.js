const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
app.use([logger, authorize])
//order matters

//app.use(logger)
// api/home/about/products
//http://expressjs.com/en/5x/api.html#app.use

app.get('/',(req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products',(req, res) => {
    res.send('Products')
})


app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('Items')
})


app.listen(5001, () => {
    console.log('Server is listening on port 5001...')
})