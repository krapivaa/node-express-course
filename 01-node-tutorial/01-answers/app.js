//https://www.youtube.com/watch?v=Oe421EPjeBE&t=6357s

//npm - global comand, comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo install -g <packageName> (Mac)

//package.json - manifest file (stores important info about project/package)
//manual approach (create pachage.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

//uninstall the package npm uninstall packageName

// const _ = require('lodash')

// const items = [1, [2, [3, [4]]]]
// const newItems = _.flattenDeep(items);
// console.log(newItems); //node app.js in the terminal

/////

// const {readFile} = require ('fs')

// console.log('started a first task')
// readFile('../content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(result)
//     console.log('completed first task')
// })
// console.log('starting next task')

////
//started operating system process
// console.log('first')
// setTimeout(() => {
//     console.log('second')
// }, 0)
// console.log('third')
//completed and exited operating system process

/// sync
// const http = require('http')

// const server = http.createServer((req,res) => {
//     console.log('request event')
//     // res.end("Hello World")
//     if(req.url === '/') {
//         res.end('Home Page')
//     }
//     if(req.url === '/about') {
//         res.end('About Page')
//     }
//     res.end('Error Page')
// })

// server.listen(5001, () => {
//     console.log('Server listening on port: 5001 ...')
// })


//async
const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFile('../content/first.txt', 'utf8');
        const second = await readFile('../content/second.txt', 'utf8');
        await writeFile(
            '../content/result-mind-grenade.txt', 
            ` This is awesome: ${first}, ${second}`,
            {flag: 'a'}
            )
        console.log(first)
        console.log(second)
    } catch (error) {
        console.log(error)
    }
}
start()

// getText('../content/first.txt')
//     .then(result => console.log(result))
//     .catch((err) => console.log(err))


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err) {
//                 reject (err)
//             } else {
//                 resolve (data)
//             }
//         })
//     })
// }


