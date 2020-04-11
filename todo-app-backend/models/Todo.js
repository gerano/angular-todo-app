const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectIdSchema = Schema.ObjectId;

// Define collection and schema for my Todos
let Todo = new Schema({
  todoId: {
    type: Number
  },
  title: {
    type: String
  },
  complete: {
    type: Boolean
  }
},{
    collection: 'todos'
}, { _id: true });

/*Todo.index({
  todoId: 1,
}, {
  unique: true,
});*/

module.exports = mongoose.model('Todo', Todo);