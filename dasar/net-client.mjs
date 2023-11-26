import net from 'net'
import process from 'process'
const client = net.createConnection({port: 3000, host: 'localhost'})
client.on('data', (data) => {
	console.info(`Receive data from server: ${data.toString()}`)
})
setInterval(() => {
	client.write(`${process.argv[2]} \r\n`)
}, 2000)