/// sync
const http = require('http')

const server = http.createServer((req,res) => {
    console.log('request event')
    // res.end("Hello World")
    if(req.url === '/') {
        res.end('Home Page')
    }
    if(req.url === '/about') {
        res.end('About Page')
    }
    res.end('Error Page')
})

server.listen(5001, () => {
    console.log('Server listening on port: 5001 ...')
})