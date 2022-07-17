//create a middleware function called consoleLog(req, res, next) that logs a statement to the console and then invokes the next function. Export this function. Edit practice-express.js to require the consoleLog function, and add an app.use statement so that it is invoked before every request. Test the practice-express.js program to make sure the middleware is working, accessing your express program from the browser using localhost:3000 as before.
const consoleLog = (req, res, next) => {
    console.log('Hello Universe')
    next()
}

module.exports = consoleLog