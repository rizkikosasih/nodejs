import http from 'http'

const server = http.createServer((req, res) => {
	var method = req.method, url = req.url.toLowerCase()
	console.info(method)
	console.info(url)
	if (method === 'POST') {
		req.on('data', (data) => {
			res.setHeader('content-type', 'application/json')
			res.write(data)
			res.end()
		})
	} else {
		if (url === '/test') {
			res.write('Hello Test')
		} else {
			res.write('Hello World')
		}
		res.end()
	}
})

server.listen(3000, 'localhost')