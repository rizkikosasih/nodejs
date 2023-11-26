import express from 'express';
import request from "supertest";
const app = express()
// const port = 3000

app.get('/', function (req, res) {
  res.status(200)
    .set({'content-type': 'text/html',})
    .send(`<html><body><h1>Hello World</h1></body></html>`);
});

test('Test Response Body', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.get('content-type')).toContain('text/html');
  expect(res.text).toBe(`<html><body><h1>Hello World</h1></body></html>`);
})