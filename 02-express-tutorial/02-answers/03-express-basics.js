//https://expressjs.com/
const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    res.status(200).send('Home Page')
})

app.get('/about', (req, res)=> {
    res.status(200).send('About Page')
})

app.all('*', (req, res)=> {
    res.status(404).send('<h1>Resource is not found</h1>')
})

app.listen(5001, () => {
    console.log('server is listening on port 5001')
})

//check some charts folder - http methods
    //app.get all browsers have it by default
    //app.post
    //app.put
    //app.delete
    //app.app - all methods
    //app.use - responsible for middleware
    //app.listen
