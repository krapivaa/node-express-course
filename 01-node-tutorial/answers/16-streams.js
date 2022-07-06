const {createReadStream} = require('fs')

const stream = createReadStream(
    '../content/big.txt', 
    {highWaterMark : 90000, 
    endcoding: 'utf8'}
)

stream.on('data', (result) => {
    console.log(result)
} )

stream.on ('error', (err) => {
    console.log(err)
})


//by default the size of the buffer (chunk) is 64kb but you can control it with highWaterMark