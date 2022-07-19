const {customAPIError} = require('../errors/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
    //console.log(err)
    if(err instanceof customAPIError) {
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(err.status).json({msg: `Something went wrong, please try again.`})
}

module.exports = errorHandlerMiddleware