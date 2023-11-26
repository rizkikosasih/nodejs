import cluster from "node:cluster"
import http from "node:http"
import { availableParallelism } from "node:os"
import process from "node:process"

const numCPUs = availableParallelism()

if (cluster.isPrimary) {
	console.info(`Primary ${process.pid} is running`)

	// Fork workers.
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork()
	}

	cluster.on("exit", (worker, code, signal) => {
		console.info(`Worker ${worker.process.pid} died`)
		cluster.fork()
	})
} else {
	// Workers can share any TCP connection
	// In this case it is an HTTP server
	http.createServer((req, res) => {
		console.info(req.url)
		console.info(req.method)
		res.writeHead(200)
		res.end(`Response from pid ${process.pid}`)
		process.exit()
	}).listen(8000)

	console.info(`Worker ${process.pid} started`)
}