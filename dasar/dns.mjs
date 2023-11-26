import dns from 'dns/promises'

const ip = await dns.lookup('www.hbhoz.id')
console.info(ip.address);
console.info(ip.family);