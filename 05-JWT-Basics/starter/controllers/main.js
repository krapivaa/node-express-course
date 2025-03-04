//check username, password in post (login) request  - they are in req.body
//if both exist create new JWT (Json web token - long string with security features) - send back to front-end
//if not - send error message
//setup authentication so only the request with JWT can access the dashboard
const jwt = require('jsonwebtoken')
const {BadRequestError} = require('../errors')

const login = async (req, res) => {
    const {username, password} = req.body
    //mongo
    //Joi - package
    //check in controller
    if (!username || !password) {
        throw new BadRequestError('Please provide email and/or password.')      
    }
    //just for demo, normally provided by DB
    const id = new Date().getDate()
    //try to keep payload small, better experience for user
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})
    //JWT_SECRET should be long and complex 
    //console.log(username, password)
    
    //res.send('Fake Login/ Register/ Signup Route') 
    res.status(200).json({msg: 'User created', token})  
}

const dashboard =  async (req, res) => {
        console.log(req.user)
        const luckyNumber = Math.floor(Math.random()*100)

        res.status(200).json({
            msg: `Hello, ${req.user.username}`, 
            secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {login, dashboard}