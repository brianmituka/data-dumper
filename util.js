const chalk = require('chalk')
const fs = require('fs')



const log = function (message) {
    let time = new Date().toLocaleString('en-GB')
    console.log(chalk.green(`INFO::: ${time} ${message}`))
}

const writeToFile = function(mobile, data, phase, date) {
    let fd;
    let dataToWrite = `${mobile}  ${data} ${date};\n`
    try {
        fd = fs.openSync(phase, 'a')
        fs.appendFileSync(fd, dataToWrite, 'utf-8')
    } catch (error) {
        throw error
    } finally {
        if(fd !== undefined)
        fs.closeSync(fd)
    }
}

exports.log = log
exports.writeToFile = writeToFile