import {EventEmitter} from 'events'

const emitter = new EventEmitter()
emitter.on('hello', (name) => {
	console.info(`Hello ${name}`)
})
emitter.on('hello', (name) => {
	setTimeout(() => {
		console.info(`Halo ${name}`)
	}, 2000)
})

emitter.emit('hello', 'Rizki')