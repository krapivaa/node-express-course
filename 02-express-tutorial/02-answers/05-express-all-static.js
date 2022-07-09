const express = require('express')
const app = express()
const path = require('path')

//setup static and middleware
//static asset means that it is a file (image, style,js (dynamic only in browser)) that server does not need to change - common name for that folder static or public
app.use(express.static('./public'))

// app.get('/', (req, res)=> {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//     adding to static assets
//      SSR (server-side rendering)
// })

app.all('*', (req, res)=> {
    res.status(404).send('Resource is not found')
})

app.listen(5001, () => {
    console.log('server is listening on port 5001')
})