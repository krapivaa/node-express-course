const express = require('express')
const app = express()
let { people } = require('./data')

//static asset - folder methods-public
app.use(express.static('./methods-public'))
//parse from data -- foo form
app.use(express.urlencoded( {extended: false} ))
//parse json -- for js access
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

//POST - method
//Javascript Example
app.post('/api/people', (req, res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg: 'Please provide name value'})
    }
    res.status(201).send({success: true, person: name})
})

//Postman 
app.post('/api/postman/people', (req, res) => {
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .json({success: false, msg: 'Provide name value'})
    }
    res.status(201)
    .send({success: true, data:[...people, name]})
})

//Form Example
app.post('/login', (req, res) => {
    //console.log(req.body)
    const {name} = req.body
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    } else {
        res.status(401).send('Please provide your credentials')
    }
    res.send('POST') 
})

//PUT - method to update
app.put('/api/people/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
    // console.log( id, name)
    // res.send('hello person')
    const person = people.find((person) => person.id === Number(id))
    if(!person){
        return res
        .status(404)
        .json({success: false, msg: `No person with id ${id} found`})
    }
    const newPeople = people.map((person) => {
        if(person.id === Number(id) ){
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPeople})
})

//DELETE - method
app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person){
        return res
        .status(404)
        .json({success: false, msg: `No person with id ${req.params.id}`})
    }
    const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
    return  res.status(200).json({success: true, data: newPeople})
})

app.listen(5001, () => {
    console.log('Server is listening on port 5001...')
})