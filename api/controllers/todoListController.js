var mongoose = require("mongoose");
Task = mongoose.model("Tasks");

export.listAllTasks = (req, res) =>
{
  Task.find({}, (err,task) => {
    if(err){
      res.send(err);
    }
    res.json(task);
  });
};

export.createTask = (req, res) =>
{
  var newTask = newTask(req.body);
  newTask.save((err,task) => {
    if(err){
      res.send(err);
    }
    res.json(task);
  });
};

export.readTask = (req, res) =>
{
  Task.findById(req.params.taskId, (err, task) =>
  {
    if(err){
      res.send(err);
    }
    res.json(task);
  });
};

export.updateTask = (req, res) =>
{
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, (err,task) =>
  {
    if(err){
      res.send(err);
    }
    res.json(task);
  });
};

export.deleteTask = (req, res) =>
{
  Task.remove({_id: req.params.taskId}, (err,task) =>
  {
    if(err){
      res.send(err);
    }
    res.json(task);
  });
};
