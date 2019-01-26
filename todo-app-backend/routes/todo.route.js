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
	
	Todo.updateOne({todoId: req.params.id}, { $set: {title: req.body.title, complete:req.body.complete}}, 
	function(err, todo){
		if (err) {
			res.status(400).json("Unable to update the database");
		}
		res.status(204).json('Update complete');
	}).then(todo => {
      	res.status(204).json('Update complete');
    })
    .catch(err => {
    	res.status(400).json("Unable to update the database");
    });
});

// DELETE by id
todoRoutes.route('/:id').get(function (req, res) {
    Todo.remove({
		todoId: req.params.id
	}, function(err, business) {
        if(err) {
			res.json(err);
		}
        else {
			res.json('Successfully removed');
		}
    });
});

module.exports = todoRoutes;