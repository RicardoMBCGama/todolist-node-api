var express = require("express")
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require("mongoose");
var Task = require("./api/models/todoListModel");
var bodyParser = require("body-parser");

var options = {
  useMongoClient: true
}

//Database connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb",options);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require("./api/routes/todoListRoutes");
routes(app);

app.get("/", (req,res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
  console.log("ToDo List RESTful API server started on:" + port);
});
