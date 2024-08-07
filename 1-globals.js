//Globals can be accessed from anywhere in the application

console.log(__dirname)  //path to current directory
console.log(__filename) //file name 
console.log(require) //function to use modules
console.log(module) //gives info about current module
console.log(process) //info about env where the program is being executed


//----------Only once after the defined amout of time-----------
// setTimeout(() => {
//     console.log("hello world")
// }, 1000)

//----------multiple times after the defined amout of intervals-----------
// setInterval(() => {
//     console.log("hello world")
// }, 1000)