const fs = require('fs')
const mime = require('mime/lite')



let defaultImage = ''

for (const arg of process.argv) {
    if ( !fs.statSync(arg).isFile() ) { continue }
    if ( !mime.getType(arg).match( /^image\/.*/ )) { continue }
    defaultImage = arg
    break
}



module.exports = () => { return defaultImage }


