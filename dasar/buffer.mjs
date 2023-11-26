import {Buffer} from 'buffer'
const buffer = Buffer.from("Rizki Kosasih");
var output = buffer.toString('base64url');
console.info(output);

const buffer2 = Buffer.from(output, 'base64url');
var output = buffer2.toString();
console.info(output);