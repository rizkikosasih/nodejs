import express from 'express';
import request from "supertest";
const app = express()
// const port = 3000

app.get('/', function (req, res) {
  res.status(302)
    .set({
      'x-powered-by': 'Express JS',
      'x-author': 'Rizki Kosasih'
    })
    .send('Hello Response');
});

test('Test Response Header', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(302);
  expect(res.get('x-powered-by')).toBe('Express JS')
  expect(res.get('x-author')).toBe('Rizki Kosasih')
})