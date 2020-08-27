const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");

var app = Express();

// MiddleWare
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var urlMongo = "mongodb://localhost:27017/toDoList";

Mongoose.connect(urlMongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

var toDoListSchema = Mongoose.Schema({
  name: String,
  id: Number,
  createdAt: String,
  todo: Boolean,
});

var toDoList = Mongoose.model("todo", toDoListSchema);

app.post("/todo", async (request, response) => {
  try {
    var toDo = new toDoList(request.body);
    var result = await toDo.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/todo", async (request, response) => {
  try {
    const result = await toDoList.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/todo/:id", async (request, response) => {
  try {
    let targetToDo = request.params.id;
    const result = await toDoList.find({ id: targetToDo }).exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put("/todo/:id", async (request, response) => {
  try {
    let result = await toDoList.find({ id: request.params.id }).exec();
    let statut = !result[0].todo;
    let filter = { id: request.params.id };
    let update = { todo: statut };
    let doc = await toDoList.findOneAndUpdate(filter, update, { new: true });
    response.send(doc);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.listen(8081, () => {
  console.log("http://localhost:8081/");
  console.log("!==> Success <==! all is good");
});
