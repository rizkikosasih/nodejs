import net from 'net'
const server = net.createServer(function (client) {
	console.info(`Client Connected`)
	client.on('data', function (data) {
		console.info(`Receive data from client : ${data.toString()}`)
		client.write(`Hello ${data.toString()} \r\n`)
	})
})
server.listen(3000, 'localhost')