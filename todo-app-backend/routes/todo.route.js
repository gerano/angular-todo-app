const express = require('express');
const app = express();
const todoRoutes = express.Router();

// Require the model
let Todo = require('../models/Todo');

// POST Route to initially store a Todo
todoRoutes.route('/').post(function (req, res) {
  let todo = new Todo({todoId: req.body.todoId, title: req.body.title, complete: req.body.complete});
  todo.save()
    .then(todo => {
      res.status(201).json({'Todo': 'Added successfully!'});
    })
    .catch(err => {
    res.status(400).send("Unable to save to database");
    });
});

// GET route to find all Todos
todoRoutes.route('/').get(function (req, res) {
    Todo.find(function (err, todos){
    if(err){
      console.log(err);
    }
    else {
      res.json(todos);
    }
  });
});

// GET by id
todoRoutes.route('/:id').get(function (req, res) {
  let id = req.params.id;
  Todo.findOne({todoId: id}, function (err, todo){
      if(err) {
		res.status(404).json("Unable to find Todo");
      }
	  res.status(200).json(todo);
  });
});

// PUT by id
todoRoutes.route('/:id').put(function (req, res) {
	
	res.set('Content-Type', 'application/json');
	
	let updatedMyTodo = {complete:req.body.complete};
	
	if (req.body.title) {
		Object.assign(updatedMyTodo, {title: req.body.title});
	}
	
	Todo.updateOne({todoId: req.params.id}, { $set: updatedMyTodo}).then(() => {
      	res.status(204).json('Update complete');
    })
    .catch(err => {
    	res.status(400).json("Unable to update the database");
    });
});

// DELETE by id
todoRoutes.route('/:id').delete(function (req, res) {
	
	res.set('Content-Type', 'application/json');
	
    Todo.deleteOne({
		todoId: req.params.id
	}).then(() => {
      	res.status(204).json('Successfully removed');
    })
    .catch(err => {
    	res.status(400).json('Unable to delete. The error ' + err);
    });;
});

module.exports = todoRoutes;