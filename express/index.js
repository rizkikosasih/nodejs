import express from 'express';
import request from "supertest";
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('GET request about page')
})
app.get('/user', function (req, res) {
  res.status(200).json({ name: 'john' });
});
request(app)
.get('/user')
.expect('Content-Type', /json/)
.expect('Content-Length', '15')
.expect(200)
.end(function (err, res) {
  if (err) throw err;
});

app.listen(port, () => console.log(`Example app running in http://localhost:${port}`))