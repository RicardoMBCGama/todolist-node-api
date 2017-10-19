module.exports = (app) =>
{
  var todoList = require("../controllers/todoListController");

  app.route("/tasks")
  .get(todoList.listAllTasks)
  .post(todoList.createTask);

  app.route("/tasks/:taskID")
  .get(todoList.readTask)
  .put(todoList.updateTask)
  .delete(todoList.deleteTask);
}
