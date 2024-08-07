//we're using the require() function to include the built-in fs (file system) module in Node.
// const {readFile, writeFile} = require('fs')


//
// setTimeout(() =>{
//     console.log(`This will run after 1 second`
// )}, 1000)

// setTimeout(() =>{
//         console.log(`This will run after 2 second`)
//         setTimeout(() =>{
//             console.log(`This will run after 1 second`)
//             setTimeout(() =>{
//                 console.log(`This will run after 0 second`
//                 )}, 0);  
//         }, 1000)  
//     }, 2000)

// hello(goodbye)
// function hello(callback){
//     console.log('hello')
//     callback(later)

// }
// function goodbye(callback){
//     console.log('goodbye')
//     callback()
// }
// function later(){
//     console.log("later")
// }


const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
    return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
        return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')