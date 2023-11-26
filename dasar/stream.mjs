import fs from "fs";

const writer = fs.createWriteStream('target.log');
writer.write(`Rizki\n`);
writer.write(`Kosasih\n`);
writer.end();

const reader = fs.createReadStream('target.log');
reader.addListener(`data`, (data) => {
	console.info(data.toString());
})