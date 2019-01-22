import { Component, OnInit } from '@angular/core';
import {MyTodoDataService} from '../my-todo-data.service'
import {RemoveMyTodoComponent} from '../remove-my-todo/remove-my-todo.component';
import { MyTodo } from '../my-todo';

@Component({
  selector: 'app-outline-my-todos',
  templateUrl: './outline-my-todos.component.html',
  styleUrls: ['./outline-my-todos.component.sass'],
})
export class OutlineMyTodosComponent implements OnInit {
  //Contructor injection of Service Class
  constructor(private myTodoDataService: MyTodoDataService) { 
  }

  ngOnInit() {
  }
  
  get myTodos() {
    console.log('ALL TODOS: ' + JSON.stringify(this.myTodoDataService.getAll()));
    return this.myTodoDataService.getAll();
  }

  toggleComplete(myTodo: MyTodo) {
    this.myTodoDataService.toggleComplete(myTodo);

  }
}
