//https://www.youtube.com/watch?v=qwfE7fSVaZM&t=1s
//console.log('04 Store API')
require('dotenv').config()
require('express-async-errors')
//https://www.npmjs.com/package/express-async-errors

const express = require('express')
const app = express()

//connect to db and return promice so we need to finish await io const start
const connectDB = require('./db/connect')

const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

//middleware - not going to use for this project though
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products"> products route </a>')
})

//in order for routes to work we need to set up controllers
app.use('/api/v1/products', productsRouter)

//products route
app.use(notFoundMiddleware)
app.use(errorMiddleware)


const port = process.env.PORT || 5001
const start = async () => {
    try {
        //connect DB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
