const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')

//getAllTasks not refr.code
const getAllTasks = async (req, res) => {
    //res.send('Get all tasks')
    try {
        const tasks = await Task.find({})
        //different options can be used (examples):
        res.status(200).json({tasks})
        //res.status(200).json({ tasks, amount: tasks.length})

        // res.status(200) //status: 'success'
        // .json({ success: true, data: {tasks, nbHits: tasks.length} })
    } catch (error) {
        //general error status code
        res.status(500).json({msg: error})
    }
}

//model - pass schema to model - name_of_model.create(method) 
const createTask = asyncWrapper(async (req, res) => {
    //res.send('Create task')
    const task = await Task.create(req.body)
    res.status(201).json({task})
}) //refractored code

const getTask = asyncWrapper(async (req, res, next) => {
    //res.send('Get single task')
        const {id: taskID} = req.params
        const task =  await Task.findOne({_id: taskID})
        if(!task) {
            return next(createCustomError(`No task with id: ${taskID}.`))
        }
        res.status(200).json({task})
})

//with patch - we are updating properties we are passing on only
const updateTask = asyncWrapper(async (req, res) => {
    //res.send('Update task')
        const {id: taskID} = req.params
        const task =  await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true, 
            runValidators: true
            //overwrite: true - for put methoid instaed ot patch
        })

        if(!task) {
            return next(createCustomError(`No task with id: ${taskID}.`))
        }

        res.status(200).json({task})
    
})

const deleteTask = asyncWrapper(async (req, res) => {
    //res.send('Delete task')
        const {id: taskID} = req.params
        const task =  await Task.findOneAndDelete({_id: taskID})
        if(!task) {
            //make sure to have retrurn!
            return next(createCustomError(`No task with id: ${taskID}.`))
        }
        res.status(200).json({task})
        //different versions can be used:
        //res.status(200).send()
        //res.status(200).json({task: null, status: 'success'})
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}