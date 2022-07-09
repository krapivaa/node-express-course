// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./04-names')
//console.log(names)
const sayHi = require('./05-utils')

const data = require('./06-alternative-flavor')
require('./07-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)


//utils, names  + alterntative-flavors + mind-grenade and modules go together