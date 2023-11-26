export class TodoListService {
  todoList = ["Rizki", "Kosasih"];

  getJSONTodoList() {
    return JSON.stringify({
      code: 200,
      status: "OK",
      data: this.todoList.map((value, index) => {
        return { id: index, todo: value }
      }),
    })
  }

  errorHandler(code=404, message='Request Not Found') {
    return JSON.stringify({
      code: code,
      status: 'FAILED',
      message: message
    });
  }

  getTodoList(req, res) {
    res.write(this.getJSONTodoList());
    res.end();
  }

  createTodo(req, res) {
    req.on('data', (data) => {
      const body = JSON.parse(data.toString());
      this.todoList.push(body.todo);

      res.write(this.getJSONTodoList());
      res.end();
    })
  }

  updateTodo(req, res) {
    req.on('data', (data) => {
      const body = JSON.parse(data.toString());
      if (this.todoList[body.id]) {
        this.todoList[body.id] = body.todo;
      } else {
        res.statusCode = 404;
        res.write(this.errorHandler(404, 'ID Not Found'))
        res.end();
      }

      res.write(this.getJSONTodoList());
      res.end();
    })
  }

  deleteTodo(req, res) {
    req.on('data', (data) => {
      const body = JSON.parse(data.toString());
      if (this.todoList[body.id]) {
        this.todoList.splice(body.id, 1);
      } else {
        res.statusCode = 404;
        res.write(this.errorHandler(404, 'ID Not Found'))
        res.end();
      }

      res.write(this.getJSONTodoList());
      res.end();
    })
  }

  notFound(req, res) {
    res.write(this.errorHandler());
    res.end();
  }
}