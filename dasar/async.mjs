function samplePromise() {
	return Promise.resolve('Rizki');
}

const name = await samplePromise();
console.info(name);