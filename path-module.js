//------path seperator-------
const path = require('path')
console.log(path.sep)

//-----filepath--------
const filePath = path.join('./content','subfolder','test.txt')
console.log(filePath)

 const base = path.basename(filePath)
 console.log(base)