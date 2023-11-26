import https from 'https'
const endpoint = "https://eon81adcjq8ipng.m.pipedream.net"
const request = https.request(endpoint, {
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
}, function (response) {
	response.on('data', function (data) {
		console.info(`Receive ${data.toString()}`)
	})
})
const body = JSON.stringify({fname: 'rizki', lname: 'kosasih'})
request.write(body)
request.end()
