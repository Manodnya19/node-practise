//we're using the require() function to include the built-in fs (file system) module in Node.
const {readFileSync, writeFileSync} = require('fs')

//below command is used to read from the desired file
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first,second)


/* we use writeFileSync to write in the desired file by providing the path of the file as first argument, whatever we want to modify as second argument
 and if we want to append to the existing content in the file then we can give the third argument - {flag: 'a'}. If we dont want to append and 
 just overwrite the existing content we can just ignore the flag argument.
 Also, if the new file doesnt exist after running the file a new file will be created*/

writeFileSync('./content/new-file2.txt', `Here is the write result: ${first} and ${second}.`, {flag: 'a'})