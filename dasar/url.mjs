import {URL} from 'url'
const hb = new URL('https://www.hbhoz.id/ad3m1n_d4sboard_halmart/index.php?s=1')
hb.host = 'www.test.id'
hb.searchParams.append('name', 'kosasih')
console.info(hb.toString);
console.info(hb.href);
console.info(hb.protocol);
console.info(hb.host);
console.info(hb.pathname);
console.info(hb.searchParams);
