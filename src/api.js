const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");

var app = Express();

// MiddleWare
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

Mongoose.connect("mongodb://localhost:27017/to_do", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ToDoModel = Mongoose.model("todo", {
  name: String,
  id: Number,
  createdAt: String,
  todo: Boolean,
});

app.post("/toDo", async (request, response) => {
  try {
    var toDo = new ToDoModel(request.body);
    var result = await toDo.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/toDo", async (request, response) => {
  try {
    const result = await ToDoModel.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/toDo/:id", async (request, response) => {
  try {
    let targetToDo = request.params.id
    const result = await ToDoModel.find(targetToDo)
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put("/todo/:id {done: Booolean}", async (request, response) => {
  try {
  } catch (error) {
    response.status(500).send(error);
  }
});

app.listen(8080, () => {
  console.log("http://localhost:8080/");
  console.log("!==> Success <==! all is good");
});
