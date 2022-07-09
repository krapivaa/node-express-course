const express = require('express')
const app = express()
const path = require('path')

//static and middlewear
app.use(express.static('./public'))

app.get('/', (req, res)=> {
    res.sendFile(path.resolve(__dirname, '../navbar-app/index.html'))
})

app.all('*', (req, res)=> {
    res.status(404).send('Resource is not found')
})

app.listen(5001, () => {
    console.log('server is listening on port 5001')
})