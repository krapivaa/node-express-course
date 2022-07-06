//require the sentence variable from the practice2.js module. Require also the os and fs modules. Then, also in practice1.js, write code that will create a file, ./content/practice.txt. Use asynchronous write operations. Write first the sentence and then the os.userInfo().username to the file. Test practice1.js to make sure these are written to the file (they will typically appear on the same line.)

const {sentence} = require('./practice2')
const os = require('os')
const user = os.userInfo().username
const { writeFile } = require('fs')
// const { writeFile } = require('fs').promises

writeFile (
    '../content/practice.txt', 
    ` ${sentence} ${user}`,
    (err, result) => {
        if (err) {
            console.log(err)
            return
          }
    }
) 

// const start = async() => {
//     try {
//         await writeFile(
//             '../content/practice.txt', 
//             ` ${sentence} ${user}`,
//         )
//     } catch (error) {
//         console.log(error)
//     }
// }
// start()

   