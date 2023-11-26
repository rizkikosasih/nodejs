function samplePromise() {
	return Promise.resolve('Rizki');
}

async function run() {
	const name = await samplePromise();
	console.info(name);
}

run();