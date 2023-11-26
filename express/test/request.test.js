import express from 'express';
import request from "supertest";
const app = express()
// const port = 3000

app.get('/hello/world', function (req, res) {
  res.status(302)
  .json({
    path: req.path,
    originalUrl: req.originalUrl,
    hostname: req.hostname,
    protocol: req.protocol,
    name: req.query.name,
  });
});

test('Test Request', async () => {
  var name = 'Rizki'
  const res = await request(app).get('/hello/world').query({ name: name });
  expect(res.statusCode).toBe(302);
  expect(res.body).toEqual({
    path: '/hello/world',
    originalUrl: `/hello/world?name=${name}`,
    hostname: '127.0.0.1',
    protocol: 'http',
    name: name,
  })
})