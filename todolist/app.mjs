import http from 'http';
import { TodoListService } from './todoist-service.mjs';

const service = new TodoListService();
const server = http.createServer((req, res) => {
  res.setHeader('content-type', 'application/json')
  if (req.method === 'GET') {
    service.getTodoList(req, res);
  } else if (req.method === 'POST') {
    service.createTodo(req, res);
  } else if (req.method === 'PUT') {
    service.updateTodo(req, res);
  } else if (req.method === 'DELETE') {
    service.deleteTodo(req, res);
  } else {
    res.statusCode = 404;
    service.notFound(req, res);
  }
})

server.listen(3000)