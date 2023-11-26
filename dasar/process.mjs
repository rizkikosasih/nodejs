import process from 'process'

process.on('exit', (exitCode) => {
	console.info(`NodeJS exit with code ${exitCode}`);
})

console.info(process.version);
console.table(process.argv);
console.table(process.report);
console.info(process.env);
process.exit(1);
console.info(`Not running this code`);