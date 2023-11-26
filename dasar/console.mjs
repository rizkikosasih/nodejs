import {Console} from 'console'
import fs from 'fs'

const file = fs.createWriteStream('application.log')
const log = new Console({stdout: file, stderr: file,})
log.info(`Hello World`)
log.error(`Hello World`)
const person = {firstName: 'Rizki', lastName: 'Kosasih'}
log.table(person)

const source = fs.createReadStream('application.log')
source.on('data', (data) => {
	console.info(data.toString());
})