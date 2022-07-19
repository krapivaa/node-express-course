const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware built in express - if we do not use it we do not have data in req.body
app.use(express.static('./public'))
app.use(express.json())

//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)
//app.get('/api/v1/tasks)           - get all the task
//app.post('/api/v1/tasks)          - create a new task
//app.get('/api/v1/tasks/:id)       - get single task
//app.patch('/api/v1/tasks/:id)     - update task (partial update, 
                                //put - replace the entire resource)
//app.delete('/api/v1/tasks/:id)    - delete task

//middlewarew function to create our  custom error 404 message
app.use(notFound)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 5001

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port} `))
    } catch (error) {
        console.log(error)
    }
}
start()


