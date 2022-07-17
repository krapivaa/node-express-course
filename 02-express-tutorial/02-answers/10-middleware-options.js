const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

//1. use v route
//2. middleware options - our own / express / third party

// app.use([logger, authorize]) //our own
// app.use(express.static('./public')) //express
// https://www.npmjs.com/package/morgan //3-rd party middleware

app.use(morgan('tiny'))

app.get('/',(req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

// app.get('/api/products',(req, res) => {
//     res.send('Products')
// })

app.get('/api/items',[logger, authorize], (req, res) => {
    console.log(req.user)
    res.send('Items')
})


app.listen(5001, () => {
    console.log('Server is listening on port 5001...')
})