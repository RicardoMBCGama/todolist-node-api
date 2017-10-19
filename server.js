var express = require("express")
var app = express()
port = process.env.PORT || 3000;

app.get("/", (req,res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
  console.log("ToDo List RESTful API server started on:" + port);
});
