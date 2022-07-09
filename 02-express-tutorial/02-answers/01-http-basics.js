const http = require('http')

const server = http.createServer((req, res) => {

    console.log('user hit the server')
    console.log(req.method, req.url)

    const url = req.url
    //HOME page
    if(url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
//what you are sending back to browser
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
//status code - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
        res.write('<h1>Home page.</h1>')
        res.end()
//res.end should alwayes be called
//https://nodejs.org/api/http.html#responseenddata-encoding-callback

    } 
    //ABOUT page
    else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About page.</h1>')
        res.end()
    } 
    //404
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>404 Error. Page not found.</h1>')
        res.end()
    }
})

server.listen(5001)


//see somecharts folder -  request and respoinse objects