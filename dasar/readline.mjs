import readline from 'readline/promises'
import { stdin, stdout } from 'process'

const input = readline.createInterface({input: stdin, output: stdout})
const answer = await input.question("Siapa nama anda? ")
console.info(`Hello ${answer}`);
const answer2 = await input.question("Berapa umur anda? ")
console.info(`Umur anda ${answer2}`);
input.close();