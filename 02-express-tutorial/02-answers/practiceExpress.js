//Add the code to make this file a working express server. For the ‘/’ get request, it should return the index.html from the new-public folder. For the ‘/sample’ get request, it should just return the line “This is working.” Configure it to use port 3000. Test it by trying “localhost:3000” and “localhost:3000/sample” from your browser.
const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res)=> {
    res.sendFile(path.resolve(__dirname, './new-public/index.html'))
})

app.get('/sample', (req, res)=> {
    res.status(200).send('This is working')
})

app.all('*', (req, res)=> {
    res.status(404).send('<h1>Page is not found</h1>')
})

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})

