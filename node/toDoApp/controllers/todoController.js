var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://test:kornel15@ds119734.mlab.com:19734/todo');

//create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);

// var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'third thing'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
  app.get('/todo', function(req, res){
    // get data from monDb and pass it to view
    Todo.find({}, function(err, data){
      if(err) throw err;
      res.render('todo', {todos: data});
    });
  });

  app.post('/todo', urlencodedParser, function(req, res){
    //get data from the view and add it to mongodb
    var newTodo = Todo(req.body).save(function(err, data){
      if(err) throw err;
      res.json(data);
    });
  });

  app.delete('/todo/:item', function(req, res){
    //delete the requsted item from monDb
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
      if(err) throw err;
      res.json(data)
    });
  });
};
