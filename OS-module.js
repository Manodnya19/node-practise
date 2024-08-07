//OS module
//to get userInfo
const os = require('os')
console.log(os.userInfo())

//to get the machine uptime 

console.log(`The machine has been up since ${os.uptime()} seconds`)

const currentOS = {
    name : os.type(),
    version : os.version(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS)