//constructor -special method we invoce when we create new instabnce of class

class CustomAPIError extends Error {
    constructor(message, statusCode) {
      super(message)
      this.statusCode = statusCode
    }
  }
  
  const createCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode)
  }
  
  module.exports = { createCustomError, CustomAPIError }