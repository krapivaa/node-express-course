const express = require('express')
const app = express()

//req => middleware => res

//middlewares are all over express

//this middleware function - function that executed during the request to the server. each middleware has acess to req and res objects
//when you work with middleware you must pass to next middleware - next() or your own response (res.send())
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    //res.send('testing')
    next() //pass to the next function - app.get()
}

app.get('/', logger ,(req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})


app.listen(5001, () => {
    console.log('Server is listening on port 5001...')
})