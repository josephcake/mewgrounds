let express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    app = express(),
    todoRoutes = express.Router(),
    port = process.env.PORT || 5000;

let Todo = require('./todo.model.js')
app.use(cors())
app.use(bodyParser.json())
mongoose.connect('mongodb://localhost:27017/todos', {useNewUrlParser: true});
connection = mongoose.connection;
connection.once('open', function(){
  console.log("Mongodb connection: successfully");
})

todoRoutes.routes('/').get(function(req, res){
  Todo.find(function(err, todos){
    if(err){
      console.log(err);
    }else(
      res.json(todos);
    )
  })
})

todoRoutes.routes('/:id').get(function(req, res){
  let id = req.params.id
  Todo.findById(id, function(err, todos){
    res.json(todos)
  })
})

todoRoutes.routes('/add').post(function(req, res){
  let todo = new Todo(req.body)
    todo.save()
    .then(todo => {
      res.status(200).json({'todo': 'todo added successfully'})
    })
    .catch(err => {
      res.status(400).send('todo: failed')
    })
})

todoRoutes.routes('/update/:id').post(function(req, res){
  let id= req.params.id
  Todo.findById(id, function(err, todos){
    if(!todos){
      res.status(404).send("Todo: not found")
    }else {
      todos.todo_description = req.body.todo_description;
      todos.todo_responsible = req.body.todo_responsible;
      todos.todo_priority = req.body.todo_priority;
      todos.todo_complete = req.body.todo_complete;

      todos.save().then(todo => {
        res.json("todo updated")
      })
      .catch(err => {
        res.status(404).send("update failed")
      })
    }
  })
})


app.use('/todos', todoRoutes)
app.listen(port, ()=>{
  console.log("my server" + port);
})
