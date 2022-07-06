//events are core building blocks of Node.js
const EventEmitter = require('events')

const customEmitter = new EventEmitter()
//on - listen for an event
//emit -emit an event
//order matters 1. on 2. emiit
customEmitter.on('response', (name, id) => {
    console.log(`data received from user ${name} with id: ${id}`)
})

customEmitter.on('response', () => {
    console.log(`some other ligic here`)
})

customEmitter.emit('response', 'John', 34)